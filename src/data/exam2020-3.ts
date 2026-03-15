import { ExamData } from "./types";

const exam2020_3: ExamData = {
  id: "2020-3",
  title: "2020년 3회 정보처리기사 실기",
  questions: [
    {
      id: 2032,
      examId: "2020-3",
      originalNumber: 2,
      language: "C",
      title: "while 루프 - 곱셈 누적",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    int i = 0, c = 0;

    while (i < 10) {
        i++;
        c *= i;
    }

    printf("%d", c);
    return 0;
}`,
      answer: "0",
      explanation: `1. 초기값: i=0, c=0
2. while(i < 10) 반복:
   i=0→1: c = 0 * 1 = 0
   i=1→2: c = 0 * 2 = 0
   i=2→3: c = 0 * 3 = 0
   ...
   i=9→10: c = 0 * 10 = 0
3. i=10이 되면 while 조건 i<10이 거짓 → 반복 종료
4. printf("%d", c) → 0 출력

[핵심] c의 초기값이 0이므로 c *= i (c = c * i)에서 0에 어떤 수를 곱해도 항상 0이다.
이것은 시험에서 자주 출제되는 함정 문제이다. c의 초기값을 잘 확인해야 한다.`,
      jsComparison: `// JavaScript while 루프 동등 코드
let i = 0, c = 0;

while (i < 10) {
    i++;
    c *= i; // c = c * i → 0 * 무엇이든 = 0
}

console.log(c); // 0

// 차이점:
// - C: int i = 0 → JS: let i = 0 (타입 선언 불필요)
// - C: printf("%d", c) → JS: console.log(c)
// - while 문법은 C와 JS가 거의 동일
// - C: *= 복합 대입 연산자 → JS도 동일하게 *= 사용`,
    },
    {
      id: 20313,
      examId: "2020-3",
      originalNumber: 13,
      language: "C",
      title: "함수 호출 체인 (Function Call Chain)",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int r1() {
    return 4;
}

int r10() {
    return 30 + r1();
}

int r100() {
    return 200 + r10();
}

int main() {
    printf("%d", r100());
    return 0;
}`,
      answer: "234",
      explanation: `1. main()에서 r100() 호출
2. r100() 내부: return 200 + r10()
3. r10() 내부: return 30 + r1()
4. r1() 내부: return 4
5. 역순으로 계산:
   r1() = 4
   r10() = 30 + 4 = 34
   r100() = 200 + 34 = 234
6. printf("%d", 234) → 234 출력

[핵심] 함수 호출이 중첩될 때, 가장 안쪽 함수부터 반환값이 결정되어 바깥으로 전달된다.
r100() → r10() → r1() 순으로 호출되고, r1() → r10() → r100() 순으로 반환된다.`,
      jsComparison: `// JavaScript 함수 호출 체인 동등 코드
function r1() {
    return 4;
}

function r10() {
    return 30 + r1();
}

function r100() {
    return 200 + r10();
}

console.log(r100()); // 234

// 차이점:
// - C: int r1() { return 4; } → 반환 타입 명시
// - JS: function r1() { return 4; } → 반환 타입 없음
// - C: printf("%d", r100()) → JS: console.log(r100())
// - 함수 호출 체인의 동작 원리는 C와 JS가 동일`,
    },
    {
      id: 20315,
      examId: "2020-3",
      originalNumber: 15,
      language: "Java",
      title: "추상 클래스 (Abstract Class) - Vehicle/Car",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `abstract class Vehicle {
    String name;

    abstract String getName();

    public Vehicle(String name) {
        this.name = name;
    }

    void display() {
        System.out.print("Vehicle name : " + getName());
    }
}

class Car extends Vehicle {
    public Car(String name) {
        super(name);
    }

    String getName() {
        return name;
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle obj = new Car("Spark");
        obj.display();
    }
}`,
      answer: "Vehicle name : Spark",
      explanation: `1. Vehicle obj = new Car("Spark") → Car 생성자 호출
2. Car 생성자: super(name) → Vehicle 생성자 호출 → this.name = "Spark"
3. obj.display() 호출 → Vehicle의 display() 실행
4. display() 내부: "Vehicle name : " + getName()
5. getName()은 추상 메서드 → 실제 객체(Car)의 getName() 실행
6. Car의 getName() → return name → "Spark" 반환
7. 출력: "Vehicle name : Spark"

[핵심]
- abstract class: 직접 객체 생성 불가, 상속하여 추상 메서드를 구현해야 함
- abstract 메서드: 선언만 있고 구현이 없음, 자식 클래스에서 반드시 구현
- super(name): 부모 클래스 생성자 호출
- 다형성: display()에서 getName() 호출 시 실제 객체(Car)의 메서드 실행`,
      jsComparison: `// JavaScript 추상 클래스 동등 코드
// JS에는 abstract 키워드가 없으므로 직접 구현하거나 에러를 던짐
class Vehicle {
    constructor(name) {
        this.name = name;
        // Java의 abstract class 시뮬레이션
        if (new.target === Vehicle) {
            throw new Error("Cannot instantiate abstract class");
        }
    }

    // Java: abstract String getName();
    // JS: 추상 메서드 시뮬레이션
    getName() {
        throw new Error("Abstract method must be implemented");
    }

    display() {
        // Java: System.out.print("Vehicle name : " + getName())
        process.stdout.write("Vehicle name : " + this.getName());
    }
}

class Car extends Vehicle {
    constructor(name) {
        super(name); // Java의 super(name)과 동일
    }

    getName() {
        return this.name; // Java에서는 this 생략 가능, JS에서는 this 필수
    }
}

const obj = new Car("Spark");
obj.display(); // "Vehicle name : Spark"

// 차이점:
// - Java: abstract 키워드로 추상 클래스/메서드 선언
// - JS: abstract 키워드 없음, 수동으로 에러 던지기로 시뮬레이션
// - Java: 필드 접근 시 this 생략 가능, JS: this 필수`,
    },
    {
      id: 20317,
      examId: "2020-3",
      originalNumber: 17,
      language: "Java",
      title: "while + continue (짝수 합)",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `public class Main {
    public static void main(String[] args) {
        int i = 0, sum = 0;

        while (i < 10) {
            i++;
            if (i % 2 != 0) {
                continue;
            }
            sum += i;
        }

        System.out.print(sum);
    }
}`,
      answer: "30",
      explanation: `1. i=0, sum=0으로 시작
2. while(i < 10) 반복:
   i=1: 1%2!=0 → true → continue (건너뜀)
   i=2: 2%2!=0 → false → sum += 2 → sum=2
   i=3: 3%2!=0 → true → continue (건너뜀)
   i=4: 4%2!=0 → false → sum += 4 → sum=6
   i=5: 5%2!=0 → true → continue (건너뜀)
   i=6: 6%2!=0 → false → sum += 6 → sum=12
   i=7: 7%2!=0 → true → continue (건너뜀)
   i=8: 8%2!=0 → false → sum += 8 → sum=20
   i=9: 9%2!=0 → true → continue (건너뜀)
   i=10: 10%2!=0 → false → sum += 10 → sum=30
3. i=10 이후 while 조건 i<10 거짓 → 종료
4. 출력: 30 (= 2 + 4 + 6 + 8 + 10)

[핵심]
- continue: 현재 반복의 나머지 코드를 건너뛰고 다음 반복으로 이동
- i%2 != 0: 홀수 판별 → 홀수면 continue로 건너뜀
- 결과적으로 1~10 중 짝수(2,4,6,8,10)만 합산 = 30`,
      jsComparison: `// JavaScript while + continue 동등 코드
let i = 0, sum = 0;

while (i < 10) {
    i++;
    if (i % 2 !== 0) { // Java: != → JS: !== (엄격 비교 권장)
        continue;
    }
    sum += i;
}

console.log(sum); // 30

// 차이점:
// - Java: i % 2 != 0 → JS: i % 2 !== 0 (=== / !== 엄격 비교 권장)
// - while, continue, +=는 Java와 JS 모두 동일하게 동작
// - Java: System.out.print() → JS: console.log()`,
    },
    {
      id: 2038,
      examId: "2020-3",
      originalNumber: 8,
      language: "SQL",
      title: "GROUP BY + HAVING (최소/최대 점수)",
      question:
        "다음 SQL문을 완성하시오.\n\n[성적 테이블]\n| 학번 | 과목이름   | 점수 |\n|------|-----------|------|\n| 1001 | 데이터베이스 | 95   |\n| 1002 | 데이터베이스 | 88   |\n| 1003 | 운영체제     | 92   |\n| 1004 | 운영체제     | 90   |\n| 1005 | 소프트웨어   | 85   |\n\n과목이름별 최소 점수와 최대 점수를 조회하되, 평균 점수가 90점 이상인 과목만 출력하시오.",
      code: `SELECT 과목이름, MIN(점수) AS 최소점수, MAX(점수) AS 최대점수
FROM 성적
GROUP BY 과목이름
HAVING AVG(점수) >= 90;`,
      answer: "데이터베이스 88 95\n운영체제 90 92",
      explanation: `1. GROUP BY 과목이름 → 과목이름별로 그룹화
   - 데이터베이스: {95, 88}
   - 운영체제: {92, 90}
   - 소프트웨어: {85}

2. HAVING AVG(점수) >= 90 → 평균 점수가 90 이상인 그룹만 선택
   - 데이터베이스: AVG = (95+88)/2 = 91.5 ≥ 90 ✓
   - 운영체제: AVG = (92+90)/2 = 91 ≥ 90 ✓
   - 소프트웨어: AVG = 85/1 = 85 < 90 ✗

3. SELECT 과목이름, MIN(점수), MAX(점수)
   - 데이터베이스: MIN=88, MAX=95
   - 운영체제: MIN=90, MAX=92

[핵심]
- GROUP BY: 특정 컬럼 기준으로 행을 그룹화
- HAVING: GROUP BY 후 그룹에 대한 조건 필터링 (WHERE는 그룹화 전 조건)
- 집계 함수: MIN(), MAX(), AVG(), SUM(), COUNT()`,
    },
    {
      id: 2039,
      examId: "2020-3",
      originalNumber: 9,
      language: "SQL",
      title: "DELETE 문 (행 삭제)",
      question:
        "다음 SQL문의 실행 결과를 설명하시오.\n\n[학생 테이블]\n| 학번 | 이름 | 학년 |\n|------|------|------|\n| 1000 | 민수 | 2    |\n| 2000 | 영희 | 3    |\n| 3000 | 철수 | 1    |",
      code: `DELETE FROM 학생
WHERE 이름 = '민수';`,
      answer: "학번 1000, 이름 민수인 행이 삭제된다",
      explanation: `1. DELETE FROM 학생 → 학생 테이블에서 행을 삭제
2. WHERE 이름 = '민수' → 이름이 '민수'인 행만 삭제 대상
3. 학번=1000, 이름='민수', 학년=2인 행이 삭제됨

삭제 후 학생 테이블:
| 학번 | 이름 | 학년 |
|------|------|------|
| 2000 | 영희 | 3    |
| 3000 | 철수 | 1    |

[핵심]
- DELETE FROM 테이블명 WHERE 조건: 조건에 맞는 행을 삭제
- WHERE 절을 생략하면 테이블의 모든 행이 삭제됨 (주의!)
- DELETE는 행을 삭제, DROP은 테이블 자체를 삭제, TRUNCATE는 모든 행을 빠르게 삭제`,
    },
    // ===== 이론 문제 =====
    {
      id: 20301,
      examId: "2020-3",
      originalNumber: 1,
      language: "이론" as const,
      title: "리팩토링 (Refactoring)",
      question:
        "소프트웨어의 외부 동작을 바꾸지 않으면서 내부 구조를 개선하여 복잡한 코드를 단순화하고, 가독성을 향상시켜 유지보수성을 높이는 기법은?",
      answer: "리팩토링(Refactoring)",
      explanation:
        "리팩토링(Refactoring)은 소프트웨어의 기능(외부 동작)은 변경하지 않으면서 내부 코드 구조를 개선하는 기법입니다.\n\n목적:\n- 코드의 복잡도 감소\n- 가독성 향상\n- 유지보수성 향상\n- 코드의 유연성 및 생산성 향상\n\n리팩토링 기법 예:\n- 메서드 추출(Extract Method)\n- 변수명/메서드명 변경(Rename)\n- 중복 코드 제거\n- 클래스 분리/통합",
    },
    {
      id: 20303,
      examId: "2020-3",
      originalNumber: 3,
      language: "이론" as const,
      title: "OSPF 라우팅 프로토콜",
      question:
        "다익스트라(Dijkstra) 알고리즘을 기반으로 최단 경로를 찾는 링크 상태(Link-State) 라우팅 프로토콜은?",
      answer: "OSPF(Open Shortest Path First)",
      explanation:
        "OSPF(Open Shortest Path First)는 링크 상태(Link-State) 라우팅 프로토콜로, 다익스트라 알고리즘을 사용하여 최단 경로를 계산합니다.\n\n특징:\n- 대규모 네트워크에 적합\n- Area 단위로 네트워크를 분할 관리\n- 변경사항만 전파 (트래픽 감소)\n- 수렴 속도가 빠름\n\n비교:\n- RIP: 거리 벡터 방식, 벨만-포드 알고리즘, 최대 15 홉\n- OSPF: 링크 상태 방식, 다익스트라 알고리즘, 홉 수 제한 없음",
    },
    {
      id: 20304,
      examId: "2020-3",
      originalNumber: 4,
      language: "이론" as const,
      title: "형상 통제",
      question:
        "형상 관리 절차 중 형상 항목의 버전 관리를 위해 변경 여부와 변경 활동을 통제하는 단계는?",
      answer: "형상 통제(Configuration Control)",
      explanation:
        "형상 통제(Configuration Control)는 형상 관리 절차 중 하나로, 형상 항목의 변경 요청을 검토하고 승인하여 현재 베이스라인에 반영될 수 있도록 통제하는 활동입니다.\n\n형상 관리 절차:\n1. 형상 식별: 형상 항목을 정의하고 식별\n2. 형상 통제: 변경 요청 검토, 승인, 통제\n3. 형상 감사: 변경이 올바르게 이루어졌는지 검증\n4. 형상 기록(상태 보고): 변경 이력을 기록하고 보고",
    },
    {
      id: 20305,
      examId: "2020-3",
      originalNumber: 5,
      language: "이론" as const,
      title: "프로토콜",
      question:
        "1969년 미국 ARPA에서 톰 마릴(Tom Marill)이 최초로 사용한 용어로, 컴퓨터와 컴퓨터 사이 또는 한 장치와 다른 장치 사이에서 데이터를 전송하기 위한 통신 규약은?",
      answer: "프로토콜(Protocol)",
      explanation:
        "프로토콜(Protocol)은 서로 다른 시스템 간에 데이터를 원활하게 주고받기 위한 통신 규약(약속)입니다.\n\n프로토콜의 기본 요소:\n1. 구문(Syntax): 데이터 형식, 부호화, 신호 레벨\n2. 의미(Semantics): 제어 정보, 오류 처리\n3. 순서(Timing): 통신 속도, 메시지 순서\n\n대표적인 프로토콜: TCP/IP, HTTP, FTP, SMTP 등",
    },
    {
      id: 20306,
      examId: "2020-3",
      originalNumber: 6,
      language: "이론" as const,
      title: "ICMP",
      question:
        "TCP/IP 프로토콜에서 IP 패킷 처리 중 발생하는 오류나 진단 등의 제어 메시지를 전달하는 프로토콜은?",
      answer: "ICMP(Internet Control Message Protocol)",
      explanation:
        "ICMP(Internet Control Message Protocol)는 IP 패킷의 전송 중 발생하는 오류 보고나 네트워크 진단 메시지를 전달하는 프로토콜입니다.\n\n주요 기능:\n- 목적지 도달 불가(Destination Unreachable) 알림\n- 시간 초과(Time Exceeded) 알림\n- 경로 재지정(Redirect) 메시지\n- Echo Request/Reply (ping 명령에 사용)\n\nICMP는 IP 계층(네트워크 계층)에서 동작하며, ping과 traceroute 명령이 ICMP를 사용합니다.",
    },
    {
      id: 20307,
      examId: "2020-3",
      originalNumber: 7,
      language: "이론" as const,
      title: "분기 커버리지 테스트 경로",
      question:
        "제어 흐름 그래프에서 분기 커버리지(Branch Coverage)를 만족하는 최소 테스트 경로를 쓰시오.\n(노드: 1→2→3→4→5→6→1 / 분기: 2→4, 4→5, 5→6→1, 5→6→7)",
      answer: "1234561, 124567 (또는 1234567, 124561)",
      explanation:
        "분기 커버리지(Branch Coverage / Decision Coverage)는 프로그램의 모든 분기(조건문의 참/거짓)를 최소 한 번씩 실행하는 테스트 기법입니다.\n\n모든 분기점에서 참(True)과 거짓(False) 경로를 모두 수행해야 합니다.\n\n커버리지 유형:\n- 구문 커버리지(Statement Coverage): 모든 문장을 최소 1회 실행\n- 분기 커버리지(Branch Coverage): 모든 분기의 참/거짓 최소 1회 실행\n- 조건 커버리지(Condition Coverage): 모든 개별 조건의 참/거짓 최소 1회 실행",
    },
    {
      id: 20310,
      examId: "2020-3",
      originalNumber: 10,
      language: "이론" as const,
      title: "관계 대수 - 디비전",
      question:
        "관계 대수에서 두 릴레이션의 디비전(Division) 연산에 사용하는 기호는?",
      answer: "÷ (나누기 기호)",
      explanation:
        "관계 대수의 주요 연산자:\n- 합집합(∪): 두 릴레이션의 합\n- 차집합(-): 한 릴레이션에만 존재하는 튜플\n- 교집합(∩): 두 릴레이션에 공통인 튜플\n- 카티션 곱(×): 두 릴레이션의 모든 조합\n- 셀렉트(σ): 조건에 맞는 행 선택 (수평)\n- 프로젝트(π): 특정 속성만 선택 (수직)\n- 조인(⋈): 공통 속성으로 두 릴레이션 결합\n- 디비전(÷): R ÷ S는 S의 모든 튜플과 연관된 R의 튜플 반환",
    },
    {
      id: 20311,
      examId: "2020-3",
      originalNumber: 11,
      language: "이론" as const,
      title: "헝가리안 표기법",
      question:
        "변수명 작성 시 식별자 앞에 데이터 타입을 접두어로 붙이는 표기법은?",
      answer: "헝가리안 표기법(Hungarian Notation)",
      explanation:
        "헝가리안 표기법(Hungarian Notation)은 변수명 앞에 자료형을 나타내는 접두어를 붙이는 명명 규칙입니다.\n\n예시:\n- strName: 문자열(String) 타입의 Name 변수\n- intCount: 정수(Integer) 타입의 Count 변수\n- bFlag: 불리언(Boolean) 타입의 Flag 변수\n\n다른 표기법:\n- 카멜 표기법(camelCase): firstName (첫 단어 소문자, 이후 대문자)\n- 파스칼 표기법(PascalCase): FirstName (모든 단어 첫 글자 대문자)\n- 스네이크 표기법(snake_case): first_name (밑줄로 구분)",
    },
    {
      id: 20312,
      examId: "2020-3",
      originalNumber: 12,
      language: "이론" as const,
      title: "블랙박스 테스트",
      question:
        "동치분할 검사, 경곗값 분석, 원인-효과 그래프 검사 등이 포함되는 소프트웨어 테스트 기법은?",
      answer: "블랙박스 테스트(Black-Box Test)",
      explanation:
        "블랙박스 테스트는 소프트웨어의 내부 구조를 모르는 상태에서 기능을 테스트하는 기법입니다.\n\n블랙박스 테스트 기법:\n1. 동치분할(Equivalence Partitioning): 입력값을 그룹으로 나누어 대표값으로 테스트\n2. 경곗값 분석(Boundary Value Analysis): 경계에 해당하는 값으로 테스트\n3. 원인-효과 그래프(Cause-Effect Graph): 입력과 출력 간의 관계를 분석\n4. 오류 예측: 경험에 기반한 오류 추정\n5. 비교 검사: 여러 버전의 프로그램 결과 비교\n\n비교: 화이트박스 테스트는 내부 구조를 알고 테스트 (기초 경로, 조건, 루프 검사 등)",
    },
    {
      id: 20314,
      examId: "2020-3",
      originalNumber: 14,
      language: "이론" as const,
      title: "스키마 (Schema)",
      question:
        "데이터베이스의 구조와 제약조건에 관한 전반적인 명세를 기술한 메타데이터의 집합으로, 데이터베이스의 기본적인 구조를 정의한 것은?",
      answer: "스키마(Schema)",
      explanation:
        "스키마(Schema)는 데이터베이스의 구조와 제약조건에 대한 전반적인 명세입니다.\n\n스키마의 3계층:\n1. 외부 스키마(External Schema): 사용자 관점의 데이터베이스 구조 (서브 스키마)\n2. 개념 스키마(Conceptual Schema): 데이터베이스의 전체적인 논리 구조\n3. 내부 스키마(Internal Schema): 물리적 저장 구조를 정의\n\n스키마는 데이터 사전(Data Dictionary)에 저장되며, 데이터의 구조, 관계, 제약조건 등을 포함합니다.",
    },
    {
      id: 20316,
      examId: "2020-3",
      originalNumber: 16,
      language: "이론" as const,
      title: "UI 설계 원칙 - 직관성",
      question:
        "UI 설계 원칙 중 누구나 쉽게 이해하고 사용할 수 있도록 하는 원칙은?",
      answer: "직관성",
      explanation:
        "UI(User Interface) 설계 원칙:\n1. 직관성: 누구나 쉽게 이해하고 사용할 수 있도록 설계\n2. 유효성: 사용자의 목표가 정확하게 달성될 수 있도록 설계\n3. 학습성: 누구나 쉽게 배우고 익힐 수 있도록 설계\n4. 유연성: 사용자의 요구사항을 최대한 수용하고 실수를 최소화하도록 설계",
    },
    {
      id: 20318,
      examId: "2020-3",
      originalNumber: 18,
      language: "이론" as const,
      title: "EAI 유형 4가지",
      question:
        "기업 내 각종 애플리케이션 및 플랫폼 간의 정보 전달, 연계, 통합 등을 가능하게 해주는 EAI의 구축 유형 4가지를 쓰시오.",
      answer: "포인트 투 포인트(Point-to-Point), 허브 앤 스포크(Hub & Spoke), 메시지 버스(Message Bus), 하이브리드(Hybrid)",
      explanation:
        "EAI(Enterprise Application Integration) 구축 유형:\n\n1. 포인트 투 포인트(Point-to-Point): 애플리케이션을 1:1로 직접 연결. 단순하지만 변경/확장이 어려움\n2. 허브 앤 스포크(Hub & Spoke): 중앙의 허브를 통해 연결. 허브 장애 시 전체 시스템 영향\n3. 메시지 버스(Message Bus): 미들웨어(버스)를 통해 연결. 확장성이 뛰어남\n4. 하이브리드(Hybrid): 허브 앤 스포크와 메시지 버스의 혼합. 유연성이 높음\n\nEAI는 기업 내 서로 다른 플랫폼과 애플리케이션 간의 정보를 연계하고 통합하는 솔루션입니다.",
    },
    {
      id: 20319,
      examId: "2020-3",
      originalNumber: 19,
      language: "이론" as const,
      title: "생성자 (Constructor)",
      question:
        "객체지향 프로그래밍에서 클래스의 객체가 생성될 때 자동으로 호출되는 특수한 메서드는?",
      answer: "생성자(Constructor)",
      explanation:
        "생성자(Constructor)는 객체가 생성될 때 자동으로 호출되는 특수한 메서드입니다.\n\n특징:\n- 객체의 초기화를 담당\n- 클래스 이름과 동일한 이름을 가짐 (C++, Java 등)\n- 반환 타입이 없음\n- 오버로딩 가능 (매개변수가 다른 여러 생성자 정의 가능)\n- 명시하지 않으면 기본 생성자(Default Constructor)가 자동 생성\n\nC++/Java: 클래스명과 동일한 이름\nPython: __init__() 메서드\nJavaScript: constructor() 메서드",
    },
    {
      id: 20320,
      examId: "2020-3",
      originalNumber: 20,
      language: "이론" as const,
      title: "ALTER TABLE - 속성 추가",
      question:
        "학생 테이블에 주소(VARCHAR(20)) 속성을 추가하는 SQL문을 작성하시오.",
      answer: "ALTER TABLE 학생 ADD 주소 VARCHAR(20);",
      explanation:
        "ALTER TABLE은 테이블의 구조를 변경하는 DDL 명령입니다.\n\nALTER TABLE 주요 명령:\n- ADD: 속성(컬럼) 추가 → ALTER TABLE 테이블명 ADD 컬럼명 데이터타입;\n- MODIFY: 속성 변경 → ALTER TABLE 테이블명 MODIFY 컬럼명 데이터타입;\n- DROP COLUMN: 속성 삭제 → ALTER TABLE 테이블명 DROP COLUMN 컬럼명;\n\nDDL 명령어:\n- CREATE: 생성\n- ALTER: 변경\n- DROP: 삭제\n- TRUNCATE: 테이블 데이터 전체 삭제",
    },
  ],
};

export default exam2020_3;
