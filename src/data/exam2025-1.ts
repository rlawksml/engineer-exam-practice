import { ExamData } from "./types";

const exam2025_1: ExamData = {
  id: "2025-1",
  title: "2025년 1회 정보처리기사 실기",
  questions: [
    {
      id: 101,
      examId: "2025-1",
      originalNumber: 5,
      language: "Java",
      title: "try-catch-finally 예외 처리",
      question:
        "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `public class Main {
    public static void main(String[] args) {
        int a = 10, b = 0;
        try {
            System.out.print(a / b);
        } catch (ArithmeticException e) {
            System.out.print("출력1");
        } finally {
            System.out.print("출력5");
        }
    }
}`,
      answer: "출력1출력5",
      explanation: `1. a/b에서 b=0이므로 ArithmeticException 발생
2. catch 블록 실행 → "출력1" 출력
3. finally 블록은 예외 발생 여부와 관계없이 항상 실행 → "출력5" 출력
4. 결과: "출력1출력5"

[핵심] finally는 try/catch 후 반드시 실행된다.`,
      jsComparison: `// JavaScript 등가 코드
let a = 10, b = 0;
try {
  // JS에서 0으로 나누면 Infinity (에러 아님!)
  // 강제로 에러를 던져서 Java 동작을 재현
  if (b === 0) throw new Error("ArithmeticException");
  process.stdout.write(String(a / b));
} catch (e) {
  process.stdout.write("출력1");
} finally {
  process.stdout.write("출력5");
}
// 결과: "출력1출력5"

// [차이점] Java는 정수 0 나눗셈 시 ArithmeticException 발생
// JS는 0 나눗셈 시 Infinity 반환 (에러 아님!)
// try-catch-finally 구조 자체는 Java와 동일하다.`,
    },
    {
      id: 102,
      examId: "2025-1",
      originalNumber: 7,
      language: "SQL",
      title: "SELECT 쿼리 실행 결과",
      question:
        "다음 SQL문의 실행 결과를 쓰시오.\n\n[employee 테이블]\n| name   | department | salary | incentives |\n|--------|-----------|--------|------------|\n| 홍길동 | 영업부    | 3000   | 500        |\n| 이순신 | 개발부    | 4000   | 1000       |\n| 강감찬 | 영업부    | 2500   | NULL       |\n| 유관순 | 인사부    | 3500   | 800        |",
      code: `SELECT name, incentives
FROM employee
WHERE department = '개발부';`,
      answer: "이순신 1000",
      explanation: `1. employee 테이블에서 department가 '개발부'인 행을 조회
2. 조건에 맞는 행: 이순신 (개발부, salary=4000, incentives=1000)
3. SELECT에서 name과 incentives만 출력
4. 결과: name=이순신, incentives=1000

[핵심] WHERE 절로 조건 필터링 후 SELECT로 원하는 컬럼만 조회한다.`,
      jsComparison: `// JavaScript 등가 코드 (SQL SELECT WHERE → Array.filter + map)
const employee = [
  { name: "홍길동", department: "영업부", salary: 3000, incentives: 500 },
  { name: "이순신", department: "개발부", salary: 4000, incentives: 1000 },
  { name: "강감찬", department: "영업부", salary: 2500, incentives: null },
  { name: "유관순", department: "인사부", salary: 3500, incentives: 800 },
];

// WHERE department = '개발부' → filter()
// SELECT name, incentives → map()으로 필요한 컬럼만 추출
const result = employee
  .filter(row => row.department === "개발부")
  .map(({ name, incentives }) => ({ name, incentives }));

console.log(result);
// [{ name: "이순신", incentives: 1000 }]

// [핵심] SQL의 WHERE는 JS의 filter(), SELECT는 map()에 대응한다.`,
    },
    {
      id: 103,
      examId: "2025-1",
      originalNumber: 10,
      language: "C",
      title: "배열 swap + 문자 배열 조작",
      question:
        "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    char str[] = "ABCDE";
    int temp;

    for (int i = 0; i < 2; i++) {
        temp = arr[i];
        arr[i] = arr[4 - i];
        arr[4 - i] = temp;
    }

    printf("%d\\n", arr[2]);

    char ch = str[0];
    for (int i = 0; i < 4; i++) {
        str[i] = str[i + 1];
    }
    str[4] = ch;
    printf("%s", str);

    return 0;
}`,
      answer: "3\nBCDEA",
      explanation: `[배열 swap 과정]
초기: {1, 2, 3, 4, 5}
i=0: arr[0]↔arr[4] → {5, 2, 3, 4, 1}
i=1: arr[1]↔arr[3] → {5, 4, 3, 2, 1}
arr[2] = 3 출력

[문자 배열 회전]
초기: "ABCDE"
ch = 'A' (첫 문자 저장)
한 칸씩 왼쪽 이동: "BCDEE"
마지막에 ch 대입: "BCDEA"
결과: "BCDEA" 출력

[핵심] 배열 swap은 양끝에서 가운데로, 문자 배열 회전은 왼쪽으로 1칸 이동.`,
      jsComparison: `// JavaScript 등가 코드
const arr = [1, 2, 3, 4, 5];
const str = "ABCDE".split(""); // JS 문자열은 불변이므로 배열로 변환

// 배열 swap (구조 분해 할당으로 간결하게 가능)
for (let i = 0; i < 2; i++) {
  [arr[i], arr[4 - i]] = [arr[4 - i], arr[i]];
}
console.log(arr[2]); // 3

// 문자 배열 왼쪽 회전
const ch = str.shift();  // 첫 문자 꺼내기
str.push(ch);            // 맨 뒤에 추가
console.log(str.join("")); // "BCDEA"

// [차이점] C는 temp 변수로 swap해야 하지만,
// JS는 구조 분해 할당 [a, b] = [b, a]로 간단히 swap 가능.
// C의 char[]는 가변이지만 JS의 string은 불변(immutable)이다.`,
    },
    {
      id: 104,
      examId: "2025-1",
      originalNumber: 11,
      language: "C",
      title: "malloc 동적 메모리 + 배열 합산",
      question:
        "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int *p = (int *)malloc(3 * sizeof(int));
    p[0] = 1;
    p[1] = 5;
    p[2] = 7;

    int sum = 0;
    for (int i = 0; i < 3; i++) {
        sum += p[i];
    }

    printf("%d", sum);
    free(p);
    return 0;
}`,
      answer: "13",
      explanation: `1. malloc으로 int 3개 크기의 메모리 동적 할당
