# 2026년 정보처리기사 실기 예상 모의고사 3회분

> 총 3회 × 20문제 = 60문제  
> 각 회차는 문제편과 정답·해설편으로 구성한다.  
> 실제 시험과 유사하게 출력 결과형, SQL 결과형, 단답형, 계산형을 혼합했다.

---

# 제1회 예상 모의고사

## 문제편

### 1번 · Python · 중

다음 코드의 출력 결과를 쓰시오.

```python
a = [1, 2, 3, 4, 5, 6]
print(sum(a[::2]) - sum(a[1::2]))
```

---

### 2번 · C · 중

다음 코드의 출력 결과를 쓰시오.

```c
#include <stdio.h>

int main() {
    int a[] = {10, 20, 30, 40};
    int *p = a + 1;
    printf("%d", *(p + 2));
    return 0;
}
```

---

### 3번 · SQL · 중

다음 테이블에서 SQL 실행 결과의 행 수를 쓰시오.

| a | b |
|---|---|
| 1 | A |
| 1 | A |
| 1 | B |
| 2 | A |
| 2 | A |

```sql
SELECT DISTINCT a, b
FROM T;
```

---

### 4번 · Java · 중

다음 코드의 출력 결과를 쓰시오.

```java
class A {
    String f(Object x) {
        return "A";
    }
}

class B extends A {
    @Override
    String f(Object x) {
        return "B";
    }

    String f(String x) {
        return "C";
    }
}

public class Main {
    public static void main(String[] args) {
        A a = new B();
        System.out.print(a.f("hello"));
    }
}
```

---

### 5번 · DB · 하

릴레이션에서 튜플을 유일하게 식별할 수 있는 최소 속성 집합을 무엇이라 하는가?

---

### 6번 · Python · 상

다음 코드의 출력 결과를 쓰시오.

```python
a = [[1], [2], [3]]
b = a[:]

b[1].append(9)
b[2] += b[0]

print(a)
```

---

### 7번 · 네트워크 · 중

IP 주소가 `192.168.10.130/26`일 때 네트워크 주소를 쓰시오.

---

### 8번 · 소프트웨어 공학 · 하

하향식 통합 테스트에서 아직 구현되지 않은 하위 모듈을 대신하는 임시 모듈을 무엇이라 하는가?

---

### 9번 · C · 중

다음 코드의 출력 결과를 쓰시오.

```c
#include <stdio.h>

int main() {
    char c = 'D';
    printf("%d", c - 'A');
    return 0;
}
```

---

### 10번 · SQL · 중

다음 SQL에서 `WHERE`와 `HAVING`의 역할을 각각 한 문장으로 설명하시오.

```sql
SELECT dept, AVG(salary)
FROM employee
WHERE salary >= 3000
GROUP BY dept
HAVING AVG(salary) >= 5000;
```

---

### 11번 · Java · 중

다음 코드의 출력 결과를 쓰시오.

```java
class A {
    A() {
        System.out.print("A");
    }
}

class B extends A {
    B() {
        System.out.print("B");
    }
}

public class Main {
    public static void main(String[] args) {
        new B();
    }
}
```

---

### 12번 · 보안 · 하

사용자가 자주 방문하는 정상 웹사이트를 감염시켜 특정 사용자를 공격하는 기법을 무엇이라 하는가?

---

### 13번 · Python · 중

다음 코드의 출력 결과를 쓰시오.

```python
words = "a,b,c,d".split(",")
print("-".join(words[::-2]))
```

---

### 14번 · 운영체제 · 중

다음 프로세스가 FCFS 방식으로 실행될 때 평균 대기 시간을 구하시오.

| 프로세스 | 실행 시간 |
|---|---:|
| P1 | 4 |
| P2 | 3 |
| P3 | 2 |

모든 프로세스는 동시에 도착한다.

---

### 15번 · 디자인 패턴 · 하

