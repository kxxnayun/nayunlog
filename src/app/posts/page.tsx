import AllPosts from '@/components/home/AllPosts';
import { getAllPosts } from '@/lib/posts';

export default async function PostsPage() {
  const posts = await getAllPosts();

  return <AllPosts posts={posts} />;
}
