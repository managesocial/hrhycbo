import { HeroSection } from '@/components/home/HeroSection';
import { CorePillars } from '@/components/home/CorePillars';
import { FeaturedNews } from '@/components/home/FeaturedNews';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CorePillars />
      <FeaturedNews />
      <CTASection />
    </main>
  );
}