import { describe, expect, it } from "vitest";
import { conceptSections } from "./conceptCards";
import { quickReviewCards, quickReviewSections } from "./quickReviewCards";
import { sqlLabData } from "./sqlLab";
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
import mockExam2026_1 from "./mockExam2026-1";
import mockExam2026_2 from "./mockExam2026-2";
import mockExam2026_3 from "./mockExam2026-3";
import { ConceptCard, ExamData, Question, QuickReviewCard } from "./types";

const exams: ExamData[] = [
  mockExam2026_1,
  mockExam2026_2,
  mockExam2026_3,
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

  it("includes three 2026 mock exams with 20 questions each", () => {
    [mockExam2026_1, mockExam2026_2, mockExam2026_3].forEach((exam) => {
      expect(exam.questions, exam.id).toHaveLength(20);
      expect(exam.questions[0].explanation).toContain(
        "exam/2026_information_processing_engineer_mock_exam_3sets.md"
      );
    });
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
    expect(byId.get("sql-ddl")?.back).toContain("CREATE");
    expect(byId.get("sql-ddl")?.trap).toContain("DELETE");
    expect(byId.get("sql-dml")?.back).toContain("INSERT");
    expect(byId.get("sql-dcl")?.back).toContain("GRANT");
    expect(byId.get("sql-tcl")?.back).toContain("COMMIT");
    expect(byId.get("sql-delete-drop-truncate")?.back).toContain("DELETE");
    expect(byId.get("sql-delete-drop-truncate")?.back).toContain("DROP");
    expect(byId.get("sql-delete-drop-truncate")?.back).toContain("TRUNCATE");
    expect(byId.get("sql-table-event-flow")?.back).toContain("CREATE VIEW");
    expect(byId.get("sql-table-event-flow")?.back).toContain("ALTER TABLE");
    expect(byId.get("sql-table-event-flow")?.back).toContain("INSERT INTO");
    expect(byId.get("sql-table-event-flow")?.back).toContain("DROP TABLE");
    expect(byId.get("sql-view-vs-table")?.trap).toContain("DROP VIEW");
    expect(byId.get("sql-where-group-having-order-flow")?.back).toContain("WHERE pass");
    expect(byId.get("sql-where-group-having-order-flow")?.back).toContain("GROUP BY dept");
    expect(byId.get("sql-where-group-having-order-flow")?.back).toContain("HAVING COUNT");
    expect(byId.get("sql-where-group-having-order-flow")?.back).toContain("ORDER BY avg_score DESC");
    expect(byId.get("sql-where-vs-having")?.back).toContain("그룹을 만들기 전에");
    expect(byId.get("sql-order-asc-desc")?.back).toContain("내림차순");
    expect(byId.get("sql-command-taxonomy-syntax")?.back).toContain("RETRIEVE");
    expect(byId.get("sql-command-taxonomy-syntax")?.back).toContain("RENAME TABLE");
    expect(byId.get("sql-command-taxonomy-syntax")?.back).toContain("TRUNCATE TABLE");
    expect(byId.get("sql-command-taxonomy-syntax")?.back).toContain("SAVEPOINT sp1");
    expect(byId.get("sql-truncate-delete-drop-rename")?.back).toContain("DELETE FROM");
    expect(byId.get("sql-truncate-delete-drop-rename")?.back).toContain("DROP TABLE");
    expect(byId.get("sql-foreign-key-references")?.back).toContain("FOREIGN KEY");
    expect(byId.get("sql-foreign-key-references")?.back).toContain("REFERENCES");
    expect(byId.get("sql-key-hierarchy")?.back).toContain("슈퍼키");
    expect(byId.get("sql-key-hierarchy")?.back).toContain("후보키");
    expect(byId.get("sql-key-hierarchy")?.back).toContain("기본키");
    expect(byId.get("sql-primary-unique-key-syntax")?.back).toContain("PRIMARY KEY");
    expect(byId.get("sql-primary-unique-key-syntax")?.back).toContain("UNIQUE");
    expect(byId.get("c-bit-ops")?.back).toContain("XOR");
    expect(byId.get("se-pattern-observer")?.back).toContain("Observer");
    expect(byId.get("java-overload-override")?.back).toContain("오버로딩 후보");
  });

  it("adds DDL/DML/DCL practice coverage to the enriched SQL question", () => {
    const question = allQuestions.find(
      (item): item is Question => item.examId === "2025-3" && item.id === 305
    );

    expect(question).toBeDefined();
    expect(question.practiceQuestions?.length).toBeGreaterThanOrEqual(5);
    expect(question.practiceQuestions?.some((practice) => practice.answer.includes("DDL"))).toBe(
      true
    );
    expect(question.practiceQuestions?.some((practice) => practice.answer.includes("DML"))).toBe(
      true
    );
    expect(question.practiceQuestions?.some((practice) => practice.answer.includes("DCL"))).toBe(
      true
    );
    expect(question.practiceQuestions?.some((practice) => practice.answer.includes("COMMIT"))).toBe(
      true
    );
    expect(
      question.practiceQuestions?.some(
        (practice) =>
          practice.question.includes("CREATE VIEW") &&
          practice.question.includes("ALTER TABLE") &&
          practice.question.includes("INSERT INTO") &&
          practice.question.includes("DROP VIEW")
      )
    ).toBe(true);
    expect(
      question.practiceQuestions?.some(
        (practice) => practice.question.includes("DROP TABLE") && practice.answer.includes("2, 3")
      )
    ).toBe(true);
    expect(
      question.practiceQuestions?.some(
        (practice) =>
          practice.question.includes("GROUP BY dept") &&
          practice.question.includes("HAVING COUNT") &&
          practice.answer.includes("dept=DB")
      )
    ).toBe(true);
    expect(
      question.practiceQuestions?.some(
        (practice) =>
          practice.question.includes("ORDER BY score DESC, name ASC") &&
          practice.answer.includes("Choi, Kim, Lee, Park")
      )
    ).toBe(true);
    expect(
      question.practiceQuestions?.some(
        (practice) =>
          practice.question.includes("COUNT(*)") &&
          practice.question.includes("COUNT(bonus)") &&
          practice.answer.includes("bonus_cnt=0")
      )
    ).toBe(true);
    expect(
      question.practiceQuestions?.some(
        (practice) =>
          practice.question.includes("명령어 종류") &&
          practice.answer.includes("RENAME TABLE STUDENT TO EXAM_STUDENT") &&
          practice.answer.includes("SAVEPOINT sp1")
      )
    ).toBe(true);
    expect(
      question.practiceQuestions?.some(
        (practice) =>
          practice.question.includes("ROLLBACK TO sp1") &&
          practice.answer.includes("삽입은 확정") &&
          practice.answer.includes("UPDATE는 취소")
      )
    ).toBe(true);
  });
});