알고리즘을 객체로 캡슐화하여 실행 중에 교체할 수 있도록 하는 디자인 패턴은 무엇인가?

---

### 16번 · C · 상

다음 코드의 출력 결과를 쓰시오.

```c
#include <stdio.h>

struct Data {
    int value;
};

int main() {
    struct Data d = {7};
    struct Data *p = &d;
    p->value += 3;
    printf("%d", (*p).value);
    return 0;
}
```

---

### 17번 · SQL · 중

`COUNT(*)`, `COUNT(score)`, `COUNT(DISTINCT score)`의 차이를 설명하시오.

---

### 18번 · UML · 하

시간의 흐름에 따라 객체 간 메시지 전달 순서를 표현하는 UML 다이어그램은 무엇인가?

---

### 19번 · Python · 중

다음 코드의 출력 결과를 쓰시오.

```python
d = {}
for x in [1, 2, 1, 3, 2, 1]:
    d[x] = d.get(x, 0) + 1

print(d[1] + d[2])
```

---

### 20번 · 네트워크 · 하

ARP의 역할을 쓰시오.

---

## 정답 및 해설

### 1번 정답

```text
-3
```

`a[::2] = [1, 3, 5]`, 합은 9다.  
`a[1::2] = [2, 4, 6]`, 합은 12다.  
따라서 `9 - 12 = -3`.

**낚시:** 슬라이싱의 시작 인덱스와 step 구분.

---

### 2번 정답

```text
40
```

`p = a + 1`이므로 `p`는 `a[1]`을 가리킨다.  
`p + 2`는 `a[3]`을 가리키므로 값은 40이다.

---

### 3번 정답

```text
3행
```

남는 조합은 `(1,A)`, `(1,B)`, `(2,A)`이다.

---

### 4번 정답

```text
B
```

컴파일 시점에 `A`에서 보이는 후보는 `f(Object)`다.  
실제 객체는 `B`이므로 오버라이딩된 `B.f(Object)`가 실행된다.

---

### 5번 정답

```text
후보키
```

유일성과 최소성을 만족하는 속성 집합이다.

---

### 6번 정답

```text
[[1], [2, 9], [3, 1]]
```

`b = a[:]`는 얕은 복사다.  
내부 리스트는 공유된다.  
`b[1].append(9)`로 `a[1]`도 변경된다.  
`b[2] += b[0]` 역시 공유된 내부 리스트를 확장한다.

---

### 7번 정답

```text
192.168.10.128
```

`/26`의 블록 크기는 64다.  
범위는 0, 64, 128, 192로 시작한다.  
130은 128~191 범위에 속한다.

---

### 8번 정답

```text
스텁
```

---

### 9번 정답

```text
3
```

문자 코드 차이는 `'D' - 'A' = 3`이다.

---

### 10번 정답

```text
WHERE는 그룹화 전 개별 행을 필터링하고,
HAVING은 GROUP BY 이후 그룹 또는 집계 결과를 필터링한다.
```

---

### 11번 정답

```text
AB
```

부모 생성자가 먼저 실행된 후 자식 생성자가 실행된다.

---

### 12번 정답

```text
워터링 홀
```

---

### 13번 정답

```text
d-b
```

`words[::-2]`는 뒤에서부터 두 칸씩 선택하여 `["d", "b"]`가 된다.

---

### 14번 정답

```text
평균 대기 시간 = 11/3 ≈ 3.67
```

대기 시간:

- P1: 0
- P2: 4
- P3: 7

합은 11이다.

---

### 15번 정답

```text
Strategy 패턴
```

---

### 16번 정답

```text
10
```

`p->value`와 `(*p).value`는 같은 멤버를 의미한다.

---

### 17번 정답

```text
COUNT(*)는 전체 행 수,
COUNT(score)는 score가 NULL이 아닌 행 수,
COUNT(DISTINCT score)는 NULL을 제외하고 중복을 제거한 score 개수이다.
```

---

### 18번 정답

