'use client';

import { motion } from 'framer-motion';
import { IconBrandLinkedin, IconMail } from '@tabler/icons-react';

const leadershipCircle = [
  {
    name: 'Madam Grace Chepkemei',
    role: 'The Patron & Global Ambassador',
    bio: 'Guiding strategic vision and global partnership networks for Horizon Rivers of Hope.',
    imageUrl: '/images/team/grace.jpeg',
  },
  {
    name: 'Ronoh Hamleyz K. Dan',
    role: 'Chief Convener',
    bio: 'Directs organizational growth, policy engagements, and community leadership in Eldoret.',
    imageUrl: '/images/team/ronoh.jpeg',
  },
  {
    name: 'Josphat Kiplagat Kimeli',
    role: 'Deputy Convener',
    bio: 'Supports executive operations, program alignment, and grassroots mobilization.',
    imageUrl: '/images/team/josphat.jpeg',
  },
  {
    name: 'Emmanuel Waswa Wanyama',
    role: 'Secretary',
    bio: 'Manages official documentation, institutional correspondence, and records.',
    imageUrl: '/images/team/emmanuel.jpeg',
  },
  {
    name: 'Louis Kipkoech Kiarie',
    role: 'Vice-Secretary',
    bio: 'Assists with secretarial duties, internal communication, and event logistics.',
    imageUrl: '/images/team/louis.jpeg',
  },
  {
    name: 'Maureen Jebet',
    role: 'Treasurer',
    bio: 'Oversees financial accountability, budgeting, and resource management.',
    imageUrl: '/images/team/maureen.jpeg',
  },
];

const foundingMembers = [
  

  {
    name: 'Joseph Nyinek Madlang',
    role: 'Technical Lead Partnerships',
    bio: 'Fosters institutional alliances, NGO collaborations, and donor relations.',
    imageUrl: 'images/team/joseph.jpeg',
  },

  {
    name: 'Denis Kipkemei Bitok',
    role: 'Communications Lead',
    bio: 'Spearheads media campaigns, public relations, and digital community storytelling.',
    imageUrl: 'images/team/bitok.jpeg',
  },
  {
    name: 'Festus Kipchirchir Birgen',
    role: 'Members Rep',
    bio: 'Represents general membership interests and bridges volunteer needs with leadership.',
    imageUrl: '/images/team/festus.jpeg',
  },

  {
    name: 'Jackline Jerotich Cheruiyot',
    role: 'Member',
    bio: 'Founding contributor focused on community outreach and youth mobilization.',
    imageUrl: 'images/team/jacklyne.jpeg',
  },
  {
    name: 'Carolyne Jebichi Kiplimo',
    role: 'Member',
    bio: 'Founding member driving local sanitation and environmental health awareness.',
    imageUrl: '/images/team/carolyne.jpeg',
  },
  
  {
    name: 'Abigael Jelagat Kirwa',
    role: 'Member',
    bio: 'Founding member advocating for school WASH infrastructure and youth peer support.',
    imageUrl: '/images/team/abigael.jpeg',
  },
];

export function MeetTheTeam() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      
      {/* 1. Leadership Circle */}
      <div className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-river-teal dark:text-sunrise-orange">
            Executive Leadership
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-deep-river dark:text-white">
            Leadership Circle
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Guiding Horizon Rivers of Hope&apos;s strategic vision, governance, and community impact across Uasin Gishu County.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipCircle.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center space-y-4"
            >
              {/* Image Placeholder Avatar */}
              <div 
                className="w-28 h-28 rounded-full bg-cover bg-center border-2 border-river-teal/40 shadow-md"
                style={{ backgroundImage: `url('${member.imageUrl}')` }}
              />

              <div className="space-y-1">
                <h3 className="font-heading font-bold text-lg text-deep-river dark:text-white">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-sunrise-orange uppercase tracking-wider">
                  {member.role}
                </p>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. Founding Members */}
      <div className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-river-teal dark:text-sunrise-orange">
            Our Pillars
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-deep-river dark:text-white">
            Founding Members
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Established by 12 visionary founders who anchored the organization&apos;s mission in environmental sanitation, youth empowerment, and community resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {foundingMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center space-y-4"
            >
              {/* Image Placeholder Avatar */}
              <div 
                className="w-28 h-28 rounded-full bg-cover bg-center border-2 border-river-teal/40 shadow-md"
                style={{ backgroundImage: `url('${member.imageUrl}')` }}
              />

              <div className="space-y-1">
                <h3 className="font-heading font-bold text-lg text-deep-river dark:text-white">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-sunrise-orange uppercase tracking-wider">
                  {member.role}
                </p>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}