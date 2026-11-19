import Image from 'next/image';

type PostCoverSectionProps = {
  cover?: string;
  coverAlt: string;
};

export default function PostCoverSection({ cover, coverAlt }: PostCoverSectionProps) {
  return (
    <section className="py-8">
      <div className="relative h-[320px] w-[720px] overflow-hidden rounded-[20px] border border-border-default bg-brand-sky">
        {cover ? (
          <Image src={cover} alt={coverAlt} fill sizes="720px" className="object-cover" priority />
        ) : (
          <>
            <span className="absolute -top-[68px] right-[-80px] h-[300px] w-[300px] rounded-full bg-brand-sky-light" />
            <span className="absolute bottom-14 left-[72px] h-8 w-8 rounded-full bg-brand-coral" />
          </>
        )}
      </div>
    </section>
  );
}
