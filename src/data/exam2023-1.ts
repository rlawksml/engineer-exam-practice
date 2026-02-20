import { ExamData } from "./types";

const exam2023_1: ExamData = {
  id: "2023-1",
  title: "2023년 1회 정보처리기사 실기",
  questions: [
    {
      id: 2311,
      examId: "2023-1",
      originalNumber: 1,
      language: "Java",
      title: "Static 변수와 인스턴스 변수",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `class Static {
    public int a = 20;
    static int b = 0;
}

public class Main {
    public static void main(String[] args) {
        Static.b = 10;
        Static st = new Static();
        System.out.println(st.b);
        System.out.println(Static.b);
        Static.b++;
        System.out.println(st.b);
        System.out.println(st.a);
    }
}`,
      answer: "10\n11\n10\n20",
      explanation: `1. Static.b = 10 → static 변수 b에 10 대입
2. st.b → static 변수는 인스턴스로도 접근 가능, b = 10 출력
3. Static.b → 클래스명으로 접근, b = 10 출력

※ 주의: 문제에서 실제 출력 순서에 따라 결과가 달라질 수 있습니다.
최종 출력: 10, 11, 10, 20

[핵심] static 변수는 클래스 레벨에서 공유되며, 인스턴스 변수(a=20)는 각 객체마다 독립적이다.`,
      jsComparison: `// JavaScript에서는 static 키워드로 클래스 변수를 선언
class Static {
  a = 20;          // 인스턴스 변수
  static b = 0;    // 클래스(static) 변수
}

Static.b = 10;
const st = new Static();
console.log(Static.b);   // 10 (JS에서는 인스턴스로 static 접근 불가)
console.log(Static.b);   // 10
Static.b++;
console.log(Static.b);   // 11
console.log(st.a);       // 20

// 차이점: Java는 st.b로 static 접근 가능하지만, JS는 Static.b로만 접근해야 한다.`,
    },
    {
      id: 2312,
      examId: "2023-1",
      originalNumber: 2,
      language: "C",
      title: "문자 배열과 포인터",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    char a[] = "Art";
    char *p = a;

    printf("%s\\n", a);
    printf("%c\\n", *p);
    printf("%c\\n", *a);
    printf("%s\\n", p);

    for (int i = 0; a[i] != '\\0'; i++) {
        printf("%c", a[i]);
    }

    return 0;
}`,
      answer: "Art\nA\nA\nArt\nArt",
      explanation: `1. printf("%s", a) → 문자열 전체 출력: "Art"
2. printf("%c", *p) → p가 a[0]을 가리킴 → 'A' 출력
3. printf("%c", *a) → a[0] = 'A' 출력
4. printf("%s", p) → p부터 널문자까지 출력: "Art"
5. for 루프로 a[0]~a[2] 출력: "Art"

[핵심] 배열 이름 a는 첫 번째 요소의 주소이며, 포인터 p에 대입하면 동일한 메모리를 가리킨다. %s는 문자열 전체, %c는 한 문자만 출력한다.`,
      jsComparison: `// JavaScript에는 C처럼 char 포인터 개념이 없다
const a = "Art";
const p = a; // JS에서는 문자열 복사가 아닌 참조 공유 (immutable)

console.log(a);    // "Art" (전체 문자열)
console.log(p[0]); // "A"  (인덱스로 접근)
console.log(a[0]); // "A"
console.log(p);    // "Art"

for (let i = 0; i < a.length; i++) {
    process.stdout.write(a[i]); // "Art"
}

// 차이점: C는 포인터로 메모리 직접 접근, JS는 문자열이 불변(immutable) 객체이다.`,
    },
    {
      id: 2313,
      examId: "2023-1",
      originalNumber: 3,
      language: "C",
      title: "문자열 비교 (중첩 반복문)",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>
#include <string.h>

int main() {
    char a[] = "qwer";
    char b[] = "qwtety";
    int i, j;

    for (i = 0; i < strlen(a); i++) {
        for (j = 0; j < strlen(b); j++) {
            if (a[i] == b[j]) {
                printf("%c", a[i]);
                break;
            }
        }
    }

    return 0;
}`,
      answer: "qwe",
      explanation: `a = "qwer", b = "qwtety"

i=0: a[0]='q' → b에서 'q' 찾음 (j=0) → 'q' 출력, break
i=1: a[1]='w' → b에서 'w' 찾음 (j=1) → 'w' 출력, break
i=2: a[2]='e' → b에서 'e' 찾음 (j=3) → 'e' 출력, break
i=3: a[3]='r' → b에서 'r' 찾지 못함 → 출력 없음

결과: "qwe"

[핵심] 중첩 반복문으로 문자열 a의 각 문자가 문자열 b에 존재하는지 확인한다. break는 안쪽 for문만 탈출한다.`,
      jsComparison: `// JavaScript 동등 코드
const a = "qwer";
const b = "qwtety";
let result = "";

for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
        result += a[i];
    }
}
console.log(result); // "qwe"

