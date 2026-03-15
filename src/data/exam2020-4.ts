import { ExamData } from "./types";

const exam2020_4: ExamData = {
  id: "2020-4",
  title: "2020년 4회 정보처리기사 실기",
  questions: [
    {
      id: 2049,
      examId: "2020-4",
      originalNumber: 9,
      language: "Python",
      title: "2차원 리스트 (Nested List)",
      question: "다음 Python 코드의 실행 결과를 쓰시오.",
      code: `lol = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]

print(lol[0])
print(lol[2][1])

for sub in lol:
    for item in sub:
        print(item, end='')
    print()`,
      answer: "[1, 2, 3]\n7\n123\n45\n6789",
      explanation: `1. lol = [[1,2,3], [4,5], [6,7,8,9]] → 2차원 리스트

2. print(lol[0]) → lol의 첫 번째 원소 = [1, 2, 3] 출력
   출력: [1, 2, 3]

3. print(lol[2][1]) → lol[2]는 [6,7,8,9], 그 중 인덱스 1 = 7
   출력: 7

4. 중첩 for 루프:
   sub = [1,2,3]:
     item=1,2,3 → print(item, end='') → "123"
     print() → 줄바꿈
   sub = [4,5]:
     item=4,5 → "45"
     print() → 줄바꿈
   sub = [6,7,8,9]:
     item=6,7,8,9 → "6789"
     print() → 줄바꿈

최종 출력:
[1, 2, 3]
7
123
45
6789

[핵심]
- 2차원 리스트: 리스트 안에 리스트
- lol[i][j]: i번째 서브리스트의 j번째 원소
- print(end=''): 줄바꿈 없이 출력
- print(): 줄바꿈만 출력`,
      jsComparison: `// JavaScript 2차원 배열 동등 코드
const lol = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];

// Python: print(lol[0]) → [1, 2, 3]
// JS: 배열 출력 시 형태가 다름
console.log(lol[0]); // [1, 2, 3] (동일한 형태)

// Python: print(lol[2][1]) → 7
console.log(lol[2][1]); // 7

// Python: 중첩 for + print(end='')
// JS: process.stdout.write()로 줄바꿈 없이 출력
for (const sub of lol) {
    let line = '';
    for (const item of sub) {
        line += item; // Python: print(item, end='')
    }
    console.log(line); // Python: print()
}
// 출력:
// 123
// 45
// 6789

// 차이점:
// - Python: print(list) → [1, 2, 3] (괄호 포함)
// - JS: console.log(array) → [1, 2, 3] (동일 형태, 환경에 따라 다를 수 있음)
// - Python: print(end='') → 줄바꿈 제거
// - JS: process.stdout.write() 또는 문자열 누적 후 console.log()
// - Python: for item in list → JS: for (const item of array)`,
    },
    {
      id: 20418,
      examId: "2020-4",
      originalNumber: 18,
      language: "C",
      title: "포인터 + 문자열 (Pointer & String)",
      question: "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    char *p = "KOREA";

    printf("%s\\n", p);
    printf("%s\\n", p + 3);
    printf("%c\\n", *p);
    printf("%c\\n", *(p + 3));
    printf("%c\\n", *p + 2);

    return 0;
}`,
      answer: "KOREA\nEA\nK\nE\nM",
      explanation: `1. char *p = "KOREA" → p는 문자열 "KOREA"의 시작 주소를 가리킴
   p → K(0) O(1) R(2) E(3) A(4) \\0(5)

2. printf("%s", p) → p가 가리키는 주소부터 \\0까지 문자열 출력
   → "KOREA"

3. printf("%s", p+3) → p+3은 'E'의 주소 → 거기서부터 \\0까지 출력
   → "EA"

4. printf("%c", *p) → *p는 p가 가리키는 값 = 'K'
   → "K"

5. printf("%c", *(p+3)) → p+3이 가리키는 값 = 'E'
   → "E"

6. printf("%c", *p+2) → *p는 'K' (ASCII 75), 75 + 2 = 77 = 'M'
   → "M"
   주의: *p+2는 (*p)+2이다. *(p+2)가 아님!

[핵심]
- %s: 해당 주소부터 \\0까지 문자열 출력
- %c: 한 문자 출력
- *p: 포인터가 가리키는 값 (역참조)
- *p+2: (*p) + 2 → 문자의 ASCII 값에 2를 더함
- *(p+2): p를 2칸 이동한 위치의 값
- 연산자 우선순위: * (역참조)가 + (덧셈)보다 높다`,
      jsComparison: `// JavaScript 문자열 동등 코드
// C의 char 포인터는 JS의 문자열과 유사하지만 동작 방식이 다름
const p = "KOREA";

// C: printf("%s", p) → 전체 문자열
console.log(p); // "KOREA"

// C: printf("%s", p+3) → 3번 인덱스부터 끝까지
console.log(p.slice(3)); // "EA"

// C: printf("%c", *p) → 첫 번째 문자
console.log(p[0]); // "K" (또는 p.charAt(0))

// C: printf("%c", *(p+3)) → 4번째 문자
console.log(p[3]); // "E"

// C: printf("%c", *p+2) → 첫 문자의 ASCII + 2
// JS에서 ASCII 변환:
console.log(String.fromCharCode(p.charCodeAt(0) + 2)); // "M"

// 차이점:
// - C: char *p로 포인터 사용, 포인터 산술 가능 (p+3)
// - JS: 문자열은 불변(immutable), 인덱스 접근(p[3]) 또는 slice() 사용
// - C: *p+2는 ASCII 값에 산술 연산, JS: charCodeAt() + fromCharCode() 필요
// - C: %s는 주소부터 null 종단까지 출력, JS: slice()로 부분 문자열 추출`,
    },
    {
      id: 20419,
      examId: "2020-4",
      originalNumber: 19,
      language: "Java",
      title: "상속 + 오버라이드 재귀 (Parent/Child compute)",
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
        System.out.print(obj.compute(4));
    }
}`,
      answer: "1",
      explanation: `1. Parent obj = new Child() → 업캐스팅, 실제 객체는 Child
