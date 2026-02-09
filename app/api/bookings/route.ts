import crypto from 'crypto';
import { NextResponse } from 'next/server';
import { buildGoogleCalendarUrl, buildIcsEvent, buildOutlookCalendarUrl, hashIcsContent } from '../../../lib/calendar';
import type { BookingRecord } from '../../../lib/booking-store';
import { createBooking } from '../../../lib/booking-store';
import { sendBookingEmails } from '../../../lib/mailer';

type CreateBookingRequest = {
  attendeeName: string;
  attendeeEmail: string;
  attendeeCompany?: string;
  agenda: string;
  startUtc: string;
  durationMinutes?: number;
  timezone?: string;
};

function clampDuration(value: number): number {
  if (Number.isNaN(value)) {
    return 30;
  }
  return Math.min(180, Math.max(15, Math.round(value)));
}

function buildBookingId(): string {
  const stamp = Date.now().toString(36);
  const random = crypto.randomBytes(4).toString('hex');
  return `bk_${stamp}_${random}`;
}

function getUidDomain(): string {
  const explicit = process.env.BOOKING_UID_DOMAIN;
  if (explicit) {
    return explicit;
  }
  const organizerEmail = process.env.BOOKING_ORGANIZER_EMAIL;
  if (organizerEmail?.includes('@')) {
    return organizerEmail.split('@')[1];
  }
  return 'novendor.local';
}

function getOrganizerName(): string {
  return process.env.BOOKING_ORGANIZER_NAME ?? 'NoVendor';
}

function getOrganizerEmail(): string {
  return process.env.BOOKING_ORGANIZER_EMAIL ?? process.env.SMTP_FROM ?? 'no-reply@novendor.local';
}

function getJoinLink(bookingId: string): string {
  if (process.env.BOOKING_JOIN_LINK) {
    return process.env.BOOKING_JOIN_LINK;
  }
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  return `${site.replace(/\/$/, '')}/contact?booking=${bookingId}`;
}

export async function POST(request: Request) {
  let payload: CreateBookingRequest;

  try {
    payload = (await request.json()) as CreateBookingRequest;
  } catch {
    return NextResponse.json({ error: 'Invalid booking payload.' }, { status: 400 });
  }

  const attendeeName = payload.attendeeName?.trim();
  const attendeeEmail = payload.attendeeEmail?.trim();
  const agenda = payload.agenda?.trim();
  const attendeeCompany = payload.attendeeCompany?.trim();

  if (!attendeeName || !attendeeEmail || !agenda || !payload.startUtc) {
    return NextResponse.json({ error: 'Name, email, agenda, and meeting start are required.' }, { status: 400 });
  }

  const startDate = new Date(payload.startUtc);
  if (Number.isNaN(startDate.getTime())) {
    return NextResponse.json({ error: 'Invalid start time.' }, { status: 400 });
  }

  const durationMinutes = clampDuration(payload.durationMinutes ?? 30);
  const endDate = new Date(startDate.getTime() + durationMinutes * 60_000);
  const bookingId = buildBookingId();
  const summary = process.env.BOOKING_SUMMARY ?? 'NoVendor Meeting';
  const location = process.env.BOOKING_LOCATION ?? 'Online';
  const joinLink = getJoinLink(bookingId);
  const sequence = 0;

  const calendarBooking = {
    id: bookingId,
    attendeeName,
    attendeeEmail,
    agenda,
    joinLink,
    location,
    summary,
    sequence
  };

  const slot = {
    startUtc: startDate.toISOString(),
    endUtc: endDate.toISOString()
  };

  const icsText = buildIcsEvent(calendarBooking, slot, {
    uidDomain: getUidDomain(),
    organizerName: getOrganizerName(),
    organizerEmail: getOrganizerEmail()
  });
  const icsHash = hashIcsContent(icsText);
  const uid = `${bookingId}@${getUidDomain()}`;
  const googleCalendarUrl = buildGoogleCalendarUrl(calendarBooking, slot);
  const outlookCalendarUrl = buildOutlookCalendarUrl(calendarBooking, slot);
  const timestamp = new Date().toISOString();

  const record: BookingRecord = {
    id: bookingId,
    attendeeName,
    attendeeEmail,
    attendeeCompany,
    agenda,
    timezone: payload.timezone ?? 'UTC',
    startUtc: slot.startUtc,
    endUtc: slot.endUtc,
    location,
    joinLink,
    summary,
    sequence,
    uid,
    icsText,
    icsHash,
    googleCalendarUrl,
    outlookCalendarUrl,
    createdAt: timestamp,
    updatedAt: timestamp
  };

  createBooking(record);
  const deliveryMode = await sendBookingEmails(record);

  return NextResponse.json({
    bookingId: record.id,
    startUtc: record.startUtc,
    endUtc: record.endUtc,
    timezone: record.timezone,
    deliveryMode,
    calendar: {
      downloadIcsUrl: `/api/bookings/${record.id}/ics/`,
      googleCalendarUrl: record.googleCalendarUrl,
      outlookCalendarUrl: record.outlookCalendarUrl
    }
  });
}
