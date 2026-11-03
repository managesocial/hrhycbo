'use client';

import { motion } from 'framer-motion';
import { IconQuote } from '@tabler/icons-react';

export function PatronNote() {
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
          
          {/* Left Column: Patron Image Placeholder */}
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="relative w-48 h-60 sm:w-56 sm:h-72 rounded-2xl overflow-hidden border-4 border-river-teal/30 shadow-lg bg-slate-100 dark:bg-slate-800">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('images/team/grace.jpeg')`,
                }}
              />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-xl text-deep-river dark:text-white">
                Madam Grace Chepkemei Rono
              </h4>
              <p className="text-xs font-bold text-sunrise-orange uppercase tracking-wider mt-1">
                Patron, Horizon Rivers of Hope
              </p>
            </div>
          </div>

          {/* Right Column: Patron Message */}
          <div className="lg:col-span-8 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-river-teal/10 dark:bg-river-teal/30 text-river-teal dark:text-sunrise-orange text-xs font-bold uppercase tracking-wider">
              <IconQuote size={16} />
              A Word from Our Patron
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-deep-river dark:text-white leading-snug">
              &ldquo;Welcome to Horizon Rivers of Hope Youth CBO.&rdquo;
            </h2>

            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
              <p>
                Every great movement begins with a dream: that ordinary people, standing together, can bring about extraordinary change.
              </p>

              <p>
                Horizon Rivers of Hope Youth CBO was born from that dream, and from a conviction I hold with all my heart: our young people are not merely the leaders of tomorrow. They are the change-makers of today.
              </p>

              <p>
                We began with a simple purpose: to nurture, empower and inspire. We wanted every young person to discover the potential within them, rise above their challenges, and become a force for transformation in their family, their community and beyond. We built a space where hope could take root, where a young person could find opportunity, a mentor, and a hand to hold on the way forward.
              </p>

              <p>
                I have seen what happens when that hand is offered. I have watched young people, with little more than courage and a chance, become innovators, entrepreneurs, leaders and stewards of our environment. I have seen their resilience, their creativity and their stubborn determination to rise. This is what drives everything we do.
              </p>

              <p>
                Because at Horizon Rivers of Hope, we are building more than programmes and projects. We are building lives. We are restoring hope. We are raising a generation grounded in integrity, compassion, service and responsibility. Behind every young person we reach is a stronger family, a healthier community and a future that is a little brighter than it was before.
              </p>

              <p>
                Youth must strive to be active agents of their own well-being as well as that of the community, and to lead from the front, because they can, and in the long run their efforts will bring forth reward and success. So I invite you to walk this journey with us. Like a river that gathers strength from many streams, let us flow together, carrying hope to every corner of our society.
              </p>

              <p className="p-4 rounded-xl bg-riverbank-cream dark:bg-slate-800/80 border-l-4 border-sunrise-orange italic font-medium">
                When we invest in our youth, we invest in the future we all long for.
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}