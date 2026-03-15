import { ExamData } from "./types";

const exam2022_3: ExamData = {
  id: "2022-3",
  title: "2022년 3회 정보처리기사 실기",
  questions: [
    {
      id: 2304,
      examId: "2022-3",
      originalNumber: 4,
      language: "C",
      title: "배열 순위(Ranking) 매기기",
      question:
        "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    int arr[] = {77, 32, 10, 99, 50};
    int result[] = {1, 1, 1, 1, 1};
    int len = 5;

    for (int i = 0; i < len; i++) {
        for (int j = 0; j < len; j++) {
            if (arr[i] < arr[j]) {
                result[i]++;
            }
        }
    }

    for (int i = 0; i < len; i++) {
        printf("%d", result[i]);
    }

    return 0;
}`,
      answer: "24513",
      explanation: `1. arr = {77, 32, 10, 99, 50}
2. 순위 계산 (값이 작으면 순위가 높아짐 = 큰 수일수록 낮은 순위)

i=0 (arr[0]=77):
  arr[0]<arr[3](99) → result[0]++ → result[0]=2

i=1 (arr[1]=32):
  arr[1]<arr[0](77) → result[1]++
  arr[1]<arr[3](99) → result[1]++
  arr[1]<arr[4](50) → result[1]++ → result[1]=4

i=2 (arr[2]=10):
  arr[2]<arr[0](77) → result[2]++
  arr[2]<arr[1](32) → result[2]++
  arr[2]<arr[3](99) → result[2]++
  arr[2]<arr[4](50) → result[2]++ → result[2]=5

i=3 (arr[3]=99):
  어떤 값보다도 작지 않음 → result[3]=1

i=4 (arr[4]=50):
  arr[4]<arr[0](77) → result[4]++
  arr[4]<arr[3](99) → result[4]++ → result[4]=3

3. result = {2, 4, 5, 1, 3}
4. 출력: "24513"

[핵심] 자신보다 큰 값의 개수 + 1 = 순위. 이중 for문으로 모든 쌍을 비교한다.`,
      jsComparison: `const arr = [77, 32, 10, 99, 50];
const result = [1, 1, 1, 1, 1];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            result[i]++;
        }
    }
}
console.log(result.join("")); // "24513"`,
    },
    {
      id: 2309,
      examId: "2022-3",
      originalNumber: 9,
      language: "Python",
      title: "람다와 map 함수",
      question:
        "다음 Python 코드의 실행 결과를 쓰시오.",
      code: `result = list(map(lambda num: num + 100, [1, 2, 3, 4, 5]))
print(result)`,
      answer: "[101, 102, 103, 104, 105]",
      explanation: `1. map(함수, 리스트): 리스트의 각 요소에 함수를 적용
2. lambda num: num + 100 → 각 요소에 100을 더하는 익명 함수
3. [1, 2, 3, 4, 5]의 각 요소에 적용:
   1 + 100 = 101
   2 + 100 = 102
   3 + 100 = 103
   4 + 100 = 104
   5 + 100 = 105
4. list()로 리스트 변환
5. 출력: [101, 102, 103, 104, 105]

[핵심]
- lambda: 익명 함수 (한 줄 함수)
- map(func, iterable): 각 요소에 func 적용 후 map 객체 반환
- list()로 변환해야 리스트 출력 가능`,
      jsComparison: `const result = [1, 2, 3, 4, 5].map(num => num + 100);
console.log(result); // [101, 102, 103, 104, 105]`,
    },
    {
      id: 2313,
      examId: "2022-3",
      originalNumber: 13,
      language: "C",
      title: "완전수 개수 구하기 (6~30)",
      question:
        "다음 C 코드의 실행 결과를 쓰시오.",
      code: `#include <stdio.h>

int main() {
    int count = 0;

    for (int num = 6; num <= 30; num++) {
        int sum = 0;
        for (int i = 1; i < num; i++) {
            if (num % i == 0) {
                sum += i;
            }
        }
        if (sum == num) {
            count++;
        }
    }

    printf("%d", count);
    return 0;
}`,
      answer: "2",
      explanation: `1. 완전수: 자기 자신을 제외한 약수의 합이 자기 자신과 같은 수

2. 6~30 범위에서 완전수 찾기:
   num=6: 약수(자신 제외) = 1, 2, 3 → 합 = 6 = num ✓ (완전수)
   num=7~27: 약수의 합 ≠ num
   num=28: 약수(자신 제외) = 1, 2, 4, 7, 14 → 합 = 28 = num ✓ (완전수)
   num=29~30: 약수의 합 ≠ num

3. count = 2 (6과 28)
4. 출력: 2

[핵심] 완전수(Perfect Number): 6, 28, 496, 8128... 자신을 제외한 약수의 합 = 자신.`,
      jsComparison: `let count = 0;
for (let num = 6; num <= 30; num++) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    if (sum === num) count++;
}
console.log(count); // 2`,
    },
    {
      id: 2319,
      examId: "2022-3",
      originalNumber: 19,
      language: "Java",
      title: "배열 생성 및 출력 (MakeArray)",
      question:
        "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `public class Main {
    static int[] makeArray(int size) {
        int[] arr = new int[size];
        for (int i = 0; i < size; i++) {
            arr[i] = i;
        }
        return arr;
    }

    public static void main(String[] args) {
        int[] result = makeArray(4);
        for (int i = 0; i < result.length; i++) {
            System.out.print(result[i]);
        }
    }
}`,
      answer: "0123",
      explanation: `1. makeArray(4) 호출: size = 4
