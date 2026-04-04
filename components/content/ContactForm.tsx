'use client';

import { MeetingSchedulerDrawer } from '../meeting/MeetingSchedulerDrawer';

export type ContactFormProps = {
  defaultIndustry?: string;
};

export function ContactForm({ defaultIndustry }: ContactFormProps) {
  return <MeetingSchedulerDrawer defaultIndustry={defaultIndustry} />;
}
