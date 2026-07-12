import { ExamData } from "./types";

const mockExam2026_3: ExamData = {
  id: "2026-mock-3",
  title: "2026년 정보처리기사 실기 예상 모의고사 3회",
  questions: [
    {
      id: 260301,
      examId: "2026-mock-3",
      originalNumber: 1,
      language: "Python",
      title: "Python 예상 1번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `text = "information"
print(text[1:8:2])`,
      answer: "nomt",
      explanation: `인덱스 1부터 7까지 두 칸씩 선택한다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제3회 1번`,
      concepts: ["Python","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260302,
      examId: "2026-mock-3",
      originalNumber: 2,
      language: "C",
      title: "C 예상 2번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>

int* next(int *p) {
    return p + 1;
}

int main() {
    int a[] = {5, 10, 15};
    int *(*fn)(int*) = next;
    printf("%x", *fn(a));
    return 0;
}`,
      answer: "a",
      explanation: `\`fn(a)\`는 두 번째 요소의 주소를 반환하고 값은 10이다.  
\`%x\`로 출력하면 16진수 \`a\`다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제3회 2번`,
      concepts: ["C","코드 추적"],
      difficulty: "상",
    },
    {
      id: 260303,
      examId: "2026-mock-3",
      originalNumber: 3,
      language: "SQL",
      title: "SQL 예상 3번 - 다음 SQL 결과를 쓰시오",
      question: `다음 SQL 결과를 쓰시오.

| id | score |
|---:|---:|
| 1 | 10 |
| 2 | NULL |
| 3 | 10 |
| 4 | 20 |`,
      code: `SELECT
    COUNT(*),
    COUNT(score),
    COUNT(DISTINCT score)
FROM T;`,
      answer: "4, 3, 2",
      explanation: `- 전체 행: 4
- score가 NULL이 아닌 행: 3
- 중복 제거한 score 값: 10, 20 → 2

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제3회 3번`,
      concepts: ["SQL","결과 추적"],
      difficulty: "중",
    },
    {
      id: 260304,
      examId: "2026-mock-3",
      originalNumber: 4,
      language: "Java",
      title: "Java 예상 4번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `class A {
    int value = 1;

    void print() {
        System.out.print("A");
    }
}

class B extends A {
    int value = 2;

    @Override
    void print() {
        System.out.print("B");
    }
}

public class Main {
    public static void main(String[] args) {
        A a = new B();
        System.out.print(a.value);
        a.print();
    }
}`,
      answer: "1B",
      explanation: `필드 접근은 참조 타입 A 기준이므로 1, 메서드는 실제 객체 B 기준이므로 B가 출력된다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제3회 4번`,
      concepts: ["Java","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260305,
      examId: "2026-mock-3",
      originalNumber: 5,
      language: "이론",
      title: "DB 예상 5번 - 제3정규형에서 제거해야 하는 함수 종속은 무엇인가?",
      question: "제3정규형에서 제거해야 하는 함수 종속은 무엇인가?",
      answer: "이행 함수 종속",
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제3회 5번`,
      concepts: ["데이터베이스","이론"],
      difficulty: "중",
    },
    {
      id: 260306,
      examId: "2026-mock-3",
      originalNumber: 6,
      language: "Python",
      title: "Python 예상 6번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `a = [[0] * 2] * 3
a[0][1] = 9
print(a)`,
      answer: "[[0, 9], [0, 9], [0, 9]]",
      explanation: `\`[[0] * 2] * 3\`은 같은 내부 리스트를 세 번 참조한다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제3회 6번`,
      concepts: ["Python","코드 추적"],
      difficulty: "상",
    },
    {
      id: 260307,
      examId: "2026-mock-3",
      originalNumber: 7,
      language: "이론",
      title: "네트워크 예상 7번 - `172.16.5.200/28`의 네트워크 주소와 브로드캐스트 주소를",
      question: "`172.16.5.200/28`의 네트워크 주소와 브로드캐스트 주소를 각각 쓰시오.",
      answer: `네트워크 주소: 172.16.5.192
브로드캐스트 주소: 172.16.5.207`,
      explanation: `\`/28\`의 블록 크기는 16이다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제3회 7번`,
      concepts: ["네트워크","이론"],
      difficulty: "중",
    },
    {
      id: 260308,
      examId: "2026-mock-3",
      originalNumber: 8,
      language: "이론",
      title: "보안 예상 8번 - 인증된 사용자가 의도하지 않은 요청을 수행하도록 유도하는 공격은 무엇",
      question: "인증된 사용자가 의도하지 않은 요청을 수행하도록 유도하는 공격은 무엇인가?",
      answer: "CSRF",
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제3회 8번`,
      concepts: ["정보보안","이론"],
      difficulty: "중",
    },
    {
      id: 260309,
      examId: "2026-mock-3",
      originalNumber: 9,
      language: "C",
      title: "C 예상 9번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    int x = 12;
    printf("%d", x & 5);
    return 0;
}`,
      answer: "4",
      explanation: `12는 \`1100\`, 5는 \`0101\`, AND 결과는 \`0100\`으로 4다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제3회 9번`,
      concepts: ["C","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260310,
      examId: "2026-mock-3",
      originalNumber: 10,
      language: "Java",
      title: "Java 예상 10번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `public class Main {
    public static void main(String[] args) {
        try {
            System.out.print("A");
            int x = 10 / 0;
            System.out.print("B");
        } catch (ArithmeticException e) {
            System.out.print("C");
        } finally {
            System.out.print("D");
        }
    }
}`,
      answer: "ACD",
      explanation: `\`B\`는 예외 발생으로 실행되지 않는다.  
\`catch\` 후 \`finally\`가 실행된다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제3회 10번`,
      concepts: ["Java","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260311,
      examId: "2026-mock-3",
      originalNumber: 11,
      language: "SQL",
      title: "SQL 예상 11번 - 다음 SQL의 결과 행 수를 쓰시오",
      question: `다음 SQL의 결과 행 수를 쓰시오.

EMP 테이블:

| dept | salary |
|---|---:|
| A | 3000 |
| A | 5000 |
| A | 7000 |
| B | 4000 |
| B | 6000 |
| C | 8000 |`,
      code: `SELECT dept
FROM EMP
GROUP BY dept
HAVING AVG(salary) > (
    SELECT AVG(salary)
    FROM EMP
);`,
      answer: "1행",
      explanation: `전체 평균은 5500이다.

- A 평균: 5000
- B 평균: 5000
- C 평균: 8000

C만 조건을 만족한다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제3회 11번`,
      concepts: ["SQL","결과 추적"],
      difficulty: "상",
    },
    {
      id: 260312,
      examId: "2026-mock-3",
      originalNumber: 12,
      language: "이론",
      title: "테스트 예상 12번 - 각 조건식의 참과 거짓을 한 번 이상 수행하도록 하는 테스트 커버리지",
      question: "각 조건식의 참과 거짓을 한 번 이상 수행하도록 하는 테스트 커버리지는 무엇인가?",
      answer: "조건 커버리지",
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제3회 12번`,
      concepts: ["테스트","이론"],
      difficulty: "중",
    },
    {
      id: 260313,
      examId: "2026-mock-3",
      originalNumber: 13,
      language: "Python",
      title: "Python 예상 13번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `nums = [1, 2, 3, 4]
g = (x * x for x in nums if x % 2 == 0)
print(sum(g))`,
      answer: "20",
      explanation: `짝수 2, 4의 제곱 합은 4 + 16 = 20이다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제3회 13번`,
      concepts: ["Python","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260314,
      examId: "2026-mock-3",
      originalNumber: 14,
      language: "이론",
      title: "운영체제 예상 14번 - 다음 페이지 참조 문자열을 FIFO 방식, 프레임 3개로 처리할 때 ",
      question: `다음 페이지 참조 문자열을 FIFO 방식, 프레임 3개로 처리할 때 페이지 부재 횟수를 구하시오.

\`\`\`text
1, 2, 3, 1, 4, 2, 5
\`\`\``,
      answer: "5회",
      explanation: `추적:

- 1 부재
- 2 부재
- 3 부재
- 1 적중
- 4 부재, 가장 먼저 들어온 1 제거
- 2 적중
- 5 부재, 가장 먼저 들어온 2 제거

따라서 총 페이지 부재 횟수는 5회다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제3회 14번`,
      concepts: ["운영체제","이론"],
      difficulty: "중",
    },
    {
      id: 260315,
      examId: "2026-mock-3",
      originalNumber: 15,
      language: "이론",
      title: "디자인 패턴 예상 15번 - 객체의 상태가 변경되면 의존 객체들에게 자동으로 알림을 보내는 패턴은",
      question: "객체의 상태가 변경되면 의존 객체들에게 자동으로 알림을 보내는 패턴은 무엇인가?",
      answer: "Observer 패턴",
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제3회 15번`,
      concepts: ["디자인 패턴","이론"],
      difficulty: "중",
    },
    {
      id: 260316,
      examId: "2026-mock-3",
      originalNumber: 16,
      language: "C",
      title: "C 예상 16번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>

int f(int n) {
    if (n <= 1) return 1;
    return n * f(n - 1);
}

int main() {
    printf("%d", f(4));
    return 0;
}`,
      answer: "24",
      explanation: `\`4 × 3 × 2 × 1 = 24\`.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제3회 16번`,
      concepts: ["C","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260317,
      examId: "2026-mock-3",
      originalNumber: 17,
      language: "SQL",
      title: "SQL 예상 17번 - 외래키 제약조건을 선언할 때 사용하는 두 키워드를 쓰시오",
      question: "외래키 제약조건을 선언할 때 사용하는 두 키워드를 쓰시오.",
      answer: "FOREIGN KEY, REFERENCES",
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제3회 17번`,
      concepts: ["SQL","결과 추적"],
      difficulty: "하",
    },
    {
      id: 260318,
      examId: "2026-mock-3",
      originalNumber: 18,
      language: "이론",
      title: "UML 예상 18번 - 시스템의 물리적 배치 환경과 노드 간 연결을 표현하는 다이어그램은 무",
      question: "시스템의 물리적 배치 환경과 노드 간 연결을 표현하는 다이어그램은 무엇인가?",
      answer: "배치 다이어그램",
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제3회 18번`,
      concepts: ["UML","이론"],
      difficulty: "중",
    },
    {
      id: 260319,
      examId: "2026-mock-3",
      originalNumber: 19,
      language: "Python",
      title: "Python 예상 19번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `x = 0 or 5
y = 3 and 7
print(x + y)`,
      answer: "12",
      explanation: `\`0 or 5\`는 5, \`3 and 7\`은 7이다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제3회 19번`,
      concepts: ["Python","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260320,
      examId: "2026-mock-3",
      originalNumber: 20,
      language: "이론",
      title: "네트워크 예상 20번 - RIP, OSPF, BGP를 각각 다음 기준으로 분류하시오",
      question: `RIP, OSPF, BGP를 각각 다음 기준으로 분류하시오.

- 거리 벡터
- 링크 상태
- AS 간 라우팅`,
      answer: `RIP: 거리 벡터
OSPF: 링크 상태
BGP: AS 간 라우팅`,
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제3회 20번`,
      concepts: ["네트워크","이론"],
      difficulty: "중",
    },
  ],
};

export default mockExam2026_3;
