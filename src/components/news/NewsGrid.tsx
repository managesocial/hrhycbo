'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IconCalendar, 
  IconArrowRight, 
  IconX, 
  IconShare,
  IconCheck,
  IconMapPin,
  IconBellRinging,
  IconHeartHandshake,
  IconSparkles
} from '@tabler/icons-react';

interface Announcement {
  id: string;
  title: string;
  type: 'upcoming' | 'completed';
  typeLabel: string;
  categoryLabel: string;
  date: string;
  location: string;
  author: string;
  summary: string;
  fullDescription: string[];
  imageUrl: string;
}

const announcements: Announcement[] = [

   {
    id: 'bishop-korir-peace',
    title: 'Bishop Korir Peace & Social Cohesion Initiative',
    type: 'upcoming',
    typeLabel: 'Upcoming Initiative',
    categoryLabel: 'Peace, Cohesion & Cultural Exchange',
    date: 'December 14 - 19, 2026',
    location: 'Nachola-Baragoi, Samburu County',
    author: 'Ronoh Hamleyz Dan',
    summary: 'Restoring the land, connecting communities, and inspiring the world through environmental action, interfaith youth dialogues, cultural exchanges, and global cooperation.',
    fullDescription: [
      'Peace begins when people unite to care for the places they share. Inspired by the enduring legacy of Bishop Cornelius Korir, this initiative transforms environmental action into a powerful bridge connecting neighbours, faiths, cultures, and communities across the world.',
      'Young people are leading the way through clean-up drives, interfaith collaboration, and open community dialogue around one shared dream: creating safe, peaceful communities. This includes transforming riversides into Korir Peace Parks—reborn public grounds where neighbours meet, children play, and communities celebrate side by side.',
      'Through intercultural learning, sister city partnerships, and youth leadership exchanges, the program equips a generation of confident young leaders to share Eldoret’s local environmental and peace-building solutions with global partners.'
    ],
    imageUrl: '/images/projects/peace-park-4.jpeg',
  },
  
  {
    id: 'sosiani-next-phase-cleanup',
    title: 'Upcoming: Q4 Sosiani Riverbank Restoration & Youth Eco-Camp',
    type: 'upcoming',
    typeLabel: 'Upcoming Project',
    categoryLabel: 'Environmental Cleanups',
    date: 'November 28, 2026',
    location: 'Sosiani River Banks, Eldoret',
    author: 'HRHYCBO Operations Team',
    summary: 'Join us for our next major community clean-up and indigenous tree-planting drive along the Sosiani River buffer zones.',
    fullDescription: [
      'Horizon Rivers of Hope Youth CBO is gearing up for its final major community action campaign of the year along the Sosiani River corridor.',
      'Building on our previous successes, this phase will focus on clearing upstream plastic accumulation, establishing designated community green benches, and training 100 new youth eco-ambassadors.',
      'We are calling upon local schools, local business owners, and resident associations in Eldoret to volunteer their time and hands. Tools, gloves, and seedlings will be provided on-site.'
    ],
    imageUrl: '/images/projects/mazingira-3.jpg',
  },
  {
    id: 'county-waste-policy-passed',
    title: 'Uasin Gishu County Adopts New Sustainable Solid Waste Framework',
    type: 'completed',
    typeLabel: 'Past Milestone',
    categoryLabel: 'Policy & Advocacy',
    date: 'September 18, 2026',
    location: 'Eldoret Municipal Headquarters',
    author: 'Denis Kipkemei Bitok',
    summary: 'Following rigorous multi-stakeholder deliberations convened by Horizon Rivers of Hope, the county assembly has formally integrated community recycling incentives.',
    fullDescription: [
      'In a landmark milestone for Eldoret municipal governance, the Uasin Gishu County executive has officially adopted the Sustainable Solid Waste Management framework developed in partnership with youth-led organizations including Horizon Rivers of Hope.',
      'The policy sets clear guidelines for decentralized waste sorting at the estate level, empowering youth groups in Huruma, Kapseret, and Langas to operate official collection and recycling kiosks.',
      'Speaking during the ratification ceremony, county environmental officials praised Horizon Rivers of Hope for bridging grassroots mobilization with institutional policy reform, proving that young people are key drivers of sustainable urban development.',
      'The framework also establishes the County Sustainable Solid Waste Fund, designed to finance green enterprise incubators and reward neighborhood environmental compliance.'
    ],
    imageUrl: '/images/projects/policy-framework-3.jpg',
  },
  {
    id: 'huruma-recycling-drive',
    title: 'Huruma Youth Eco-Enterprise Hub Hits 12-Ton Monthly Recycling Milestone',
    type: 'completed',
    typeLabel: 'Past Milestone',
    categoryLabel: 'Eco-Enterprises',
    date: 'September 04, 2026',
    location: 'Huruma Estate, Eldoret',
    author: 'Ronoh Hamleyz Dan',
    summary: 'Local youth groups processing discarded plastics into durable paving blocks have achieved record-breaking output this quarter.',
    fullDescription: [
      'The Huruma Eco-Enterprise Hub, operated under the auspices of Horizon Rivers of Hope, has officially crossed the 12-ton monthly threshold for plastic waste aggregation and conversion.',
      'By utilizing manual pressing machinery and community sorting squads, the project successfully diverts thousands of discarded bottles and containers from clogging local drainage systems.',
      'The resulting paving blocks are currently being deployed to construct safe pedestrian walkways across flood-prone neighborhoods in Eldoret, creating 25 direct green jobs for local youth.'
    ],
    imageUrl: '/images/projects/policy-framework-1.jpg',
  },
 
];

