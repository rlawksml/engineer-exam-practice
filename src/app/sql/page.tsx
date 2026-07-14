import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";
import { sqlLabData } from "@/data/sqlLab";
import { SqlCell, SqlTableExample } from "@/data/types";

function formatCell(value: SqlCell) {
  return value === null ? "NULL" : String(value);
}

function DataTable({ table }: { table: SqlTableExample }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
      <div className="border-b border-gray-800 px-4 py-3">
        <h2 className="font-bold text-white">{table.name}</h2>
        <p className="mt-1 text-sm leading-relaxed text-gray-400">
          {table.description}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="bg-gray-950/70 text-gray-400">
            <tr>
              {table.columns.map((column) => (
                <th key={column} className="px-4 py-3 font-medium">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {table.rows.map((row, rowIndex) => (
              <tr key={`${table.name}-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${table.name}-${rowIndex}-${cellIndex}`}
                    className={`px-4 py-3 ${
                      cell === null ? "font-mono text-amber-300" : "text-gray-200"
                    }`}
                  >
                    {formatCell(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ResultTable({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: string[];
  rows: SqlCell[][];
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-800">
      <div className="border-b border-gray-800 bg-gray-950/70 px-4 py-3">
        <h3 className="font-semibold text-white">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="bg-gray-950/50 text-gray-400">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-4 py-3 font-medium">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {rows.map((row, rowIndex) => (
              <tr key={`${title}-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${title}-${rowIndex}-${cellIndex}`}
                    className={`px-4 py-3 ${
                      cell === null ? "font-mono text-amber-300" : "text-gray-200"
                    }`}
                  >
                    {formatCell(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function SqlLabPage() {
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
          <p className="text-sm font-medium text-violet-400">SQL 실습</p>
          <h1 className="text-3xl font-bold text-white">
            두 테이블로 보는 SQL 흐름
          </h1>
          <p className="max-w-3xl text-gray-400">
            STUDENT와 DEPARTMENT 테이블을 기준으로 JOIN, 집계, DML/TCL, DDL,
            DCL이 실제로 어떤 결과를 만드는지 단계별로 확인합니다.
          </p>
        </div>
      </div>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-white">기준 테이블</h2>
          <p className="mt-1 text-sm text-gray-500">
            아래 두 테이블을 모든 예시의 공통 출발점으로 사용합니다.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {sqlLabData.tables.map((table) => (
            <DataTable key={table.name} table={table} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="text-lg font-bold text-white">SQL 예시 흐름</h2>
          <p className="mt-1 text-sm text-gray-500">
            코드를 먼저 보고, 실행 결과와 시험 포인트를 순서대로 확인합니다.
          </p>
        </div>

        {sqlLabData.examples.map((example, index) => (
          <article
            key={example.id}
            className="border-t border-gray-800 pt-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-sm text-gray-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-md bg-violet-600/20 px-2 py-1 text-xs font-medium text-violet-300">
                    {example.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{example.title}</h3>
                <p className="text-sm text-gray-400">{example.goal}</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              {example.description}
            </p>

            <CodeBlock code={example.sql} language="sql" />

            <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
              <div className="space-y-3 rounded-lg border border-gray-800 bg-gray-950/40 p-4">
                <h4 className="font-semibold text-white">실행 순서</h4>
                <ol className="space-y-2 text-sm leading-relaxed text-gray-300">
                  {example.steps.map((step) => (
                    <li key={step} className="flex gap-2">
                      <span className="mt-0.5 text-violet-300">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <ResultTable
                title={example.resultTitle}
                columns={example.resultColumns}
                rows={example.resultRows}
              />
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-emerald-900/60 bg-emerald-950/20 p-4">
                <p className="text-xs font-medium text-emerald-300">시험 포인트</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  {example.examPoint}
                </p>
              </div>
              <div className="rounded-lg border border-amber-900/60 bg-amber-950/20 p-4">
                <p className="text-xs font-medium text-amber-300">주의할 함정</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  {example.trap}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
