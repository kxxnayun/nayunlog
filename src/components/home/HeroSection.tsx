export default function HeroSection() {
  return (
    <section className="site-container flex min-h-[302px] items-center justify-between py-16">
      <div className="w-[700px]">
        <div className="mb-6 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-brand-coral" />

          <span className="text-sm font-bold tracking-[0.12em] text-brand-blue">
            NAYUN’S DEV LOG
          </span>
        </div>

        <h1 className="text-[52px] leading-[1.3] font-bold tracking-[-0.04em] text-text-primary">
          도전을 멈추지 않고,
          <br />
          어제보다 나은 내일을 만듭니다.
        </h1>
      </div>

      <div className="relative h-[190px] w-[400px]" aria-hidden="true">
        <div className="absolute top-1 left-12 h-[142px] w-[292px] -rotate-4 rounded-[18px] border border-border-default bg-brand-sky-light shadow-[0_8px_18px_rgba(13,46,71,0.05)]" />

        <div className="absolute top-7 left-[75px] h-[142px] w-[292px] rotate-3 rounded-[18px] border border-border-default bg-brand-sky shadow-[0_8px_18px_rgba(13,46,71,0.05)]" />

        <div className="absolute top-[34px] left-5 h-[148px] w-[320px] rounded-[18px] border border-border-default bg-white p-6 shadow-[0_8px_18px_rgba(13,46,71,0.05)]">
          <div className="flex items-center justify-between">
            <span className="font-mono text-base font-bold text-brand-blue">{'</>'}</span>

            <span className="text-xs font-bold text-brand-coral">NEW POST</span>
          </div>

          <div className="mt-5 h-2.5 w-[220px] rounded-full bg-text-primary" />
          <div className="mt-3 h-2 w-[170px] rounded-full bg-text-tertiary" />
          <div className="mt-4 h-[7px] w-28 rounded-full bg-border-default" />

          <span className="absolute right-7 bottom-6 h-3.5 w-3.5 rounded-full bg-brand-coral" />
        </div>
      </div>
    </section>
  );
}
