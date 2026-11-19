type RecentPostCardProps = {
  number: string;
  category: string;
  title: string;
  tags: [string, string];
  description: string;
  date: string;
};

export default function RecentPostCard({
  number,
  category,
  title,
  tags,
  description,
  date,
}: RecentPostCardProps) {
  return (
    <article className="flex h-[220px] min-w-0 flex-col rounded-[20px] border border-border-default p-6">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-brand-blue">{number}</span>

        <span className="text-xs font-bold tracking-wide text-brand-coral">{category}</span>
      </div>

      <h3 className="mt-5 truncate text-xl font-bold tracking-[-0.02em] text-text-primary">
        {title}
      </h3>

      <div className="mt-3 flex items-center gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-brand-sky-light px-3 py-1 text-xs text-brand-blue"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-4 truncate text-sm text-text-secondary">{description}</p>

      <time className="mt-auto text-sm text-text-secondary">{date}</time>
    </article>
  );
}
