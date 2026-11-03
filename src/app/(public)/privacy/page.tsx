'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconShieldCheck, IconLock, IconEye, IconFileText, IconArrowLeft } from '@tabler/icons-react';

export default function PrivacyPolicyPage() {
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
            <IconShieldCheck size={16} />
            Privacy & Data Protection
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-deep-river dark:text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last Updated: {lastUpdated} &bull; Horizon Rivers of Hope Youth CBO
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="space-y-8 text-base leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            At <strong>Horizon Rivers of Hope Youth CBO</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), registered in Uasin Gishu County, Kenya, we respect your privacy and are committed to protecting any personal data you share with us. This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit our website or interact with our community programs, volunteer initiatives, and donation portals.
          </p>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-deep-river dark:text-white flex items-center gap-2">
              <IconEye className="text-river-teal dark:text-sunrise-orange" size={22} />
              1. Information We Collect
            </h2>
            <p>We collect information to support our mission and provide services to our community:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Voluntary Information:</strong> When you sign up as a volunteer, fill out our contact form, or register for community updates, we may collect your name, email address, phone number, location (e.g., Eldoret/Uasin Gishu), and areas of interest.
              </li>
              <li>
                <strong>Financial & Donation Details:</strong> Donations made via our third-party payment gateways (e.g., PayPal or mobile money platforms) are processed securely by those respective services. We do not store financial account credentials on our servers.
              </li>
              <li>
                <strong>Automated Analytics:</strong> We may collect standard web logs and anonymized usage statistics (such as browser type, pages visited, and general location) to improve website functionality and user experience.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-deep-river dark:text-white flex items-center gap-2">
              <IconFileText className="text-river-teal dark:text-sunrise-orange" size={22} />
              2. How We Use Your Information
            </h2>
            <p>We use your information strictly for community-building and organizational purpose:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To communicate regarding community projects, peace forums, and environmental initiatives.</li>
              <li>To process and acknowledge donations, partnerships, and grant inquiries.</li>
              <li>To coordinate volunteers and participants for clean-ups, workshops, and youth programs.</li>
              <li>To improve website performance and maintain site security.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-deep-river dark:text-white flex items-center gap-2">
              <IconLock className="text-river-teal dark:text-sunrise-orange" size={22} />
              3. Data Sharing and Protection
            </h2>
            <p>
              We value your trust. We do <strong>not</strong> sell, rent, or trade your personal information to third-party marketers or commercial entities.
            </p>
            <p>
              We may share necessary information with trusted operational partners or local authorities strictly when required by law, or to coordinate officially recognized multi-stakeholder programs (e.g., Uasin Gishu County joint deliberations).
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-deep-river dark:text-white">
              4. Media & Impact Photography
            </h2>
            <p>
              As part of our community documentation, photos and videos taken during public clean-ups, workshops, and peace dialogues may be featured on our updates hub. If you or your minor child appear in our gallery and wish to have an image removed, please reach out to us and we will promptly address your request.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-deep-river dark:text-white">
              5. Contact Us
            </h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or your personal data, please contact us:
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