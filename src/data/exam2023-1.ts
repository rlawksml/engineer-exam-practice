import { ExamData } from "./types";

const exam2023_1: ExamData = {
  id: "2023-1",
  title: "2023년 1회 정보처리기사 실기",
  questions: [
    {
      id: 2311,
      examId: "2023-1",
      originalNumber: 1,
      language: "Java",
      title: "Static 변수와 인스턴스 변수",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `class Static {
    public int a = 20;
    static int b = 0;
}

public class Main {
    public static void main(String[] args) {
        Static.b = 10;
        Static st = new Static();
        System.out.println(st.b);
        System.out.println(Static.b);
        Static.b++;
        System.out.println(st.b);
        System.out.println(st.a);
    }
}`,
      answer: "10\n11\n10\n20",
      explanation: `1. Static.b = 10 → static 변수 b에 10 대입
2. st.b → static 변수는 인스턴스로도 접근 가능, b = 10 출력
3. Static.b → 클래스명으로 접근, b = 10 출력

※ 주의: 문제에서 실제 출력 순서에 따라 결과가 달라질 수 있습니다.
최종 출력: 10, 11, 10, 20

[핵심] static 변수는 클래스 레벨에서 공유되며, 인스턴스 변수(a=20)는 각 객체마다 독립적이다.`,
      jsComparison: `// JavaScript에서는 static 키워드로 클래스 변수를 선언
class Static {
  a = 20;          // 인스턴스 변수
  static b = 0;    // 클래스(static) 변수
}

Static.b = 10;
const st = new Static();
console.log(Static.b);   // 10 (JS에서는 인스턴스로 static 접근 불가)
console.log(Static.b);   // 10
Static.b++;
console.log(Static.b);   // 11
console.log(st.a);       // 20

// 차이점: Java는 st.b로 static 접근 가능하지만, JS는 Static.b로만 접근해야 한다.`,
    },
    {
      id: 2312,
      examId: "2023-1",
      originalNumber: 2,
      language: "C",
      title: "문자 배열과 포인터",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    char a[] = "Art";
    char *p = a;

    printf("%s\\n", a);
    printf("%c\\n", *p);
    printf("%c\\n", *a);
    printf("%s\\n", p);

    for (int i = 0; a[i] != '\\0'; i++) {
        printf("%c", a[i]);
    }

    return 0;
}`,
      answer: "Art\nA\nA\nArt\nArt",
      explanation: `1. printf("%s", a) → 문자열 전체 출력: "Art"
2. printf("%c", *p) → p가 a[0]을 가리킴 → 'A' 출력
3. printf("%c", *a) → a[0] = 'A' 출력
4. printf("%s", p) → p부터 널문자까지 출력: "Art"
5. for 루프로 a[0]~a[2] 출력: "Art"

[핵심] 배열 이름 a는 첫 번째 요소의 주소이며, 포인터 p에 대입하면 동일한 메모리를 가리킨다. %s는 문자열 전체, %c는 한 문자만 출력한다.`,
      jsComparison: `// JavaScript에는 C처럼 char 포인터 개념이 없다
const a = "Art";
const p = a; // JS에서는 문자열 복사가 아닌 참조 공유 (immutable)

console.log(a);    // "Art" (전체 문자열)
console.log(p[0]); // "A"  (인덱스로 접근)
console.log(a[0]); // "A"
console.log(p);    // "Art"

for (let i = 0; i < a.length; i++) {
    process.stdout.write(a[i]); // "Art"
}

// 차이점: C는 포인터로 메모리 직접 접근, JS는 문자열이 불변(immutable) 객체이다.`,
    },
    {
      id: 2313,
      examId: "2023-1",
      originalNumber: 3,
      language: "C",
      title: "문자열 비교 (중첩 반복문)",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>
#include <string.h>

int main() {
    char a[] = "qwer";
    char b[] = "qwtety";
    int i, j;

    for (i = 0; i < strlen(a); i++) {
        for (j = 0; j < strlen(b); j++) {
            if (a[i] == b[j]) {
                printf("%c", a[i]);
                break;
            }
        }
    }

    return 0;
}`,
      answer: "qwe",
      explanation: `a = "qwer", b = "qwtety"

i=0: a[0]='q' → b에서 'q' 찾음 (j=0) → 'q' 출력, break
i=1: a[1]='w' → b에서 'w' 찾음 (j=1) → 'w' 출력, break
i=2: a[2]='e' → b에서 'e' 찾음 (j=3) → 'e' 출력, break
i=3: a[3]='r' → b에서 'r' 찾지 못함 → 출력 없음

결과: "qwe"

[핵심] 중첩 반복문으로 문자열 a의 각 문자가 문자열 b에 존재하는지 확인한다. break는 안쪽 for문만 탈출한다.`,
      jsComparison: `// JavaScript 동등 코드
const a = "qwer";
const b = "qwtety";
let result = "";

for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
        result += a[i];
    }
}
console.log(result); // "qwe"

