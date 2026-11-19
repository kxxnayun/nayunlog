import HeroSection from '@/components/home/HeroSection';
import RecentPosts from '@/components/home/RecentPosts';

export default function Home() {
  return (
    <>
      <HeroSection />
      <hr className="section-divider" />
      <RecentPosts />
      <hr className="section-divider" />
    </>
  );
}
