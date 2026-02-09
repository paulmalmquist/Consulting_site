import crypto from 'crypto';

export type CalendarBooking = {
  id: string;
  attendeeName: string;
  attendeeEmail: string;
  agenda: string;
  joinLink?: string;
  location: string;
  summary: string;
  sequence: number;
};

export type CalendarSlot = {
  startUtc: string | Date;
  endUtc: string | Date;
};

export type CalendarOptions = {
  uidDomain: string;
  organizerName: string;
  organizerEmail: string;
  productId?: string;
  dtstamp?: Date;
};

function toDate(value: string | Date): Date {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    throw new Error('Invalid date passed to calendar utility.');
  }
  return date;
}

function toUtcTimestamp(value: string | Date): string {
  const date = toDate(value);
  const iso = date.toISOString();
  return iso.replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
}

function escapeIcsText(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/\r?\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;');
}

function escapeIcsParam(value: string): string {
  return value.replace(/([\\;,])/g, '\\$1');
}

function buildDescription(booking: CalendarBooking): string {
  const lines = [
    `Agenda: ${booking.agenda}`,
    `Attendee: ${booking.attendeeName} <${booking.attendeeEmail}>`
  ];

  if (booking.joinLink) {
    lines.push(`Join link: ${booking.joinLink}`);
  }

  lines.push(`Booking ID: ${booking.id}`);
  return lines.join('\n');
}

export function buildIcsEvent(booking: CalendarBooking, slot: CalendarSlot, options: CalendarOptions): string {
  const uid = `${booking.id}@${options.uidDomain}`;
  const dtstamp = toUtcTimestamp(options.dtstamp ?? new Date());
  const dtstart = toUtcTimestamp(slot.startUtc);
  const dtend = toUtcTimestamp(slot.endUtc);
  const productId = options.productId ?? '-//NoVendor//In-Site Booking//EN';
  const description = escapeIcsText(buildDescription(booking));
  const summary = escapeIcsText(booking.summary);
  const location = escapeIcsText(booking.location);
  const organizerName = escapeIcsParam(options.organizerName);
  const attendeeName = escapeIcsParam(booking.attendeeName);

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    `PRODID:${productId}`,
    'CALSCALE:GREGORIAN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART:${dtstart}`,
    `DTEND:${dtend}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    `ORGANIZER;CN=${organizerName}:MAILTO:${options.organizerEmail}`,
    `ATTENDEE;CN=${attendeeName};RSVP=TRUE:MAILTO:${booking.attendeeEmail}`,
    'STATUS:CONFIRMED',
    `SEQUENCE:${booking.sequence}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ];

  return `${lines.join('\r\n')}\r\n`;
}

export function buildGoogleCalendarUrl(booking: CalendarBooking, slot: CalendarSlot): string {
  const detailsLines = [booking.agenda];
  if (booking.joinLink) {
    detailsLines.push(`Join link: ${booking.joinLink}`);
  }

  const url = new URL('https://calendar.google.com/calendar/render');
  url.searchParams.set('action', 'TEMPLATE');
  url.searchParams.set('text', booking.summary);
  url.searchParams.set('details', detailsLines.join('\n'));
  url.searchParams.set('location', booking.location);
  url.searchParams.set('dates', `${toUtcTimestamp(slot.startUtc)}/${toUtcTimestamp(slot.endUtc)}`);
  return url.toString();
}

export function buildOutlookCalendarUrl(booking: CalendarBooking, slot: CalendarSlot): string {
  const detailsLines = [booking.agenda];
  if (booking.joinLink) {
    detailsLines.push(`Join link: ${booking.joinLink}`);
  }

  const start = toDate(slot.startUtc).toISOString().replace(/\.\d{3}Z$/, 'Z');
  const end = toDate(slot.endUtc).toISOString().replace(/\.\d{3}Z$/, 'Z');

  const url = new URL('https://outlook.live.com/calendar/0/deeplink/compose');
  url.searchParams.set('subject', booking.summary);
  url.searchParams.set('body', detailsLines.join('\n'));
  url.searchParams.set('location', booking.location);
  url.searchParams.set('startdt', start);
  url.searchParams.set('enddt', end);
  return url.toString();
}

export function hashIcsContent(icsText: string): string {
  return crypto.createHash('sha256').update(icsText, 'utf8').digest('hex');
}
