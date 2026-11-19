import type { ReactNode } from 'react';

type CalloutProps = {
  title?: string;
  children: ReactNode;
};

export default function Callout({ title = 'POINT', children }: CalloutProps) {
  return (
    <aside className="rounded-[16px] border-l-4 border-brand-blue bg-brand-sky-light px-6 py-6">
      <p className="text-xs font-bold text-brand-blue">{title}</p>

      <div className="mt-3 text-base leading-7 text-text-primary">{children}</div>
    </aside>
  );
}
