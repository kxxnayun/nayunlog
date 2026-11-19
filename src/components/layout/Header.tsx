import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-border-default bg-white">
      <div className="site-container flex h-[60px] items-center justify-center">
        <Link href="/" className="text-xl font-bold tracking-[-0.02em] text-text-primary">
          NAYUN.LOG
        </Link>
      </div>
    </header>
  );
}
