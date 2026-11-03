import { ContactSection } from '@/components/contact/ContactSection';

export const metadata = {
  title: 'Contact Us | Horizon Rivers of Hope Youth CBO',
  description: 'Get in touch with Horizon Rivers of Hope Youth CBO in Eldoret. Send a message, inquire about partnerships, or volunteer.',
};

export default function ContactPage() {
  return (
    <main className="pt-0 pb-16">
      {/* Page Header */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 text-center bg-deep-river text-white overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-sunrise-orange bg-sunrise-orange/10 px-3.5 py-1.5 rounded-full border border-sunrise-orange/30">
            Connect With Us
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
            Contact Horizon Rivers of Hope
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Reach out to our leadership team in Eldoret to discuss partnerships, volunteer involvement, or general inquiries.
          </p>
        </div>
      </section>

      {/* Main Contact Form & Details */}
      <ContactSection />
    </main>
  );
}