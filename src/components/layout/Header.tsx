import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="border-b border-border-default bg-white">
      <div className="site-container flex h-[60px] items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-[-0.02em] text-text-primary">
          NAYUN.LOG
        </Link>

        <nav className="flex items-center gap-6" aria-label="주요 메뉴">
          <Link
            href="/posts"
            className="text-sm font-semibold text-text-primary transition-colors hover:text-brand-blue"
          >
            전체 글
          </Link>

          <a
            href="https://github.com/kxxnayun"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="김나윤 GitHub"
            className="text-xl text-text-secondary transition-colors hover:text-brand-blue"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/kxxnayun"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="김나윤 LinkedIn"
            className="text-xl text-text-secondary transition-colors hover:text-brand-blue"
          >
            <FaLinkedin />
          </a>
        </nav>
      </div>
    </header>
  );
}