describe("quick review card integrity", () => {
  it("keeps quick sections and cards unique and linked", () => {
    const sectionIds = new Set<string>();
    const cardIds = new Set<string>();

    quickReviewSections.forEach((section) => {
      expectNonEmpty(section.id, "quick section id");
      expectNonEmpty(section.title, `quick section title: ${section.id}`);
      expectNonEmpty(section.description, `quick section description: ${section.id}`);
      expect(sectionIds.has(section.id), `duplicate quick section id: ${section.id}`).toBe(false);
      sectionIds.add(section.id);
      expect(section.cards.length, `quick cards for ${section.id}`).toBeGreaterThan(0);

      section.cards.forEach((card) => {
        expect(card.sectionId, `quick card ${card.id} sectionId`).toBe(section.id);
        expect(cardIds.has(card.id), `duplicate quick card id: ${card.id}`).toBe(false);
        cardIds.add(card.id);
      });
    });
  });

  it("keeps quick review prompts and answers concise and filled", () => {
    quickReviewCards.forEach((card: QuickReviewCard) => {
      expectNonEmpty(card.prompt, `quick prompt: ${card.id}`);
      expectNonEmpty(card.answer, `quick answer: ${card.id}`);
      expect(card.prompt.length, `quick prompt length: ${card.id}`).toBeLessThanOrEqual(80);
      expect(card.answer.length, `quick answer length: ${card.id}`).toBeLessThanOrEqual(80);
    });
  });

  it("covers high-frequency short-answer concepts", () => {
    const byId = new Map(quickReviewCards.map((card) => [card.id, card]));

    expect(byId.get("network-crc")?.answer).toContain("오류 검출");
    expect(byId.get("network-rarp")?.prompt).toContain("MAC -> IP");
    expect(byId.get("network-rarp")?.answer).toBe("RARP");
    expect(byId.get("db-ddl")?.answer).toBe("DDL");
    expect(byId.get("db-dml")?.answer).toBe("DML");
    expect(byId.get("db-dcl")?.answer).toBe("DCL");
    expect(byId.get("db-tcl")?.answer).toBe("TCL");
    expect(byId.get("db-drop-truncate-delete")?.answer).toContain("객체 삭제");
    expect(byId.get("db-create-view")?.answer).toContain("가상 테이블");
    expect(byId.get("db-alter-add-column")?.answer).toBe("테이블 구조");
    expect(byId.get("db-update-row-count")?.answer).toContain("값만 수정");
    expect(byId.get("db-drop-view")?.answer).toContain("뷰 정의만 삭제");
    expect(byId.get("db-drop-table")?.answer).toContain("테이블 객체");
    expect(byId.get("db-where")?.answer).toContain("그룹화 전");
    expect(byId.get("db-group-by")?.answer).toContain("그룹");
    expect(byId.get("db-having")?.answer).toContain("그룹화 후");
    expect(byId.get("db-count-star")?.answer).toContain("전체 행");
    expect(byId.get("db-count-column")?.answer).toContain("NULL 제외");
    expect(byId.get("db-order-desc")?.answer).toContain("큰 값");
    expect(byId.get("db-order-asc")?.answer).toContain("사전순");
    expect(byId.get("db-order-multi")?.answer).toContain("동점");
    expect(byId.get("db-select-retrieve")?.answer).toBe("RETRIEVE");
    expect(byId.get("db-rename")?.answer).toBe("RENAME");
    expect(byId.get("db-truncate")?.answer).toBe("TRUNCATE");
    expect(byId.get("db-grant-syntax")?.answer).toContain("GRANT SELECT");
    expect(byId.get("db-revoke-syntax")?.answer).toContain("REVOKE");
    expect(byId.get("db-savepoint")?.answer).toBe("SAVEPOINT");
    expect(byId.get("db-commit")?.answer).toBe("COMMIT");
    expect(byId.get("db-rollback")?.answer).toBe("ROLLBACK");
    expect(byId.get("db-foreign-key-references")?.answer).toContain("REFERENCES");
    expect(byId.get("db-super-key")?.answer).toBe("슈퍼키");
    expect(byId.get("db-candidate-key-rule")?.answer).toContain("유일성");
    expect(byId.get("db-candidate-key-rule")?.answer).toContain("최소성");
    expect(byId.get("db-primary-key-rule")?.answer).toBe("기본키");
    expect(byId.get("db-alternate-key")?.answer).toBe("대체키");
    expect(byId.get("db-composite-key")?.answer).toBe("복합키");
    expect(byId.get("db-primary-key-syntax")?.answer).toContain("PRIMARY KEY");
    expect(byId.get("db-unique-syntax")?.answer).toBe("UNIQUE");
    expect(byId.get("se-cohesion-order")?.answer).toContain("기능적");
    expect(byId.get("se-coupling-order")?.answer).toContain("자료");
    expect(byId.get("se-stub")?.answer).toBe("스텁");
    expect(byId.get("se-driver")?.answer).toBe("드라이버");
  });
});

