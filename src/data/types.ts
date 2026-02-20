export type Language = "C" | "Java" | "Python" | "SQL";

export interface Question {
  id: number;
  examId: string;
  originalNumber: number;
  language: Language;
  title: string;
  question: string;
  code: string;
  answer: string;
  explanation: string;
  jsComparison?: string;
}

export interface ExamData {
  id: string;
  title: string;
  questions: Question[];
}
