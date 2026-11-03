import { AboutHeroModal } from '@/components/about/AboutHeroModal';
import { MissionVisionValues } from '@/components/about/MissionVisionValues';
import { ChairmanNote } from '@/components/about/ChairmanNote';
import { MeetTheTeam } from '@/components/about/MeetTheTeam';
import { PatronNote } from '@/components/about/PatronNote';

export const metadata = {
  title: 'About Us | Horizon Rivers of Hope Youth CBO',
  description: 'Learn about our history, Chairman message, mission, vision, core values, and community leadership in Eldoret.',
};

export default function AboutPage() {
  return (
    <main className="pt-0 pb-12">
      {/* 1. Hero Overview Excerpt + Modal Button */}
      <AboutHeroModal />

      {/* 2. Mission, Vision, and Core Values */}
      <MissionVisionValues />

      {/* 3. Note from the Chairman */}
      <PatronNote />

      {/* 4. Meet the Team */}
      <MeetTheTeam />
    </main>
  );
}