import { NextRequest, NextResponse } from 'next/server';
import {
  getMeetingById,
  rescheduleMeeting,
  updateMeetingStatus,
  updateAttendeeDelivery,
  appendAudit,
  ConflictError,
} from '../../../../../lib/meetings-store';
import { buildMeetingIcsEvent, type MeetingCalendarBooking } from '../../../../../lib/calendar';
import { sendMeetingInvites } from '../../../../../lib/mailer';
import { localToUtc, addMinutes } from '../../../../../lib/timezone';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { new_start_time, timezone, duration_minutes } = body as Record<string, unknown>;

  if (!new_start_time || typeof new_start_time !== 'string') {
    return NextResponse.json({ error: 'new_start_time is required' }, { status: 400 });
  }
  if (!timezone || typeof timezone !== 'string') {
    return NextResponse.json({ error: 'timezone is required' }, { status: 400 });
  }

  // Load existing meeting
  const existing = getMeetingById(id);
  if (!existing) {
    return NextResponse.json({ error: 'Meeting not found' }, { status: 404 });
  }
  if (existing.meeting.status === 'canceled') {
    return NextResponse.json({ error: 'Cannot reschedule a canceled meeting' }, { status: 409 });
  }

  // Time conversion
  let newStart: Date;
  try {
    newStart = localToUtc(new_start_time, timezone);
  } catch {
    return NextResponse.json({ error: 'Invalid new_start_time or timezone' }, { status: 400 });
  }

  // Use provided duration or keep original duration
  let durationMs: number;
  if (typeof duration_minutes === 'number' && duration_minutes > 0) {
    durationMs = duration_minutes * 60 * 1000;
  } else {
    const origStart = new Date(existing.meeting.start_time_utc).getTime();
    const origEnd = new Date(existing.meeting.end_time_utc).getTime();
    durationMs = origEnd - origStart;
  }

  const newEnd = new Date(newStart.getTime() + durationMs);
  const newStartStr = newStart.toISOString();
  const newEndStr = newEnd.toISOString();

  // Reschedule in store (includes availability check)
  let bundle;
  try {
    bundle = await rescheduleMeeting(id, newStartStr, newEndStr, timezone);
  } catch (err) {
    if (err instanceof ConflictError) {
      return NextResponse.json({ error: err.message }, { status: 409 });
    }
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to reschedule meeting' }, { status: 500 });
  }

  if (!bundle) {
    return NextResponse.json({ error: 'Meeting not found' }, { status: 404 });
  }

  const { meeting } = bundle;

  // Generate updated ICS (same UID, bumped SEQUENCE)
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
    { startUtc: newStartStr, endUtc: newEndStr },
    { uidDomain, organizerName, organizerEmail },
    'REQUEST'
  );

  // Send update invites
  let deliveryResults;
  try {
    deliveryResults = await sendMeetingInvites(meeting, bundle.attendees, icsText, 'REQUEST', true);
  } catch (err) {
    console.error('[meetings/reschedule] email error', err);
    deliveryResults = bundle.attendees
      .filter((a) => a.role !== 'organizer')
      .map((a) => ({ email: a.email, delivery_status: 'failed' as const }));
  }

  // Update delivery status
  const allSent = deliveryResults.every((r) => r.delivery_status === 'sent');
  const newStatus = allSent ? 'sent' : 'scheduled';
  await updateMeetingStatus(meeting.id, newStatus);
  for (const result of deliveryResults) {
    await updateAttendeeDelivery(meeting.id, result.email, result.delivery_status);
  }
  await appendAudit(meeting.id, 'invite_sent', { delivery_results: deliveryResults, is_reschedule: true }, 'system');

  const updated = { ...meeting, status: newStatus };
  return NextResponse.json({ meeting: updated, attendees: bundle.attendees, status: newStatus });
}
