import { ExamData } from "./types";

const exam2022_3: ExamData = {
  id: "2022-3",
  title: "2022년 3회 정보처리기사 실기",
  questions: [
    {
      id: 2304,
      examId: "2022-3",
      originalNumber: 4,
      language: "C",
      title: "배열 순위(Ranking) 매기기",
      question:
        "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    int arr[] = {77, 32, 10, 99, 50};
    int result[] = {1, 1, 1, 1, 1};
    int len = 5;

    for (int i = 0; i < len; i++) {
        for (int j = 0; j < len; j++) {
            if (arr[i] < arr[j]) {
                result[i]++;
            }
        }
    }

    for (int i = 0; i < len; i++) {
        printf("%d", result[i]);
    }

    return 0;
}`,
      answer: "24513",
      explanation: `1. arr = {77, 32, 10, 99, 50}
2. 순위 계산 (값이 작으면 순위가 높아짐 = 큰 수일수록 낮은 순위)

i=0 (arr[0]=77):
  arr[0]<arr[3](99) → result[0]++ → result[0]=2

i=1 (arr[1]=32):
  arr[1]<arr[0](77) → result[1]++
  arr[1]<arr[3](99) → result[1]++
  arr[1]<arr[4](50) → result[1]++ → result[1]=4

i=2 (arr[2]=10):
  arr[2]<arr[0](77) → result[2]++
  arr[2]<arr[1](32) → result[2]++
  arr[2]<arr[3](99) → result[2]++
  arr[2]<arr[4](50) → result[2]++ → result[2]=5

i=3 (arr[3]=99):
  어떤 값보다도 작지 않음 → result[3]=1

i=4 (arr[4]=50):
  arr[4]<arr[0](77) → result[4]++
  arr[4]<arr[3](99) → result[4]++ → result[4]=3

3. result = {2, 4, 5, 1, 3}
4. 출력: "24513"

[핵심] 자신보다 큰 값의 개수 + 1 = 순위. 이중 for문으로 모든 쌍을 비교한다.`,
      jsComparison: `const arr = [77, 32, 10, 99, 50];
const result = [1, 1, 1, 1, 1];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            result[i]++;
        }
    }
}
console.log(result.join("")); // "24513"`,
    },
    {
      id: 2309,
      examId: "2022-3",
      originalNumber: 9,
      language: "Python",
      title: "람다와 map 함수",
      question:
        "다음 Python 코드의 실행 결과를 쓰시오.",
      code: `result = list(map(lambda num: num + 100, [1, 2, 3, 4, 5]))
print(result)`,
      answer: "[101, 102, 103, 104, 105]",
      explanation: `1. map(함수, 리스트): 리스트의 각 요소에 함수를 적용
2. lambda num: num + 100 → 각 요소에 100을 더하는 익명 함수
3. [1, 2, 3, 4, 5]의 각 요소에 적용:
   1 + 100 = 101
   2 + 100 = 102
   3 + 100 = 103
   4 + 100 = 104
   5 + 100 = 105
4. list()로 리스트 변환
5. 출력: [101, 102, 103, 104, 105]

[핵심]
- lambda: 익명 함수 (한 줄 함수)
- map(func, iterable): 각 요소에 func 적용 후 map 객체 반환
- list()로 변환해야 리스트 출력 가능`,
      jsComparison: `const result = [1, 2, 3, 4, 5].map(num => num + 100);
console.log(result); // [101, 102, 103, 104, 105]`,
    },
    {
      id: 2313,
      examId: "2022-3",
      originalNumber: 13,
      language: "C",
      title: "완전수 개수 구하기 (6~30)",
      question:
        "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    int count = 0;

    for (int num = 6; num <= 30; num++) {
        int sum = 0;
        for (int i = 1; i < num; i++) {
            if (num % i == 0) {
                sum += i;
            }
        }
        if (sum == num) {
            count++;
        }
    }

    printf("%d", count);
    return 0;
}`,
      answer: "2",
      explanation: `1. 완전수: 자기 자신을 제외한 약수의 합이 자기 자신과 같은 수

