'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IconX, 
  IconChevronLeft, 
  IconChevronRight, 
  IconMapPin, 
  IconCalendar, 
  IconBrandGoogleDrive,
  IconPlayerPlay,
  IconVideo
} from '@tabler/icons-react';

interface GalleryMedia {
  id: string;
  title: string;
  category: 'cleanups' | 'wash' | 'peace' | 'policy';
  categoryLabel: string;
  location: string;
  date: string;
  type: 'image' | 'video';
  thumbnailUrl: string;
  videoUrl?: string; // Local /public/videos/ cleanup.mp4 or embed link
  driveUrl: string;
  // Span dimensions for asymmetrical layout
  spanClass: string; 
}

const mediaItems: GalleryMedia[] = [
  {
    id: '1',
    title: 'Mazingira Day - City Clean Up',
    category: 'wash',
    categoryLabel: 'School WASH & Health',
    location: 'Uasin Gishu County Meeting Grounds',
    date: 'September 2026',
    type: 'video',
    thumbnailUrl: '/images/projects/mazingira-3.jpg',
    videoUrl: 'https://www.youtube.com/embed/TLl_yUUKyeM?si=uLUBzjwXKFymN7PE',
    driveUrl: 'https://photos.app.goo.gl/4PtYGW7d7kVwCJ8q9',
    spanClass: 'col-span-1 md:col-span-2 row-span-2 h-[420px]',
  },
  {
    id: '2',
    title: 'County Entry Meeting & Inclusive PPP Policy Framework',
    category: 'policy',
    categoryLabel: 'Policy Deliberations',
    location: 'Uasin Gishu County',
    date: 'August 2026',
    type: 'image',
    thumbnailUrl: '/images/projects/policy-framework-2.jpg',
    driveUrl: 'https://photos.app.goo.gl/2rCsx19KcWtoxMWH9',
    spanClass: 'col-span-1 row-span-2 h-[420px]',
  },
  {
    id: '3',
    title: 'County Entry Meeting & Inclusive PPP Policy Framework',
    category: 'policy',
    categoryLabel: 'Policy Deliberations',
    location: 'Uasin Gishu County',
    date: 'August 2026',
    type: 'image',
    thumbnailUrl: '/images/projects/policy-framework-3.jpg',
    driveUrl: 'https://photos.app.goo.gl/2rCsx19KcWtoxMWH9',
    spanClass: 'col-span-1 row-span-2 h-[420px]',
  },
  {
    id: '4',
    title: 'Horizon Rivers of Hope Youth CBO bakes a cake with the sun at the CESIP Uasin Gishu Chapter',
    category: 'policy',
    categoryLabel: 'Policy Deliberations',
    location: 'Boma-Inn Hotel',
    date: 'October 2026',
    type: 'image',
    thumbnailUrl: '/images/projects/bomain-4.jpg',
    driveUrl: 'https://photos.app.goo.gl/k7qLZnkntJ4PJgMS8',
    spanClass: 'col-span-1 md:col-span-2 row-span-1 h-[200px]',
  },
  {
    id: '5',
    title: 'Mazingira Day - City Clean Up',
    category: 'wash',
    categoryLabel: 'School WASH & Health',
    location: 'Uasin Gishu County Meeting Grounds',
    date: 'September 2026',
    type: 'video',
    thumbnailUrl: '/images/projects/mazingira-3.jpg',
    videoUrl: 'https://www.youtube.com/embed/TLl_yUUKyeM?si=uLUBzjwXKFymN7PE',
    driveUrl: 'https://photos.app.goo.gl/4PtYGW7d7kVwCJ8q9',
    spanClass: 'col-span-1 md:col-span-2 row-span-1 h-[200px]',
  },
];

export function DynamicGalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? mediaItems
    : mediaItems.filter((item) => item.category === selectedCategory);

  const activeItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  // Keyboard controls (Esc, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
    };

    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, filteredItems]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Category Tabs (Swipeable on Mobile) */}
      <div className="w-full overflow-x-auto pb-2 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex items-center justify-start sm:justify-center gap-2.5 min-w-max px-1">
          {[
            { id: 'all', label: 'All Story Media' },
            { id: 'cleanups', label: 'Cleanups & Recycling' },
            { id: 'wash', label: 'School WASH & Health' },
            { id: 'peace', label: 'Peace & Sister City' },
            { id: 'policy', label: 'Policy & Deliberations' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedCategory(tab.id);
                setSelectedIndex(null);
              }}
              className={`shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                selectedCategory === tab.id
                  ? 'bg-river-teal text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-river-teal'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            onClick={() => setSelectedIndex(idx)}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all ${item.spanClass}`}
          >
            {/* Background Thumbnail Image */}
            <div 
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url('${item.thumbnailUrl}')` }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

            {/* Video Indicator Icon Badge */}
            {item.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-sunrise-orange/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <IconPlayerPlay size={28} className="ml-1" />
                </div>
              </div>
            )}

            {/* Top Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <span className="bg-river-teal text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow">
                {item.categoryLabel}
              </span>
              {item.type === 'video' && (
                <span className="bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 border border-white/20">
                  <IconVideo size={12} />
                  Video
                </span>
              )}
            </div>

            {/* Card Information */}
            <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
              <h3 className="font-heading font-bold text-sm sm:text-base leading-snug group-hover:text-sunrise-orange transition-colors line-clamp-2">
                {item.title}
              </h3>
              <div className="flex items-center justify-between text-[11px] text-slate-300 font-medium pt-1">
                <span className="flex items-center gap-1">
                  <IconMapPin size={12} className="text-sunrise-orange" />
                  {item.location}
                </span>
                <span className="flex items-center gap-1">
                  <IconCalendar size={12} className="text-sunrise-orange" />
                  {item.date}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal (Photo Viewer or Video Player) */}
      <AnimatePresence>
        {activeItem && selectedIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="Close"
            >
              <IconX size={24} />
            </button>

            {/* Navigation Controls */}
            <button
              onClick={() => setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : filteredItems.length - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="Previous"
            >
              <IconChevronLeft size={24} />
            </button>

            <button
              onClick={() => setSelectedIndex(selectedIndex < filteredItems.length - 1 ? selectedIndex + 1 : 0)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="Next"
            >
              <IconChevronRight size={24} />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-4xl w-full flex flex-col items-center space-y-4 text-white"
            >
              {/* Media Switcher: Photo vs Video */}
              {activeItem.type === 'video' ? (
                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <iframe
                    src={activeItem.videoUrl}
                    title={activeItem.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <img 
                  src={activeItem.thumbnailUrl} 
                  alt={activeItem.title} 
                  className="max-w-full max-h-[70vh] rounded-2xl shadow-2xl object-contain border border-white/10"
                />
              )}

              <div className="text-center space-y-2 max-w-2xl px-4">
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                  {activeItem.title}
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
                  <span className="flex items-center gap-1">
                    <IconMapPin size={14} className="text-sunrise-orange" />
                    {activeItem.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <IconCalendar size={14} className="text-sunrise-orange" />
                    {activeItem.date}
                  </span>
                  <a
                    href={activeItem.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sunrise-orange hover:underline"
                  >
                    <IconBrandGoogleDrive size={14} />
                    <span>Open Drive Repository</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}