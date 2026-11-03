'use client';

import { motion } from 'framer-motion';
import { IconQuote } from '@tabler/icons-react';

export function ChairmanNote() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Horizontal Left Column: Chief Convener Image Placeholder */}
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="relative w-48 h-60 sm:w-56 sm:h-72 rounded-2xl overflow-hidden border-4 border-river-teal/30 shadow-lg bg-slate-100 dark:bg-slate-800">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('images/team/dronoh.jpeg')`,
                }}
              />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-xl text-deep-river dark:text-white">
                Ronoh Hamleyz Dan
              </h4>
              <p className="text-xs font-bold text-sunrise-orange uppercase tracking-wider mt-1">
                Chief Convener, Horizon Rivers of Hope
              </p>
            </div>
          </div>

          {/* Horizontal Right Column: Chief Convener Message */}
          <div className="lg:col-span-8 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-river-teal/10 dark:bg-river-teal/30 text-river-teal dark:text-sunrise-orange text-xs font-bold uppercase tracking-wider">
              <IconQuote size={16} />
              Note from the Chief Convener
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-deep-river dark:text-white leading-snug">
              &ldquo;Every river begins as a small stream, and every stream is carried by hope.&rdquo;
            </h2>

            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
              <p>
                Horizon Rivers of Hope Youth CBO was born from a simple belief: that young people are not merely the future of Uasin Gishu, but the strength of its present. In our clean-ups, our conversations about health and wellbeing, and our work to protect the environment we share, we have seen what happens when young people are given purpose and a place to lead. Ordinary hands become agents of change, and small acts become movements.
              </p>

              <p>
                Our work is rooted in the realities of our community. We care for our environment because a clean, healthy home is the foundation of a dignified life. We champion health, including the mental wellbeing of our youth, because a generation that is well in mind and body is a generation that can build, dream and lead.
              </p>

              <p className="p-4 rounded-xl bg-riverbank-cream dark:bg-slate-800/80 border-l-4 border-sunrise-orange italic font-medium">
                Our journey would not have begun without <strong>Clarence Jones</strong>, the man who believed in us when no one else could. When our dream was only an idea and our hands were few, he saw the river in the stream. His faith gave us courage, and his trust gave us the push to start.
              </p>

              <p>
                Together, like many streams becoming a mighty river, we will flow toward a horizon of hope.
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}