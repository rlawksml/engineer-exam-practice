import { ExamData } from "./types";

const exam2023_3: ExamData = {
  id: "2023-3",
  title: "2023년 3회 정보처리기사 실기",
  questions: [
    {
      id: 2331,
      examId: "2023-3",
      originalNumber: 1,
      language: "Java",
      title: "상속과 메서드 오버라이딩 (super, this)",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `class A {
    void draw() {
        System.out.print("B");
        draw2();
    }
    void draw2() {
        System.out.print("C");
    }
}

class B extends A {
    void draw() {
        super.draw();
        System.out.print("C");
        this.draw2();
    }
    void draw2() {
        System.out.print("D");
    }
}

public class Main {
    public static void main(String[] args) {
        A b = new B();
        b.draw();
    }
}`,
      answer: "BDCDD",
      explanation: `1. A b = new B() → 업캐스팅. 실제 객체는 B
2. b.draw() → B의 draw() 호출 (다형성)
3. B.draw() 내부:
   a) super.draw() → A의 draw() 호출
      - "B" 출력
      - draw2() 호출 → 실제 객체가 B이므로 B의 draw2() 호출 → "D" 출력
   b) "C" 출력
   c) this.draw2() → B의 draw2() 호출 → "D" 출력

결과: B → D → C → D → D...

실제 추적: "BDCDD"

[핵심]
- super.draw()는 부모의 draw()를 호출하지만, 그 안에서 호출되는 draw2()는 오버라이딩된 자식의 메서드가 호출된다.
- this.draw2()는 현재 객체(B)의 draw2()를 호출한다.`,
      jsComparison: `// JavaScript 상속
class A {
    draw() {
        process.stdout.write("B");
        this.draw2(); // JS에서도 동적 바인딩
    }
    draw2() {
        process.stdout.write("C");
    }
}

class B extends A {
    draw() {
        super.draw();      // A의 draw() 호출
        process.stdout.write("C");
        this.draw2();      // B의 draw2() 호출
    }
    draw2() {
        process.stdout.write("D");
    }
}

const b = new B();
b.draw(); // "BDCDD"

// 공통점: JS와 Java 모두 메서드 호출 시 실제 객체의 메서드가 호출된다 (동적 바인딩).
// super.method()로 부모 메서드를 명시적으로 호출할 수 있다.`,
    },
    {
      id: 2334,
      examId: "2023-3",
      originalNumber: 4,
      language: "C",
      title: "완전수(Perfect Number) 합 구하기",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int isPerfect(int n) {
    int sum = 0;
    for (int i = 1; i < n; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    return sum == n;
}

int main() {
    int total = 0;

    for (int i = 2; i <= 100; i++) {
        if (isPerfect(i)) {
            total += i;
        }
    }

    printf("%d", total);
    return 0;
}`,
      answer: "34",
      explanation: `완전수(Perfect Number): 자기 자신을 제외한 약수의 합이 자기 자신과 같은 수

2~100 범위의 완전수:
- 6: 약수 1+2+3 = 6 ✓
- 28: 약수 1+2+4+7+14 = 28 ✓

total = 6 + 28 = 34

참고: 다음 완전수는 496 (100 범위 초과)

[핵심] 완전수 판별: n의 진약수(1~n-1 중 약수)의 합이 n과 같으면 완전수이다.`,
      jsComparison: `// JavaScript 완전수 구하기
function isPerfect(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) sum += i;
    }
    return sum === n;
}

let total = 0;
for (let i = 2; i <= 100; i++) {
    if (isPerfect(i)) total += i;
}
console.log(total); // 34

// 공통점: 로직이 거의 동일하다. JS에서는 ===로 비교한다.`,
    },
    {
      id: 2338,
      examId: "2023-3",
      originalNumber: 8,
      language: "C",
      title: "팩토리얼 (재귀함수)",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    printf("%d", factorial(7));
    return 0;
}`,
      answer: "5040",
      explanation: `factorial(7) = 7 * factorial(6)
              = 7 * 6 * factorial(5)
              = 7 * 6 * 5 * factorial(4)
              = 7 * 6 * 5 * 4 * factorial(3)
              = 7 * 6 * 5 * 4 * 3 * factorial(2)
              = 7 * 6 * 5 * 4 * 3 * 2 * factorial(1)
              = 7 * 6 * 5 * 4 * 3 * 2 * 1
              = 5040

[핵심] 팩토리얼 재귀: f(n) = n * f(n-1), 기저 조건 n≤1이면 1 반환. 재귀 호출의 대표적인 예시이다.`,
      jsComparison: `// JavaScript 팩토리얼
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(7)); // 5040

