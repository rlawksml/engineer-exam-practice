import { describe, expect, it } from "vitest";
import { conceptSections } from "./conceptCards";
import exam2020_1 from "./exam2020-1";
import exam2020_2 from "./exam2020-2";
import exam2020_3 from "./exam2020-3";
import exam2020_4 from "./exam2020-4";
import exam2021_1 from "./exam2021-1";
import exam2021_2 from "./exam2021-2";
import exam2021_3 from "./exam2021-3";
import exam2022_1 from "./exam2022-1";
import exam2022_3 from "./exam2022-3";
import exam2023_1 from "./exam2023-1";
import exam2023_2 from "./exam2023-2";
import exam2023_3 from "./exam2023-3";
import exam2024_1 from "./exam2024-1";
import exam2024_2 from "./exam2024-2";
import exam2024_3 from "./exam2024-3";
import exam2025_1 from "./exam2025-1";
import exam2025_2 from "./exam2025-2";
import exam2025_3 from "./exam2025-3";
import { ConceptCard, ExamData, Question } from "./types";

const exams: ExamData[] = [
  exam2020_1,
  exam2020_2,
  exam2020_3,
  exam2020_4,
  exam2021_1,
  exam2021_2,
  exam2021_3,
  exam2022_1,
  exam2022_3,
  exam2023_1,
  exam2023_2,
  exam2023_3,
  exam2024_1,
  exam2024_2,
  exam2024_3,
  exam2025_1,
  exam2025_2,
  exam2025_3,
];

const allQuestions = exams.flatMap((exam) => exam.questions);
const allConceptCards = conceptSections.flatMap((section) => section.cards);

function expectNonEmpty(value: string, label: string) {
  expect(value.trim(), label).not.toHaveLength(0);
}

describe("exam data integrity", () => {
  it("keeps exam ids and question ids unique and consistent", () => {
    const examIds = new Set<string>();
    const globalQuestionKeys = new Set<string>();

    exams.forEach((exam) => {
      expectNonEmpty(exam.id, "exam id");
      expectNonEmpty(exam.title, `exam title: ${exam.id}`);
      expect(examIds.has(exam.id), `duplicate exam id: ${exam.id}`).toBe(false);
      examIds.add(exam.id);

      exam.questions.forEach((question) => {
        expect(question.examId, `question ${question.id} examId`).toBe(exam.id);
        const key = `${question.examId}:${question.id}`;
        expect(globalQuestionKeys.has(key), `duplicate question key: ${key}`).toBe(false);
        globalQuestionKeys.add(key);
      });
    });
  });

  it("keeps required question fields filled", () => {
    allQuestions.forEach((question) => {
      expectNonEmpty(question.title, `title: ${question.id}`);
      expectNonEmpty(question.question, `question: ${question.id}`);
      expectNonEmpty(question.answer, `answer: ${question.id}`);
      expectNonEmpty(question.explanation, `explanation: ${question.id}`);
      expect(question.originalNumber, `original number: ${question.id}`).toBeGreaterThan(0);
    });
  });

  it("keeps enrichment fields internally complete when present", () => {
    allQuestions.forEach((question) => {
      question.concepts?.forEach((concept) => {
        expectNonEmpty(concept, `concept: ${question.id}`);
      });

      question.commonMistakes?.forEach((mistake) => {
        expectNonEmpty(mistake, `common mistake: ${question.id}`);
      });

      question.practiceQuestions?.forEach((practice) => {
        expectNonEmpty(practice.id, `practice id: ${question.id}`);
        expectNonEmpty(practice.title, `practice title: ${practice.id}`);
        expectNonEmpty(practice.question, `practice question: ${practice.id}`);
        expectNonEmpty(practice.answer, `practice answer: ${practice.id}`);
        expectNonEmpty(practice.explanation, `practice explanation: ${practice.id}`);
      });
    });
  });

  it("captures corrected SQL COUNT(column) semantics for 2025-3 question 305", () => {
    const question = allQuestions.find(
      (item): item is Question => item.examId === "2025-3" && item.id === 305
    );

    expect(question).toBeDefined();
    expect(question.answer).toBe("2");
    expect(question.explanation).toContain("현재 테이블 기준 정답: 2");
    expect(question.explanation).not.toContain("복원 정답: 4");
    expect(question.commonMistakes).toContain("COUNT(col2)가 NULL을 제외한다는 점을 놓침");
  });
});

describe("concept card integrity", () => {
  it("keeps sections and cards unique and linked", () => {
    const sectionIds = new Set<string>();
    const cardIds = new Set<string>();

    conceptSections.forEach((section) => {
      expectNonEmpty(section.id, "section id");
      expectNonEmpty(section.title, `section title: ${section.id}`);
      expectNonEmpty(section.description, `section description: ${section.id}`);
      expect(sectionIds.has(section.id), `duplicate section id: ${section.id}`).toBe(false);
      sectionIds.add(section.id);
      expect(section.cards.length, `cards for ${section.id}`).toBeGreaterThan(0);

      section.cards.forEach((card) => {
        expect(card.sectionId, `card ${card.id} sectionId`).toBe(section.id);
        expect(cardIds.has(card.id), `duplicate card id: ${card.id}`).toBe(false);
        cardIds.add(card.id);
      });
    });
  });

  it("keeps required card fields filled", () => {
    allConceptCards.forEach((card: ConceptCard) => {
      expectNonEmpty(card.front, `front: ${card.id}`);
      expectNonEmpty(card.back, `back: ${card.id}`);
      expectNonEmpty(card.examPoint, `exam point: ${card.id}`);
      expect(card.relatedKeywords.length, `keywords: ${card.id}`).toBeGreaterThan(0);
      card.relatedKeywords.forEach((keyword) => {
        expectNonEmpty(keyword, `keyword: ${card.id}`);
      });
    });
  });

  it("keeps high-risk factual cards aligned with the strategy notes", () => {
    const byId = new Map(allConceptCards.map((card) => [card.id, card]));

    expect(byId.get("net-arp-rarp")?.back).toContain("ARP는 IP 주소에서 MAC 주소");
    expect(byId.get("net-arp-rarp")?.back).toContain("RARP는 MAC 주소에서 IP 주소");
    expect(byId.get("sql-count")?.back).toContain("COUNT(*)");
    expect(byId.get("sql-count")?.back).toContain("NULL이 아닌 행");
    expect(byId.get("c-bit-ops")?.back).toContain("XOR");
    expect(byId.get("se-pattern-observer")?.back).toContain("Observer");
    expect(byId.get("java-overload-override")?.back).toContain("오버로딩 후보");
  });
});
