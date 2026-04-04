import { NextRequest, NextResponse } from 'next/server';
import {
  getMeetingById,
  cancelMeeting,
  updateAttendeeDelivery,
  appendAudit,
} from '../../../../../lib/meetings-store';
import { buildMeetingIcsEvent, type MeetingCalendarBooking } from '../../../../../lib/calendar';
import { sendMeetingInvites } from '../../../../../lib/mailer';

export async function POST(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const existing = getMeetingById(id);
  if (!existing) {
    return NextResponse.json({ error: 'Meeting not found' }, { status: 404 });
  }
  if (existing.meeting.status === 'canceled') {
    return NextResponse.json({ error: 'Meeting is already canceled' }, { status: 409 });
  }

  // Cancel in store
  let bundle;
  try {
    bundle = await cancelMeeting(id);
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to cancel meeting' }, { status: 500 });
  }

  if (!bundle) {
    return NextResponse.json({ error: 'Meeting not found' }, { status: 404 });
  }

  const { meeting } = bundle;

  // Generate cancellation ICS (METHOD:CANCEL, SEQUENCE bumped)
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
    { startUtc: meeting.start_time_utc, endUtc: meeting.end_time_utc },
    { uidDomain, organizerName, organizerEmail },
    'CANCEL'
  );

  // Send cancellation emails
  let deliveryResults;
  try {
    deliveryResults = await sendMeetingInvites(meeting, bundle.attendees, icsText, 'CANCEL');
  } catch (err) {
    console.error('[meetings/cancel] email error', err);
    deliveryResults = bundle.attendees
      .filter((a) => a.role !== 'organizer')
      .map((a) => ({ email: a.email, delivery_status: 'failed' as const }));
  }

  for (const result of deliveryResults) {
    await updateAttendeeDelivery(meeting.id, result.email, result.delivery_status);
  }
  await appendAudit(meeting.id, 'canceled', { delivery_results: deliveryResults }, 'system');

  return NextResponse.json({ meeting_id: id, status: 'canceled', delivery_results: deliveryResults });
}
