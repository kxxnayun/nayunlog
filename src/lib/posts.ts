import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import type { ComponentType } from 'react';

export type PostMetadata = {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  cover?: string;
  toc: {
    id: string;
    title: string;
  }[];
};

export type PostModule = {
  default: ComponentType;
  metadata: PostMetadata;
};

export type NavigationPost = {
  title: string;
  href: string;
};

const postsDirectory = join(process.cwd(), 'src/content/posts');

export function getPostSlugs() {
  return readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

export async function getPost(slug: string) {
  if (!getPostSlugs().includes(slug)) return null;

  return (await import(`@/content/posts/${slug}.mdx`)) as PostModule;
}

export async function getPostNavigation(slug: string) {
  const posts = await Promise.all(
    getPostSlugs().map(async (postSlug) => {
      const post = await getPost(postSlug);

      if (!post) return null;

      return {
        slug: postSlug,
        title: post.metadata.title,
        date: post.metadata.date,
      };
    }),
  );

  const sortedPosts = posts
    .filter((post): post is NonNullable<typeof post> => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
  const currentIndex = sortedPosts.findIndex((post) => post.slug === slug);

  if (currentIndex === -1) {
    return { previousPost: undefined, nextPost: undefined };
  }

  const previous = sortedPosts[currentIndex + 1];
  const next = sortedPosts[currentIndex - 1];

  return {
    previousPost: previous ? { title: previous.title, href: `/posts/${previous.slug}` } : undefined,
    nextPost: next ? { title: next.title, href: `/posts/${next.slug}` } : undefined,
  } satisfies {
    previousPost?: NavigationPost;
    nextPost?: NavigationPost;
  };
}
