import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";
import { programmingLabData } from "@/data/programmingLab";
import { ProgrammingLanguage } from "@/data/types";

const languageStyles: Record<ProgrammingLanguage, string> = {
  Python: "bg-emerald-600/20 text-emerald-300",
  Java: "bg-orange-600/20 text-orange-300",
  C: "bg-blue-600/20 text-blue-300",
};

const codeLanguages: Record<ProgrammingLanguage, string> = {
  Python: "python",
  Java: "java",
  C: "c",
};

export default function ProgrammingLabPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-400 transition-colors hover:text-white"
        >
          ← 홈
        </Link>
        <div className="space-y-2">
          <p className="text-sm font-medium text-sky-400">문법 정리</p>
          <h1 className="text-3xl font-bold text-white">
            Python · Java · C 기출형 문법
          </h1>
          <p className="max-w-3xl text-gray-400">
            자료형, 진법 변환, 비트 연산, 포인터, 함수 포인터, 구조체 포인터를
            코드와 출력 흐름으로 빠르게 확인합니다.
          </p>
        </div>
      </div>

      {programmingLabData.sections.map((section) => (
        <section key={section.id} className="space-y-5">
          <div className="border-b border-gray-800 pb-3">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-md px-2 py-1 text-xs font-medium ${
                  languageStyles[section.language]
                }`}
              >
                {section.language}
              </span>
              <h2 className="text-xl font-bold text-white">{section.title}</h2>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              {section.description}
            </p>
          </div>

          <div className="space-y-6">
            {section.examples.map((example, index) => (
              <article key={example.id} className="border-t border-gray-800 pt-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-sm text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-md bg-gray-800 px-2 py-1 text-xs text-gray-400">
                      {example.examSignal}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{example.title}</h3>
                </div>

                <CodeBlock
                  code={example.code}
                  language={codeLanguages[example.language]}
                />

                <div className="grid gap-4 lg:grid-cols-[1fr_0.85fr]">
                  <div className="space-y-3 rounded-lg border border-gray-800 bg-gray-950/40 p-4">
                    <h4 className="font-semibold text-white">추적 순서</h4>
                    <ol className="space-y-2 text-sm leading-relaxed text-gray-300">
                      {example.steps.map((step) => (
                        <li key={step} className="flex gap-2">
                          <span className="mt-0.5 text-sky-300">•</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="space-y-3 rounded-lg border border-gray-800 bg-gray-900 p-4">
                    <h4 className="font-semibold text-white">출력</h4>
                    <pre className="overflow-x-auto rounded-md bg-gray-950 p-3 font-mono text-sm leading-relaxed text-gray-100">
                      {example.output}
                    </pre>
                    <div className="flex flex-wrap gap-2">
                      {example.relatedConcepts.map((concept) => (
                        <span
                          key={concept}
                          className="rounded-md bg-gray-800 px-2 py-1 text-xs text-gray-400"
                        >
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-emerald-900/60 bg-emerald-950/20 p-4">
                    <p className="text-xs font-medium text-emerald-300">
                      시험 포인트
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-300">
                      {example.examPoint}
                    </p>
                  </div>
                  <div className="rounded-lg border border-amber-900/60 bg-amber-950/20 p-4">
                    <p className="text-xs font-medium text-amber-300">
                      주의할 함정
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-300">
                      {example.trap}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
