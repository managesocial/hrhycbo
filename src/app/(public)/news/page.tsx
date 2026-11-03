import { NewsGrid } from '@/components/news/NewsGrid';

export const metadata = {
  title: 'Announcements & Updates | Horizon Rivers of Hope Youth CBO',
  description: 'Stay updated with upcoming community projects, environmental drives, and past impact milestones by Horizon Rivers of Hope in Eldoret.',
};

export default function NewsPage() {
  return (
    <main className="pt-0 pb-16">
      {/* Page Header */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 text-center bg-deep-river text-white overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-sunrise-orange bg-sunrise-orange/10 px-3.5 py-1.5 rounded-full border border-sunrise-orange/30">
            Community Board
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
            Announcements &amp; Impact Updates
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Discover our upcoming community initiatives, policy advocacy milestones, and grassroots events across Uasin Gishu County.
          </p>
        </div>
      </section>

      {/* News & Announcements Grid */}
      <NewsGrid />
    </main>
  );
}