export function NewsGrid() {
  const [filterType, setFilterType] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<Announcement | null>(null);
  const [copied, setCopied] = useState(false);

  // Handle Escape key navigation and body scroll-locking
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && activeItem) {
        setActiveItem(null);
      }
    };

    if (activeItem) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeItem]);

  const filteredAnnouncements = filterType === 'all'
    ? announcements
    : announcements.filter((item) => item.type === filterType);

  const featuredItem = announcements[0];

  // Share handler function
  const handleShare = async (item: Announcement) => {
    const shareData = {
      title: item.title,
      text: item.summary,
      url: typeof window !== 'undefined' ? `${window.location.origin}/news#${item.id}` : '',
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-16">
      
      {/* Featured Highlight Banner with Section Header */}
      {filterType === 'all' && (
        <div className="space-y-3">
          {/* Section Header so users clearly identify the Spotlight Card */}
          <div className="flex items-center gap-2 px-1 text-deep-river dark:text-white">
            <h2 className="font-heading font-extrabold text-lg sm:text-xl uppercase tracking-wide">
              Featured Announcement
            </h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            <div 
              className="lg:col-span-6 h-64 lg:h-auto bg-cover bg-center min-h-[260px] sm:min-h-[320px]"
              style={{ backgroundImage: `url('${featuredItem.imageUrl}')` }}
            />
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="bg-sunrise-orange text-white text-[11px] sm:text-xs font-extrabold px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                    <IconBellRinging size={14} />
                    Featured Initiative
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-river-teal dark:text-sunrise-orange bg-river-teal/10 px-3 py-1 rounded-full">
                    {featuredItem.categoryLabel}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-xl sm:text-3xl text-deep-river dark:text-white leading-snug sm:leading-tight">
                  {featuredItem.title}
                </h3>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <IconCalendar size={14} className="text-river-teal shrink-0" />
                    {featuredItem.date}
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1">
                    <IconMapPin size={14} className="text-sunrise-orange shrink-0" />
                    {featuredItem.location}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {featuredItem.summary}
                </p>
              </div>

              {/* Clean wrapping footer (No text overlap on mobile) */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-medium text-slate-400 text-center sm:text-left">
                  Organized by Horizon Rivers
                </span>
                <button
                  onClick={() => setActiveItem(featuredItem)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sunrise-orange hover:bg-sunrise-orange/90 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md"
                >
                  <span>View Announcement Details</span>
                  <IconArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Horizontal Swipeable Filter Pills on Mobile */}
      <div className="w-full overflow-x-auto pb-2 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex items-center justify-start sm:justify-center gap-2.5 min-w-max px-1">
          {[
            { id: 'all', label: 'All Announcements & Updates' },
            { id: 'upcoming', label: 'Upcoming Projects & Drives' },
            { id: 'completed', label: 'Past Milestones & Successes' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterType(tab.id)}
              className={`shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                filterType === tab.id
                  ? 'bg-river-teal text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-river-teal'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Announcements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredAnnouncements.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md overflow-hidden hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              {/* Card Image */}
              <div 
                className="w-full h-52 bg-cover bg-center relative"
                style={{ backgroundImage: `url('${item.imageUrl}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider text-white ${
                    item.type === 'upcoming' ? 'bg-sunrise-orange' : 'bg-river-teal'
                  }`}>
                    {item.typeLabel}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold flex items-center gap-1">
                  <IconMapPin size={14} className="text-sunrise-orange shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1 font-semibold text-river-teal dark:text-sunrise-orange">
                    <IconCalendar size={14} />
                    {item.date}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-deep-river dark:text-white leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 truncate max-w-[50%]">
                {item.categoryLabel}
              </span>
              <button
                onClick={() => setActiveItem(item)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sunrise-orange hover:text-sunrise-orange/80 transition-colors shrink-0"
              >
                <span>{item.type === 'upcoming' ? 'View Details' : 'Read Impact Story'}</span>
                <IconArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-left space-y-6"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                aria-label="Close modal"
              >
                <IconX size={20} />
              </button>

              {/* Modal Header */}
              <div className="space-y-3 pr-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full text-white ${
                    activeItem.type === 'upcoming' ? 'bg-sunrise-orange' : 'bg-river-teal'
                  }`}>
                    {activeItem.typeLabel}
                  </span>
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3.5 py-1 rounded-full">
                    {activeItem.categoryLabel}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-deep-river dark:text-white leading-snug">
                  {activeItem.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <IconCalendar size={15} className="text-river-teal" />
                    {activeItem.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <IconMapPin size={15} className="text-sunrise-orange" />
                    {activeItem.location}
                  </span>
                </div>
              </div>

              {/* Banner Image */}
              <div 
                className="w-full h-56 sm:h-80 rounded-2xl bg-cover bg-center border border-slate-200 dark:border-slate-700 shadow-md"
                style={{ backgroundImage: `url('${activeItem.imageUrl}')` }}
              />

              {/* Content Paragraphs */}
              <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                {activeItem.fullDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Modal Actions */}
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => handleShare(activeItem)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-river-teal/10 dark:bg-river-teal/20 text-river-teal dark:text-sunrise-orange hover:bg-river-teal hover:text-white dark:hover:bg-sunrise-orange dark:hover:text-white font-bold text-xs transition-all border border-river-teal/30 w-full sm:w-auto"
                  >
                    {copied ? (
                      <>
                        <IconCheck size={16} className="text-leaf-green" />
                        <span>Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <IconShare size={16} />
                        <span>Share Announcement</span>
                      </>
                    )}
                  </button>

                  {/* Conditional CTA for Upcoming Projects */}
                  {activeItem.type === 'upcoming' && (
                    <Link
                      href="/contact"
                      onClick={() => setActiveItem(null)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sunrise-orange hover:bg-sunrise-orange/90 text-white font-bold text-xs transition-all shadow-md w-full sm:w-auto"
                    >
                      <IconHeartHandshake size={16} />
                      <span>Get Involved / Join Us</span>
                    </Link>
                  )}
                </div>

                <button
                  onClick={() => setActiveItem(null)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-xl font-bold text-sm hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}