2. obj.compute(4) → 다형성에 의해 Child의 compute(4) 호출

Child의 compute(n) 추적:
compute(4) = compute(3) + compute(1)

compute(3) = compute(2) + compute(0)
compute(2) = compute(1) + compute(-1)
compute(1) = 1 (기저 조건: n <= 1)
compute(-1) = -1 (기저 조건: n <= 1)
→ compute(2) = 1 + (-1) = 0

compute(0) = 0 (기저 조건: n <= 1)
→ compute(3) = 0 + 0 = 0

compute(1) = 1 (기저 조건: n <= 1)

compute(4) = compute(3) + compute(1) = 0 + 1 = 1

출력: 1

[핵심]
- 다형성: Parent 타입이지만 Child의 compute()가 호출됨 (오버라이딩)
- Child의 compute: compute(n-1) + compute(n-3) (Parent와 다른 재귀 패턴)
- 기저 조건 n <= 1에서 n 자체를 반환하므로 음수도 반환될 수 있음`,
      jsComparison: `// JavaScript 상속 + 오버라이드 재귀 동등 코드
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

// Java: Parent obj = new Child();
const obj = new Child();
console.log(obj.compute(4)); // 1

// 차이점:
// - Java: 재귀 호출 시 compute(n-1) → 자동으로 this의 메서드 호출
// - JS: this.compute(n-1) → this를 명시해야 함
// - Java: Parent obj = new Child() → 타입 명시적 선언
// - JS: const obj = new Child() → 타입 없이 선언
// - 다형성(오버라이딩)은 Java와 JS 모두 동일하게 동작`,
    },
    {
      id: 2045,
      examId: "2020-4",
      originalNumber: 5,
      language: "Java",
      title: "10진수 → 2진수 변환 (빈칸 채우기)",
      question:
        "다음 Java 코드는 10진수를 2진수로 변환하는 프로그램이다. 빈칸 (1)과 (2)에 들어갈 코드를 쓰시오.\n\n(1): while문의 조건식\n(2): 나머지를 구하는 수식",
      code: `public class Main {
    public static void main(String[] args) {
        int n = 10;
        int[] a = new int[8];
        int i = 0;

        while ( (1) ) {
            a[i++] = (2);
            n /= 2;
        }

        for (i = i - 1; i >= 0; i--) {
            System.out.print(a[i]);
        }
    }
}`,
      answer: "n > 0\nn % 2",
      explanation: `[빈칸 분석]

(1) while문 조건: n > 0
- n이 0보다 클 동안 반복해야 2진수 변환이 가능
- n을 계속 2로 나누면서 0이 될 때까지 반복

(2) 나머지 수식: n % 2
- 2진수 변환은 2로 나눈 나머지를 역순으로 나열하는 것
- n % 2는 n을 2로 나눈 나머지 (0 또는 1)

[실행 추적] n = 10
i=0: a[0] = 10%2 = 0, n = 10/2 = 5
i=1: a[1] = 5%2 = 1, n = 5/2 = 2
i=2: a[2] = 2%2 = 0, n = 2/2 = 1
i=3: a[3] = 1%2 = 1, n = 1/2 = 0
→ n=0이므로 while 종료

역순 출력: a[3]a[2]a[1]a[0] = 1010
10진수 10 = 2진수 1010 ✓

[핵심]
- 10진수 → 2진수: 2로 나눈 나머지를 역순으로 나열
- while(n > 0): n이 양수인 동안 반복
- a[i++] = n % 2: 나머지 저장 후 인덱스 증가
- n /= 2: 몫으로 갱신`,
      jsComparison: `// JavaScript 10진수 → 2진수 변환 동등 코드
let n = 10;
const a = new Array(8).fill(0);
let i = 0;

// (1) n > 0
while (n > 0) {
    // (2) n % 2
    a[i++] = n % 2;
    n = Math.floor(n / 2); // JS: 정수 나눗셈을 위해 Math.floor 필요
}

// 역순 출력
let result = '';
for (i = i - 1; i >= 0; i--) {
    result += a[i];
}
console.log(result); // "1010"

// JS에서는 내장 메서드로 간단히 가능:
// (10).toString(2) → "1010"

// 차이점:
// - Java: n /= 2 → 정수 나눗셈 (int끼리 나누면 소수점 버림)
// - JS: n / 2는 소수점 유지 → Math.floor(n / 2) 또는 n = n >> 1 필요
// - Java: int[] a = new int[8] → JS: const a = new Array(8).fill(0)
// - JS 내장: Number.toString(2)로 2진수 문자열 변환 가능`,
    },
    {
      id: 20416,
      examId: "2020-4",
      originalNumber: 16,
      language: "SQL",
      title: "GROUP BY COUNT (학과별 학생 수)",
      question:
        "다음 SQL문의 실행 결과를 쓰시오.\n\n[학생 테이블]\n| 학번 | 이름   | 학과       |\n|------|--------|----------|\n| 1001 | 김철수 | 컴퓨터공학 |\n| 1002 | 이영희 | 전자공학   |\n| 1003 | 박민수 | 컴퓨터공학 |\n| 1004 | 정수연 | 전자공학   |\n| 1005 | 홍길동 | 컴퓨터공학 |",
      code: `SELECT 학과, COUNT(학과) AS 학생수
FROM 학생
GROUP BY 학과;`,
      answer: "컴퓨터공학 3\n전자공학 2",
      explanation: `1. GROUP BY 학과 → 학과별로 그룹화
   - 컴퓨터공학: {김철수, 박민수, 홍길동}
   - 전자공학: {이영희, 정수연}

2. COUNT(학과) → 각 그룹의 행 수를 계산
   - 컴퓨터공학: 3명
   - 전자공학: 2명

3. SELECT 학과, COUNT(학과) AS 학생수
   결과:
   | 학과       | 학생수 |
   |-----------|--------|
   | 컴퓨터공학 | 3      |
   | 전자공학   | 2      |

[핵심]
- GROUP BY: 지정한 컬럼의 값이 같은 행들을 하나의 그룹으로 묶음
- COUNT(): 그룹 내의 행 수를 세는 집계 함수
- AS: 컬럼에 별칭(Alias) 부여
- GROUP BY 없이 집계 함수를 사용하면 전체 행에 대해 계산됨`,
    },
    // ===== 이론 문제 =====
    {
      id: 20401,
      examId: "2020-4",
      originalNumber: 1,
      language: "이론" as const,
      title: "IPv6",
      question:
        "IPv4의 주소 부족 문제를 해결하기 위해 개발된 차세대 인터넷 프로토콜로, 128비트의 주소 체계를 사용하는 것은?",
      answer: "IPv6",
      explanation:
        "IPv6(Internet Protocol version 6)는 IPv4의 주소 부족 문제를 해결하기 위해 개발된 차세대 인터넷 프로토콜입니다.\n\n비교:\n- IPv4: 32비트 주소 (약 43억 개), 8비트씩 4부분으로 구분 (예: 192.168.0.1)\n- IPv6: 128비트 주소 (거의 무한), 16비트씩 8부분으로 구분 (예: 2001:0db8::1)\n\nIPv6 특징:\n- 주소 공간 확장 (128비트)\n- 헤더 단순화\n- 보안 기능 내장 (IPSec)\n- 자동 주소 설정(Auto Configuration)\n- 이동성 지원",
    },
    {
      id: 20402,
      examId: "2020-4",
      originalNumber: 2,
      language: "이론" as const,
      title: "디자인 패턴 분류 - 행위",
      question:
        "디자인 패턴을 목적에 따라 분류할 때 생성, 구조와 함께 포함되는 세 번째 분류는?",
      answer: "행위(Behavioral)",
      explanation:
        "GoF(Gang of Four) 디자인 패턴의 목적에 따른 분류:\n\n1. 생성(Creational) 패턴: 객체 생성 관련\n   - Factory Method, Abstract Factory, Builder, Prototype, Singleton\n\n2. 구조(Structural) 패턴: 클래스/객체 조합 구조 관련\n   - Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy\n\n3. 행위(Behavioral) 패턴: 객체 간 상호작용과 책임 분배 관련\n   - Observer, Strategy, Command, Iterator, Mediator, Memento, State, Template Method, Visitor, Chain of Responsibility, Interpreter",
    },
    {
      id: 20403,
      examId: "2020-4",
      originalNumber: 3,
      language: "이론" as const,
      title: "패키지 다이어그램",
      question:
        "UML 다이어그램 중 시스템의 구성 요소들 간의 관계를 패키지 단위로 그룹화하여 보여주는 다이어그램은?",
      answer: "패키지 다이어그램(Package Diagram)",
      explanation:
        "패키지 다이어그램(Package Diagram)은 UML의 구조적 다이어그램 중 하나로, 모델 요소들을 패키지 단위로 그룹화하여 그들 간의 의존 관계를 보여줍니다.\n\nUML 다이어그램 종류:\n- 구조 다이어그램: 클래스, 객체, 컴포넌트, 배치, 복합구조, 패키지\n- 행위 다이어그램: 유스케이스, 시퀀스, 커뮤니케이션, 상태, 활동, 상호작용 개요, 타이밍",
    },
    {
      id: 20404,
      examId: "2020-4",
      originalNumber: 4,
      language: "이론" as const,
      title: "즉시 갱신 회복 기법",
      question:
        "트랜잭션 회복 기법 중 Redo와 Undo를 모두 사용하며, 트랜잭션의 갱신 결과를 즉시 데이터베이스에 반영하는 기법은?",
      answer: "즉시 갱신 회복 기법(Immediate Update Recovery)",
      explanation:
        "즉시 갱신 회복 기법(Immediate Update)은 트랜잭션 수행 중 변경 내용을 즉시 데이터베이스에 반영하고, 장애 발생 시 로그를 이용하여 Redo/Undo를 수행합니다.\n\n회복 기법:\n1. 즉시 갱신(Immediate Update): 변경 즉시 반영, Redo/Undo 모두 사용\n2. 지연 갱신(Deferred Update): COMMIT 시에만 반영, Redo만 사용\n3. 검사점(Checkpoint): 검사점 이후 로그만 처리\n4. 그림자 페이징(Shadow Paging): 그림자 페이지 테이블로 복구",
    },
    {
      id: 20407,
      examId: "2020-4",
      originalNumber: 7,
      language: "이론" as const,
      title: "스니핑 (Sniffing)",
      question:
        "네트워크에서 전송되는 패킷을 수집하여 암호화되지 않은 정보(아이디, 패스워드 등)를 탈취하는 수동적 공격 기법은?",
      answer: "스니핑(Sniffing)",
      explanation:
        "스니핑(Sniffing)은 네트워크 상에서 전송되는 패킷을 몰래 수집하여 분석하는 수동적(Passive) 공격 기법입니다.\n\n특징:\n- 네트워크 트래픽을 도청하여 정보 탈취\n- 암호화되지 않은 데이터(아이디, 패스워드 등) 수집\n- 패킷 스니퍼(Wireshark 등) 도구 사용\n\n방지 방법:\n- 데이터 암호화 (SSL/TLS, VPN)\n- SSH 사용 (Telnet 대신)\n- 스위칭 환경 사용\n- ARP Spoofing 방지",
    },
    {
      id: 20408,
      examId: "2020-4",
      originalNumber: 8,
      language: "이론" as const,
      title: "NAT (네트워크 주소 변환)",
      question:
        "외부 공인 IP 주소와 포트 번호를 내부 사설 IP 주소로 변환하는 기술은?",
      answer: "NAT(Network Address Translation)",
      explanation:
        "NAT(Network Address Translation)는 사설 IP 주소를 공인 IP 주소로 변환하거나 그 반대 변환을 수행하는 기술입니다.\n\n기능:\n- 내부 네트워크의 사설 IP를 외부 공인 IP로 변환\n- IP 주소 절약 (여러 내부 장치가 하나의 공인 IP 공유)\n- 보안 강화 (내부 네트워크 주소 은닉)\n\n종류:\n- 정적 NAT: 1:1 매핑\n- 동적 NAT: 공인 IP 풀에서 동적 할당\n- PAT(Port Address Translation): 포트 번호를 이용한 다:1 매핑",
    },
    {
      id: 20410,
      examId: "2020-4",
      originalNumber: 10,
      language: "이론" as const,
      title: "블록체인 (Blockchain)",
      question:
        "P2P 네트워크 기반으로 블록에 데이터를 담아 체인 형태로 연결하여 분산 저장하며, 데이터 위변조를 방지하는 기술은?",
      answer: "블록체인(Blockchain)",
      explanation:
        "블록체인(Blockchain)은 P2P(Peer-to-Peer) 네트워크에서 블록 단위의 데이터를 체인 형태로 연결하여 분산 저장하는 기술입니다.\n\n특징:\n- 분산 원장(Distributed Ledger): 모든 참여자가 동일한 데이터 보유\n- 위변조 방지: 해시 함수로 블록 연결, 변경 시 전체 체인 무효화\n- 탈중앙화: 중앙 관리자 없이 합의 알고리즘으로 운영\n- 투명성: 모든 거래 기록 공개\n\n활용: 암호화폐, 스마트 계약, 공급망 관리, 전자 투표 등",
    },
    {
      id: 20411,
      examId: "2020-4",
      originalNumber: 11,
      language: "이론" as const,
      title: "하둡 (Hadoop)",
      question:
        "대규모 데이터를 분산 처리할 수 있는 Java 기반의 오픈소스 프레임워크로, 분산 컴퓨팅 플랫폼은?",
      answer: "하둡(Hadoop)",
      explanation:
        "하둡(Hadoop)은 대용량 데이터를 분산 처리하기 위한 Java 기반의 오픈소스 프레임워크입니다.\n\n핵심 구성요소:\n- HDFS(Hadoop Distributed File System): 분산 파일 시스템\n- MapReduce: 분산 병렬 처리 프레임워크\n- YARN: 리소스 관리\n\n특징:\n- 대규모 데이터 처리 (빅데이터)\n- 저렴한 하드웨어로 구성 가능\n- 수평 확장(Scale-Out) 용이\n- 데이터 복제를 통한 장애 허용(Fault Tolerance)",
    },
    {
      id: 20412,
      examId: "2020-4",
      originalNumber: 12,
      language: "이론" as const,
      title: "이상 (Anomaly) 3가지",
      question: "데이터베이스에서 발생하는 이상(Anomaly)의 3가지 종류를 쓰시오.",
      answer: "삽입 이상(Insertion Anomaly), 삭제 이상(Deletion Anomaly), 갱신 이상(Update Anomaly)",
      explanation:
        "이상(Anomaly)은 데이터베이스 설계가 잘못되어 데이터 조작 시 발생하는 문제입니다.\n\n1. 삽입 이상(Insertion Anomaly): 데이터를 삽입할 때 불필요한 데이터도 함께 삽입해야 하는 문제\n2. 삭제 이상(Deletion Anomaly): 데이터를 삭제할 때 필요한 데이터도 함께 삭제되는 문제\n3. 갱신 이상(Update Anomaly): 데이터를 수정할 때 일부만 수정되어 데이터 불일치가 발생하는 문제\n\n해결 방법: 정규화(Normalization)를 통해 테이블을 분해",
    },
    {
      id: 20413,
      examId: "2020-4",
      originalNumber: 13,
      language: "이론" as const,
      title: "프로세스 상태 전이",
      question:
        "프로세스 상태 전이도에서 다음에 해당하는 상태를 쓰시오.\n1) 프로세스가 CPU를 할당받기 위해 대기하는 상태\n2) 프로세스가 CPU를 할당받아 실행 중인 상태\n3) 프로세스가 입출력 등의 이벤트를 기다리는 상태",
      answer: "1) 준비(Ready)  2) 실행(Running)  3) 대기(Waiting/Blocked)",
      explanation:
        "프로세스 상태:\n1. 생성(New/Created): 프로세스가 생성된 상태\n2. 준비(Ready): CPU를 할당받기 위해 대기 중인 상태\n3. 실행(Running): CPU를 할당받아 명령어를 실행 중인 상태\n4. 대기(Waiting/Blocked): 입출력 등의 이벤트 완료를 기다리는 상태\n5. 종료(Terminated): 프로세스 실행이 완료된 상태\n\n상태 전이:\n- 디스패치(Dispatch): 준비 → 실행\n- 타이머 런아웃: 실행 → 준비\n- 블록(Block): 실행 → 대기\n- 웨이크업(Wake-up): 대기 → 준비",
    },
    {
      id: 20414,
      examId: "2020-4",
      originalNumber: 14,
      language: "이론" as const,
      title: "샘플링 오라클",
      question:
        "테스트 오라클 중 특정 몇 개의 입력값에 대해서만 기대하는 결과를 제공하는 오라클은?",
      answer: "샘플링 오라클(Sampling Oracle)",
      explanation:
        "테스트 오라클의 유형:\n\n1. 참(True) 오라클: 모든 입력값에 대해 기대 결과를 제공 (완벽한 오라클)\n2. 샘플링(Sampling) 오라클: 특정 몇 개의 입력값에 대해서만 기대 결과를 제공\n3. 휴리스틱(Heuristic) 오라클: 샘플링 오라클을 개선한 것으로, 나머지 입력값에 대해서는 추정으로 처리\n4. 일관성 검사(Consistent) 오라클: 이전 실행 결과와의 일관성을 확인\n\n테스트 오라클은 테스트 결과가 올바른지 판단하기 위한 기준(메커니즘)입니다.",
    },
    {
      id: 20415,
      examId: "2020-4",
      originalNumber: 15,
      language: "이론" as const,
      title: "동치분할 테스트",
      question:
        "입력 데이터의 범위를 유사한 특성을 가진 그룹(등가 클래스)으로 분류하여 각 그룹에서 대표값을 선정하여 테스트하는 기법은?",
      answer: "동치분할 테스트(Equivalence Partitioning Test)",
      explanation:
        "동치분할 테스트(Equivalence Partitioning)는 블랙박스 테스트 기법으로, 입력 데이터의 영역을 유사한 도메인별로 유효값/무효값을 그룹핑하여 대표값으로 테스트하는 기법입니다.\n\n예시: 점수(0~100)를 등급으로 변환하는 프로그램\n- 유효 클래스: 0~59(F), 60~69(D), 70~79(C), 80~89(B), 90~100(A)\n- 무효 클래스: 음수, 101 이상\n- 각 클래스에서 대표값 선택하여 테스트",
    },
    {
      id: 20417,
      examId: "2020-4",
      originalNumber: 17,
      language: "이론" as const,
      title: "UNIX 운영체제",
      question:
        "1960년대 AT&T 벨 연구소에서 개발된 운영체제로, 대부분 C 언어로 작성되었으며 계층적 파일 구조를 가지는 것은?",
      answer: "UNIX",
      explanation:
        "UNIX는 1960년대 AT&T 벨 연구소에서 켄 톰프슨과 데니스 리치가 개발한 운영체제입니다.\n\n특징:\n- 대부분 C 언어로 작성 (약 90%)\n- 계층적 트리 구조의 파일 시스템\n- 멀티유저, 멀티태스킹 지원\n- 이식성이 높음 (다양한 하드웨어에서 실행 가능)\n- 셸(Shell)을 통한 명령어 처리\n- 파이프라인 개념 도입\n\n파생: Linux, macOS, BSD, Solaris 등",
    },
    {
      id: 20420,
      examId: "2020-4",
      originalNumber: 20,
      language: "이론" as const,
      title: "가용성 (Availability)",
      question:
        "정보보안의 3대 요소 중 인가된 사용자가 원하는 서비스를 지속적으로 이용할 수 있도록 보장하는 특성은?",
      answer: "가용성(Availability)",
      explanation:
        "정보보안의 3대 요소 (CIA Triad):\n\n1. 기밀성(Confidentiality): 인가되지 않은 사용자가 정보에 접근할 수 없도록 보호\n2. 무결성(Integrity): 정보가 인가되지 않은 방법으로 변경되지 않도록 보호\n3. 가용성(Availability): 인가된 사용자가 필요할 때 언제든지 정보와 서비스에 접근할 수 있도록 보장\n\n가용성 위협: DoS/DDoS 공격, 시스템 장애 등\n가용성 보장 방법: 이중화, 백업, 재해 복구 계획(DRP) 등",
    },
  ],
};

export default exam2020_4;
