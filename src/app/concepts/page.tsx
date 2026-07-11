"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { conceptSections, getTotalConceptCards } from "@/data/conceptCards";
import { ConceptStatus } from "@/data/types";
import useConceptStore from "@/store/useConceptStore";

const statusLabels: Record<ConceptStatus, string> = {
  known: "알고 있음",
  uncertain: "헷갈림",
  unknown: "모름",
};

const statusColors: Record<ConceptStatus, string> = {
  known: "text-green-400",
  uncertain: "text-yellow-400",
  unknown: "text-red-400",
};

export default function ConceptsPage() {
  const { cardStatus, resetAllConcepts } = useConceptStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const summary = useMemo(() => {
    const values = Object.values(cardStatus);
    return {
      total: getTotalConceptCards(),
      checked: values.length,
      known: values.filter((status) => status === "known").length,
      uncertain: values.filter((status) => status === "uncertain").length,
      unknown: values.filter((status) => status === "unknown").length,
    };
  }, [cardStatus]);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
        >
          ← 홈
        </Link>
        <div className="space-y-2">
          <p className="text-sm font-medium text-blue-400">개념 카드</p>
          <h1 className="text-3xl font-bold text-white">
            시험 직전 핵심 복습
          </h1>
          <p className="max-w-2xl text-gray-400">
            전략 문서의 출제 함정과 단답 키워드를 섹션별 카드로 정리했습니다.
          </p>
        </div>
      </div>

      {mounted && (
        <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
            <p className="text-xs text-gray-500">체크</p>
            <p className="mt-1 text-2xl font-bold text-white">
              {summary.checked}/{summary.total}
            </p>
          </div>
          {(Object.keys(statusLabels) as ConceptStatus[]).map((status) => (
            <div
              key={status}
              className="rounded-lg border border-gray-800 bg-gray-900 p-4"
            >
              <p className="text-xs text-gray-500">{statusLabels[status]}</p>
              <p className={`mt-1 text-2xl font-bold ${statusColors[status]}`}>
                {summary[status]}
              </p>
            </div>
          ))}
        </section>
      )}

      <section className="grid gap-4 md:grid-cols-2">
        {conceptSections.map((section) => {
          const checked = mounted
            ? section.cards.filter((card) => cardStatus[card.id]).length
            : 0;
          const known = mounted
            ? section.cards.filter((card) => cardStatus[card.id] === "known")
                .length
            : 0;
          const percent = Math.round((checked / section.cards.length) * 100);

          return (
            <Link
              key={section.id}
              href={`/concepts/${section.id}`}
              className="block rounded-lg border border-gray-800 bg-gray-900 p-5 transition-colors hover:border-blue-700 hover:bg-gray-900/80"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-xs font-medium text-blue-400">
                    {section.priority}
                  </p>
                  <h2 className="text-xl font-bold text-white">
                    {section.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {section.description}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-sm text-gray-400">
                    {section.cards.length}장
                  </p>
                  {mounted && checked > 0 && (
                    <p className="mt-1 text-xs text-gray-500">
                      확실 {known}장
                    </p>
                  )}
                </div>
              </div>

              {mounted && checked > 0 && (
                <div className="mt-4">
                  <div className="mb-1 flex justify-between text-xs text-gray-500">
                    <span>
                      {checked}/{section.cards.length}
                    </span>
                    <span>{percent}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-800">
                    <div
                      className="h-full rounded-full bg-blue-500 transition-all"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              )}
            </Link>
          );
        })}
      </section>

      {mounted && summary.checked > 0 && (
        <div className="text-center">
          <button
            onClick={() => {
              if (confirm("모든 개념 카드 기록을 초기화하시겠습니까?")) {
                resetAllConcepts();
              }
            }}
            className="text-sm text-gray-500 transition-colors hover:text-red-400"
          >
            개념 카드 기록 초기화
          </button>
        </div>
      )}
    </div>
  );
}
