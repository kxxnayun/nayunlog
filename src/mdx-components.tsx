import type { MDXComponents } from 'mdx/types';
import Callout from '@/components/posts/Callout';
import CodeBlock from '@/components/posts/CodeBlock';

const components: MDXComponents = {
  PostHeading: ({ children, ...props }) => (
    <h2
      className="scroll-mt-28 pt-16 text-3xl font-bold tracking-[-0.03em] text-text-primary"
      {...props}
    >
      {children}
    </h2>
  ),

  p: ({ children, ...props }) => (
    <p className="mt-6 text-base leading-8 text-text-secondary" {...props}>
      {children}
    </p>
  ),

  a: ({ children, ...props }) => (
    <a className="text-brand-blue underline underline-offset-4" {...props}>
      {children}
    </a>
  ),

  ul: ({ children, ...props }) => (
    <ul className="mt-6 list-disc space-y-2 pl-6 text-text-secondary" {...props}>
      {children}
    </ul>
  ),

  Callout: (props) => (
    <div className="mt-10">
      <Callout {...props} />
    </div>
  ),
  CodeBlock: (props) => (
    <div className="mt-10">
      <CodeBlock {...props} />
    </div>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
