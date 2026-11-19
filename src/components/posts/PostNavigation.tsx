import Link from 'next/link';

type NavigationPost = {
  title: string;
  href: string;
};

type PostNavigationProps = {
  previousPost?: NavigationPost;
  nextPost?: NavigationPost;
};

export default function PostNavigation({ previousPost, nextPost }: PostNavigationProps) {
  return (
    <nav aria-label="이전 글과 다음 글">
      <div className="mx-auto grid w-[720px] grid-cols-2 divide-x divide-border-default">
        <div className="flex h-[106px] min-w-0 flex-col justify-center pr-6">
          {previousPost ? (
            <Link href={previousPost.href} className="group min-w-0">
              <span className="text-xs font-bold text-brand-blue">← PREVIOUS</span>

              <p className="mt-4 truncate font-bold text-text-primary transition-colors group-hover:text-brand-blue">
                {previousPost.title}
              </p>
            </Link>
          ) : (
            <span className="text-sm text-text-tertiary">이전 글이 없습니다.</span>
          )}
        </div>

        <div className="flex h-[106px] min-w-0 flex-col justify-center pl-6 text-right">
          {nextPost ? (
            <Link href={nextPost.href} className="group min-w-0">
              <span className="text-xs font-bold text-brand-blue">NEXT →</span>

              <p className="mt-4 truncate font-bold text-text-primary transition-colors group-hover:text-brand-blue">
                {nextPost.title}
              </p>
            </Link>
          ) : (
            <span className="text-sm text-text-tertiary">다음 글이 없습니다.</span>
          )}
        </div>
      </div>
    </nav>
  );
}