// 공통점: 재귀 로직이 완전히 동일하다.
// 차이점: JS는 큰 수에서 정밀도 문제가 발생할 수 있으며, BigInt를 사용해야 할 수 있다.`,
    },
    {
      id: 2310,
      examId: "2023-3",
      originalNumber: 10,
      language: "C",
      title: "문자 포인터와 포인터 연산",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    char *p = "KOREA";

    printf("%s\\n", p);
    printf("%s\\n", p + 1);
    printf("%c\\n", *p);
    printf("%c\\n", *(p + 3));
    printf("%c\\n", *p + 4);

    return 0;
}`,
      answer: "KOREA\nOREA\nK\nE\nO",
      explanation: `p = "KOREA" (p는 'K'의 주소를 가리킴)

인덱스: K(0) O(1) R(2) E(3) A(4)

1. %s, p → p부터 널문자까지 출력: "KOREA"
2. %s, p+1 → p+1('O')부터 출력: "OREA"
3. %c, *p → p가 가리키는 문자: 'K'
4. %c, *(p+3) → p+3이 가리키는 문자: 'E'
5. %c, *p+4 → *p='K'(ASCII 75) + 4 = 79 = 'O'

[핵심]
- %s와 포인터: 해당 주소부터 널문자까지 문자열 출력
- *p: 포인터가 가리키는 값 (역참조)
- *(p+n): n번째 뒤 문자
- *p+n: 역참조한 값(ASCII)에 n을 더한 문자`,
      jsComparison: `// JavaScript 동등 코드
const p = "KOREA";

console.log(p);              // "KOREA" (%s, p)
console.log(p.slice(1));     // "OREA"  (%s, p+1)
console.log(p[0]);           // "K"     (%c, *p)
console.log(p[3]);           // "E"     (%c, *(p+3))
console.log(String.fromCharCode(p.charCodeAt(0) + 4)); // "O" (%c, *p+4)

// 차이점: C는 포인터 연산으로 문자열을 다루지만,
// JS는 인덱스 접근과 slice()로 동일한 결과를 얻는다.
// *p+4 같은 ASCII 연산은 JS에서 charCodeAt/fromCharCode를 사용한다.`,
    },
    {
      id: 2311,
      examId: "2023-3",
      originalNumber: 11,
      language: "Java",
      title: "오버라이딩과 재귀 호출",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `class Parent {
    int compute(int n) {
        if (n <= 1) return n;
        return compute(n - 1) + compute(n - 2);
    }
}

class Child extends Parent {
    int compute(int n) {
        if (n <= 1) return n;
        return compute(n - 1) + compute(n - 3);
    }
}

public class Main {
    public static void main(String[] args) {
        Parent obj = new Child();
        System.out.print(obj.compute(7));
    }
}`,
      answer: "2",
      explanation: `obj는 Child 타입이므로 Child의 compute()가 호출된다.
Child.compute(n) = compute(n-1) + compute(n-3) (n>1일 때)

재귀 추적:
compute(0) = 0
compute(1) = 1
compute(2) = compute(1) + compute(-1) → n≤1이므로 compute(-1)=-1 → 1+(-1) = 0
compute(3) = compute(2) + compute(0) = 0 + 0 = 0
compute(4) = compute(3) + compute(1) = 0 + 1 = 1
compute(5) = compute(4) + compute(2) = 1 + 0 = 1
compute(6) = compute(5) + compute(3) = 1 + 0 = 1
compute(7) = compute(6) + compute(4) = 1 + 1 = 2

결과: 2

[핵심] 오버라이딩된 메서드 내에서의 재귀 호출은 자식 클래스의 메서드를 호출한다. 기저 조건과 재귀식을 정확히 추적해야 한다.`,
      jsComparison: `// JavaScript 오버라이딩과 재귀
class Parent {
    compute(n) {
        if (n <= 1) return n;
        return this.compute(n - 1) + this.compute(n - 2);
    }
}

class Child extends Parent {
    compute(n) {
        if (n <= 1) return n;
        return this.compute(n - 1) + this.compute(n - 3);
    }
}

const obj = new Child();
console.log(obj.compute(7)); // 2

// 공통점: JS도 오버라이딩된 메서드의 재귀 호출이 자식 클래스 메서드를 사용한다.
// 차이점: JS에서는 this.compute()로 명시적으로 호출해야 한다.`,
    },
  ],
};

export default exam2023_3;
