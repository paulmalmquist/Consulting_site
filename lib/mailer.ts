import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import type { BookingRecord } from './booking-store';

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