describe("SQL lab integrity", () => {
  it("keeps two source tables and SQL flow examples complete", () => {
    expect(sqlLabData.tables).toHaveLength(2);
    expect(sqlLabData.examples.length).toBeGreaterThanOrEqual(6);

    sqlLabData.tables.forEach((table) => {
      expectNonEmpty(table.name, "sql table name");
      expectNonEmpty(table.description, `sql table description: ${table.name}`);
      expect(table.columns.length, `sql table columns: ${table.name}`).toBeGreaterThan(0);
      expect(table.rows.length, `sql table rows: ${table.name}`).toBeGreaterThan(0);
      table.rows.forEach((row) => {
        expect(row, `row width: ${table.name}`).toHaveLength(table.columns.length);
      });
    });

    sqlLabData.examples.forEach((example) => {
      expectNonEmpty(example.id, "sql lab id");
      expectNonEmpty(example.title, `sql lab title: ${example.id}`);
      expectNonEmpty(example.goal, `sql lab goal: ${example.id}`);
      expectNonEmpty(example.description, `sql lab description: ${example.id}`);
      expectNonEmpty(example.sql, `sql lab sql: ${example.id}`);
      expectNonEmpty(example.resultTitle, `sql lab result title: ${example.id}`);
      expectNonEmpty(example.examPoint, `sql lab exam point: ${example.id}`);
      expectNonEmpty(example.trap, `sql lab trap: ${example.id}`);
      expect(example.steps.length, `sql lab steps: ${example.id}`).toBeGreaterThan(0);
      expect(example.resultColumns.length, `sql lab result columns: ${example.id}`).toBeGreaterThan(
        0
      );
      example.resultRows.forEach((row) => {
        expect(row, `sql lab result row width: ${example.id}`).toHaveLength(
          example.resultColumns.length
        );
      });
    });
  });

  it("covers join, aggregate, DDL, DML/TCL, and DCL examples", () => {
    const byId = new Map(sqlLabData.examples.map((example) => [example.id, example]));

    expect(byId.get("inner-join")?.sql).toContain("INNER JOIN");
    expect(byId.get("left-join")?.sql).toContain("LEFT JOIN");
    expect(byId.get("aggregate-order")?.sql).toContain("GROUP BY");
    expect(byId.get("aggregate-order")?.sql).toContain("HAVING");
    expect(byId.get("dml-tcl")?.sql).toContain("SAVEPOINT");
    expect(byId.get("dml-tcl")?.sql).toContain("ROLLBACK TO");
    expect(byId.get("ddl-flow")?.sql).toContain("RENAME TABLE");
    expect(byId.get("ddl-flow")?.sql).toContain("TRUNCATE TABLE");
    expect(byId.get("foreign-key-references")?.sql).toContain("FOREIGN KEY");
    expect(byId.get("foreign-key-references")?.sql).toContain("REFERENCES DEPARTMENT");
    expect(byId.get("key-concepts")?.sql).toContain("PRIMARY KEY");
    expect(byId.get("key-concepts")?.sql).toContain("UNIQUE");
    expect(byId.get("key-concepts")?.resultRows.flat().join(" ")).toContain("슈퍼키");
    expect(byId.get("key-concepts")?.resultRows.flat().join(" ")).toContain("후보키");
    expect(byId.get("dcl-flow")?.sql).toContain("GRANT");
    expect(byId.get("dcl-flow")?.sql).toContain("REVOKE");
  });
});
