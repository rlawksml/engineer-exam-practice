"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  getTotalQuickReviewCards,
  quickReviewSections,
} from "@/data/quickReviewCards";

export default function QuickReviewPage() {
  const [sectionId, setSectionId] = useState(quickReviewSections[0].id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showList, setShowList] = useState(false);

  const section = useMemo(
    () =>
      quickReviewSections.find((item) => item.id === sectionId) ??
      quickReviewSections[0],
    [sectionId]
  );
  const card = section.cards[currentIndex];
  const totalCards = getTotalQuickReviewCards();

  const selectSection = (nextSectionId: string) => {
    setSectionId(nextSectionId);
    setCurrentIndex(0);
    setFlipped(false);
  };

  const moveCard = (nextIndex: number) => {
    setCurrentIndex(nextIndex);
    setFlipped(false);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-400 transition-colors hover:text-white"
        >
          ← 홈
        </Link>
        <div className="space-y-2">
          <p className="text-sm font-medium text-cyan-400">개념 총정리</p>
          <h1 className="text-3xl font-bold text-white">짧은 암기 카드</h1>
          <p className="max-w-2xl text-gray-400">
            CRC, ARP, 응집도, 결합도처럼 시험장에서 바로 떠올려야 하는
            단답형 개념을 짧게 넘겨봅니다.
          </p>
        </div>
      </div>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {quickReviewSections.map((item) => (
          <button
            key={item.id}
            onClick={() => selectSection(item.id)}
            className={`rounded-lg border p-4 text-left transition-colors ${
              item.id === section.id
                ? "border-cyan-600 bg-cyan-950/30"
                : "border-gray-800 bg-gray-900 hover:border-gray-600"
            }`}
          >
            <p className="font-bold text-white">{item.title}</p>
            <p className="mt-1 text-xs text-gray-500">{item.cards.length}장</p>
          </button>
        ))}
      </section>

      <section className="rounded-lg border border-gray-800 bg-gray-900">
        <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
          <div>
            <p className="text-xs text-gray-500">
              {currentIndex + 1}/{section.cards.length} · 전체 {totalCards}장
            </p>
            <h2 className="mt-1 font-bold text-white">{section.title}</h2>
          </div>
          <button
            onClick={() => setShowList((value) => !value)}
            className="rounded-lg bg-gray-800 px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-700"
          >
            {showList ? "카드 보기" : "목록 보기"}
          </button>
        </div>

        {showList ? (
          <div className="divide-y divide-gray-800">
            {section.cards.map((item) => (
              <div key={item.id} className="space-y-2 px-5 py-4">
                <p className="text-sm font-medium text-gray-300">
                  {item.prompt}
                </p>
                <p className="text-lg font-bold text-cyan-300">
                  {item.answer}
                </p>
                {item.note && (
                  <p className="text-sm leading-relaxed text-gray-500">
                    {item.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-5 p-5">
            <button
              onClick={() => setFlipped((value) => !value)}
              className="flex min-h-[260px] w-full flex-col justify-center rounded-lg border border-gray-800 bg-gray-950/50 p-6 text-left transition-colors hover:border-cyan-800"
            >
              {!flipped ? (
                <div className="space-y-4">
                  <p className="text-sm font-medium text-gray-500">질문</p>
                  <p className="text-2xl font-bold leading-relaxed text-white">
                    {card.prompt}
                  </p>
                  <p className="text-sm text-cyan-400">클릭하면 답 보기</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm font-medium text-gray-500">답</p>
                  <p className="text-3xl font-bold leading-relaxed text-cyan-300">
                    {card.answer}
                  </p>
                  {card.aliases?.length ? (
                    <p className="text-sm text-gray-400">
                      {card.aliases.join(" · ")}
                    </p>
                  ) : null}
                  {card.note && (
                    <p className="text-base leading-relaxed text-gray-300">
                      {card.note}
                    </p>
                  )}
                </div>
              )}
            </button>

            <div className="flex items-center justify-between">
              <button
                onClick={() => moveCard(Math.max(0, currentIndex - 1))}
                disabled={currentIndex === 0}
                className="rounded-lg bg-gray-800 px-5 py-2.5 text-gray-300 transition-colors hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-30"
              >
                ← 이전
              </button>
              <span className="text-sm text-gray-500">
                {currentIndex + 1} / {section.cards.length}
              </span>
              <button
                onClick={() =>
                  moveCard(Math.min(section.cards.length - 1, currentIndex + 1))
                }
                disabled={currentIndex === section.cards.length - 1}
                className="rounded-lg bg-gray-800 px-5 py-2.5 text-gray-300 transition-colors hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-30"
              >
                다음 →
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {section.cards.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => moveCard(index)}
                  className={`h-9 w-9 rounded-lg text-sm font-medium transition-colors ${
                    index === currentIndex
                      ? "bg-cyan-600 text-white"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
