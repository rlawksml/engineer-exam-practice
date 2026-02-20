"use client";

interface ProgressBarProps {
  answered: number;
  correct: number;
  total: number;
}

export default function ProgressBar({
  answered,
  correct,
  total,
}: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((answered / total) * 100) : 0;
  const accuracy =
    answered > 0 ? Math.round((correct / answered) * 100) : 0;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">
          진행률 {answered}/{total}문제
        </span>
        <span className="text-gray-400">
          정답률{" "}
          <span
            className={
              accuracy >= 70
                ? "text-green-400"
                : accuracy >= 40
                ? "text-yellow-400"
                : answered > 0
                ? "text-red-400"
                : "text-gray-400"
            }
          >
            {answered > 0 ? `${accuracy}%` : "-"}
          </span>
        </span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-blue-500 h-full rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
