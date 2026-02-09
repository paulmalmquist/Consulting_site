import { NextResponse } from 'next/server';
import { getBookingById } from '../../../../../lib/booking-store';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const booking = getBookingById(params.id);
  if (!booking) {
    return NextResponse.json({ error: 'Booking not found.' }, { status: 404 });
  }

  return new NextResponse(booking.icsText, {
    status: 200,
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': `attachment; filename="novendor-booking-${booking.id}.ics"`,
      'Cache-Control': 'no-store'
    }
  });
}
