"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import useExamStore from "@/store/useExamStore";
import useConceptStore from "@/store/useConceptStore";
import { conceptSections, getTotalConceptCards } from "@/data/conceptCards";
import { getTotalQuickReviewCards } from "@/data/quickReviewCards";
import { getTotalSqlLabExamples } from "@/data/sqlLab";
import exam2020_1 from "@/data/exam2020-1";
import exam2020_2 from "@/data/exam2020-2";
import exam2020_3 from "@/data/exam2020-3";
import exam2020_4 from "@/data/exam2020-4";
import exam2021_1 from "@/data/exam2021-1";
import exam2021_2 from "@/data/exam2021-2";
import exam2021_3 from "@/data/exam2021-3";
import exam2022_1 from "@/data/exam2022-1";
import exam2022_3 from "@/data/exam2022-3";
import exam2023_1 from "@/data/exam2023-1";
import exam2023_2 from "@/data/exam2023-2";
import exam2023_3 from "@/data/exam2023-3";
import exam2024_1 from "@/data/exam2024-1";
import exam2024_2 from "@/data/exam2024-2";
import exam2024_3 from "@/data/exam2024-3";
import exam2025_1 from "@/data/exam2025-1";
import exam2025_2 from "@/data/exam2025-2";
import exam2025_3 from "@/data/exam2025-3";
import mockExam2026_1 from "@/data/mockExam2026-1";
import mockExam2026_2 from "@/data/mockExam2026-2";
import mockExam2026_3 from "@/data/mockExam2026-3";
import { ExamData, Language } from "@/data/types";

const exams: ExamData[] = [
  mockExam2026_3, mockExam2026_2, mockExam2026_1,
  exam2025_3, exam2025_2, exam2025_1,
  exam2024_3, exam2024_2, exam2024_1,
  exam2023_3, exam2023_2, exam2023_1,
  exam2022_3, exam2022_1,
  exam2021_3, exam2021_2, exam2021_1,
  exam2020_4, exam2020_3, exam2020_2, exam2020_1,
];

const langColors: Record<Language, string> = {
  C: "bg-blue-600/20 text-blue-400",
  Java: "bg-orange-600/20 text-orange-400",
  Python: "bg-green-600/20 text-green-400",
  SQL: "bg-purple-600/20 text-purple-400",
  이론: "bg-gray-600/20 text-gray-400",
};

function getLangCounts(exam: ExamData): Record<Language, number> {
  const counts: Record<Language, number> = { C: 0, Java: 0, Python: 0, SQL: 0, 이론: 0 };
  exam.questions.forEach((q) => counts[q.language]++);
  return counts;
}

