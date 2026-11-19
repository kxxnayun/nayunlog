import type { ReactNode } from 'react';
import Link from 'next/link';

type EditorialLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
  dataNodeId?: string;
};

export default function EditorialLink({
  href,
  children,
  external = false,
  className = '',
  dataNodeId,
}: EditorialLinkProps) {
  const classes = `editorial-link ${className}`.trim();
  const style = {
    color: '#647d90',
    fontFamily: 'inherit',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.5,
  } as const;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        style={style}
        data-node-id={dataNodeId}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} style={style} data-node-id={dataNodeId}>
      {children}
    </Link>
  );
}
