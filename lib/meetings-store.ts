import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

// ─── Enums ────────────────────────────────────────────────────────────────────

export type MeetingStatus =
  | 'draft'
  | 'scheduled'
  | 'sent'
  | 'confirmed'
  | 'completed'
  | 'canceled'
  | 'no_show';

export type SyncStatus = 'not_synced' | 'pending' | 'synced' | 'failed';
export type ExternalProvider = 'google' | 'microsoft';

export type AttendeeRole = 'organizer' | 'required' | 'optional';
export type RsvpStatus = 'pending' | 'accepted' | 'declined' | 'tentative';
export type DeliveryStatus = 'pending' | 'sent' | 'failed';

export type AuditAction =
  | 'created'
  | 'updated'
  | 'rescheduled'
  | 'canceled'
  | 'invite_sent'
  | 'sync_attempt'
  | 'sync_failed';

// ─── Core types (mirror Postgres schema 1:1) ──────────────────────────────────

export type MeetingRecord = {
  id: string;
  environment_id: string;
  organizer_user_id: string;
  created_by_user_id: string;
  acting_on_behalf_of_user_id?: string;
  title: string;
  description: string;
  purpose: string;
  status: MeetingStatus;
  start_time_utc: string;   // ISO 8601 UTC
  end_time_utc: string;     // ISO 8601 UTC
  timezone: string;          // IANA timezone string e.g. "America/New_York"
  meeting_link?: string;
  location?: string;
  external_event_id?: string;
  external_provider?: ExternalProvider;
  sync_status: SyncStatus;
  last_synced_at?: string;
  sequence: number;          // iCalendar SEQUENCE counter
  created_at: string;
  updated_at: string;
};

export type MeetingAttendee = {
  id: string;
  meeting_id: string;
  contact_id?: string;
  email: string;
  name: string;
  role: AttendeeRole;
  rsvp_status: RsvpStatus;
  delivery_status: DeliveryStatus;
  last_delivery_attempt_at?: string;
  created_at: string;
};

export type AuditEntry = {
  id: string;
  meeting_id: string;
  action: AuditAction;
  payload_json: Record<string, unknown>;
  created_by: string;
  created_at: string;
};

export type MeetingBundle = {
  meeting: MeetingRecord;
  attendees: MeetingAttendee[];
  audit: AuditEntry[];
};

// ─── Store setup ─────────────────────────────────────────────────────────────

const STORE_DIR = path.join(process.cwd(), '.data');
const STORE_FILE = path.join(STORE_DIR, 'meetings.json');

function ensureStore(): void {
  if (!fs.existsSync(STORE_DIR)) {
    fs.mkdirSync(STORE_DIR, { recursive: true });
  }
  if (!fs.existsSync(STORE_FILE)) {
    fs.writeFileSync(STORE_FILE, '[]\n', 'utf8');
  }
}

function readStore(): MeetingBundle[] {
  ensureStore();
  const raw = fs.readFileSync(STORE_FILE, 'utf8');
  const parsed = JSON.parse(raw);
  return Array.isArray(parsed) ? parsed : [];
}

function writeStore(bundles: MeetingBundle[]): void {
  ensureStore();
  const tmp = `${STORE_FILE}.tmp`;
  fs.writeFileSync(tmp, `${JSON.stringify(bundles, null, 2)}\n`, 'utf8');
  fs.renameSync(tmp, STORE_FILE);
}

// ─── Simple in-process mutex to prevent race conditions ───────────────────────

let _locked = false;
const _queue: Array<() => void> = [];

function acquireLock(): Promise<void> {
  return new Promise((resolve) => {
    if (!_locked) {
      _locked = true;
      resolve();
    } else {
      _queue.push(resolve);
    }
  });
}

