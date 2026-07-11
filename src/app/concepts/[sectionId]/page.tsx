"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { conceptSectionMap } from "@/data/conceptCards";
import { ConceptStatus } from "@/data/types";
import useConceptStore from "@/store/useConceptStore";

const statusOptions: {
  status: ConceptStatus;
  label: string;
  className: string;
}[] = [
  {
    status: "known",
    label: "알고 있음",
    className: "border-green-700 bg-green-900/30 text-green-300",
  },
  {
    status: "uncertain",
    label: "헷갈림",
    className: "border-yellow-700 bg-yellow-900/30 text-yellow-300",
  },
  {
    status: "unknown",
    label: "모름",
    className: "border-red-700 bg-red-900/30 text-red-300",
  },
];

const statusText: Record<ConceptStatus, string> = {
  known: "알고 있음",
  uncertain: "헷갈림",
  unknown: "모름",
};

export default function ConceptSectionPage() {
  const params = useParams();
  const sectionId = params.sectionId as string;
  const section = conceptSectionMap[sectionId];

  const { cardStatus, currentCard, setCardStatus, setCurrentCard, resetSection } =
    useConceptStore();
  const [mounted, setMounted] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentIdx = mounted ? currentCard[sectionId] ?? 0 : 0;
  const current = section?.cards[currentIdx];

  const stats = useMemo(() => {
    if (!section) return { checked: 0, known: 0, uncertain: 0, unknown: 0 };
    const statuses = section.cards
      .map((card) => cardStatus[card.id])
      .filter(Boolean) as ConceptStatus[];

    return {
      checked: statuses.length,
      known: statuses.filter((status) => status === "known").length,
      uncertain: statuses.filter((status) => status === "uncertain").length,
      unknown: statuses.filter((status) => status === "unknown").length,
    };
  }, [cardStatus, section]);

  useEffect(() => {
    setFlipped(false);
  }, [current?.id]);

  if (!section) {
    return (
      <div className="py-20 text-center">
        <h1 className="mb-4 text-2xl font-bold text-white">
          섹션을 찾을 수 없습니다
        </h1>
        <Link
          href="/concepts"
          className="text-blue-400 transition-colors hover:text-blue-300"
        >
          개념 카드로 돌아가기
        </Link>
      </div>
    );
  }

  const handlePrev = () => {
    setCurrentCard(section.id, Math.max(0, currentIdx - 1));
  };

  const handleNext = () => {
    setCurrentCard(section.id, Math.min(section.cards.length - 1, currentIdx + 1));
  };

  const handleStatus = (status: ConceptStatus) => {
    if (!current) return;
    setCardStatus(current.id, status);
    if (currentIdx < section.cards.length - 1) {
      setCurrentCard(section.id, currentIdx + 1);
    }
  };

  const checkedPercent = Math.round((stats.checked / section.cards.length) * 100);
  const selectedStatus = current ? cardStatus[current.id] : undefined;

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Link
          href="/concepts"
          className="inline-flex items-center text-sm text-gray-400 transition-colors hover:text-white"
        >
          ← 개념 카드
        </Link>
        <div className="space-y-2">
          <p className="text-sm font-medium text-blue-400">{section.priority}</p>
          <h1 className="text-3xl font-bold text-white">{section.title}</h1>
          <p className="max-w-2xl text-gray-400">{section.description}</p>
        </div>
      </div>

      {mounted && (
        <section className="rounded-lg border border-gray-800 bg-gray-900 p-4">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-gray-400">
              진행률 {stats.checked}/{section.cards.length}
            </span>
            <span className="text-gray-500">
              확실 {stats.known} · 헷갈림 {stats.uncertain} · 모름{" "}
              {stats.unknown}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-gray-800">
            <div
              className="h-full rounded-full bg-blue-500 transition-all"
              style={{ width: `${checkedPercent}%` }}
            />
          </div>
        </section>
      )}

      {current && (
        <section className="rounded-lg border border-gray-800 bg-gray-900">
          <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-gray-500">
                {currentIdx + 1}/{section.cards.length}
              </span>
              {selectedStatus && (
                <span className="rounded-md bg-gray-800 px-2 py-1 text-xs text-gray-300">
                  {statusText[selectedStatus]}
                </span>
              )}
            </div>
            <button
              onClick={() => setFlipped((value) => !value)}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              {flipped ? "앞면" : "뒷면"}
            </button>
          </div>

          <div className="min-h-[320px] p-6">
            {!flipped ? (
              <div className="flex min-h-[260px] flex-col justify-center space-y-5">
                <p className="text-sm font-medium text-gray-500">질문</p>
                <h2 className="text-2xl font-bold leading-relaxed text-white">
                  {current.front}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {current.relatedKeywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-md bg-gray-800 px-2 py-1 text-xs text-gray-400"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-500">정리</p>
                  <p className="whitespace-pre-line text-lg leading-relaxed text-white">
                    {current.back}
                  </p>
                </div>
                <div className="rounded-lg border border-blue-900/60 bg-blue-950/30 p-4">
                  <p className="mb-1 text-xs font-bold text-blue-300">
                    시험 포인트
                  </p>
                  <p className="text-sm leading-relaxed text-blue-100">
                    {current.examPoint}
                  </p>
                </div>
                {current.trap && (
                  <div className="rounded-lg border border-yellow-900/60 bg-yellow-950/20 p-4">
                    <p className="mb-1 text-xs font-bold text-yellow-300">
                      낚시 포인트
                    </p>
                    <p className="text-sm leading-relaxed text-yellow-100">
                      {current.trap}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="border-t border-gray-800 px-5 py-4">
            <div className="grid grid-cols-3 gap-2">
              {statusOptions.map((option) => (
                <button
                  key={option.status}
                  onClick={() => handleStatus(option.status)}
                  className={`rounded-lg border px-3 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5 ${
                    selectedStatus === option.status
                      ? option.className
                      : "border-gray-800 bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentIdx === 0}
            className="rounded-lg bg-gray-800 px-5 py-2.5 text-gray-300 transition-colors hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-30"
          >
            ← 이전
          </button>
          <span className="text-sm text-gray-500">
            {currentIdx + 1} / {section.cards.length}
          </span>
          <button
            onClick={handleNext}
            disabled={currentIdx === section.cards.length - 1}
            className="rounded-lg bg-gray-800 px-5 py-2.5 text-gray-300 transition-colors hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-30"
          >
            다음 →
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {section.cards.map((card, index) => {
            const status = mounted ? cardStatus[card.id] : undefined;
            return (
              <button
                key={card.id}
                onClick={() => setCurrentCard(section.id, index)}
                className={`h-10 w-10 rounded-lg text-sm font-medium transition-all ${
                  index === currentIdx
                    ? "bg-blue-600 text-white ring-2 ring-blue-400"
                    : status === "known"
                    ? "border border-green-800 bg-green-900/40 text-green-400"
                    : status === "uncertain"
                    ? "border border-yellow-800 bg-yellow-900/40 text-yellow-400"
                    : status === "unknown"
                    ? "border border-red-800 bg-red-900/40 text-red-400"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>

      {mounted && stats.checked > 0 && (
        <div className="text-center">
          <button
            onClick={() => {
              if (confirm("이 섹션의 카드 기록을 초기화하시겠습니까?")) {
                resetSection(
                  section.id,
                  section.cards.map((card) => card.id)
                );
              }
            }}
            className="text-sm text-gray-500 transition-colors hover:text-red-400"
          >
            이 섹션 기록 초기화
          </button>
        </div>
      )}
    </div>
  );
}
