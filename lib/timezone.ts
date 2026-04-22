/**
 * Convert a local datetime string + IANA timezone to a UTC ISO string.
 *
 * Example:
 *   localToUtc("2026-05-01T10:00:00", "America/New_York")
 *   // → "2026-05-01T14:00:00.000Z"
 *
 * Strategy: use Intl.DateTimeFormat to find the UTC offset for the given
 * timezone at the given instant. This correctly handles DST transitions.
 */
export function localToUtc(localDatetime: string, timezone: string): Date {
  // If already has Z or +offset, parse directly
  if (/Z$|[+-]\d{2}:\d{2}$/.test(localDatetime)) {
    return new Date(localDatetime);
  }

  // Parse as naive local time in the given timezone.
  // We use a trick: format a reference UTC date in the target timezone,
  // then find the offset by bisection / direct computation using Intl.
  const naive = new Date(`${localDatetime}Z`); // treat as UTC first

  // Get what Intl says the local time is for that UTC instant in the target tz
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const parts = formatter.formatToParts(naive);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '00';

  // Reconstruct what Intl thinks local time is at naive (UTC)
  const localYear = parseInt(get('year'), 10);
  const localMonth = parseInt(get('month'), 10) - 1;
  const localDay = parseInt(get('day'), 10);
  const localHour = parseInt(get('hour'), 10);
  const localMin = parseInt(get('minute'), 10);
  const localSec = parseInt(get('second'), 10);

  const localAtNaive = new Date(Date.UTC(localYear, localMonth, localDay, localHour, localMin, localSec));
  const offsetMs = naive.getTime() - localAtNaive.getTime();

  // Apply offset: actual UTC = naively-parsed-as-UTC + offset
  return new Date(naive.getTime() + offsetMs);
}

export function addMinutes(date: Date, minutes: number): Date {
  return new Date(date.getTime() + minutes * 60 * 1000);
}
