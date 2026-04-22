import { NextRequest, NextResponse } from 'next/server';
import {
  createMeeting,
  updateMeetingStatus,
  updateAttendeeDelivery,
  appendAudit,
  ConflictError,
} from '../../../../lib/meetings-store';
import { buildMeetingIcsEvent, type MeetingCalendarBooking } from '../../../../lib/calendar';
import { sendMeetingInvites } from '../../../../lib/mailer';
import { localToUtc, addMinutes } from '../../../../lib/timezone';

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const {
    title,
    purpose,
    description,
    attendees,
    start_time,
    timezone,
    duration_minutes,
    location,
    meeting_link,
  } = body as Record<string, unknown>;

  // ── Validation ────────────────────────────────────────────────────────────
  if (!title || typeof title !== 'string') {
    return NextResponse.json({ error: 'title is required' }, { status: 400 });
  }
  if (!purpose || typeof purpose !== 'string') {
    return NextResponse.json({ error: 'purpose is required' }, { status: 400 });
  }
  if (!start_time || typeof start_time !== 'string') {
    return NextResponse.json({ error: 'start_time is required' }, { status: 400 });
  }
  if (!timezone || typeof timezone !== 'string') {
    return NextResponse.json({ error: 'timezone is required' }, { status: 400 });
  }
  if (!duration_minutes || typeof duration_minutes !== 'number' || duration_minutes <= 0) {
    return NextResponse.json({ error: 'duration_minutes must be a positive number' }, { status: 400 });
  }
  if (!Array.isArray(attendees) || attendees.length === 0) {
    return NextResponse.json({ error: 'At least one attendee is required' }, { status: 400 });
  }

  const attendeeList = attendees as Array<{ name?: unknown; email?: unknown; role?: unknown }>;
  for (const a of attendeeList) {
    if (!a.email || typeof a.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email)) {
      return NextResponse.json({ error: `Invalid or missing email for attendee: ${JSON.stringify(a)}` }, { status: 400 });
    }
    if (!a.name || typeof a.name !== 'string') {
      return NextResponse.json({ error: `Missing name for attendee: ${a.email}` }, { status: 400 });
    }
  }

  // Check for duplicate emails
  const emails = attendeeList.map((a) => (a.email as string).toLowerCase());
  if (new Set(emails).size !== emails.length) {
    return NextResponse.json({ error: 'Duplicate attendee emails detected' }, { status: 400 });
  }

  // ── Time conversion ───────────────────────────────────────────────────────
  let startUtc: Date;
  try {
    startUtc = localToUtc(start_time as string, timezone as string);
  } catch {
    return NextResponse.json({ error: 'Invalid start_time or timezone' }, { status: 400 });
  }
  const endUtc = addMinutes(startUtc, duration_minutes as number);
  const startUtcStr = startUtc.toISOString();
  const endUtcStr = endUtc.toISOString();

  // ── Create meeting ────────────────────────────────────────────────────────
  let bundle;
  try {
    bundle = await createMeeting({
      title: title as string,
      purpose: purpose as string,
      description: description as string | undefined,
      start_time_utc: startUtcStr,
      end_time_utc: endUtcStr,
      timezone: timezone as string,
      attendees: attendeeList.map((a) => ({
        name: a.name as string,
        email: a.email as string,
        role: (a.role as 'required' | 'optional' | undefined) ?? 'required',
      })),
      meeting_link: meeting_link as string | undefined,
      location: location as string | undefined,
    });
  } catch (err) {
    if (err instanceof ConflictError) {
      return NextResponse.json({ error: err.message }, { status: 409 });
    }
    console.error('[meetings/create] store error', err);
    return NextResponse.json({ error: 'Failed to create meeting' }, { status: 500 });
  }

  const { meeting } = bundle;

  // ── Generate ICS ──────────────────────────────────────────────────────────
  const uidDomain = process.env.BOOKING_UID_DOMAIN ?? 'novendor.local';
  const organizerName = process.env.BOOKING_ORGANIZER_NAME ?? 'NoVendor';
  const organizerEmail =
    process.env.BOOKING_ORGANIZER_EMAIL ?? process.env.SMTP_FROM ?? 'noreply@novendor.ai';

  const calBooking: MeetingCalendarBooking = {
    id: meeting.id,
    title: meeting.title,
    purpose: meeting.purpose,
    description: meeting.description || undefined,
    attendees: bundle.attendees.map((a) => ({ name: a.name, email: a.email, role: a.role })),
    joinLink: meeting.meeting_link,
    location: meeting.location,
    sequence: meeting.sequence,
  };

  const icsText = buildMeetingIcsEvent(
    calBooking,
    { startUtc: startUtcStr, endUtc: endUtcStr },
    { uidDomain, organizerName, organizerEmail },
    'REQUEST'
  );

  // ── Send invites ──────────────────────────────────────────────────────────
  let deliveryResults;
  try {
    deliveryResults = await sendMeetingInvites(meeting, bundle.attendees, icsText, 'REQUEST');
  } catch (err) {
    console.error('[meetings/create] email error', err);
    deliveryResults = bundle.attendees
      .filter((a) => a.role !== 'organizer')
      .map((a) => ({ email: a.email, delivery_status: 'failed' as const }));
  }

  // ── Update delivery status + meeting status ───────────────────────────────
  const allSent = deliveryResults.every((r) => r.delivery_status === 'sent');
  const newStatus = allSent ? 'sent' : 'scheduled';

  await updateMeetingStatus(meeting.id, newStatus);
  for (const result of deliveryResults) {
    await updateAttendeeDelivery(meeting.id, result.email, result.delivery_status);
  }
  await appendAudit(meeting.id, 'invite_sent', { delivery_results: deliveryResults }, 'system');

  // ── Return ────────────────────────────────────────────────────────────────
  const updated = { ...meeting, status: newStatus };
  return NextResponse.json(
    { meeting: updated, attendees: bundle.attendees, status: newStatus },
    { status: 201 }
  );
}
