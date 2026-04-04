import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import type { BookingRecord } from './booking-store';
import type { MeetingRecord, MeetingAttendee, DeliveryStatus } from './meetings-store';

type Attachment = {
  filename: string;
  content: string;
  contentType: string;
};

type SendMessageInput = {
  to: string;
  subject: string;
  text: string;
  attachments?: Attachment[];
};

type DeliveryMode = 'smtp' | 'outbox';

const OUTBOX_DIR = path.join(process.cwd(), '.data', 'outbox');
let transport: nodemailer.Transporter | null | undefined;

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = (process.env.SMTP_SECURE ?? 'false') === 'true';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;

  if (!host || !from) {
    return null;
  }

  return {
    host,
    port,
    secure,
    from,
    auth: user && pass ? { user, pass } : undefined
  };
}

function getTransport(): nodemailer.Transporter | null {
  if (transport !== undefined) {
    return transport;
  }

  const smtp = getSmtpConfig();
  if (!smtp) {
    transport = null;
    return transport;
  }

  transport = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: smtp.auth
  });
  return transport;
}

function writeOutbox(message: SendMessageInput): void {
  fs.mkdirSync(OUTBOX_DIR, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const safeTo = message.to.replace(/[^a-zA-Z0-9@._-]/g, '_');
  const filePath = path.join(OUTBOX_DIR, `${timestamp}-${safeTo}.json`);
  fs.writeFileSync(filePath, `${JSON.stringify(message, null, 2)}\n`, 'utf8');
}

export async function sendMail(message: SendMessageInput): Promise<DeliveryMode> {
  const smtp = getTransport();
  const smtpConfig = getSmtpConfig();

  if (!smtp || !smtpConfig) {
    writeOutbox(message);
    return 'outbox';
  }

  await smtp.sendMail({
    from: smtpConfig.from,
    to: message.to,
    subject: message.subject,
    text: message.text,
    attachments: message.attachments
  });
  return 'smtp';
}

function attendeeMessage(record: BookingRecord): string {
  const lines = [
    'Your booking is confirmed.',
    '',
    `When (UTC): ${record.startUtc} to ${record.endUtc}`,
    `Location: ${record.location}`
  ];

  if (record.joinLink) {
    lines.push(`Join link: ${record.joinLink}`);
  }

  lines.push('');
  lines.push(`Add to Google Calendar: ${record.googleCalendarUrl}`);
  lines.push(`Add to Outlook: ${record.outlookCalendarUrl}`);
  lines.push('');
  lines.push('If links do not open correctly, open the attached calendar file.');
  return lines.join('\n');
}

function internalMessage(record: BookingRecord): string {
  const lines = [
    'New booking received.',
    '',
    `Name: ${record.attendeeName}`,
    `Email: ${record.attendeeEmail}`
  ];

  if (record.attendeeCompany) {
    lines.push(`Company: ${record.attendeeCompany}`);
  }

  lines.push(`Agenda: ${record.agenda}`);
  lines.push(`When (UTC): ${record.startUtc} to ${record.endUtc}`);
  if (record.joinLink) {
    lines.push(`Join link: ${record.joinLink}`);
  }
  lines.push(`Booking ID: ${record.id}`);
  return lines.join('\n');
}

// ─── Meeting invite sending (full meeting scheduler) ─────────────────────────

type MeetingEmailMethod = 'REQUEST' | 'CANCEL';

type AttendeeDeliveryResult = {
  email: string;
  delivery_status: DeliveryStatus;
};

function meetingAttendeeBody(meeting: MeetingRecord, method: MeetingEmailMethod): string {
  if (method === 'CANCEL') {
    return [
      `Your meeting has been canceled.`,
      '',
      `Title: ${meeting.title}`,
      `Was scheduled: ${meeting.start_time_utc} – ${meeting.end_time_utc} UTC`,
      '',
      'This meeting has been removed from your calendar. Check the attached .ics file to cancel it in your calendar app.',
    ].join('\n');
  }

  const lines = [
    `You have been invited to: ${meeting.title}`,
    '',
    `Purpose: ${meeting.purpose}`,
    meeting.description ? `Details: ${meeting.description}` : null,
    '',
    `When (UTC): ${meeting.start_time_utc} – ${meeting.end_time_utc}`,
    `Timezone: ${meeting.timezone}`,
  ].filter(Boolean) as string[];

  if (meeting.meeting_link) lines.push(`Join link: ${meeting.meeting_link}`);
  if (meeting.location) lines.push(`Location: ${meeting.location}`);

  lines.push('');
  lines.push('The attached .ics file can be opened in Google Calendar, Outlook, or Apple Calendar.');
  return lines.join('\n');
}

function meetingInternalBody(meeting: MeetingRecord, attendees: MeetingAttendee[], method: MeetingEmailMethod): string {
  const action = method === 'CANCEL' ? 'CANCELED' : 'NEW BOOKING';
  const lines = [
    `[${action}] ${meeting.title}`,
    '',
    `Purpose: ${meeting.purpose}`,
    `When (UTC): ${meeting.start_time_utc} – ${meeting.end_time_utc}`,
    `Timezone: ${meeting.timezone}`,
    `Meeting ID: ${meeting.id}`,
    '',
    'Attendees:',
    ...attendees.map((a) => `  • ${a.name} <${a.email}>`),
  ];
  if (meeting.meeting_link) lines.push(`Join link: ${meeting.meeting_link}`);
  return lines.join('\n');
}

function meetingSubject(meeting: MeetingRecord, method: MeetingEmailMethod): string {
  if (method === 'CANCEL') return `Canceled: ${meeting.title}`;
  return `${meeting.title} — calendar invite`;
}

function rescheduleSubject(meeting: MeetingRecord): string {
  return `Updated: ${meeting.title} — new time`;
}

/**
 * Sends per-attendee meeting invites (or cancellations) with ICS attachment.
 * Returns delivery results for each non-organizer attendee.
 */
export async function sendMeetingInvites(
  meeting: MeetingRecord,
  attendees: MeetingAttendee[],
  icsText: string,
  method: MeetingEmailMethod,
  isReschedule = false
): Promise<AttendeeDeliveryResult[]> {
  const icsFilename = `winston-meeting-${meeting.id}.ics`;
  const icsContentType = `text/calendar; method=${method}; charset=UTF-8`;

  const attachment = {
    filename: icsFilename,
    content: icsText,
    contentType: icsContentType,
  };

  const subject = isReschedule ? rescheduleSubject(meeting) : meetingSubject(meeting, method);
  const bodyText = meetingAttendeeBody(meeting, method);

  const results: AttendeeDeliveryResult[] = [];

  // Send to each non-organizer attendee
  const inviteTargets = attendees.filter((a) => a.role !== 'organizer');
  for (const attendee of inviteTargets) {
    try {
      await sendMail({ to: attendee.email, subject, text: bodyText, attachments: [attachment] });
      results.push({ email: attendee.email, delivery_status: 'sent' });
    } catch {
      results.push({ email: attendee.email, delivery_status: 'failed' });
    }
  }

  // Internal notification
  const internalRecipient = process.env.BOOKING_INTERNAL_EMAIL ?? process.env.BOOKING_ORGANIZER_EMAIL ?? '';
  if (internalRecipient) {
    const internalText = meetingInternalBody(meeting, inviteTargets, method);
    await sendMail({
      to: internalRecipient,
      subject: `[Winston] ${subject}`,
      text: internalText,
      attachments: [attachment],
    }).catch(() => {/* internal notification failure is non-fatal */});
  }

  return results;
}

export async function sendBookingEmails(record: BookingRecord): Promise<DeliveryMode> {
  const attachment = {
    filename: `novendor-booking-${record.id}.ics`,
    content: record.icsText,
    contentType: 'text/calendar; method=REQUEST; charset=UTF-8'
  };

  const internalRecipient = process.env.BOOKING_INTERNAL_EMAIL ?? process.env.BOOKING_ORGANIZER_EMAIL ?? '';
  const attendeeMode = await sendMail({
    to: record.attendeeEmail,
    subject: `${record.summary} — calendar invite`,
    text: attendeeMessage(record),
    attachments: [attachment]
  });

  if (internalRecipient) {
    await sendMail({
      to: internalRecipient,
      subject: `New booking: ${record.attendeeName}`,
      text: internalMessage(record),
      attachments: [attachment]
    });
  }

  return attendeeMode;
}
