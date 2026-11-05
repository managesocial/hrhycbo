import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedNews } from '@/components/home/FeaturedNews';
import { CTASection } from '@/components/home/CTASection';
import { ChairmanNote } from '@/components/about/ChairmanNote';
import { MissionVisionValues } from '@/components/about/MissionVisionValues';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MissionVisionValues />      
      <ChairmanNote />
      <FeaturedNews />
      <CTASection />
    </main>
  );
}