export default function HomePage() {
  const { answers } = useExamStore();
  const { cardStatus } = useConceptStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalQuestions = exams.reduce((sum, e) => sum + e.questions.length, 0);
  const totalAnswered = mounted
    ? Object.values(answers).reduce((sum, a) => sum + a.length, 0)
    : 0;
  const totalCorrect = mounted
    ? Object.values(answers).reduce(
        (sum, a) => sum + a.filter((x) => x.isCorrect).length,
        0
      )
    : 0;
  const totalConceptCards = getTotalConceptCards();
  const totalQuickReviewCards = getTotalQuickReviewCards();
  const totalSqlLabExamples = getTotalSqlLabExamples();
  const checkedConceptCards = mounted ? Object.values(cardStatus).length : 0;
  const uncertainConceptCards = mounted
    ? Object.values(cardStatus).filter((status) => status !== "known").length
    : 0;

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="text-center space-y-3 py-6">
        <h1 className="text-3xl font-bold text-white">
          정보처리기사 실기 대비
        </h1>
        <p className="text-gray-400 text-lg">
          기출 풀이와 개념 카드로 반복 학습
        </p>
        <p className="text-gray-500 text-sm">
          2020~2025년 기출 복원과 2026 예상 모의고사 {totalQuestions}문제 ·
          개념/총정리 카드 {totalConceptCards + totalQuickReviewCards}장
        </p>
      </div>

      {/* Study Modes */}
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Link
          href="#exam-list"
          className="rounded-lg border border-gray-800 bg-gray-900 p-5 transition-colors hover:border-blue-700 hover:bg-gray-900/80"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-blue-400">기출 풀이</p>
              <h2 className="mt-2 text-xl font-bold text-white">
                회차별 문제 연습
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                C, Java, Python, SQL 문제를 회차별로 풀고 해설을 확인합니다.
              </p>
            </div>
            <span className="rounded-md bg-gray-800 px-2 py-1 text-xs text-gray-400">
              {totalQuestions}문제
            </span>
          </div>
        </Link>

        <Link
          href="/concepts"
          className="rounded-lg border border-gray-800 bg-gray-900 p-5 transition-colors hover:border-emerald-700 hover:bg-gray-900/80"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-emerald-400">개념 카드</p>
              <h2 className="mt-2 text-xl font-bold text-white">
                섹션별 빠른 복습
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                출제 함정과 단답 키워드를 카드로 넘기며 시험 직전 감각을 잡습니다.
              </p>
            </div>
            <span className="rounded-md bg-gray-800 px-2 py-1 text-xs text-gray-400">
              {mounted && checkedConceptCards > 0
                ? `${checkedConceptCards}/${totalConceptCards}`
                : `${totalConceptCards}장`}
            </span>
          </div>
          {mounted && checkedConceptCards > 0 && (
            <div className="mt-4 text-xs text-gray-500">
              다시 볼 카드 {uncertainConceptCards}장
            </div>
          )}
        </Link>

        <Link
          href="/quick"
          className="rounded-lg border border-gray-800 bg-gray-900 p-5 transition-colors hover:border-cyan-700 hover:bg-gray-900/80"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-cyan-400">총정리</p>
              <h2 className="mt-2 text-xl font-bold text-white">
                짧은 암기 카드
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                CRC, ARP, 응집도, 결합도 같은 단답 개념을 바로 확인합니다.
              </p>
            </div>
            <span className="rounded-md bg-gray-800 px-2 py-1 text-xs text-gray-400">
              {totalQuickReviewCards}장
            </span>
          </div>
        </Link>

        <Link
          href="/sql"
          className="rounded-lg border border-gray-800 bg-gray-900 p-5 transition-colors hover:border-violet-700 hover:bg-gray-900/80"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-violet-400">SQL 실습</p>
              <h2 className="mt-2 text-xl font-bold text-white">
                두 테이블 예시
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                JOIN부터 DDL, DML, DCL, TCL까지 테이블 결과로 확인합니다.
              </p>
            </div>
            <span className="rounded-md bg-gray-800 px-2 py-1 text-xs text-gray-400">
              {totalSqlLabExamples}개
            </span>
          </div>
        </Link>
      </section>

      {/* Stats */}
      {mounted && totalAnswered > 0 && (
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <div className="text-2xl font-bold text-white">{totalAnswered}</div>
            <div className="text-xs text-gray-500 mt-1">풀이 완료</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <div className="text-2xl font-bold text-green-400">
              {totalCorrect}
            </div>
            <div className="text-xs text-gray-500 mt-1">정답</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <div className="text-2xl font-bold text-blue-400">
              {totalAnswered > 0
                ? Math.round((totalCorrect / totalAnswered) * 100)
                : 0}
              %
            </div>
            <div className="text-xs text-gray-500 mt-1">정답률</div>
          </div>
        </div>
      )}

      {/* Concept Sections */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">개념 카드 섹션</h2>
          <Link
            href="/concepts"
            className="text-sm text-blue-400 transition-colors hover:text-blue-300"
          >
            전체 보기
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {conceptSections.map((section) => (
            <Link
              key={section.id}
              href={`/concepts/${section.id}`}
              className="rounded-lg border border-gray-800 bg-gray-900 p-4 transition-colors hover:border-gray-600"
            >
              <p className="text-xs text-gray-500">{section.priority}</p>
              <h3 className="mt-2 font-bold text-white">{section.title}</h3>
              <p className="mt-1 text-xs text-gray-500">
                {section.cards.length}장
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Exam Cards */}
      <div id="exam-list" className="space-y-4 scroll-mt-24">
        {exams.map((exam) => {
          const langCounts = getLangCounts(exam);
          const examAnswers = mounted ? answers[exam.id] || [] : [];
          const answered = examAnswers.length;
          const correct = examAnswers.filter((a) => a.isCorrect).length;
          const total = exam.questions.length;
          const percentage = Math.round((answered / total) * 100);

          return (
            <Link
              key={exam.id}
              href={`/exam/${exam.id}`}
              className="block bg-gray-900 rounded-xl border border-gray-800 p-6 hover:border-gray-600 hover:bg-gray-900/80 transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {exam.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {(Object.entries(langCounts) as [Language, number][])
                      .filter(([, count]) => count > 0)
                      .map(([lang, count]) => (
                        <span
                          key={lang}
                          className={`text-xs px-2 py-1 rounded-md font-medium ${langColors[lang]}`}
                        >
                          {lang} {count}문제
                        </span>
                      ))}
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <div className="text-sm text-gray-400">
                    {total}문제
                  </div>
                  {mounted && answered > 0 && (
                    <div className="text-xs text-gray-500">
                      {answered}문제 풀이 · 정답률{" "}
                      {Math.round((correct / answered) * 100)}%
                    </div>
                  )}
                </div>
              </div>

              {/* Progress */}
              {mounted && answered > 0 && (
                <div className="mt-4">
                  <div className="w-full bg-gray-800 rounded-full h-1.5">
                    <div
                      className="bg-blue-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              )}
            </Link>
          );
        })}
      </div>

      {/* Reset */}
      {mounted && totalAnswered > 0 && (
        <div className="text-center pt-4">
          <button
            onClick={() => {
              if (confirm("모든 풀이 기록을 초기화하시겠습니까?")) {
                useExamStore.getState().resetAll();
              }
            }}
            className="text-sm text-gray-500 hover:text-red-400 transition-colors"
          >
            전체 기록 초기화
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center text-gray-600 text-xs pt-8 pb-4 space-y-1">
        <p>문제 출처: chobopark.tistory.com (2025년 기출 복원)</p>
        <p>학습 용도로만 사용하세요.</p>
      </footer>
    </div>
  );
}
