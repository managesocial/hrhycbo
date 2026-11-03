'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconHeartHandshake, IconArrowRight, IconRecycle, IconUsers, IconHeart, IconSparkles } from '@tabler/icons-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 px-4 sm:px-6 lg:px-8 text-white">
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url('/images/gallery/landing.jpg')`,
        }}
      />

      {/* Dark overlay ONLY on mobile (black gradient), removed on desktop */}
      <div className="absolute inset-0 w-full h-full bg-black/70 lg:bg-transparent pointer-events-none" />

      {/* Background Decorative River Curve */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
          <path
            d="M0 192C240 280 480 320 720 256C960 192 1200 128 1440 224V400H0V192Z"
            fill="#01191d"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left w-full"
          >
            {/* Updated Badge: Solid white background for high readability */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-deep-river text-xs sm:text-sm font-extrabold tracking-wide uppercase shadow-md">
              Youth-Led Movement in Eldoret
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-sm">
              Shaping Uasin Gishu&apos;s Sustainable &amp; Peaceful Future
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed drop-shadow">
              Horizon Rivers of Hope Youth CBO turns waste into opportunity, division into cohesion, and young people&apos;s potential into lasting community change.
            </p>

            {/* Desktop-only Buttons (hidden on mobile) */}
            <div className="hidden lg:flex flex-row items-center justify-start gap-4 pt-4">
              <Link
                href="/projects"
                className="w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3.5 rounded-xl text-base border border-white/20 transition-all backdrop-blur-sm"
              >
                <span>Explore Our Work</span>
                <IconArrowRight size={18} />
              </Link>

              <a
                href="https://www.paypal.com/ncp/payment/PRPA22PX46YBN"
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto inline-flex items-center justify-center gap-2.5 bg-sunrise-orange hover:bg-sunrise-orange/90 text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <IconHeartHandshake size={22} />
                <span>Donate via PayPal</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Key Stats / Impact Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full"
          >
            <div className="p-5 rounded-2xl bg-white/25 backdrop-blur-md border border-white/40 flex items-start gap-4 shadow-xl">
              <div className="p-3 rounded-xl bg-river-teal text-white shrink-0 shadow">
                <IconRecycle size={28} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">Circular Economy</h3>
                <p className="text-sm text-slate-100 mt-1">
                  Advocating to convert dumpsites into eco-incubation hubs for youth enterprise.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/25 backdrop-blur-md border border-white/40 flex items-start gap-4 shadow-xl">
              <div className="p-3 rounded-xl bg-leaf-green text-white shrink-0 shadow">
                <IconUsers size={28} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">Bishop Korir Peace Initiative</h3>
                <p className="text-sm text-slate-100 mt-1">
                  Reclaiming riverfronts into Korir Peace Parks and fostering interfaith cohesion.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/25 backdrop-blur-md border border-white/40 flex items-start gap-4 sm:col-span-2 lg:col-span-1 shadow-xl">
              <div className="p-3 rounded-xl bg-community-gold text-white shrink-0 shadow">
                <IconHeart size={28} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">Health &amp; Youth Resilience</h3>
                <p className="text-sm text-slate-100 mt-1">
                  Connecting school WASH infrastructure with youth mental health and substance misuse prevention.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mobile-only Buttons (Renders below the cards on mobile) */}
          <div className="lg:hidden flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-2">
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3.5 rounded-xl text-base border border-white/20 transition-all backdrop-blur-sm"
            >
              <span>Explore Our Work</span>
              <IconArrowRight size={18} />
            </Link>

            <a
              href="https://www.paypal.com/ncp/payment/PRPA22PX46YBN"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-sunrise-orange hover:bg-sunrise-orange/90 text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <IconHeartHandshake size={22} />
              <span>Donate via PayPal</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}