```text
시퀀스 다이어그램
```

---

### 19번 정답

```text
5
```

`d[1] = 3`, `d[2] = 2`이므로 결과는 5다.

---

### 20번 정답

```text
IP 주소를 MAC 주소로 변환한다.
```

---

# 제2회 예상 모의고사

## 문제편

### 1번 · Python · 중

다음 코드의 출력 결과를 쓰시오.

```python
a = [1, 2, 3]
b = a
b += [4]
print(a)
```

---

### 2번 · SQL · 중

다음 SQL의 실행 결과 행 수를 쓰시오.

| dept | salary |
|---|---:|
| A | 3000 |
| A | 5000 |
| B | 6000 |
| B | 2000 |
| C | 7000 |

```sql
SELECT dept, AVG(salary)
FROM employee
WHERE salary >= 3000
GROUP BY dept
HAVING AVG(salary) >= 5000;
```

---

### 3번 · C · 중

다음 코드의 출력 결과를 쓰시오.

```c
#include <stdio.h>

int sum(int *p, int n) {
    if (n == 0) return 0;
    return *p + sum(p + 1, n - 1);
}

int main() {
    int a[] = {1, 2, 3, 4};
    printf("%d", sum(a, 4));
    return 0;
}
```

---

### 4번 · Java · 상

다음 코드의 출력 결과를 쓰시오.

```java
class A {
    A() {
        print();
    }

    void print() {
        System.out.print("A");
    }
}

class B extends A {
    int value = 10;

    @Override
    void print() {
        System.out.print(value);
    }
}

public class Main {
    public static void main(String[] args) {
        new B();
    }
}
```

---

### 5번 · DB · 중

제2정규형에서 제거해야 하는 함수 종속은 무엇인가?

---

### 6번 · Python · 중

다음 코드의 출력 결과를 쓰시오.

```python
nums = [1, 2, 3, 4, 5]
result = [x * 2 for x in nums if x % 2 == 1]
print(result)
```

---

### 7번 · 네트워크 · 중

`10.0.0.70/27`의 브로드캐스트 주소를 쓰시오.

---

### 8번 · 보안 · 하

공격자가 입력값에 악의적인 SQL 구문을 삽입하여 데이터베이스를 조작하는 공격은 무엇인가?

---

### 9번 · C · 중

다음 코드의 출력 결과를 쓰시오.

```c
#include <stdio.h>

int main() {
    int x = 5;
    printf("%d", x << 1);
    return 0;
}
```

---

### 10번 · Java · 중

다음 코드의 출력 결과를 쓰시오.

```java
class Counter {
    static int count = 0;

    Counter() {
        count++;
    }
}

public class Main {
    public static void main(String[] args) {
        new Counter();
        new Counter();
        new Counter();
        System.out.print(Counter.count);
    }
}
```

---

### 11번 · SQL · 중

다음 조건에서 `LEFT JOIN` 결과 행 수를 쓰시오.

A 테이블:

| id |
|---:|
| 1 |
| 2 |
| 3 |

B 테이블:

| id |
|---:|
| 1 |
| 1 |
| 3 |

```sql
SELECT *
FROM A
LEFT JOIN B ON A.id = B.id;
```

---

### 12번 · 소프트웨어 공학 · 하

상향식 통합 테스트에서 아직 구현되지 않은 상위 모듈을 대신하는 임시 모듈은 무엇인가?

---

### 13번 · Python · 상

다음 코드의 출력 결과를 쓰시오.

```python
def f(a=[]):
    a.append(len(a))
    return a

print(f())
print(f())
```

---

### 14번 · 운영체제 · 중

SJF 스케줄링에서 실행 시간이 짧은 프로세스를 우선 실행하는 이유를 한 문장으로 설명하시오.

---

### 15번 · 디자인 패턴 · 중

객체에 접근하기 위한 대리 객체를 두어 접근 제어, 지연 로딩 등을 수행하는 패턴은 무엇인가?

