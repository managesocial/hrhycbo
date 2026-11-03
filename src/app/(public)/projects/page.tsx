import { ProjectsGrid } from '@/components/projects/ProjectsGrid';

export const metadata = {
  title: 'Projects | Horizon Rivers of Hope Youth CBO',
  description: 'Explore our youth eco-enterprises, school WASH programs, circular economy initiatives, and peacebuilding projects in Eldoret.',
};

export default function ProjectsPage() {
  return (
    <main className="pt-0 pb-16">
      {/* Page Header */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 text-center bg-deep-river text-white overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-sunrise-orange bg-sunrise-orange/10 px-3.5 py-1.5 rounded-full border border-sunrise-orange/30">
            Our Initiatives
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
            Community Projects Driving Real Impact
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            From recycling plastic waste into eco-bricks to restoring school WASH facilities and leading peace dialogues in Eldoret.
          </p>
        </div>
      </section>

      {/* Projects Grid Component */}
      <ProjectsGrid />
    </main>
  );
}