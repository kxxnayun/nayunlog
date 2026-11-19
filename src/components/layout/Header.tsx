export default function Header() {
  return (
    <header className="border-b border-border-default">
      <div className="site-container flex h-[60px] items-center justify-between">
        <span className="text-xl font-bold text-text-primary">NAYUN.LOG</span>

        <div className="flex items-center gap-6">
          <span className="font-semibold">전체 글</span>
          <span>GitHub</span>
          <span>LinkedIn</span>
        </div>
      </div>
    </header>
  );
}
