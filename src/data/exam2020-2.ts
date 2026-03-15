import { ExamData } from "./types";

const exam2020_2: ExamData = {
  id: "2020-2",
  title: "2020년 2회 정보처리기사 실기",
  questions: [
    {
      id: 2022,
      examId: "2020-2",
      originalNumber: 2,
      language: "Python",
      title: "집합(Set) 연산 - add, remove, update",
      question: "다음 Python 코드의 실행 결과를 쓰시오.",
      code: `a = {'일본', '중국', '한국'}
a.add('베트남')
a.add('중국')
a.remove('일본')
a.update({'홍콩', '태국'})
print(a)`,
      answer: "{'중국', '한국', '베트남', '홍콩', '태국'}",
      explanation: `1. a = {'일본', '중국', '한국'} → 집합 초기화
2. a.add('베트남') → a = {'일본', '중국', '한국', '베트남'}
3. a.add('중국') → 이미 존재하므로 변화 없음 (집합은 중복 허용 안 함)
   a = {'일본', '중국', '한국', '베트남'}
4. a.remove('일본') → '일본' 제거
   a = {'중국', '한국', '베트남'}
5. a.update({'홍콩', '태국'}) → 여러 원소를 한번에 추가
   a = {'중국', '한국', '베트남', '홍콩', '태국'}
6. print(a) → {'중국', '한국', '베트남', '홍콩', '태국'}

※ 집합(set)은 순서가 없으므로 출력 순서는 실행마다 달라질 수 있음

[핵심]
- add(): 원소 1개 추가 (중복 시 무시)
- remove(): 원소 제거 (없으면 에러)
- update(): 여러 원소를 한번에 추가 (합집합)
- 집합은 중복을 허용하지 않는다.`,
      jsComparison: `// JavaScript Set 동등 코드
let a = new Set(['일본', '중국', '한국']);

// Python: a.add('베트남') → JS: a.add('베트남')
a.add('베트남');
// Python: a.add('중국') → 중복이므로 무시 (JS도 동일)
a.add('중국');
// Python: a.remove('일본') → JS: a.delete('일본')
a.delete('일본');
// Python: a.update({'홍콩', '태국'}) → JS: 직접 반복 추가
for (const item of ['홍콩', '태국']) {
    a.add(item);
}

console.log(a); // Set(5) { '중국', '한국', '베트남', '홍콩', '태국' }

// 차이점:
// - Python: set은 {} 리터럴로 생성, JS: new Set([])으로 생성
// - Python: remove() (없으면 에러) / discard() (없어도 무시)
// - JS: delete() (없어도 에러 없음, false 반환)
// - Python: update()로 여러 원소 추가, JS: 직접 반복 필요
// - Python: print(set)은 {원소들} 형태, JS: console.log(set)은 Set(n) {원소들}`,
    },
    {
      id: 2025,
      examId: "2020-2",
      originalNumber: 5,
      language: "Java",
      title: "다형성 (Polymorphism) - 빈칸 채우기",
      question:
        "다음 Java 코드에서 괄호 안에 들어갈 키워드를 쓰시오.\n\nParent 클래스의 show() 메서드를 Child 클래스에서 오버라이딩하고, Parent 타입 변수로 Child 객체를 생성하여 show()를 호출할 때, 빈칸에 들어갈 키워드는?",
      code: `class Parent {
    void show() {
        System.out.println("Parent");
    }
}

class Child extends Parent {
    void show() {
        System.out.println("Child");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent a = ( ) Child();
        a.show();
    }
}`,
      answer: "new",
      explanation: `1. Parent a = new Child(); 에서 빈칸은 "new" 키워드
2. new는 Java에서 객체를 생성할 때 사용하는 키워드
3. Parent a = new Child(); → 업캐스팅 (부모 타입 참조변수에 자식 객체 대입)
4. a.show() 호출 시 → 실제 객체(Child)의 show() 실행 → "Child" 출력

[핵심]
- new: 객체 생성 키워드
- 업캐스팅: 부모 타입 변수로 자식 객체 참조 가능
- 다형성: 메서드 호출 시 실제 객체의 오버라이딩된 메서드가 실행됨`,
      jsComparison: `// JavaScript 다형성 동등 코드
class Parent {
    show() {
        console.log("Parent");
    }
}

class Child extends Parent {
    show() {
        console.log("Child");
    }
}

// Java: Parent a = new Child();
// JS: const a = new Child(); (타입 선언 불필요)
const a = new Child();
a.show(); // "Child"

// 차이점:
// - Java: 참조 타입을 명시 (Parent a = new Child())
// - JS: 타입 선언 없음 (const a = new Child())
// - Java: class 키워드에 접근 제어자(public, private 등) 사용
// - JS: class 키워드는 동일하지만 접근 제어자 없음 (ES2022부터 # prefix로 private 가능)
// - 둘 다 new 키워드로 객체 생성`,
    },
    {
      id: 2026,
      examId: "2020-2",
      originalNumber: 6,
      language: "SQL",
      title: "SELECT WHERE IN 조건",
      question:
        "다음 SQL문의 실행 결과를 쓰시오.\n\n[학생 테이블]\n| 학번 | 이름   | 학년 |\n|------|--------|------|\n| 1000 | 김이름 | 1    |\n| 2000 | 박이름 | 2    |\n| 3000 | 허이름 | 3    |\n| 4000 | 조이름 | 4    |",
      code: `SELECT 학번, 이름
FROM 학생
WHERE 학년 IN (3, 4);`,
      answer: "3000 허이름 4000 조이름",
      explanation: `1. 학생 테이블에서 학년이 3 또는 4인 행을 조회
2. WHERE 학년 IN (3, 4) → 학년이 3이거나 4인 행 선택
3. 조건에 맞는 행:
   - 학번=3000, 이름=허이름 (학년=3) ✓
   - 학번=4000, 이름=조이름 (학년=4) ✓
4. SELECT 학번, 이름 → 학번과 이름 컬럼만 출력
5. 결과:
   3000 허이름
   4000 조이름

[핵심]
- IN (값1, 값2): WHERE 절에서 여러 값을 OR로 비교하는 간편 문법
- WHERE 학년 IN (3, 4)는 WHERE 학년=3 OR 학년=4와 동일
- SELECT로 원하는 컬럼만 지정하여 조회할 수 있다.`,
    },
    {
      id: 20219,
      examId: "2020-2",
      originalNumber: 19,
      language: "Java",
      title: "상속 + super 키워드",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `class A {
    private int a;

    public A(int a) {
        this.a = a;
    }

    public void display() {
        System.out.print("a=" + a);
    }
}

class B extends A {
    public B(int a) {
        super(a);
    }
}

public class Main {
    public static void main(String[] args) {
        B obj = new B(10);
        obj.display();
    }
}`,
      answer: "a=10",
      explanation: `1. B obj = new B(10) → B 클래스 생성자 호출, 매개변수 a=10
2. B 생성자 내부: super(a) → 부모 클래스 A의 생성자 A(10) 호출
3. A 생성자: this.a = 10 → private 필드 a에 10 저장
4. obj.display() → B에 display()가 없으므로 A의 display() 실행
5. "a=" + a → "a=" + 10 → "a=10" 출력

[핵심]
- super(): 부모 클래스의 생성자를 호출
- super(a): 부모 클래스의 매개변수가 있는 생성자를 호출
- private 필드는 자식 클래스에서 직접 접근 불가하지만, 부모의 메서드를 통해 간접 접근 가능
- 자식 클래스에 메서드가 없으면 부모 클래스의 메서드가 호출됨 (상속)`,
      jsComparison: `// JavaScript 상속 + super 동등 코드
class A {
    #a; // ES2022 private 필드 (Java의 private과 유사)

    constructor(a) {
        this.#a = a;
    }

    display() {
        // Java: System.out.print("a=" + a)
        process.stdout.write("a=" + this.#a);
    }
}

class B extends A {
    constructor(a) {
        // Java: super(a) → JS도 동일하게 super(a) 사용
        super(a);
    }
}

const obj = new B(10);
obj.display(); // "a=10"

// 차이점:
// - Java: private int a → JS: #a (ES2022 private 필드)
// - Java: this.a → JS: this.#a (private 접근)
// - Java: super(a)와 JS: super(a)는 동일한 문법
// - Java: 생성자 이름 = 클래스명, JS: constructor 키워드 사용
// - Java: extends 키워드와 JS: extends 키워드는 동일`,
    },
    // ===== 이론 문제 =====
    {
      id: 20201,
      examId: "2020-2",
      originalNumber: 1,
      language: "이론" as const,
      title: "RTO (목표 복구 시간)",
      question:
        "서버 다운이나 자연재해 등으로 서비스가 불가능한 상황에서 업무 중단 시점부터 정상 복구되어 가동될 때까지의 목표 시간을 의미하는 용어는?",
      answer: "RTO(Recovery Time Objective)",
      explanation:
        "RTO(Recovery Time Objective, 목표 복구 시간)는 재해 발생 시 업무 중단 시점부터 시스템을 정상 복구하여 서비스를 재개할 때까지의 목표 시간입니다.\n\n관련 용어:\n- RPO(Recovery Point Objective): 데이터를 복구할 수 있는 기준 시점 (얼마나 이전 데이터까지 복구할 것인가)\n- BCP(Business Continuity Plan): 비즈니스 연속성 계획\n- DRP(Disaster Recovery Plan): 재해 복구 계획",
    },
    {
      id: 20203,
      examId: "2020-2",
      originalNumber: 3,
      language: "이론" as const,
      title: "AJAX",
      question:
        "XMLHttpRequest 객체를 이용하여 전체 페이지를 새로 로드하지 않고 필요한 부분만 로드하는 비동기 통신 기법은?",
      answer: "AJAX(Asynchronous JavaScript and XML)",
      explanation:
        "AJAX(Asynchronous JavaScript and XML)는 웹 페이지 전체를 다시 로드하지 않고, 필요한 데이터만 서버에서 비동기적으로 가져와 페이지의 일부만 업데이트하는 기법입니다. XMLHttpRequest 객체를 사용하며, 사용자 경험을 향상시킵니다. 현재는 Fetch API나 Axios 등이 더 많이 사용됩니다.",
    },
    {
      id: 20204,
      examId: "2020-2",
      originalNumber: 4,
      language: "이론" as const,
      title: "애자일 방법론",
      question:
        "사람이 중심이 되어, 변화에 유연하고 신속하게 적응하면서 효율적으로 시스템을 개발할 수 있는 소프트웨어 개발 방법론은?",
      answer: "애자일(Agile) 방법론",
      explanation:
        "애자일(Agile) 방법론은 고객의 요구사항 변화에 유연하게 대응하기 위해 일정한 주기를 반복하며 개발하는 방법론입니다.\n\n특징:\n- 사람 중심의 개발\n- 짧은 반복(Iteration) 주기\n- 변화에 유연한 대응\n- 고객과의 지속적 소통\n\n대표적 방법: 스크럼(Scrum), XP(eXtreme Programming), 칸반(Kanban), 린(Lean) 등",
    },
    {
      id: 20207,
      examId: "2020-2",
      originalNumber: 7,
      language: "이론" as const,
      title: "롤백(Rollback)",
      question:
        "트랜잭션 처리 중 오류가 발생했을 때, 이전의 특정 시점(Savepoint) 상태로 되돌려주는 트랜잭션 제어어는?",
      answer: "롤백(ROLLBACK)",
      explanation:
        "ROLLBACK은 트랜잭션 처리 중 오류가 발생했을 때, 트랜잭션의 변경 사항을 취소하고 이전 상태로 되돌리는 TCL(Transaction Control Language) 명령어입니다.\n\nTCL 명령어:\n- COMMIT: 트랜잭션의 변경사항을 확정\n- ROLLBACK: 트랜잭션의 변경사항을 취소하고 이전 상태로 복구\n- SAVEPOINT: 트랜잭션 내에 저장점을 설정하여 부분 롤백 가능",
    },
    {
      id: 20208,
      examId: "2020-2",
      originalNumber: 8,
      language: "이론" as const,
      title: "IPSec",
      question:
        "IP 계층(3계층)에서 무결성과 인증을 보장하는 인증 헤더(AH)와 기밀성을 보장하는 ESP(암호화)를 이용하여 양 종단 간 구간에 보안 서비스를 제공하는 프로토콜은?",
      answer: "IPSec(IP Security)",
      explanation:
        "IPSec(IP Security)은 IP 계층(네트워크 계층)에서 보안을 제공하는 프로토콜입니다.\n\n구성 요소:\n- AH(Authentication Header): 무결성과 인증을 보장\n- ESP(Encapsulating Security Payload): 기밀성(암호화)과 인증을 보장\n\n동작 모드:\n- 전송 모드(Transport Mode): IP 페이로드만 암호화\n- 터널 모드(Tunnel Mode): IP 헤더를 포함한 전체 패킷 암호화",
    },
    {
      id: 20209,
      examId: "2020-2",
      originalNumber: 9,
      language: "이론" as const,
      title: "정적 분석 도구",
      question:
        "소스 코드를 실행하지 않고 코딩 표준, 코딩 스타일, 코드 복잡도, 결함 등을 발견하기 위해 사용하는 분석 도구는?",
      answer: "정적 분석 도구",
      explanation:
        "정적 분석 도구는 소스 코드를 실행하지 않고 코드의 구조를 분석하여 결함을 발견하는 도구입니다.\n\n정적 분석 도구 예: PMD, SonarQube, CheckStyle, FindBugs, cppcheck\n\n비교:\n- 정적 분석: 소스 코드를 실행하지 않고 분석 (코드 검사)\n- 동적 분석: 소스 코드를 실행하면서 분석 (실행 중 검사)\n- 동적 분석 도구 예: Valgrind, gprof, Selenium",
    },
    {
      id: 20210,
      examId: "2020-2",
      originalNumber: 10,
      language: "이론" as const,
      title: "옵서버 패턴 (Observer Pattern)",
      question:
        "한 객체의 상태가 변화하면 그 객체에 의존하는 다른 객체들에게 연락이 가고 자동으로 내용이 갱신되는 방식으로, 일대다 의존성을 가지는 디자인 패턴은?",
      answer: "옵서버 패턴(Observer Pattern)",
      explanation:
        "옵서버 패턴(Observer Pattern)은 객체의 상태 변화를 관찰하는 옵서버(관찰자)들의 목록을 등록하여, 상태 변화가 있을 때마다 각 옵서버에게 통지하는 디자인 패턴입니다.\n\n- 주체(Subject): 상태를 가지고 있으며, 옵서버들을 관리\n- 옵서버(Observer): 주체의 상태 변화를 통지받아 처리\n- 일대다(1:N) 의존 관계\n- 발행-구독(Publish-Subscribe) 모델의 기반",
    },
    {
      id: 20211,
      examId: "2020-2",
      originalNumber: 11,
      language: "이론" as const,
      title: "안드로이드 (Android)",
      question:
        "Linux 커널을 기반으로 한 휴대용 장치 운영체제로, Java와 Kotlin 언어를 지원하며 Google에서 개발한 모바일 운영체제는?",
      answer: "안드로이드(Android)",
      explanation:
        "안드로이드(Android)는 Google이 개발한 리눅스 커널 기반의 모바일 운영체제입니다.\n\n특징:\n- 오픈소스 (AOSP: Android Open Source Project)\n- Linux 커널 기반\n- Java, Kotlin 프로그래밍 언어 지원\n- 다양한 제조사의 기기에서 사용 가능\n- Google Play Store를 통한 앱 배포\n- SDK(Software Development Kit) 제공",
    },
    {
      id: 20212,
      examId: "2020-2",
      originalNumber: 12,
      language: "이론" as const,
      title: "CREATE INDEX",
      question:
        "학생 테이블의 NAME 속성에 대해 IDX_NAME이라는 인덱스를 생성하는 SQL문을 작성하시오.",
      answer: "CREATE INDEX IDX_NAME ON 학생(NAME);",
      explanation:
        "CREATE INDEX 문은 테이블의 특정 속성(컬럼)에 인덱스를 생성하는 DDL 명령입니다.\n\n구문: CREATE INDEX 인덱스명 ON 테이블명(컬럼명);\n\n인덱스 관련 SQL:\n- CREATE INDEX: 인덱스 생성\n- CREATE UNIQUE INDEX: 고유 인덱스 생성 (중복 불허)\n- DROP INDEX: 인덱스 삭제\n- ALTER INDEX: 인덱스 수정\n\n인덱스는 검색 속도를 향상시키지만, INSERT/UPDATE/DELETE 성능은 저하될 수 있습니다.",
    },
    {
      id: 20213,
      examId: "2020-2",
      originalNumber: 13,
      language: "이론" as const,
      title: "SOAP 프로토콜",
      question:
        "XML 기반의 메시지를 네트워크 상에서 교환하는 프로토콜로, HTTP, HTTPS, SMTP 등을 사용하여 XML 메시지를 전달하는 웹 서비스 프로토콜은?",
      answer: "SOAP(Simple Object Access Protocol)",
      explanation:
        "SOAP(Simple Object Access Protocol)은 웹 서비스에서 XML 형식의 메시지를 교환하는 프로토콜입니다.\n\n특징:\n- XML 기반 메시지 교환 프로토콜\n- HTTP, HTTPS, SMTP 등의 전송 프로토콜 사용\n- 플랫폼 독립적, 언어 독립적\n- WSDL로 서비스 인터페이스 정의\n- UDDI로 서비스 등록/검색\n\n비교:\n- SOAP: XML 기반, 엄격한 표준\n- REST: JSON/XML 기반, 유연한 구조",
    },
    {
      id: 20214,
      examId: "2020-2",
      originalNumber: 14,
      language: "이론" as const,
      title: "SQL 인젝션 (SQL Injection)",
      question:
        "웹 응용 프로그램에 악의적인 SQL 구문을 삽입하여 데이터베이스를 비정상적으로 조작하는 공격 기법은?",
      answer: "SQL 인젝션(SQL Injection)",
      explanation:
        "SQL 인젝션(SQL Injection)은 악의적인 SQL 문을 주입하여 데이터베이스를 비정상적으로 조작하는 공격입니다.\n\n공격 방법:\n- 입력 필드에 SQL 구문 삽입 (예: ' OR 1=1 --)\n- 인증 우회, 데이터 탈취, 데이터 변조 가능\n\n방지 방법:\n- 입력값 검증 및 필터링\n- Prepared Statement(매개변수화된 쿼리) 사용\n- 저장 프로시저 사용\n- 최소 권한 원칙 적용\n- 웹 방화벽(WAF) 사용",
    },
    {
      id: 20215,
      examId: "2020-2",
      originalNumber: 15,
      language: "이론" as const,
      title: "chmod 파일 권한 설정",
      question:
        "리눅스에서 a.txt 파일에 대해 사용자에게 읽기/쓰기/실행, 그룹에게 읽기/실행, 기타 사용자에게 실행 권한을 부여하는 명령어를 쓰시오.",
      answer: "chmod 751 a.txt",
      explanation:
        "chmod는 파일의 권한(Permission)을 변경하는 리눅스 명령어입니다.\n\n권한 숫자:\n- 읽기(r) = 4\n- 쓰기(w) = 2\n- 실행(x) = 1\n\n계산:\n- 사용자(User): 읽기+쓰기+실행 = 4+2+1 = 7\n- 그룹(Group): 읽기+실행 = 4+1 = 5\n- 기타(Others): 실행 = 1\n\n따라서 chmod 751 a.txt",
    },
    {
      id: 20216,
      examId: "2020-2",
      originalNumber: 16,
      language: "이론" as const,
      title: "UI 설계 원칙 - 유효성",
      question:
        "UI 설계 원칙 중 사용자의 목표가 정확하게 달성될 수 있도록 하는 원칙은?",
      answer: "유효성",
      explanation:
        "UI(User Interface) 설계 원칙:\n1. 직관성: 누구나 쉽게 이해하고 사용할 수 있도록 설계\n2. 유효성: 사용자의 목표가 정확하고 완벽하게 달성될 수 있도록 설계\n3. 학습성: 누구나 쉽게 배우고 익힐 수 있도록 설계\n4. 유연성: 사용자의 요구사항을 최대한 수용하고 실수를 최소화하도록 설계",
    },
    {
      id: 20217,
      examId: "2020-2",
      originalNumber: 17,
      language: "이론" as const,
      title: "LOD (Linked Open Data)",
      question:
        "Linked Data와 Open Data의 합성어로, 누구나 사용할 수 있도록 웹상에 공개된 연계 데이터를 의미하는 용어는?",
      answer: "LOD(Linked Open Data)",
      explanation:
        "LOD(Linked Open Data)는 Linked Data와 Open Data의 합성어입니다.\n\n- Linked Data: 웹상에서 데이터를 연결하여 구조화하는 방법\n- Open Data: 누구나 자유롭게 사용할 수 있는 공개 데이터\n- LOD: 웹 상에 공개된 연계 데이터로, URI로 식별하고 RDF로 표현하며 HTTP URI를 통해 접근 가능한 데이터\n\nW3C에서 제안한 데이터 공유 및 연결 방식입니다.",
    },
    {
      id: 20218,
      examId: "2020-2",
      originalNumber: 18,
      language: "이론" as const,
      title: "데이터 모델링 절차",
      question:
        "데이터 모델링 절차에서 요구사항 분석 후 순서대로 진행되는 세 단계를 쓰시오.",
      answer: "개념적 → 논리적 → 물리적 데이터 모델링",
      explanation:
        "데이터 모델링 절차:\n1. 요구사항 분석: 사용자 요구사항 수집 및 분석\n2. 개념적 데이터 모델링: 현실 세계를 추상적으로 표현 (E-R 다이어그램)\n3. 논리적 데이터 모델링: 개념적 모델을 논리적 구조로 변환 (관계형, 계층형, 네트워크형)\n4. 물리적 데이터 모델링: 논리적 모델을 실제 DBMS에 구현할 수 있는 물리적 구조로 변환 (테이블, 인덱스 등)",
    },
    {
      id: 20220,
      examId: "2020-2",
      originalNumber: 20,
      language: "이론" as const,
      title: "형상관리 (SCM)",
      question:
        "소프트웨어 개발 과정에서 변경사항을 관리하는 기법으로, CVS, SVN, Git 등의 도구를 사용하는 관리 기법은?",
      answer: "형상관리(SCM, Software Configuration Management)",
      explanation:
        "형상관리(SCM)는 소프트웨어 개발 전 과정에서 발생하는 모든 산출물의 변경사항을 체계적으로 관리하는 활동입니다.\n\n형상관리 도구:\n- CVS(Concurrent Versions System): 초기 형상관리 도구\n- SVN(Subversion): 중앙집중형 버전 관리\n- Git: 분산형 버전 관리\n\n형상관리 절차:\n1. 형상 식별\n2. 형상 통제(변경 통제)\n3. 형상 감사\n4. 형상 기록(상태 보고)",
    },
  ],
};

export default exam2020_2;
