import { ProgrammingLabData } from "./types";

export const programmingLabData: ProgrammingLabData = {
  sections: [
    {
      id: "python",
      language: "Python",
      title: "Python 자료형과 진법 변환",
      description:
        "리스트, 튜플, 딕셔너리, 집합처럼 출력 추적에 자주 섞이는 자료형과 2진수/16진수 변환을 함께 봅니다.",
      examples: [
        {
          id: "python-types",
          language: "Python",
          title: "자료형 이름부터 적고 추적하기",
          examSignal: "type, list, tuple, dict, set이 한 코드에 섞일 때",
          code: `items = [1, "2", (3, 4), {"score": 95}, {6, 7}]

print(type(items[0]).__name__)
print(type(items[2]).__name__)
print(type(items[3]).__name__)
print(type(items[4]).__name__)`,
          output: `int
tuple
dict
set`,
          steps: [
            "대괄호 []는 list, 소괄호로 묶인 쉼표 값은 tuple입니다.",
            "중괄호 안에 key: value가 있으면 dict, 값만 있으면 set입니다.",
            "출력 추적 문제에서는 값보다 자료형을 먼저 표시해두면 중첩 실수를 줄일 수 있습니다.",
          ],
          examPoint:
            "Python 문제는 연산 전에 현재 값의 자료형을 적어두면 append, 인덱싱, key 접근 함정을 피하기 쉽습니다.",
          trap: "{}는 빈 dict이고, 빈 set은 set()으로 만듭니다.",
          relatedConcepts: ["list", "tuple", "dict", "set", "type"],
        },
        {
          id: "python-hex-conversion",
          language: "Python",
          title: "int와 hex로 진법 변환하기",
          examSignal: "16진수 A, 2진수 1010, hex 출력이 보일 때",
          code: `a = int("A", 16)
b = int("1010", 2)

print(a, b)
print(hex(a + b))`,
          output: `10 10
0x14`,
          steps: [
            'int("A", 16)은 16진수 A를 10진수 10으로 바꿉니다.',
            'int("1010", 2)는 2진수 1010을 10진수 10으로 바꿉니다.',
            "hex(20)은 접두사 0x가 붙은 16진수 문자열 0x14를 반환합니다.",
          ],
          examPoint:
            "진법 변환 문제는 계산은 10진수로 하고, 마지막 출력 형식만 hex/bin/oct인지 확인합니다.",
          trap: "hex()의 반환값은 정수가 아니라 문자열이며, 기본 출력은 소문자입니다.",
          relatedConcepts: ["int(value, base)", "hex", "2진수", "16진수"],
        },
        {
          id: "python-shallow-slice",
          language: "Python",
          title: "슬라이싱 복사와 내부 리스트 공유",
          examSignal: "a[:], 중첩 리스트, 한쪽 수정 후 양쪽 출력",
          code: `a = [[1, 2], [3, 4]]
b = a[:]
b[0][1] = 9

print(a)
print(b)`,
          output: `[[1, 9], [3, 4]]
[[1, 9], [3, 4]]`,
          steps: [
            "a[:]는 바깥 리스트만 새로 만드는 얕은 복사입니다.",
            "b[0]과 a[0]은 같은 내부 리스트를 가리킵니다.",
            "b[0][1]을 바꾸면 공유 중인 내부 리스트가 바뀌므로 a에도 반영됩니다.",
          ],
          examPoint:
            "2차원 리스트는 바깥 리스트와 내부 리스트의 공유 여부를 따로 추적합니다.",
          trap: "a[:]를 깊은 복사로 착각하면 출력 전체를 반대로 적게 됩니다.",
          relatedConcepts: ["얕은 복사", "슬라이싱", "중첩 리스트"],
        },
      ],
    },
    {
      id: "java",
      language: "Java",
      title: "Java 자료형과 참조 비교",
      description:
        "기본형/참조형, char 산술, String 비교처럼 Java 출력 문제에서 자주 섞이는 규칙을 정리합니다.",
      examples: [
        {
          id: "java-types-casting",
          language: "Java",
          title: "기본형 산술 변환과 char 코드값",
          examSignal: "int, double, char가 함께 계산될 때",
          code: `int a = 10;
double b = 3.5;
char c = 'A';

System.out.println(a + b);
System.out.println(c + 1);`,
          output: `13.5
66`,
          steps: [
            "int와 double을 더하면 더 넓은 double로 계산됩니다.",
            "char는 산술 연산에서 문자 코드값으로 계산될 수 있습니다.",
            "'A'의 코드값은 65이므로 'A' + 1은 66입니다.",
          ],
          examPoint:
            "Java 자료형 문제는 기본형인지 참조형인지, 산술 변환이 일어나는지 먼저 표시합니다.",
          trap: "'A' + 1을 문자열 A1로 착각하지 않습니다. 문자열 결합은 String이 섞일 때 발생합니다.",
          relatedConcepts: ["primitive type", "char", "numeric promotion"],
        },
        {
          id: "java-string-equals",
          language: "Java",
          title: "String의 ==와 equals 구분",
          examSignal: "new String, ==, equals가 함께 나올 때",
          code: `String a = new String("SQL");
String b = new String("SQL");

System.out.println(a == b);
System.out.println(a.equals(b));`,
          output: `false
true`,
          steps: [
            "new String은 서로 다른 객체를 만듭니다.",
            "==는 두 참조가 같은 객체를 가리키는지 비교합니다.",
            "equals는 문자열 내용을 비교하므로 SQL과 SQL은 true입니다.",
          ],
          examPoint:
            "String 비교 문제는 참조 동일성(==)과 내용 동등성(equals)을 분리합니다.",
          trap: "문자열 값이 같아 보여도 new로 만든 객체끼리 ==는 false일 수 있습니다.",
          relatedConcepts: ["String", "==", "equals", "reference type"],
        },
        {
          id: "java-reference-binding",
          language: "Java",
          title: "참조 타입과 실제 객체 타입",
          examSignal: "Parent p = new Child(), field, method 출력",
          code: `class Parent {
  int value = 1;
  void print() { System.out.println("P"); }
}

class Child extends Parent {
  int value = 2;
  void print() { System.out.println("C"); }
}

Parent p = new Child();
System.out.println(p.value);
p.print();`,
          output: `1
C`,
          steps: [
            "p의 참조 타입은 Parent이고 실제 객체 타입은 Child입니다.",
            "필드 접근은 참조 타입 기준으로 Parent의 value를 읽습니다.",
            "오버라이딩된 메서드는 실제 객체 타입 기준으로 Child의 print가 실행됩니다.",
          ],
          examPoint:
            "필드와 메서드 바인딩 기준이 다르므로 p.value와 p.print()를 따로 판단합니다.",
          trap: "필드까지 오버라이딩처럼 실제 객체 기준으로 읽는 실수가 자주 나옵니다.",
          relatedConcepts: ["upcasting", "field hiding", "dynamic dispatch"],
        },
      ],
    },
    {
      id: "c",
      language: "C",
      title: "C 포인터, 비트 연산, 구조체",
      description:
        "&와 *의 문맥, 이중 포인터, 함수 포인터, 구조체 포인터를 코드 출력 중심으로 추적합니다.",
      examples: [
        {
          id: "c-bit-operators",
          language: "C",
          title: "^와 & 비트 연산",
          examSignal: "^, &, %x가 한 줄에 나올 때",
          code: `int a = 12;  // 1100
int b = 10;  // 1010

printf("%d %d %x", a & b, a ^ b, a ^ b);`,
          output: `8 6 6`,
          steps: [
            "12는 1100, 10은 1010입니다.",
            "&는 둘 다 1인 비트만 1이므로 1000, 즉 8입니다.",
            "^는 서로 다른 비트만 1이므로 0110, 즉 6입니다.",
            "%x는 정수를 16진수 소문자로 출력합니다.",
          ],
          examPoint:
            "C에서 ^는 거듭제곱이 아니라 XOR입니다. 작은 수는 2진수 네 자리로 바꿔 계산합니다.",
          trap: "&는 주소 연산자이기도 하지만, 두 피연산자가 정수이면 비트 AND입니다.",
          relatedConcepts: ["bit AND", "XOR", "printf %x"],
        },
        {
          id: "c-double-pointer",
          language: "C",
          title: "포인터와 이중 포인터",
          examSignal: "int *p, int **pp, **pp가 보일 때",
          code: `int x = 10;
int *p = &x;
int **pp = &p;

**pp += 5;
printf("%d", x);`,
          output: `15`,
          steps: [
            "p는 x의 주소를 저장합니다.",
            "pp는 p의 주소를 저장하므로 *pp는 p입니다.",
            "**pp는 p가 가리키는 x이므로 x에 5를 더합니다.",
          ],
          examPoint:
            "별표 개수만큼 한 단계씩 따라가며, 마지막에 실제 값이 바뀌는 위치를 확인합니다.",
          trap: "*pp와 **pp를 같은 값으로 보면 주소와 값을 섞게 됩니다.",
          relatedConcepts: ["포인터", "이중 포인터", "역참조"],
        },
        {
          id: "c-function-pointer",
          language: "C",
          title: "함수 포인터 선언과 호출",
          examSignal: "int (*fp)(int, int) 형태가 보일 때",
          code: `int add(int a, int b) {
  return a + b;
}

int (*fp)(int, int) = add;
printf("%d", fp(2, 3));`,
          output: `5`,
          steps: [
            "fp는 int 두 개를 받아 int를 반환하는 함수를 가리키는 포인터입니다.",
            "add의 함수 주소를 fp에 저장합니다.",
            "fp(2, 3)은 add(2, 3)과 같은 호출로 계산됩니다.",
          ],
          examPoint:
            "함수 포인터는 괄호 위치가 핵심입니다. (*fp)가 함수 이름처럼 호출됩니다.",
          trap: "int *fp(int, int)는 함수 포인터가 아니라 int 포인터를 반환하는 함수 선언입니다.",
          relatedConcepts: ["함수 포인터", "선언 해석", "호출"],
        },
        {
          id: "c-struct-pointer",
          language: "C",
          title: "구조체 포인터와 ->",
          examSignal: "struct, 포인터 변수, ->, (*p).member가 함께 나올 때",
          code: `struct Node {
  int value;
};

struct Node n = {7};
struct Node *p = &n;

p->value += 3;
printf("%d", (*p).value);`,
          output: `10`,
          steps: [
            "p는 구조체 변수 n의 주소를 저장합니다.",
            "p->value는 (*p).value와 같은 표현입니다.",
            "value에 3을 더했으므로 n.value는 10이 됩니다.",
          ],
          examPoint:
            "일반 구조체 변수는 점(.), 구조체 포인터는 화살표(->)로 멤버에 접근합니다.",
          trap: "->를 새 연산처럼 외우기보다 (*p).member의 줄임말로 풀면 안전합니다.",
          relatedConcepts: ["구조체", "구조체 포인터", "멤버 접근"],
        },
      ],
    },
  ],
};

export const programmingLabExamples = programmingLabData.sections.flatMap(
  (section) => section.examples
);

export const getTotalProgrammingLabExamples = () => programmingLabExamples.length;
