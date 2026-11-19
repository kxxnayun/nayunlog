import Link from 'next/link';
import { HiChevronRight } from 'react-icons/hi2';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="mb-10 flex items-center gap-1 text-base" aria-label="현재 페이지 경로">
      {items.map((item, index) => {
        const isCurrentPage = index === items.length - 1;

        return (
          <div key={`${item.label}-${index}`} className="flex min-w-0 items-center gap-1">
            {index > 0 && (
              <HiChevronRight className="shrink-0 text-xl text-text-secondary" aria-hidden="true" />
            )}

            {item.href ? (
              <Link
                href={item.href}
                className="breadcrumb-link whitespace-nowrap"
                style={{ color: '#647d90', fontSize: '16px', fontWeight: 400 }}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="breadcrumb-current truncate"
                style={{ color: '#647d90', fontSize: '16px', fontWeight: 400 }}
                aria-current={isCurrentPage ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
