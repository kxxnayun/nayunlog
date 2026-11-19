type CodeBlockProps = {
  code: string;
  language?: string;
};

export default function CodeBlock({ code, language = 'code' }: CodeBlockProps) {
  return (
    <figure className="overflow-hidden rounded-[16px] bg-[#0e202c]">
      <figcaption className="flex h-12 items-center justify-between px-6">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-coral" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f6c453]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#52c788]" />
        </div>

        <span className="font-mono text-xs text-[#8ba2b1]">{language}</span>
      </figcaption>

      <pre className="overflow-x-auto px-6 pt-2 pb-7">
        <code className="font-mono text-sm leading-7 text-[#d9edf4]">{code}</code>
      </pre>
    </figure>
  );
}
