import { ExamData } from "./types";

const mockExam2026_2: ExamData = {
  id: "2026-mock-2",
  title: "2026년 정보처리기사 실기 예상 모의고사 2회",
  questions: [
    {
      id: 260201,
      examId: "2026-mock-2",
      originalNumber: 1,
      language: "Python",
      title: "Python 예상 1번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `a = [1, 2, 3]
b = a
b += [4]
print(a)`,
      answer: "[1, 2, 3, 4]",
      explanation: `\`b = a\`는 같은 리스트를 가리킨다.  
리스트 \`+=\`는 기존 리스트를 변경하므로 \`a\`도 변한다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제2회 1번`,
      concepts: ["Python","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260202,
      examId: "2026-mock-2",
      originalNumber: 2,
      language: "SQL",
      title: "SQL 예상 2번 - 다음 SQL의 실행 결과 행 수를 쓰시오",
      question: `다음 SQL의 실행 결과 행 수를 쓰시오.

| dept | salary |
|---|---:|
| A | 3000 |
| A | 5000 |
| B | 6000 |
| B | 2000 |
| C | 7000 |`,
      code: `SELECT dept, AVG(salary)
FROM employee
WHERE salary >= 3000
GROUP BY dept
HAVING AVG(salary) >= 5000;`,
      answer: "2행",
      explanation: `\`WHERE salary >= 3000\` 적용 후:

- A: 3000, 5000 → 평균 4000
- B: 6000 → 평균 6000
- C: 7000 → 평균 7000

\`HAVING AVG >= 5000\`을 만족하는 B, C만 남는다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제2회 2번`,
      concepts: ["SQL","결과 추적"],
      difficulty: "중",
    },
    {
      id: 260203,
      examId: "2026-mock-2",
      originalNumber: 3,
      language: "C",
      title: "C 예상 3번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>

int sum(int *p, int n) {
    if (n == 0) return 0;
    return *p + sum(p + 1, n - 1);
}

int main() {
    int a[] = {1, 2, 3, 4};
    printf("%d", sum(a, 4));
    return 0;
}`,
      answer: "10",
      explanation: `포인터를 한 칸씩 이동하며 모든 요소를 재귀적으로 더한다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제2회 3번`,
      concepts: ["C","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260204,
      examId: "2026-mock-2",
      originalNumber: 4,
      language: "Java",
      title: "Java 예상 4번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `class A {
    A() {
        print();
    }

    void print() {
        System.out.print("A");
    }
}

class B extends A {
    int value = 10;

    @Override
    void print() {
        System.out.print(value);
    }
}

public class Main {
    public static void main(String[] args) {
        new B();
    }
}`,
      answer: "0",
      explanation: `부모 생성자에서 오버라이딩된 \`B.print()\`가 호출된다.  
그러나 자식 필드 \`value = 10\`의 초기화 전이므로 기본값 0이 출력된다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제2회 4번`,
      concepts: ["Java","코드 추적"],
      difficulty: "상",
    },
    {
      id: 260205,
      examId: "2026-mock-2",
      originalNumber: 5,
      language: "이론",
      title: "DB 예상 5번 - 제2정규형에서 제거해야 하는 함수 종속은 무엇인가?",
      question: "제2정규형에서 제거해야 하는 함수 종속은 무엇인가?",
      answer: "부분 함수 종속",
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제2회 5번`,
      concepts: ["데이터베이스","이론"],
      difficulty: "중",
    },
    {
      id: 260206,
      examId: "2026-mock-2",
      originalNumber: 6,
      language: "Python",
      title: "Python 예상 6번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `nums = [1, 2, 3, 4, 5]
result = [x * 2 for x in nums if x % 2 == 1]
print(result)`,
      answer: "[2, 6, 10]",
      explanation: `홀수만 선택해 2배한다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제2회 6번`,
      concepts: ["Python","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260207,
      examId: "2026-mock-2",
      originalNumber: 7,
      language: "이론",
      title: "네트워크 예상 7번 - `10.0.0.70/27`의 브로드캐스트 주소를 쓰시오",
      question: "`10.0.0.70/27`의 브로드캐스트 주소를 쓰시오.",
      answer: "10.0.0.95",
      explanation: `\`/27\`의 블록 크기는 32다.  
70은 64~95 범위에 속한다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제2회 7번`,
      concepts: ["네트워크","이론"],
      difficulty: "중",
    },
    {
      id: 260208,
      examId: "2026-mock-2",
      originalNumber: 8,
      language: "이론",
      title: "보안 예상 8번 - 공격자가 입력값에 악의적인 SQL 구문을 삽입하여 데이터베이스를 조작",
      question: "공격자가 입력값에 악의적인 SQL 구문을 삽입하여 데이터베이스를 조작하는 공격은 무엇인가?",
      answer: "SQL Injection",
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제2회 8번`,
      concepts: ["정보보안","이론"],
      difficulty: "하",
    },
    {
      id: 260209,
      examId: "2026-mock-2",
      originalNumber: 9,
      language: "C",
      title: "C 예상 9번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    int x = 5;
    printf("%d", x << 1);
    return 0;
}`,
      answer: "10",
      explanation: `\`5 << 1\`은 5를 왼쪽으로 한 비트 이동하므로 10이다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제2회 9번`,
      concepts: ["C","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260210,
      examId: "2026-mock-2",
      originalNumber: 10,
      language: "Java",
      title: "Java 예상 10번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `class Counter {
    static int count = 0;

    Counter() {
        count++;
    }
}

public class Main {
    public static void main(String[] args) {
        new Counter();
        new Counter();
        new Counter();
        System.out.print(Counter.count);
    }
}`,
      answer: "3",
      explanation: `\`static\` 변수는 모든 객체가 공유한다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제2회 10번`,
      concepts: ["Java","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260211,
      examId: "2026-mock-2",
      originalNumber: 11,
      language: "SQL",
      title: "SQL 예상 11번 - 다음 조건에서 `LEFT JOIN` 결과 행 수를 쓰시오",
      question: `다음 조건에서 \`LEFT JOIN\` 결과 행 수를 쓰시오.

A 테이블:

| id |
|---:|
| 1 |
| 2 |
| 3 |

B 테이블:

| id |
|---:|
| 1 |
| 1 |
| 3 |`,
      code: `SELECT *
FROM A
LEFT JOIN B ON A.id = B.id;`,
      answer: "4행",
      explanation: `A의 id 1은 B의 두 행과 매칭되어 2행, id 2는 매칭 없음으로 1행, id 3은 1행이다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제2회 11번`,
      concepts: ["SQL","결과 추적"],
      difficulty: "중",
    },
    {
      id: 260212,
      examId: "2026-mock-2",
      originalNumber: 12,
      language: "이론",
      title: "소프트웨어 공학 예상 12번 - 상향식 통합 테스트에서 아직 구현되지 않은 상위 모듈을 대신하는 임시",
      question: "상향식 통합 테스트에서 아직 구현되지 않은 상위 모듈을 대신하는 임시 모듈은 무엇인가?",
      answer: "드라이버",
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제2회 12번`,
      concepts: ["소프트웨어 공학","이론"],
      difficulty: "하",
    },
    {
      id: 260213,
      examId: "2026-mock-2",
      originalNumber: 13,
      language: "Python",
      title: "Python 예상 13번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `def f(a=[]):
    a.append(len(a))
    return a

print(f())
print(f())`,
      answer: `[0]
[0, 1]`,
      explanation: `기본 매개변수 리스트가 호출 간 재사용된다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제2회 13번`,
      concepts: ["Python","코드 추적"],
      difficulty: "상",
    },
    {
      id: 260214,
      examId: "2026-mock-2",
      originalNumber: 14,
      language: "이론",
      title: "운영체제 예상 14번 - SJF 스케줄링에서 실행 시간이 짧은 프로세스를 우선 실행하는 이유를",
      question: "SJF 스케줄링에서 실행 시간이 짧은 프로세스를 우선 실행하는 이유를 한 문장으로 설명하시오.",
      answer: "평균 대기 시간을 줄이기 위해 실행 시간이 짧은 프로세스를 우선한다.",
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제2회 14번`,
      concepts: ["운영체제","이론"],
      difficulty: "중",
    },
    {
      id: 260215,
      examId: "2026-mock-2",
      originalNumber: 15,
      language: "이론",
      title: "디자인 패턴 예상 15번 - 객체에 접근하기 위한 대리 객체를 두어 접근 제어, 지연 로딩 등을 ",
      question: "객체에 접근하기 위한 대리 객체를 두어 접근 제어, 지연 로딩 등을 수행하는 패턴은 무엇인가?",
      answer: "Proxy 패턴",
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제2회 15번`,
      concepts: ["디자인 패턴","이론"],
      difficulty: "중",
    },
    {
      id: 260216,
      examId: "2026-mock-2",
      originalNumber: 16,
      language: "C",
      title: "C 예상 16번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    int a[2][2] = {{1, 2}, {3, 4}};
    printf("%d", *(*(a + 1) + 0));
    return 0;
}`,
      answer: "3",
      explanation: `\`a + 1\`은 두 번째 행, \`+ 0\`은 첫 번째 열을 가리킨다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제2회 16번`,
      concepts: ["C","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260217,
      examId: "2026-mock-2",
      originalNumber: 17,
      language: "SQL",
      title: "SQL 예상 17번 - 다음 SQL의 의미를 설명하시오",
      question: "다음 SQL의 의미를 설명하시오.",
      code: `SELECT name
FROM student
WHERE score >= (
    SELECT AVG(score)
    FROM student
);`,
      answer: "전체 학생 평균 점수 이상인 학생의 이름을 조회한다.",
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제2회 17번`,
      concepts: ["SQL","결과 추적"],
      difficulty: "중",
    },
    {
      id: 260218,
      examId: "2026-mock-2",
      originalNumber: 18,
      language: "이론",
      title: "UML 예상 18번 - 시스템의 기능과 외부 액터 간 상호작용을 표현하는 UML 다이어그램은",
      question: "시스템의 기능과 외부 액터 간 상호작용을 표현하는 UML 다이어그램은 무엇인가?",
      answer: "유스케이스 다이어그램",
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제2회 18번`,
      concepts: ["UML","이론"],
      difficulty: "하",
    },
    {
      id: 260219,
      examId: "2026-mock-2",
      originalNumber: 19,
      language: "Python",
      title: "Python 예상 19번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `s = set([1, 1, 2, 3, 3])
print(len(s))`,
      answer: "3",
      explanation: `집합은 중복을 제거한다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제2회 19번`,
      concepts: ["Python","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260220,
      examId: "2026-mock-2",
      originalNumber: 20,
      language: "이론",
      title: "네트워크 예상 20번 - TCP와 UDP의 가장 큰 차이를 한 문장으로 설명하시오",
      question: "TCP와 UDP의 가장 큰 차이를 한 문장으로 설명하시오.",
      answer: "TCP는 연결형·신뢰성 중심이고, UDP는 비연결형·낮은 오버헤드 중심이다.",
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제2회 20번`,
      concepts: ["네트워크","이론"],
      difficulty: "하",
    },
  ],
};

export default mockExam2026_2;
