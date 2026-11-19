type PostListItemProps = {
  date: string;
  category: string;
  title: string;
  tags: string[];
};

export default function PostListItem({ date, category, title, tags }: PostListItemProps) {
  return (
    <article className="grid h-[146px] grid-cols-[94px_68px_1fr_124px] items-center gap-6 rounded-[20px] border border-border-default px-6">
      <time className="text-sm text-text-secondary">{date}</time>

      <span className="text-xs font-bold text-brand-coral">{category}</span>

      <div className="min-w-0">
        <h3 className="truncate text-xl font-bold tracking-[-0.02em] text-text-primary">{title}</h3>

        <div className="mt-3 flex gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-brand-sky-light px-3 py-1 text-xs text-brand-blue"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="relative h-[92px] overflow-hidden rounded-[14px] bg-brand-sky"
        aria-hidden="true"
      >
        <span className="absolute -top-4 right-[-16px] h-[82px] w-[82px] rounded-full bg-brand-sky-light" />
        <span className="absolute bottom-5 left-5 h-4 w-4 rounded-full bg-brand-coral" />
      </div>
    </article>
  );
}