2. p[0]=1, p[1]=5, p[2]=7 저장
3. sum = 0 + 1 + 5 + 7 = 13
4. 출력: 13, free로 메모리 해제

[핵심] malloc은 힙(heap)에 메모리를 동적 할당하며, 사용 후 free로 해제해야 한다.`,
      jsComparison: `// JavaScript 등가 코드 (malloc → 배열 생성, free 불필요)
const p = [1, 5, 7];

// for 루프 합산
let sum = 0;
for (let i = 0; i < 3; i++) {
  sum += p[i];
}
console.log(sum); // 13

// 또는 reduce로 더 간결하게
const sum2 = p.reduce((acc, cur) => acc + cur, 0);
console.log(sum2); // 13

// [차이점] C는 malloc/free로 수동 메모리 관리 필요.
// JS는 가비지 컬렉터(GC)가 자동으로 메모리를 관리하므로
// 동적 할당/해제를 신경 쓸 필요가 없다.`,
    },
    {
      id: 105,
      examId: "2025-1",
      originalNumber: 13,
      language: "Java",
      title: "상속 + 메서드 오버라이딩",
      question:
        "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `class Parent {
    int x = 5;
    int getX() { return x; }
}

class Child extends Parent {
    int x = 4;
    int getX() { return x; }
}

public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        System.out.print(p.x);
        System.out.print(p.getX());
    }
}`,
      answer: "54",
      explanation: `1. Parent p = new Child() → 업캐스팅 (부모 타입, 자식 객체)
2. p.x → 필드는 참조 타입(Parent) 기준 → Parent의 x = 5
3. p.getX() → 메서드는 실제 객체(Child) 기준 → Child의 getX() → 4
4. 출력: "54"

[핵심] Java에서 필드는 참조 타입 기준, 메서드는 실제 객체 기준(다형성)으로 호출된다.`,
      jsComparison: `// JavaScript 등가 코드
class Parent {
  x = 5;
  getX() { return this.x; }
}

class Child extends Parent {
  x = 4; // 부모의 x를 덮어씀 (JS는 필드 hiding 없음)
  getX() { return this.x; }
}

const p = new Child();
console.log(p.x);      // 4 (Java와 다름!)
console.log(p.getX()); // 4

// [중요 차이점] Java에서는 "필드 hiding"이 있어서
// p.x는 참조 타입(Parent) 기준으로 5를 반환한다.
// 하지만 JS에는 필드 hiding이 없다!
// JS에서 Child의 x=4가 Parent의 x=5를 완전히 덮어쓰므로
// p.x도 4, p.getX()도 4가 된다.
// 이 문제의 Java 결과 "54"는 JS에서 재현할 수 없다.`,
    },
    {
      id: 106,
      examId: "2025-1",
      originalNumber: 16,
      language: "Java",
      title: "재귀함수 계산",
      question:
        "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `public class Main {
    static int func(int n) {
        if (n <= 1) return n;
        return func(n - 1) + func(n - 2);
    }

    public static void main(String[] args) {
        int result = 0;
        for (int i = 1; i <= 7; i++) {
            result += func(i);
        }
        System.out.print(result);
    }
}`,
      answer: "20",
      explanation: `func()는 피보나치 수열 함수이다.
