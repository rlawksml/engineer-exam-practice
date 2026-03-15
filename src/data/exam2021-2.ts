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
    // ===== 이론 문제 =====
    {
      id: 21201,
      examId: "2021-2",
      originalNumber: 1,
      language: "이론" as const,
      title: "애드혹 네트워크 (Ad-hoc Network)",
      question:
        "네트워크 장치가 필요 없이 노드들이 서로 동등하게 통신하는 자율적인 네트워크로, 동적으로 토폴로지가 변하며 긴급 구조나 군사 작전 등에 활용되는 네트워크는?",
      answer: "애드혹 네트워크(Ad-hoc Network)",
      explanation:
        "애드혹 네트워크(Ad-hoc Network)는 고정된 기반 시설(기지국, 액세스 포인트 등) 없이 이동 호스트들만으로 구성되는 임시 네트워크입니다.\n\n특징:\n- 네트워크 장비(라우터, AP 등) 불필요\n- 노드들이 동등한 관계로 통신\n- 동적으로 토폴로지가 변경\n- 멀티홉(Multi-hop) 라우팅\n\n활용:\n- 긴급 재난 구조\n- 군사 작전\n- 임시 회의실 네트워크\n- IoT(사물인터넷)",
    },
    {
      id: 21202,
      examId: "2021-2",
      originalNumber: 2,
      language: "이론" as const,
      title: "UX / UI",
      question:
        "다음에 해당하는 용어를 쓰시오.\n1) 사용자가 시스템이나 서비스를 이용하면서 느끼는 총체적인 경험\n2) 사용자와 시스템 간의 상호작용을 위한 인터페이스 (CLI가 예시)",
      answer: "1) UX(User Experience)  2) UI(User Interface)",
      explanation:
        "UX와 UI:\n\n1. UX(User Experience, 사용자 경험):\n   - 사용자가 제품/서비스를 이용하면서 느끼는 총체적 경험\n   - 감정, 태도, 인식 등을 포함\n   - 유용성, 사용성, 감성 등을 고려\n\n2. UI(User Interface, 사용자 인터페이스):\n   - 사용자와 시스템 간의 상호작용을 위한 접점\n   - 종류: CLI(명령줄), GUI(그래픽), NUI(자연어), OUI(유기적)\n\nUI는 UX의 하위 개념으로, 좋은 UI가 좋은 UX를 보장하지는 않습니다.",
    },
    {
      id: 21203,
      examId: "2021-2",
      originalNumber: 3,
      language: "이론" as const,
      title: "원자성 (Atomicity)",
      question:
        "트랜잭션의 특성 중 원자성(Atomicity)을 설명하시오.",
      answer: "트랜잭션의 연산은 모두 반영되거나 전혀 반영되지 않아야 한다 (All or Nothing)",
      explanation:
        "트랜잭션의 ACID 특성:\n\n1. 원자성(Atomicity): 트랜잭션의 모든 연산이 완전히 수행되거나, 아예 수행되지 않아야 함 (All or Nothing)\n   - 일부만 실행되는 것은 허용되지 않음\n   - 실패 시 ROLLBACK으로 원래 상태로 복구\n\n2. 일관성(Consistency): 트랜잭션 전후 데이터베이스 상태가 일관되어야 함\n3. 독립성(Isolation): 동시 실행 트랜잭션들이 서로 간섭하지 않아야 함\n4. 지속성(Durability): COMMIT된 결과는 영구적으로 반영",
    },
    {
      id: 21204,
      examId: "2021-2",
      originalNumber: 4,
      language: "이론" as const,
      title: "제2정규형 - 부분 함수 종속 제거",
      question:
        "제2정규형(2NF)은 제1정규형을 만족하면서 어떤 종류의 함수적 종속을 제거한 것인가?",
      answer: "부분 함수 종속(Partial Functional Dependency)",
      explanation:
        "정규화 과정:\n\n- 제1정규형(1NF): 모든 속성의 도메인이 원자값(Atomic Value)으로 구성\n- 제2정규형(2NF): 1NF + 부분 함수 종속 제거 (완전 함수 종속만 존재)\n- 제3정규형(3NF): 2NF + 이행 함수 종속 제거\n- BCNF: 3NF + 모든 결정자가 후보키\n- 제4정규형(4NF): BCNF + 다치 종속 제거\n- 제5정규형(5NF): 4NF + 조인 종속 제거\n\n부분 함수 종속: 복합 키의 일부만으로 속성이 결정되는 경우",
    },
    {
      id: 21205,
      examId: "2021-2",
      originalNumber: 5,
      language: "이론" as const,
      title: "UPDATE SET 구문",
      question:
        "다음 SQL문의 빈칸을 채우시오.\n( 1 ) 테이블명 ( 2 ) 컬럼명 = 값 WHERE 점수 >= 90;",
      answer: "1) UPDATE  2) SET",
      explanation:
        "UPDATE 문법:\nUPDATE 테이블명 SET 컬럼명 = 값 WHERE 조건;\n\nDML(Data Manipulation Language) 명령어:\n- SELECT: 조회\n- INSERT: 삽입\n- UPDATE: 수정\n- DELETE: 삭제\n\nUPDATE 예시:\nUPDATE 학생 SET 점수 = 100 WHERE 이름 = '홍길동';\n→ 학생 테이블에서 이름이 '홍길동'인 행의 점수를 100으로 변경",
    },
    {
      id: 21206,
      examId: "2021-2",
      originalNumber: 6,
      language: "이론" as const,
      title: "JOIN ON 구문",
      question:
        "다음 SQL문의 빈칸을 채우시오.\nSELECT ... FROM 테이블A a JOIN 테이블B b ( 1 ) a.컬럼 = b.( 2 );",
      answer: "1) ON  2) 컬럼명",
      explanation:
        "JOIN 구문:\nSELECT 컬럼 FROM 테이블A JOIN 테이블B ON 조인조건;\n\nJOIN 종류:\n- INNER JOIN: 양쪽 테이블에 모두 존재하는 행만 결합\n- LEFT JOIN: 왼쪽 테이블의 모든 행 + 오른쪽 일치 행\n- RIGHT JOIN: 오른쪽 테이블의 모든 행 + 왼쪽 일치 행\n- FULL OUTER JOIN: 양쪽 테이블의 모든 행\n- CROSS JOIN: 모든 행의 조합 (카티션 곱)\n\nON 절은 조인 조건을 지정합니다.",
    },
    {
      id: 21208,
      examId: "2021-2",
      originalNumber: 8,
      language: "이론" as const,
      title: "AES 암호화",
      question:
        "DES를 대체하는 대칭키 암호화 알고리즘으로, 128비트 블록 크기에 128/192/256비트 키를 사용하는 것은?",
      answer: "AES(Advanced Encryption Standard)",
      explanation:
        "AES(Advanced Encryption Standard)는 미국 NIST에서 DES를 대체하기 위해 선정한 대칭키 블록 암호 알고리즘입니다.\n\n특징:\n- 블록 크기: 128비트 고정\n- 키 길이: 128비트, 192비트, 256비트\n- 라운드 수: 키 길이에 따라 10, 12, 14라운드\n- SPN(Substitution-Permutation Network) 구조\n\n대칭키 암호 비교:\n- DES: 64비트 블록, 56비트 키 (현재 안전하지 않음)\n- 3DES: DES를 3번 적용\n- AES: 128비트 블록, 128/192/256비트 키 (현재 표준)\n- SEED: 한국 표준 블록 암호",
    },
    {
      id: 21209,
      examId: "2021-2",
      originalNumber: 9,
      language: "이론" as const,
      title: "화이트박스 테스트 - 구문/결정/조건 커버리지",
      question:
        "화이트박스 테스트 기법 중 다음에 해당하는 것을 쓰시오.\n1) 모든 명령문을 최소 한 번 실행\n2) 결정(조건문) 전체의 참/거짓을 최소 한 번 실행\n3) 개별 조건식의 참/거짓을 최소 한 번 실행",
      answer: "1) 구문 커버리지(Statement Coverage)  2) 결정 커버리지(Decision Coverage)  3) 조건 커버리지(Condition Coverage)",
      explanation:
        "화이트박스 테스트 커버리지 유형:\n\n1. 구문 커버리지(Statement Coverage): 모든 문장(명령문)을 최소 1회 실행\n2. 결정 커버리지(Decision Coverage / Branch Coverage): 모든 결정(조건문)의 참/거짓을 최소 1회 실행\n3. 조건 커버리지(Condition Coverage): 복합 조건의 개별 조건식이 참/거짓 최소 1회\n4. 조건/결정 커버리지: 조건 + 결정 커버리지 동시 만족\n5. 변경 조건/결정 커버리지(MC/DC): 각 조건이 독립적으로 결정에 영향\n6. 다중 조건 커버리지: 모든 조건의 가능한 조합",
    },
    {
      id: 21210,
      examId: "2021-2",
      originalNumber: 10,
      language: "이론" as const,
      title: "SQL LIKE / ORDER BY DESC",
      question:
        "다음 SQL문의 빈칸을 채우시오.\n이름이 '이'로 시작하는 학생을 검색하되 내림차순 정렬:\nSELECT * FROM 학생 WHERE 이름 LIKE ( 1 ) ORDER BY 이름 ( 2 );",
      answer: "1) '이%'  2) DESC",
      explanation:
        "SQL 와일드카드와 정렬:\n\nLIKE 와일드카드:\n- %: 0개 이상의 임의 문자 (예: '이%' → '이'로 시작하는 모든 문자열)\n- _: 정확히 1개의 임의 문자 (예: '이_' → '이' 뒤에 한 글자)\n\nORDER BY 정렬:\n- ASC: 오름차순 (기본값, 생략 가능)\n- DESC: 내림차순\n\n예시:\n- '이%': 이로 시작 (이영희, 이철수 등)\n- '%이': 이로 끝남 (김영이 등)\n- '%이%': 이를 포함 (김이름, 이영희 등)\n- '이_': 이 뒤에 정확히 한 글자 (이솔, 이준 등)",
    },
    {
      id: 21211,
      examId: "2021-2",
      originalNumber: 11,
      language: "이론" as const,
      title: "응집도 유형 - 절차적/교환적/기능적",
      question:
        "응집도 유형 중 다음에 해당하는 것을 쓰시오.\n1) 모듈 내 요소들이 순차적으로 실행되지만 서로 관련 없는 기능을 수행\n2) 동일한 입력과 출력을 사용하는 요소들로 구성\n3) 모듈 내 모든 요소가 하나의 기능에 밀접하게 관련",
      answer: "1) 절차적 응집도(Procedural Cohesion)  2) 교환적 응집도(Communicational Cohesion)  3) 기능적 응집도(Functional Cohesion)",
      explanation:
        "응집도(Cohesion) 유형 (낮음 → 높음, 높을수록 좋음):\n\n1. 우연적 응집도(Coincidental): 서로 관련 없는 요소들이 모임\n2. 논리적 응집도(Logical): 유사한 성격의 처리를 한 모듈에서 수행\n3. 시간적 응집도(Temporal): 특정 시점에 함께 실행되는 요소들\n4. 절차적 응집도(Procedural): 순차적으로 실행되지만 관련 없는 기능\n5. 교환적 응집도(Communicational): 동일한 입출력을 사용하는 요소들\n6. 순차적 응집도(Sequential): 한 요소의 출력이 다음 요소의 입력\n7. 기능적 응집도(Functional): 단일 기능에 모든 요소가 관련 (가장 좋음)",
    },
    {
      id: 21212,
      examId: "2021-2",
      originalNumber: 12,
      language: "이론" as const,
      title: "가상 회선 / 데이터그램",
      question:
        "패킷 교환 방식 중 다음에 해당하는 것을 쓰시오.\n1) 연결형 서비스로, 데이터 전송 전 경로를 미리 설정하는 방식\n2) 비연결형 서비스로, 각 패킷의 헤더에 주소를 포함하여 독립적으로 전송하는 방식",
      answer: "1) 가상 회선(Virtual Circuit)  2) 데이터그램(Datagram)",
      explanation:
        "패킷 교환 방식:\n\n1. 가상 회선(Virtual Circuit):\n   - 연결형 서비스\n   - 데이터 전송 전 논리적 경로 설정\n   - 모든 패킷이 동일 경로로 순서대로 전달\n   - 신뢰성 높음\n   - 예: X.25, ATM, Frame Relay\n\n2. 데이터그램(Datagram):\n   - 비연결형 서비스\n   - 각 패킷이 독립적으로 경로 선택\n   - 패킷의 도착 순서가 다를 수 있음\n   - 유연하고 빠름\n   - 예: IP, UDP",
    },
    {
      id: 21213,
      examId: "2021-2",
      originalNumber: 13,
      language: "이론" as const,
      title: "행위 패턴 (Behavioral Pattern)",
      question:
        "GoF 디자인 패턴에서 객체들 간의 반복되는 상호작용 패턴을 기술하는 분류는?",
      answer: "행위 패턴(Behavioral Pattern)",
      explanation:
        "GoF(Gang of Four) 디자인 패턴 분류:\n\n1. 생성(Creational) 패턴: 객체 생성 관련\n   - Factory Method, Abstract Factory, Builder, Prototype, Singleton\n\n2. 구조(Structural) 패턴: 클래스/객체 조합 관련\n   - Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy\n\n3. 행위(Behavioral) 패턴: 객체 간 상호작용과 책임 분배\n   - Observer, Strategy, Command, Iterator, Mediator, Memento, State, Template Method, Visitor, Chain of Responsibility, Interpreter",
    },
    {
      id: 21214,
      examId: "2021-2",
      originalNumber: 14,
      language: "이론" as const,
      title: "로킹 (Locking)",
      question:
        "데이터베이스에서 동시성 제어를 위해 트랜잭션이 접근하려는 데이터에 대해 상호 배제(Mutual Exclusion)를 적용하는 기법은?",
      answer: "로킹(Locking)",
      explanation:
        "로킹(Locking)은 트랜잭션이 데이터에 접근할 때 잠금(Lock)을 설정하여 다른 트랜잭션의 접근을 제한하는 동시성 제어 기법입니다.\n\n잠금 유형:\n- 공유 잠금(Shared Lock, S-Lock): 읽기만 허용, 다른 S-Lock 허용\n- 배타 잠금(Exclusive Lock, X-Lock): 읽기/쓰기 모두 독점\n\n동시성 제어 기법:\n1. 로킹(Locking)\n2. 타임스탬프(Timestamp)\n3. 낙관적 검증(Optimistic Validation)\n4. 다중 버전(MVCC)\n\n문제점: 교착 상태(Deadlock) 발생 가능",
    },
    {
      id: 21215,
      examId: "2021-2",
      originalNumber: 15,
      language: "이론" as const,
      title: "럼바우 분석 기법 (OMT)",
      question:
        "럼바우(Rumbaugh)의 객체지향 분석 기법에서 다음에 해당하는 모델링을 쓰시오.\n1) 자료 흐름도(DFD)를 통해 입력이 출력으로 변환되는 과정을 모델링\n2) 상태 다이어그램을 통해 시간에 따른 객체의 상태 변화를 모델링\n3) 객체 다이어그램을 통해 객체들 간의 관계를 모델링",
      answer: "1) 기능 모델링(Functional Modeling)  2) 동적 모델링(Dynamic Modeling)  3) 객체 모델링(Object Modeling)",
      explanation:
        "럼바우(Rumbaugh)의 OMT(Object Modeling Technique) 분석 기법:\n\n1. 객체 모델링(Object Modeling):\n   - 객체 다이어그램 사용\n   - 객체들 간의 관계(연관, 집합, 상속 등) 표현\n   - 가장 중요하고 먼저 수행\n\n2. 동적 모델링(Dynamic Modeling):\n   - 상태 다이어그램(State Diagram) 사용\n   - 시간에 따른 객체의 상태 변화와 이벤트 표현\n\n3. 기능 모델링(Functional Modeling):\n   - 자료 흐름도(DFD) 사용\n   - 입력이 출력으로 변환되는 과정을 표현\n   - 프로세스와 데이터 흐름",
    },
    {
      id: 21217,
      examId: "2021-2",
      originalNumber: 17,
      language: "이론" as const,
      title: "static 키워드",
      question:
        "클래스에서 객체를 생성하지 않고도 직접 호출할 수 있는 메서드를 선언할 때 사용하는 키워드는?",
      answer: "static",
      explanation:
        "static 키워드는 클래스 수준의 멤버(변수, 메서드)를 선언할 때 사용합니다.\n\n특징:\n- 객체를 생성하지 않고 클래스명.메서드명()으로 호출 가능\n- 모든 인스턴스가 공유하는 클래스 변수 선언\n- static 메서드 내에서는 인스턴스 변수/메서드 접근 불가\n- 프로그램 시작 시 메모리에 할당\n\n예시:\n- Math.random(): Math 객체 생성 없이 호출\n- Integer.parseInt(): 정적 메서드로 직접 호출\n- public static void main(): Java 프로그램 진입점",
    },
    {
      id: 21220,
      examId: "2021-2",
      originalNumber: 20,
      language: "이론" as const,
      title: "스텁 (Stub)",
      question:
        "테스트 하네스(Test Harness) 도구 중 하향식(Top-Down) 통합 테스트에서 하위 모듈을 대체하는 가상 모듈은?",
      answer: "스텁(Stub)",
      explanation:
        "통합 테스트 도구:\n\n1. 스텁(Stub):\n   - 하향식(Top-Down) 통합 테스트에서 사용\n   - 아직 개발되지 않은 하위 모듈을 대체하는 가상 모듈\n   - 단순한 결과값만 반환\n\n2. 드라이버(Driver):\n   - 상향식(Bottom-Up) 통합 테스트에서 사용\n   - 아직 개발되지 않은 상위 모듈을 대체\n   - 테스트 대상 모듈을 호출하는 역할\n\n테스트 하네스(Test Harness) 구성:\n- 스텁(Stub), 드라이버(Driver)\n- 테스트 슈트(Test Suite)\n- 테스트 케이스(Test Case)\n- 테스트 스크립트(Test Script)\n- 목 오브젝트(Mock Object)",
    },
  ],
};

export default exam2021_2;