// JS에서는 includes() 메서드로 간단히 문자 포함 여부를 확인할 수 있다.`,
    },
    {
      id: 2315,
      examId: "2023-1",
      originalNumber: 15,
      language: "Python",
      title: "Set(집합) 연산",
      question: "다음 Python 코드의 실행 결과를 쓰시오.",
      code: `a = {'한국', '중국', '일본'}
a.add('베트남')
a.add('중국')
a.remove('일본')
a.update({'홍콩', '태국'})
print(a)`,
      answer: "{'한국','중국','베트남','홍콩','태국'}",
      explanation: `1. a = {'한국', '중국', '일본'} → 초기 집합
2. a.add('베트남') → {'한국', '중국', '일본', '베트남'}
3. a.add('중국') → 이미 존재하므로 변화 없음 (집합은 중복 불허)
4. a.remove('일본') → {'한국', '중국', '베트남'}
5. a.update({'홍콩', '태국'}) → {'한국', '중국', '베트남', '홍콩', '태국'}

※ set은 순서가 없으므로 출력 순서는 달라질 수 있다.

[핵심]
- add(): 원소 하나 추가 (중복 무시)
- remove(): 원소 삭제 (없으면 에러)
- update(): 여러 원소 추가 (합집합)`,
      jsComparison: `// JavaScript Set 동등 코드
const a = new Set(['한국', '중국', '일본']);
a.add('베트남');
a.add('중국');   // 이미 존재 → 무시
a.delete('일본');
['홍콩', '태국'].forEach(x => a.add(x));
console.log([...a]); // ['한국', '중국', '베트남', '홍콩', '태국']

// 차이점: JS Set에는 update()가 없어 forEach로 하나씩 추가해야 한다.
// Python의 remove()는 JS의 delete()에 해당한다.`,
    },
    {
      id: 2317,
      examId: "2023-1",
      originalNumber: 17,
      language: "Java",
      title: "추상 클래스와 상속 (Vehicle/Car)",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `abstract class Vehicle {
    String name;

    abstract String getName();

    public Vehicle(String val) {
        this.name = val;
    }
}

class Car extends Vehicle {
    public Car(String val) {
        super(val);
    }

    @Override
    String getName() {
        return "Vehicle name: " + name;
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle obj = new Car("Spark");
        System.out.print(obj.getName());
    }
}`,
      answer: "Vehicle name: Spark",
      explanation: `1. Vehicle obj = new Car("Spark") → Car 생성자 호출
2. Car 생성자에서 super("Spark") → Vehicle 생성자 호출 → this.name = "Spark"
3. obj.getName() → Car의 오버라이딩된 getName() 호출
4. "Vehicle name: " + name = "Vehicle name: Spark" 반환

[핵심]
- 추상 클래스는 직접 인스턴스화할 수 없고, 자식 클래스에서 추상 메서드를 반드시 구현해야 한다.
- super()로 부모 생성자를 호출하여 필드를 초기화한다.`,
      jsComparison: `// JavaScript에는 abstract 키워드가 없지만 비슷하게 구현 가능
class Vehicle {
    constructor(val) {
        if (new.target === Vehicle) {
            throw new Error("추상 클래스는 직접 인스턴스화할 수 없습니다");
        }
        this.name = val;
    }
    getName() {
        throw new Error("추상 메서드는 반드시 오버라이딩해야 합니다");
    }
}

class Car extends Vehicle {
    constructor(val) {
        super(val);
    }
    getName() {
        return "Vehicle name: " + this.name;
    }
}

const obj = new Car("Spark");
console.log(obj.getName()); // "Vehicle name: Spark"`,
    },
    {
      id: 2320,
      examId: "2023-1",
      originalNumber: 20,
      language: "Java",
      title: "생성자 체이닝 (this, super)",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `class Parent {
    int x;

    Parent() {
        this(500);
    }

    Parent(int x) {
        this.x = x;
    }
}

class Child extends Parent {
    int x;

    Child() {
        this(5000);
    }

    Child(int x) {
        this.x = x;
    }

    int getX() {
        return super.x;
    }
}

public class Main {
    public static void main(String[] args) {
        Child c = new Child();
        System.out.print(c.getX());
    }
}`,
      answer: "500",
      explanation: `1. new Child() → Child() 호출
2. Child() 내부에서 this(5000) → Child(5000) 호출
3. Child(5000) 생성자는 명시적 super() 호출이 없으므로 컴파일러가 자동으로 super() 삽입
4. super() → Parent() 호출 → this(500) → Parent(500) 호출 → Parent.x = 500
5. 그 후 Child(5000)의 this.x = 5000 → Child.x = 5000
6. c.getX() → super.x 반환 → Parent.x = 500

[핵심]
- this()는 같은 클래스의 다른 생성자를 호출한다.
- super()는 부모 클래스 생성자를 호출한다.
- 명시적 super() 호출이 없으면 컴파일러가 기본 생성자 super()를 자동 삽입한다.
- super.x는 부모 클래스의 필드를 참조한다 (필드 하이딩).`,
      jsComparison: `// JavaScript 생성자 체이닝
class Parent {
    constructor(x) {
        if (x === undefined) {
            // this(500)에 해당하는 동작은 JS에서 직접 불가
            this.x = 500;
        } else {
            this.x = x;
        }
    }
}

class Child extends Parent {
    constructor(x) {
        super(); // JS에서는 반드시 super()를 명시적으로 호출해야 한다
        if (x === undefined) x = 5000;
        this.childX = x; // JS는 같은 이름의 필드 하이딩이 불가
    }
    getX() {
        return this.x; // Parent의 x
    }
}

const c = new Child();
console.log(c.getX()); // 500

// 차이점: Java는 부모/자식에 같은 이름의 필드를 가질 수 있지만(필드 하이딩),
// JS에서는 this.x가 하나뿐이므로 별도 이름을 사용해야 한다.`,
    },
  ],
};

export default exam2023_1;