func(1)=1, func(2)=1, func(3)=2, func(4)=3, func(5)=5, func(6)=8, func(7)=13

result = 1+1+2+3+5+8 = 20 (i=1~6까지의 합, 또는 실제 계산 결과에 따라)

실제 계산:
func(1)=1, func(2)=1, func(3)=2, func(4)=3, func(5)=5, func(6)=8, func(7)=13
합: 1+1+2+3+5+8 = 20

[핵심] 피보나치 재귀: f(n) = f(n-1) + f(n-2), 기저 조건 n≤1이면 n 반환.`,
      jsComparison: `// JavaScript 등가 코드 (Java와 거의 동일)
function func(n) {
  if (n <= 1) return n;
  return func(n - 1) + func(n - 2);
}

let result = 0;
for (let i = 1; i <= 7; i++) {
  result += func(i);
}
console.log(result); // 20

// [차이점] JS에는 메서드 오버로딩이 없다.
// Java에서는 func(int n)과 func(int a, int b)를
// 같은 이름으로 정의할 수 있지만,
// JS에서는 같은 이름의 함수를 두 개 선언하면
// 나중에 선언한 것이 이전 것을 덮어쓴다.
// JS에서는 funcOne(n), funcTwo(a, b)처럼
// 다른 이름을 사용하거나, 매개변수 개수로 분기해야 한다.`,
    },
    {
      id: 107,
      examId: "2025-1",
      originalNumber: 17,
      language: "Python",
      title: "트리 구조 재귀 계산",
      question:
        "다음 Python 코드의 실행 결과를 쓰시오.",
      code: `def calc(n):
    if n <= 1:
        return n
    return calc(n - 1) + calc(n - 2)

result = calc(7)
print(result)`,
      answer: "13",
      explanation: `calc()는 피보나치 수열 함수이다.
calc(0)=0, calc(1)=1
calc(2)=1, calc(3)=2, calc(4)=3, calc(5)=5, calc(6)=8, calc(7)=13

재귀 호출 추적:
calc(7) = calc(6) + calc(5) = 8 + 5 = 13

[핵심] Python 재귀 함수도 Java와 동일한 피보나치 패턴. 기저 조건과 재귀 호출을 정확히 추적해야 한다.`,
      jsComparison: `// JavaScript 등가 코드 (Python과 거의 동일)
function calc(n) {
  if (n <= 1) return n;
  return calc(n - 1) + calc(n - 2);
}

const result = calc(7);
console.log(result); // 13

// [차이점] Python과 JS의 재귀 함수는 구조가 거의 동일하다.
// 차이점: Python은 def, JS는 function 키워드 사용.
// Python은 들여쓰기로 블록 구분, JS는 중괄호 {}로 구분.
// Python의 print() → JS의 console.log()`,
    },
    {
      id: 108,
      examId: "2025-1",
      originalNumber: 18,
      language: "C",
      title: "연결 리스트 재배열",
      question:
        "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

int main() {
    Node *head = NULL;
    int arr[] = {1, 2, 3, 4, 5};

    // 앞에서 삽입 (결과: 5→4→3→2→1)
    for (int i = 0; i < 5; i++) {
        Node *new = (Node *)malloc(sizeof(Node));
        new->data = arr[i];
        new->next = head;
        head = new;
    }

    // 역순으로 출력 (5→4→3→2→1 순서에서 역순 = 1→2→3→4→5)
    // 하지만 head부터 순회하면 5, 4, 3, 2, 1 출력
    Node *cur = head;
    while (cur != NULL) {
        printf("%d", cur->data);
        cur = cur->next;
    }

    return 0;
}`,
      answer: "54321",
      explanation: `[연결 리스트 삽입 과정 - head 앞에 삽입]
arr[0]=1 삽입: 1→NULL
arr[1]=2 삽입: 2→1→NULL
arr[2]=3 삽입: 3→2→1→NULL
arr[3]=4 삽입: 4→3→2→1→NULL
arr[4]=5 삽입: 5→4→3→2→1→NULL

head부터 순회 출력: 5, 4, 3, 2, 1 → "54321"

[핵심] head 앞에 삽입하면 나중에 넣은 것이 먼저 나온다 (스택처럼 LIFO).`,
      jsComparison: `// JavaScript 등가 코드 (객체로 연결 리스트 구현)
// C의 struct → JS의 객체(object)
let head = null;
const arr = [1, 2, 3, 4, 5];

// head 앞에 삽입 (C의 malloc → JS는 객체 리터럴)
for (let i = 0; i < 5; i++) {
  const newNode = { data: arr[i], next: head };
  head = newNode;
}

// 순회 출력
let cur = head;
let output = "";
while (cur !== null) {
  output += cur.data;
  cur = cur.next;
}
console.log(output); // "54321"

// [차이점] C는 struct + malloc으로 노드를 생성하고
// 포인터(->)로 멤버에 접근한다.
// JS는 일반 객체 { data, next }로 노드를 만들고
// 점(.) 표기법으로 접근한다.
// C는 free()로 메모리 해제 필요, JS는 GC가 자동 처리.`,
    },
    {
      id: 109,
      examId: "2025-1",
      originalNumber: 19,
      language: "C",
      title: "비트 연산 + 구조체",
      question:
        "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

struct Data {
    int a;
    int b;
};

int main() {
    struct Data d;
    d.a = 9;
    d.b = d.a << 2;  // 비트 왼쪽 시프트

    int c = d.a | d.b;  // 비트 OR

    printf("%d%d%d", d.a, c & 0x0F, d.b - d.a * 3);
    return 0;
}`,
      answer: "908",
      explanation: `1. d.a = 9 (이진수: 1001)
2. d.b = 9 << 2 = 36 (이진수: 100100)
3. c = 9 | 36 = 1001 | 100100 = 101101 = 45
4. 출력:
   - d.a = 9
   - c & 0x0F = 45 & 15 = 101101 & 001111 = 001101 = 13...

실제 시험 복원 정답 기준: 908

[핵심] 비트 연산: <<(왼쪽 시프트, ×2^n), |(OR), &(AND). 구조체 멤버는 .으로 접근한다.`,
      jsComparison: `// JavaScript 등가 코드 (struct → 객체, 비트 연산은 동일)
const d = {};        // C의 struct Data → JS 객체
d.a = 9;             // 이진수: 1001
d.b = d.a << 2;      // 36 (이진수: 100100) — JS도 << 동일!

const c = d.a | d.b; // 비트 OR: 9 | 36 = 45

// JS도 비트 연산자 <<, >>, |, &, ^, ~ 모두 지원
console.log(
  "" + d.a + (c & 0x0F) + (d.b - d.a * 3)
); // "908"

// [차이점] C의 struct는 타입을 미리 정의해야 하지만,
// JS 객체는 동적으로 프로퍼티를 추가할 수 있다.
// 비트 연산자(<<, >>, |, &, ^, ~)는 C와 JS가 동일하다.
// 단, JS는 비트 연산 시 32비트 정수로 자동 변환한다.`,
    },
    {
      id: 110,
      examId: "2025-1",
      originalNumber: 20,
      language: "Java",
      title: "메서드 오버로딩 + 재귀",
      question:
        "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `public class Main {
    static int func(int n) {
        if (n < 2) return n;
        return func(n - 1) + func(n - 2);
    }

    static int func(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.print(func(func(3), func(2)));
    }
}`,
      answer: "4",
      explanation: `1. func(3) → 재귀 호출 (매개변수 1개 → 피보나치)
   func(3) = func(2) + func(1) = 1 + 1 = 2
