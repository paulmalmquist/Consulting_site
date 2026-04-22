import { NextRequest, NextResponse } from 'next/server';
import { listMeetings, type MeetingStatus } from '../../../lib/meetings-store';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const status = searchParams.get('status') as MeetingStatus | null;
  const contact_email = searchParams.get('contact_email') ?? undefined;
  const upcomingParam = searchParams.get('upcoming');
  const upcoming = upcomingParam === null ? undefined : upcomingParam === 'true';

  const bundles = listMeetings({ status: status ?? undefined, contact_email, upcoming });

  return NextResponse.json({
    meetings: bundles.map(({ meeting, attendees }) => ({ meeting, attendees })),
    total: bundles.length,
  });
}
