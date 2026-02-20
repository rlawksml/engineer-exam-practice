"use client";

import { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
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
import { ExamData, Language } from "@/data/types";
import QuestionCard from "@/components/QuestionCard";
import CategoryFilter from "@/components/CategoryFilter";
import ProgressBar from "@/components/ProgressBar";
import useExamStore from "@/store/useExamStore";

const examMap: Record<string, ExamData> = {
  "2020-1": exam2020_1,
  "2020-2": exam2020_2,
  "2020-3": exam2020_3,
  "2020-4": exam2020_4,
  "2021-1": exam2021_1,
  "2021-2": exam2021_2,
  "2021-3": exam2021_3,
  "2022-1": exam2022_1,
  "2022-3": exam2022_3,
  "2023-1": exam2023_1,
  "2023-2": exam2023_2,
  "2023-3": exam2023_3,
  "2024-1": exam2024_1,
  "2024-2": exam2024_2,
  "2024-3": exam2024_3,
  "2025-1": exam2025_1,
  "2025-2": exam2025_2,
  "2025-3": exam2025_3,
};

export default function ExamPage() {
  const params = useParams();
  const examId = params.id as string;
  const exam = examMap[examId];

  const { answers, currentQuestion, setCurrentQuestion } = useExamStore();
  const [category, setCategory] = useState<Language | "all">("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredQuestions = useMemo(() => {
    if (!exam) return [];
    return category === "all"
      ? exam.questions
      : exam.questions.filter((q) => q.language === category);
  }, [exam, category]);

  const counts = useMemo(() => {
    if (!exam) return { all: 0, C: 0, Java: 0, Python: 0, SQL: 0 };
    const c: Record<Language | "all", number> = {
      all: exam.questions.length,
      C: 0,
      Java: 0,
      Python: 0,
      SQL: 0,
    };
    exam.questions.forEach((q) => c[q.language]++);
    return c;
  }, [exam]);

  const currentIdx = mounted ? (currentQuestion[examId] ?? 0) : 0;
  const currentQ = filteredQuestions[currentIdx];

  const examAnswers = mounted ? answers[examId] || [] : [];
  const answeredCount = examAnswers.length;
  const correctCount = examAnswers.filter((a) => a.isCorrect).length;

  if (!exam) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-white mb-4">
          시험을 찾을 수 없습니다
        </h1>
        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  const handlePrev = () => {
    const newIdx = Math.max(0, currentIdx - 1);
    setCurrentQuestion(examId, newIdx);
  };

  const handleNext = () => {
    const newIdx = Math.min(filteredQuestions.length - 1, currentIdx + 1);
    setCurrentQuestion(examId, newIdx);
  };

  return (
    <div className="space-y-6">
      {/* Back + Title */}
      <div className="space-y-4">
        <Link
          href="/"
          className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1"
        >
          ← 목록으로
        </Link>
        <h1 className="text-2xl font-bold text-white">{exam.title}</h1>
      </div>

      {/* Filter + Progress */}
      <CategoryFilter
        selected={category}
        onChange={(c) => {
          setCategory(c);
          setCurrentQuestion(examId, 0);
        }}
        counts={counts}
      />
      <ProgressBar
        answered={answeredCount}
        correct={correctCount}
        total={exam.questions.length}
      />

      {/* Question */}
      {currentQ ? (
        <QuestionCard
          key={currentQ.id}
          question={currentQ}
          index={currentIdx}
          total={filteredQuestions.length}
        />
      ) : (
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-12 text-center">
          <p className="text-gray-400">해당 카테고리에 문제가 없습니다.</p>
        </div>
      )}

      {/* Navigation */}
      {filteredQuestions.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="px-5 py-2.5 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              ← 이전
            </button>
            <span className="text-sm text-gray-500">
              {currentIdx + 1} / {filteredQuestions.length}
            </span>
            <button
              onClick={handleNext}
              disabled={currentIdx === filteredQuestions.length - 1}
              className="px-5 py-2.5 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              다음 →
            </button>
          </div>

          {/* Question Grid */}
          <div className="flex flex-wrap gap-2 justify-center">
            {filteredQuestions.map((q, i) => {
              const answered = mounted
                ? examAnswers.find((a) => a.questionId === q.id)
                : undefined;
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestion(examId, i)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                    i === currentIdx
                      ? "bg-blue-600 text-white ring-2 ring-blue-400"
                      : answered
                      ? answered.isCorrect
                        ? "bg-green-900/40 text-green-400 border border-green-800"
                        : "bg-red-900/40 text-red-400 border border-red-800"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Reset */}
      {mounted && answeredCount > 0 && (
        <div className="text-center pt-4">
          <button
            onClick={() => {
              if (confirm("이 시험의 풀이 기록을 초기화하시겠습니까?")) {
                useExamStore.getState().resetExam(examId);
              }
            }}
            className="text-sm text-gray-500 hover:text-red-400 transition-colors"
          >
            이 시험 기록 초기화
          </button>
        </div>
      )}
    </div>
  );
}
