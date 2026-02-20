import { ExamData } from "./types";

const exam2020_4: ExamData = {
  id: "2020-4",
  title: "2020년 4회 정보처리기사 실기",
  questions: [
    {
      id: 2049,
      examId: "2020-4",
      originalNumber: 9,
      language: "Python",
      title: "2차원 리스트 (Nested List)",
      question: "다음 Python 코드의 실행 결과를 쓰시오.",
      code: `lol = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]

print(lol[0])
print(lol[2][1])

for sub in lol:
    for item in sub:
        print(item, end='')
    print()`,
      answer: "[1, 2, 3]\n7\n123\n45\n6789",
      explanation: `1. lol = [[1,2,3], [4,5], [6,7,8,9]] → 2차원 리스트

2. print(lol[0]) → lol의 첫 번째 원소 = [1, 2, 3] 출력
   출력: [1, 2, 3]

3. print(lol[2][1]) → lol[2]는 [6,7,8,9], 그 중 인덱스 1 = 7
   출력: 7

4. 중첩 for 루프:
   sub = [1,2,3]:
     item=1,2,3 → print(item, end='') → "123"
     print() → 줄바꿈
   sub = [4,5]:
     item=4,5 → "45"
     print() → 줄바꿈
   sub = [6,7,8,9]:
     item=6,7,8,9 → "6789"
     print() → 줄바꿈

최종 출력:
[1, 2, 3]
7
123
45
6789

[핵심]
- 2차원 리스트: 리스트 안에 리스트
- lol[i][j]: i번째 서브리스트의 j번째 원소
- print(end=''): 줄바꿈 없이 출력
- print(): 줄바꿈만 출력`,
      jsComparison: `// JavaScript 2차원 배열 동등 코드
const lol = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];

// Python: print(lol[0]) → [1, 2, 3]
// JS: 배열 출력 시 형태가 다름
console.log(lol[0]); // [1, 2, 3] (동일한 형태)

// Python: print(lol[2][1]) → 7
console.log(lol[2][1]); // 7

// Python: 중첩 for + print(end='')
// JS: process.stdout.write()로 줄바꿈 없이 출력
for (const sub of lol) {
    let line = '';
    for (const item of sub) {
        line += item; // Python: print(item, end='')
    }
    console.log(line); // Python: print()
}
// 출력:
// 123
// 45
// 6789

// 차이점:
// - Python: print(list) → [1, 2, 3] (괄호 포함)
// - JS: console.log(array) → [1, 2, 3] (동일 형태, 환경에 따라 다를 수 있음)
// - Python: print(end='') → 줄바꿈 제거
// - JS: process.stdout.write() 또는 문자열 누적 후 console.log()
// - Python: for item in list → JS: for (const item of array)`,
    },
    {
      id: 20418,
      examId: "2020-4",
      originalNumber: 18,
      language: "C",
      title: "포인터 + 문자열 (Pointer & String)",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    char *p = "KOREA";

    printf("%s\\n", p);
    printf("%s\\n", p + 3);
    printf("%c\\n", *p);
    printf("%c\\n", *(p + 3));
    printf("%c\\n", *p + 2);

    return 0;
}`,
      answer: "KOREA\nEA\nK\nE\nM",
      explanation: `1. char *p = "KOREA" → p는 문자열 "KOREA"의 시작 주소를 가리킴
   p → K(0) O(1) R(2) E(3) A(4) \\0(5)

2. printf("%s", p) → p가 가리키는 주소부터 \\0까지 문자열 출력
   → "KOREA"

3. printf("%s", p+3) → p+3은 'E'의 주소 → 거기서부터 \\0까지 출력
   → "EA"

4. printf("%c", *p) → *p는 p가 가리키는 값 = 'K'
   → "K"

5. printf("%c", *(p+3)) → p+3이 가리키는 값 = 'E'
   → "E"

6. printf("%c", *p+2) → *p는 'K' (ASCII 75), 75 + 2 = 77 = 'M'
   → "M"
   주의: *p+2는 (*p)+2이다. *(p+2)가 아님!

[핵심]
- %s: 해당 주소부터 \\0까지 문자열 출력
- %c: 한 문자 출력
- *p: 포인터가 가리키는 값 (역참조)
- *p+2: (*p) + 2 → 문자의 ASCII 값에 2를 더함
- *(p+2): p를 2칸 이동한 위치의 값
- 연산자 우선순위: * (역참조)가 + (덧셈)보다 높다`,
      jsComparison: `// JavaScript 문자열 동등 코드
// C의 char 포인터는 JS의 문자열과 유사하지만 동작 방식이 다름
const p = "KOREA";

// C: printf("%s", p) → 전체 문자열
console.log(p); // "KOREA"

// C: printf("%s", p+3) → 3번 인덱스부터 끝까지
console.log(p.slice(3)); // "EA"

// C: printf("%c", *p) → 첫 번째 문자
console.log(p[0]); // "K" (또는 p.charAt(0))

// C: printf("%c", *(p+3)) → 4번째 문자
console.log(p[3]); // "E"

// C: printf("%c", *p+2) → 첫 문자의 ASCII + 2
// JS에서 ASCII 변환:
console.log(String.fromCharCode(p.charCodeAt(0) + 2)); // "M"

// 차이점:
// - C: char *p로 포인터 사용, 포인터 산술 가능 (p+3)
// - JS: 문자열은 불변(immutable), 인덱스 접근(p[3]) 또는 slice() 사용
// - C: *p+2는 ASCII 값에 산술 연산, JS: charCodeAt() + fromCharCode() 필요
// - C: %s는 주소부터 null 종단까지 출력, JS: slice()로 부분 문자열 추출`,
    },
    {
      id: 20419,
      examId: "2020-4",
      originalNumber: 19,
      language: "Java",
      title: "상속 + 오버라이드 재귀 (Parent/Child compute)",
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
        System.out.print(obj.compute(4));
    }
}`,
      answer: "1",
      explanation: `1. Parent obj = new Child() → 업캐스팅, 실제 객체는 Child