---

### 16번 · C · 중

다음 코드의 출력 결과를 쓰시오.

```c
#include <stdio.h>

int main() {
    int a[2][2] = {{1, 2}, {3, 4}};
    printf("%d", *(*(a + 1) + 0));
    return 0;
}
```

---

### 17번 · SQL · 중

다음 SQL의 의미를 설명하시오.

```sql
SELECT name
FROM student
WHERE score >= (
    SELECT AVG(score)
    FROM student
);
```

---

### 18번 · UML · 하

시스템의 기능과 외부 액터 간 상호작용을 표현하는 UML 다이어그램은 무엇인가?

---

### 19번 · Python · 중

다음 코드의 출력 결과를 쓰시오.

```python
s = set([1, 1, 2, 3, 3])
print(len(s))
```

---

### 20번 · 네트워크 · 하

TCP와 UDP의 가장 큰 차이를 한 문장으로 설명하시오.

---

## 정답 및 해설

### 1번 정답

```text
[1, 2, 3, 4]
```

`b = a`는 같은 리스트를 가리킨다.  
리스트 `+=`는 기존 리스트를 변경하므로 `a`도 변한다.

---

### 2번 정답

```text
2행
```

`WHERE salary >= 3000` 적용 후:

- A: 3000, 5000 → 평균 4000
- B: 6000 → 평균 6000
- C: 7000 → 평균 7000

`HAVING AVG >= 5000`을 만족하는 B, C만 남는다.

---

### 3번 정답

```text
10
```

포인터를 한 칸씩 이동하며 모든 요소를 재귀적으로 더한다.

---

### 4번 정답

```text
0
```

부모 생성자에서 오버라이딩된 `B.print()`가 호출된다.  
그러나 자식 필드 `value = 10`의 초기화 전이므로 기본값 0이 출력된다.

---

### 5번 정답

```text
부분 함수 종속
```

---

### 6번 정답

```text
[2, 6, 10]
```

홀수만 선택해 2배한다.

---

### 7번 정답

```text
10.0.0.95
```

`/27`의 블록 크기는 32다.  
70은 64~95 범위에 속한다.

---

### 8번 정답

```text
SQL Injection
```

---

### 9번 정답

```text
10
```

`5 << 1`은 5를 왼쪽으로 한 비트 이동하므로 10이다.

---

### 10번 정답

```text
3
```

`static` 변수는 모든 객체가 공유한다.

---

### 11번 정답

```text
4행
```

A의 id 1은 B의 두 행과 매칭되어 2행, id 2는 매칭 없음으로 1행, id 3은 1행이다.

---

### 12번 정답

```text
드라이버
```

---

### 13번 정답

```text
[0]
[0, 1]
```

기본 매개변수 리스트가 호출 간 재사용된다.

---

### 14번 정답

```text
평균 대기 시간을 줄이기 위해 실행 시간이 짧은 프로세스를 우선한다.
```

---

### 15번 정답

```text
Proxy 패턴
```

---

### 16번 정답

```text
3
```

`a + 1`은 두 번째 행, `+ 0`은 첫 번째 열을 가리킨다.

---

### 17번 정답

```text
전체 학생 평균 점수 이상인 학생의 이름을 조회한다.
```

---

### 18번 정답

```text
유스케이스 다이어그램
```

---

### 19번 정답

```text
3
```

집합은 중복을 제거한다.

---

### 20번 정답

```text
TCP는 연결형·신뢰성 중심이고, UDP는 비연결형·낮은 오버헤드 중심이다.
```

---

# 제3회 예상 모의고사

## 문제편

### 1번 · Python · 중

다음 코드의 출력 결과를 쓰시오.

```python
text = "information"
print(text[1:8:2])
```

---

### 2번 · C · 상

다음 코드의 출력 결과를 쓰시오.

