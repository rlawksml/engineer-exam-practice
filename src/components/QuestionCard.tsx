"use client";

import { useState, useEffect } from "react";
import { Question } from "@/data/types";
import CodeBlock from "./CodeBlock";
import useExamStore from "@/store/useExamStore";

interface QuestionCardProps {
  question: Question;
  index: number;
  total: number;
}

const languageColors: Record<string, string> = {
  C: "bg-blue-600",
  Java: "bg-orange-600",
  Python: "bg-green-600",
  SQL: "bg-purple-600",
  이론: "bg-gray-600",
};

export default function QuestionCard({
  question,
  index,
  total,
}: QuestionCardProps) {
  const { submitAnswer, getAnswer } = useExamStore();
  const [userAnswer, setUserAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showJsComparison, setShowJsComparison] = useState(false);
  const [showPractice, setShowPractice] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const saved = getAnswer(question.examId, question.id);
    if (saved) {
      setUserAnswer(saved.answer);
      setSubmitted(true);
      setIsCorrect(saved.isCorrect);
    } else {
      setUserAnswer("");
      setSubmitted(false);
      setIsCorrect(false);
      setShowExplanation(false);
      setShowJsComparison(false);
      setShowPractice(false);
    }
  }, [question.id, question.examId, mounted, getAnswer]);

  const normalizeAnswer = (str: string) =>
    str
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

  const handleSubmit = () => {
    if (!userAnswer.trim()) return;
    const correct =
      normalizeAnswer(userAnswer) === normalizeAnswer(question.answer);
    setIsCorrect(correct);
    setSubmitted(true);
    submitAnswer(question.examId, question.id, userAnswer, correct);
  };

  const handleRetry = () => {
    setUserAnswer("");
    setSubmitted(false);
    setIsCorrect(false);
    setShowExplanation(false);
    setShowPractice(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !submitted) {
      handleSubmit();
    }
  };

  return (
    <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900/50">
        <div className="flex items-center gap-3">
          <span className="text-gray-500 text-sm font-mono">
            {index + 1}/{total}
          </span>
          <span
            className={`px-2.5 py-0.5 rounded text-xs font-bold text-white ${
              languageColors[question.language]
            }`}
          >
            {question.language}
          </span>
          <span className="text-gray-500 text-sm">
            #{question.originalNumber}번
          </span>
        </div>
        {mounted && submitted && (
          <span
            className={`text-sm font-bold ${
              isCorrect ? "text-green-400" : "text-red-400"
            }`}
          >
            {isCorrect ? "정답!" : "오답"}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-white">{question.title}</h3>
        <p className="text-gray-300 whitespace-pre-line leading-relaxed">
          {question.question}
        </p>

        {(question.difficulty || question.concepts?.length) && (
          <div className="flex flex-wrap gap-2">
            {question.difficulty && (
              <span className="rounded-md bg-blue-600/20 px-2.5 py-1 text-xs font-medium text-blue-300">
                난이도 {question.difficulty}
              </span>
            )}
            {question.concepts?.map((concept) => (
              <span
                key={concept}
                className="rounded-md bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-300"
              >
                {concept}
              </span>
            ))}
          </div>
        )}

        {question.code && (
          <CodeBlock
            code={question.code}
            language={question.language.toLowerCase()}
          />
        )}

        {/* Answer Input */}
        <div className="space-y-3 pt-2">
          <label className="block text-sm font-medium text-gray-400">
            정답을 입력하세요
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={submitted}
              placeholder="실행 결과를 입력하세요..."
              className={`flex-1 px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                submitted
                  ? isCorrect
                    ? "border-green-500 bg-green-900/20"
                    : "border-red-500 bg-red-900/20"
                  : "border-gray-700 focus:ring-blue-500 focus:border-blue-500"
              }`}
            />
            {!submitted ? (
              <button
                onClick={handleSubmit}
                disabled={!userAnswer.trim()}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                확인
              </button>
            ) : (
              <button
                onClick={handleRetry}
                className="px-6 py-3 bg-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-600 transition-colors"
              >
                재시도
              </button>
            )}
          </div>

          {/* Correct Answer */}
          {mounted && submitted && !isCorrect && (
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
              <p className="text-sm text-red-300">
                <span className="font-bold">정답:</span>{" "}
                <code className="bg-red-900/40 px-2 py-0.5 rounded text-red-200">
                  {question.answer}
                </code>
              </p>
            </div>
          )}
        </div>

        {/* Explanation + JS Comparison */}
        {mounted && submitted && (
          <div className="pt-2 space-y-2">
            <div className="flex gap-3">
              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors"
              >
                {showExplanation ? "▼" : "▶"} 해설 보기
              </button>
              {question.jsComparison && (
                <button
                  onClick={() => setShowJsComparison(!showJsComparison)}
                  className="text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  {showJsComparison ? "▼" : "▶"} JS 비교
                </button>
              )}
              {question.practiceQuestions?.length ? (
                <button
                  onClick={() => setShowPractice(!showPractice)}
                  className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  {showPractice ? "▼" : "▶"} 유사 실전 문제
                </button>
              ) : null}
            </div>
            {showExplanation && (
              <div className="space-y-3">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
                  <pre className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed font-sans">
                    {question.explanation}
                  </pre>
                </div>
                {question.commonMistakes?.length ? (
                  <div className="rounded-lg border border-red-900/60 bg-red-950/20 p-4">
                    <p className="mb-2 text-xs font-bold text-red-300">
                      자주 틀리는 포인트
                    </p>
                    <ul className="space-y-1 text-sm text-red-100">
                      {question.commonMistakes.map((mistake) => (
                        <li key={mistake}>- {mistake}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            )}
            {showJsComparison && question.jsComparison && (
              <div className="bg-yellow-900/10 border border-yellow-800/40 rounded-lg overflow-hidden">
                <div className="px-4 py-2 bg-yellow-900/20 border-b border-yellow-800/40">
                  <span className="text-xs font-bold text-yellow-400">
                    JavaScript로 비교하면?
                  </span>
                </div>
                <div className="p-4">
                  <CodeBlock code={question.jsComparison} language="javascript" />
                </div>
              </div>
            )}
            {showPractice && question.practiceQuestions?.length ? (
              <div className="space-y-3">
                {question.practiceQuestions.map((practice) => (
                  <div
                    key={practice.id}
                    className="rounded-lg border border-emerald-900/50 bg-emerald-950/10 overflow-hidden"
                  >
                    <div className="border-b border-emerald-900/50 bg-emerald-950/30 px-4 py-3">
                      <p className="text-xs font-bold text-emerald-300">
                        {practice.title}
                      </p>
                    </div>
                    <div className="space-y-3 p-4">
                      <p className="whitespace-pre-line text-sm leading-relaxed text-gray-300">
                        {practice.question}
                      </p>
                      {practice.code && (
                        <CodeBlock
                          code={practice.code}
                          language={question.language.toLowerCase()}
                        />
                      )}
                      <div className="rounded-md bg-gray-900/70 p-3">
                        <p className="text-sm text-gray-300">
                          <span className="font-bold text-emerald-300">
                            정답:
                          </span>{" "}
                          <code className="rounded bg-emerald-900/30 px-1.5 py-0.5 text-emerald-100">
                            {practice.answer}
                          </code>
                        </p>
                        <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-gray-400">
                          {practice.explanation}
                        </p>
                        {practice.trap && (
                          <p className="mt-2 text-sm text-yellow-200">
                            낚시 포인트: {practice.trap}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
