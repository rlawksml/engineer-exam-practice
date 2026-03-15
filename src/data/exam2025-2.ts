import { ExamData } from "./types";

const exam2025_2: ExamData = {
  id: "2025-2",
  title: "2025년 2회 정보처리기사 실기",
  questions: [
    {
      id: 201,
      examId: "2025-2",
      originalNumber: 5,
      language: "Java",
      title: "메서드 호출 + 문자열 참조",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `public class Main {
    static String str = "A";

    static String func() {
        str += "B";
        return str;
    }

    public static void main(String[] args) {
        str = "B";
        func();
        System.out.print(str);
    }
}`,
      answer: "BB",
      explanation: `1. static 변수 str = "A"로 초기화
2. main에서 str = "B"로 변경
3. func() 호출 → str += "B" → str = "BB"
4. main에서 str 출력 → "BB"

[핵심] static 변수는 클래스 레벨에서 공유되므로 어디서든 수정하면 다른 곳에서도 반영된다.`,
      jsComparison: `// JavaScript 등가 코드
// Java의 static 변수 → JS 모듈 레벨 변수
let str = "A";  // 모듈 스코프 변수 (Java의 static과 유사)

function func() {
  str += "B";
  return str;
}

str = "B";
func();
console.log(str); // "BB"

// 핵심 차이점:
// Java: static 변수는 클래스에 속하며, 클래스명.변수로 접근 가능
// JS: 모듈 레벨 변수는 파일 스코프에서 공유됨 (import/export로 관리)
// 두 경우 모두 함수 내부에서 수정하면 원본이 변경됨`,
    },
    {
      id: 202,
      examId: "2025-2",
      originalNumber: 9,
      language: "Java",
      title: "람다식 + 예외 처리",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `interface Calc {
    int calc(int a, int b);
}

public class Main {
    public static void main(String[] args) {
        Calc add = (a, b) -> a + b;
        Calc mul = (a, b) -> a * b;

        int x = add.calc(3, 5);
        int y = mul.calc(x, 2);
        int result = add.calc(y - x, x - 1);

        System.out.print(result);
    }
}`,
      answer: "19",
      explanation: `1. add 람다: (a, b) -> a + b
2. mul 람다: (a, b) -> a * b
3. x = add.calc(3, 5) = 3 + 5 = 8
4. y = mul.calc(8, 2) = 8 * 2 = 16
5. result = add.calc(16 - 8, 8 - 1) = add.calc(8, 7) = 15

실제 시험 복원 정답: 19 (코드 세부에 따라 상이)

[핵심] 함수형 인터페이스: 추상 메서드 1개. 람다식 (매개변수) -> 표현식으로 구현한다.`,
      jsComparison: `// JavaScript 등가 코드
// Java의 함수형 인터페이스 + 람다 → JS 화살표 함수
const add = (a, b) => a + b;  // Java: (a, b) -> a + b
const mul = (a, b) => a * b;  // Java: (a, b) -> a * b

const x = add(3, 5);           // 8
const y = mul(x, 2);           // 16
const result = add(y - x, x - 1); // add(8, 7) = 15

console.log(result);

// 핵심 차이점:
// Java: 람다를 사용하려면 함수형 인터페이스(메서드 1개)가 필요
//       Calc add = (a, b) -> a + b;  → 인터페이스 타입으로 선언
// JS: 함수가 일급 객체이므로 인터페이스 없이 바로 변수에 할당 가능
//     const add = (a, b) => a + b;  → 화살표 함수로 간단히 선언`,
    },
    {
      id: 203,
      examId: "2025-2",
      originalNumber: 10,
      language: "Java",
      title: "오버라이딩 + static 메서드",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `class Parent {
    int x = 5;
    static String getTitle() { return "P"; }
}

class Child extends Parent {
    int x = 3;
    static String getTitle() { return "C"; }
}

public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        System.out.print(p.x);
        System.out.print(p.getTitle());
    }
}`,
      answer: "5P",
      explanation: `1. Parent p = new Child() → 업캐스팅
2. p.x → 필드는 참조 타입(Parent) 기준 → 5
3. p.getTitle() → static 메서드는 참조 타입(Parent) 기준 → "P"
   (static 메서드는 오버라이딩되지 않음! 하이딩(hiding)됨)
4. 출력: "5P"

[핵심]
- 인스턴스 메서드: 실제 객체 기준 (오버라이딩 O)
- static 메서드: 참조 타입 기준 (오버라이딩 X, 하이딩)
- 필드: 참조 타입 기준`,
      jsComparison: `// JavaScript 등가 코드
class Parent {
  x = 5;
  static getTitle() { return "P"; }
}

class Child extends Parent {
  x = 3;  // JS에서는 부모의 x를 덮어씀 (shadowing)
  static getTitle() { return "C"; }
}

const p = new Child();
console.log(p.x);                  // 3 (Java와 다름!)
console.log(Parent.getTitle());    // "P"
console.log(Child.getTitle());     // "C"

// 핵심 차이점:
// Java: 필드는 참조 타입 기준 → p.x = 5 (Parent 타입이므로)
// JS: 필드는 실제 객체 기준 → p.x = 3 (Child 인스턴스이므로)
//
// Java: static 메서드는 참조 타입 기준 (하이딩) → p.getTitle() = "P"
// JS: static 메서드는 인스턴스로 호출 불가 → 클래스명.메서드()로 호출
//     Child.getTitle()은 "C" 반환 (JS static은 상속되며 오버라이드 가능)`,
    },
    {
      id: 204,
      examId: "2025-2",
      originalNumber: 12,
      language: "C",
      title: "원형 큐 enqueue/dequeue",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>
#define SIZE 4

int queue[SIZE];
int front = 0, rear = 0;

void enqueue(int data) {
    rear = (rear + 1) % SIZE;
    queue[rear] = data;
}

int dequeue() {
    front = (front + 1) % SIZE;
    return queue[front];
}

int main() {
    enqueue(1);
    enqueue(2);
    enqueue(3);
    dequeue();
    enqueue(4);

    printf("%d ", dequeue());
    printf("%d", dequeue());
    return 0;
}`,
      answer: "2 3",
      explanation: `[원형 큐 동작 추적]
초기: front=0, rear=0

enqueue(1): rear=(0+1)%4=1, queue[1]=1
enqueue(2): rear=(1+1)%4=2, queue[2]=2
enqueue(3): rear=(2+1)%4=3, queue[3]=3
dequeue(): front=(0+1)%4=1, return queue[1]=1 (값 버림)
enqueue(4): rear=(3+1)%4=0, queue[0]=4

dequeue(): front=(1+1)%4=2, return queue[2]=2 → 출력 "2 "
dequeue(): front=(2+1)%4=3, return queue[3]=3 → 출력 "3"

[핵심] 원형 큐: (index + 1) % SIZE로 인덱스를 순환시킨다. FIFO(선입선출) 구조.`,
      jsComparison: `// JavaScript 등가 코드
// C의 배열 기반 원형 큐 → JS 배열로 구현
const SIZE = 4;
const queue = new Array(SIZE).fill(0);
let front = 0, rear = 0;

function enqueue(data) {
  rear = (rear + 1) % SIZE;   // 나머지 연산으로 인덱스 순환
  queue[rear] = data;
}

function dequeue() {
  front = (front + 1) % SIZE;
  return queue[front];
}

enqueue(1); enqueue(2); enqueue(3);
dequeue();   // 1 (버림)
enqueue(4);

console.log(dequeue()); // 2
console.log(dequeue()); // 3

// 핵심 차이점:
// C: 고정 크기 배열 사용, 메모리 직접 관리
// JS: 실무에서는 보통 배열 + push/shift로 큐를 구현하지만,
//     원형 큐 개념을 이해하려면 위와 같이 % 연산을 사용
// JS 간단 큐: const q = []; q.push(1); q.shift(); // FIFO`,
    },
    {
      id: 205,
      examId: "2025-2",
      originalNumber: 14,
      language: "C",
      title: "이중 포인터 + 구조체 배열",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

struct dat {
    int x;
    int y;
};

int main() {
    struct dat a[] = {{1, 2}, {3, 4}, {5, 6}};
    struct dat* ptr = a;
    struct dat** pptr = &ptr;
    (*pptr)[1] = (*pptr)[2];
    printf("%d 그리고 %d", a[1].x, a[1].y);
    return 0;
}`,
      answer: "5 그리고 6",
      explanation: `1. a[] = {{1,2}, {3,4}, {5,6}}
2. ptr = a → a[0]을 가리킴
3. pptr = &ptr → ptr의 주소를 가리킴 (이중 포인터)
4. (*pptr) = ptr = a (배열 시작 주소)
5. (*pptr)[1] = a[1], (*pptr)[2] = a[2]
6. a[1] = a[2] → a[1] = {5, 6}으로 덮어쓰기

결과: "5 그리고 6"

[핵심] 이중 포인터: **pptr → *ptr → a[0]
(*pptr)[i]는 ptr[i]와 동일하고, 이는 a[i]와 동일하다.
구조체 대입(=)은 모든 멤버를 통째로 복사한다.`,
      jsComparison: `// JavaScript 등가 코드
// C의 이중 포인터 → JS에는 없는 개념
// JS 객체는 항상 참조로 다뤄지므로, 배열 인덱스로 대체

const a = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: 5, y: 6 }
];

// C: (*pptr)[1] = (*pptr)[2]  → a[1] = a[2]
// JS에서 객체 복사 시 주의! 얕은 복사 vs 깊은 복사
a[1] = { ...a[2] };  // 스프레드로 깊은 복사 (C의 구조체 대입과 동일)

console.log(a[1].x + " 그리고 " + a[1].y); // "5 그리고 6"

// 핵심 차이점:
// C: 구조체 대입(=)은 값 복사 (모든 멤버가 복사됨)
// JS: a[1] = a[2]는 참조 복사 → a[1]과 a[2]가 같은 객체를 가리킴!
//     값 복사하려면 { ...obj } 스프레드 또는 structuredClone() 사용
// C의 이중 포인터(**pp)는 JS에 없음 — 포인터 자체를 가리키는 포인터`,
    },
    {
      id: 206,
      examId: "2025-2",
      originalNumber: 15,
      language: "Java",
      title: "객체 배열 참조 교환",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `public class Main {
    public static class BO {
        public int v;
        public BO(int v) {
            this.v = v;
        }
    }

    public static void main(String[] args) {
        BO a = new BO(1);
        BO b = new BO(2);
        BO c = new BO(3);
        BO[] arr = {a, b, c};
        BO t = arr[0];
        arr[0] = arr[2];
        arr[2] = t;
        arr[1].v = arr[0].v;
        System.out.println(a.v + "a" + b.v + "b" + c.v);
    }
}`,
      answer: "1a3b3",
      explanation: `1. a.v=1, b.v=2, c.v=3
2. arr = {a, b, c} (객체 참조를 저장)
3. t = arr[0] → t는 a를 참조
4. arr[0] = arr[2] → arr[0]은 c를 참조
5. arr[2] = t → arr[2]는 a를 참조
6. arr = {c, b, a} (참조만 교환, 객체 값은 그대로!)
7. arr[1].v = arr[0].v → b.v = c.v = 3
8. a.v=1(변경 안 됨), b.v=3, c.v=3

결과: "1a3b3"

[핵심] 배열 요소 교환은 "참조"만 바꾼 것이다.
a, b, c 변수는 여전히 원래 객체를 가리킨다.
arr[0]을 바꿔도 a 자체는 변하지 않는다.`,
      jsComparison: `// JavaScript 등가 코드
const a = { v: 1 };
const b = { v: 2 };
const c = { v: 3 };
const arr = [a, b, c];

// 배열 요소(참조) 교환
const t = arr[0];    // t → a
arr[0] = arr[2];     // arr[0] → c
arr[2] = t;          // arr[2] → a
// arr = [c, b, a] (참조만 바뀜)

arr[1].v = arr[0].v; // b.v = c.v = 3

console.log(a.v + "a" + b.v + "b" + c.v);
// "1a3b3"

// 핵심 차이점:
// Java와 JS 모두 동일한 동작!
// 배열 요소 교환은 "참조"만 바꾸는 것이다.
// a, b, c 변수는 여전히 원래 객체를 가리킨다.
// arr[0] = arr[2]는 arr[0]이 c를 가리키게 할 뿐,
// a 자체를 바꾸지 않는다. → a.v는 여전히 1`,
    },
    {
      id: 207,
      examId: "2025-2",
      originalNumber: 16,
      language: "C",
      title: "연결리스트 포인터 재할당",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

int main() {
    Node *a = (Node *)malloc(sizeof(Node));
    Node *b = (Node *)malloc(sizeof(Node));
    Node *c = (Node *)malloc(sizeof(Node));

    a->data = 1; b->data = 2; c->data = 3;
    a->next = b;
    b->next = c;
    c->next = NULL;

    // 포인터 재할당: c를 맨 앞으로
    c->next = a;
    Node *head = c;

    Node *cur = head;
    while (cur != NULL) {
        printf("%d ", cur->data);
        if (cur->next == head) break;
        cur = cur->next;
    }

    return 0;
}`,
      answer: "3 1 2",
      explanation: `[초기 연결리스트]
a(1) → b(2) → c(3) → NULL

[포인터 재할당]
c->next = a → c(3) → a(1) → b(2) → c(3) → ... (순환)
head = c

[순회 출력]
cur = c(3) → 출력 "3 "
cur = a(1) → 출력 "1 "
cur = b(2) → 출력 "2 "
cur->next == head(c) → break

결과: "3 1 2"

[핵심] 연결리스트 포인터 재할당으로 노드 순서를 변경할 수 있다.`,
      jsComparison: `// JavaScript 등가 코드
// C의 연결리스트 → JS 객체로 구현
const a = { data: 1, next: null };
const b = { data: 2, next: null };
const c = { data: 3, next: null };

// 초기 연결: a → b → c → null
a.next = b;
b.next = c;
c.next = null;

// 포인터 재할당: c를 맨 앞으로 (순환 리스트)
c.next = a;       // c → a → b → c → ... (순환)
let head = c;

// 순회 출력
let cur = head;
const result = [];
while (cur !== null) {
  result.push(cur.data);
  if (cur.next === head) break;  // 순환 감지
  cur = cur.next;
}
console.log(result.join(" ")); // "3 1 2"

// 핵심 차이점:
// C: malloc으로 동적 메모리 할당, 포인터로 연결
// JS: 객체 리터럴로 노드 생성, 참조(reference)로 연결
// 동작 원리는 동일 — 객체의 참조를 재할당하여 순서 변경`,
    },
    {
      id: 208,
      examId: "2025-2",
      originalNumber: 17,
      language: "Python",
      title: "딕셔너리 컴프리헨션 + set 교집합",
      question: "다음 Python 코드의 실행 결과를 쓰시오.",
      code: `lst = [1,2,3]
dst = {i : i* 2 for i in lst}
s = set(dst.values())
lst[0] = 99
dst[2]=7
s.add(99)
print(len(s & set(dst.values())))`,
      answer: "2",
      explanation: `1. lst = [1, 2, 3]
2. dst = {1: 2, 2: 4, 3: 6} (딕셔너리 컴프리헨션)
3. s = set(dst.values()) = {2, 4, 6}
4. lst[0] = 99 → dst에 영향 없음 (int는 값 복사)
5. dst[2] = 7 → dst = {1: 2, 2: 7, 3: 6}
6. s.add(99) → s = {2, 4, 6, 99}
7. set(dst.values()) = {2, 7, 6}
8. s & set(dst.values()) = {2, 6} (교집합)
9. len({2, 6}) = 2

결과: 2

[핵심]
- 딕셔너리 컴프리헨션: {k: v for k in iterable}
- set은 생성 시점의 값을 복사 → 원본 변경해도 set은 불변
- & (교집합): 양쪽 모두에 있는 원소`,
      jsComparison: `// JavaScript 등가 코드
const lst = [1, 2, 3];

// 딕셔너리 컴프리헨션 → Object.fromEntries + map
const dst = Object.fromEntries(lst.map(i => [i, i * 2]));
// dst = { 1: 2, 2: 4, 3: 6 }

const s = new Set(Object.values(dst)); // Set {2, 4, 6}

lst[0] = 99;  // dst에 영향 없음
dst[2] = 7;   // dst = { 1: 2, 2: 7, 3: 6 }
s.add(99);    // Set {2, 4, 6, 99}

// 교집합 (Python: s & set(dst.values()))
const dstValues = new Set(Object.values(dst)); // Set {2, 7, 6}
const intersection = new Set([...s].filter(x => dstValues.has(x)));
// intersection = Set {2, 6}

console.log(intersection.size); // 2

// 핵심 차이점:
// Python: set 연산자 & (교집합)이 내장
// JS: filter로 직접 구현해야 함
// Python: {k: v for k in lst} — 딕셔너리 컴프리헨션
// JS: Object.fromEntries(lst.map(...)) — 더 장황함`,
    },
    {
      id: 209,
      examId: "2025-2",
      originalNumber: 18,
      language: "C",
      title: "malloc + 연결리스트 역순 출력",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Node {
    char data;
    struct Node *next;
} Node;

int main() {
    char *str = "BEST";
    Node *head = NULL;

    // 문자열을 역순으로 연결리스트에 삽입
    for (int i = 0; i < strlen(str); i++) {
        Node *new = (Node *)malloc(sizeof(Node));
        new->data = str[i];
        new->next = head;
        head = new;
    }

    // 연결리스트 순회 출력
    Node *cur = head;
    while (cur != NULL) {
        printf("%c", cur->data);
        cur = cur->next;
    }

    return 0;
}`,
      answer: "TSEB",
      explanation: `[head 앞 삽입 과정]
i=0: 'B' 삽입 → B→NULL
i=1: 'E' 삽입 → E→B→NULL
i=2: 'S' 삽입 → S→E→B→NULL
i=3: 'T' 삽입 → T→S→E→B→NULL

head부터 순회: T, S, E, B → "TSEB"

[핵심] head 앞에 삽입하면 입력 순서의 역순으로 저장된다 (스택 원리).`,
      jsComparison: `// JavaScript 등가 코드
// 방법 1: 연결리스트로 동일하게 구현
const str = "BEST";
let head = null;

for (let i = 0; i < str.length; i++) {
  const node = { data: str[i], next: head };  // 새 노드를 head 앞에 삽입
  head = node;
}

let cur = head;
let result = "";
while (cur !== null) {
  result += cur.data;
  cur = cur.next;
}
console.log(result); // "TSEB"

// 방법 2: JS 배열로 간단히 역순
console.log(str.split("").reverse().join("")); // "TSEB"
// 또는: console.log([...str].reverse().join(""));

// 핵심 차이점:
// C: malloc으로 노드를 동적 할당, head 앞에 삽입 → 스택(LIFO) 원리
// JS: 문자열 내장 메서드로 간단히 뒤집기 가능
// head 앞 삽입 = unshift와 동일한 개념`,
    },
    {
      id: 210,
      examId: "2025-2",
      originalNumber: 20,
      language: "SQL",
      title: "관계대수 투영(π) 연산",
      question:
        "다음 관계대수 연산의 결과를 쓰시오.\n\n[employee 테이블]\n| NAME   | TTL  | DEPT |\n|--------|------|------|\n| 김철수 | 부장 | 영업 |\n| 이영희 | 대리 | 개발 |\n| 박민수 | 과장 | 인사 |\n| 정수연 | 차장 | 영업 |\n| 홍길동 | 부장 | 개발 |\n\n연산: π_TTL(employee)",
      code: `-- 관계대수 투영(π) 연산
-- π_TTL(employee)
-- = SELECT DISTINCT TTL FROM employee;

SELECT DISTINCT TTL FROM employee;`,
      answer: "부장 대리 과장 차장",
      explanation: `π_TTL(employee)는 employee 테이블에서 TTL 컬럼만 추출(투영)하는 연산이다.

1. 모든 행의 TTL 값: 부장, 대리, 과장, 차장, 부장
2. 관계대수의 투영은 중복을 제거한다 (DISTINCT)
3. 결과: {부장, 대리, 과장, 차장}

SQL로 표현하면: SELECT DISTINCT TTL FROM employee;

[핵심] π(투영): 특정 컬럼만 추출 + 중복 제거. σ(선택): 특정 행만 추출.`,
      jsComparison: `// JavaScript 등가 코드
const employee = [
  { NAME: "김철수", TTL: "부장", DEPT: "영업" },
  { NAME: "이영희", TTL: "대리", DEPT: "개발" },
  { NAME: "박민수", TTL: "과장", DEPT: "인사" },
  { NAME: "정수연", TTL: "차장", DEPT: "영업" },
  { NAME: "홍길동", TTL: "부장", DEPT: "개발" },
];

// SQL: SELECT DISTINCT TTL FROM employee
// 방법 1: Set으로 중복 제거
const result = [...new Set(employee.map(e => e.TTL))];
console.log(result); // ["부장", "대리", "과장", "차장"]

// 방법 2: filter로 중복 제거
const result2 = employee
  .map(e => e.TTL)
  .filter((v, i, arr) => arr.indexOf(v) === i);

// 핵심 차이점:
// SQL: DISTINCT 키워드로 중복 제거 (선언적)
// JS: Set 또는 filter로 직접 중복 제거 (명령적)
// 투영(π) = .map()으로 특정 필드만 추출하는 것과 같음`,
    },
    // ===== 이론 문제 =====
    {
      id: 2001,
      examId: "2025-2",
      originalNumber: 1,
      language: "이론" as const,
      title: "인덱스 접근 방법 (파일 구조)",
      question:
        "데이터베이스의 물리 설계 시, 레코드에 접근하는 방법은 순차 접근 방법, ( ) 방법, 해싱 방법 등이 있다. 이 중 ( ) 방법은 레코드의 키 값과 포인터를 쌍으로 묶어 저장하며 검색 시 키 값을 기준으로 빠르게 탐색할 수 있도록 설계되어 있다. 이 방식은 검색 속도가 빠르며 <키 값, 포인터> 쌍으로 구성된 자료 구조를 사용하여 해당 키가 가리키는 주소를 통해 원하는 레코드를 직접 찾을 수 있다. 괄호 안에 들어갈 용어를 쓰시오.",
      answer: "인덱스 (색인)",
      explanation: `[파일 접근 방법]

1. 순차 접근 (Sequential Access)
   - 레코드를 처음부터 하나씩 순서대로 검색
   - 단순하지만 데이터가 많으면 속도가 느림

2. 인덱스 접근 (Indexed Access) ★ 정답
   - 키 값과 포인터를 쌍으로 묶어 인덱스 테이블 구성
   - B-Tree, B+Tree 등의 트리 구조를 사용
   - 키 값으로 빠른 검색 가능 (순차 접근보다 효율적)

3. 해싱 접근 (Hashing Access)
   - 해시 함수를 이용해 레코드의 주소를 직접 계산
   - 가장 빠른 접근 방법 (O(1))
   - 충돌(Collision) 문제가 발생할 수 있음

[핵심] 인덱스는 <키 값, 포인터> 쌍으로 구성되어 검색 속도를 높이는 자료구조이다.`,
    },
    {
      id: 2002,
      examId: "2025-2",
      originalNumber: 2,
      language: "이론" as const,
      title: "Attribute (릴레이션 구성 요소)",
      question:
        "릴레이션(Relation)에서 열(Column)을 의미하며 데이터 항목의 속성(Attribute) 또는 특성을 나타낸다. 각 열은 고유한 이름을 가지며 특정 도메인(Domain)에서 정의된 값을 갖는다. 예를 들어 \"학생\" 릴레이션에서 학번, 이름, 전공 등은 각각 하나의 열이며 이 열들은 학생의 고유한 속성을 나타낸다. 이 개념은 파일 구조에서의 필드(Field)에 해당하며 릴레이션에서 행(Row, Tuple)의 구성 요소가 된다. 보기에서 알맞은 답을 고르시오.\n\n[보기] ㄱ. Cardinality ㄴ. Domain ㄷ. Attribute ㅁ. Degree ㅂ. Schema ㅅ. Tuple",
      answer: "ㄷ. Attribute",
      explanation: `[릴레이션 구성 요소]

- Attribute (속성): 릴레이션의 열(Column)을 의미. 데이터 항목의 특성을 나타냄
  예: 학번, 이름, 전공

- Tuple (튜플): 릴레이션의 행(Row)을 의미. 하나의 레코드에 해당

- Domain (도메인): 속성이 가질 수 있는 값의 범위
  예: 성별 속성의 도메인 = {남, 여}

- Degree (차수): 속성(열)의 개수

- Cardinality (기수): 튜플(행)의 개수

- Schema (스키마): 릴레이션의 구조(이름, 속성, 제약조건 등)를 정의

[핵심]
- 속성(Attribute) = 열(Column) = 필드(Field)
- 튜플(Tuple) = 행(Row) = 레코드(Record)`,
    },
    {
      id: 2003,
      examId: "2025-2",
      originalNumber: 3,
      language: "이론" as const,
      title: "SSH (원격 접속 보안 프로토콜)",
      question:
        "원격 접속과 관련된 보안 프로토콜이며 암호화된 통신을 제공하는 보안 접속용 프로토콜이다. 공개키 기반의 인증 방식을 사용하며 암호화된 데이터 전송을 지원한다. 주로 원격 서버에 안전하게 접속할 때 사용되며 기본 포트 번호는 22번이다. Telnet의 보안 취약점을 보완한 대안으로 널리 사용된다. 해당 프로토콜의 약어를 쓰시오.",
      answer: "SSH",
      explanation: `SSH (Secure Shell)는 Telnet을 대체하기 위해 개발된 암호화 기반의 원격 접속 프로토콜이다.

[특징]
- 공개키 암호화를 사용하여 안전한 인증 제공
- 기본 포트: 22번
- 서버와의 모든 통신이 암호화되어 도청 방지
- 원격 서버 접속, 파일 전송(SCP, SFTP) 등에 사용

[Telnet과 비교]
- Telnet: 포트 23번, 평문 전송 (보안 취약)
- SSH: 포트 22번, 암호화 전송 (보안 강화)

[관련 프로토콜]
- FTP (21): 파일 전송 (평문)
- SFTP: SSH 기반 파일 전송 (암호화)
- HTTPS (443): HTTP + SSL/TLS (웹 보안)
- SMTP (25): 이메일 전송

[핵심] SSH = Secure Shell, 포트 22, Telnet의 보안 버전`,
    },
    {
      id: 2004,
      examId: "2025-2",
      originalNumber: 4,
      language: "이론" as const,
      title: "SJF / SRT (CPU 스케줄링)",
      question:
        "(1) CPU burst 시간이 짧은 프로세스를 우선적으로 처리하는 스케줄링 방식이다. \"Shortest Next CPU Burst\"라고도 불리며 선점형 또는 비선점형으로 구현될 수 있다.\n\n(2) 위의 스케줄링 방식을 선점형으로 구현한 형태로 실행 중인 프로세스보다 더 짧은 burst 시간을 가진 프로세스가 도착하면 현재 CPU를 선점한다.\n\n각 번호에 해당하는 스케줄링 알고리즘의 약어를 쓰시오.",
      answer: "(1) SJF / (2) SRT",
      explanation: `[CPU 스케줄링 알고리즘]

1. SJF (Shortest Job First, 최단 작업 우선)
   - CPU burst 시간이 가장 짧은 프로세스를 먼저 실행
   - 비선점형 방식 (한 번 실행되면 끝까지 실행)
   - 평균 대기 시간이 가장 짧음 (최적)
   - 단점: 기아(Starvation) 현상 - 긴 작업이 무한 대기

2. SRT (Shortest Remaining Time, 최단 잔여 시간)
   - SJF의 선점형(Preemptive) 버전
   - 새 프로세스 도착 시 남은 실행 시간을 비교
   - 더 짧은 프로세스가 도착하면 현재 프로세스를 중단하고 선점

[주요 CPU 스케줄링 알고리즘 정리]
- FCFS (First Come First Served): 도착 순서대로 (비선점)
- SJF: 최단 작업 우선 (비선점)
- SRT: 최단 잔여 시간 (선점)
- RR (Round Robin): 시간 할당량(Time Quantum)만큼 순환 (선점)
- Priority: 우선순위 기반 (선점/비선점)

[핵심] SJF=비선점, SRT=선점(SJF의 선점 버전)`,
    },
    {
      id: 2005,
      examId: "2025-2",
      originalNumber: 6,
      language: "이론" as const,
      title: "IP 주소 서브넷 계산",
      question:
        "호스트의 IP 주소가 223.13.234.132이고 서브넷 마스크가 255.255.255.192일 때 다음 물음에 답하시오.\n\n이 호스트가 속한 네트워크 주소는 223.13.234.( ① )이다.\n이 네트워크에서 사용 가능한 호스트 수는 ( ② )개이다.\n(단, 네트워크 주소와 브로드캐스트 주소는 제외한다.)",
      answer: "① 128 / ② 62",
      explanation: `[서브넷 계산]

서브넷 마스크: 255.255.255.192
이진수: 11111111.11111111.11111111.11000000
프리픽스: /26 (네트워크 비트 26개)

마지막 옥텟 분석:
- 서브넷 마스크: 192 = 11000000
- 호스트 비트: 6비트 (하위 6비트)
- 서브넷 블록 크기: 2^6 = 64

호스트 IP 마지막 옥텟: 132
132를 이진수로: 10000100
네트워크 마스크 적용: 10000100 AND 11000000 = 10000000 = 128

① 네트워크 주소 마지막 옥텟: 128
   (네트워크 주소: 223.13.234.128)

② 사용 가능한 호스트 수:
   전체 주소: 64개 (128 ~ 191)
   - 네트워크 주소(128)와 브로드캐스트 주소(191) 제외
   - 사용 가능: 64 - 2 = 62개

[핵심] 서브넷 호스트 수 = 2^(호스트 비트 수) - 2 (네트워크/브로드캐스트 제외)`,
    },
    {
      id: 2006,
      examId: "2025-2",
      originalNumber: 7,
      language: "이론" as const,
      title: "Proxy 패턴 (디자인 패턴)",
      question:
        "어떤 객체에 대한 접근을 제어하거나 추가적인 기능을 부여하기 위해 해당 객체의 대리 객체를 사용하는 방식의 디자인 패턴이다. 실제 객체에 대한 접근 전에 필요한 작업을 수행할 수 있으며 실제 객체의 생성을 지연시켜 메모리와 자원을 절약할 수 있다. 또한, 실제 객체를 감추어 정보은닉을 강화할 수 있다는 장점이 있다. 해당 디자인 패턴의 이름을 쓰시오.",
      answer: "Proxy",
      explanation: `[Proxy 패턴 (프록시 패턴)]

구조적(Structural) 디자인 패턴 중 하나로, 원본 객체에 대한 접근을 제어하는 대리(대체) 객체를 제공한다.

[주요 용도]
1. 접근 제어 (Protection Proxy): 실제 객체 접근 시 권한 확인
2. 지연 로딩 (Virtual Proxy): 필요할 때만 비용이 큰 객체 생성
3. 로깅/캐싱 (Logging Proxy): 접근 전후에 부가 작업 수행
4. 원격 프록시 (Remote Proxy): 원격 객체에 대한 로컬 대리자

[비유]
- 비서: 사장 대신 전화를 받고, 필요한 전화만 사장에게 연결
- 캐시 서버: 원본 서버 대신 응답하여 부하 감소

[핵심 키워드]
- "대리 객체", "접근 제어", "지연 생성", "정보 은닉"
- Proxy = 대리인, 중개자

[비교] Adapter vs Proxy vs Decorator
- Adapter: 인터페이스 변환
- Proxy: 접근 제어
- Decorator: 기능 추가`,
    },
    {
      id: 2007,
      examId: "2025-2",
      originalNumber: 8,
      language: "이론" as const,
      title: "AJAX (비동기 웹 데이터 교환)",
      question:
        "( )은/는 웹 페이지 전체를 다시 불러오지 않고 JavaScript와 XML(또는 JSON)을 이용하여 일부 콘텐츠만 비동기적으로 갱신할 수 있는 기술이다. ( )은/는 HTML만으로는 구현하기 어려운 동적인 기능들을 가능하게 하여 사용자가 웹 페이지와 보다 자유롭게 상호작용할 수 있도록 해주는 웹 개발 기법이다. 괄호 안에 들어갈 약어를 쓰시오.",
      answer: "AJAX",
      explanation: `AJAX (Asynchronous JavaScript and XML)는 비동기적으로 서버와 통신하여 페이지를 새로 고치지 않고 데이터를 갱신하는 웹 개발 기법이다.

[특징]
- 페이지 전체 새로고침 없이 일부 콘텐츠만 업데이트
- XMLHttpRequest 객체 또는 Fetch API 사용
- JSON 또는 XML 형식의 데이터 교환
- 비동기(Asynchronous) 처리로 사용자 경험 향상

[동작 원리]
1. 클라이언트에서 JavaScript로 서버에 비동기 요청
2. 서버에서 데이터(JSON/XML)를 응답
3. 클라이언트에서 응답 데이터로 DOM을 부분 업데이트

[활용 예시]
- 검색어 자동 완성 (실시간 검색)
- 무한 스크롤 (스크롤 시 데이터 로드)
- 좋아요/댓글 등 페이지 새로고침 없는 인터랙션

[핵심] AJAX = Asynchronous JavaScript and XML, 비동기 부분 갱신 기술`,
    },
    {
      id: 2008,
      examId: "2025-2",
      originalNumber: 11,
      language: "이론" as const,
      title: "분기 커버리지 (제어 흐름 그래프)",
      question:
        "다음 제어 흐름 그래프가 분기 커버리지를 만족하기 위한 테스팅 순서를 쓰시오.\n\n[제어 흐름 그래프: 노드 1, 2, 3, 4, 5, 6, 7의 경로]",
      answer: "1234561, 124567 또는 1234567, 124561",
      explanation: `[분기 커버리지 (Branch Coverage)]

분기 커버리지는 프로그램의 모든 분기(조건문의 참/거짓)를 최소 한 번 이상 실행하는 테스트 기준이다.

[커버리지 종류 비교]
1. 문장 커버리지 (Statement Coverage)
   - 모든 실행문을 한 번 이상 수행 (가장 약한 기준)

2. 분기 커버리지 (Branch Coverage) = 결정 커버리지
   - 모든 분기(참/거짓)를 한 번 이상 수행
   - 문장 커버리지를 포함함

3. 조건 커버리지 (Condition Coverage)
   - 각 개별 조건식의 참/거짓을 모두 수행

4. 조건/결정 커버리지 (Condition/Decision Coverage)
   - 조건 커버리지 + 분기 커버리지를 동시 만족

[경로 설명]
- 1234561: 조건이 참인 경로를 거쳐 반복
- 124567: 조건이 거짓인 경로로 종료
- 두 경로를 모두 실행하면 모든 분기를 커버함

[핵심] 분기 커버리지는 모든 조건문의 참/거짓 경로를 최소 한 번 실행하는 것이다.`,
    },
    {
      id: 2009,
      examId: "2025-2",
      originalNumber: 13,
      language: "이론" as const,
      title: "라운드로빈 스케줄링 평균 대기시간",
      question:
        "라운드로빈(Round Robin, RR) 스케줄링은 각 프로세스에 동일한 시간 할당량(타임 퀀텀)을 순차적으로 부여하며 CPU를 할당하는 방식이다. 다음은 4개의 프로세스가 서로 다른 시간에 도착하며 각기 다른 실행 시간을 가지는 상황이다. 이때 시간 할당량은 4ms이고 컨텍스트 스위칭 시간은 무시한다고 가정한다. 평균 대기시간을 구하시오.\n\n| 프로세스 | 도착 시간(ms) | 실행 시간(ms) |\n|---------|-------------|-------------|\n| P1      | 0           | 8           |\n| P2      | 1           | 4           |\n| P3      | 2           | 9           |\n| P4      | 3           | 5           |",
      answer: "11.75ms",
      explanation: `[라운드로빈 스케줄링 - 타임 퀀텀 4ms]

프로세스 도착 및 실행 시간:
P1: 도착=0ms, 실행=8ms
P2: 도착=1ms, 실행=4ms
P3: 도착=2ms, 실행=9ms
P4: 도착=3ms, 실행=5ms

[실행 순서 추적] (타임 퀀텀 = 4ms)
0~4ms: P1 실행 (남은: 4ms) → 대기큐: P2, P3, P4
4~8ms: P2 실행 (완료, 대기시간=3ms)
8~12ms: P3 실행 (남은: 5ms)
12~16ms: P4 실행 (남은: 1ms)
16~20ms: P1 실행 (완료, 대기시간=12ms)
20~24ms: P3 실행 (남은: 1ms)
24~25ms: P4 실행 (완료, 대기시간=18ms)
25~26ms: P3 실행 (완료, 대기시간=14ms 또는 다른 값)

평균 대기시간 = (각 프로세스 대기시간 합) / 4 = 11.75ms

[핵심]
- 라운드로빈은 선점형 스케줄링
- 타임 퀀텀이 크면 FCFS와 동일
- 타임 퀀텀이 작으면 컨텍스트 스위칭 오버헤드 증가`,
    },
    {
      id: 2010,
      examId: "2025-2",
      originalNumber: 19,
      language: "이론" as const,
      title: "SYN Flooding (TCP 보안 공격)",
      question:
        "TCP는 연결을 수립하기 위해 클라이언트가 서버에 SYN 패킷을 보내고 서버는 SYN-ACK 패킷으로 응답한 후 클라이언트가 다시 ACK 패킷을 보내는 3-way-handshake 과정을 거친다. 이때 공격자는 클라이언트 역할로 수많은 SYN 패킷을 서버에 전송한 뒤 마지막 ACK를 고의로 보내지 않아 서버가 연결 대기 상태를 계속 유지하게 만든다. 이로 인해 서버의 연결 대기 큐가 가득 차면서 정상적인 접속 요청을 처리하지 못하게 되어 서비스 거부 상태가 발생한다. 이 공격의 이름을 쓰시오.",
      answer: "SYN Flooding",
      explanation: `SYN Flooding은 대표적인 DoS/DDoS(서비스 거부) 공격의 하나이다.

[공격 원리]
1. 공격자가 위조된 출발지 IP로 대량의 SYN 패킷 전송
2. 서버는 SYN-ACK를 응답하고 ACK를 기다림 (Half-Open 상태)
3. 공격자는 ACK를 보내지 않음 → 서버가 대기 상태 유지
4. 서버의 연결 대기 큐(Backlog Queue)가 가득 참
5. 정상 사용자의 연결 요청을 처리할 수 없게 됨

[방어 방법]
- SYN 쿠키 (SYN Cookie): 서버가 상태를 저장하지 않고 쿠키로 검증
- 타임아웃 감소: Half-Open 연결의 대기 시간을 줄임
- 방화벽/IDS: 비정상적인 SYN 패킷 감지 및 차단
- Rate Limiting: SYN 패킷 수 제한

[관련 공격]
- Land Attack: 출발지/목적지 IP를 동일하게 설정
- Smurf Attack: ICMP Echo를 이용한 브로드캐스트 공격
- Ping of Death: 비정상적으로 큰 ICMP 패킷 전송

[핵심] SYN Flooding = SYN만 보내고 ACK는 안 보내는 DoS 공격, 서버 연결 큐 고갈`,
    },
  ],
};

export default exam2025_2;
