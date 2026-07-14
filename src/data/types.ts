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
  concepts?: string[];
  difficulty?: "하" | "중" | "상";
  commonMistakes?: string[];
  practiceQuestions?: PracticeQuestion[];
}

export interface PracticeQuestion {
  id: string;
  title: string;
  question: string;
  code?: string;
  answer: string;
  explanation: string;
  trap?: string;
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

export interface QuickReviewCard {
  id: string;
  sectionId: string;
  prompt: string;
  answer: string;
  note?: string;
  aliases?: string[];
}

export interface QuickReviewSection {
  id: string;
  title: string;
  description: string;
  cards: QuickReviewCard[];
}

export type SqlCell = string | number | null;

export interface SqlTableExample {
  name: string;
  description: string;
  columns: string[];
  rows: SqlCell[][];
}

export interface SqlLabExample {
  id: string;
  title: string;
  category: "JOIN" | "집계/정렬" | "DML/TCL" | "DDL" | "DCL";
  goal: string;
  description: string;
  sql: string;
  resultTitle: string;
  resultColumns: string[];
  resultRows: SqlCell[][];
  steps: string[];
  examPoint: string;
  trap: string;
}

export interface SqlLabData {
  tables: SqlTableExample[];
  examples: SqlLabExample[];
}