```c
#include <stdio.h>

int* next(int *p) {
    return p + 1;
}

int main() {
    int a[] = {5, 10, 15};
    int *(*fn)(int*) = next;
    printf("%x", *fn(a));
    return 0;
}
```

---

### 3번 · SQL · 중

다음 SQL 결과를 쓰시오.

| id | score |
|---:|---:|
| 1 | 10 |
| 2 | NULL |
| 3 | 10 |
| 4 | 20 |

```sql
SELECT
    COUNT(*),
    COUNT(score),
    COUNT(DISTINCT score)
FROM T;
```

---

### 4번 · Java · 중

다음 코드의 출력 결과를 쓰시오.

```java
class A {
    int value = 1;

    void print() {
        System.out.print("A");
    }
}

class B extends A {
    int value = 2;

    @Override
    void print() {
        System.out.print("B");
    }
}

public class Main {
    public static void main(String[] args) {
        A a = new B();
        System.out.print(a.value);
        a.print();
    }
}
```

---

### 5번 · DB · 중

제3정규형에서 제거해야 하는 함수 종속은 무엇인가?

---

### 6번 · Python · 상

다음 코드의 출력 결과를 쓰시오.

```python
a = [[0] * 2] * 3
a[0][1] = 9
print(a)
```

---

### 7번 · 네트워크 · 중

`172.16.5.200/28`의 네트워크 주소와 브로드캐스트 주소를 각각 쓰시오.

---

### 8번 · 보안 · 중

인증된 사용자가 의도하지 않은 요청을 수행하도록 유도하는 공격은 무엇인가?

---

### 9번 · C · 중

다음 코드의 출력 결과를 쓰시오.

```c
#include <stdio.h>

int main() {
    int x = 12;
    printf("%d", x & 5);
    return 0;
}
```

---

### 10번 · Java · 중

다음 코드의 출력 결과를 쓰시오.

```java
public class Main {
    public static void main(String[] args) {
        try {
            System.out.print("A");
            int x = 10 / 0;
            System.out.print("B");
        } catch (ArithmeticException e) {
            System.out.print("C");
        } finally {
            System.out.print("D");
        }
    }
}
```

---

### 11번 · SQL · 상

다음 SQL의 결과 행 수를 쓰시오.

EMP 테이블:

| dept | salary |
|---|---:|
| A | 3000 |
| A | 5000 |
| A | 7000 |
| B | 4000 |
| B | 6000 |
| C | 8000 |

```sql
SELECT dept
FROM EMP
GROUP BY dept
HAVING AVG(salary) > (
    SELECT AVG(salary)
    FROM EMP
);
```

---

### 12번 · 테스트 · 중

각 조건식의 참과 거짓을 한 번 이상 수행하도록 하는 테스트 커버리지는 무엇인가?

---

### 13번 · Python · 중

다음 코드의 출력 결과를 쓰시오.

```python
nums = [1, 2, 3, 4]
g = (x * x for x in nums if x % 2 == 0)
print(sum(g))
```

---

### 14번 · 운영체제 · 중

다음 페이지 참조 문자열을 FIFO 방식, 프레임 3개로 처리할 때 페이지 부재 횟수를 구하시오.

```text
1, 2, 3, 1, 4, 2, 5
```

---

### 15번 · 디자인 패턴 · 중

객체의 상태가 변경되면 의존 객체들에게 자동으로 알림을 보내는 패턴은 무엇인가?

---

### 16번 · C · 중

다음 코드의 출력 결과를 쓰시오.

```c
#include <stdio.h>

int f(int n) {
    if (n <= 1) return 1;
    return n * f(n - 1);
}

int main() {
    printf("%d", f(4));
    return 0;
}
```

---

### 17번 · SQL · 하

외래키 제약조건을 선언할 때 사용하는 두 키워드를 쓰시오.

---

### 18번 · UML · 중

시스템의 물리적 배치 환경과 노드 간 연결을 표현하는 다이어그램은 무엇인가?

---

### 19번 · Python · 중