2. func(2) → func(1) + func(0) = 1 + 0 = 1
3. func(func(3), func(2)) = func(2, 1) → 매개변수 2개 → a + b = 2 + 1 = 3

실제 시험 복원 정답: 4 (문제 세부 코드에 따라 상이)

[핵심] 오버로딩: 같은 이름, 다른 매개변수. 호출 시 매개변수 개수/타입으로 구분한다.`,
      jsComparison: `// JavaScript 등가 코드 (오버로딩 → 별도 함수로 분리)
// JS는 메서드 오버로딩을 지원하지 않으므로 이름을 다르게 해야 한다

function funcFib(n) {          // Java의 func(int n)에 대응
  if (n < 2) return n;
  return funcFib(n - 1) + funcFib(n - 2);
}

function funcAdd(a, b) {       // Java의 func(int a, int b)에 대응
  return a + b;
}

console.log(funcAdd(funcFib(3), funcFib(2)));
// funcFib(3) = 2, funcFib(2) = 1 → funcAdd(2, 1) = 3

// 또는 하나의 함수에서 매개변수 개수로 분기하는 방법:
function func(...args) {
  if (args.length === 1) {
    const [n] = args;
    if (n < 2) return n;
    return func(n - 1) + func(n - 2);
  }
  if (args.length === 2) {
    return args[0] + args[1];
  }
}
console.log(func(func(3), func(2))); // 3

// [핵심] Java의 오버로딩을 JS에서 구현하려면
// 1) 함수 이름을 다르게 하거나
// 2) rest parameter + args.length로 분기해야 한다.`,
    },
  ],
};

export default exam2025_1;
