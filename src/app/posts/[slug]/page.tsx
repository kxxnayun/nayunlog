import { notFound } from 'next/navigation';
import Comments from '@/components/posts/Comments';
import PostCoverSection from '@/components/posts/PostCoverSection';
import PostHeader from '@/components/posts/PostHeader';
import PostNavigation from '@/components/posts/PostNavigation';
import TableOfContents from '@/components/posts/TableOfContents';
import { getPost, getPostNavigation, getPostSlugs } from '@/lib/posts';

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const { default: Post, metadata } = post;
  const { previousPost, nextPost } = await getPostNavigation(slug);

  return (
    <>
      <PostHeader
        category={metadata.category}
        title={metadata.title}
        description={metadata.description}
        tags={metadata.tags}
        date={metadata.date}
      />

      <hr className="section-divider" />

      <div className="relative mx-auto w-[720px]">
        <PostCoverSection
          cover={metadata.cover || undefined}
          coverAlt={`${metadata.title} 대표 이미지`}
        />

        <article className="pt-2 pb-16 [&>p:first-child]:text-lg [&>p:first-child]:leading-8 [&>p:first-child]:text-text-primary">
          <Post />
        </article>

        <TableOfContents items={metadata.toc} />
      </div>

      <hr className="section-divider" />

      <div className="py-3.5">
        <PostNavigation previousPost={previousPost} nextPost={nextPost} />
      </div>

      <hr className="section-divider" />

      <Comments comments={[]} />
    </>
  );
}
