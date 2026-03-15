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
    // ===== 이론 문제 =====
    {
      id: 23302,
      examId: "2023-3",
      originalNumber: 2,
      language: "이론" as const,
      title: "OAuth 프로토콜",
      question: "사용자가 자격 증명을 공유하지 않고 타사 애플리케이션이 사용자의 데이터에 접근할 수 있는 권한을 부여하는 개방형 표준 인증 프로토콜의 이름을 작성하시오.",
      answer: "OAuth",
      explanation: "OAuth는 Open Authorization의 약자로, 사용자가 비밀번호를 직접 공유하지 않고도 제3자 애플리케이션이 사용자의 리소스에 접근할 수 있도록 권한을 위임하는 개방형 표준 프로토콜이다. 소셜 로그인(구글, 카카오 등) 등에 널리 사용된다.",
    },
    {
      id: 23303,
      examId: "2023-3",
      originalNumber: 3,
      language: "이론" as const,
      title: "리눅스 chmod 명령어",
      question: "리눅스에서 사용자에게 읽기/쓰기/실행(7) 권한, 그룹에게 읽기/실행(5) 권한, 기타에게 실행(1) 권한을 test.txt 파일에 부여하는 명령어를 작성하시오.\n( 1 ) ( 2 ) test.txt",
      answer: "1. chmod 2. 751",
      explanation: "chmod(change mode)는 리눅스에서 파일이나 디렉토리의 접근 권한을 변경하는 명령어이다. 8진법으로 권한을 설정하며, 읽기(r)=4, 쓰기(w)=2, 실행(x)=1을 합산한다. 751은 소유자(rwx=7), 그룹(r-x=5), 기타(--x=1)를 의미한다.",
    },
    {
      id: 23305,
      examId: "2023-3",
      originalNumber: 5,
      language: "이론" as const,
      title: "구조체 포인터 접근 연산자",
      question: "C언어에서 포인터로 선언된 구조체의 멤버에 접근하기 위해 사용하는 기호를 작성하시오.",
      answer: "->",
      explanation: "C언어에서 구조체 포인터를 통해 멤버에 접근할 때 화살표 연산자(->)를 사용한다. 예를 들어 struct Node *ptr; 일 때 ptr->data로 멤버에 접근한다. 이는 (*ptr).data와 동일하다. 일반 구조체 변수는 점(.) 연산자를 사용한다.",
    },
    {
      id: 23306,
      examId: "2023-3",
      originalNumber: 6,
      language: "이론" as const,
      title: "UNION 연산 결과",
      question: "다음 두 테이블에 대해 UNION 연산을 수행하고 내림차순으로 정렬한 결과값을 작성하시오.",
      answer: "4, 3, 2, 1",
      explanation: "UNION은 두 테이블의 합집합을 구하는 관계 대수 연산으로, 중복된 행을 제거한다(UNION ALL은 중복 포함). 결과를 내림차순(DESC)으로 정렬하면 큰 값부터 출력된다.",
    },
    {
      id: 23307,
      examId: "2023-3",
      originalNumber: 7,
      language: "이론" as const,
      title: "접근 통제 유형 - MAC, RBAC, DAC",
      question: "다음 설명에 해당하는 서버 접근 통제 유형을 작성하시오.\n1. 주체와 객체의 등급을 비교하여 접근 권한을 부여하는 규칙 기반 접근 통제\n2. 사용자의 역할에 따라 접근 권한을 부여하는 역할 기반 접근 통제\n3. 데이터 소유자가 접근 권한을 직접 부여하는 신분 기반 접근 통제",
      answer: "1. MAC 2. RBAC 3. DAC",
      explanation: "MAC(Mandatory Access Control, 강제적 접근 통제)은 시스템이 보안 등급에 따라 접근을 통제한다. RBAC(Role-Based Access Control, 역할 기반 접근 통제)은 사용자의 역할에 따라 권한을 부여한다. DAC(Discretionary Access Control, 임의적 접근 통제)은 데이터 소유자가 다른 사용자에게 접근 권한을 부여한다.",
    },
    {
      id: 23309,
      examId: "2023-3",
      originalNumber: 9,
      language: "이론" as const,
      title: "ATM (비동기 전송 모드)",
      question: "셀(Cell) 단위의 고정 길이(53바이트) 패킷을 사용하는 연결 지향형 데이터 전송 방식의 약자를 작성하시오.",
      answer: "ATM",
      explanation: "ATM(Asynchronous Transfer Mode, 비동기 전송 모드)은 53바이트 고정 크기의 셀을 사용하여 데이터를 전송하는 연결 지향형 교환 기술이다. 셀은 5바이트 헤더와 48바이트 페이로드로 구성된다. 음성, 영상, 데이터 등 다양한 트래픽을 통합 전송할 수 있다.",
    },
    {
      id: 23312,
      examId: "2023-3",
      originalNumber: 12,
      language: "이론" as const,
      title: "NAT (네트워크 주소 변환)",
      question: "IP 패킷에서 외부의 공인 IP 주소와 포트 주소에 해당하는 내부 IP 주소를 재기록하여 라우터를 통해 네트워크 트래픽을 주고받는 기술의 약자를 작성하시오.",
      answer: "NAT",
      explanation: "NAT(Network Address Translation, 네트워크 주소 변환)은 사설 IP 주소와 공인 IP 주소를 서로 변환하는 기술이다. 내부 네트워크에서는 사설 IP를 사용하고, 외부와 통신할 때 공인 IP로 변환한다. IPv4 주소 부족 문제를 해결하고 내부 네트워크를 보호하는 효과가 있다.",
    },
    {
      id: 23314,
      examId: "2023-3",
      originalNumber: 14,
      language: "이론" as const,
      title: "Python split 메서드",
      question: "파이썬에서 입력값을 공백으로 구분하여 리스트로 반환하는 문자열 메서드의 이름을 작성하시오.",
      answer: "split",
      explanation: "split() 메서드는 문자열을 지정한 구분자(기본값: 공백)로 분리하여 리스트로 반환하는 Python 문자열 메서드이다. 예: 'hello world'.split() → ['hello', 'world']. 구분자를 지정할 수도 있다: 'a,b,c'.split(',') → ['a', 'b', 'c'].",
    },
    {
      id: 23315,
      examId: "2023-3",
      originalNumber: 15,
      language: "이론" as const,
      title: "UML 패키지 다이어그램",
      question: "관련 요소들을 그룹화하여 표현하는 UML 다이어그램의 이름을 작성하시오.",
      answer: "패키지 다이어그램",
      explanation: "패키지 다이어그램(Package Diagram)은 UML 구조 다이어그램의 하나로, 모델 요소들을 그룹으로 묶어 표현한다. 시스템의 논리적 구조를 패키지 단위로 표현하며, 패키지 간의 의존 관계를 나타낸다. 대규모 시스템의 구조를 이해하는 데 유용하다.",
    },
    {
      id: 23316,
      examId: "2023-3",
      originalNumber: 16,
      language: "이론" as const,
      title: "동등 분할 테스트",
      question: "입력값을 유사한 특성을 가진 그룹으로 분류하여 각 그룹에서 대표값을 선택하여 테스트하는 블랙박스 테스트 기법의 이름을 작성하시오.",
      answer: "동등 분할 테스트(Equivalence Partitioning)",
      explanation: "동등 분할(Equivalence Partitioning) 테스트는 입력 데이터를 유효한 값과 무효한 값의 동등 클래스로 분할하고, 각 클래스에서 대표값을 선택하여 테스트하는 블랙박스 기법이다. 모든 입력값을 테스트할 수 없을 때 효율적으로 테스트 케이스를 줄일 수 있다.",
    },
    {
      id: 23317,
      examId: "2023-3",
      originalNumber: 17,
      language: "이론" as const,
      title: "클라우드 서비스 유형 - IaaS, PaaS, SaaS",
      question: "클라우드 컴퓨팅의 서비스 유형을 작성하시오.\n1. 서버, 스토리지, 네트워크 등 IT 인프라를 서비스로 제공\n2. 애플리케이션 개발 및 실행을 위한 플랫폼을 서비스로 제공\n3. 소프트웨어를 서비스 형태로 제공하여 사용자가 인터넷을 통해 이용",
      answer: "1. IaaS 2. PaaS 3. SaaS",
      explanation: "IaaS(Infrastructure as a Service)는 서버, 스토리지, 네트워크 등 인프라를 가상화하여 서비스로 제공한다(예: AWS EC2). PaaS(Platform as a Service)는 개발 플랫폼을 서비스로 제공한다(예: Google App Engine). SaaS(Software as a Service)는 소프트웨어를 인터넷을 통해 서비스로 제공한다(예: Gmail, Office 365).",
    },
    {
      id: 23318,
      examId: "2023-3",
      originalNumber: 18,
      language: "이론" as const,
      title: "라우팅 프로토콜 - RIP",
      question: "Distance Vector 방식의 동적 라우팅 프로토콜로, 최대 홉 카운트가 15인 프로토콜의 약자를 작성하시오.",
      answer: "RIP",
      explanation: "RIP(Routing Information Protocol)은 거리 벡터(Distance Vector) 알고리즘을 사용하는 동적 라우팅 프로토콜이다. 홉 수(Hop Count)를 메트릭으로 사용하며, 최대 홉 수는 15이다(16홉은 도달 불가로 간주). 소규모 네트워크에 적합하며, 30초마다 라우팅 테이블을 갱신한다.",
    },
    {
      id: 23319,
      examId: "2023-3",
      originalNumber: 19,
      language: "이론" as const,
      title: "관계 대수 기호",
      question: "다음 관계 대수 연산에 해당하는 기호를 작성하시오.\n1. 조인(Join)\n2. 프로젝트(Project)\n3. 셀렉트(Select)\n4. 디비전(Division)",
      answer: "1. ⋈ 2. π 3. σ 4. ÷",
      explanation: "관계 대수의 주요 기호: 조인(⋈, Join)은 두 릴레이션을 공통 속성으로 결합한다. 프로젝트(π, Projection)는 릴레이션에서 특정 속성(열)만 추출한다. 셀렉트(σ, Selection)는 조건에 맞는 튜플(행)을 선택한다. 디비전(÷, Division)은 한 릴레이션의 속성값이 다른 릴레이션의 모든 값을 포함하는 튜플을 반환한다.",
    },
    {
      id: 23320,
      examId: "2023-3",
      originalNumber: 20,
      language: "이론" as const,
      title: "참조 무결성",
      question: "데이터베이스에서 외래키가 참조하는 기본키의 값이 항상 존재해야 하는 무결성 제약조건의 이름을 작성하시오.",
      answer: "참조 무결성",
      explanation: "참조 무결성(Referential Integrity)은 외래키(FK)가 참조하는 기본키(PK)의 값이 반드시 존재하거나 NULL이어야 한다는 제약조건이다. 예를 들어 주문 테이블의 고객번호(FK)는 고객 테이블의 고객번호(PK)에 존재하는 값이어야 한다. 데이터 간의 일관성을 보장한다.",
    },
  ],
};

export default exam2023_3;