function releaseLock(): void {
  const next = _queue.shift();
  if (next) {
    next();
  } else {
    _locked = false;
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function newId(prefix: string): string {
  return `${prefix}_${crypto.randomBytes(6).toString('hex')}`;
}

function now(): string {
  return new Date().toISOString();
}

// ─── Availability check ───────────────────────────────────────────────────────

/**
 * Returns the first conflicting non-canceled meeting, or null if the slot is free.
 */
export function checkAvailability(
  startUtc: string,
  endUtc: string,
  excludeId?: string
): MeetingRecord | null {
  const bundles = readStore();
  const newStart = new Date(startUtc).getTime();
  const newEnd = new Date(endUtc).getTime();

  for (const { meeting } of bundles) {
    if (meeting.status === 'canceled') continue;
    if (excludeId && meeting.id === excludeId) continue;

    const existStart = new Date(meeting.start_time_utc).getTime();
    const existEnd = new Date(meeting.end_time_utc).getTime();

    // Overlap: existing starts before new ends AND existing ends after new starts
    if (existStart < newEnd && existEnd > newStart) {
      return meeting;
    }
  }
  return null;
}

// ─── Working hours gate ───────────────────────────────────────────────────────

/**
 * Returns true if the slot falls within configured working hours (UTC, Mon–Fri).
 */
export function isWithinWorkingHours(startUtc: string, endUtc: string): boolean {
  const start = new Date(startUtc);
  const end = new Date(endUtc);

  const startHour = parseInt(process.env.NEXT_PUBLIC_WORKING_HOURS_START ?? '9', 10);
  const endHour = parseInt(process.env.NEXT_PUBLIC_WORKING_HOURS_END ?? '17', 10);

  const dayOfWeek = start.getUTCDay(); // 0=Sun, 6=Sat
  if (dayOfWeek === 0 || dayOfWeek === 6) return false;

  const startH = start.getUTCHours() + start.getUTCMinutes() / 60;
  const endH = end.getUTCHours() + end.getUTCMinutes() / 60;

  return startH >= startHour && endH <= endHour;
}

// ─── CRUD ─────────────────────────────────────────────────────────────────────

export type CreateMeetingInput = {
  title: string;
  purpose: string;
  description?: string;
  start_time_utc: string;
  end_time_utc: string;
  timezone: string;
  attendees: Array<{ name: string; email: string; role?: AttendeeRole; contact_id?: string }>;
  meeting_link?: string;
  location?: string;
  environment_id?: string;
  organizer_user_id?: string;
  created_by_user_id?: string;
};

export async function createMeeting(input: CreateMeetingInput): Promise<MeetingBundle> {
  await acquireLock();
  try {
    const conflict = checkAvailability(input.start_time_utc, input.end_time_utc);
    if (conflict) {
      throw new ConflictError(`Time slot no longer available (conflicts with: ${conflict.title})`);
    }

    const meetingId = newId('mtg');
    const ts = now();

    const meeting: MeetingRecord = {
      id: meetingId,
      environment_id: input.environment_id ?? 'default',
      organizer_user_id: input.organizer_user_id ?? 'organizer',
      created_by_user_id: input.created_by_user_id ?? 'system',
      title: input.title,
      description: input.description ?? '',
      purpose: input.purpose,
      status: 'draft',
      start_time_utc: input.start_time_utc,
      end_time_utc: input.end_time_utc,
      timezone: input.timezone,
      meeting_link: input.meeting_link ?? process.env.BOOKING_MEETING_LINK,
      location: input.location,
      sync_status: 'not_synced',
      sequence: 0,
      created_at: ts,
      updated_at: ts,
    };

    const attendees: MeetingAttendee[] = input.attendees.map((a) => ({
      id: newId('att'),
      meeting_id: meetingId,
      contact_id: a.contact_id,
      email: a.email,
      name: a.name,
      role: a.role ?? 'required',
      rsvp_status: 'pending',
      delivery_status: 'pending',
      created_at: ts,
    }));

    const auditEntry: AuditEntry = {
      id: newId('aud'),
      meeting_id: meetingId,
      action: 'created',
      payload_json: { title: input.title, start_time_utc: input.start_time_utc },
      created_by: meeting.created_by_user_id,
      created_at: ts,
    };

    const bundle: MeetingBundle = { meeting, attendees, audit: [auditEntry] };
    const bundles = readStore();
    bundles.push(bundle);
    writeStore(bundles);

    return bundle;
  } finally {
    releaseLock();
  }
}

export function getMeetingById(id: string): MeetingBundle | null {
  const bundles = readStore();
  return bundles.find((b) => b.meeting.id === id) ?? null;
}

export type ListMeetingsFilter = {
  status?: MeetingStatus;
  contact_email?: string;
  upcoming?: boolean;
};

export function listMeetings(filter: ListMeetingsFilter = {}): MeetingBundle[] {
  const bundles = readStore();
  const nowTs = Date.now();

  return bundles.filter(({ meeting, attendees }) => {
    if (filter.status && meeting.status !== filter.status) return false;

    if (filter.upcoming !== undefined) {
      const start = new Date(meeting.start_time_utc).getTime();
      if (filter.upcoming && start <= nowTs) return false;
      if (!filter.upcoming && start > nowTs) return false;
    }

    if (filter.contact_email) {
      const found = attendees.some(
        (a) => a.email.toLowerCase() === filter.contact_email!.toLowerCase()
      );
      if (!found) return false;
    }

    return true;
  });
}

export async function updateMeetingStatus(
  id: string,
  status: MeetingStatus
): Promise<MeetingBundle | null> {
  await acquireLock();
  try {
    const bundles = readStore();
    const idx = bundles.findIndex((b) => b.meeting.id === id);
    if (idx === -1) return null;

    bundles[idx].meeting = { ...bundles[idx].meeting, status, updated_at: now() };
    writeStore(bundles);
    return bundles[idx];
  } finally {
    releaseLock();
  }
}

export async function updateAttendeeDelivery(
  meetingId: string,
  email: string,
  delivery_status: DeliveryStatus
): Promise<void> {
  await acquireLock();
  try {
    const bundles = readStore();
    const idx = bundles.findIndex((b) => b.meeting.id === meetingId);
    if (idx === -1) return;

    bundles[idx].attendees = bundles[idx].attendees.map((a) =>
      a.email.toLowerCase() === email.toLowerCase()
        ? { ...a, delivery_status, last_delivery_attempt_at: now() }
        : a
    );
    writeStore(bundles);
  } finally {
    releaseLock();
  }
}

export async function rescheduleMeeting(
  id: string,
  newStartUtc: string,
  newEndUtc: string,
  timezone: string
): Promise<MeetingBundle | null> {
  await acquireLock();
  try {
    const conflict = checkAvailability(newStartUtc, newEndUtc, id);
    if (conflict) {
      throw new ConflictError(`Time slot no longer available (conflicts with: ${conflict.title})`);
    }

    const bundles = readStore();
    const idx = bundles.findIndex((b) => b.meeting.id === id);
    if (idx === -1) return null;

    const current = bundles[idx].meeting;
    if (current.status === 'canceled') {
      throw new Error('Cannot reschedule a canceled meeting.');
    }

    const oldTimes = {
      start_time_utc: current.start_time_utc,
      end_time_utc: current.end_time_utc,
      timezone: current.timezone,
    };

    bundles[idx].meeting = {
      ...current,
      start_time_utc: newStartUtc,
      end_time_utc: newEndUtc,
      timezone,
      status: 'scheduled',
      sequence: current.sequence + 1,
      updated_at: now(),
    };

    const auditEntry: AuditEntry = {
      id: newId('aud'),
      meeting_id: id,
      action: 'rescheduled',
      payload_json: { old: oldTimes, new: { start_time_utc: newStartUtc, end_time_utc: newEndUtc, timezone } },
      created_by: 'system',
      created_at: now(),
    };
    bundles[idx].audit.push(auditEntry);

    writeStore(bundles);
    return bundles[idx];
  } finally {
    releaseLock();
  }
}

export async function cancelMeeting(id: string): Promise<MeetingBundle | null> {
  await acquireLock();
  try {
    const bundles = readStore();
    const idx = bundles.findIndex((b) => b.meeting.id === id);
    if (idx === -1) return null;

    const current = bundles[idx].meeting;
    if (current.status === 'canceled') {
      throw new Error('Meeting is already canceled.');
    }

    bundles[idx].meeting = {
      ...current,
      status: 'canceled',
      sequence: current.sequence + 1,
      updated_at: now(),
    };

    const auditEntry: AuditEntry = {
      id: newId('aud'),
      meeting_id: id,
      action: 'canceled',
      payload_json: { previous_status: current.status },
      created_by: 'system',
      created_at: now(),
    };
    bundles[idx].audit.push(auditEntry);

    writeStore(bundles);
    return bundles[idx];
  } finally {
    releaseLock();
  }
}

export async function appendAudit(
  meetingId: string,
  action: AuditAction,
  payload: Record<string, unknown>,
  createdBy: string
): Promise<void> {
  await acquireLock();
  try {
    const bundles = readStore();
    const idx = bundles.findIndex((b) => b.meeting.id === meetingId);
    if (idx === -1) return;

    const entry: AuditEntry = {
      id: newId('aud'),
      meeting_id: meetingId,
      action,
      payload_json: payload,
      created_by: createdBy,
      created_at: now(),
    };
    bundles[idx].audit.push(entry);
    writeStore(bundles);
  } finally {
    releaseLock();
  }
}

// ─── Errors ───────────────────────────────────────────────────────────────────

export class ConflictError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ConflictError';
  }
}
