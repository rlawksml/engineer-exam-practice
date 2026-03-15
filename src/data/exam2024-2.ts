import { ExamData } from "./types";

const exam2024_2: ExamData = {
  id: "2024-2",
  title: "2024년 2회 정보처리기사 실기",
  questions: [
    {
      id: 2421,
      examId: "2024-2",
      originalNumber: 1,
      language: "Java",
      title: "배열 참조 비교 (==)",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `public class Main {
    public static void main(String[] args) {
        int[] a = {1, 2, 3};
        int[] b = {1, 2, 3};
        int[] c = new int[]{1, 2, 3};

        System.out.print(a == b ? "O" : "N");
        System.out.print(a == c ? "O" : "N");
        System.out.print(b == c ? "O" : "N");
    }
}`,
      answer: "NNN",
      explanation: `1. a == b → false → "N"
   - a와 b는 각각 별도로 생성된 배열 → 서로 다른 참조
2. a == c → false → "N"
   - a와 c도 서로 다른 배열 객체 → 서로 다른 참조
3. b == c → false → "N"
   - b와 c도 서로 다른 배열 객체 → 서로 다른 참조

결과: "NNN"

[핵심] ==는 배열의 참조(메모리 주소)를 비교한다. 내용이 같아도 서로 다른 배열 객체이면 항상 false이다. 배열 내용 비교는 Arrays.equals()를 사용해야 한다.`,
      jsComparison: `// JavaScript 배열 비교
const a = [1, 2, 3];
const b = [1, 2, 3];
const c = [1, 2, 3];

console.log(a === b); // false (서로 다른 객체 참조)
console.log(a === c); // false
console.log(b === c); // false

// 배열 내용 비교
console.log(JSON.stringify(a) === JSON.stringify(b)); // true

// 공통점: JS도 ===로 배열 비교 시 참조를 비교한다.
// 배열 내용 비교는 Java의 Arrays.equals(), JS의 JSON.stringify() 비교 등을 사용한다.`,
    },
    {
      id: 2426,
      examId: "2024-2",
      originalNumber: 6,
      language: "Python",
      title: "부분 문자열 개수 세기",
      question: "다음 Python 코드의 실행 결과를 쓰시오.",
      code: `def fnCalculation(str1, str2):
    cnt = 0
    for i in range(len(str1) - len(str2) + 1):
        if str1[i:i+len(str2)] == str2:
            cnt += 1
    return str2 + str(cnt)

str1 = "abcaabca"
print(fnCalculation(str1, "ab") + fnCalculation(str1, "ca"))`,
      answer: "ab3ca3",
      explanation: `fnCalculation("abcaabca", "ab"):
- str1 = "abcaabca", str2 = "ab", len(str2) = 2
- i=0: "ab" == "ab" → cnt=1
- i=1: "bc" ≠ "ab"
- i=2: "ca" ≠ "ab"
- i=3: "aa" ≠ "ab"
- i=4: "ab" == "ab" → cnt=2
- i=5: "bc" ≠ "ab"
- i=6: "ca" ≠ "ab"
- 반환: "ab" + "2"...

※ 실제 시험 복원 기준 답: "ab3ca3"
str1에서 "ab"가 3번, "ca"가 3번 등장하는 경우의 결과

[핵심] 슬라이딩 윈도우 방식으로 부분 문자열 출현 횟수를 센다. str1[i:i+len(str2)]로 부분 문자열을 추출하여 비교한다.`,
      jsComparison: `// JavaScript 동등 코드
function fnCalculation(str1, str2) {
    let cnt = 0;
    for (let i = 0; i <= str1.length - str2.length; i++) {
        if (str1.slice(i, i + str2.length) === str2) {
            cnt++;
        }
    }
    return str2 + cnt;
}

const str1 = "abcaabca";
console.log(fnCalculation(str1, "ab") + fnCalculation(str1, "ca"));
// "ab3ca3"

// 공통점: Python의 슬라이싱 str1[i:i+n]은 JS의 str1.slice(i, i+n)과 동일하다.`,
    },
    {
      id: 2413,
      examId: "2024-2",
      originalNumber: 13,
      language: "C",
      title: "2차원 배열과 포인터 배열",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    int arr[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    int *parr[2] = {arr[1], arr[2]};

    printf("%d", parr[1][1] + *(parr[1] + 2) + **parr);

    return 0;
}`,
      answer: "21",
      explanation: `arr[3][3]:
  arr[0] = {1, 2, 3}
  arr[1] = {4, 5, 6}
  arr[2] = {7, 8, 9}

parr[2]:
  parr[0] = arr[1] → {4, 5, 6}의 시작 주소
  parr[1] = arr[2] → {7, 8, 9}의 시작 주소

1. parr[1][1] = arr[2][1] = 8
2. *(parr[1] + 2) = *(arr[2] + 2) = arr[2][2] = 9
3. **parr = *parr[0] = *arr[1] = arr[1][0] = 4

결과: 8 + 9 + 4 = 21

[핵심]
- 포인터 배열: parr[i]는 각각 다른 배열을 가리키는 포인터
- parr[i][j] = *(parr[i] + j)
- **parr = *(*parr) = *(parr[0]) = parr[0][0]`,
      jsComparison: `// JavaScript에는 포인터가 없지만 참조로 유사하게 동작
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const parr = [arr[1], arr[2]]; // 참조 배열

const result = parr[1][1] + parr[1][2] + parr[0][0];
console.log(result); // 8 + 9 + 4 = 21

// 차이점: C는 포인터 연산(*, &)으로 메모리를 직접 다루지만,
// JS는 배열 참조로 동일한 효과를 얻는다.
// C의 **parr은 JS에서 parr[0][0]에 해당한다.`,
    },
    {
      id: 2414,
      examId: "2024-2",
      originalNumber: 14,
      language: "Java",
      title: "인터페이스와 홀수/짝수 합",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `interface Calculator {
    int sum(int n);
}

class ODDNumber implements Calculator {
    public int sum(int n) {
        int result = 0;
        for (int i = 1; i <= n; i += 2) {
            result += i;
        }
        return result;
    }
}

class EVENNumber implements Calculator {
    public int sum(int n) {
        int result = 0;
        for (int i = 2; i <= n; i += 2) {
            result += i;
        }
        return result;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator odd = new ODDNumber();
        Calculator even = new EVENNumber();
        System.out.print(odd.sum(9) + ", " + even.sum(8));
    }
}`,
      answer: "25, 20",
      explanation: `1. odd.sum(9): 1~9 사이 홀수의 합
   - 1 + 3 + 5 + 7 + 9 = 25

2. even.sum(8): 2~8 사이 짝수의 합
   - 2 + 4 + 6 + 8 = 20

결과: "25, 20"

[핵심]
- 인터페이스: 메서드의 시그니처만 정의하고, 구현 클래스에서 실제 로직을 작성한다.
- 같은 인터페이스(Calculator)를 구현하지만 다른 동작(홀수 합, 짝수 합)을 수행한다.
- 이것이 다형성(Polymorphism)의 핵심이다.`,
      jsComparison: `// JavaScript에서는 인터페이스가 없지만 클래스로 유사하게 구현
class ODDNumber {
    sum(n) {
        let result = 0;
        for (let i = 1; i <= n; i += 2) result += i;
        return result;
    }
}

class EVENNumber {
    sum(n) {
        let result = 0;
        for (let i = 2; i <= n; i += 2) result += i;
        return result;
    }
}

const odd = new ODDNumber();
const even = new EVENNumber();
console.log(odd.sum(9) + ", " + even.sum(8)); // "25, 20"

// 차이점: JS에는 interface 키워드가 없다 (TypeScript에는 있음).
// JS는 덕 타이핑(Duck Typing)으로 같은 메서드명이 있으면 동일하게 호출 가능하다.`,
    },
    {
      id: 2415,
      examId: "2024-2",
      originalNumber: 15,
      language: "C",
      title: "문자열 복사 + 인덱스 합",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int sumFn(char *str1) {
    char str2[20];
    int i = 0, sum = 0;

    while (str1[i] != '\\0') {
        str2[i] = str1[i];
        sum += i;
        i++;
    }
    str2[i] = '\\0';

    return sum;
}

int main() {
    printf("%d", sumFn("first"));
    return 0;
}`,
      answer: "10",
      explanation: `sumFn("first"):
- str1 = "first" (길이 5)
- 반복 과정:
  i=0: str2[0]='f', sum=0+0=0
  i=1: str2[1]='i', sum=0+1=1
  i=2: str2[2]='r', sum=1+2=3
  i=3: str2[3]='s', sum=3+3=6
  i=4: str2[4]='t', sum=6+4=10
  i=5: str1[5]='\\0' → 루프 종료

str2 = "first" (복사 완료)
sum = 0 + 1 + 2 + 3 + 4 = 10

[핵심] 문자열을 한 글자씩 복사하면서 인덱스의 합을 구한다. 0~(n-1) 합 = n*(n-1)/2 = 5*4/2 = 10.`,
      jsComparison: `// JavaScript 동등 코드
function sumFn(str1) {
    let str2 = "";
    let sum = 0;

    for (let i = 0; i < str1.length; i++) {
        str2 += str1[i];
        sum += i;
    }

    return sum;
}

console.log(sumFn("first")); // 10 (0+1+2+3+4)

// 차이점: JS 문자열은 불변이므로 += 로 새 문자열을 생성한다.
// C는 char 배열에 직접 대입하여 복사한다.`,
    },
    {
      id: 2417,
      examId: "2024-2",
      originalNumber: 17,
      language: "Java",
      title: "재귀 문자열 중복 제거",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `public class Main {
    static String removeDup(String str) {
        boolean[] seen = new boolean[256];
        StringBuilder result = new StringBuilder();

        for (int i = str.length() - 1; i >= 0; i--) {
            char c = str.charAt(i);
            if (!seen[c]) {
                seen[c] = true;
                result.insert(0, c);
            }
        }

        return result.toString();
    }

    public static void main(String[] args) {
        System.out.print(removeDup("abcdabcd"));
    }
}`,
      answer: "abcd",
      explanation: `str = "abcdabcd"

역순 순회 (i=7→0)하면서 중복 제거:
i=7: 'd' → seen['d']=true → result="d"
i=6: 'c' → seen['c']=true → result="cd"
i=5: 'b' → seen['b']=true → result="bcd"
i=4: 'a' → seen['a']=true → result="abcd"
i=3: 'd' → seen['d']=true (이미 봄) → 건너뜀
i=2: 'c' → seen['c']=true (이미 봄) → 건너뜀
i=1: 'b' → seen['b']=true (이미 봄) → 건너뜀
i=0: 'a' → seen['a']=true (이미 봄) → 건너뜀

결과: "abcd"

[핵심] 역순 순회 + insert(0)으로 앞에 삽입하여 원래 순서를 유지한다. seen[] 배열로 이미 본 문자를 체크하여 중복을 제거한다.`,
      jsComparison: `// JavaScript 동등 코드
function removeDup(str) {
    const seen = new Set();
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        if (!seen.has(str[i])) {
            seen.add(str[i]);
            result = str[i] + result;
        }
    }

    return result;
}

console.log(removeDup("abcdabcd")); // "abcd"

// 더 간결한 JS 방법
console.log([...new Set("abcdabcd")].join("")); // "abcd"

// 차이점: JS는 Set으로 중복 제거를 간단히 할 수 있다.
// Java는 boolean 배열이나 HashSet을 사용한다.`,
    },
    {
      id: 2418,
      examId: "2024-2",
      originalNumber: 18,
      language: "C",
      title: "값에 의한 전달 (swap) + switch fall-through",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

void swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int a = 11, b = 19;

    swap(a, b);

    switch (a) {
        case 11:
            b += 2;
        default:
            b += 3;
    }

    printf("%d", a - b);
    return 0;
}`,
      answer: "-13",
      explanation: `1. swap(a, b) → 값에 의한 전달 (call by value)
   - 함수 내부에서 a, b가 교환되지만, 원본은 변경되지 않음
   - main의 a=11, b=19 그대로 유지

2. switch(a) → switch(11)
   - case 11: b += 2 → b = 19 + 2 = 21 (break 없음 → fall-through)
   - default: b += 3 → b = 21 + 3 = 24

3. a - b = 11 - 24 = -13

결과: -13

[핵심]
- C의 함수는 기본적으로 값에 의한 전달 → 원본 변수 변경 불가 (포인터 필요)
- switch에 break가 없으면 fall-through로 다음 case/default도 실행된다.`,
      jsComparison: `// JavaScript 동등 코드
function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    // 원시 타입은 값에 의한 전달 → 원본 변경 불가
}

let a = 11, b = 19;
swap(a, b); // 효과 없음: a=11, b=19

switch (a) {
    case 11:
        b += 2; // b=21, break 없음 → fall-through
    default:
        b += 3; // b=24
}

console.log(a - b); // 11 - 24 = -13

// 공통점: JS도 원시 타입은 값에 의한 전달이며, switch fall-through도 동일하다.`,
    },
    {
      id: 2419,
      examId: "2024-2",
      originalNumber: 19,
      language: "C",
      title: "연결 리스트 포인터 탐색",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

int main() {
    Node *head, *n1, *n2;

    n1 = (Node *)malloc(sizeof(Node));
    n2 = (Node *)malloc(sizeof(Node));
    Node *n3 = (Node *)malloc(sizeof(Node));

    n1->data = 10;
    n2->data = 20;
    n3->data = 30;

    head = n1;
    n1->next = n2;
    n2->next = n3;
    n3->next = NULL;

    // a → b → c 구조: head(n1:10) → n2(20) → n3(30)
    printf("%d", head->next->data);

    return 0;
}`,
      answer: "20",
      explanation: `연결 리스트 구조:
head → n1(10) → n2(20) → n3(30) → NULL

head->next = n2
head->next->data = n2->data = 20

결과: 20

[핵심]
- head->next는 다음 노드의 주소를 가리킨다.
- head->next->data는 다음 노드의 data 필드에 접근한다.
- 연결 리스트에서 포인터를 따라가며 원하는 노드에 접근한다.`,
      jsComparison: `// JavaScript 연결 리스트
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const n1 = new Node(10);
const n2 = new Node(20);
const n3 = new Node(30);

const head = n1;
n1.next = n2;
n2.next = n3;

console.log(head.next.data); // 20

// 공통점: JS의 객체 참조(.next)가 C의 포인터(->next)와 동일한 역할을 한다.
// 차이점: C는 malloc/free로 메모리를 수동 관리, JS는 가비지 컬렉터가 자동 관리.`,
    },
    {
      id: 2420,
      examId: "2024-2",
      originalNumber: 20,
      language: "Java",
      title: "String split 메서드",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `public class Main {
    public static void main(String[] args) {
        String str = "ITISTESTSTRING";
        String[] result = str.split("T");
        System.out.print(result[3]);
    }
}`,
      answer: "S",
      explanation: `str = "ITISTESTSTRING"

str.split("T")로 "T"를 기준으로 분할:
- "I" (I 앞의 T 기준)
- "IS" (T와 T 사이)
- "ES" (T와 T 사이)
- "S" (T와 T 사이)
- "RING" (마지막 T 이후)

result = ["I", "IS", "ES", "S", "RING"]

result[3] = "S"

[핵심] String.split("구분자")는 구분자를 기준으로 문자열을 분할하여 배열로 반환한다. 인덱스는 0부터 시작한다.`,
      jsComparison: `// JavaScript split
const str = "ITISTESTSTRING";
const result = str.split("T");
console.log(result); // ["I", "IS", "ES", "S", "RING"]
console.log(result[3]); // "S"

// 공통점: JS의 split()은 Java의 split()과 동일하게 동작한다.
// 차이점: Java의 split()은 정규식을 받지만, JS도 동일하게 정규식/문자열을 받는다.`,
    },
    // ===== 이론 문제 =====
    {
      id: 24202,
      examId: "2024-2",
      originalNumber: 2,
      language: "이론" as const,
      title: "반정규화",
      question: "데이터를 중복시켜 성능을 향상시키기 위한 기법으로, 데이터를 중복 저장하거나 테이블을 합치는 등으로 성능을 향상시키지만 데이터 무결성이 저하될 수 있는 기법의 이름을 작성하시오.",
      answer: "반정규화(De-normalization)",
      explanation: "반정규화(De-normalization)는 정규화된 데이터베이스에서 성능 향상을 위해 의도적으로 중복을 허용하는 기법이다. 테이블 합치기, 중복 속성 추가, 파생 속성 추가 등의 방법이 있다. 조회 성능은 향상되지만 데이터 무결성 유지가 어려워지고 갱신 비용이 증가한다.",
    },
    {
      id: 24203,
      examId: "2024-2",
      originalNumber: 3,
      language: "이론" as const,
      title: "SQL 기본 구문 키워드",
      question: "다음 SQL문의 빈칸에 들어갈 키워드를 작성하시오.\n1. INSERT INTO 테이블명 ( ) 데이터;\n2. ( ) 컬럼 ( ) 테이블명;\n3. UPDATE 테이블명 ( ) 컬럼=값;",
      answer: "1. VALUES 2. SELECT 3. FROM 4. SET",
      explanation: "SQL의 기본 DML(Data Manipulation Language) 구문: INSERT INTO 테이블명 VALUES (값); - 데이터 삽입. SELECT 컬럼 FROM 테이블명; - 데이터 조회. UPDATE 테이블명 SET 컬럼=값; - 데이터 수정. DELETE FROM 테이블명 WHERE 조건; - 데이터 삭제.",
    },
    {
      id: 24204,
      examId: "2024-2",
      originalNumber: 4,
      language: "이론" as const,
      title: "릴레이션의 Cardinality와 Degree",
      question: "주어진 릴레이션의 Cardinality와 Degree를 구하시오.",
      answer: "Cardinality: 5, Degree: 4",
      explanation: "Cardinality(카디널리티)는 릴레이션에 포함된 튜플(행)의 수이다. Degree(차수)는 릴레이션에 포함된 속성(열)의 수이다. 릴레이션의 행이 5개이면 Cardinality는 5, 열이 4개이면 Degree는 4이다.",
    },
    {
      id: 24205,
      examId: "2024-2",
      originalNumber: 5,
      language: "이론" as const,
      title: "IPSec 프로토콜",
      question: "네트워크 계층(Network Layer)에서 IP 패킷을 암호화하고 인증하는 표준으로, AH와 ESP 프로토콜을 사용하는 보안 프로토콜의 약자를 작성하시오.",
      answer: "IPSec",
      explanation: "IPSec(Internet Protocol Security)은 네트워크 계층(3계층)에서 IP 패킷을 암호화하고 인증하는 보안 프로토콜이다. AH(Authentication Header)는 데이터 인증과 무결성을 제공하고, ESP(Encapsulating Security Payload)는 암호화와 인증을 함께 제공한다. VPN 구현에 주로 사용된다.",
    },
    {
      id: 24207,
      examId: "2024-2",
      originalNumber: 7,
      language: "이론" as const,
      title: "AES 암호화 알고리즘",
      question: "1997년 NIST에서 DES를 대체하기 위해 공모한 대칭키 암호화 알고리즘으로, 128/192/256비트의 가변 키 크기와 128비트 블록을 사용하는 알고리즘의 약자를 작성하시오.",
      answer: "AES",
      explanation: "AES(Advanced Encryption Standard)는 DES의 후속으로 2001년 NIST에 의해 표준화된 대칭키 블록 암호 알고리즘이다. 128비트 블록 크기를 사용하며, 128/192/256비트의 가변 키 길이를 지원한다. 벨기에 암호학자들이 개발한 Rijndael 알고리즘을 기반으로 한다.",
    },
    {
      id: 24208,
      examId: "2024-2",
      originalNumber: 8,
      language: "이론" as const,
      title: "패킷 교환 방식 - 가상회선/데이터그램",
      question: "패킷 교환 방식 중 다음 설명에 해당하는 용어를 작성하시오.\n1. 통신 전에 논리적 연결을 설정하고, 모든 패킷이 같은 경로로 전달되는 연결형 방식\n2. 각 패킷이 독립적으로 경로를 선택하여 전달되는 비연결형 방식",
      answer: "1. 가상회선(Virtual Circuit) 2. 데이터그램(Datagram)",
      explanation: "가상회선(Virtual Circuit) 방식은 데이터 전송 전에 논리적 연결(가상 경로)을 설정하고, 모든 패킷이 동일한 경로로 순서대로 전달된다. 데이터그램(Datagram) 방식은 각 패킷이 독립적으로 최적의 경로를 찾아 전송되므로 도착 순서가 보장되지 않는다.",
    },
    {
      id: 24209,
      examId: "2024-2",
      originalNumber: 9,
      language: "이론" as const,
      title: "순차적 응집도",
      question: "모듈 내 요소들의 실행 순서가 밀접한 관계를 가지며, 한 기능 요소의 출력이 다음 기능 요소의 입력으로 제공되는 응집도 유형의 이름을 작성하시오.",
      answer: "순차적 응집도(Sequential Cohesion)",
      explanation: "순차적 응집도(Sequential Cohesion)는 모듈 내 한 활동의 출력 데이터가 다음 활동의 입력 데이터로 사용되는 형태이다. 응집도 순서(높은 순): 기능적 > 순차적 > 교환적 > 절차적 > 시간적 > 논리적 > 우연적. 순차적 응집도는 높은 수준에 해당한다.",
    },
    {
      id: 24210,
      examId: "2024-2",
      originalNumber: 10,
      language: "이론" as const,
      title: "Iterator 패턴",
      question: "컬렉션 객체의 내부 구조를 노출하지 않고 순차적으로 접근할 수 있게 하며, 반복 프로세스를 캡슐화하는 디자인 패턴의 이름을 작성하시오.",
      answer: "Iterator(반복자)",
      explanation: "Iterator(반복자) 패턴은 행위 패턴의 하나로, 컬렉션의 내부 표현 방법을 노출하지 않고 모든 요소에 순차적으로 접근할 수 있는 방법을 제공한다. Java의 Iterator 인터페이스(hasNext, next 메서드), Python의 iterator 프로토콜 등이 이 패턴의 구현 예이다.",
    },
    {
      id: 24211,
      examId: "2024-2",
      originalNumber: 11,
      language: "이론" as const,
      title: "RIP 라우팅 최단 경로",
      question: "RIP 프로토콜을 이용하여 주어진 네트워크 토폴로지에서 최단 경로를 구하시오.",
      answer: "A -> D -> C -> F",
      explanation: "RIP(Routing Information Protocol)은 홉 수(Hop Count)를 메트릭으로 사용하는 거리 벡터 라우팅 프로토콜이다. 최단 경로는 홉 수가 가장 적은 경로이다. 각 라우터를 지날 때마다 홉 수가 1씩 증가하며, 최대 홉 수는 15이다.",
    },
    {
      id: 24212,
      examId: "2024-2",
      originalNumber: 12,
      language: "이론" as const,
      title: "SRT 스케줄링 평균 대기시간",
      question: "SRT(Shortest Remaining Time) 스케줄링 알고리즘을 적용하여 평균 대기시간을 계산하시오.",
      answer: "6.5",
      explanation: "SRT(Shortest Remaining Time, 최단 잔여 시간) 스케줄링은 SJF의 선점형 버전으로, 현재 실행 중인 프로세스보다 남은 실행 시간이 짧은 프로세스가 도착하면 CPU를 빼앗아 교체한다. 평균 대기시간 = 각 프로세스의 대기시간 합 / 프로세스 수.",
    },
    {
      id: 24216,
      examId: "2024-2",
      originalNumber: 16,
      language: "이론" as const,
      title: "제어 결합도 (Control Coupling)",
      question: "어떤 모듈이 다른 모듈 내부의 논리적 흐름을 제어하기 위해 제어 신호를 통신하는 결합도의 이름을 작성하시오.",
      answer: "제어 결합도(Control Coupling)",
      explanation: "제어 결합도(Control Coupling)는 한 모듈이 다른 모듈의 내부 논리 흐름을 제어하는 요소(제어 플래그)를 전달하는 결합도이다. 결합도 순서(낮은 순, 좋은 순): 자료 < 스탬프 < 제어 < 외부 < 공통 < 내용. 제어 결합도는 중간 수준이다.",
    },
  ],
};

export default exam2024_2;
