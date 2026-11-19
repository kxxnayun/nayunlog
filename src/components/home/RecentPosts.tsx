import RecentPostCard from '../posts/RecentPostCard';
import type { PostSummary } from '@/lib/posts';

type RecentPostsProps = {
  posts: PostSummary[];
};

export default function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <section className="py-16">
      <div className="site-container">
        <div>
          <p className="text-sm font-bold tracking-[0.12em] text-brand-blue">RECENT</p>

          <h2 className="mt-2 text-[36px] font-bold tracking-[-0.03em] text-text-primary">
            최근 글
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <RecentPostCard
              key={post.slug}
              href={`/posts/${post.slug}`}
              number={String(index + 1).padStart(2, '0')}
              category={post.category}
              title={post.title}
              tags={post.tags}
              description={post.description}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
