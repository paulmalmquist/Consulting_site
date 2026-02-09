import { ContactForm } from '../../components/content/ContactForm';

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">Book a meeting.</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          You will receive a calendar invite with Google, Outlook, and ICS options after confirmation.
        </p>
      </section>
      <ContactForm />
    </div>
  );
}