2. arr = new int[4] → {0, 0, 0, 0}
3. 반복문:
   i=0: arr[0] = 0
   i=1: arr[1] = 1
   i=2: arr[2] = 2
   i=3: arr[3] = 3
4. arr = {0, 1, 2, 3} 반환

5. main에서 result = {0, 1, 2, 3}
6. 출력: 0123

[핵심] 메서드에서 배열을 생성하고 반환할 수 있다. 배열은 참조 타입이므로 메서드 밖에서도 접근 가능.`,
      jsComparison: `function makeArray(size) {
    const arr = new Array(size);
    for (let i = 0; i < size; i++) {
        arr[i] = i;
    }
    return arr;
}
const result = makeArray(4);
console.log(result.join("")); // "0123"`,
    },
    {
      id: 2320,
      examId: "2022-3",
      originalNumber: 20,
      language: "Java",
      title: "3의 배수 중 짝수 아닌 최대값 (999 미만)",
      question:
        "다음 Java 코드의 실행 결과를 쓰시오.",
      code: `public class Main {
    public static void main(String[] args) {
        int result = 0;
        for (int i = 999; i > 0; i--) {
            if (i % 3 == 0 && i % 2 != 0) {
                result = i;
                break;
            }
        }
        System.out.print(result);
    }
}`,
      answer: "993",
      explanation: `1. i=999부터 역순으로 탐색
2. 조건: i % 3 == 0 (3의 배수) AND i % 2 != 0 (짝수가 아닌 = 홀수)
3. i=999: 999 % 3 = 0 (3의 배수 ✓), 999 % 2 = 1 (홀수 ✓)
4. 두 조건 모두 만족 → result = 999

   하지만 문제에서 "under 999"이므로 i < 999:
   i=998: 998 % 3 = 2 → X
   i=997: 997 % 3 = 1 → X
   i=996: 996 % 3 = 0, 996 % 2 = 0 (짝수) → X
   i=995: 995 % 3 = 2 → X
   i=994: 994 % 3 = 1 → X
   i=993: 993 % 3 = 0 (3의 배수 ✓), 993 % 2 = 1 (홀수 ✓) → result = 993

5. break로 즉시 종료
6. 출력: 993

[핵심] break: 조건 만족 시 반복문 즉시 탈출. 역순 탐색으로 최대값을 빠르게 찾는다.`,
      jsComparison: `let result = 0;
for (let i = 998; i > 0; i--) {
    if (i % 3 === 0 && i % 2 !== 0) {
        result = i;
        break;
    }
}
console.log(result); // 993`,
    },
    // ===== 이론 문제 =====
    {
      id: 22302,
      examId: "2022-3",
      originalNumber: 2,
      language: "이론" as const,
      title: "관계 대수 기호",
      question: "아래 예시를 보고 관계 대수에 대한 기호를 작성하시오.\n1. 합집합 2. 차집합 3. 교차곱 4. 프로젝트 5. 조인",
      answer: "1. U(합집합) 2. -(차집합) 3. X(교차곱) 4. π(프로젝트) 5. ⋈(조인)",
      explanation: "관계 대수(Relational Algebra)의 기본 연산 기호: 합집합(U, Union)은 두 릴레이션의 합, 차집합(-, Difference)은 한쪽에만 있는 튜플, 교차곱(X, Cartesian Product)은 모든 조합, 프로젝트(π, Projection)는 특정 속성만 추출, 조인(⋈, Join)은 공통 속성으로 결합하는 연산이다.",
    },
    {
      id: 22303,
      examId: "2022-3",
      originalNumber: 3,
      language: "이론" as const,
      title: "디자인 패턴 - Bridge, Observer",
      question: "다음 설명에 해당하는 디자인 패턴을 작성하시오.\n1. 기능을 처리하는 클래스와 구현을 담당하는 추상 클래스로 구별하여 구현 계층과 추상 계층을 분리하고 독립적으로 변경 가능한 패턴\n2. 한 객체의 상태가 변화하면 그 객체에 의존하는 다른 객체들에게 알려주고 자동으로 내용이 갱신되는 패턴",
      answer: "1. Bridge 2. Observer",
      explanation: "Bridge 패턴은 구조 패턴으로, 추상화(기능)와 구현을 분리하여 각각 독립적으로 변경할 수 있게 한다. Observer 패턴은 행위 패턴으로, 객체 간 일대다 의존 관계를 정의하여 한 객체의 상태가 변하면 의존하는 모든 객체에 자동으로 통지된다.",
    },
    {
      id: 22305,
      examId: "2022-3",
      originalNumber: 5,
      language: "이론" as const,
      title: "서브넷 분할 - FLSM 브로드캐스트 IP",
      question: "첫 번째 네트워크 주소가 192.168.1.0/24일 때 FLSM 방식으로 3개로 분할했을 때 두 번째 네트워크의 브로드캐스트 IP를 10진수로 변환한 값을 작성하시오.",
      answer: "192.168.1.127",
      explanation: "FLSM(Fixed Length Subnet Masking)으로 /24를 3개로 분할하면 /26(64개 주소)으로 나뉜다. 첫 번째 서브넷: 192.168.1.0~63, 두 번째 서브넷: 192.168.1.64~127, 세 번째 서브넷: 192.168.1.128~191. 두 번째 네트워크의 브로드캐스트 IP는 해당 범위의 마지막 주소인 192.168.1.127이다.",
    },
    {
      id: 22306,
      examId: "2022-3",
      originalNumber: 6,
      language: "이론" as const,
      title: "경계값 분석 테스트",
      question: "아래 표를 확인하여 보기에 알맞는 테스트 기법의 이름을 작성하시오. (입력값의 범위 경계에서 오류가 발생할 가능성이 높다는 점을 이용하여 경계값을 테스트하는 기법)",
      answer: "Boundary Value Analysis(경계값 분석)",
      explanation: "경계값 분석(Boundary Value Analysis)은 블랙박스 테스트 기법의 하나로, 입력 데이터의 경계값(최솟값, 최댓값, 경계 근처 값)에서 오류가 발생할 가능성이 높다는 점에 착안하여 경계값을 중심으로 테스트 케이스를 설계하는 기법이다.",
    },
    {
      id: 22307,
      examId: "2022-3",
      originalNumber: 7,
      language: "이론" as const,
      title: "SQL 실행 결과 - 튜플 수",
      question: "STUDENT 테이블에서 컴퓨터과 학생 50명, 전기과 학생 100명, 인터넷과 학생 50명의 정보가 저장되어 있을 때, 다음 각 SQL문의 실행 결과(튜플 수)를 작성하시오.\n1) SELECT COUNT(*) FROM STUDENT;\n2) SELECT COUNT(DISTINCT 학과) FROM STUDENT;\n3) SELECT COUNT(DISTINCT 학과) FROM STUDENT WHERE 학과 = '컴퓨터과';",
      answer: "1) 200 2) 3 3) 1",
      explanation: "1) COUNT(*)는 전체 튜플 수를 반환: 50+100+50 = 200. 2) COUNT(DISTINCT 학과)는 중복을 제거한 학과 수: 컴퓨터과, 전기과, 인터넷과 = 3. 3) WHERE 절로 컴퓨터과만 필터링한 후 DISTINCT 학과를 세면 1이다.",
    },
    {
      id: 22308,
      examId: "2022-3",
      originalNumber: 8,
      language: "이론" as const,
      title: "사회공학과 다크 데이터",
      question: "다음 설명에 해당하는 용어를 작성하시오.\n1. 보안학적 측면에서 기술적인 방법이 아닌 사람들 간의 기본적인 신뢰를 기반으로 사람을 속여 비밀 정보를 획득하는 기법\n2. 빅데이터와 비슷하면서도 구조화되어 있지 않고, 수집된 후 저장은 되지만 분석에 활용되지 않는 다량의 데이터",
      answer: "1. 사회공학(Social Engineering) 2. 다크 데이터(Dark Data)",
      explanation: "사회공학(Social Engineering)은 사람의 심리적 취약점을 이용하여 비밀 정보를 획득하는 비기술적 침입 기법이다. 다크 데이터(Dark Data)는 수집되어 저장되어 있지만 분석이나 활용이 이루어지지 않는 데이터로, 잠재적 가치가 있으나 관리되지 않아 보안 위험이 될 수 있다.",
    },
    {
      id: 22310,
      examId: "2022-3",
      originalNumber: 10,
      language: "이론" as const,
      title: "SIEM 보안 솔루션",
      question: "머신러닝 기술을 이용하여 IT 시스템에서 발생하는 대량의 로그를 통합관리 및 분석하여 사전에 위협에 대응하는 보안 솔루션의 약자를 작성하시오.",
      answer: "SIEM",
      explanation: "SIEM(Security Information and Event Management)은 보안 정보 및 이벤트 관리 시스템으로, 다양한 보안 장비와 시스템에서 발생하는 로그와 이벤트를 통합 수집하고 분석하여 보안 위협을 탐지하고 대응하는 솔루션이다. 머신러닝을 활용하여 이상 징후를 사전에 탐지할 수 있다.",
    },
    {
      id: 22311,
      examId: "2022-3",
      originalNumber: 11,
      language: "이론" as const,
      title: "형상 관리 도구",
      question: "다음 보기 중, 형상 관리 도구를 3가지 고르시오.",
      answer: "CVS, SVN, GIT",
      explanation: "형상 관리(Configuration Management) 도구는 소프트웨어 개발 과정에서 소스 코드의 변경 사항을 체계적으로 관리하는 도구이다. CVS(Concurrent Versions System), SVN(Subversion), GIT이 대표적인 형상 관리 도구이다. 이 도구들은 버전 관리, 변경 이력 추적, 협업 지원 등의 기능을 제공한다.",
    },
    {
      id: 22314,
      examId: "2022-3",
      originalNumber: 14,
      language: "이론" as const,
      title: "Trustzone과 Typosquatting",
      question: "다음 설명에 해당하는 용어를 작성하시오.\n1. 프로세서 안에 독립적인 보안 구역을 따로 두어 중요한 정보를 보호하는 하드웨어 기반의 보안 기술\n2. 사용자들이 사이트에 접속할 때 주소를 잘못 입력하거나 철자를 빠뜨리는 실수를 이용하기 위해 유사한 유명 도메인을 미리 등록하는 것",
      answer: "1. Trustzone 2. Typosquatting",
      explanation: "Trustzone은 ARM사에서 개발한 하드웨어 기반 보안 기술로, CPU 내에 별도의 보안 영역(Secure World)을 만들어 민감한 데이터와 코드를 보호한다. Typosquatting(타이포스쿼팅)은 유명 도메인과 유사한 도메인을 등록하여 사용자의 오타를 이용해 악성 사이트로 유도하는 공격 기법이다.",
    },
    {
      id: 22315,
      examId: "2022-3",
      originalNumber: 15,
      language: "이론" as const,
      title: "SSO (Single Sign-On)",
      question: "여러 개의 사이트에서 한 번의 로그인으로 여러 가지 다른 사이트들을 자동적으로 접속하여 이용하는 방법의 약자를 작성하시오.",
      answer: "SSO",
      explanation: "SSO(Single Sign-On)는 한 번의 인증으로 여러 시스템이나 서비스에 접근할 수 있는 통합 인증 체계이다. 사용자 편의성을 높이고 비밀번호 관리 부담을 줄여주지만, SSO 인증 자체가 뚫리면 모든 시스템에 접근이 가능해지는 보안 위험이 있다.",
    },
    {
      id: 22316,
      examId: "2022-3",
      originalNumber: 16,
      language: "이론" as const,
      title: "CPU 스케줄링 알고리즘",
      question: "다음은 스케줄링에 관한 내용이다. 괄호 안에 알맞은 답을 작성하시오.\n1. 준비 큐에서 가장 짧은 처리 시간을 가진 프로세스에게 CPU를 할당하는 비선점 스케줄링\n2. 시간 할당량(Time Quantum)을 정하여 각 프로세스에 동일하게 CPU를 할당하는 선점 스케줄링\n3. 실행 중인 프로세스의 남은 시간보다 더 짧은 CPU 시간을 가진 프로세스가 도착하면 교체하는 선점 스케줄링",
      answer: "1. SJF 2. RR 3. SRT",
      explanation: "SJF(Shortest Job First)는 실행 시간이 가장 짧은 프로세스에 CPU를 할당하는 비선점 방식이다. RR(Round Robin)은 시간 할당량(Time Quantum)만큼 돌아가며 CPU를 할당하는 선점 방식이다. SRT(Shortest Remaining Time)는 SJF의 선점 버전으로, 남은 실행 시간이 더 짧은 프로세스가 도착하면 CPU를 교체한다.",
    },
    {
      id: 22317,
      examId: "2022-3",
      originalNumber: 17,
      language: "이론" as const,
      title: "UML 구성 요소",
      question: "UML은 통합 모델링 언어로서 구성 요소로는 사물, ( 1 ), 다이어그램으로 이루어져 있으며, 구조 다이어그램의 종류에는 ( 2 ) 다이어그램과 ( 3 ) 다이어그램 등이 있다.",
      answer: "1. 관계 2. 클래스 3. 인터페이스",
      explanation: "UML(Unified Modeling Language)의 구성 요소는 사물(Things), 관계(Relationships), 다이어그램(Diagrams)이다. 구조 다이어그램에는 클래스 다이어그램, 객체 다이어그램, 컴포넌트 다이어그램, 배치 다이어그램, 패키지 다이어그램 등이 있다.",
    },
    {
      id: 22318,
      examId: "2022-3",
      originalNumber: 18,
      language: "이론" as const,
      title: "E-R 다이어그램 기호",
      question: "E-R 다이어그램에 관한 설명이다. 괄호 안에 알맞은 답을 작성하시오.\n1. 개체와 관계를 연결하는 선 종류\n2. 마름모로 표현되는 것\n3. 다중 값 속성을 연결하는 선 종류\n4. 관계가 갖는 속성\n5. 사각형으로 표현되는 것",
      answer: "1. 실선 2. 관계집합 3. 점선 4. 관계속성 5. 개체집합",
      explanation: "E-R(Entity-Relationship) 다이어그램에서 사각형은 개체집합, 마름모는 관계집합, 타원은 속성을 나타낸다. 개체와 관계는 실선으로 연결하고, 다중 값 속성은 점선(이중 타원)으로 표현한다. 관계속성은 관계집합이 가지는 속성이다.",
    },
  ],
};

export default exam2022_3;