다음 코드의 출력 결과를 쓰시오.

```python
x = 0 or 5
y = 3 and 7
print(x + y)
```

---

### 20번 · 네트워크 · 중

RIP, OSPF, BGP를 각각 다음 기준으로 분류하시오.

- 거리 벡터
- 링크 상태
- AS 간 라우팅

---

## 정답 및 해설

### 1번 정답

```text
nomt
```

인덱스 1부터 7까지 두 칸씩 선택한다.

---

### 2번 정답

```text
a
```

`fn(a)`는 두 번째 요소의 주소를 반환하고 값은 10이다.  
`%x`로 출력하면 16진수 `a`다.

---

### 3번 정답

```text
4, 3, 2
```

- 전체 행: 4
- score가 NULL이 아닌 행: 3
- 중복 제거한 score 값: 10, 20 → 2

---

### 4번 정답

```text
1B
```

필드 접근은 참조 타입 A 기준이므로 1, 메서드는 실제 객체 B 기준이므로 B가 출력된다.

---

### 5번 정답

```text
이행 함수 종속
```

---

### 6번 정답

```text
[[0, 9], [0, 9], [0, 9]]
```

`[[0] * 2] * 3`은 같은 내부 리스트를 세 번 참조한다.

---

### 7번 정답

```text
네트워크 주소: 172.16.5.192
브로드캐스트 주소: 172.16.5.207
```

`/28`의 블록 크기는 16이다.

---

### 8번 정답

```text
CSRF
```

---

### 9번 정답

```text
4
```

12는 `1100`, 5는 `0101`, AND 결과는 `0100`으로 4다.

---

### 10번 정답

```text
ACD
```

`B`는 예외 발생으로 실행되지 않는다.  
`catch` 후 `finally`가 실행된다.

---

### 11번 정답

```text
1행
```

전체 평균은 5500이다.

- A 평균: 5000
- B 평균: 5000
- C 평균: 8000

C만 조건을 만족한다.

---

### 12번 정답

```text
조건 커버리지
```

---

### 13번 정답

```text
20
```

짝수 2, 4의 제곱 합은 4 + 16 = 20이다.

---

### 14번 정답

```text
5회
```

추적:

- 1 부재
- 2 부재
- 3 부재
- 1 적중
- 4 부재, 가장 먼저 들어온 1 제거
- 2 적중
- 5 부재, 가장 먼저 들어온 2 제거

따라서 총 페이지 부재 횟수는 5회다.

---

### 15번 정답

```text
Observer 패턴
```

---

### 16번 정답

```text
24
```

`4 × 3 × 2 × 1 = 24`.

---

### 17번 정답

```text
FOREIGN KEY, REFERENCES
```

---

### 18번 정답

```text
배치 다이어그램
```

---

### 19번 정답

```text
12
```

`0 or 5`는 5, `3 and 7`은 7이다.

---

### 20번 정답

```text
RIP: 거리 벡터
OSPF: 링크 상태
BGP: AS 간 라우팅
```

---

# 활용 방법

## 1회차 풀이

- 제한 시간 없이 풀이
- 모르는 문법을 표시
- 정답보다 풀이 흐름 이해

## 2회차 풀이

- 회차당 90분 제한
- 문제당 최대 5분
- C 고난도는 마지막에 풀이

## 3회차 풀이

- 틀린 문제만 다시 풀이
- 오답을 다음 기준으로 분류

```text
자료형 착각
참조 공유 놓침
포인터 위치 착각
오버로딩·오버라이딩 혼동
SQL 처리 순서 혼동
출력 형식 누락
암기 부족
```

## 권장 AI 추가 요청

```text
이 모의고사에서 내가 틀린 문제의 개념만 골라서
유사 문제 3개, 변형 문제 2개, 함정 문제 1개씩 만들어줘.
각 문제는 먼저 문제만 보여주고,
내가 답한 뒤에 정답과 해설을 제공해줘.
```
