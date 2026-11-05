'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IconRecycle, 
  IconPlant, 
  IconHeart, 
  IconWorld, 
  IconX, 
  IconArrowRight,
  IconSparkles
} from '@tabler/icons-react';

interface Pillar {
  id: string;
  icon: typeof IconRecycle;
  title: string;
  fullDescription: string;
  color: string;
  badge: string;
  isInteractive?: boolean;
  modalContent?: {
    subtitle?: string;
    paragraphs: string[];
    subsections?: { title: string; text: string }[];
  };
}

const pillars: Pillar[] = [
  {
    id: 'youth-empowerment',
    icon: IconPlant,
    title: '1. Youth Empowerment',
    fullDescription: 'Young people are not just beneficiaries of development. They are its most powerful agents. Through mentorship, skills development, entrepreneurship promotion, leadership training and community engagement, we help young people turn creativity into livelihoods and become productive citizens, community leaders and job creators.',
    color: 'bg-leaf-green text-white',
    badge: 'Youth & Leadership',
    isInteractive: false,
  },
  {
    id: 'environmental-sustainability',
    icon: IconRecycle,
    title: '2. Environmental Sustainability',
    fullDescription: 'Environmental health shapes human health, economic growth and community well-being. We champion sustainable waste management, recycling, the circular economy, climate resilience and community sanitation. Through clean-ups, awareness campaigns and green enterprise, we are turning waste from a burden into an opportunity, because we believe waste can become wealth.',
    color: 'bg-river-teal text-white',
    badge: 'Sanitation & Recycling',
    isInteractive: false,
  },
  {
    id: 'health-wellbeing',
    icon: IconHeart,
    title: '3. Health and Well-being',
    fullDescription: 'Drawing on deep experience in community health, we support health education, prevention and linkages to essential services. Our commitment goes beyond treating illness to protecting dignity, mental well-being and community resilience.',
    color: 'bg-community-gold text-white',
    badge: 'Health & Wellbeing',
    isInteractive: false,
  },
  {
    id: 'peace-partnerships',
    icon: IconWorld,
    title: '4. Partnerships and Social Cohesion',
    fullDescription: 'Peace begins when people unite to care for the places they share. Inspired by the enduring legacy of Bishop Cornelius Korir, this pillar transforms environmental action into a powerful bridge connecting neighbours, faiths, cultures, and communities across the world.',
    color: 'bg-sunrise-orange text-white',
    badge: 'Cohesion & Global Links',
    isInteractive: true,
    modalContent: {
      subtitle: 'Restoring the land, connecting communities, inspiring the world.',
      paragraphs: [
        'Peace begins when people unite to care for the places they share. Inspired by the enduring legacy of Bishop Cornelius Korir, this pillar transforms environmental action into a powerful bridge connecting neighbours, faiths, cultures, and communities across the world. Through cultural exchange and intercultural learning, young people share their stories, traditions, and experiences while embracing those of others, fostering mutual understanding, respect, and solidarity. As local communities restore their environment and global partners stand alongside them, Eldoret becomes a living example of how peace can be built through collective action, shared responsibility, and human connection.'
      ],
      subsections: [
        {
          title: 'Bishop Korir Peace & Social Cohesion Initiative',
          text: 'Young people leading the way. Through clean-up drives, interfaith collaboration, and open community dialogue, we are uniting people of every background around one shared dream: Eldoret as a City of Peace.'
        },
        {
          title: 'Korir Peace Parks & Shared Spaces',
          text: 'Riversides and public grounds reborn as safe, beautiful places for everyone. These are spaces where neighbours meet, children play, and communities learn and celebrate side by side.'
        },
        {
          title: 'Cultural Exchange & Intercultural Learning',
          text: 'Youth, schools, and faith communities sharing stories, traditions, and practical ideas. Through every exchange, we learn from one another how to protect our environment and build lasting understanding.'
        },
        {
          title: 'Sister Cities & International Cooperation',
          text: 'Lasting friendships between Eldoret and cities across the globe, growing into partnerships in education, culture, sustainability, and youth innovation that benefit all who take part.'
        },
        {
          title: 'Global Citizenship & Youth Leadership',
          text: "Preparing a generation of confident young leaders who carry Eldoret's solutions to the world, bring the world's best ideas home, and prove that change in one community can inspire many."
        }
      ]
    }
  },
];

export function CorePillars() {
  const [activePillar, setActivePillar] = useState<Pillar | null>(null);

  // Handle Escape key navigation and body scroll-locking
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && activePillar) {
        setActivePillar(null);
      }
    };

    if (activePillar) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePillar]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-river-teal dark:text-sunrise-orange">
          Core Focus Areas
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-deep-river dark:text-white tracking-tight">
          Our Core Pillars of Community Transformation
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
          We believe real change happens when clean environments, empowered youth, and peaceful societies work together.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => {
                if (pillar.isInteractive && pillar.modalContent) {
                  setActivePillar(pillar);
                }
              }}
              className={`p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm transition-all flex flex-col justify-between ${
                pillar.isInteractive 
                  ? 'cursor-pointer hover:shadow-xl hover:-translate-y-1 group ring-2 ring-sunrise-orange/20' 
                  : ''
              }`}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-xl ${pillar.color} flex items-center justify-center shadow-sm`}>
                  <Icon size={26} />
                </div>

                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-river-teal dark:text-sunrise-orange">
                  {pillar.badge}
                </span>

                <h3 className="font-heading font-bold text-xl text-deep-river dark:text-white leading-snug">
                  {pillar.title}
                </h3>

                {/* Full description text on the card */}
                <p className="text-sm sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillar.fullDescription}
                </p>
              </div>

              {/* Bottom trigger for the fourth card */}
              {pillar.isInteractive && (
                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-sunrise-orange">
                  <span>Explore Full Initiative</span>
                  <span className="group-hover:translate-x-1 transition-transform inline-flex items-center">
                    <IconArrowRight size={16} />
                  </span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Pillar Details Modal (For the 4th Card Only) */}
      <AnimatePresence>
        {activePillar && activePillar.modalContent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-left space-y-6"
            >
              <button
                onClick={() => setActivePillar(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                aria-label="Close modal"
              >
                <IconX size={20} />
              </button>

              {/* Modal Header */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sunrise-orange bg-sunrise-orange/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                   {activePillar.badge}
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-deep-river dark:text-white leading-snug">
                  {activePillar.title}
                </h3>
                {activePillar.modalContent.subtitle && (
                  <p className="text-sunrise-orange font-semibold italic text-base">
                    {activePillar.modalContent.subtitle}
                  </p>
                )}
              </div>

              {/* Main Paragraphs */}
              <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {activePillar.modalContent.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}

                {/* Subsections */}
                {activePillar.modalContent.subsections && (
                  <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <h4 className="font-heading font-bold text-lg text-deep-river dark:text-white">
                      Our Vision in Action
                    </h4>
                    {activePillar.modalContent.subsections.map((sub, sIdx) => (
                      <div key={sIdx} className="p-4 rounded-2xl bg-riverbank-cream/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1">
                        <h5 className="font-heading font-bold text-base text-deep-river dark:text-white flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-sunrise-orange" />
                          {sub.title}
                        </h5>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-4">
                          {sub.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Modal Footer Action */}
              <div className="pt-4 flex justify-end border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => setActivePillar(null)}
                  className="px-6 py-2.5 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-xl font-bold text-sm hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
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