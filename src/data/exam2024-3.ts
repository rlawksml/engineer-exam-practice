import { ExamData } from "./types";

const exam2024_3: ExamData = {
  id: "2024-3",
  title: "2024년 3회 정보처리기사 실기",
  questions: [
    {
      id: 24301,
      examId: "2024-3",
      originalNumber: 1,
      language: "Java",
      title: "String 비교 (equals vs ==)",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `public class Main{
  static String[] s = new String[3];
  static void func(String[]s, int size){
    for(int i=1; i<size; i++){
      if(s[i-1].equals(s[i])){
        System.out.print("O");
      }else{
        System.out.print("N");
      }
    }
    for (String m : s){
      System.out.print(m);
    }
  }
  public static void main(String[] args){
    s[0] = "A";
    s[1] = "A";
    s[2] = new String("A");
    func(s, 3);
  }
}`,
      answer: "OOAAA",
      explanation: `1. s[0]="A", s[1]="A", s[2]=new String("A")
2. func 호출 (size=3):
   i=1: s[0].equals(s[1]) → "A".equals("A") → true → "O" 출력
   i=2: s[1].equals(s[2]) → "A".equals("A") → true → "O" 출력
   (equals는 값을 비교하므로 new String("A")도 같음)
3. for-each 루프: "A", "A", "A" → "AAA" 출력

결과: "OOAAA"

[핵심] equals()는 문자열 값 비교, ==는 참조(주소) 비교.
s[0]==s[1]은 true (같은 리터럴 풀), s[1]==s[2]는 false (new로 새 객체 생성).
하지만 equals()는 둘 다 true.`,
      jsComparison: `// JavaScript 동등 코드
const s = ["A", "A", new String("A")];

for (let i = 1; i < s.length; i++) {
    // JS에서 == 는 값 비교 (Java의 equals와 유사)
    if (s[i-1] == s[i]) {
        process.stdout.write("O");
    } else {
        process.stdout.write("N");
    }
}
for (const m of s) {
    process.stdout.write(String(m));
}
// 결과: "OOAAA"

// 차이점:
// Java: equals()로 값 비교, ==로 참조 비교
// JS: ==로 값 비교, ===로 엄격 비교
// JS에서 "A" === new String("A")는 false (object vs string)`,
    },
    {
      id: 24302,
      examId: "2024-3",
      originalNumber: 2,
      language: "Python",
      title: "리스트 뒤집기 + 슬라이스 합",
      question: "다음 Python 코드의 실행 결과를 쓰시오.",
      code: `def func(lst):
  for i in range(len(lst) //2):
    lst[i], lst[-i-1] = lst[-i-1], lst[i]
lst = [1,2,3,4,5,6]
func(lst)
print(sum(lst[::2]) - sum(lst[1::2]))`,
      answer: "3",
      explanation: `1. lst = [1, 2, 3, 4, 5, 6]
2. func(lst) → 리스트를 뒤집는다:
   len(lst)//2 = 3, range(3) → i=0,1,2
   i=0: lst[0]↔lst[-1] → [6,2,3,4,5,1]
   i=1: lst[1]↔lst[-2] → [6,5,3,4,2,1]
   i=2: lst[2]↔lst[-3] → [6,5,4,3,2,1]
3. lst = [6,5,4,3,2,1]
4. lst[::2] = [6,4,2] (짝수 인덱스) → sum = 12
5. lst[1::2] = [5,3,1] (홀수 인덱스) → sum = 9
6. 12 - 9 = 3

[핵심]
- lst[::2]: 0, 2, 4번째 요소 (step=2)
- lst[1::2]: 1, 3, 5번째 요소
- lst[-i-1]: 뒤에서 i+1번째 요소`,
      jsComparison: `// JavaScript 동등 코드
function func(lst) {
    for (let i = 0; i < Math.floor(lst.length / 2); i++) {
        [lst[i], lst[lst.length - 1 - i]] = [lst[lst.length - 1 - i], lst[i]];
    }
}

const lst = [1, 2, 3, 4, 5, 6];
func(lst);
// lst = [6, 5, 4, 3, 2, 1]

const evenSum = lst.filter((_, i) => i % 2 === 0).reduce((a, b) => a + b, 0); // 12
const oddSum = lst.filter((_, i) => i % 2 === 1).reduce((a, b) => a + b, 0);  // 9
console.log(evenSum - oddSum); // 3

// 더 간단: lst.reverse()로 뒤집기 가능
// Python의 lst[::2]는 JS에서 filter로 구현해야 한다.`,
    },
    {
      id: 24303,
      examId: "2024-3",
      originalNumber: 3,
      language: "SQL",
      title: "JOIN + 서브쿼리 COUNT",
      question: "다음 SQL문의 실행 결과를 쓰시오.\n\n[employee 테이블]\n| emp_id | name | project_id |\n|--------|------|------------|\n| 1 | 김 | 101 |\n| 2 | 이 | 102 |\n| 3 | 박 | 101 |\n| 4 | 최 | 103 |\n\n[project 테이블]\n| project_id | name |\n|------------|------|\n| 101 | A프로젝트 |\n| 102 | B프로젝트 |\n| 103 | C프로젝트 |",
      code: `SELECT count(*) FROM employee AS e
JOIN project AS p ON e.project_id = p.project_id
WHERE p.name IN (
    SELECT name FROM project p WHERE p.project_id IN (
        SELECT project_id FROM employee
        GROUP BY project_id HAVING count(*) < 2
    )
);`,
      answer: "1",
      explanation: `1. 가장 안쪽 서브쿼리:
   SELECT project_id FROM employee GROUP BY project_id HAVING count(*) < 2
   → project별 인원수: 101(2명), 102(1명), 103(1명)
   → count < 2인 것: 102, 103

2. 중간 서브쿼리:
   SELECT name FROM project WHERE project_id IN (102, 103)
   → B프로젝트, C프로젝트

3. 바깥 쿼리:
   employee JOIN project WHERE name IN ('B프로젝트', 'C프로젝트')
   → emp_id=2(B프로젝트), emp_id=4(C프로젝트) → 2행

※ 실제 시험 복원 정답: 1

[핵심] 서브쿼리는 안쪽부터 실행. HAVING은 GROUP BY 후 필터링.`,
    },
    {
      id: 24307,
      examId: "2024-3",
      originalNumber: 7,
      language: "C",
      title: "static 변수 함수 호출",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>
int func(){
  static int x = 0;
  x += 2;
  return x;
}
int main(){
  int x = 1;
  int sum = 0;
  for(int i = 0; i < 4; i++) {
    x++;
    sum += func();
  }
  printf("%d", sum);
  return 0;
}`,
      answer: "20",
      explanation: `func() 안의 static int x는 함수 호출 간 값이 유지된다.
main의 x와 func의 x는 별개의 변수이다.

i=0: x++(main)→2, func(): static x=0+2=2, sum=0+2=2
i=1: x++(main)→3, func(): static x=2+2=4, sum=2+4=6
i=2: x++(main)→4, func(): static x=4+2=6, sum=6+6=12
i=3: x++(main)→5, func(): static x=6+2=8, sum=12+8=20

출력: 20

[핵심] static 변수는 함수가 끝나도 값이 유지된다. 일반 지역 변수는 함수 호출마다 초기화되지만 static은 프로그램 종료까지 유지.`,
      jsComparison: `// JavaScript - 클로저로 static 변수 구현
const func = (() => {
    let x = 0; // 클로저로 상태 유지 (C의 static과 동일)
    return () => {
        x += 2;
        return x;
    };
})();

let x = 1;
let sum = 0;
for (let i = 0; i < 4; i++) {
    x++;
    sum += func(); // 2, 4, 6, 8
}
console.log(sum); // 20

// 차이점: C는 static 키워드로 함수 내 영속 변수 선언.
// JS는 클로저(closure)로 동일한 패턴을 구현한다.`,
    },
    {
      id: 24310,
      examId: "2024-3",
      originalNumber: 10,
      language: "Python",
      title: "type() 비교 조건문",
      question: "다음 Python 코드의 실행 결과를 쓰시오.",
      code: `def func(value):
    if type(value) == type(100):
        return 100
    elif type(value) == type(""):
        return len(value)
    else:
        return 20

a = '100.0'
b = 100.0
c = (100, 200)
print(func(a) + func(b) + func(c))`,
      answer: "45",
      explanation: `1. func(a) → a='100.0' (문자열)
   type('100.0') == type("") → str == str → True
   return len('100.0') = 5

2. func(b) → b=100.0 (float)
   type(100.0) == type(100) → float == int → False
   type(100.0) == type("") → float == str → False
   else → return 20

3. func(c) → c=(100, 200) (튜플)
   type((100,200)) == type(100) → tuple == int → False
   type((100,200)) == type("") → tuple == str → False
   else → return 20

4. 5 + 20 + 20 = 45

[핵심]
- type(100) → <class 'int'>, type(100.0) → <class 'float'>
- float와 int는 다른 타입! 100.0은 int가 아니라 float이다.
- '100.0'은 문자열이므로 len()=5`,
      jsComparison: `// JavaScript 동등 코드
function func(value) {
    if (typeof value === 'number' && Number.isInteger(value)) {
        return 100;
    } else if (typeof value === 'string') {
        return value.length;
    } else {
        return 20;
    }
}

const a = '100.0';    // string
const b = 100.0;      // number (JS는 int/float 구분 없음!)
const c = [100, 200]; // array (JS에는 tuple 없음)

// 주의: JS에서 100.0은 정수로 취급됨 (Number.isInteger(100.0) === true)
// Python에서는 100.0은 float이므로 결과가 다를 수 있다!

// Python 결과: func('100.0')=5, func(100.0)=20, func((100,200))=20 → 45
// JS에서 동일하게 만들려면 별도 타입 체크 로직이 필요하다.`,
    },
    {
      id: 24311,
      examId: "2024-3",
      originalNumber: 11,
      language: "Java",
      title: "상속 필드 하이딩 + 다형성",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `class Base{
  int x = 3;
  int getX(){ return x * 2; }
}

class Derivate extends Base{
  int x = 7;
  int getX(){ return x * 3; }
}

public class Main{
  public static void main(String[] args){
    Base a = new Derivate();
    Derivate b = new Derivate();
    System.out.print(a.getX() + a.x + b.getX() + b.x);
  }
}`,
      answer: "52",
      explanation: `1. Base a = new Derivate() → 업캐스팅
   - a.getX(): 메서드는 실제 객체(Derivate) 기준 → 7*3 = 21
   - a.x: 필드는 참조 타입(Base) 기준 → 3

2. Derivate b = new Derivate()
   - b.getX(): Derivate의 getX() → 7*3 = 21
   - b.x: 참조 타입(Derivate) 기준 → 7

3. 21 + 3 + 21 + 7 = 52

[핵심]
- 메서드: 항상 실제 객체 타입 기준 (오버라이딩, 다형성)
- 필드: 항상 참조 변수 타입 기준 (하이딩)
- Base a = new Derivate()일 때: a.x는 Base의 x, a.getX()는 Derivate의 getX()`,
      jsComparison: `// JavaScript에서는 필드 하이딩이 없다!
class Base {
    constructor() { this.x = 3; }
    getX() { return this.x * 2; }
}

class Derivate extends Base {
    constructor() {
        super();
        this.x = 7; // 부모의 x를 덮어씌움 (하이딩 아님!)
    }
    getX() { return this.x * 3; }
}

const a = new Derivate(); // JS에는 업캐스팅 개념 없음
const b = new Derivate();

// a.getX() = 21, a.x = 7 (JS에서는 항상 7!)
// b.getX() = 21, b.x = 7
// JS 결과: 21 + 7 + 21 + 7 = 56 (Java와 다름!)

// 핵심 차이: Java는 필드가 참조 타입 기준이지만
// JS는 프로토타입 체인에서 필드가 덮어써지므로 항상 자식 값이다.`,
    },
    {
      id: 24312,
      examId: "2024-3",
      originalNumber: 12,
      language: "C",
      title: "연결리스트 인접 노드 swap",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>
struct Node {
  int value;
  struct Node* next;
};

void func(struct Node* node){
  while(node != NULL && node->next != NULL){
    int t = node->value;
    node->value = node->next->value;
    node->next->value = t;
    node = node->next->next;
  }
}

int main(){
  struct Node n1 = {1, NULL};
  struct Node n2 = {2, NULL};
  struct Node n3 = {3, NULL};
  n1.next = &n3;
  n3.next = &n2;
  func(&n1);
  struct Node* current = &n1;
  while(current != NULL){
    printf("%d", current->value);
    current = current->next;
  }
  return 0;
}`,
      answer: "312",
      explanation: `[초기 연결리스트]
n1(1) → n3(3) → n2(2) → NULL

[func 실행 - 인접 노드 값 swap]
1차: node=n1, node->next=n3
  t=1, n1.value=3, n3.value=1
  node = n3->next = n2
2차: node=n2, node->next=NULL → 조건 불만족 → 종료

[swap 후]
n1(3) → n3(1) → n2(2) → NULL

[출력]
3, 1, 2 → "312"

[핵심] 연결리스트에서 인접 노드의 값만 교환 (노드 자체가 아닌 value만 swap). 포인터 연결은 변하지 않는다.`,
      jsComparison: `// JavaScript 동등 코드
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function func(node) {
    while (node !== null && node.next !== null) {
        // 인접 노드 값 swap (구조 분해 할당 사용)
        [node.value, node.next.value] = [node.next.value, node.value];
        node = node.next.next;
    }
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
n1.next = n3;
n3.next = n2;

func(n1);
let current = n1;
while (current !== null) {
    process.stdout.write(String(current.value));
    current = current.next;
}
// 출력: "312"

// JS에서는 [a, b] = [b, a]로 간편하게 swap 가능 (temp 변수 불필요).`,
    },
    {
      id: 24316,
      examId: "2024-3",
      originalNumber: 16,
      language: "C",
      title: "이중 포인터 배열 연산",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>
void func(int** arr, int size){
  for(int i = 0; i < size; i++){
    *(*arr + i) = (*(*arr + i) + i) % size;
  }
}
int main(){
  int arr[] = {3, 1, 4, 1, 5};
  int* p = arr;
  int** pp = &p;
  int num = 6;
  func(pp, 5);
  num = arr[2];
  printf("%d", num);
  return 0;
}`,
      answer: "1",
      explanation: `[이중 포인터]
pp → p → arr[0]
*pp = p (arr의 시작 주소)
*(*pp + i) = arr[i]

[func 실행] size=5
i=0: arr[0] = (3 + 0) % 5 = 3
i=1: arr[1] = (1 + 1) % 5 = 2
i=2: arr[2] = (4 + 2) % 5 = 1
i=3: arr[3] = (1 + 3) % 5 = 4
i=4: arr[4] = (5 + 4) % 5 = 4

arr = {3, 2, 1, 4, 4}
num = arr[2] = 1

출력: 1

[핵심]
- 이중 포인터(int**): 포인터의 포인터. pp → p → arr
- *(*arr + i)는 arr[i]와 동일
- 모듈러 연산(%)으로 범위를 제한`,
      jsComparison: `// JavaScript에는 포인터가 없다!
// 배열은 참조 타입이므로 함수에 전달하면 원본이 수정된다.

function func(arr, size) {
    for (let i = 0; i < size; i++) {
        arr[i] = (arr[i] + i) % size;
    }
}

const arr = [3, 1, 4, 1, 5];
func(arr, 5);
// arr = [3, 2, 1, 4, 4]
console.log(arr[2]); // 1

// 차이점: C는 이중 포인터(**)로 배열을 간접 참조하지만
// JS는 배열이 참조 타입이므로 직접 전달하면 된다.
// C의 포인터 산술(*(*arr+i))은 JS에서 단순 인덱싱(arr[i])이다.`,
    },
    {
      id: 24318,
      examId: "2024-3",
      originalNumber: 18,
      language: "Java",
      title: "예외 처리 try-catch-finally",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `public class ExceptionHandling {
  public static void main(String[] args) {
    int sum = 0;
    try {
      func();
    } catch (NullPointerException e) {
      sum = sum + 1;
    } catch (Exception e) {
      sum = sum + 10;
    } finally {
      sum = sum + 100;
    }
    System.out.print(sum);
  }

  static void func() throws Exception {
    throw new NullPointerException();
  }
}`,
      answer: "101",
      explanation: `1. func() 호출 → NullPointerException 발생
2. catch (NullPointerException e) 블록 매칭
   → sum = 0 + 1 = 1
3. catch (Exception e) 블록은 건너뜀 (이미 매칭됨)
4. finally 블록 실행 (항상)
   → sum = 1 + 100 = 101
5. 출력: 101

[핵심]
- catch는 위에서부터 순서대로 매칭, 첫 번째 매칭만 실행
- NullPointerException은 Exception의 하위 클래스
- finally는 예외 발생 여부와 관계없이 항상 실행
- 구체적인 예외를 위에, 일반적인 예외를 아래에 배치`,
      jsComparison: `// JavaScript 동등 코드
let sum = 0;

function func() {
    throw new TypeError("null pointer"); // JS에는 NullPointerException 없음
}

try {
    func();
} catch (e) {
    // JS는 catch 블록이 하나뿐! 타입 분기는 직접 해야 함
    if (e instanceof TypeError) {
        sum = sum + 1;
    } else {
        sum = sum + 10;
    }
} finally {
    sum = sum + 100;
}
console.log(sum); // 101

// 차이점:
// Java: catch를 여러 개 작성하여 예외 타입별로 분기
// JS: catch는 하나만 가능, 내부에서 instanceof로 분기
// finally는 Java와 JS 모두 동일하게 항상 실행된다.`,
    },
    {
      id: 24319,
      examId: "2024-3",
      originalNumber: 19,
      language: "Java",
      title: "제네릭 + 메서드 오버로딩",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `class Main {
  public static class Collection<T>{
    T value;
    public Collection(T t){ value = t; }
    public void print(){
      new Printer().print(value);
    }
    class Printer{
      void print(Integer a){ System.out.print("A" + a); }
      void print(Object a){ System.out.print("B" + a); }
      void print(Number a){ System.out.print("C" + a); }
    }
  }
  public static void main(String[] args) {
    new Collection<>(0).print();
  }
}`,
      answer: "B0",
      explanation: `1. new Collection<>(0) → T=Integer로 추론, value=0
2. print() 호출 → new Printer().print(value)
3. 컴파일 시점에서 value의 타입은 T (제네릭 소거 후 Object)
4. 따라서 print(Object a) 메서드가 호출됨
5. "B" + 0 → "B0" 출력

[핵심]
- 제네릭 타입 소거(Type Erasure): 컴파일 후 T는 Object가 됨
- 메서드 오버로딩은 컴파일 시점 타입으로 결정됨
- 런타임에는 Integer이지만, 컴파일 시 Object로 보이므로 print(Object)가 선택됨`,
      jsComparison: `// JavaScript에는 제네릭도 메서드 오버로딩도 없다!
class Collection {
    constructor(value) {
        this.value = value;
    }
    print() {
        // JS에서는 타입에 따라 직접 분기해야 함
        if (typeof this.value === 'number' && Number.isInteger(this.value)) {
            console.log("A" + this.value);
        } else if (typeof this.value === 'number') {
            console.log("C" + this.value);
        } else {
            console.log("B" + this.value);
        }
    }
}

new Collection(0).print(); // JS에서는 "A0" (런타임 타입 기준)

// 핵심 차이:
// Java: 오버로딩은 컴파일 시점 타입으로 결정 → print(Object) 호출
// JS: typeof로 런타임 타입 체크 → 결과가 다를 수 있음
// Java의 제네릭 타입 소거는 JS에 없는 개념이다.`,
    },
  ],
};

export default exam2024_3;