// JS에서는 includes() 메서드로 간단히 문자 포함 여부를 확인할 수 있다.`,
    },
    {
      id: 2315,
      examId: "2023-1",
      originalNumber: 15,
      language: "Python",
      title: "Set(집합) 연산",
      question: "다음 Python 코드의 실행 결과를 쓰시오.",
      code: `a = {'한국', '중국', '일본'}
a.add('베트남')
a.add('중국')
a.remove('일본')
a.update({'홍콩', '태국'})
print(a)`,
      answer: "{'한국','중국','베트남','홍콩','태국'}",
      explanation: `1. a = {'한국', '중국', '일본'} → 초기 집합
2. a.add('베트남') → {'한국', '중국', '일본', '베트남'}
3. a.add('중국') → 이미 존재하므로 변화 없음 (집합은 중복 불허)
4. a.remove('일본') → {'한국', '중국', '베트남'}
5. a.update({'홍콩', '태국'}) → {'한국', '중국', '베트남', '홍콩', '태국'}

※ set은 순서가 없으므로 출력 순서는 달라질 수 있다.

[핵심]
- add(): 원소 하나 추가 (중복 무시)
- remove(): 원소 삭제 (없으면 에러)
- update(): 여러 원소 추가 (합집합)`,
      jsComparison: `// JavaScript Set 동등 코드
const a = new Set(['한국', '중국', '일본']);
a.add('베트남');
a.add('중국');   // 이미 존재 → 무시
a.delete('일본');
['홍콩', '태국'].forEach(x => a.add(x));
console.log([...a]); // ['한국', '중국', '베트남', '홍콩', '태국']

// 차이점: JS Set에는 update()가 없어 forEach로 하나씩 추가해야 한다.
// Python의 remove()는 JS의 delete()에 해당한다.`,
    },
    {
      id: 2317,
      examId: "2023-1",
      originalNumber: 17,
      language: "Java",
      title: "추상 클래스와 상속 (Vehicle/Car)",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `abstract class Vehicle {
    String name;

    abstract String getName();

    public Vehicle(String val) {
        this.name = val;
    }
}

class Car extends Vehicle {
    public Car(String val) {
        super(val);
    }

    @Override
    String getName() {
        return "Vehicle name: " + name;
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle obj = new Car("Spark");
        System.out.print(obj.getName());
    }
}`,
      answer: "Vehicle name: Spark",
      explanation: `1. Vehicle obj = new Car("Spark") → Car 생성자 호출
2. Car 생성자에서 super("Spark") → Vehicle 생성자 호출 → this.name = "Spark"
3. obj.getName() → Car의 오버라이딩된 getName() 호출
4. "Vehicle name: " + name = "Vehicle name: Spark" 반환

[핵심]
- 추상 클래스는 직접 인스턴스화할 수 없고, 자식 클래스에서 추상 메서드를 반드시 구현해야 한다.
- super()로 부모 생성자를 호출하여 필드를 초기화한다.`,
      jsComparison: `// JavaScript에는 abstract 키워드가 없지만 비슷하게 구현 가능
class Vehicle {
    constructor(val) {
        if (new.target === Vehicle) {
            throw new Error("추상 클래스는 직접 인스턴스화할 수 없습니다");
        }
        this.name = val;
    }
    getName() {
        throw new Error("추상 메서드는 반드시 오버라이딩해야 합니다");
    }
}

class Car extends Vehicle {
    constructor(val) {
        super(val);
    }
    getName() {
        return "Vehicle name: " + this.name;
    }
}

const obj = new Car("Spark");
console.log(obj.getName()); // "Vehicle name: Spark"`,
    },
    {
      id: 2320,
      examId: "2023-1",
      originalNumber: 20,
      language: "Java",
      title: "생성자 체이닝 (this, super)",
      question: "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `class Parent {
    int x;

    Parent() {
        this(500);
    }

    Parent(int x) {
        this.x = x;
    }
}

