'use client';

import { useMemo, useState } from 'react';
import EditorialLink from '@/components/common/EditorialLink';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import PostListItem from '@/components/posts/PostListItem';
import type { PostSummary } from '@/lib/posts';

type AllPostsProps = {
  posts: PostSummary[];
  showAllPostsLink?: boolean;
  showHomeLink?: boolean;
};

const POSTS_PER_PAGE = 6;

export default function AllPosts({
  posts,
  showAllPostsLink = false,
  showHomeLink = false,
}: AllPostsProps) {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => {
    const counts = posts.reduce<Record<string, number>>((categoryCounts, post) => {
      categoryCounts[post.category] = (categoryCounts[post.category] ?? 0) + 1;
      return categoryCounts;
    }, {});

    return [
      { name: '전체', count: posts.length },
      ...Object.entries(counts).map(([name, count]) => ({ name, count })),
    ];
  }, [posts]);

  const filteredPosts =
    selectedCategory === '전체'
      ? posts
      : posts.filter((post) => post.category === selectedCategory);
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section id="posts" className="py-16">
      <div className="site-container">
        {showHomeLink && (
          <Breadcrumbs items={[{ label: 'HOME', href: '/' }, { label: 'ALL POSTS' }]} />
        )}

        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-bold tracking-[0.12em] text-brand-blue">ALL POSTS</p>

            <h2 className="mt-2 text-[36px] font-bold tracking-[-0.03em] text-text-primary">
              전체 글
            </h2>
          </div>

          {showAllPostsLink && (
            <EditorialLink href="/posts" dataNodeId="91:348" className="mb-1">
              {'ALL POSTS  →'}
            </EditorialLink>
          )}
        </div>

        <div className="mt-8 grid grid-cols-[264px_1fr] items-start gap-6">
          <aside>
            <h3 className="sr-only">카테고리</h3>

            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <button
                    type="button"
                    onClick={() => selectCategory(category.name)}
                    className={`flex h-[42px] w-full items-center justify-between rounded-[12px] px-4 text-sm ${
                      selectedCategory === category.name
                        ? 'bg-brand-sky font-bold text-text-primary'
                        : 'text-text-secondary'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span>{category.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="min-w-0">
            <div className="space-y-4">
              {currentPosts.map((post) => (
                <PostListItem
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  date={post.date}
                  category={post.category}
                  title={post.title}
                  tags={post.tags}
                />
              ))}
            </div>
          </div>
        </div>

        <nav className="mt-8 flex items-center justify-center gap-2" aria-label="페이지 이동">
          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={currentPage === 1}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-default text-sm text-text-primary transition-colors hover:border-brand-blue hover:text-brand-blue disabled:cursor-not-allowed disabled:text-text-tertiary disabled:opacity-50 disabled:hover:border-border-default disabled:hover:text-text-tertiary"
            aria-label="이전 페이지"
          >
            ←
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                aria-label={`${page}페이지로 이동`}
                aria-current={currentPage === page ? 'page' : undefined}
                className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition-colors ${
                  currentPage === page
                    ? 'border-brand-sky bg-brand-sky-light text-text-primary'
                    : 'border-border-default text-text-secondary hover:border-brand-blue hover:text-brand-blue'
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
            disabled={currentPage === totalPages}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-default text-sm text-text-primary transition-colors hover:border-brand-blue hover:text-brand-blue disabled:cursor-not-allowed disabled:text-text-tertiary disabled:opacity-50 disabled:hover:border-border-default disabled:hover:text-text-tertiary"
            aria-label="다음 페이지"
          >
            →
          </button>
        </nav>
      </div>
    </section>
  );
}