2. obj.compute(4) → 다형성에 의해 Child의 compute(4) 호출

Child의 compute(n) 추적:
compute(4) = compute(3) + compute(1)

compute(3) = compute(2) + compute(0)
compute(2) = compute(1) + compute(-1)
compute(1) = 1 (기저 조건: n <= 1)
compute(-1) = -1 (기저 조건: n <= 1)
→ compute(2) = 1 + (-1) = 0

compute(0) = 0 (기저 조건: n <= 1)
→ compute(3) = 0 + 0 = 0

compute(1) = 1 (기저 조건: n <= 1)

compute(4) = compute(3) + compute(1) = 0 + 1 = 1

출력: 1

[핵심]
- 다형성: Parent 타입이지만 Child의 compute()가 호출됨 (오버라이딩)
- Child의 compute: compute(n-1) + compute(n-3) (Parent와 다른 재귀 패턴)
- 기저 조건 n <= 1에서 n 자체를 반환하므로 음수도 반환될 수 있음`,
      jsComparison: `// JavaScript 상속 + 오버라이드 재귀 동등 코드
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

// Java: Parent obj = new Child();
const obj = new Child();
console.log(obj.compute(4)); // 1

// 차이점:
// - Java: 재귀 호출 시 compute(n-1) → 자동으로 this의 메서드 호출
// - JS: this.compute(n-1) → this를 명시해야 함
// - Java: Parent obj = new Child() → 타입 명시적 선언
// - JS: const obj = new Child() → 타입 없이 선언
// - 다형성(오버라이딩)은 Java와 JS 모두 동일하게 동작`,
    },
    {
      id: 2045,
      examId: "2020-4",
      originalNumber: 5,
      language: "Java",
      title: "10진수 → 2진수 변환 (빈칸 채우기)",
      question:
        "다음 Java 코드는 10진수를 2진수로 변환하는 프로그램이다. 빈칸 (1)과 (2)에 들어갈 코드를 쓰시오.\n\n(1): while문의 조건식\n(2): 나머지를 구하는 수식",
      code: `public class Main {
    public static void main(String[] args) {
        int n = 10;
        int[] a = new int[8];
        int i = 0;

        while ( (1) ) {
            a[i++] = (2);
            n /= 2;
        }

        for (i = i - 1; i >= 0; i--) {
            System.out.print(a[i]);
        }
    }
}`,
      answer: "n > 0\nn % 2",
      explanation: `[빈칸 분석]

(1) while문 조건: n > 0
- n이 0보다 클 동안 반복해야 2진수 변환이 가능
- n을 계속 2로 나누면서 0이 될 때까지 반복

(2) 나머지 수식: n % 2
- 2진수 변환은 2로 나눈 나머지를 역순으로 나열하는 것
- n % 2는 n을 2로 나눈 나머지 (0 또는 1)

[실행 추적] n = 10
i=0: a[0] = 10%2 = 0, n = 10/2 = 5
i=1: a[1] = 5%2 = 1, n = 5/2 = 2
i=2: a[2] = 2%2 = 0, n = 2/2 = 1
i=3: a[3] = 1%2 = 1, n = 1/2 = 0
→ n=0이므로 while 종료

역순 출력: a[3]a[2]a[1]a[0] = 1010
10진수 10 = 2진수 1010 ✓

[핵심]
- 10진수 → 2진수: 2로 나눈 나머지를 역순으로 나열
- while(n > 0): n이 양수인 동안 반복
- a[i++] = n % 2: 나머지 저장 후 인덱스 증가
- n /= 2: 몫으로 갱신`,
      jsComparison: `// JavaScript 10진수 → 2진수 변환 동등 코드
let n = 10;
const a = new Array(8).fill(0);
let i = 0;

// (1) n > 0
while (n > 0) {
    // (2) n % 2
    a[i++] = n % 2;
    n = Math.floor(n / 2); // JS: 정수 나눗셈을 위해 Math.floor 필요
}

// 역순 출력
let result = '';
for (i = i - 1; i >= 0; i--) {
    result += a[i];
}
console.log(result); // "1010"

// JS에서는 내장 메서드로 간단히 가능:
// (10).toString(2) → "1010"

// 차이점:
// - Java: n /= 2 → 정수 나눗셈 (int끼리 나누면 소수점 버림)
// - JS: n / 2는 소수점 유지 → Math.floor(n / 2) 또는 n = n >> 1 필요
// - Java: int[] a = new int[8] → JS: const a = new Array(8).fill(0)
// - JS 내장: Number.toString(2)로 2진수 문자열 변환 가능`,
    },
    {
      id: 20416,
      examId: "2020-4",
      originalNumber: 16,
      language: "SQL",
      title: "GROUP BY COUNT (학과별 학생 수)",
      question:
        "다음 SQL문의 실행 결과를 쓰시오.\n\n[학생 테이블]\n| 학번 | 이름   | 학과       |\n|------|--------|----------|\n| 1001 | 김철수 | 컴퓨터공학 |\n| 1002 | 이영희 | 전자공학   |\n| 1003 | 박민수 | 컴퓨터공학 |\n| 1004 | 정수연 | 전자공학   |\n| 1005 | 홍길동 | 컴퓨터공학 |",
      code: `SELECT 학과, COUNT(학과) AS 학생수
FROM 학생
GROUP BY 학과;`,
      answer: "컴퓨터공학 3\n전자공학 2",
      explanation: `1. GROUP BY 학과 → 학과별로 그룹화
   - 컴퓨터공학: {김철수, 박민수, 홍길동}
   - 전자공학: {이영희, 정수연}

2. COUNT(학과) → 각 그룹의 행 수를 계산
   - 컴퓨터공학: 3명
   - 전자공학: 2명

3. SELECT 학과, COUNT(학과) AS 학생수
   결과:
   | 학과       | 학생수 |
   |-----------|--------|
   | 컴퓨터공학 | 3      |
   | 전자공학   | 2      |

[핵심]
- GROUP BY: 지정한 컬럼의 값이 같은 행들을 하나의 그룹으로 묶음
- COUNT(): 그룹 내의 행 수를 세는 집계 함수
- AS: 컬럼에 별칭(Alias) 부여
- GROUP BY 없이 집계 함수를 사용하면 전체 행에 대해 계산됨`,
    },
  ],
};

export default exam2020_4;