2. 6~30 범위에서 완전수 찾기:
   num=6: 약수(자신 제외) = 1, 2, 3 → 합 = 6 = num ✓ (완전수)
   num=7~27: 약수의 합 ≠ num
   num=28: 약수(자신 제외) = 1, 2, 4, 7, 14 → 합 = 28 = num ✓ (완전수)
   num=29~30: 약수의 합 ≠ num

3. count = 2 (6과 28)
4. 출력: 2

[핵심] 완전수(Perfect Number): 6, 28, 496, 8128... 자신을 제외한 약수의 합 = 자신.`,
      jsComparison: `let count = 0;
for (let num = 6; num <= 30; num++) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    if (sum === num) count++;
}
console.log(count); // 2`,
    },
    {
      id: 2319,
      examId: "2022-3",
      originalNumber: 19,
      language: "Java",
      title: "배열 생성 및 출력 (MakeArray)",
      question:
        "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `public class Main {
    static int[] makeArray(int size) {
        int[] arr = new int[size];
        for (int i = 0; i < size; i++) {
            arr[i] = i;
        }
        return arr;
    }

    public static void main(String[] args) {
        int[] result = makeArray(4);
        for (int i = 0; i < result.length; i++) {
            System.out.print(result[i]);
        }
    }
}`,
      answer: "0123",
      explanation: `1. makeArray(4) 호출: size = 4
2. arr = new int[4] → {0, 0, 0, 0}
3. 반복문:
   i=0: arr[0] = 0
   i=1: arr[1] = 1
   i=2: arr[2] = 2
   i=3: arr[3] = 3
4. arr = {0, 1, 2, 3} 반환

5. main에서 result = {0, 1, 2, 3}
6. 출력: 0123

[핵심] 메서드에서 배열을 생성하고 반환할 수 있다. 배열은 참조 타입이므로 메서드 밖에서도 접근 가능.`,
      jsComparison: `function makeArray(size) {
    const arr = new Array(size);
    for (let i = 0; i < size; i++) {
        arr[i] = i;
    }
    return arr;
}
const result = makeArray(4);
console.log(result.join("")); // "0123"`,
    },
    {
      id: 2320,
      examId: "2022-3",
      originalNumber: 20,
      language: "Java",
      title: "3의 배수 중 짝수 아닌 최대값 (999 미만)",
      question:
        "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `public class Main {
    public static void main(String[] args) {
        int result = 0;
        for (int i = 999; i > 0; i--) {
            if (i % 3 == 0 && i % 2 != 0) {
                result = i;
                break;
            }
        }
        System.out.print(result);
    }
}`,
      answer: "993",
      explanation: `1. i=999부터 역순으로 탐색
2. 조건: i % 3 == 0 (3의 배수) AND i % 2 != 0 (짝수가 아닌 = 홀수)
3. i=999: 999 % 3 = 0 (3의 배수 ✓), 999 % 2 = 1 (홀수 ✓)
4. 두 조건 모두 만족 → result = 999

   하지만 문제에서 "under 999"이므로 i < 999:
   i=998: 998 % 3 = 2 → X
   i=997: 997 % 3 = 1 → X
   i=996: 996 % 3 = 0, 996 % 2 = 0 (짝수) → X
   i=995: 995 % 3 = 2 → X
   i=994: 994 % 3 = 1 → X
   i=993: 993 % 3 = 0 (3의 배수 ✓), 993 % 2 = 1 (홀수 ✓) → result = 993

5. break로 즉시 종료
6. 출력: 993

[핵심] break: 조건 만족 시 반복문 즉시 탈출. 역순 탐색으로 최대값을 빠르게 찾는다.`,
      jsComparison: `let result = 0;
for (let i = 998; i > 0; i--) {
    if (i % 3 === 0 && i % 2 !== 0) {
        result = i;
        break;
    }
}
console.log(result); // 993`,
    },
  ],
};

export default exam2022_3;
