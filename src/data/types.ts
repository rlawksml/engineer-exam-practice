export type Language = "C" | "Java" | "Python" | "SQL" | "이론";

export interface Question {
  id: number;
  examId: string;
  originalNumber: number;
  language: Language;
  title: string;
  question: string;
  code?: string;
  answer: string;
  explanation: string;
  jsComparison?: string;
}

export interface ExamData {
  id: string;
  title: string;
  questions: Question[];
}

export type ConceptStatus = "known" | "uncertain" | "unknown";

export interface ConceptCard {
  id: string;
  sectionId: string;
  front: string;
  back: string;
  examPoint: string;
  trap?: string;
  relatedKeywords: string[];
}

export interface ConceptSection {
  id: string;
  title: string;
  description: string;
  priority: string;
  cards: ConceptCard[];
}
