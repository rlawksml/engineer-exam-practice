import { ExamData } from "./types";

const exam2021_2: ExamData = {
  id: "2021-2",
  title: "2021년 2회 정보처리기사 실기",
  questions: [
    {
      id: 2207,
      examId: "2021-2",
      originalNumber: 7,
      language: "Python",
      title: "비트 시프트 연산과 반복문",
      question:
        "다음 Python 코드의 실행 결과를 쓰시오.",
      code: `a = 100
result = 0
for i in range(1, 3):
    result = a >> i
    result = result + 1
print(result)`,
      answer: "26",
      explanation: `1. a = 100
2. i=1: result = 100 >> 1 = 50, result = 50 + 1 = 51
3. i=2: result = 100 >> 2 = 25, result = 25 + 1 = 26
4. 최종 result = 26

[비트 시프트 설명]
100 >> 1: 100을 2로 나눈 몫 = 50
100 >> 2: 100을 4로 나눈 몫 = 25

[핵심] >> 연산자는 비트를 오른쪽으로 이동. a >> n은 a // (2^n)과 동일하다.`,
      jsComparison: `let a = 100;
let result = 0;
for (let i = 1; i < 3; i++) {
    result = a >> i;
    result = result + 1;
}
console.log(result); // 26`,
    },
    {
      id: 2216,
      examId: "2021-2",
      originalNumber: 16,
      language: "C",
      title: "거듭제곱 함수 구현",
      question:
        "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int mp(int base, int exp) {
    int result = 1;
    for (int i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}

int main() {
    printf("%d", mp(2, 10));
    return 0;
}`,
      answer: "1024",
      explanation: `1. mp(2, 10): base=2, exp=10
2. result = 1
3. 반복문 10회 실행:
   i=0: result = 1 * 2 = 2
   i=1: result = 2 * 2 = 4
   i=2: result = 4 * 2 = 8
   i=3: result = 8 * 2 = 16
   i=4: result = 16 * 2 = 32
   i=5: result = 32 * 2 = 64
   i=6: result = 64 * 2 = 128
   i=7: result = 128 * 2 = 256
   i=8: result = 256 * 2 = 512
   i=9: result = 512 * 2 = 1024
4. 출력: 1024

[핵심] 반복문으로 거듭제곱 구현: result *= base를 exp번 반복하면 base^exp가 된다.`,
      jsComparison: `function mp(base, exp) {
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}
console.log(mp(2, 10)); // 1024`,
    },
    {
      id: 2218,
      examId: "2021-2",
      originalNumber: 18,
      language: "C",
      title: "포인터 배열 값 대입과 합산",
      question:
        "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    int ary[3];
    *(ary + 0) = 1;
    ary[1] = *(ary + 0) + 2;
    ary[2] = *ary + 3;

    int sum = 0;
    for (int i = 0; i < 3; i++) {
        sum += ary[i];
    }
    printf("%d", sum);
    return 0;
}`,
      answer: "8",
      explanation: `1. *(ary + 0) = 1 → ary[0] = 1
2. ary[1] = *(ary + 0) + 2 = ary[0] + 2 = 1 + 2 = 3
3. ary[2] = *ary + 3 = ary[0] + 3 = 1 + 3 = 4
4. 배열: {1, 3, 4}
5. sum = 1 + 3 + 4 = 8

[핵심]
- *(ary + i)는 ary[i]와 동일
- *ary는 ary[0]과 동일 (포인터의 역참조)`,
      jsComparison: `const ary = new Array(3);
ary[0] = 1;          // *(ary + 0) = 1
ary[1] = ary[0] + 2; // ary[1] = *(ary + 0) + 2 = 3
ary[2] = ary[0] + 3; // ary[2] = *ary + 3 = 4
let sum = 0;
for (let i = 0; i < 3; i++) {
    sum += ary[i];
}
console.log(sum); // 8`,
    },
    {
      id: 2219,
      examId: "2021-2",
      originalNumber: 19,
      language: "Java",
      title: "메서드 오버라이드와 super 호출",
      question:
        "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `class Super {
    int sun(int a, int b) {
        return a + b;
    }
}

class Sub extends Super {
    int sun(int a, int b) {
        return a - b + super.sun(a, b);
    }
}

public class Main {
    public static void main(String[] args) {
        Super ovr1 = new Super();
        Super ovr2 = new Sub();
        System.out.println(ovr1.sun(3, 2) + ovr2.sun(3, 2));
    }
}`,
      answer: "11",
      explanation: `1. ovr1 = new Super()
   ovr1.sun(3, 2) = 3 + 2 = 5

2. ovr2 = new Sub() (업캐스팅)
   ovr2.sun(3, 2) → Sub의 sun() 호출 (오버라이딩)
   = a - b + super.sun(a, b)
   = 3 - 2 + super.sun(3, 2)
   = 1 + (3 + 2)
   = 1 + 5 = 6

3. 5 + 6 = 11

[핵심]
- 오버라이딩: 자식 클래스가 부모 메서드를 재정의
- super.메서드(): 부모 클래스의 원래 메서드 호출
- 업캐스팅 시 실제 객체(Sub)의 메서드가 호출된다.`,
      jsComparison: `class Super {
    sun(a, b) {
        return a + b;
    }
}

class Sub extends Super {
    sun(a, b) {
        return a - b + super.sun(a, b);
    }
}

const ovr1 = new Super();
const ovr2 = new Sub();
console.log(ovr1.sun(3, 2) + ovr2.sun(3, 2)); // 5 + 6 = 11`,
    },
  ],
};

export default exam2021_2;
