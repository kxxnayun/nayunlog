type TocItem = {
  id: string;
  title: string;
};

type TableOfContentsProps = {
  items: TocItem[];
};

export default function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <aside className="absolute top-16 bottom-32 left-[820px] w-[180px]">
      <div className="sticky top-28 border-l-2 border-border-default pl-5">
        <p className="text-xs font-bold text-brand-blue">CONTENTS</p>

        <nav className="mt-6" aria-label="글 목차">
          <ol className="space-y-5">
            {items.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block text-sm leading-6 transition-colors hover:text-brand-blue ${
                    index === 0 ? 'font-bold text-text-primary' : 'text-text-secondary'
                  }`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </aside>
  );
}
