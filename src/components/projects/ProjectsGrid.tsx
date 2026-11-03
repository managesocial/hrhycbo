'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IconMapPin, 
  IconCalendar, 
  IconArrowRight, 
  IconX, 
  IconCheck,
  IconBrandPaypal,
  IconBrandGoogleDrive,
  IconPhoto,
  IconTrophy,
  IconClock
} from '@tabler/icons-react';

interface Project {
  id: string;
  title: string;
  category: 'sanitation' | 'enterprise' | 'wash' | 'peace' | 'health';
  categoryLabel: string;
  location: string;
  timePeriod: string;
  status: 'Active' | 'Ongoing' | 'Completed';
  summary: string;
  fullDescription: string;
  achievements: string[];
  galleryImages: string[];
  driveFolderUrl: string;
  imageUrl: string;
}

const projects: Project[] = [
 {
    id: 'cesip-uasin-gishu-consultation',
    title: 'From Landfill Stigma to Regeneration Pride',
    category: 'sanitation',
    categoryLabel: 'Sanitation & Circular Economy',
    location: 'Boma Inn Hotel, Eldoret',
    timePeriod: '16th October 2026',
    status: 'Completed',
    summary: '"From landfill stigma to regeneration pride, Horizon Rivers of Hope Youth CBO showed that the circular economy is not just policy but practice. By cooking everyday meals with the sun, we proved that clean energy can nourish homes, protect health and empower communities." — Ronoh Hamleyz Dan, Chairman',
    fullDescription: `Eldoret, 16th October 2026. At Boma Inn in Eldoret, between policy papers and county dignitaries, a cake was baking in the sun. It was the boldest argument in the room.

      Horizon Rivers of Hope Youth CBO (HRHYCBO) had come to the Uasin Gishu Chapter of the Circular Economy Strategy and Implementation Plan (CESIP 2027-2032) consultations, convened by the National Government through the Ministry of Environment, Climate Change and Forestry and co-hosted by the Uasin Gishu County Department of Environment, Water, Energy, Climate Change and Natural Resources. The forum was graced by the CECM, Directors and top county leadership.

      CESIP will guide Kenya's shift from a linear "take, make, dispose" economy to one that is resource-efficient, inclusive and competitive. The organizers invited grassroots voices to help write that future, and Horizon Rivers of Hope Youth CBO arrived to speak for the young people who will inherit it.

      A case for closing the dumpsites:
      Horizon Rivers of Hope CBO urged leaders to retire the landfill and replace dumpsites with industrial parks and gardens, spaces that lift urban life and win investor confidence. As proof that this is possible, the organization presented the Kipkenyo Resource Recovery Facility as a living blueprint for turning waste into wealth.

      Clean energy you can taste:
      Then the organization let the sun do the talking. Before delegates, Horizon Rivers of Hope CBO cooked cake, rice, eggs and vegetables using solar energy alone, with no smoke, charcoal or firewood. The demonstration showed that renewable energy is practical, versatile and ready for the ordinary household kitchen.

      Aligned with the national vision:
      Horizon Rivers of Hope CBO's contributions mirrored CESIP's own priorities across waste management, energy transition, inclusive growth, partnerships, and community-driven innovation.

      What it means:
      Horizon Rivers of Hope CBO's inputs rooted CESIP more firmly in community realities. The sun-baked cake made clean energy feel familiar and attainable, and the day opened new pathways for collaboration with county leadership on waste-to-wealth and renewable energy initiatives.`,
    achievements: [
      'Waste management: Backed the move from dumpsites to resource recovery and industrial symbiosis using Kipkenyo as the model.',
      'Energy transition: Demonstrated household-level renewable energy at work through zero-emission solar thermal cooking.',
      'Inclusive growth: Placed waste pickers and young people at the center of deliberations, advocating for policy recognition.',
      'Partnerships & Innovation: Pledged collaboration with Uasin Gishu County to unlock stalled Circular Economy policies and scale youth solutions.',
    ],
    galleryImages: [
      'images/projects/bomain-2.jpg',
      'images/projects/bomain-3.jpg',
      'images/projects/bomain-4.jpg',
    ],
    driveFolderUrl: 'https://photos.app.goo.gl/k7qLZnkntJ4PJgMS8',
    imageUrl: '/images/projects/bomain-5.jpg',
  },
{
    id: 'uasin-gishu-county-entry-meeting',
    title: 'Entry Meeting with Uasin Gishu County: A New Chapter Begins',
    category: 'sanitation', // Categorized alongside governance and policy dialogues
    categoryLabel: 'Policy & Deliberations',
    location: 'Golden Palace Hotel, Eldoret',
    timePeriod: 'Aug 26, 2026',
    status: 'Completed',
    summary: 'Turning Waste into Wealth together. We took our seat at the table with Uasin Gishu County. Our call: a Circular Economy that restores dignity to waste pickers and gives youth a real voice. One policy stands stalled, and we will walk with the County until it lives.',
    fullDescription: `To mark Horizon Rivers of Hope Youth CBO's formal entry into county-level deliberations, an entry meeting was convened to place the Circular Economy and inclusive Public-Private Partnerships (PPP) at the center of Uasin Gishu's future.

The high-level session brought together five Directors and Principals of Uasin Gishu County leadership, executive representatives from the Waste Pickers Association carrying the voice of the grassroots, youth leaders bringing energy and fresh ideas, and Horizon Rivers of Hope Youth CBO present with conviction and a readiness to partner.

For the first time, Horizon sat at the table with county leadership as a recognized partner. We called for a Circular Economy that turns waste into wealth, restores dignity to the waste pickers who have long worked unseen, and gives young people a real place in shaping the county's future.

We also named a hard truth: the county's policy document on the Circular Economy and PPP is stalled. Without it, a good idea cannot become a lasting reality. Horizon pledged to walk with the County until that document is completed and becomes a living framework, not a paper on a shelf.

This was more than a meeting. Government, community, and youth stood together around one vision, and the waste picker, the young innovator, and the public servant all found a common cause.`,
    achievements: [
      'A welcome: County leadership received Horizon warmly and recognized the part that youth and waste pickers must play in shaping policy.',
      'A priority: The stalled policy was acknowledged as a matter needing urgent attention.',
      'A promise: Horizon committed to stand beside the County as a steadfast partner, from completion of the policy through to its implementation.',
    ],
    galleryImages: [
      '/images/projects/policy-framework-2.jpg',
      '/images/projects/policy-framework-3.jpg',
      '/images/projects/policy-framework-4.jpg',
    ],
    driveFolderUrl: 'https://photos.app.goo.gl/2rCsx19KcWtoxMWH9',
    imageUrl: '/images/projects/policy-framework-1.jpg',
  },
{
    id: 'bishop-korir-peace',
    title: 'Bishop Korir Peace & Social Cohesion Initiative',
    category: 'peace',
    categoryLabel: 'Peace, Global Citizenship & Partnerships',
    location: 'Sosiani River Bank, Eldoret',
    timePeriod: 'August 2026 – Present',
    status: 'Ongoing',
    summary: 'Restoring the land, connecting communities, and inspiring the world through environmental action, interfaith youth dialogues, cultural exchanges, and global cooperation.',
    fullDescription: `Peace begins when people unite to care for the places they share. Inspired by the enduring legacy of Bishop Cornelius Korir, this pillar transforms environmental action into a powerful bridge connecting neighbours, faiths, cultures, and communities across the world. 

    Through cultural exchange and intercultural learning, young people share their stories, traditions, and experiences while embracing those of others, fostering mutual understanding, respect, and solidarity. As local communities restore their environment and global partners stand alongside them, Eldoret becomes a living example of how peace can be built through collective action, shared responsibility, and human connection.

    Bishop Korir Peace & Social Cohesion Initiative:
    Young people leading the way. Through clean-up drives, interfaith collaboration, and open community dialogue, we are uniting people of every background around one shared dream: Eldoret as a City of Peace.

    Korir Peace Parks & Shared Spaces:
    Riversides and public grounds reborn as safe, beautiful places for everyone. These are spaces where neighbours meet, children play, and communities learn and celebrate side by side.

    Cultural Exchange & Intercultural Learning:
    Youth, schools, and faith communities sharing stories, traditions, and practical ideas. Through every exchange, we learn from one another how to protect our environment and build lasting understanding.

    Sister Cities & International Cooperation:
    Lasting friendships between Eldoret and cities across the globe, growing into partnerships in education, culture, sustainability, and youth innovation that benefit all who take part.

    Global Citizenship & Youth Leadership:
    Preparing a generation of confident young leaders who carry Eldoret's solutions to the world, bring the world's best ideas home, and prove that change in one community can inspire many.`,
    achievements: [
      'Bishop Korir Peace & Social Cohesion: United diverse backgrounds through clean-up drives, interfaith collaboration, and open community dialogue.',
      'Korir Peace Parks & Shared Spaces: Reborn riversides and public grounds into safe, beautiful places for neighbours to meet and celebrate.',
      'Cultural Exchange & Intercultural Learning: Empowered youth, schools, and faith communities to share stories and practical ideas.',
      'Sister Cities & International Cooperation: Established lasting global friendships and partnerships in education, culture, and sustainability.',
      'Global Citizenship & Youth Leadership: Prepared confident young leaders to carry Eldoret solutions to the world.',
    ],
    galleryImages: [
      '/images/projects/peace-park-1.jpeg',
      '/images/projects/peace-park-2.jpeg',
      '/images/projects/peace-park-3.jpeg',
    ],
    driveFolderUrl: 'https://photos.app.goo.gl/placeholder_link',
    imageUrl: '/images/projects/peace-park-4.jpeg',
  },
  {
    id: 'mazingira-day-cleanup',
    title: 'Horizon Rivers of Hope - Mazingira (Town Cleaning)',
    category: 'sanitation',
    categoryLabel: 'Sanitation & Circular Economy',
    location: 'Uasin Gishu County Offices, Eldoret',
    timePeriod: 'Oct 2026',
    status: 'Completed',
    summary: 'Horizon Rivers of Hope Youth CBO, side by side with the Uasin Gishu County Government, the City of Eldoret, and partners who believed in this vision, rolled up our sleeves and gave our town back its heart.',
    fullDescription: `Before we took a single step, our Chairman stood before the team and spoke about mental health awareness. He reminded us that we cannot heal our environment while our own minds are weary, that caring for the earth begins with caring for each other. Then the flag-off came, in the presence of the County Commissioner, Uasin Gishu, the CECM for Environment, the City Manager, Eldoret, and many other dignitaries who chose to stand with the youth and the people of Eldoret City.

          Nandi Gardens: Where litter once gathered, a green haven breathes again.
          The Stage: Among Eldoret's busiest spaces, where thousands pass every day, dignity has been restored.
          Sosiani River: She has carried our waste for too long, in silence. Now the debris is gone, and she flows again with new life.

          This was never just a clean-up. It was young hands and leaders' hands working as one. It was pride in the place we call home. It was hope, made visible.

          From the bottom of our hearts, special appreciation to Sosiani Senior School. Your students and staff reminded us that the future is already here, and it is caring, bold and ready to serve. We see you. We are proud of you.

          We are Horizon Rivers of Hope Youth CBO. We empower youth. We safeguard health. We protect our environment.

          Because when we heal our gardens, our streets and our rivers, we heal our community. And when we heal our community, we heal ourselves.

          The work is not finished. The river is still calling. Will you answer?`,
    achievements: [
      'Restored Nandi Gardens into a thriving green haven.',
      'Revitalized high-traffic bus stages and public commuter spaces.',
      'Cleared accumulated debris along the Sosiani River buffer zones.',
      'Partnered with Sosiani Senior School students and local government leadership.',
    ],
    galleryImages: [
      '/images/projects/mazingira-5.jpg',
      '/images/projects/mazingira-2.jpg',
      '/images/projects/mazingira-3.jpg',
    ],
    driveFolderUrl: 'https://photos.app.goo.gl/4PtYGW7d7kVwCJ8q9',
    imageUrl: '/images/projects/mazingira-4.jpg',
  },

  {
    id: 'uasin-gishu-waste-regulations-review',
    title: 'Building a Cleaner, Healthier Uasin Gishu Together',
    category: 'sanitation', // Categorized under policy and stakeholder deliberations
    categoryLabel: 'Policy & Deliberations',
    location: 'Golden Palace Hotel, Eldoret',
    timePeriod: '16th – 17th Sept 2026',
    status: 'Completed',
    summary: 'Stakeholders across Uasin Gishu gathered in a workshop supported by Horizon Rivers of Hope Youth CBO to review and refine the Draft Uasin Gishu County Waste Management Regulations, 2024.',
    fullDescription: `On 16th and 17th September 2026, the Golden Palace Hotel in Eldoret became a meeting point for the future of our county. 

    Supported by Horizon Rivers of Hope Youth CBO, stakeholders from across Uasin Gishu gathered to review the Draft Uasin Gishu County Waste Management Regulations, 2024. County officials, environmental practitioners, waste management players, youth groups, community representatives, the private sector, and residents sat at one table, because waste affects every household, business, and institution in our county.

    We sincerely thank the leadership of Uasin Gishu County Government and Eldoret City for their openness, commitment, and willingness to listen to the people they serve. We also thank the Association of Waste Pickers, whose daily work on the ground keeps our towns cleaner and whose lived experience made the discussions richer and more practical. Their voices are essential to any regulation that hopes to work.

    Regulations alone will not give us a clean county. Every one of us has a role to play—from residents separating waste at home, businesses investing in sustainable practices, youth leading neighborhood awareness, to county leaders implementing the final framework fairly and transparently.

    The recommendations gathered will now inform the refinement of the draft regulations, ensuring the final framework reflects both national standards and the daily realities of our communities. When communities, institutions, businesses, and government work together, waste becomes an opportunity for transformation.`,
    achievements: [
      'Established clear waste segregation procedures at source across households and institutions.',
      'Advocated for adequate waste management infrastructure and stronger accountability for waste generators.',
      'Secured formal recognition of waste management as a critical public health, economic, and social responsibility.',
      'Integrated the lived experiences and essential voices of the Association of Waste Pickers into county policy.',
      'Strengthened multi-stakeholder commitment to ongoing public participation in environmental governance.',
    ],
    galleryImages: [
      '/images/projects/waste-regulations-1.jpg',
      '/images/projects/waste-regulations-2.jpg',
      '/images/projects/waste-regulations-3.jpg',
    ],
    driveFolderUrl: 'https://photos.app.goo.gl/RGtX6vaShrXFCn236',
    imageUrl: '/images/projects/waste-regulations-4.jpg',
  },

];

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Handle Escape key navigation and body scroll-locking
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (lightboxImage) {
          setLightboxImage(null);
        } else if (activeProject) {
          setActiveProject(null);
        }
      }
    };

    if (activeProject || lightboxImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject, lightboxImage]);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {[
          { id: 'all', label: 'All Projects' },
          { id: 'sanitation', label: 'Sanitation & Circular' },
          { id: 'enterprise', label: 'Youth Eco-Enterprises' },
          { id: 'wash', label: 'Health & Wash' },
          { id: 'peace', label: 'Peace, Global Citizenship & Partnerships' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md overflow-hidden hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              {/* Card Image */}
              <div 
                className="w-full h-56 bg-cover bg-center relative"
                style={{ backgroundImage: `url('${project.imageUrl}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-river-teal text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.categoryLabel}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                  <span className="flex items-center gap-1">
                    <IconMapPin size={14} className="text-sunrise-orange" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1 bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10">
                    <IconClock size={13} className="text-sunrise-orange" />
                    {project.timePeriod}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-3">
                <h3 className="font-heading font-bold text-xl text-deep-river dark:text-white leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.summary}
                </p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80">
              <span className="text-xs font-bold text-leaf-green flex items-center gap-1">
                <IconCheck size={15} />
                {project.status}
              </span>
              <button
                onClick={() => setActiveProject(project)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sunrise-orange hover:text-sunrise-orange/80 transition-colors"
              >
                <span>Full Project Details</span>
                <IconArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full-Featured Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-left space-y-6"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                aria-label="Close modal"
              >
                <IconX size={20} />
              </button>

              {/* Modal Header */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-sunrise-orange bg-sunrise-orange/10 px-3 py-1 rounded-full">
                    {activeProject.categoryLabel}
                  </span>
                  <span className="text-xs font-bold text-leaf-green bg-leaf-green/10 px-3 py-1 rounded-full flex items-center gap-1">
                    <IconCheck size={14} />
                    {activeProject.status}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-deep-river dark:text-white leading-snug">
                  {activeProject.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <IconMapPin size={15} className="text-river-teal" />
                    {activeProject.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <IconCalendar size={15} className="text-river-teal" />
                    Time Period: {activeProject.timePeriod}
                  </span>
                </div>
              </div>

              {/* Main Image */}
              <div 
                className="w-full h-64 sm:h-72 rounded-2xl bg-cover bg-center border border-slate-200 dark:border-slate-700 shadow-md"
                style={{ backgroundImage: `url('${activeProject.imageUrl}')` }}
              />

              {/* Full Description Split Into Paragraphs */}
              <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <h4 className="font-heading font-bold text-lg text-deep-river dark:text-white">
                  Project Overview
                </h4>
                {activeProject.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>

              {/* Key Achievements */}
              <div className="p-6 rounded-2xl bg-riverbank-cream/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 space-y-4">
                <h4 className="font-heading font-bold text-base text-deep-river dark:text-white flex items-center gap-2">
                  <IconTrophy size={20} className="text-sunrise-orange" />
                  Key Achievements &amp; Outcomes
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {activeProject.achievements.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <IconCheck size={18} className="text-leaf-green shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Gallery */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-bold text-base text-deep-river dark:text-white flex items-center gap-2">
                    <IconPhoto size={20} className="text-river-teal" />
                    Project Gallery
                  </h4>
                  <a
                    href={activeProject.driveFolderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-river-teal dark:text-sunrise-orange hover:underline"
                  >
                    <IconBrandGoogleDrive size={16} />
                    <span>View All Drive Photos</span>
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {activeProject.galleryImages.map((imgUrl, i) => (
                    <button
                      key={i}
                      onClick={() => setLightboxImage(imgUrl)}
                      className="group relative h-24 sm:h-28 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 focus:outline-none"
                    >
                      <div 
                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                        style={{ backgroundImage: `url('${imgUrl}')` }}
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <IconPhoto size={20} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800">
                <a
                  href="https://www.paypal.com/ncp/payment/PRPA22PX46YBN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sunrise-orange hover:bg-sunrise-orange/90 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md"
                >
                  <IconBrandPaypal size={18} />
                  <span>Donate to This Initiative</span>
                </a>
                <button
                  onClick={() => setActiveProject(null)}
                  className="w-full sm:w-auto px-6 py-3 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-xl font-bold text-sm hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal for Gallery Images */}
      <AnimatePresence>
        {lightboxImage && (
          <div 
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <IconX size={24} />
            </button>
            <img 
              src={lightboxImage} 
              alt="Gallery Preview" 
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            />
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}