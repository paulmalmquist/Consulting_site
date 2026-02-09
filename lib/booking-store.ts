import fs from 'fs';
import path from 'path';

export type BookingRecord = {
  id: string;
  attendeeName: string;
  attendeeEmail: string;
  attendeeCompany?: string;
  agenda: string;
  timezone: string;
  startUtc: string;
  endUtc: string;
  location: string;
  joinLink?: string;
  summary: string;
  sequence: number;
  uid: string;
  icsText: string;
  icsHash: string;
  googleCalendarUrl: string;
  outlookCalendarUrl: string;
  createdAt: string;
  updatedAt: string;
};

const STORE_DIR = path.join(process.cwd(), '.data');
const STORE_FILE = path.join(STORE_DIR, 'bookings.json');

function ensureStore(): void {
  if (!fs.existsSync(STORE_DIR)) {
    fs.mkdirSync(STORE_DIR, { recursive: true });
  }
  if (!fs.existsSync(STORE_FILE)) {
    fs.writeFileSync(STORE_FILE, '[]\n', 'utf8');
  }
}

function readStore(): BookingRecord[] {
  ensureStore();
  const raw = fs.readFileSync(STORE_FILE, 'utf8');
  const parsed = JSON.parse(raw) as BookingRecord[];
  return Array.isArray(parsed) ? parsed : [];
}

function writeStore(records: BookingRecord[]): void {
  ensureStore();
  const tmpFile = `${STORE_FILE}.tmp`;
  fs.writeFileSync(tmpFile, `${JSON.stringify(records, null, 2)}\n`, 'utf8');
  fs.renameSync(tmpFile, STORE_FILE);
}

export function createBooking(record: BookingRecord): BookingRecord {
  const records = readStore();
  records.push(record);
  writeStore(records);
  return record;
}

export function getBookingById(id: string): BookingRecord | null {
  const records = readStore();
  return records.find((record) => record.id === id) ?? null;
}

export function updateBookingById(
  id: string,
  updater: (current: BookingRecord) => BookingRecord
): BookingRecord | null {
  const records = readStore();
  const index = records.findIndex((record) => record.id === id);
  if (index === -1) {
    return null;
  }

  const updated = updater(records[index]);
  records[index] = {
    ...updated,
    id: records[index].id
  };
  writeStore(records);
  return records[index];
}
