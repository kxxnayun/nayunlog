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

export type PostSummary = PostMetadata & {
  slug: string;
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

export async function getAllPosts(): Promise<PostSummary[]> {
  const posts = await Promise.all(
    getPostSlugs().map(async (slug) => {
      const post = await getPost(slug);

      if (!post) return null;

      return {
        slug,
        ...post.metadata,
      };
    }),
  );

  return posts
    .filter((post): post is PostSummary => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPostNavigation(slug: string) {
  const sortedPosts = await getAllPosts();
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
