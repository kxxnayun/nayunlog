import PostListItem from '@/components/posts/PostListItem';

const categories = [
  { name: '전체', count: 12 },
  { name: 'Next.js', count: 4 },
  { name: 'React', count: 3 },
  { name: 'CSS', count: 2 },
  { name: '개발 기록', count: 2 },
  { name: '회고', count: 1 },
];

const posts = [
  {
    date: '2026.11.18',
    category: 'NEXT.JS',
    title: 'Next.js App Router를 처음 시작하며 알게 된 것들',
    tags: ['Next.js', 'App Router'],
  },
  {
    date: '2026.11.12',
    category: 'REACT',
    title: '컴포넌트를 나누는 기준에 대한 작은 결론',
    tags: ['React', 'Component'],
  },
  {
    date: '2026.11.03',
    category: 'JOURNAL',
    title: '새 프로젝트를 시작할 때 내가 먼저 정하는 것',
    tags: ['회고', 'Project'],
  },
  {
    date: '2026.10.27',
    category: 'CSS',
    title: '좋은 간격은 어떻게 만드는 걸까',
    tags: ['CSS', 'Design'],
  },
  {
    date: '2026.10.20',
    category: 'NEXT.JS',
    title: '서버 컴포넌트는 어디까지 사용해야 할까',
    tags: ['Next.js', 'RSC'],
  },
  {
    date: '2026.10.13',
    category: 'DEV LOG',
    title: '처음 만든 블로그 구조를 다시 고친 이유',
    tags: ['Dev Log', 'Architecture'],
  },
];

export default function AllPosts() {
  return (
    <section id="posts" className="py-16">
      <div className="site-container">
        <p className="text-sm font-bold tracking-[0.12em] text-brand-blue">ALL POSTS</p>

        <h2 className="mt-2 text-[36px] font-bold tracking-[-0.03em] text-text-primary">전체 글</h2>

        <div className="mt-8 grid grid-cols-[264px_1fr] items-start gap-6">
          <aside>
            <h3 className="sr-only">카테고리</h3>

            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li
                  key={category.name}
                  className={`flex h-[42px] items-center justify-between rounded-[12px] px-4 text-sm ${
                    index === 0 ? 'bg-brand-sky font-bold text-text-primary' : 'text-text-secondary'
                  }`}
                >
                  <span>{category.name}</span>
                  <span>{category.count}</span>
                </li>
              ))}
            </ul>
          </aside>

          <div className="min-w-0">
            <div className="space-y-4">
              {posts.map((post) => (
                <PostListItem
                  key={post.title}
                  date={post.date}
                  category={post.category}
                  title={post.title}
                  tags={post.tags}
                />
              ))}
            </div>
          </div>
        </div>
        <nav className="mt-8 flex items-center justify-center gap-4" aria-label="페이지 이동">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-default text-text-tertiary opacity-50"
            aria-hidden="true"
          >
            ←
          </span>

          <span className="min-w-12 text-center text-sm text-text-secondary">
            <strong className="font-bold text-text-primary">1</strong>
            <span className="mx-1 text-text-tertiary">/</span>3
          </span>

          <span
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-default text-text-primary"
            aria-hidden="true"
          >
            →
          </span>
        </nav>
      </div>
    </section>
  );
}
