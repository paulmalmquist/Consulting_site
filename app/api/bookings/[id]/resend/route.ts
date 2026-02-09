import { NextResponse } from 'next/server';
import { buildGoogleCalendarUrl, buildIcsEvent, buildOutlookCalendarUrl, hashIcsContent } from '../../../../../lib/calendar';
import { getBookingById, updateBookingById } from '../../../../../lib/booking-store';
import { sendBookingEmails } from '../../../../../lib/mailer';

function readAdminToken(request: Request): string {
  const headerToken = request.headers.get('x-admin-token');
  if (headerToken) {
    return headerToken;
  }
  const authHeader = request.headers.get('authorization');
  if (authHeader?.toLowerCase().startsWith('bearer ')) {
    return authHeader.slice(7).trim();
  }
  return '';
}

function getUidDomain(existingUid: string): string {
  const parts = existingUid.split('@');
  return parts.length === 2 ? parts[1] : process.env.BOOKING_UID_DOMAIN ?? 'novendor.local';
}

function organizerName(): string {
  return process.env.BOOKING_ORGANIZER_NAME ?? 'NoVendor';
}

function organizerEmail(): string {
  return process.env.BOOKING_ORGANIZER_EMAIL ?? process.env.SMTP_FROM ?? 'no-reply@novendor.local';
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const configuredToken = process.env.BOOKING_ADMIN_TOKEN;
  if (!configuredToken) {
    return NextResponse.json({ error: 'Admin resend is not configured.' }, { status: 503 });
  }

  const providedToken = readAdminToken(request);
  if (!providedToken || providedToken !== configuredToken) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  const existing = getBookingById(params.id);
  if (!existing) {
    return NextResponse.json({ error: 'Booking not found.' }, { status: 404 });
  }

  const nextSequence = existing.sequence + 1;
  const calendarBooking = {
    id: existing.id,
    attendeeName: existing.attendeeName,
    attendeeEmail: existing.attendeeEmail,
    agenda: existing.agenda,
    joinLink: existing.joinLink,
    location: existing.location,
    summary: existing.summary,
    sequence: nextSequence
  };

  const slot = {
    startUtc: existing.startUtc,
    endUtc: existing.endUtc
  };

  const icsText = buildIcsEvent(calendarBooking, slot, {
    uidDomain: getUidDomain(existing.uid),
    organizerName: organizerName(),
    organizerEmail: organizerEmail(),
    dtstamp: new Date()
  });

  const updated = updateBookingById(existing.id, (record) => ({
    ...record,
    sequence: nextSequence,
    icsText,
    icsHash: hashIcsContent(icsText),
    googleCalendarUrl: buildGoogleCalendarUrl(calendarBooking, slot),
    outlookCalendarUrl: buildOutlookCalendarUrl(calendarBooking, slot),
    updatedAt: new Date().toISOString()
  }));

  if (!updated) {
    return NextResponse.json({ error: 'Booking not found.' }, { status: 404 });
  }

  const deliveryMode = await sendBookingEmails(updated);

  return NextResponse.json({
    ok: true,
    bookingId: updated.id,
    sequence: updated.sequence,
    deliveryMode
  });
}
