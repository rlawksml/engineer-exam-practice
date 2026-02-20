import { ExamData } from "./types";

const exam2020_1: ExamData = {
  id: "2020-1",
  title: "2020년 1회 정보처리기사 실기",
  questions: [
    {
      id: 20112,
      examId: "2020-1",
      originalNumber: 12,
      language: "C",
      title: "버블 정렬 (Bubble Sort)",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    int a[] = {75, 95, 85, 100, 50};
    int i, j, temp;

    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4 - i; j++) {
            if (a[j] > a[j + 1]) {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }

    for (i = 0; i < 5; i++) {
        printf("%d", a[i]);
    }

    return 0;
}`,
      answer: "50758595100",
      explanation: `[버블 정렬 과정]
초기 배열: {75, 95, 85, 100, 50}

i=0 (1회전):
  j=0: 75 vs 95 → 교환 없음 → {75, 95, 85, 100, 50}
  j=1: 95 vs 85 → 교환 → {75, 85, 95, 100, 50}
  j=2: 95 vs 100 → 교환 없음 → {75, 85, 95, 100, 50}
  j=3: 100 vs 50 → 교환 → {75, 85, 95, 50, 100}

i=1 (2회전):
  j=0: 75 vs 85 → 교환 없음
  j=1: 85 vs 95 → 교환 없음
  j=2: 95 vs 50 → 교환 → {75, 85, 50, 95, 100}

i=2 (3회전):
  j=0: 75 vs 85 → 교환 없음
  j=1: 85 vs 50 → 교환 → {75, 50, 85, 95, 100}

i=3 (4회전):
  j=0: 75 vs 50 → 교환 → {50, 75, 85, 95, 100}

최종 배열: {50, 75, 85, 95, 100}
출력: "50758595100"

[핵심] 버블 정렬: 인접한 두 원소를 비교하여 교환. 매 회전마다 가장 큰 값이 뒤로 이동한다.`,
      jsComparison: `// JavaScript 버블 정렬 동등 코드
const a = [75, 95, 85, 100, 50];

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4 - i; j++) {
        if (a[j] > a[j + 1]) {
            // C: temp 변수로 교환
            // JS: 구조 분해 할당으로 간단히 교환 가능
            [a[j], a[j + 1]] = [a[j + 1], a[j]];
        }
    }
}

// C: printf("%d", a[i]) → 줄바꿈 없이 연속 출력
// JS: join('')으로 구분자 없이 연결
console.log(a.join('')); // "50758595100"`,
    },
    {
      id: 20113,
      examId: "2020-1",
      originalNumber: 13,
      language: "Java",
      title: "배열 출력 (Array Print)",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `public class Main {
    public static void main(String[] args) {
        int[] a = {0, 1, 2, 3};

        for (int i = 0; i < 4; i++) {
            System.out.print(a[i] + " ");
        }
    }
}`,
      answer: "0 1 2 3",
      explanation: `1. 배열 a = {0, 1, 2, 3} 선언 및 초기화
2. for 루프: i=0부터 i<4까지 반복
   i=0: a[0]=0 출력 → "0 "
   i=1: a[1]=1 출력 → "1 "
   i=2: a[2]=2 출력 → "2 "
   i=3: a[3]=3 출력 → "3 "
3. 결과: "0 1 2 3 " (마지막에 공백 포함)

[핵심] Java 배열은 인덱스 0부터 시작. System.out.print()는 줄바꿈 없이 출력한다.`,
      jsComparison: `// JavaScript 배열 출력 동등 코드
const a = [0, 1, 2, 3];

// Java: for (int i = 0; i < 4; i++) { System.out.print(a[i] + " "); }
// JS: for...of 또는 forEach 사용 가능
for (let i = 0; i < 4; i++) {
    process.stdout.write(a[i] + " ");
}
// 또는 간단히:
console.log(a.join(" ")); // "0 1 2 3"

// 차이점:
// - Java: int[] a = {0,1,2,3} (타입 고정)
// - JS: const a = [0,1,2,3] (타입 유연)
// - Java: System.out.print() (줄바꿈 없음)
// - JS: console.log() (자동 줄바꿈), process.stdout.write() (줄바꿈 없음)`,
    },
    {
      id: 20114,
      examId: "2020-1",
      originalNumber: 14,
      language: "Java",
      title: "switch문 fall-through (break 없음)",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `public class Main {
    public static void main(String[] args) {
        int i = 3;
        int k = 1;

        switch (i) {
            case 0:
            case 1:
            case 2:
            case 3: k = 0;
            case 4: k += 3;
            case 5: k -= 10;
            default: k--;
        }

        System.out.print(k);
    }
}`,
      answer: "-8",
      explanation: `1. i=3, k=1
2. switch(i)에서 i=3이므로 case 3으로 이동
3. case 3: k = 0 → k=0
4. break가 없으므로 fall-through 발생!
5. case 4: k += 3 → k = 0 + 3 = 3
6. case 5: k -= 10 → k = 3 - 10 = -7
7. default: k-- → k = -7 - 1 = -8
8. 출력: -8

[핵심] switch문에서 break가 없으면 해당 case부터 아래 모든 case가 연속 실행된다 (fall-through).
이것은 시험에서 매우 자주 출제되는 패턴이다.`,
      jsComparison: `// JavaScript switch fall-through 동등 코드
let i = 3;
let k = 1;

// JS의 switch문도 Java와 동일하게 fall-through 발생
switch (i) {
    case 0:
    case 1:
    case 2:
    case 3: k = 0;    // break 없으므로 아래로 계속 실행
    case 4: k += 3;   // k = 3
    case 5: k -= 10;  // k = -7
    default: k--;     // k = -8
}

console.log(k); // -8

// 차이점:
// - Java와 JS의 switch문은 거의 동일하게 동작
// - 둘 다 break 없으면 fall-through 발생
// - JS는 타입까지 비교 (=== 사용), Java는 값만 비교`,
    },
  ],
};

export default exam2020_1;
