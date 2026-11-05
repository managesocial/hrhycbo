'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IconCalendar, 
  IconMapPin, 
  IconArrowRight, 
  IconFileText, 
  IconCheck, 
  IconX,
  IconUsers,
  IconTarget,
  IconSparkles
} from '@tabler/icons-react';

export function FeaturedNews() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle Escape key navigation and body scroll-locking
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

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
                County Deliberations
              </span>
              <span className="flex items-center gap-1">
                <IconCalendar size={15} className="text-river-teal" />
                26th August 2026
              </span>
              <span className="flex items-center gap-1">
                <IconMapPin size={15} className="text-river-teal" />
                Golden Palace Hotel, Eldoret
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-deep-river dark:text-white leading-snug">
              Entry Meeting with Uasin Gishu County: A New Chapter Begins
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Horizon Rivers of Hope Youth CBO took its seat at the table with county leadership, calling for a Circular Economy framework that restores dignity to waste pickers, unlocks stalled policies, and gives young people a real voice.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-sunrise-orange hover:bg-sunrise-orange/90 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
              >
                <span>Read Full Deliberation Details</span>
                <IconArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-riverbank-cream/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 space-y-4">
            <h4 className="font-heading font-bold text-lg text-deep-river dark:text-white">
              Key Policy Outcomes
            </h4>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-3">
              <li className="flex items-start gap-2.5">
                <IconCheck size={18} className="text-leaf-green shrink-0 mt-0.5" />
                <span>Formal county welcome &amp; youth seat at the table</span>
              </li>
              <li className="flex items-start gap-2.5">
                <IconCheck size={18} className="text-leaf-green shrink-0 mt-0.5" />
                <span>Prioritized unlocking stalled Circular Economy &amp; PPP policy</span>
              </li>
              <li className="flex items-start gap-2.5">
                <IconCheck size={18} className="text-leaf-green shrink-0 mt-0.5" />
                <span>Restoring dignity &amp; recognition to grassroots waste pickers</span>
              </li>
              <li className="flex items-start gap-2.5">
                <IconCheck size={18} className="text-leaf-green shrink-0 mt-0.5" />
                <span>Horizon committed as long-term implementation partner</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-left space-y-6"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                aria-label="Close modal"
              >
                <IconX size={20} />
              </button>

              {/* Header */}
              <div className="space-y-3 pr-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-river-teal/10 text-river-teal dark:text-sunrise-orange text-xs font-bold uppercase tracking-wider">
                  County Deliberations &amp; Policy
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-deep-river dark:text-white leading-snug">
                  Entry Meeting with Uasin Gishu County: A New Chapter Begins
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <IconCalendar size={15} className="text-river-teal" />
                    26th August 2026
                  </span>
                  <span className="flex items-center gap-1.5">
                    <IconMapPin size={15} className="text-sunrise-orange" />
                    Golden Palace Hotel, Eldoret
                  </span>
                </div>
              </div>

              {/* Purpose */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="font-heading font-bold text-sm text-river-teal dark:text-sunrise-orange uppercase tracking-wider flex items-center gap-2">
                  <IconTarget size={18} />
                  Purpose
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  To mark Horizon Rivers of Hope Youth CBO&apos;s formal entry into county-level deliberations, and to place the Circular Economy and inclusive Public-Private Partnerships (PPP) at the center of Uasin Gishu&apos;s future.
                </p>
              </div>

              {/* Who Was in the Room */}
              <div className="space-y-3">
                <h4 className="font-heading font-bold text-base text-deep-river dark:text-white flex items-center gap-2">
                  <IconUsers size={20} className="text-river-teal" />
                  Who Was in the Room
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <li className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/70 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sunrise-orange shrink-0" />
                    <span>Five Directors &amp; Principals of Uasin Gishu County leadership</span>
                  </li>
                  <li className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/70 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sunrise-orange shrink-0" />
                    <span>Leaders of the Waste Pickers Association</span>
                  </li>
                  <li className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/70 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sunrise-orange shrink-0" />
                    <span>Youth leaders with fresh ideas &amp; energy</span>
                  </li>
                  <li className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/70 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sunrise-orange shrink-0" />
                    <span>Horizon Rivers of Hope Youth CBO leadership</span>
                  </li>
                </ul>
              </div>

              {/* What Happened */}
              <div className="space-y-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <h4 className="font-heading font-bold text-base text-deep-river dark:text-white">
                  What Happened
                </h4>
                <p>
                  For the first time, Horizon sat at the table with county leadership as a recognized partner. We called for a Circular Economy that turns waste into wealth, restores dignity to the waste pickers who have long worked unseen, and gives young people a real place in shaping the county&apos;s future.
                </p>
                <p>
                  We also named a hard truth: the county&apos;s policy document on the Circular Economy and PPP is stalled. Without it, a good idea cannot become a lasting reality. Horizon pledged to walk with the County until that document is completed and becomes a living framework, not a paper on a shelf.
                </p>
              </div>

              {/* Outcomes */}
              <div className="p-5 rounded-2xl bg-riverbank-cream/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 space-y-3">
                <h4 className="font-heading font-bold text-base text-deep-river dark:text-white">
                  Outcomes
                </h4>
                <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <IconCheck size={18} className="text-leaf-green shrink-0 mt-0.5" />
                    <span><strong>A welcome:</strong> County leadership received Horizon warmly and recognized the part that youth and waste pickers must play in shaping policy.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <IconCheck size={18} className="text-leaf-green shrink-0 mt-0.5" />
                    <span><strong>A priority:</strong> The stalled policy was acknowledged as a matter needing urgent attention.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <IconCheck size={18} className="text-leaf-green shrink-0 mt-0.5" />
                    <span><strong>A promise:</strong> Horizon committed to stand beside the County as a steadfast partner, from completion of the policy through to its implementation.</span>
                  </li>
                </ul>
              </div>

              {/* Closing Note */}
              <div className="border-l-4 border-sunrise-orange pl-4 py-1 space-y-2 text-slate-700 dark:text-slate-300">
                <p className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">Closing Note</p>
                <p className="text-sm italic leading-relaxed">
                  &ldquo;Together, we shall unlock the stalled policy, champion PPP frameworks, and ensure that Eldoret becomes a beacon of resilience, sustainability, and inclusive growth. The work has begun, and we will not walk away from it.&rdquo;
                </p>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 flex justify-end border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-xl font-bold text-sm hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}