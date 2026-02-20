import { ExamData } from "./types";

const exam2020_2: ExamData = {
  id: "2020-2",
  title: "2020년 2회 정보처리기사 실기",
  questions: [
    {
      id: 2022,
      examId: "2020-2",
      originalNumber: 2,
      language: "Python",
      title: "집합(Set) 연산 - add, remove, update",
      question: "다음 Python 코드의 실행 결과를 쓰시오.",
      code: `a = {'일본', '중국', '한국'}
a.add('베트남')
a.add('중국')
a.remove('일본')
a.update({'홍콩', '태국'})
print(a)`,
      answer: "{'중국', '한국', '베트남', '홍콩', '태국'}",
      explanation: `1. a = {'일본', '중국', '한국'} → 집합 초기화
2. a.add('베트남') → a = {'일본', '중국', '한국', '베트남'}
3. a.add('중국') → 이미 존재하므로 변화 없음 (집합은 중복 허용 안 함)
   a = {'일본', '중국', '한국', '베트남'}
4. a.remove('일본') → '일본' 제거
   a = {'중국', '한국', '베트남'}
5. a.update({'홍콩', '태국'}) → 여러 원소를 한번에 추가
   a = {'중국', '한국', '베트남', '홍콩', '태국'}
6. print(a) → {'중국', '한국', '베트남', '홍콩', '태국'}

※ 집합(set)은 순서가 없으므로 출력 순서는 실행마다 달라질 수 있음

[핵심]
- add(): 원소 1개 추가 (중복 시 무시)
- remove(): 원소 제거 (없으면 에러)
- update(): 여러 원소를 한번에 추가 (합집합)
- 집합은 중복을 허용하지 않는다.`,
      jsComparison: `// JavaScript Set 동등 코드
let a = new Set(['일본', '중국', '한국']);

// Python: a.add('베트남') → JS: a.add('베트남')
a.add('베트남');
// Python: a.add('중국') → 중복이므로 무시 (JS도 동일)
a.add('중국');
// Python: a.remove('일본') → JS: a.delete('일본')
a.delete('일본');
// Python: a.update({'홍콩', '태국'}) → JS: 직접 반복 추가
for (const item of ['홍콩', '태국']) {
    a.add(item);
}

console.log(a); // Set(5) { '중국', '한국', '베트남', '홍콩', '태국' }

// 차이점:
// - Python: set은 {} 리터럴로 생성, JS: new Set([])으로 생성
// - Python: remove() (없으면 에러) / discard() (없어도 무시)
// - JS: delete() (없어도 에러 없음, false 반환)
// - Python: update()로 여러 원소 추가, JS: 직접 반복 필요
// - Python: print(set)은 {원소들} 형태, JS: console.log(set)은 Set(n) {원소들}`,
    },
    {
      id: 2025,
      examId: "2020-2",
      originalNumber: 5,
      language: "Java",
      title: "다형성 (Polymorphism) - 빈칸 채우기",
      question:
        "다음 Java 코드에서 괄호 안에 들어갈 키워드를 쓰시오.\n\nParent 클래스의 show() 메서드를 Child 클래스에서 오버라이딩하고, Parent 타입 변수로 Child 객체를 생성하여 show()를 호출할 때, 빈칸에 들어갈 키워드는?",
      code: `class Parent {
    void show() {
        System.out.println("Parent");
    }
}

class Child extends Parent {
    void show() {
        System.out.println("Child");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent a = ( ) Child();
        a.show();
    }
}`,
      answer: "new",
      explanation: `1. Parent a = new Child(); 에서 빈칸은 "new" 키워드
2. new는 Java에서 객체를 생성할 때 사용하는 키워드
3. Parent a = new Child(); → 업캐스팅 (부모 타입 참조변수에 자식 객체 대입)
4. a.show() 호출 시 → 실제 객체(Child)의 show() 실행 → "Child" 출력

[핵심]
- new: 객체 생성 키워드
- 업캐스팅: 부모 타입 변수로 자식 객체 참조 가능
- 다형성: 메서드 호출 시 실제 객체의 오버라이딩된 메서드가 실행됨`,
      jsComparison: `// JavaScript 다형성 동등 코드
class Parent {
    show() {
        console.log("Parent");
    }
}

class Child extends Parent {
    show() {
        console.log("Child");
    }
}

// Java: Parent a = new Child();
// JS: const a = new Child(); (타입 선언 불필요)
const a = new Child();
a.show(); // "Child"

// 차이점:
// - Java: 참조 타입을 명시 (Parent a = new Child())
// - JS: 타입 선언 없음 (const a = new Child())
// - Java: class 키워드에 접근 제어자(public, private 등) 사용
// - JS: class 키워드는 동일하지만 접근 제어자 없음 (ES2022부터 # prefix로 private 가능)
// - 둘 다 new 키워드로 객체 생성`,
    },
    {
      id: 2026,
      examId: "2020-2",
      originalNumber: 6,
      language: "SQL",
      title: "SELECT WHERE IN 조건",
      question:
        "다음 SQL문의 실행 결과를 쓰시오.\n\n[학생 테이블]\n| 학번 | 이름   | 학년 |\n|------|--------|------|\n| 1000 | 김이름 | 1    |\n| 2000 | 박이름 | 2    |\n| 3000 | 허이름 | 3    |\n| 4000 | 조이름 | 4    |",
      code: `SELECT 학번, 이름
FROM 학생
WHERE 학년 IN (3, 4);`,
      answer: "3000 허이름 4000 조이름",
      explanation: `1. 학생 테이블에서 학년이 3 또는 4인 행을 조회
2. WHERE 학년 IN (3, 4) → 학년이 3이거나 4인 행 선택
3. 조건에 맞는 행:
   - 학번=3000, 이름=허이름 (학년=3) ✓
   - 학번=4000, 이름=조이름 (학년=4) ✓
4. SELECT 학번, 이름 → 학번과 이름 컬럼만 출력
5. 결과:
   3000 허이름
   4000 조이름

[핵심]
- IN (값1, 값2): WHERE 절에서 여러 값을 OR로 비교하는 간편 문법
- WHERE 학년 IN (3, 4)는 WHERE 학년=3 OR 학년=4와 동일
- SELECT로 원하는 컬럼만 지정하여 조회할 수 있다.`,
    },
    {
      id: 20219,
      examId: "2020-2",
      originalNumber: 19,
      language: "Java",
      title: "상속 + super 키워드",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `class A {
    private int a;

    public A(int a) {
        this.a = a;
    }

    public void display() {
        System.out.print("a=" + a);
    }
}

class B extends A {
    public B(int a) {
        super(a);
    }
}

public class Main {
    public static void main(String[] args) {
        B obj = new B(10);
        obj.display();
    }
}`,
      answer: "a=10",
      explanation: `1. B obj = new B(10) → B 클래스 생성자 호출, 매개변수 a=10
2. B 생성자 내부: super(a) → 부모 클래스 A의 생성자 A(10) 호출
3. A 생성자: this.a = 10 → private 필드 a에 10 저장
4. obj.display() → B에 display()가 없으므로 A의 display() 실행
5. "a=" + a → "a=" + 10 → "a=10" 출력

[핵심]
- super(): 부모 클래스의 생성자를 호출
- super(a): 부모 클래스의 매개변수가 있는 생성자를 호출
- private 필드는 자식 클래스에서 직접 접근 불가하지만, 부모의 메서드를 통해 간접 접근 가능
- 자식 클래스에 메서드가 없으면 부모 클래스의 메서드가 호출됨 (상속)`,
      jsComparison: `// JavaScript 상속 + super 동등 코드
class A {
    #a; // ES2022 private 필드 (Java의 private과 유사)

    constructor(a) {
        this.#a = a;
    }

    display() {
        // Java: System.out.print("a=" + a)
        process.stdout.write("a=" + this.#a);
    }
}

class B extends A {
    constructor(a) {
        // Java: super(a) → JS도 동일하게 super(a) 사용
        super(a);
    }
}

const obj = new B(10);
obj.display(); // "a=10"

// 차이점:
// - Java: private int a → JS: #a (ES2022 private 필드)
// - Java: this.a → JS: this.#a (private 접근)
// - Java: super(a)와 JS: super(a)는 동일한 문법
// - Java: 생성자 이름 = 클래스명, JS: constructor 키워드 사용
// - Java: extends 키워드와 JS: extends 키워드는 동일`,
    },
  ],
};

export default exam2020_2;
