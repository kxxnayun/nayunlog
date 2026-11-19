import Breadcrumbs from '@/components/layout/Breadcrumbs';

type PostHeaderProps = {
  category: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
};

export default function PostHeader({ category, title, description, tags, date }: PostHeaderProps) {
  return (
    <section className="py-16">
      <div className="site-container">
        <Breadcrumbs
          items={[
            { label: 'HOME', href: '/' },
            { label: 'ALL POSTS', href: '/posts' },
            { label: title },
          ]}
        />
      </div>

      <div className="mx-auto w-full max-w-[880px] text-center">
        <p className="text-sm font-bold tracking-wide text-brand-coral">{category}</p>

        <h1 className="mx-auto mt-6 max-w-[720px] text-5xl leading-[1.35] font-bold tracking-[-0.04em] text-text-primary">
          {title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-text-secondary">{description}</p>

        <div className="mt-6 flex items-center justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-brand-sky-light px-2.5 py-1.5 text-xs text-brand-blue"
            >
              {tag}
            </span>
          ))}
        </div>

        <time className="mt-4 block text-sm text-text-secondary">{date}</time>
      </div>
    </section>
  );
}
