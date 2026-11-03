'use client';

import { motion } from 'framer-motion';
import { 
  IconTargetArrow, 
  IconEye, 
  IconPlant, 
  IconUsers, 
  IconHeart, 
  IconShieldCheck, 
  IconWorld, 
  IconBulb,
  IconScale
} from '@tabler/icons-react';

const values = [
  {
    title: 'Environmental Stewardship',
    desc: 'Upholding environmental sanitation as the foundation of health, clean rivers, and a thriving circular economy.',
    icon: IconPlant,
  },
  {
    title: 'Youth Empowerment',
    desc: 'Mentoring young people to lead change through eco-enterprises, peer education, and cultural innovation.',
    icon: IconUsers,
  },
  {
    title: 'Community Resilience',
    desc: 'Strengthening WASH systems and inclusive participation to build adaptive communities.',
    icon: IconShieldCheck,
  },
  {
    title: 'Health & Wellbeing',
    desc: 'Integrating sanitation, hygiene, and preventive health campaigns to improve outcomes for all.',
    icon: IconHeart,
  },
  {
    title: 'Cultural Exchange & Solidarity',
    desc: 'Embracing sister city partnerships to connect Eldoret with global learning networks.',
    icon: IconWorld,
  },
  {
    title: 'Integrity & Accountability',
    desc: 'Committing to transparency, responsible resource management, and ethical leadership.',
    icon: IconScale,
  },
  {
    title: 'Innovation & Sustainability',
    desc: 'Championing creative solutions and circular economy models that generate green jobs.',
    icon: IconBulb,
  },
];

export function MissionVisionValues() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Mission & Vision Grid with Image Placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-river-teal/30 shadow-lg space-y-5"
        >
          <div 
            className="w-full h-44 rounded-2xl bg-cover bg-center border border-slate-200 dark:border-slate-800"
            style={{
              backgroundImage: `url('/images/projects/mazingira-1.jpg')`,
            }}
          />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-river-teal text-white flex items-center justify-center shrink-0">
              <IconTargetArrow size={24} />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-deep-river dark:text-white">
              Our Mission
            </h3>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Horizon Rivers of Hope Youth CBO exists to transform communities through environmental sanitation as the cornerstone of health, youth empowerment, and sustainable development. By advancing cleanliness, recycling, and school-based hygiene, we strengthen WASH systems, inspire eco-enterprises, and cultivate resilient leadership.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-sunrise-orange/30 shadow-lg space-y-5"
        >
          <div 
            className="w-full h-44 rounded-2xl bg-cover bg-center border border-slate-200 dark:border-slate-800"
            style={{
              backgroundImage: `url('/images/projects/mazingira-2.jpg')`,
            }}
          />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sunrise-orange text-white flex items-center justify-center shrink-0">
              <IconEye size={24} />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-deep-river dark:text-white">
              Our Vision
            </h3>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            To see Eldoret emerge as a beacon of community resilience, where environmental sanitation drives health, youth empowerment, and sustainable livelihoods. Through recycling, school hygiene, and sister city cultural exchange, we envision a connected world where clean environments and empowered youth flow together.
          </p>
        </motion.div>

      </div>

      {/* Core Values Section */}
      <div className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-river-teal dark:text-sunrise-orange">
            Guiding Principles
          </span>
          <h3 className="font-heading text-3xl font-extrabold text-deep-river dark:text-white">
            Our Core Values
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            These values serve as our guiding principles across all community initiatives, policy reviews, and partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-river-teal/10 dark:bg-river-teal/30 text-river-teal dark:text-sunrise-orange shrink-0">
                  <Icon size={22} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-base text-deep-river dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}