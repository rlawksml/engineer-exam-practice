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
    // ===== 이론 문제 =====
    {
      id: 20101,
      examId: "2020-1",
      originalNumber: 1,
      language: "이론" as const,
      title: "살충제 패러독스",
      question:
        "애플리케이션 테스트에서, 동일한 테스트 케이스에 의한 반복적 테스트는 새로운 버그를 찾지 못한다는 원리를 무엇이라 하는가?",
      answer: "살충제 패러독스",
      explanation:
        "살충제 패러독스(Pesticide Paradox)는 소프트웨어 테스트 원리 중 하나로, 동일한 테스트 케이스로 반복 테스트하면 더 이상 새로운 결함을 발견할 수 없다는 원리입니다. 살충제를 반복 사용하면 벌레가 내성이 생기는 것에 비유한 것입니다. 이를 방지하려면 테스트 케이스를 주기적으로 검토하고 개선해야 합니다.",
    },
    {
      id: 20102,
      examId: "2020-1",
      originalNumber: 2,
      language: "이론" as const,
      title: "데이터 마이닝",
      question:
        "대규모로 저장된 데이터 안에서 체계적이고 자동적으로 통계적 규칙이나 패턴을 찾아내는 기술을 무엇이라 하는가?",
      answer: "데이터 마이닝",
      explanation:
        "데이터 마이닝(Data Mining)은 대용량 데이터에서 통계적 규칙이나 패턴을 자동으로 찾아내는 기술입니다. 데이터 웨어하우스에 저장된 데이터를 분석하여 유용한 정보를 추출하며, 분류, 군집화, 연관 규칙 등의 기법을 사용합니다.",
    },
    {
      id: 20103,
      examId: "2020-1",
      originalNumber: 3,
      language: "이론" as const,
      title: "프로토콜의 기본 요소 3가지",
      question: "프로토콜의 기본 요소 3가지를 쓰시오.",
      answer: "구문(Syntax), 의미(Semantics), 순서(Timing)",
      explanation:
        "프로토콜의 기본 요소 3가지:\n1. 구문(Syntax): 데이터의 형식, 부호화, 신호 레벨 등을 정의\n2. 의미(Semantics): 제어 정보, 오류 처리 등 각 비트의 의미를 정의\n3. 순서(Timing): 통신 속도, 메시지 순서 등 시간적 순서를 정의",
    },
    {
      id: 20104,
      examId: "2020-1",
      originalNumber: 4,
      language: "이론" as const,
      title: "W3C 마크업 언어",
      question:
        "W3C에서 개발되었고 다른 특수한 목적을 갖는 마크업 언어를 만드는 데 사용하는 다목적 마크업 언어는?",
      answer: "XML",
      explanation:
        "XML(eXtensible Markup Language)은 W3C에서 개발한 다목적 마크업 언어입니다. HTML과 달리 사용자가 태그를 직접 정의할 수 있으며, 데이터 저장 및 전송에 주로 사용됩니다. SGML의 단순화된 부분집합으로, 다양한 마크업 언어(XHTML, SVG, MathML 등)의 기반이 됩니다.",
    },
    {
      id: 20105,
      examId: "2020-1",
      originalNumber: 5,
      language: "이론" as const,
      title: "속성-값 데이터 포맷",
      question:
        "속성-값 쌍(Attribute-Value Pairs)으로 이루어진 데이터 오브젝트를 전달하기 위해 사용하는 개방형 표준 포맷은?",
      answer: "JSON",
      explanation:
        "JSON(JavaScript Object Notation)은 속성-값 쌍으로 이루어진 경량 데이터 교환 형식입니다. 사람이 읽고 쓰기 쉽고, 기계가 분석하고 생성하기 쉽습니다. JavaScript에서 유래했지만 언어 독립적이며, REST API에서 데이터 전송 포맷으로 널리 사용됩니다.",
    },
    {
      id: 20106,
      examId: "2020-1",
      originalNumber: 6,
      language: "이론" as const,
      title: "SQL SELECT / DISTINCT / COUNT",
      question:
        "200개의 튜플, 학과(DEPT) 속성이 '컴퓨터과', '전기과', '인터넷과' 3개 값을 가지는 학생 테이블에서 다음 SQL 실행 결과의 튜플 수를 쓰시오.\n1) SELECT DEPT FROM STUDENT;\n2) SELECT DISTINCT DEPT FROM STUDENT;\n3) SELECT COUNT(DISTINCT DEPT) FROM STUDENT WHERE DEPT = '컴퓨터과';",
      answer: "1) 200  2) 3  3) 1",
      explanation:
        "1) SELECT DEPT FROM STUDENT: 모든 튜플의 DEPT 값을 출력 → 200개\n2) SELECT DISTINCT DEPT FROM STUDENT: 중복을 제거한 DEPT 값 → 3개 (컴퓨터과, 전기과, 인터넷과)\n3) SELECT COUNT(DISTINCT DEPT) FROM STUDENT WHERE DEPT = '컴퓨터과': 컴퓨터과인 튜플들 중 DISTINCT DEPT의 수 → 1개\n\n[핵심] DISTINCT는 중복을 제거하고, COUNT()는 행 수를 세는 집계 함수입니다.",
    },
    {
      id: 20107,
      examId: "2020-1",
      originalNumber: 7,
      language: "이론" as const,
      title: "HRN 스케줄링 우선순위 계산식",
      question:
        "비선점형 스케줄링 기법 중 HRN(Highest Response-ratio Next) 방식의 우선순위 계산식을 쓰시오.",
      answer: "(대기 시간 + 서비스 시간) / 서비스 시간",
      explanation:
        "HRN(Highest Response-ratio Next) 스케줄링은 비선점 방식으로, 우선순위를 (대기 시간 + 서비스 시간) / 서비스 시간으로 계산합니다. 이 값이 가장 큰 프로세스를 먼저 실행합니다. SJF의 약점인 긴 작업의 기아 현상을 보완하기 위해, 대기 시간이 길어질수록 우선순위가 높아지도록 설계되었습니다.",
    },
    {
      id: 20108,
      examId: "2020-1",
      originalNumber: 8,
      language: "이론" as const,
      title: "트랜잭션 특성 (ACID)",
      question:
        "트랜잭션의 특징 중 다음 설명에 해당하는 것을 쓰시오.\n1) 트랜잭션의 연산은 모두 수행되거나 아예 수행되지 않아야 한다.\n2) 둘 이상의 트랜잭션이 동시에 실행될 때 서로 간섭할 수 없다.",
      answer: "1) 원자성(Atomicity)  2) 독립성(Isolation)",
      explanation:
        "트랜잭션의 ACID 특성:\n1. 원자성(Atomicity): 트랜잭션의 연산은 전부 수행되거나 전부 수행되지 않아야 함 (All or Nothing)\n2. 일관성(Consistency): 트랜잭션 수행 전후에 데이터베이스가 일관된 상태를 유지\n3. 독립성(Isolation): 동시에 실행되는 트랜잭션들이 서로 간섭할 수 없음\n4. 지속성(Durability): 성공적으로 완료된 트랜잭션의 결과는 영구적으로 반영",
    },
    {
      id: 20109,
      examId: "2020-1",
      originalNumber: 9,
      language: "이론" as const,
      title: "랜드 어택 (Land Attack)",
      question:
        "출발지 IP 주소와 목적지 IP 주소를 같게 만들어 공격 대상에게 보내는 공격 방법은?",
      answer: "랜드 어택(Land Attack)",
      explanation:
        "랜드 어택(Land Attack)은 출발지(Source) IP 주소와 목적지(Destination) IP 주소를 동일하게 설정하여 패킷을 보내는 서비스 거부(DoS) 공격입니다. 공격 대상은 자기 자신에게 응답을 보내려고 시도하여 무한 루프에 빠지게 되어 시스템이 마비됩니다.",
    },
    {
      id: 20110,
      examId: "2020-1",
      originalNumber: 10,
      language: "이론" as const,
      title: "MD5 해시 함수",
      question:
        "RFC 1321로 지정되어 있으며, 주로 프로그램이나 파일이 원본 그대로인지 확인하는 무결성 검사 등에 사용되는 128비트 암호화 해시 함수는?",
      answer: "MD5",
      explanation:
        "MD5(Message-Digest algorithm 5)는 RFC 1321로 지정된 128비트 암호화 해시 함수입니다. 임의의 길이의 입력을 받아 128비트(16바이트)의 해시 값을 출력합니다. 주로 파일 무결성 검사에 사용되지만, 보안 취약점이 발견되어 현재는 보안 용도로는 권장되지 않습니다.",
    },
    {
      id: 20111,
      examId: "2020-1",
      originalNumber: 11,
      language: "이론" as const,
      title: "결합도와 응집도",
      question:
        "공통 모듈 구현 시 다음 빈칸에 해당하는 용어를 쓰시오.\n- 모듈 간의 관련성을 나타내는 ( 1 )은/는 줄이고, 모듈 내부의 기능적 관련성을 나타내는 ( 2 )은/는 높여야 좋은 소프트웨어 설계이다.",
      answer: "1) 결합도(Coupling)  2) 응집도(Cohesion)",
      explanation:
        "결합도(Coupling)는 모듈 간의 상호 의존 정도를 나타내며, 낮을수록 좋습니다.\n응집도(Cohesion)는 모듈 내부 요소들이 하나의 기능에 얼마나 관련되어 있는지를 나타내며, 높을수록 좋습니다.\n\n좋은 설계 = 낮은 결합도 + 높은 응집도\n결합도 순서(낮음→높음): 자료→스탬프→제어→외부→공통→내용\n응집도 순서(낮음→높음): 우연적→논리적→시간적→절차적→통신적→순차적→기능적",
    },
    {
      id: 20115,
      examId: "2020-1",
      originalNumber: 15,
      language: "이론" as const,
      title: "릴리스 노트 작성 항목",
      question:
        "릴리스 노트 작성 시 포함되는 항목 중 문서명, 제품명, 버전 번호, 릴리스 날짜, 참고 날짜 등을 포함하는 항목은?",
      answer: "헤더(Header)",
      explanation:
        "릴리스 노트의 주요 항목:\n- 헤더(Header): 문서명, 제품명, 버전 번호, 릴리스 날짜, 참고 날짜 등\n- 개요: 변경사항 요약\n- 목적: 릴리스의 목적 설명\n- 이슈 요약: 해결된 이슈 목록\n- 재현 절차: 버그 재현 방법\n- 수정/개선 내용: 상세 변경 내용\n- 사용자 영향도: 변경으로 인한 사용자 영향\n- SW 지원 영향도: 관련 SW 영향\n- 노트: 추가 참고 사항\n- 면책 조항: 법적 고지\n- 연락처: 문의처 정보",
    },
    {
      id: 20116,
      examId: "2020-1",
      originalNumber: 16,
      language: "이론" as const,
      title: "프로젝트 개발 기간 계산",
      question:
        "5명의 개발자가 참여하고 총 30,000 라인의 코드를 개발해야 한다. 개발자의 월평균 생산성이 300라인일 때, 프로젝트의 개발 기간은?",
      answer: "20개월",
      explanation:
        "프로젝트 개발 기간 계산:\n- 총 코드 라인: 30,000 라인\n- 개발자 수: 5명\n- 월평균 생산성: 300라인/월/인\n\n개발 기간 = 총 라인 수 / (개발자 수 x 월 생산성)\n= 30,000 / (5 x 300)\n= 30,000 / 1,500\n= 20개월",
    },
    {
      id: 20117,
      examId: "2020-1",
      originalNumber: 17,
      language: "이론" as const,
      title: "비정규화(De-Normalization)",
      question:
        "시스템의 성능 향상과 개발 운영의 단순화를 위해 중복, 통합, 분리 등을 수행하는 데이터 모델링 기법은?",
      answer: "비정규화(반정규화, De-Normalization)",
      explanation:
        "비정규화(De-Normalization)는 정규화된 데이터 모델에서 성능 향상과 개발 편의를 위해 의도적으로 중복을 허용하는 기법입니다. 테이블 통합, 테이블 분할, 중복 테이블 추가, 중복 속성 추가 등의 방법을 사용합니다. 정규화로 인한 과도한 조인(JOIN)으로 성능이 저하될 때 적용합니다.",
    },
    {
      id: 20118,
      examId: "2020-1",
      originalNumber: 18,
      language: "이론" as const,
      title: "OSI 물리 계층",
      question:
        "OSI 7계층 중 전송에 필요한 두 장치 간의 실제 접속과 절단, 기계적/전기적/기능적/절차적 특성에 대한 규칙을 정의하며 비트(Bit) 단위로 데이터를 전송하는 계층은?",
      answer: "물리 계층(Physical Layer)",
      explanation:
        "물리 계층(Physical Layer)은 OSI 7계층의 제1계층으로, 실제 장치 간의 물리적 연결과 데이터를 비트 단위로 전송하는 역할을 합니다.\n\nOSI 7계층:\n1. 물리(Physical): 비트 전송\n2. 데이터 링크(Data Link): 프레임 전송\n3. 네트워크(Network): 패킷 라우팅\n4. 전송(Transport): 세그먼트 전송\n5. 세션(Session): 연결 관리\n6. 표현(Presentation): 데이터 변환\n7. 응용(Application): 사용자 인터페이스",
    },
    {
      id: 20119,
      examId: "2020-1",
      originalNumber: 19,
      language: "이론" as const,
      title: "애플리케이션 성능 지표",
      question:
        "애플리케이션의 성능을 측정하는 지표 중 다음에 해당하는 것을 쓰시오.\n1) 일정 시간 내에 처리하는 일의 양\n2) 요청 후 응답이 도착할 때까지의 시간\n3) 작업을 의뢰한 시간부터 처리가 완료될 때까지 걸린 시간",
      answer: "1) 처리량(Throughput)  2) 응답 시간(Response Time)  3) 경과 시간(Turnaround Time)",
      explanation:
        "애플리케이션 성능 지표:\n1. 처리량(Throughput): 일정 시간 내에 처리하는 일의 양(트랜잭션 수)\n2. 응답 시간(Response Time): 요청 후 응답이 도착할 때까지의 시간\n3. 경과 시간(Turnaround Time): 작업 의뢰부터 처리 완료까지의 전체 시간\n4. 자원 활용률(Resource Utilization): CPU, 메모리 등의 사용률",
    },
    {
      id: 20120,
      examId: "2020-1",
      originalNumber: 20,
      language: "이론" as const,
      title: "Fan-In",
      question:
        "다음 모듈 구조도에서 Fan-In이 2 이상인 모듈을 쓰시오.\n(모듈 A→B, A→C, A→D, B→E, B→F, C→F, D→G, D→H, E→H)",
      answer: "F, H",
      explanation:
        "Fan-In은 해당 모듈을 호출하는 상위 모듈의 수입니다.\n- A: Fan-In = 0 (호출하는 모듈 없음)\n- B: Fan-In = 1 (A가 호출)\n- C: Fan-In = 1 (A가 호출)\n- D: Fan-In = 1 (A가 호출)\n- E: Fan-In = 1 (B가 호출)\n- F: Fan-In = 2 (B, C가 호출) -> 2 이상\n- G: Fan-In = 1 (D가 호출)\n- H: Fan-In = 2 (D, E가 호출) -> 2 이상\n\nFan-In이 높으면 재사용성이 높은 모듈입니다.\nFan-Out은 해당 모듈이 호출하는 하위 모듈의 수입니다.",
    },
  ],
};

export default exam2020_1;
