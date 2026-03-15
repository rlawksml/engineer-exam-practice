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
    // ===== 이론 문제 =====
    {
      id: 23206,
      examId: "2023-2",
      originalNumber: 6,
      language: "이론" as const,
      title: "조건 커버리지",
      question: "프로그램 내에 있는 결정포인트 내의 모든 각 개별 조건식에 대한 모든 가능한 결과(참/거짓)에 대해 적어도 한 번 수행하는 테스트 커버리지의 이름을 작성하시오.",
      answer: "조건 커버리지(Condition Coverage)",
      explanation: "조건 커버리지(Condition Coverage)는 각 개별 조건식이 참과 거짓을 모두 한 번씩 만족하도록 테스트하는 기법이다. 문장 커버리지(모든 문장 실행), 결정 커버리지(모든 분기 실행), 조건/결정 커버리지(조건+결정 결합), 변경 조건/결정 커버리지(MC/DC) 등과 구별해야 한다.",
    },
    {
      id: 23208,
      examId: "2023-2",
      originalNumber: 8,
      language: "이론" as const,
      title: "템퍼프루핑 (Tamper Proofing)",
      question: "소프트웨어가 불법으로 변경(위변조)되었을 경우, 그 소프트웨어가 정상 수행되지 않게 하는 보안 기법의 이름을 작성하시오.",
      answer: "템퍼프루핑(Tamper Proofing)",
      explanation: "템퍼프루핑(Tamper Proofing)은 소프트웨어의 변조를 탐지하고 방지하는 보안 기법이다. 변조 검증 코드를 삽입하여 소프트웨어가 불법적으로 수정되었는지 검사하고, 변조가 감지되면 정상적인 실행을 차단한다. 소프트웨어 보호 기술의 하나이다.",
    },
    {
      id: 23210,
      examId: "2023-2",
      originalNumber: 10,
      language: "이론" as const,
      title: "데이터베이스 설계 순서",
      question: "데이터베이스 설계 단계를 순서대로 나열하시오.",
      answer: "요구조건 분석, 개념적 설계, 논리적 설계, 물리적 설계, 구현",
      explanation: "데이터베이스 설계는 5단계로 진행된다. 1) 요구조건 분석: 사용자 요구사항 수집 및 분석. 2) 개념적 설계: E-R 다이어그램 등으로 개념적 스키마 설계. 3) 논리적 설계: 관계형 모델 등으로 논리적 스키마 설계. 4) 물리적 설계: 저장 구조, 인덱스, 접근 경로 설계. 5) 구현: 실제 데이터베이스 생성.",
    },
    {
      id: 23211,
      examId: "2023-2",
      originalNumber: 11,
      language: "이론" as const,
      title: "디자인 패턴 - Singleton, Visitor",
      question: "다음 설명에 해당하는 디자인 패턴의 이름을 작성하시오.\n1. 클래스의 인스턴스가 오직 하나만 존재하도록 보장하는 생성 패턴\n2. 객체 구조를 변경하지 않고 새로운 기능을 추가할 수 있는 행위 패턴",
      answer: "1. Singleton 2. Visitor",
      explanation: "싱글톤(Singleton) 패턴은 클래스의 인스턴스를 하나만 생성하여 전역적으로 접근 가능하게 하는 생성 패턴이다. 비지터(Visitor) 패턴은 객체 구조를 순회하면서 각 요소에 새로운 연산을 추가할 수 있는 행위 패턴으로, 구조를 변경하지 않고 기능을 확장할 수 있다.",
    },
    {
      id: 23212,
      examId: "2023-2",
      originalNumber: 12,
      language: "이론" as const,
      title: "오류 정정/검출 기법",
      question: "다음 설명에 해당하는 용어를 작성하시오.\n1. 수신측에서 오류를 검출하고 교정까지 할 수 있는 코드\n2. 전진 오류 수정 방식의 약자\n3. 후진 오류 수정 방식의 약자\n4. 하나의 비트를 추가하여 오류를 검출하는 가장 간단한 방법\n5. 다항식을 이용하여 오류를 검출하는 방식의 약자",
      answer: "1. Hamming 2. FEC 3. BEC 4. Parity 5. CRC",
      explanation: "해밍(Hamming) 코드는 오류 검출과 교정이 가능한 코드이다. FEC(Forward Error Correction, 전진 오류 수정)는 송신측에서 오류 수정 정보를 함께 보내는 방식이다. BEC(Backward Error Correction, 후진 오류 수정)는 오류 발생 시 재전송을 요청하는 방식이다. 패리티(Parity)는 패리티 비트를 추가하여 오류를 검출하는 방법이다. CRC(Cyclic Redundancy Check)는 다항식을 이용한 오류 검출 방식이다.",
    },
    {
      id: 23213,
      examId: "2023-2",
      originalNumber: 13,
      language: "이론" as const,
      title: "HDLC 프레임 유형",
      question: "HDLC 프로토콜의 프레임 유형에 대한 설명에서 알맞은 보기를 선택하시오.",
      answer: "I-프레임(정보 프레임), S-프레임(감독 프레임), U-프레임(비번호 프레임)",
      explanation: "HDLC(High-level Data Link Control)는 데이터링크 계층의 프로토콜로, 세 가지 프레임 유형이 있다. I-프레임(Information Frame)은 사용자 데이터를 전송하는 정보 프레임이다. S-프레임(Supervisory Frame)은 흐름 제어와 오류 제어를 담당하는 감독 프레임이다. U-프레임(Unnumbered Frame)은 링크 관리를 위한 비번호 프레임이다.",
    },
    {
      id: 23215,
      examId: "2023-2",
      originalNumber: 15,
      language: "이론" as const,
      title: "대칭키/비대칭키 암호화 알고리즘",
      question: "다음 암호화 알고리즘을 대칭키와 비대칭키로 분류하시오.\nDES, AES, ARIA, SEED, RSA, ECC",
      answer: "대칭키: DES, AES, ARIA, SEED / 비대칭키: RSA, ECC",
      explanation: "대칭키 암호화는 암호화와 복호화에 같은 키를 사용한다. DES(56비트 키), AES(128/192/256비트 키), ARIA(한국 표준), SEED(한국 표준)가 대칭키 알고리즘이다. 비대칭키(공개키) 암호화는 공개키와 개인키를 사용한다. RSA(소인수 분해), ECC(타원곡선 암호)가 비대칭키 알고리즘이다.",
    },
    {
      id: 23216,
      examId: "2023-2",
      originalNumber: 16,
      language: "이론" as const,
      title: "해시 함수",
      question: "임의의 크기를 가진 데이터를 고정된 크기의 데이터로 변환하는 함수로, 데이터의 무결성 검증에 사용되는 기법의 이름을 작성하시오.",
      answer: "해시(Hash)",
      explanation: "해시(Hash) 함수는 임의 길이의 입력 데이터를 고정 길이의 해시값(다이제스트)으로 변환하는 단방향 함수이다. 같은 입력에는 항상 같은 출력이 나오며, 역변환이 불가능하다. 데이터 무결성 검증, 비밀번호 저장, 디지털 서명 등에 사용된다. MD5, SHA-256 등이 대표적이다.",
    },
    {
      id: 23217,
      examId: "2023-2",
      originalNumber: 17,
      language: "이론" as const,
      title: "DROP VIEW - CASCADE",
      question: "뷰를 삭제할 때, 해당 뷰를 참조하는 모든 객체까지 함께 삭제하는 옵션의 이름을 작성하시오.",
      answer: "CASCADE",
      explanation: "CASCADE는 SQL에서 객체를 삭제할 때 해당 객체를 참조하는 모든 종속 객체도 함께 삭제하는 옵션이다. DROP VIEW 뷰명 CASCADE;로 사용한다. 반대 옵션인 RESTRICT는 다른 객체에 의해 참조되고 있으면 삭제를 거부한다.",
    },
    {
      id: 23220,
      examId: "2023-2",
      originalNumber: 20,
      language: "이론" as const,
      title: "테스트 보조 모듈 - 스텁, 드라이버",
      question: "다음 설명에 해당하는 테스트 보조 모듈의 이름을 작성하시오.\n1. 하향식 통합 테스트에서 아직 개발되지 않은 하위 모듈을 대신하는 임시 모듈\n2. 상향식 통합 테스트에서 아직 개발되지 않은 상위 모듈을 대신하여 하위 모듈을 호출하는 임시 모듈",
      answer: "1. 스텁(Stub) 2. 드라이버(Driver)",
      explanation: "스텁(Stub)은 하향식(Top-Down) 통합 테스트에서 아직 완성되지 않은 하위 모듈을 대체하는 임시 모듈이다. 상위 모듈이 호출할 때 간단한 값을 반환한다. 드라이버(Driver)는 상향식(Bottom-Up) 통합 테스트에서 상위 모듈을 대체하여 하위 모듈을 호출하는 임시 모듈이다.",
    },
  ],
};

export default exam2023_2;
