'use client';

import { useEffect, useState } from 'react';

type TocItem = {
  id: string;
  title: string;
};

type TableOfContentsProps = {
  items: TocItem[];
};

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => heading !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeading = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visibleHeading) {
          setActiveId(visibleHeading.target.id);
        }
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      },
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="absolute top-16 bottom-32 left-[820px] w-[180px]">
      <div className="sticky top-28 border-l-2 border-border-default pl-5">
        <p className="text-xs font-bold text-brand-blue">CONTENTS</p>

        <nav className="mt-6" aria-label="글 목차">
          <ol className="space-y-5">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block text-sm leading-6 transition-colors hover:text-brand-blue ${
                    activeId === item.id ? 'font-bold text-brand-blue' : 'text-text-secondary'
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
