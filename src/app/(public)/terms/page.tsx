'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconScale, IconChecklist, IconAlertCircle, IconArrowLeft } from '@tabler/icons-react';

export default function TermsOfServicePage() {
  const lastUpdated = 'October 2026';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Navigation Back */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-river-teal dark:text-sunrise-orange hover:underline transition-all"
          >
            <IconArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-river-teal/10 text-river-teal dark:bg-river-teal/30 dark:text-sunrise-orange text-xs font-bold uppercase tracking-wider">
            <IconScale size={16} />
            Organizational Guidelines
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-deep-river dark:text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last Updated: {lastUpdated} &bull; Horizon Rivers of Hope Youth CBO
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="space-y-8 text-base leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            Welcome to the official website of <strong>Horizon Rivers of Hope Youth CBO</strong>. By accessing or using our digital platform, community resources, news hubs, or project documentation, you agree to comply with and be bound by the following Terms of Service.
          </p>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-deep-river dark:text-white flex items-center gap-2">
              <IconChecklist className="text-river-teal dark:text-sunrise-orange" size={22} />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing this website, you confirm your acceptance of these Terms of Service and agree to use our platform strictly for lawful purposes aligned with our pillars of Youth Empowerment, Environmental Sustainability, Health & Wellbeing, and Peace & Global Partnerships.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-deep-river dark:text-white">
              2. Intellectual Property & Impact Materials
            </h2>
            <p>
              All original content, reports, policy proposals (such as county entry documentation and CESIP summaries), photographs, logos, and digital branding displayed on this site are the property of Horizon Rivers of Hope Youth CBO unless stated otherwise.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You may read, download, and share our public reports for educational, advocacy, or non-commercial purposes with proper attribution.</li>
              <li>Commercial duplication or unauthorized rebrandings of our initiative materials are strictly prohibited.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-deep-river dark:text-white">
              3. Donations & Financial Contributions
            </h2>
            <p>
              Donations made to Horizon Rivers of Hope Youth CBO through designated channels (e.g., PayPal) directly support community programs, youth eco-enterprises, and peace initiatives in Uasin Gishu County.
            </p>
            <p>
              All contributions are voluntary. If you experience any technical errors during transaction processing, please contact our support team immediately.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-deep-river dark:text-white flex items-center gap-2">
              <IconAlertCircle className="text-river-teal dark:text-sunrise-orange" size={22} />
              4. External Links & PDF Reports
            </h2>
            <p>
              Our platform may link to official government policy documents, third-party media drives, or external payment portals. Horizon Rivers of Hope Youth CBO is not responsible for the privacy practices or external terms of third-party platforms.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-deep-river dark:text-white">
              5. Modifications to Terms
            </h2>
            <p>
              We reserve the right to revise these Terms of Service as our organization and governance frameworks evolve. Continued use of the website following changes constitutes acceptance of the updated terms.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-deep-river dark:text-white">
              6. Contact Information
            </h2>
            <p>
              For inquiries regarding our terms or community operations, please contact:
            </p>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1 text-sm font-medium">
              <p><strong>Horizon Rivers of Hope Youth CBO</strong></p>
              <p>Eldoret, Uasin Gishu County, Kenya</p>
              <p>Email: <a href="mailto:info@horizonrivers.org" className="text-river-teal dark:text-sunrise-orange underline">info@horizonriversofhope.org</a></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}