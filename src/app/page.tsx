import AllPosts from '@/components/home/AllPosts';
import HeroSection from '@/components/home/HeroSection';
import RecentPosts from '@/components/home/RecentPosts';
import { getAllPosts } from '@/lib/posts';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <HeroSection />
      <hr className="section-divider" />
      <RecentPosts posts={posts.slice(0, 3)} />
      <hr className="section-divider" />
      <AllPosts posts={posts} showAllPostsLink />
      <hr className="section-divider" />
    </>
  );
}