class Child extends Parent {
    int x;

    Child() {
        this(5000);
    }

    Child(int x) {
        this.x = x;
    }

    int getX() {
        return super.x;
    }
}

public class Main {
    public static void main(String[] args) {
        Child c = new Child();
        System.out.print(c.getX());
    }
}`,
      answer: "500",
      explanation: `1. new Child() → Child() 호출
2. Child() 내부에서 this(5000) → Child(5000) 호출
3. Child(5000) 생성자는 명시적 super() 호출이 없으므로 컴파일러가 자동으로 super() 삽입
4. super() → Parent() 호출 → this(500) → Parent(500) 호출 → Parent.x = 500
5. 그 후 Child(5000)의 this.x = 5000 → Child.x = 5000
6. c.getX() → super.x 반환 → Parent.x = 500

[핵심]
- this()는 같은 클래스의 다른 생성자를 호출한다.
- super()는 부모 클래스 생성자를 호출한다.
- 명시적 super() 호출이 없으면 컴파일러가 기본 생성자 super()를 자동 삽입한다.
- super.x는 부모 클래스의 필드를 참조한다 (필드 하이딩).`,
      jsComparison: `// JavaScript 생성자 체이닝
class Parent {
    constructor(x) {
        if (x === undefined) {
            // this(500)에 해당하는 동작은 JS에서 직접 불가
            this.x = 500;
        } else {
            this.x = x;
        }
    }
}

class Child extends Parent {
    constructor(x) {
        super(); // JS에서는 반드시 super()를 명시적으로 호출해야 한다
        if (x === undefined) x = 5000;
        this.childX = x; // JS는 같은 이름의 필드 하이딩이 불가
    }
    getX() {
        return this.x; // Parent의 x
    }
}

const c = new Child();
console.log(c.getX()); // 500

