"use client";

import { Language } from "@/data/types";

const categories: { label: string; value: Language | "all" }[] = [
  { label: "전체", value: "all" },
  { label: "C", value: "C" },
  { label: "Java", value: "Java" },
  { label: "Python", value: "Python" },
  { label: "SQL", value: "SQL" },
  { label: "이론", value: "이론" },
];

interface CategoryFilterProps {
  selected: Language | "all";
  onChange: (category: Language | "all") => void;
  counts: Record<Language | "all", number>;
}

export default function CategoryFilter({
  selected,
  onChange,
  counts,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selected === value
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          {label}
          <span
            className={`ml-1.5 text-xs ${
              selected === value ? "text-blue-200" : "text-gray-500"
            }`}
          >
            {counts[value]}
          </span>
        </button>
      ))}
    </div>
  );
}
