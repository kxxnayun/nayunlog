'use client';

import { useState } from 'react';

type Comment = {
  id: number;
  author: string;
  content: string;
  date: string;
};

type CommentsProps = {
  comments: Comment[];
};

export default function Comments({ comments }: CommentsProps) {
  const [commentList, setCommentList] = useState(comments);
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    const trimmedContent = content.trim();

    if (!trimmedContent) return;

    const today = new Date();
    const date = [today.getFullYear(), today.getMonth() + 1, today.getDate()]
      .map((value, index) => (index === 0 ? String(value) : String(value).padStart(2, '0')))
      .join('.');

    setCommentList((currentComments) => [
      ...currentComments,
      {
        id: Date.now(),
        author: '나윤',
        content: trimmedContent,
        date,
      },
    ]);
    setContent('');
  };

  return (
    <section className="mx-auto w-[720px] pt-12 pb-[120px]">
      <p className="text-xs font-bold text-brand-blue">COMMENTS</p>

      <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-text-primary">
        댓글 {commentList.length}
      </h2>

      <div className="relative mt-8 h-[100px] rounded-[16px] border border-border-default">
        <textarea
          aria-label="댓글 내용"
          placeholder="글을 읽고 든 생각을 남겨주세요."
          value={content}
          onChange={(event) => setContent(event.target.value)}
          className="h-full w-full resize-none rounded-[16px] bg-transparent px-5 py-5 pr-32 text-sm text-text-primary outline-none placeholder:text-text-secondary"
        />

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!content.trim()}
          className="absolute right-6 bottom-5 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          작성하기
        </button>
      </div>

      <div className="mt-8">
        {commentList.map((comment, index) => (
          <article
            key={comment.id}
            className={`py-7 ${
              index !== commentList.length - 1 ? 'border-b border-border-default' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <strong className="text-sm text-text-primary">{comment.author}</strong>

              <time className="text-xs text-text-secondary">{comment.date}</time>
            </div>

            <p className="mt-3 text-sm leading-6 text-text-secondary">{comment.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
