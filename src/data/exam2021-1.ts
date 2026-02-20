import { ExamData } from "./types";

const exam2021_1: ExamData = {
  id: "2021-1",
  title: "2021년 1회 정보처리기사 실기",
  questions: [
    {
      id: 2105,
      examId: "2021-1",
      originalNumber: 5,
      language: "Python",
      title: "클래스 리스트 반복 문자 추출",
      question:
        "다음 Python 코드의 실행 결과를 쓰시오.",
      code: `li = ["seoul", "kyeonggi", "inchon", "daejeon", "daegu", "pusan"]
str01 = ""
for i in li:
    str01 += i[0]
print(str01)`,
      answer: "skiddp",
      explanation: `1. li 리스트의 각 문자열에서 첫 번째 문자(i[0])를 추출하여 str01에 누적
2. "seoul"[0] = 's'
3. "kyeonggi"[0] = 'k'
4. "inchon"[0] = 'i'
5. "daejeon"[0] = 'd'
6. "daegu"[0] = 'd'
7. "pusan"[0] = 'p'
8. str01 = "skiddp"

[핵심] 문자열 인덱싱: 문자열[0]은 첫 번째 문자를 반환한다.`,
      jsComparison: `const li = ["seoul", "kyeonggi", "inchon", "daejeon", "daegu", "pusan"];
let str01 = "";
for (const i of li) {
    str01 += i[0];
}
console.log(str01); // "skiddp"`,
    },
    {
      id: 2106,
      examId: "2021-1",
      originalNumber: 6,
      language: "SQL",
      title: "COUNT 함수와 AND/OR 조건",
      question:
        "다음 SQL문의 실행 결과를 쓰시오.\n\n[급여 테이블]\n| EMPNO | SAL  |\n|-------|------|\n| 100   | 1000 |\n| 200   | 3000 |\n| 300   | 2000 |",
      code: `SELECT COUNT(*) FROM 급여
WHERE EMPNO > 100 AND SAL >= 3000 OR EMPNO = 200;`,
      answer: "1",
      explanation: `1. AND가 OR보다 우선순위가 높으므로 먼저 평가
2. (EMPNO > 100 AND SAL >= 3000) OR (EMPNO = 200)로 해석

[각 행 평가]
EMPNO=100: (100>100=거짓 AND ...) = 거짓, (100=200)=거짓 → 미선택
EMPNO=200: (200>100=참 AND 3000>=3000=참) = 참 → 선택
EMPNO=300: (300>100=참 AND 2000>=3000=거짓) = 거짓, (300=200)=거짓 → 미선택

3. 선택된 행: 1개 (EMPNO=200)
4. COUNT(*) = 1

[핵심] AND는 OR보다 우선순위가 높다. 괄호 없이 AND/OR 혼용 시 주의.`,
    },
    {
      id: 2107,
      examId: "2021-1",
      originalNumber: 7,
      language: "Java",
      title: "2차원 배열 길이와 요소 출력",
      question:
        "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `public class Main {
    public static void main(String[] args) {
        int[][] arr = {{45, 50, 75}, {89}};
        System.out.println(arr[0].length);
        System.out.println(arr[1].length);
        System.out.println(arr[0][0]);
        System.out.println(arr[0][1]);
        System.out.println(arr[1][0]);
    }
}`,
      answer: "3\n1\n45\n50\n89",
      explanation: `1. arr[0] = {45, 50, 75} → arr[0].length = 3
2. arr[1] = {89} → arr[1].length = 1
3. arr[0][0] = 45
4. arr[0][1] = 50
5. arr[1][0] = 89
6. 결과:
   3
   1
   45
   50
   89

[핵심] Java의 2차원 배열은 가변 길이(ragged array)가 가능하다. 각 행의 길이가 다를 수 있다.`,
      jsComparison: `const arr = [[45, 50, 75], [89]];
console.log(arr[0].length); // 3
console.log(arr[1].length); // 1
console.log(arr[0][0]);     // 45
console.log(arr[0][1]);     // 50
console.log(arr[1][0]);     // 89`,
    },
    {
      id: 2115,
      examId: "2021-1",
      originalNumber: 15,
      language: "C",
      title: "구조체와 포인터 연산",
      question:
        "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

struct good {
    char name[10];
    int age;
};

int main() {
    struct good s[] = {{"Kim", 28}, {"Lee", 38}, {"Seo", 41}, {"Park", 35}};
    struct good *p;
    p = s;
    p++;
    printf("%s\\n", p->name);
    printf("%d\\n", p->age);
    return 0;
}`,
      answer: "Lee\n38",
      explanation: `1. 구조체 배열 s[] 초기화:
   s[0] = {"Kim", 28}
   s[1] = {"Lee", 38}
   s[2] = {"Seo", 41}
   s[3] = {"Park", 35}
2. p = s → p는 s[0]을 가리킴
3. p++ → p는 s[1]을 가리킴
4. p->name = "Lee" 출력
5. p->age = 38 출력

[핵심] 구조체 포인터에 ++를 하면 구조체 크기만큼 이동하여 다음 요소를 가리킨다.`,
      jsComparison: `const s = [
    { name: "Kim", age: 28 },
    { name: "Lee", age: 38 },
    { name: "Seo", age: 41 },
    { name: "Park", age: 35 }
];
let idx = 0; // 포인터 역할
idx++;       // p++
console.log(s[idx].name); // "Lee"
console.log(s[idx].age);  // 38`,
    },
    {
      id: 2117,
      examId: "2021-1",
      originalNumber: 17,
      language: "Java",
      title: "for 루프 누적 합산 포맷 출력",
      question:
        "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `public class Main {
    public static void main(String[] args) {
        int j = 0;
        String str = "";
        for (int i = 0; i <= 5; i++) {
            j += i;
            str += i;
            if (i < 5) {
                str += "+";
            }
        }
        str += "=" + j;
        System.out.println(str);
    }
}`,
      answer: "0+1+2+3+4+5=15",
      explanation: `1. i=0: j=0+0=0, str="0+"
2. i=1: j=0+1=1, str="0+1+"
3. i=2: j=1+2=3, str="0+1+2+"
4. i=3: j=3+3=6, str="0+1+2+3+"
5. i=4: j=6+4=10, str="0+1+2+3+4+"
6. i=5: j=10+5=15, str="0+1+2+3+4+5" (i==5이므로 "+" 추가 안 함)
7. str += "=" + j → str="0+1+2+3+4+5=15"

[핵심] 문자열 연결(+)로 수식 형태의 출력을 만드는 패턴. i<5 조건으로 마지막 "+" 생략.`,
      jsComparison: `let j = 0;
let str = "";
for (let i = 0; i <= 5; i++) {
    j += i;
    str += i;
    if (i < 5) {
        str += "+";
    }
}
str += "=" + j;
console.log(str); // "0+1+2+3+4+5=15"`,
    },
  ],
};

export default exam2021_1;
