import RecentPostCard from '../posts/RecentPostCard';

export default function RecentPosts() {
  return (
    <section className="py-16">
      <div className="site-container">
        <div>
          <p className="text-sm font-bold tracking-[0.12em] text-brand-blue">RECENT</p>

          <h2 className="mt-2 text-[36px] font-bold tracking-[-0.03em] text-text-primary">
            최근 글
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-6">
          <RecentPostCard
            number="01"
            category="NEXT.JS"
            title="Next.js App Router를 처음 시작하며 알게 된 것들"
            tags={['Next.js', 'App Router']}
            description="라우팅과 서버 컴포넌트를 직접 경험하며 정리한 기록입니다."
            date="2026.11.18"
          />

          <RecentPostCard
            number="02"
            category="REACT"
            title="컴포넌트를 나누는 기준에 대한 작은 결론"
            tags={['React', 'Component']}
            description="변경의 이유와 데이터의 흐름을 먼저 살펴봤습니다."
            date="2026.11.12"
          />

          <RecentPostCard
            number="03"
            category="JOURNAL"
            title="새 프로젝트를 시작할 때 내가 먼저 정하는 것"
            tags={['회고', 'Project']}
            description="도구보다 프로젝트의 목적을 먼저 적어두는 습관을 기록했습니다."
            date="2026.11.03"
          />
        </div>
      </div>
    </section>
  );
}
