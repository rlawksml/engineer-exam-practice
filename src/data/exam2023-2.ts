import { ExamData } from "./types";

const exam2023_2: ExamData = {
  id: "2023-2",
  title: "2023년 2회 정보처리기사 실기",
  questions: [
    {
      id: 2325,
      examId: "2023-2",
      originalNumber: 5,
      language: "C",
      title: "switch문 break 누락 (fall-through)",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    int n[] = {73, 95, 82};
    int sum = 0;

    for (int i = 0; i < 3; i++) {
        sum += n[i];
    }

    switch (sum / 30) {
        case 10:
            printf("A");
        case 9:
            printf("A");
        case 8:
            printf("B");
        case 7:
            printf("C");
        case 6:
            printf("D");
            break;
        default:
            printf("F");
    }

    return 0;
}`,
      answer: "BCD",
      explanation: `1. sum = 73 + 95 + 82 = 250
2. sum / 30 = 250 / 30 = 8 (정수 나눗셈)
3. switch(8) → case 8에 매칭
4. case 8: "B" 출력 → break가 없으므로 fall-through
5. case 7: "C" 출력 → break가 없으므로 fall-through
6. case 6: "D" 출력 → break → switch 탈출

결과: "BCD"

[핵심] switch문에서 break가 없으면 다음 case로 계속 실행된다 (fall-through). 의도하지 않은 fall-through는 흔한 버그 원인이다.`,
      jsComparison: `// JavaScript switch도 동일하게 fall-through 발생
const n = [73, 95, 82];
let sum = n.reduce((a, b) => a + b, 0); // 250

switch (Math.floor(sum / 30)) { // JS도 정수 나눗셈 위해 Math.floor 필요
    case 10:
        process.stdout.write("A");
    case 9:
        process.stdout.write("A");
    case 8:
        process.stdout.write("B");
    case 7:
        process.stdout.write("C");
    case 6:
        process.stdout.write("D");
        break;
    default:
        process.stdout.write("F");
}
// 출력: "BCD"

// 공통점: JS와 C 모두 switch fall-through 동작이 동일하다.
// 차이점: C는 정수 나눗셈이 자동이지만, JS는 Math.floor()가 필요하다.`,
    },
    {
      id: 2327,
      examId: "2023-2",
      originalNumber: 7,
      language: "C",
      title: "4의 배수 개수 세기",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    int count = 0;

    for (int i = 1; i <= 2023; i++) {
        if (i % 4 == 0) {
            count++;
        }
    }

    printf("%d", count);
    return 0;
}`,
      answer: "505",
      explanation: `1. 1부터 2023까지 반복하면서 4의 배수인지 확인
2. 4의 배수: 4, 8, 12, ..., 2020
3. 2020 / 4 = 505
4. 2023 이하에서 가장 큰 4의 배수는 2020
5. 따라서 count = 505

[핵심] n 이하의 k의 배수 개수 = n / k (정수 나눗셈). 2023 / 4 = 505.`,
      jsComparison: `// JavaScript 동등 코드
let count = 0;
for (let i = 1; i <= 2023; i++) {
    if (i % 4 === 0) count++;
}
console.log(count); // 505

// 더 간단한 방법
console.log(Math.floor(2023 / 4)); // 505

// 차이점: JS에서는 === (엄격 비교)를 사용하고, 정수 나눗셈에 Math.floor()가 필요하다.`,
    },
    {
      id: 2314,
      examId: "2023-2",
      originalNumber: 14,
      language: "Java",
      title: "String 비교 (==, equals)",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `public class Main {
    public static void main(String[] args) {
        String str1 = "Hello";
        String str2 = "Hello";
        String str3 = new String("Hello");
        String str4 = new String("Hello");

        System.out.println(str1 == str2);
        System.out.println(str1 == str3);
        System.out.println(str1.equals(str3));
        System.out.println(str3.equals(str4));
    }
}`,
      answer: "true\nfalse\ntrue\ntrue",
      explanation: `1. str1 == str2 → true
   - 둘 다 문자열 리터럴 "Hello" → String Pool에서 같은 객체 참조
2. str1 == str3 → false
   - str3은 new String()으로 힙에 새 객체 생성 → 다른 참조
3. str1.equals(str3) → true
   - equals()는 값(내용)을 비교 → 둘 다 "Hello"이므로 true
4. str3.equals(str4) → true
   - equals()는 값 비교 → 둘 다 "Hello"이므로 true

[핵심]
- ==: 참조(주소) 비교
- equals(): 값(내용) 비교
- 문자열 리터럴은 String Pool에서 공유, new String()은 힙에 새 객체 생성.`,
      jsComparison: `// JavaScript 문자열 비교
const str1 = "Hello";
const str2 = "Hello";
const str3 = new String("Hello");

console.log(str1 === str2);      // true (원시 타입 값 비교)
console.log(str1 === str3);      // false (원시 vs 객체)
console.log(str1 == str3);       // true (== 는 타입 변환 후 비교)

// 차이점: JS에서 문자열 리터럴은 원시 타입이므로 ===로 값 비교가 가능하다.
// Java의 equals()에 해당하는 별도 메서드가 필요하지 않다.
// 단, new String()은 객체이므로 ===에서 false가 된다.
// JS에서는 new String() 사용을 권장하지 않는다.`,
    },
    {
      id: 2319,
      examId: "2023-2",
      originalNumber: 19,
      language: "Python",
      title: "문자열 슬라이싱",
      question: "다음 Python 코드의 실행 결과를 쓰시오.",
      code: `a = "engineer information processing"
print(a[:3] + a[4:6] + a[28:])`,
      answer: "engneing",
      explanation: `a = "engineer information processing"

1. a[:3] → 인덱스 0~2 → "eng"
2. a[4:6] → 인덱스 4~5 → "ne"
3. a[28:] → 인덱스 28부터 끝까지 → "ing"

인덱스 확인:
e(0) n(1) g(2) i(3) n(4) e(5) e(6) r(7) (8)
i(9) n(10) f(11) o(12) r(13) m(14) a(15) t(16) i(17) o(18) n(19) (20)
p(21) r(22) o(23) c(24) e(25) s(26) s(27) i(28) n(29) g(30)

결과: "eng" + "ne" + "ing" = "engneing"

[핵심] Python 슬라이싱 a[start:end]는 start부터 end-1까지 추출한다. start 생략 시 0, end 생략 시 끝까지.`,
      jsComparison: `// JavaScript 문자열 슬라이싱
const a = "engineer information processing";
console.log(a.slice(0, 3) + a.slice(4, 6) + a.slice(28));
// "eng" + "ne" + "ing" = "engneing"

// 공통점: JS의 slice()와 Python의 슬라이싱은 동일한 start:end 규칙을 따른다.
// Python: a[start:end] = JS: a.slice(start, end)
// Python: a[:3] = JS: a.slice(0, 3)
// Python: a[28:] = JS: a.slice(28)`,
    },
  ],
};

export default exam2023_2;
