'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconBook, IconX, IconSparkles } from '@tabler/icons-react';

export function AboutHeroModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Handle Escape key navigation and body scroll-locking
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url('/images/projects/mazingira-1.jpg')`,
        }}
      />
      
      {/* Overlay: White in Light Mode, Black/Dark in Dark Mode */}
      <div className="absolute inset-0 w-full h-full bg-white/75 dark:bg-black/75 backdrop-blur-[1px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-river-teal dark:text-sunrise-orange bg-river-teal/10 dark:bg-river-teal/30 px-3.5 py-1.5 rounded-full border border-river-teal/20 dark:border-river-teal/40">
          Who We Are
        </span>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-deep-river dark:text-white leading-tight tracking-tight">
          Turning Young Potential into Lasting Community Change
        </h1>

        <p className="text-lg sm:text-xl text-slate-800 dark:text-slate-200 max-w-3xl mx-auto leading-relaxed font-medium">
          Horizon Rivers of Hope Youth CBO is a youth-led movement rooted in Eldoret, Uasin Gishu County. We believe true community transformation begins when a clean environment, empowered youth, and a peaceful society work hand-in-hand.
        </p>

        <div className="pt-2">
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-2.5 bg-river-teal hover:bg-deep-river text-white font-bold px-8 py-3.5 rounded-xl text-base transition-all shadow-md hover:shadow-lg"
          >
            <IconBook size={20} />
            <span>Read Our Full Origin Story</span>
          </button>
        </div>
      </div>

      {/* Modal Popup with Full-Page Scroll Freeze & Escape Key Listener */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative text-left space-y-4"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                aria-label="Close modal"
              >
                <IconX size={20} />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sunrise-orange">
                  Our Journey
                </span>
              </div>

              {/* Story Banner Image */}
              <div 
                className="w-full h-70 rounded-2xl bg-cover bg-center border border-slate-200 dark:border-slate-700 shadow-inner"
                style={{
                  backgroundImage: `url('/images/projects/mazingira-4.jpg')`,
                }}
              />

              <div className="space-y-6 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed pt-2">
                <div className="space-y-2">
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-deep-river dark:text-white">
                    Our Journey: Horizon Rivers of Hope Youth CBO
                  </h3>
                  <p className="text-sunrise-orange font-semibold italic text-base">
                    Turning challenges into opportunities, and hope into action.
                  </p>
                </div>

                <p>
                  Every community has a story. Some are written by circumstances, and others by people brave enough to change them. Ours began in Uasin Gishu with a simple realization: the young people and families around us had immense potential, but poverty, unemployment, environmental degradation, health challenges and social exclusion were holding them back.
                </p>

                <p>
                  Those challenges looked overwhelming, but we saw an opportunity in them. Instead of waiting for change to come from elsewhere, a group of youth leaders, health professionals and community champions came together with one dream: to build an organization that doesn&apos;t just respond to problems, but equips communities to lead their own solutions. That is how Horizon Rivers of Hope Youth CBO was born.
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="font-heading font-bold text-xl text-deep-river dark:text-white">
                    Why &ldquo;Rivers of Hope&rdquo;
                  </h4>
                  <p>
                    A river nourishes every piece of land it touches. It brings renewal, growth and life. That is the kind of organization we set out to be, one that carries opportunity into communities, restores dignity and inspires people to believe in what is possible.
                  </p>
                  <p>
                    What began as a small, passion-driven initiative has grown into a trusted community platform for empowering youth, improving livelihoods, promoting health, protecting the environment and strengthening social cohesion.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="font-heading font-bold text-xl text-deep-river dark:text-white">
                    Listening First
                  </h4>
                  <p>
                    Before we acted, we listened. We heard from unemployed youth searching for a first opportunity. We met women working tirelessly to support their families through economic hardship. We saw neighborhoods affected by poor waste management and pollution, and children facing barriers to education and families burdened by preventable illness.
                  </p>
                  <p>
                    These stories taught us that no single problem stands alone. Lasting change comes from addressing social, environmental, economic and health challenges together.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <h4 className="font-heading font-bold text-xl text-deep-river dark:text-white">
                    Our Four Pillars
                  </h4>

                  <div className="space-y-3 pl-4 border-l-2 border-river-teal">
                    <div>
                      <strong className="text-deep-river dark:text-white font-bold">1. Youth empowerment:</strong> Young people are not just beneficiaries of development. They are its most powerful agents. Through mentorship, skills development, entrepreneurship promotion, leadership training and community engagement, we help young people turn creativity into livelihoods and become productive citizens, community leaders and job creators.
                    </div>
                    <div>
                      <strong className="text-deep-river dark:text-white font-bold">2. Environmental sustainability:</strong> Environmental health shapes human health, economic growth and community well-being. We champion sustainable waste management, recycling, the circular economy, climate resilience and community sanitation. Through clean-ups, awareness campaigns and green enterprise, we are turning waste from a burden into an opportunity, because we believe waste can become wealth.
                    </div>
                    <div>
                      <strong className="text-deep-river dark:text-white font-bold">3. Health and well-being:</strong> Drawing on deep experience in community health, we support health education, prevention and linkages to essential services. Our commitment goes beyond treating illness to protecting dignity, mental well-being and community resilience.
                    </div>
                    <div>
                      <strong className="text-deep-river dark:text-white font-bold">4. Partnerships and social cohesion:</strong> We have learned that meaningful change happens when communities, government, development partners, the private sector and civil society work together. We engage the county government, community leaders, learning institutions, development agencies and environmental stakeholders to build solutions that last, and to strengthen peace and unity along the way.
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="font-heading font-bold text-xl text-deep-river dark:text-white">
                    Looking Ahead
                  </h4>
                  <p>We are proud of how far we have come, but we believe our greatest achievements still lie ahead. We envision communities where:</p>
                  <ul className="list-disc pl-6 space-y-1.5">
                    <li>Youth are equipped with skills, opportunities and leadership</li>
                    <li>Families live in clean, safe and healthy environments</li>
                    <li>Waste becomes wealth through circular economy initiatives</li>
                    <li>Women and vulnerable groups access sustainable livelihoods</li>
                    <li>Partnerships create lasting social and economic impact</li>
                    <li>Hope is turned into measurable change</li>
                  </ul>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="font-heading font-bold text-xl text-deep-river dark:text-white">
                    Our Commitment
                  </h4>
                  <p>
                    Our journey is not only about projects. It is about people. It is about restoring dignity where it has been lost, creating opportunity where none existed, and building resilience in the face of hardship. Above all, it is about making sure every young person, every family and every community has the chance to thrive.
                  </p>
                  <p className="font-semibold text-deep-river dark:text-white pt-2">
                    Transforming Lives, Restoring Hope, and Building Sustainable Communities for Future Generations.
                  </p>
                  <p className="p-4 rounded-xl bg-riverbank-cream dark:bg-slate-800/80 border-l-4 border-sunrise-orange italic font-medium text-deep-river dark:text-white mt-4">
                    &ldquo;We are not just imagining a better future. We are building it.&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-xl font-bold text-sm hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  Close Story
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}