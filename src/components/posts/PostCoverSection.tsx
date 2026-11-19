import Image from 'next/image';

type TocItem = {
  id: string;
  title: string;
};

type PostCoverSectionProps = {
  cover?: string;
  coverAlt: string;
  toc: TocItem[];
};

export default function PostCoverSection({ cover, coverAlt, toc }: PostCoverSectionProps) {
  return (
    <section className="py-8">
      <div className="relative mx-auto w-[720px]">
        <div className="relative h-[320px] overflow-hidden rounded-[20px] border border-border-default bg-brand-sky">
          {cover ? (
            <Image
              src={cover}
              alt={coverAlt}
              fill
              sizes="720px"
              className="object-cover"
              priority
            />
          ) : (
            <>
              <span className="absolute -top-[68px] right-[-80px] h-[300px] w-[300px] rounded-full bg-brand-sky-light" />
              <span className="absolute bottom-14 left-[72px] h-8 w-8 rounded-full bg-brand-coral" />
            </>
          )}
        </div>

        <aside className="absolute top-[22px] left-[820px] w-[180px] border-l-2 border-border-default pl-5">
          <p className="text-xs font-bold text-brand-blue">CONTENTS</p>

          <nav className="mt-6" aria-label="글 목차">
            <ol className="space-y-5">
              {toc.map((item, index) => (
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
        </aside>
      </div>
    </section>
  );
}