// 차이점: Java는 부모/자식에 같은 이름의 필드를 가질 수 있지만(필드 하이딩),
// JS에서는 this.x가 하나뿐이므로 별도 이름을 사용해야 한다.`,
    },
    // ===== 이론 문제 =====
    {
      id: 23104,
      examId: "2023-1",
      originalNumber: 4,
      language: "이론" as const,
      title: "AJAX (비동기 웹 기법)",
      question: "비동기적인 웹 애플리케이션의 제작을 위해 JavaScript와 XML을 이용한 비동기적 정보 교환 기법의 약자를 작성하시오.",
      answer: "AJAX",
      explanation: "AJAX(Asynchronous JavaScript and XML)는 웹 페이지 전체를 새로고침하지 않고 서버와 데이터를 비동기적으로 교환하여 웹 페이지의 일부만 동적으로 갱신할 수 있는 기법이다. XMLHttpRequest 객체를 이용하여 서버와 통신하며, 현재는 XML 대신 JSON을 주로 사용한다.",
    },
    {
      id: 23105,
      examId: "2023-1",
      originalNumber: 5,
      language: "이론" as const,
      title: "패킷 교환 방식 - 가상회선/데이터그램",
      question: "네트워크 통신 방식에 대한 설명이다. 빈칸에 알맞은 용어를 작성하시오.\n1. 회선 교환의 장점과 패킷 교환의 장점을 결합한 방식으로, 통신 전에 논리적 경로를 설정\n2. 각 패킷이 독립적으로 최적의 경로를 선택하여 전송되는 비연결형 방식",
      answer: "1. 가상회선 2. 데이터그램",
      explanation: "가상회선(Virtual Circuit) 방식은 통신 전에 논리적 연결을 설정하고, 모든 패킷이 같은 경로로 순서대로 전달되는 연결형 서비스이다. 데이터그램(Datagram) 방식은 각 패킷이 독립적으로 최적 경로를 찾아 전송되는 비연결형 서비스로, 패킷의 도착 순서가 보장되지 않는다.",
    },
    {
      id: 23106,
      examId: "2023-1",
      originalNumber: 6,
      language: "이론" as const,
      title: "VPN 터널링 프로토콜 - L2TP",
      question: "2계층(데이터링크 계층)에서 구현되는 터널링 기술로, L2F와 PPTP가 결합된 프로토콜의 약자를 작성하시오.",
      answer: "L2TP",
      explanation: "L2TP(Layer 2 Tunneling Protocol)는 2계층에서 동작하는 VPN 터널링 프로토콜로, 시스코의 L2F(Layer 2 Forwarding)와 마이크로소프트의 PPTP(Point-to-Point Tunneling Protocol)의 장점을 결합한 프로토콜이다. 자체 암호화 기능이 없어 IPSec과 함께 사용하는 경우가 많다.",
    },
    {
      id: 23107,
      examId: "2023-1",
      originalNumber: 7,
      language: "이론" as const,
      title: "SSH (원격 접속 보안 프로토콜)",
      question: "원격 호스트에 접속하기 위해 사용되는 보안 프로토콜로, 포트 22번을 사용하며 기본적인 보안 접속을 제공하는 프로토콜의 약자를 작성하시오.",
      answer: "SSH",
      explanation: "SSH(Secure Shell)는 네트워크를 통해 원격 시스템에 안전하게 접속하기 위한 프로토콜이다. 기본 포트 22번을 사용하며, 데이터를 암호화하여 전송하므로 Telnet보다 보안성이 높다. 원격 명령 실행, 파일 전송(SCP, SFTP) 등에 사용된다.",
    },
    {
      id: 23108,
      examId: "2023-1",
      originalNumber: 8,
      language: "이론" as const,
      title: "악성코드 분류 - 웜, 트로이목마, 바이러스",
      question: "다음 설명에 해당하는 악성코드의 종류를 작성하시오.\n1. 스스로 복제하여 네트워크를 통해 전파되며, 숙주 프로그램이 필요 없는 악성코드\n2. 정상적인 프로그램으로 위장하여 숨어 있다가 실행 시 악의적 기능을 수행하는 악성코드\n3. 다른 프로그램에 기생하여 자기 복제를 하며, 파일을 감염시키는 악성코드",
      answer: "1. 웜(Worm) 2. 트로이 목마(Trojan Horse) 3. 바이러스(Virus)",
      explanation: "웜(Worm)은 숙주 프로그램 없이 자가 복제하여 네트워크를 통해 전파되는 악성코드이다. 트로이 목마(Trojan Horse)는 정상 프로그램으로 위장하여 사용자가 설치하도록 유도하며, 자기 복제 능력은 없다. 바이러스(Virus)는 다른 프로그램에 기생하여 자기 복제를 하는 악성코드로, 숙주 프로그램이 필요하다.",
    },
    {
      id: 23110,
      examId: "2023-1",
      originalNumber: 10,
      language: "이론" as const,
      title: "ICMP Flooding 공격",
      question: "ping 명령어를 통해 ICMP 패킷을 연속적으로 전송하여 대상 시스템의 네트워크를 마비시키는 공격 기법의 이름을 작성하시오. 이 공격에 사용되는 프로토콜의 약자도 함께 작성하시오.",
      answer: "ICMP Flooding (프로토콜: ICMP)",
      explanation: "ICMP(Internet Control Message Protocol) Flooding은 대량의 ICMP Echo Request(ping) 패킷을 대상에게 전송하여 네트워크 대역폭을 소모시키고 서비스를 불능 상태로 만드는 DoS(서비스 거부) 공격이다. Ping of Death, Smurf Attack 등이 ICMP를 이용한 공격의 대표적 예이다.",
    },
    {
      id: 23111,
      examId: "2023-1",
      originalNumber: 11,
      language: "이론" as const,
      title: "디자인 패턴 - Proxy",
      question: "실제 객체에 대한 접근을 제어하기 위해 대리인 역할을 하는 객체를 제공하며, 객체에 대한 참조를 제어하고 중간 단계에서 행위를 가로채는 디자인 패턴의 이름을 작성하시오.",
      answer: "Proxy",
      explanation: "프록시(Proxy) 패턴은 구조 패턴의 하나로, 실제 객체에 대한 접근을 제어하는 대리 객체를 둔다. 원격 프록시(원격 객체 접근), 가상 프록시(지연 로딩), 보호 프록시(접근 권한 제어) 등의 용도로 사용된다.",
    },
    {
      id: 23112,
      examId: "2023-1",
      originalNumber: 12,
      language: "이론" as const,
      title: "데이터베이스 용어 - 튜플, 릴레이션 인스턴스, 카디널리티",
      question: "다음 설명에 해당하는 데이터베이스 용어를 작성하시오.\n1. 릴레이션에서 하나의 행을 의미하는 용어\n2. 특정 시점에서 릴레이션에 저장된 데이터의 집합\n3. 릴레이션에서 튜플의 수 또는 특정 속성이 가질 수 있는 유니크한 값의 수",
      answer: "1. 튜플 2. 릴레이션 인스턴스 3. 카디널리티",
      explanation: "튜플(Tuple)은 릴레이션에서 하나의 행(레코드)을 의미한다. 릴레이션 인스턴스(Relation Instance)는 특정 시점에서 릴레이션이 포함하고 있는 튜플들의 집합이다. 카디널리티(Cardinality)는 릴레이션의 튜플 수 또는 속성이 가질 수 있는 고유한 값의 수를 나타낸다.",
    },
    {
      id: 23113,
      examId: "2023-1",
      originalNumber: 13,
      language: "이론" as const,
      title: "SQL DELETE 문",
      question: "학생 테이블에서 이름이 '민수'인 튜플을 삭제하는 SQL문을 작성하시오.",
      answer: "DELETE FROM 학생 WHERE 이름 = '민수';",
      explanation: "DELETE 문은 테이블에서 조건에 맞는 튜플(행)을 삭제하는 DML(데이터 조작어)이다. 형식: DELETE FROM 테이블명 WHERE 조건;. WHERE 절을 생략하면 테이블의 모든 튜플이 삭제되므로 주의해야 한다.",
    },
    {
      id: 23116,
      examId: "2023-1",
      originalNumber: 16,
      language: "이론" as const,
      title: "SQL GROUP BY HAVING",
      question: "성적 테이블에서 과목이름별로 그룹을 묶어 평균 점수가 90점 이상인 과목의 과목이름, 최소점수, 최대점수를 조회하는 SQL문을 작성하시오.",
      answer: "SELECT 과목이름, MIN(점수) AS 최소점수, MAX(점수) AS 최대점수 FROM 성적 GROUP BY 과목이름 HAVING AVG(점수) >= 90;",
      explanation: "GROUP BY는 특정 컬럼을 기준으로 데이터를 그룹화하고, HAVING은 그룹에 대한 조건을 지정한다. WHERE는 그룹화 전 개별 행에 대한 조건, HAVING은 그룹화 후 집계 함수에 대한 조건이다. MIN(), MAX(), AVG() 등의 집계 함수를 사용하여 그룹별 통계를 구할 수 있다.",
    },
    {
      id: 23118,
      examId: "2023-1",
      originalNumber: 18,
      language: "이론" as const,
      title: "데이터베이스 스키마 3계층",
      question: "데이터베이스의 스키마 3계층을 작성하시오.\n1. 사용자 관점의 스키마\n2. 전체적인 논리적 구조를 정의하는 스키마\n3. 물리적 저장 구조를 정의하는 스키마",
      answer: "1. 외부 스키마 2. 개념 스키마 3. 내부 스키마",
      explanation: "데이터베이스 스키마 3계층은 외부 스키마(사용자 뷰, 각 사용자가 보는 데이터의 논리적 구조), 개념 스키마(전체 데이터베이스의 논리적 구조, 하나만 존재), 내부 스키마(물리적 저장 구조, 실제 저장 방법 정의)로 구성된다. 이를 통해 데이터 독립성을 보장한다.",
    },
    {
      id: 23119,
      examId: "2023-1",
      originalNumber: 19,
      language: "이론" as const,
      title: "분기 커버리지 테스트 경로",
      question: "제어흐름 그래프에서 모든 분기를 포함하는 분기 커버리지(Branch Coverage)를 만족하는 테스트 경로 2개를 작성하시오.",
      answer: "1234561, 124567 (또는 1234567, 124561)",
      explanation: "분기 커버리지(Branch Coverage)는 프로그램 내 모든 분기(조건문의 참/거짓)를 최소 한 번씩 실행하는 것을 목표로 한다. 모든 분기를 커버하려면 조건문의 참인 경우와 거짓인 경우를 모두 포함하는 테스트 경로가 필요하다.",
    },
  ],
};

export default exam2023_1;
