import Callout from '@/components/posts/Callout';
import CodeBlock from '@/components/posts/CodeBlock';
import Comments from '@/components/posts/Comments';
import PostCoverSection from '@/components/posts/PostCoverSection';
import PostHeader from '@/components/posts/PostHeader';
import PostNavigation from '@/components/posts/PostNavigation';
import TableOfContents from '@/components/posts/TableOfContents';

const toc = [
  {
    id: 'app-router',
    title: 'App Router는 무엇이 달랐을까?',
  },
  {
    id: 'server-component',
    title: '서버 컴포넌트를 기본값으로 생각하기',
  },
  {
    id: 'what-i-learned',
    title: '직접 만들어 보며 배운 점',
  },
];

const comments = [
  {
    id: 1,
    author: '김개발',
    content: '정리해 주신 내용 덕분에 App Router의 구조를 이해하는 데 도움이 됐어요.',
    date: '2026.11.19',
  },
  {
    id: 2,
    author: '나윤',
    content: '저도 직접 구현하면서 서버 컴포넌트의 기준을 더 명확히 알게 됐어요.',
    date: '2026.11.20',
  },
  {
    id: 3,
    author: '프론트엔드 꿈나무',
    content: '다음 글에서는 실제 데이터 연결 과정도 보고 싶어요!',
    date: '2026.11.21',
  },
];

export default function PostPage() {
  return (
    <>
      <PostHeader
        category="NEXT.JS"
        title="Next.js App Router를 처음 시작하며 알게 된 것들"
        description="라우팅과 서버 컴포넌트를 직접 경험하며 정리한 기록입니다."
        tags={['Next.js', 'App Router']}
        date="2026.11.18"
      />

      <hr className="section-divider" />

      <div className="relative mx-auto w-[720px]">
        <PostCoverSection coverAlt="Next.js App Router 게시글 대표 이미지" />

        <article className="pt-12 pb-16">
          <p className="text-lg leading-8 text-text-primary">
            Next.js로 블로그를 만들며 가장 먼저 익숙해져야 했던 것은 컴포넌트가 아니라 App Router의
            구조였습니다. React에서 익숙했던 방식과 무엇이 다른지 직접 만들어 보며 정리했습니다.
          </p>

          <section id="app-router" className="scroll-mt-28 pt-16">
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-text-primary">
              App Router는 무엇이 달랐을까?
            </h2>

            <p className="mt-6 text-base leading-8 text-text-secondary">
              App Router에서는 폴더와 파일이 곧 URL의 구조가 됩니다. page.tsx는 화면을 만들고,
              layout.tsx는 여러 페이지가 공유하는 영역을 담당합니다. 처음에는 파일이 많아 보여도
              역할을 기준으로 살펴보면 구조가 명확해집니다.
            </p>

            <div className="mt-10">
              <Callout>
                폴더 구조를 외우기보다 각 파일이 어떤 범위를 책임지는지 이해하는 것이 먼저였습니다.
              </Callout>
            </div>
          </section>

          <section id="server-component" className="scroll-mt-28 pt-16">
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-text-primary">
              서버 컴포넌트를 기본값으로 생각하기
            </h2>

            <p className="mt-6 text-base leading-8 text-text-secondary">
              App Router의 컴포넌트는 기본적으로 서버에서 렌더링됩니다. 브라우저의 상태나 이벤트가
              필요한 순간에만 클라이언트 컴포넌트로 전환하면 됩니다.
            </p>

            <div className="mt-10">
              <CodeBlock
                language="tsx"
                code={`export default function PostPage() {
  return <article>나의 첫 번째 글</article>;
}`}
              />
            </div>
          </section>

          <section id="what-i-learned" className="scroll-mt-28 pt-16">
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-text-primary">
              직접 만들어 보며 배운 점
            </h2>

            <p className="mt-6 text-base leading-8 text-text-secondary">
              처음부터 완벽하게 구조를 나누기보다 작은 화면을 완성하고, 반복되는 부분이 보일 때
              컴포넌트로 분리하는 편이 이해하기 쉬웠습니다.
            </p>
          </section>
        </article>

        <TableOfContents items={toc} />
      </div>

      <hr className="section-divider" />

      <div className="py-3.5">
        <PostNavigation
          previousPost={{
            title: '컴포넌트를 나누는 기준에 대한 작은 결론',
            href: '/posts/react-component',
          }}
          nextPost={{
            title: '새 프로젝트를 시작할 때 내가 먼저 정하는 것',
            href: '/posts/project-purpose',
          }}
        />
      </div>

      <hr className="section-divider" />

      <Comments comments={comments} />
    </>
  );
}
