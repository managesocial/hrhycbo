//import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { DynamicGalleryGrid } from '@/components/gallery/DynamicGalleryGrid';

export const metadata = {
  title: 'Gallery | Horizon Rivers of Hope Youth CBO',
  description: 'View photos and media coverage from our community cleanups, school WASH drives, and peace initiatives in Eldoret.',
};

export default function GalleryPage() {
  return (
    <main className="pt-0 pb-16">
      {/* Page Header */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 text-center bg-deep-river text-white overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-sunrise-orange bg-sunrise-orange/10 px-3.5 py-1.5 rounded-full border border-sunrise-orange/30">
            Visual Storytelling
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
            Our Impact in Pictures
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Moments captured across local dumpsite cleanups, school hygiene programs, and peace park dialogues in Uasin Gishu County.
          </p>
        </div>
      </section>

      {/* Interactive Gallery Grid Component 
      <GalleryGrid />*/}
      <DynamicGalleryGrid />
    </main>
  );
}