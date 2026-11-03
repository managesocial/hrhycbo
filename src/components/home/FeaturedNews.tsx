'use client';

import Link from 'next/link';
import { IconCalendar, IconMapPin, IconArrowRight, IconFileText, IconCheck } from '@tabler/icons-react';

export function FeaturedNews() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/70 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-river-teal dark:text-sunrise-orange">
              Policy &amp; Governance Milestone
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-deep-river dark:text-white mt-1">
              Shaping Uasin Gishu&apos;s Waste Future
            </h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-river-teal dark:text-sunrise-orange font-bold text-sm hover:underline"
          >
            <span>View All News &amp; Updates</span>
            <IconArrowRight size={18} />
          </Link>
        </div>

        {/* Feature Container */}
        <div className="p-7 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 bg-river-teal/10 dark:bg-river-teal/30 text-river-teal dark:text-slate-200 px-3 py-1 rounded-md font-bold">
                <IconFileText size={15} />
                Stakeholder Review
              </span>
              <span className="flex items-center gap-1">
                <IconCalendar size={15} className="text-river-teal" />
                16th–17th September 2026
              </span>
              <span className="flex items-center gap-1">
                <IconMapPin size={15} className="text-river-teal" />
                Golden Palace Hotel, Eldoret
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-deep-river dark:text-white leading-snug">
              Horizon Rivers of Hope Leads Stakeholder Review of County Waste Management Regulations
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              As lead facilitator, Horizon Rivers of Hope convened community representatives, businesses, institutions, and county officials for two days of open deliberation. Key outcomes include NEMA alignment, clear licensing mandates, and establishing the County Sustainable Solid Waste Fund.
            </p>

            <div className="pt-2">
              <Link
                href="/docs/Bishop Korir Initiative.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sunrise-orange hover:bg-sunrise-orange/90 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
              >
                <span>Read Full Report</span>
                <IconArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-riverbank-cream/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 space-y-4">
            <h4 className="font-heading font-bold text-lg text-deep-river dark:text-white">
              Key Policy Outcomes
            </h4>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-3">
              <li className="flex items-start gap-2.5">
                <IconCheck size={18} className="text-leaf-green shrink-0 mt-0.5" />
                <span>Aligned with national NEMA standards</span>
              </li>
              <li className="flex items-start gap-2.5">
                <IconCheck size={18} className="text-leaf-green shrink-0 mt-0.5" />
                <span>Defined County Sustainable Solid Waste Fund</span>
              </li>
              <li className="flex items-start gap-2.5">
                <IconCheck size={18} className="text-leaf-green shrink-0 mt-0.5" />
                <span>Addresses e-waste &amp; digital waste tracking</span>
              </li>
              <li className="flex items-start gap-2.5">
                <IconCheck size={18} className="text-leaf-green shrink-0 mt-0.5" />
                <span>Public sanitation &amp; reporting hotlines</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}