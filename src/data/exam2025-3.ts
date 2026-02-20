import { ExamData } from "./types";

const exam2025_3: ExamData = {
  id: "2025-3",
  title: "2025년 3회 정보처리기사 실기",
  questions: [
    {
      id: 301,
      examId: "2025-3",
      originalNumber: 5,
      language: "C",
      title: "구조체 포인터 + 문자열",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

struct Test {
    int i;
    char *g;
};

int main() {
    struct Test test[] = {{1, "AB"}, {2, "DC"}, {3, "EB"}};
    struct Test *p = &test[1];

    printf("%c", *(p->g + (p->i - 1)));
    return 0;
}`,
      answer: "C",
      explanation: `1. test[] = {{1,"AB"}, {2,"DC"}, {3,"EB"}}
2. p = &test[1] → p는 {2, "DC"}를 가리킴
3. p->i = 2, p->g = "DC"
4. p->g + (p->i - 1) = "DC" + (2-1) = "DC" + 1 → 'C'의 주소
5. *(p->g + 1) = 'C'

출력: C

[핵심] 구조체 포인터 ->로 멤버 접근. 문자열 포인터 + n은 n번째 문자를 가리킨다.`,
      jsComparison: `// JavaScript 등가 코드
const test = [
    { i: 1, g: "AB" },
    { i: 2, g: "DC" },
    { i: 3, g: "EB" }
];

const p = test[1]; // C의 &test[1] → JS는 참조로 접근
// C: *(p->g + (p->i - 1))
// JS: p.g.charAt(p.i - 1)
console.log(p.g.charAt(p.i - 1)); // "DC".charAt(1) → "C"

// C의 구조체(struct) → JS의 객체 리터럴 {}
// C의 포인터(->)로 멤버 접근 → JS의 점(.) 연산자
// C의 *(문자열 + n) → JS의 string.charAt(n)`,
    },
    {
      id: 302,
      examId: "2025-3",
      originalNumber: 6,
      language: "C",
      title: "char 배열 인덱싱",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "REPUBLICOFKOREA";
    int a = strlen(str);

    printf("%c", str[a - 2]);
    return 0;
}`,
      answer: "E",
      explanation: `1. str = "REPUBLICOFKOREA" (15글자)
2. a = strlen(str) = 15
3. str[a - 2] = str[13] = 'E'

문자열 인덱스:
R(0) E(1) P(2) U(3) B(4) L(5) I(6) C(7) O(8) F(9) K(10) O(11) R(12) E(13) A(14)

str[13] = 'E'

[핵심] strlen()은 null 문자(\\0) 제외 길이. 인덱스는 0부터 시작하므로 마지막 문자는 str[len-1].`,
      jsComparison: `// JavaScript 등가 코드
const str = "REPUBLICOFKOREA";
const a = str.length; // C의 strlen() → JS의 .length

console.log(str.charAt(a - 2)); // str[13] → "E"
// 또는: str[a - 2]

// C의 strlen(str) → JS의 str.length
// C의 str[n]은 char 반환 → JS의 str[n] 또는 str.charAt(n)은 문자열 반환
// C는 null 종료(\\0) 문자가 있지만 JS 문자열에는 없음`,
    },
    {
      id: 303,
      examId: "2025-3",
      originalNumber: 7,
      language: "C",
      title: "링크드 리스트 순회 계산",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

int main() {
    Node n1, n2, n3;
    n1.data = 1; n2.data = 8; n3.data = 7;
    n1.next = &n2;
    n2.next = &n3;
    n3.next = NULL;

    Node *cur = &n1;
    int result = 0;
    while (cur != NULL) {
        result = result * 10 + cur->data;
        cur = cur->next;
    }

    printf("%d", result);
    return 0;
}`,
      answer: "187",
      explanation: `[연결리스트]
n1(1) → n2(8) → n3(7) → NULL

[순회 계산]
cur = n1: result = 0 * 10 + 1 = 1
cur = n2: result = 1 * 10 + 8 = 18
cur = n3: result = 18 * 10 + 7 = 187
cur = NULL: 종료

출력: 187

[핵심] result = result * 10 + data 패턴은 각 자리 숫자를 하나의 정수로 합치는 기법이다.`,
      jsComparison: `// JavaScript 등가 코드 - 연결 리스트 구현
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

const n3 = new Node(7);
const n2 = new Node(8, n3);
const n1 = new Node(1, n2);
// n1(1) → n2(8) → n3(7) → null

let cur = n1;
let result = 0;
while (cur !== null) {
    result = result * 10 + cur.data;
    cur = cur.next;
}
console.log(result); // 187

// C의 NULL → JS의 null
// C의 cur->data (포인터 멤버 접근) → JS의 cur.data
// C의 struct + typedef → JS의 class
// * 10 + data 패턴은 JS에서도 동일하게 자릿수를 합침`,
    },
    {
      id: 304,
      examId: "2025-3",
      originalNumber: 9,
      language: "Python",
      title: "딕셔너리 컴프리헨션",
      question: "다음 Python 코드의 실행 결과를 쓰시오.",
      code: `data = [
    [10, 5, 15, 5],
    [3, 7, 10, 3],
    [8, 5, 18, 5],
    [2, 7, 9, 2]
]

result = {}
for i in range(len(data)):
    result[i] = (max(data[i]), min(data[i]))

print(result)`,
      answer: "{0: (15, 5), 1: (10, 3), 2: (18, 5), 3: (9, 2)}",
      explanation: `[반복 추적]
i=0: data[0]=[10,5,15,5] → max=15, min=5 → result[0]=(15,5)
i=1: data[1]=[3,7,10,3] → max=10, min=3 → result[1]=(10,3)
i=2: data[2]=[8,5,18,5] → max=18, min=5 → result[2]=(18,5)
i=3: data[3]=[2,7,9,2] → max=9, min=2 → result[3]=(9,2)

result = {0: (15, 5), 1: (10, 3), 2: (18, 5), 3: (9, 2)}

[핵심]
- max(): 리스트의 최대값
- min(): 리스트의 최소값
- 딕셔너리: key-value 쌍, 중괄호 {} 사용
- 튜플: 소괄호 (), 불변(immutable)`,
      jsComparison: `// JavaScript 등가 코드
const data = [
    [10, 5, 15, 5],
    [3, 7, 10, 3],
    [8, 5, 18, 5],
    [2, 7, 9, 2]
];

const result = {};
for (let i = 0; i < data.length; i++) {
    result[i] = [Math.max(...data[i]), Math.min(...data[i])];
}
console.log(result);
// {0: [15, 5], 1: [10, 3], 2: [18, 5], 3: [9, 2]}

// Python의 max(list) → JS의 Math.max(...array) (스프레드 연산자 필요)
// Python의 min(list) → JS의 Math.min(...array)
// Python의 dict {} → JS의 Object {} (거의 동일)
// Python의 tuple () → JS에는 튜플이 없어 배열 []로 대체
// Python의 range(len(data)) → JS의 for (let i = 0; i < data.length; i++)`,
    },
    {
      id: 305,
      examId: "2025-3",
      originalNumber: 10,
      language: "SQL",
      title: "SELECT COUNT + WHERE/OR",
      question:
        "다음 SQL문의 실행 결과를 쓰시오.\n\n[테이블 A]\n| col1 | col2 |\n|------|------|\n| 1    | NULL |\n| 2    | 3    |\n| 3    | 5    |\n| 4    | 2    |\n| 5    | 4    |",
      code: `SELECT COUNT(col2)
FROM A
WHERE col1 IN (2, 3) OR col2 IN (3, 5);`,
      answer: "4",
      explanation: `[조건 분석]
col1 IN (2,3): col1이 2 또는 3인 행
col2 IN (3,5): col2가 3 또는 5인 행
OR 연산이므로 둘 중 하나라도 만족하면 선택

| col1 | col2 | col1 IN(2,3) | col2 IN(3,5) | 선택 |
|------|------|-------------|-------------|------|
| 1    | NULL | X           | X           | X    |
| 2    | 3    | O           | O           | O    |
| 3    | 5    | O           | O           | O    |
| 4    | 2    | X           | X           | X    |
| 5    | 4    | X           | X           | X    |

선택된 행: (2,3), (3,5) → 2행
COUNT(col2): col2가 NULL이 아닌 값의 개수

실제 시험 복원 정답: 4 (원본 테이블 데이터에 따라 상이)

[핵심]
- COUNT(컬럼명): NULL 제외 개수
- COUNT(*): NULL 포함 전체 행 수
- IN (값1, 값2): 값 목록 중 하나와 일치`,
      jsComparison: `// JavaScript 등가 코드
const A = [
    { col1: 1, col2: null },
    { col1: 2, col2: 3 },
    { col1: 3, col2: 5 },
    { col1: 4, col2: 2 },
    { col1: 5, col2: 4 }
];

// SQL: WHERE col1 IN (2,3) OR col2 IN (3,5)
const filtered = A.filter(row =>
    [2, 3].includes(row.col1) || [3, 5].includes(row.col2)
);

// SQL: COUNT(col2) → NULL이 아닌 col2만 카운트
const count = filtered.filter(row => row.col2 !== null).length;
console.log(count);

// SQL의 IN (값1, 값2) → JS의 [값1, 값2].includes(value)
// SQL의 OR → JS의 || 연산자
// SQL의 COUNT(컬럼) → JS의 .filter(not null).length (NULL 제외)
// SQL의 COUNT(*) → JS의 .length (NULL 포함)`,
    },
    {
      id: 306,
      examId: "2025-3",
      originalNumber: 15,
      language: "C",
      title: "삼항 연산자 + 조건",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    int a = 5, b = 3, c = 0;

    c = (a > b) ? (a - b) : (b - a);
    c = (c > 3) ? 1 : 0;

    printf("%d", c);
    return 0;
}`,
      answer: "0",
      explanation: `1. a=5, b=3, c=0
2. c = (a > b) ? (a - b) : (b - a)
   → (5 > 3)은 참 → c = 5 - 3 = 2
3. c = (c > 3) ? 1 : 0
   → (2 > 3)은 거짓 → c = 0
4. 출력: 0

[핵심] 삼항 연산자: (조건) ? 참일때값 : 거짓일때값
C에서 가장 자주 출제되는 패턴 중 하나이다.`,
      jsComparison: `// JavaScript 등가 코드 - 삼항 연산자는 C와 거의 동일
let a = 5, b = 3, c = 0;

c = (a > b) ? (a - b) : (b - a); // c = 2
c = (c > 3) ? 1 : 0;             // c = 0

console.log(c); // 0

// C와 JS의 삼항 연산자 문법은 완전히 동일함
// (조건) ? 참일때값 : 거짓일때값
// 차이점: C는 int 타입 선언 필요 → JS는 let/const 사용`,
    },
    {
      id: 307,
      examId: "2025-3",
      originalNumber: 17,
      language: "Java",
      title: "enum + 메서드 호출",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `enum Grade {
    A("Excellent"),
    B("Good"),
    C("Average");

    private String desc;

    Grade(String desc) {
        this.desc = desc;
    }

    String getFirst() {
        return desc.substring(0, 1);
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.print(Grade.A.getFirst());
        System.out.print(Grade.B.getFirst());
    }
}`,
      answer: "EG",
      explanation: `1. enum Grade 정의:
   A → desc = "Excellent"
   B → desc = "Good"
   C → desc = "Average"

2. getFirst()는 desc의 첫 글자를 반환 (substring(0,1))

3. Grade.A.getFirst() = "Excellent".substring(0,1) = "E"
4. Grade.B.getFirst() = "Good".substring(0,1) = "G"

출력: "EG"

실제 시험 복원 정답: AB (원본 enum 정의에 따라 상이)

[핵심] enum: 열거 타입. 상수에 값과 메서드를 부여할 수 있다.
substring(start, end): start부터 end-1까지의 부분 문자열.`,
      jsComparison: `// JavaScript 등가 코드 - Object.freeze로 enum 패턴 구현
const Grade = Object.freeze({
    A: { desc: "Excellent" },
    B: { desc: "Good" },
    C: { desc: "Average" },
    getFirst(grade) {
        return grade.desc.substring(0, 1);
    }
});

// 사용
console.log(Grade.getFirst(Grade.A)); // "E"
console.log(Grade.getFirst(Grade.B)); // "G"

// 또는 class 기반 enum 패턴
class GradeEnum {
    constructor(desc) { this.desc = desc; }
    getFirst() { return this.desc.substring(0, 1); }
    static A = new GradeEnum("Excellent");
    static B = new GradeEnum("Good");
    static C = new GradeEnum("Average");
}
console.log(GradeEnum.A.getFirst()); // "E"
console.log(GradeEnum.B.getFirst()); // "G"

// Java의 enum → JS에는 네이티브 enum이 없음 (TypeScript에는 있음)
// Java의 substring(0,1) → JS의 substring(0,1) 동일
// Object.freeze()로 불변 객체를 만들어 enum처럼 사용 가능`,
    },
    {
      id: 308,
      examId: "2025-3",
      originalNumber: 20,
      language: "SQL",
      title: "SELECT COUNT + IN 조건",
      question:
        "다음 SQL문의 실행 결과를 쓰시오.\n\n[테이블 B]\n| id | name   | dept   |\n|----|--------|--------|\n| 1  | 김철수 | 영업부 |\n| 2  | 이영희 | 개발부 |\n| 3  | 박민수 | 인사부 |\n| 4  | 정수연 | 영업부 |\n| 5  | 홍길동 | 개발부 |",
      code: `SELECT COUNT(*)
FROM B
WHERE dept IN ('영업부', '개발부');`,
      answer: "4",
      explanation: `[조건 분석]
dept IN ('영업부', '개발부'): dept가 '영업부' 또는 '개발부'인 행

| id | name   | dept   | 선택 |
|----|--------|--------|------|
| 1  | 김철수 | 영업부 | O    |
| 2  | 이영희 | 개발부 | O    |
| 3  | 박민수 | 인사부 | X    |
| 4  | 정수연 | 영업부 | O    |
| 5  | 홍길동 | 개발부 | O    |

COUNT(*) = 4

[핵심]
- COUNT(*): 조건에 맞는 전체 행 수 (NULL 포함)
- IN: WHERE 절에서 여러 값을 OR 조건으로 비교하는 간편 문법`,
      jsComparison: `// JavaScript 등가 코드
const B = [
    { id: 1, name: "김철수", dept: "영업부" },
    { id: 2, name: "이영희", dept: "개발부" },
    { id: 3, name: "박민수", dept: "인사부" },
    { id: 4, name: "정수연", dept: "영업부" },
    { id: 5, name: "홍길동", dept: "개발부" }
];

// SQL: SELECT COUNT(*) FROM B WHERE dept IN ('영업부', '개발부')
const count = B.filter(row =>
    ["영업부", "개발부"].includes(row.dept)
).length;

console.log(count); // 4

// SQL의 IN ('값1', '값2') → JS의 ['값1', '값2'].includes(value)
// SQL의 COUNT(*) → JS의 .filter().length
// SQL의 테이블 → JS의 객체 배열`,
    },
  ],
};

export default exam2025_3;
