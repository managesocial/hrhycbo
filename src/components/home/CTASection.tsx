'use client';

import { IconHeartHandshake } from '@tabler/icons-react';

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep-river text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <blockquote className="font-heading text-xl sm:text-2xl lg:text-3xl font-medium italic leading-relaxed text-slate-100">
          &ldquo;Every river begins as a small stream, and every stream is carried by hope. Together, like many streams becoming a mighty river, we will flow toward a horizon of hope.&rdquo;
        </blockquote>

        <p className="text-sm sm:text-base font-semibold text-sunrise-orange tracking-wide uppercase">
          — Ronoh Hamleyz Dan, Chairman, Horizon Rivers of Hope
        </p>

        <div className="pt-6">
          <a
            href="https://www.paypal.com/ncp/payment/PRPA22PX46YBN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-sunrise-orange hover:bg-sunrise-orange/90 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-xl hover:scale-105"
          >
            <IconHeartHandshake size={24} />
            <span>Support Our Cause via PayPal</span>
          </a>
        </div>
      </div>
    </section>
  );
}