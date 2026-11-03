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
  IconPlayerPlay
} from '@tabler/icons-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'cleanups' | 'wash' | 'peace' | 'policy';
  categoryLabel: string;
  location: string;
  date: string;
  type: 'image' | 'video';
  mediaUrl: string;
  driveUrl: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Huruma Waste Aggregation & Sorting',
    category: 'cleanups',
    categoryLabel: 'Cleanups & Recycling',
    location: 'Huruma, Eldoret',
    date: 'September 2026',
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1200&auto=format&fit=crop',
    driveUrl: 'https://drive.google.com',
  },
  {
    id: '2',
    title: 'Stakeholder Review of Waste Regulations',
    category: 'policy',
    categoryLabel: 'Policy Deliberations',
    location: 'Golden Palace Hotel, Eldoret',
    date: '16th–17th Sept 2026',
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop',
    driveUrl: 'https://drive.google.com',
  },
  {
    id: '3',
    title: 'School WASH Facilities Rehabilitation',
    category: 'wash',
    categoryLabel: 'School WASH & Health',
    location: 'Kapseret Primary School',
    date: 'August 2026',
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
    driveUrl: 'https://drive.google.com',
  },
  {
    id: '4',
    title: 'Bishop Korir Riverfront Peace Park Dialogue',
    category: 'peace',
    categoryLabel: 'Peace & Sister City',
    location: 'Sosiani River, Eldoret',
    date: 'July 2026',
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1200&auto=format&fit=crop',
    driveUrl: 'https://drive.google.com',
  },
  {
    id: '5',
    title: 'Youth Eco-Enterprise Paving Blocks Production',
    category: 'cleanups',
    categoryLabel: 'Cleanups & Recycling',
    location: 'Huruma Workshop',
    date: 'June 2026',
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=1200&auto=format&fit=crop',
    driveUrl: 'https://drive.google.com',
  },
  {
    id: '6',
    title: 'Youth Health & Peer Support Session',
    category: 'wash',
    categoryLabel: 'School WASH & Health',
    location: 'Eldoret Youth Center',
    date: 'May 2026',
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop',
    driveUrl: 'https://drive.google.com',
  },
];

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const activeItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  // Keyboard navigation for Lightbox (Esc, Left, Right)
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
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {[
          { id: 'all', label: 'All Photos' },
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
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === tab.id
                ? 'bg-river-teal text-white shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-river-teal'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            onClick={() => setSelectedIndex(idx)}
            className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all"
          >
            <div 
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url('${item.mediaUrl}')` }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-river-teal text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow">
                {item.categoryLabel}
              </span>
            </div>

            {/* Card Information */}
            <div className="absolute bottom-4 left-4 right-4 text-white space-y-1.5">
              <h3 className="font-heading font-bold text-base leading-snug group-hover:text-sunrise-orange transition-colors">
                {item.title}
              </h3>
              <div className="flex items-center justify-between text-xs text-slate-300 font-medium pt-1">
                <span className="flex items-center gap-1">
                  <IconMapPin size={13} className="text-sunrise-orange" />
                  {item.location}
                </span>
                <span className="flex items-center gap-1">
                  <IconCalendar size={13} className="text-sunrise-orange" />
                  {item.date}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Viewer */}
      <AnimatePresence>
        {activeItem && selectedIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="Close gallery"
            >
              <IconX size={24} />
            </button>

            {/* Previous Button */}
            <button
              onClick={() => setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : filteredItems.length - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="Previous photo"
            >
              <IconChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={() => setSelectedIndex(selectedIndex < filteredItems.length - 1 ? selectedIndex + 1 : 0)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="Next photo"
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
              <img 
                src={activeItem.mediaUrl} 
                alt={activeItem.title} 
                className="max-w-full max-h-[70vh] rounded-2xl shadow-2xl object-contain border border-white/10"
              />

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
                    <span>Open in Drive Archive</span>
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