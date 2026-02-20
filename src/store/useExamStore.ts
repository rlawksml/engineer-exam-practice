import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserAnswer {
  questionId: number;
  answer: string;
  isCorrect: boolean;
}

interface ExamState {
  answers: Record<string, UserAnswer[]>;
  currentQuestion: Record<string, number>;

  submitAnswer: (examId: string, questionId: number, answer: string, isCorrect: boolean) => void;
  setCurrentQuestion: (examId: string, index: number) => void;
  getAnswer: (examId: string, questionId: number) => UserAnswer | undefined;
  getExamStats: (examId: string) => { total: number; answered: number; correct: number };
  resetExam: (examId: string) => void;
  resetAll: () => void;
}

const useExamStore = create<ExamState>()(
  persist(
    (set, get) => ({
      answers: {},
      currentQuestion: {},

      submitAnswer: (examId, questionId, answer, isCorrect) => {
        set((state) => {
          const examAnswers = state.answers[examId] || [];
          const filtered = examAnswers.filter((a) => a.questionId !== questionId);
          return {
            answers: {
              ...state.answers,
              [examId]: [...filtered, { questionId, answer, isCorrect }],
            },
          };
        });
      },

      setCurrentQuestion: (examId, index) => {
        set((state) => ({
          currentQuestion: { ...state.currentQuestion, [examId]: index },
        }));
      },

      getAnswer: (examId, questionId) => {
        const examAnswers = get().answers[examId] || [];
        return examAnswers.find((a) => a.questionId === questionId);
      },

      getExamStats: (examId) => {
        const examAnswers = get().answers[examId] || [];
        return {
          total: 0,
          answered: examAnswers.length,
          correct: examAnswers.filter((a) => a.isCorrect).length,
        };
      },

      resetExam: (examId) => {
        set((state) => {
          const newAnswers = { ...state.answers };
          delete newAnswers[examId];
          const newCurrent = { ...state.currentQuestion };
          delete newCurrent[examId];
          return { answers: newAnswers, currentQuestion: newCurrent };
        });
      },

      resetAll: () => {
        set({ answers: {}, currentQuestion: {} });
      },
    }),
    {
      name: "exam-store",
    }
  )
);

export default useExamStore;
