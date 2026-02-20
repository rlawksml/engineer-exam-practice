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
  ],
};

export default exam2020_3;
