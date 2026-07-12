import { ExamData } from "./types";

const mockExam2026_1: ExamData = {
  id: "2026-mock-1",
  title: "2026년 정보처리기사 실기 예상 모의고사 1회",
  questions: [
    {
      id: 260101,
      examId: "2026-mock-1",
      originalNumber: 1,
      language: "Python",
      title: "Python 예상 1번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `a = [1, 2, 3, 4, 5, 6]
print(sum(a[::2]) - sum(a[1::2]))`,
      answer: "-3",
      explanation: `\`a[::2] = [1, 3, 5]\`, 합은 9다.  
\`a[1::2] = [2, 4, 6]\`, 합은 12다.  
따라서 \`9 - 12 = -3\`.

**낚시:** 슬라이싱의 시작 인덱스와 step 구분.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제1회 1번`,
      concepts: ["Python","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260102,
      examId: "2026-mock-1",
      originalNumber: 2,
      language: "C",
      title: "C 예상 2번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    int a[] = {10, 20, 30, 40};
    int *p = a + 1;
    printf("%d", *(p + 2));
    return 0;
}`,
      answer: "40",
      explanation: `\`p = a + 1\`이므로 \`p\`는 \`a[1]\`을 가리킨다.  
\`p + 2\`는 \`a[3]\`을 가리키므로 값은 40이다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제1회 2번`,
      concepts: ["C","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260103,
      examId: "2026-mock-1",
      originalNumber: 3,
      language: "SQL",
      title: "SQL 예상 3번 - 다음 테이블에서 SQL 실행 결과의 행 수를 쓰시오",
      question: `다음 테이블에서 SQL 실행 결과의 행 수를 쓰시오.

| a | b |
|---|---|
| 1 | A |
| 1 | A |
| 1 | B |
| 2 | A |
| 2 | A |`,
      code: `SELECT DISTINCT a, b
FROM T;`,
      answer: "3행",
      explanation: `남는 조합은 \`(1,A)\`, \`(1,B)\`, \`(2,A)\`이다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제1회 3번`,
      concepts: ["SQL","결과 추적"],
      difficulty: "중",
    },
    {
      id: 260104,
      examId: "2026-mock-1",
      originalNumber: 4,
      language: "Java",
      title: "Java 예상 4번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `class A {
    String f(Object x) {
        return "A";
    }
}

class B extends A {
    @Override
    String f(Object x) {
        return "B";
    }

    String f(String x) {
        return "C";
    }
}

public class Main {
    public static void main(String[] args) {
        A a = new B();
        System.out.print(a.f("hello"));
    }
}`,
      answer: "B",
      explanation: `컴파일 시점에 \`A\`에서 보이는 후보는 \`f(Object)\`다.  
실제 객체는 \`B\`이므로 오버라이딩된 \`B.f(Object)\`가 실행된다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제1회 4번`,
      concepts: ["Java","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260105,
      examId: "2026-mock-1",
      originalNumber: 5,
      language: "이론",
      title: "DB 예상 5번 - 릴레이션에서 튜플을 유일하게 식별할 수 있는 최소 속성 집합을 무엇이",
      question: "릴레이션에서 튜플을 유일하게 식별할 수 있는 최소 속성 집합을 무엇이라 하는가?",
      answer: "후보키",
      explanation: `유일성과 최소성을 만족하는 속성 집합이다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제1회 5번`,
      concepts: ["데이터베이스","이론"],
      difficulty: "하",
    },
    {
      id: 260106,
      examId: "2026-mock-1",
      originalNumber: 6,
      language: "Python",
      title: "Python 예상 6번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `a = [[1], [2], [3]]
b = a[:]

b[1].append(9)
b[2] += b[0]

print(a)`,
      answer: "[[1], [2, 9], [3, 1]]",
      explanation: `\`b = a[:]\`는 얕은 복사다.  
내부 리스트는 공유된다.  
\`b[1].append(9)\`로 \`a[1]\`도 변경된다.  
\`b[2] += b[0]\` 역시 공유된 내부 리스트를 확장한다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제1회 6번`,
      concepts: ["Python","코드 추적"],
      difficulty: "상",
    },
    {
      id: 260107,
      examId: "2026-mock-1",
      originalNumber: 7,
      language: "이론",
      title: "네트워크 예상 7번 - IP 주소가 `192.168.10.130/26`일 때 네트워크 주소를",
      question: "IP 주소가 `192.168.10.130/26`일 때 네트워크 주소를 쓰시오.",
      answer: "192.168.10.128",
      explanation: `\`/26\`의 블록 크기는 64다.  
범위는 0, 64, 128, 192로 시작한다.  
130은 128~191 범위에 속한다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제1회 7번`,
      concepts: ["네트워크","이론"],
      difficulty: "중",
    },
    {
      id: 260108,
      examId: "2026-mock-1",
      originalNumber: 8,
      language: "이론",
      title: "소프트웨어 공학 예상 8번 - 하향식 통합 테스트에서 아직 구현되지 않은 하위 모듈을 대신하는 임시",
      question: "하향식 통합 테스트에서 아직 구현되지 않은 하위 모듈을 대신하는 임시 모듈을 무엇이라 하는가?",
      answer: "스텁",
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제1회 8번`,
      concepts: ["소프트웨어 공학","이론"],
      difficulty: "하",
    },
    {
      id: 260109,
      examId: "2026-mock-1",
      originalNumber: 9,
      language: "C",
      title: "C 예상 9번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    char c = 'D';
    printf("%d", c - 'A');
    return 0;
}`,
      answer: "3",
      explanation: `문자 코드 차이는 \`'D' - 'A' = 3\`이다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제1회 9번`,
      concepts: ["C","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260110,
      examId: "2026-mock-1",
      originalNumber: 10,
      language: "SQL",
      title: "SQL 예상 10번 - 다음 SQL에서 `WHERE`와 `HAVING`의 역할을 각각 한 문",
      question: "다음 SQL에서 `WHERE`와 `HAVING`의 역할을 각각 한 문장으로 설명하시오.",
      code: `SELECT dept, AVG(salary)
FROM employee
WHERE salary >= 3000
GROUP BY dept
HAVING AVG(salary) >= 5000;`,
      answer: `WHERE는 그룹화 전 개별 행을 필터링하고,
HAVING은 GROUP BY 이후 그룹 또는 집계 결과를 필터링한다.`,
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제1회 10번`,
      concepts: ["SQL","결과 추적"],
      difficulty: "중",
    },
    {
      id: 260111,
      examId: "2026-mock-1",
      originalNumber: 11,
      language: "Java",
      title: "Java 예상 11번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `class A {
    A() {
        System.out.print("A");
    }
}

class B extends A {
    B() {
        System.out.print("B");
    }
}

public class Main {
    public static void main(String[] args) {
        new B();
    }
}`,
      answer: "AB",
      explanation: `부모 생성자가 먼저 실행된 후 자식 생성자가 실행된다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제1회 11번`,
      concepts: ["Java","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260112,
      examId: "2026-mock-1",
      originalNumber: 12,
      language: "이론",
      title: "보안 예상 12번 - 사용자가 자주 방문하는 정상 웹사이트를 감염시켜 특정 사용자를 공격하",
      question: "사용자가 자주 방문하는 정상 웹사이트를 감염시켜 특정 사용자를 공격하는 기법을 무엇이라 하는가?",
      answer: "워터링 홀",
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제1회 12번`,
      concepts: ["정보보안","이론"],
      difficulty: "하",
    },
    {
      id: 260113,
      examId: "2026-mock-1",
      originalNumber: 13,
      language: "Python",
      title: "Python 예상 13번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `words = "a,b,c,d".split(",")
print("-".join(words[::-2]))`,
      answer: "d-b",
      explanation: `\`words[::-2]\`는 뒤에서부터 두 칸씩 선택하여 \`["d", "b"]\`가 된다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제1회 13번`,
      concepts: ["Python","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260114,
      examId: "2026-mock-1",
      originalNumber: 14,
      language: "이론",
      title: "운영체제 예상 14번 - 다음 프로세스가 FCFS 방식으로 실행될 때 평균 대기 시간을 구하시",
      question: `다음 프로세스가 FCFS 방식으로 실행될 때 평균 대기 시간을 구하시오.

| 프로세스 | 실행 시간 |
|---|---:|
| P1 | 4 |
| P2 | 3 |
| P3 | 2 |

모든 프로세스는 동시에 도착한다.`,
      answer: "평균 대기 시간 = 11/3 ≈ 3.67",
      explanation: `대기 시간:

- P1: 0
- P2: 4
- P3: 7

합은 11이다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제1회 14번`,
      concepts: ["운영체제","이론"],
      difficulty: "중",
    },
    {
      id: 260115,
      examId: "2026-mock-1",
      originalNumber: 15,
      language: "이론",
      title: "디자인 패턴 예상 15번 - 알고리즘을 객체로 캡슐화하여 실행 중에 교체할 수 있도록 하는 디자인",
      question: "알고리즘을 객체로 캡슐화하여 실행 중에 교체할 수 있도록 하는 디자인 패턴은 무엇인가?",
      answer: "Strategy 패턴",
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제1회 15번`,
      concepts: ["디자인 패턴","이론"],
      difficulty: "하",
    },
    {
      id: 260116,
      examId: "2026-mock-1",
      originalNumber: 16,
      language: "C",
      title: "C 예상 16번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>

struct Data {
    int value;
};

int main() {
    struct Data d = {7};
    struct Data *p = &d;
    p->value += 3;
    printf("%d", (*p).value);
    return 0;
}`,
      answer: "10",
      explanation: `\`p->value\`와 \`(*p).value\`는 같은 멤버를 의미한다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제1회 16번`,
      concepts: ["C","코드 추적"],
      difficulty: "상",
    },
    {
      id: 260117,
      examId: "2026-mock-1",
      originalNumber: 17,
      language: "SQL",
      title: "SQL 예상 17번 - `COUNT(*)`, `COUNT(score)`, `COUNT(DIS",
      question: "`COUNT(*)`, `COUNT(score)`, `COUNT(DISTINCT score)`의 차이를 설명하시오.",
      answer: `COUNT(*)는 전체 행 수,
COUNT(score)는 score가 NULL이 아닌 행 수,
COUNT(DISTINCT score)는 NULL을 제외하고 중복을 제거한 score 개수이다.`,
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제1회 17번`,
      concepts: ["SQL","결과 추적"],
      difficulty: "중",
    },
    {
      id: 260118,
      examId: "2026-mock-1",
      originalNumber: 18,
      language: "이론",
      title: "UML 예상 18번 - 시간의 흐름에 따라 객체 간 메시지 전달 순서를 표현하는 UML 다이",
      question: "시간의 흐름에 따라 객체 간 메시지 전달 순서를 표현하는 UML 다이어그램은 무엇인가?",
      answer: "시퀀스 다이어그램",
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제1회 18번`,
      concepts: ["UML","이론"],
      difficulty: "하",
    },
    {
      id: 260119,
      examId: "2026-mock-1",
      originalNumber: 19,
      language: "Python",
      title: "Python 예상 19번 - 다음 코드의 출력 결과를 쓰시오",
      question: "다음 코드의 출력 결과를 쓰시오.",
      code: `d = {}
for x in [1, 2, 1, 3, 2, 1]:
    d[x] = d.get(x, 0) + 1

print(d[1] + d[2])`,
      answer: "5",
      explanation: `\`d[1] = 3\`, \`d[2] = 2\`이므로 결과는 5다.

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제1회 19번`,
      concepts: ["Python","코드 추적"],
      difficulty: "중",
    },
    {
      id: 260120,
      examId: "2026-mock-1",
      originalNumber: 20,
      language: "이론",
      title: "네트워크 예상 20번 - ARP의 역할을 쓰시오",
      question: "ARP의 역할을 쓰시오.",
      answer: "IP 주소를 MAC 주소로 변환한다.",
      explanation: `

[출처] exam/2026_information_processing_engineer_mock_exam_3sets.md 제1회 20번`,
      concepts: ["네트워크","이론"],
      difficulty: "하",
    },
  ],
};

export default mockExam2026_1;
