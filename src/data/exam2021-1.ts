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
    // ===== 이론 문제 =====
    {
      id: 21101,
      examId: "2021-1",
      originalNumber: 1,
      language: "이론" as const,
      title: "RARP",
      question:
        "물리 네트워크(MAC) 주소에 해당하는 IP 주소를 알려주는 프로토콜로, 역순 주소 결정 프로토콜이라고 하는 것은?",
      answer: "RARP(Reverse Address Resolution Protocol)",
      explanation:
        "RARP(Reverse Address Resolution Protocol)는 물리적 주소(MAC 주소)를 IP 주소로 변환하는 프로토콜입니다.\n\n주소 변환 프로토콜:\n- ARP(Address Resolution Protocol): IP 주소 → MAC 주소 변환\n- RARP(Reverse ARP): MAC 주소 → IP 주소 변환\n\nRARP는 디스크가 없는 워크스테이션이 부팅 시 자신의 IP 주소를 알아내기 위해 사용합니다. 현재는 DHCP로 대체되었습니다.",
    },
    {
      id: 21102,
      examId: "2021-1",
      originalNumber: 2,
      language: "이론" as const,
      title: "DB 설계 절차",
      question:
        "DB 설계 절차에서 다음 설명에 해당하는 단계를 쓰시오.\n1) 특정 DBMS의 특성 및 성능을 고려하여 물리적인 저장 구조로 변환하는 단계\n2) 현실 세계를 추상적 개념으로 표현하여 개념적 구조를 도출하는 단계\n3) 목표 DBMS에 맞는 스키마를 설계하는 단계",
      answer: "1) 물리적 설계  2) 개념적 설계  3) 논리적 설계",
      explanation:
        "데이터베이스 설계 절차:\n1. 요구사항 분석: 사용자 요구사항 수집 및 분석\n2. 개념적 설계: 현실 세계를 추상적으로 표현 (E-R 다이어그램 작성, DBMS 독립적)\n3. 논리적 설계: 목표 DBMS에 맞는 논리적 스키마 설계 (관계형 모델 등)\n4. 물리적 설계: DBMS 특성과 성능을 고려하여 물리적 저장 구조로 변환 (인덱스, 저장 공간 등)\n5. 구현: 실제 DDL로 데이터베이스 생성",
    },
    {
      id: 21103,
      examId: "2021-1",
      originalNumber: 3,
      language: "이론" as const,
      title: "기능적/비기능적 요구사항",
      question:
        "요구사항의 유형 중 다음에 해당하는 것을 쓰시오.\n1) 시스템이 수행해야 하는 기능과 서비스에 관한 요구사항\n2) 시스템의 기능 이외의 성능, 보안, 제약사항 등에 관한 요구사항",
      answer: "1) 기능적 요구사항  2) 비기능적 요구사항",
      explanation:
        "요구사항의 유형:\n\n1. 기능적 요구사항(Functional Requirements):\n   - 시스템이 수행해야 하는 기능 관련\n   - 입력, 출력, 처리, 저장 기능\n   - 예: 로그인 기능, 검색 기능, 결제 기능\n\n2. 비기능적 요구사항(Non-Functional Requirements):\n   - 기능 외의 품질 관련 요구사항\n   - 성능, 보안, 신뢰성, 사용성, 유지보수성\n   - 예: 응답시간 3초 이내, 99.9% 가용성, 동시 접속 1000명 지원",
    },
    {
      id: 21104,
      examId: "2021-1",
      originalNumber: 4,
      language: "이론" as const,
      title: "WSDL",
      question:
        "웹 서비스명, 제공 위치, 메시지 포맷, 프로토콜 정보 등 웹 서비스에 대한 상세 정보를 기술한 XML 형식의 언어는?",
      answer: "WSDL(Web Services Description Language)",
      explanation:
        "WSDL(Web Services Description Language)은 웹 서비스의 기능, 위치, 호출 방법 등을 기술하는 XML 기반의 언어입니다.\n\n웹 서비스 관련 기술:\n- SOAP: XML 기반 메시지 교환 프로토콜\n- WSDL: 웹 서비스의 인터페이스(기능, 위치, 메시지 포맷 등)를 기술\n- UDDI: 웹 서비스를 등록하고 검색할 수 있는 저장소\n\nWSDL 주요 요소:\n- types: 메시지 데이터 타입 정의\n- message: 메시지 형식 정의\n- portType: 오퍼레이션(기능) 정의\n- binding: 프로토콜과 데이터 포맷 정의\n- service: 서비스 위치(URL) 정의",
    },
    {
      id: 21108,
      examId: "2021-1",
      originalNumber: 8,
      language: "이론" as const,
      title: "반정규화 (비정규화)",
      question:
        "정규화된 엔티티, 속성, 관계에 대해 시스템의 성능 향상과 개발 운영의 단순화를 위해 중복, 통합, 분리 등을 수행하는 데이터 모델링 기법은?",
      answer: "반정규화(비정규화, De-Normalization)",
      explanation:
        "반정규화(De-Normalization)는 정규화된 데이터 모델에서 성능 향상이나 개발 편의를 위해 의도적으로 중복을 허용하는 기법입니다.\n\n적용 시기:\n- 정규화로 인해 과도한 JOIN이 발생하여 성능이 저하될 때\n- 대량의 범위 처리가 빈번할 때\n- 통계 처리가 자주 필요할 때\n\n방법:\n- 테이블 병합, 테이블 분할(수직/수평)\n- 중복 테이블/컬럼 추가\n- 파생 컬럼 추가",
    },
    {
      id: 21109,
      examId: "2021-1",
      originalNumber: 9,
      language: "이론" as const,
      title: "경곗값 분석 / 동등분할 테스트",
      question:
        "블랙박스 테스트 기법 중 다음에 해당하는 것을 쓰시오.\n1) 입력 조건의 경계값을 테스트 케이스로 선정하여 테스트하는 기법\n2) 입력 데이터를 유사한 특성을 가진 그룹으로 분류하여 대표값으로 테스트하는 기법",
      answer: "1) 경곗값 분석(Boundary Value Analysis)  2) 동등분할 테스트(Equivalence Partitioning)",
      explanation:
        "블랙박스 테스트 기법:\n\n1. 경곗값 분석(Boundary Value Analysis):\n   - 입력값의 경계에서 오류가 발생할 가능성이 높다는 점에 착안\n   - 경계값(최소값, 최대값, 경계 직전/직후)을 테스트\n   - 예: 0~100 범위 → -1, 0, 1, 99, 100, 101 테스트\n\n2. 동등분할(Equivalence Partitioning):\n   - 입력 데이터를 유사한 동작을 하는 그룹(등가 클래스)으로 분류\n   - 각 그룹에서 대표값을 선택하여 테스트\n   - 유효 클래스와 무효 클래스로 구분",
    },
    {
      id: 21110,
      examId: "2021-1",
      originalNumber: 10,
      language: "이론" as const,
      title: "단위 테스트 / 통합 테스트",
      question:
        "소프트웨어 테스트 유형 중 다음에 해당하는 것을 쓰시오.\n1) 개별 모듈이 정상적으로 실행되는지 확인하는 테스트\n2) 모듈 간의 인터페이스가 정상적으로 실행되는지 확인하는 테스트",
      answer: "1) 단위 테스트(Unit Test)  2) 통합 테스트(Integration Test)",
      explanation:
        "소프트웨어 테스트 단계:\n1. 단위 테스트(Unit Test): 개별 모듈(함수, 클래스)의 정상 동작 확인\n2. 통합 테스트(Integration Test): 모듈 간 인터페이스 및 상호작용 확인\n3. 시스템 테스트(System Test): 전체 시스템의 요구사항 충족 확인\n4. 인수 테스트(Acceptance Test): 사용자 요구사항 충족 여부 확인\n   - 알파 테스트: 개발자 환경에서 사용자가 테스트\n   - 베타 테스트: 실제 사용 환경에서 사용자가 테스트",
    },
    {
      id: 21111,
      examId: "2021-1",
      originalNumber: 11,
      language: "이론" as const,
      title: "IPv6 / IPv4 비트",
      question:
        "다음에 해당하는 답을 쓰시오.\n1) IPv6의 주소 비트 길이는?\n2) IPv4의 주소를 몇 비트씩 나누어 표현하는가?",
      answer: "1) 128비트  2) 8비트",
      explanation:
        "IP 주소 체계:\n\nIPv4:\n- 총 32비트\n- 8비트씩 4부분으로 나누어 10진수로 표현\n- 예: 192.168.0.1 (8비트.8비트.8비트.8비트)\n- 약 43억 개의 주소 공간\n\nIPv6:\n- 총 128비트\n- 16비트씩 8부분으로 나누어 16진수로 표현\n- 예: 2001:0db8:85a3:0000:0000:8a2e:0370:7334\n- 사실상 무한한 주소 공간",
    },
    {
      id: 21112,
      examId: "2021-1",
      originalNumber: 12,
      language: "이론" as const,
      title: "IPC (프로세스 간 통신)",
      question:
        "공유 메모리, 소켓, 세마포어, 메시지 큐 등을 이용하여 프로세스 간에 데이터를 주고받는 통신 기술은?",
      answer: "IPC(Inter-Process Communication)",
      explanation:
        "IPC(Inter-Process Communication)는 프로세스 간에 데이터를 교환하기 위한 통신 메커니즘입니다.\n\nIPC 기법:\n1. 공유 메모리(Shared Memory): 메모리 영역을 공유하여 데이터 교환\n2. 메시지 큐(Message Queue): 메시지를 큐에 넣고 꺼내며 교환\n3. 파이프(Pipe): 단방향 데이터 흐름 통로\n4. 소켓(Socket): 네트워크를 통한 프로세스 간 통신\n5. 세마포어(Semaphore): 동기화를 위한 카운터 기반 기법\n6. 시그널(Signal): 비동기적 이벤트 통지",
    },
    {
      id: 21113,
      examId: "2021-1",
      originalNumber: 13,
      language: "이론" as const,
      title: "EAI",
      question:
        "기업 내 다양한 플랫폼과 애플리케이션 간의 정보를 전달, 연계, 통합할 수 있도록 해주는 솔루션은?",
      answer: "EAI(Enterprise Application Integration)",
      explanation:
        "EAI(Enterprise Application Integration)는 기업 내의 다양한 애플리케이션과 플랫폼을 연결하여 데이터와 비즈니스 프로세스를 통합하는 솔루션입니다.\n\nEAI 구축 유형:\n1. 포인트 투 포인트(Point-to-Point): 1:1 직접 연결\n2. 허브 앤 스포크(Hub & Spoke): 중앙 허브를 통해 연결\n3. 메시지 버스(Message Bus): 미들웨어 버스를 통해 연결\n4. 하이브리드(Hybrid): 허브 앤 스포크 + 메시지 버스 혼합",
    },
    {
      id: 21114,
      examId: "2021-1",
      originalNumber: 14,
      language: "이론" as const,
      title: "카디널리티와 디그리",
      question:
        "학생정보 테이블이 5행 4열일 때, 카디널리티(Cardinality)와 디그리(Degree)를 쓰시오.",
      answer: "카디널리티: 5, 디그리: 4",
      explanation:
        "관계형 데이터베이스 용어:\n\n- 카디널리티(Cardinality): 튜플(행, Row)의 수 → 5\n- 디그리(Degree): 속성(열, Column)의 수 → 4\n\n관계 용어 대응:\n- 릴레이션(Relation) = 테이블(Table)\n- 튜플(Tuple) = 행(Row) = 레코드(Record)\n- 속성(Attribute) = 열(Column) = 필드(Field)\n- 도메인(Domain) = 속성이 가질 수 있는 값의 범위",
    },
    {
      id: 21116,
      examId: "2021-1",
      originalNumber: 16,
      language: "이론" as const,
      title: "데이터 모델 구성요소",
      question:
        "데이터 모델의 3가지 구성요소 중 다음에 해당하는 것을 쓰시오.\n1) 데이터에 대한 처리 작업에 대한 명세\n2) 개체 데이터 모델에 대한 표현\n3) 데이터의 무결성 유지를 위한 제약",
      answer: "1) 연산(Operation)  2) 구조(Structure)  3) 제약조건(Constraint)",
      explanation:
        "데이터 모델의 3가지 구성요소:\n\n1. 구조(Structure): 데이터베이스에 저장될 데이터의 구조를 논리적으로 표현\n   - 개체 타입, 관계, 속성 등\n\n2. 연산(Operation): 데이터를 처리하는 작업에 대한 명세\n   - 삽입, 삭제, 갱신, 검색 등의 연산\n\n3. 제약조건(Constraint): 데이터의 논리적 제약\n   - 무결성을 유지하기 위한 규칙\n   - 키 제약, 참조 무결성, 도메인 제약 등",
    },
    {
      id: 21118,
      examId: "2021-1",
      originalNumber: 18,
      language: "이론" as const,
      title: "임의적 접근 통제 (DAC)",
      question:
        "사용자의 신분(Identity)에 근거하여 객체에 대한 접근을 제한하는 접근 통제 방식은?",
      answer: "임의적 접근 통제(DAC, Discretionary Access Control)",
      explanation:
        "접근 통제(Access Control) 방식:\n\n1. 임의적 접근 통제(DAC, Discretionary Access Control):\n   - 사용자의 신분(Identity)에 기반\n   - 객체 소유자가 접근 권한을 설정\n   - 유연하지만 보안 수준이 낮음\n\n2. 강제적 접근 통제(MAC, Mandatory Access Control):\n   - 보안 등급(Label)에 기반\n   - 시스템이 접근 권한을 결정\n   - 보안 수준이 높지만 유연성이 낮음\n\n3. 역할 기반 접근 통제(RBAC, Role-Based Access Control):\n   - 사용자의 역할(Role)에 기반\n   - 역할에 권한을 부여하고, 사용자에게 역할을 할당",
    },
    {
      id: 21119,
      examId: "2021-1",
      originalNumber: 19,
      language: "이론" as const,
      title: "결합도 유형",
      question:
        "모듈 결합도 중 다음에 해당하는 유형을 쓰시오.\n1) 다른 모듈의 내부 변수나 기능을 직접 사용하는 결합도\n2) 모듈 간에 배열, 객체, 구조 등이 전달되는 결합도\n3) 공유되는 전역 변수를 여러 모듈이 참조하고 갱신하는 결합도",
      answer: "1) 내용 결합도(Content Coupling)  2) 스탬프 결합도(Stamp Coupling)  3) 공통 결합도(Common Coupling)",
      explanation:
        "결합도(Coupling) 유형 (낮음 → 높음, 낮을수록 좋음):\n\n1. 자료 결합도(Data Coupling): 모듈 간 단순 데이터(매개변수)만 전달\n2. 스탬프 결합도(Stamp Coupling): 배열, 객체, 구조체 등 복합 데이터 구조 전달\n3. 제어 결합도(Control Coupling): 제어 요소(플래그, 스위치)를 전달하여 내부 논리 제어\n4. 외부 결합도(External Coupling): 외부에서 선언된 데이터를 공유\n5. 공통 결합도(Common Coupling): 전역 변수를 공유하여 참조/갱신\n6. 내용 결합도(Content Coupling): 다른 모듈의 내부를 직접 참조/수정 (가장 나쁨)",
    },
    {
      id: 21120,
      examId: "2021-1",
      originalNumber: 20,
      language: "이론" as const,
      title: "세션 하이재킹",
      question:
        "정상적인 TCP 연결을 RST 패킷으로 종료시킨 후 공격자가 그 세션을 가로채어 인증된 세션으로 위장하는 공격 기법은?",
      answer: "세션 하이재킹(Session Hijacking)",
      explanation:
        "세션 하이재킹(Session Hijacking)은 이미 인증된 사용자의 세션을 공격자가 가로채어 불법으로 사용하는 공격 기법입니다.\n\n공격 방법:\n- TCP 세션 하이재킹: RST 패킷으로 정상 연결을 끊고 공격자가 연결을 가로챔\n- 웹 세션 하이재킹: 세션 ID(쿠키)를 탈취하여 인증된 세션으로 위장\n\n방지 방법:\n- 세션 ID의 암호화\n- 세션 타임아웃 설정\n- 비정상적인 세션 감지 및 차단\n- HTTPS 사용\n- 이중 인증 적용",
    },
  ],
};

export default exam2021_1;
