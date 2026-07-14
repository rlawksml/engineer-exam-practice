import { SqlLabData } from "./types";

export const sqlLabData: SqlLabData = {
  tables: [
    {
      name: "DEPARTMENT",
      description: "부서 정보 테이블입니다. STUDENT.dept_id가 이 테이블의 dept_id를 참조합니다.",
      columns: ["dept_id", "dept_name", "manager"],
      rows: [
        [10, "DB", "Kim"],
        [20, "NW", "Lee"],
        [30, "SEC", "Park"],
        [40, "AI", "Choi"],
      ],
    },
    {
      name: "STUDENT",
      description: "학생의 부서, 점수, 합격 여부를 담은 실습 기준 테이블입니다.",
      columns: ["student_id", "name", "dept_id", "score", "pass"],
      rows: [
        [1, "Min", 10, 92, "Y"],
        [2, "Jin", 10, 75, "Y"],
        [3, "Ara", 20, 81, "Y"],
        [4, "Noel", 20, 55, "N"],
        [5, "Sia", 30, 68, "Y"],
        [6, "Tae", null, 77, "Y"],
      ],
    },
  ],
  examples: [
    {
      id: "inner-join",
      title: "두 테이블 INNER JOIN",
      category: "JOIN",
      goal: "부서 id가 일치하는 학생과 부서명만 조회합니다.",
      description:
        "STUDENT.dept_id와 DEPARTMENT.dept_id가 같은 행만 붙입니다. dept_id가 NULL인 Tae와 학생이 없는 AI 부서는 결과에서 빠집니다.",
      sql: `SELECT s.name, d.dept_name, s.score
FROM STUDENT s
INNER JOIN DEPARTMENT d
  ON s.dept_id = d.dept_id
ORDER BY s.student_id ASC;`,
      resultTitle: "INNER JOIN 결과",
      resultColumns: ["name", "dept_name", "score"],
      resultRows: [
        ["Min", "DB", 92],
        ["Jin", "DB", 75],
        ["Ara", "NW", 81],
        ["Noel", "NW", 55],
        ["Sia", "SEC", 68],
      ],
      steps: [
        "STUDENT를 기준으로 각 학생의 dept_id를 확인합니다.",
        "DEPARTMENT에서 같은 dept_id를 가진 행을 찾습니다.",
        "일치하는 부서가 없는 Tae는 INNER JOIN 결과에서 제외됩니다.",
        "학생이 없는 AI 부서도 STUDENT와 매칭되지 않으므로 제외됩니다.",
      ],
      examPoint: "INNER JOIN은 양쪽 테이블에서 조인 조건이 모두 성립하는 행만 남깁니다.",
      trap: "NULL dept_id는 일반 등호 비교로 매칭되지 않습니다.",
    },
    {
      id: "left-join",
      title: "LEFT JOIN으로 미배정 학생까지 보기",
      category: "JOIN",
      goal: "학생은 모두 남기고, 부서가 있으면 부서명을 붙입니다.",
      description:
        "LEFT JOIN은 왼쪽 테이블인 STUDENT의 모든 행을 보존합니다. 부서가 없는 학생은 오른쪽 테이블 컬럼이 NULL로 표시됩니다.",
      sql: `SELECT s.name, s.dept_id, d.dept_name
FROM STUDENT s
LEFT JOIN DEPARTMENT d
  ON s.dept_id = d.dept_id
ORDER BY s.student_id ASC;`,
      resultTitle: "LEFT JOIN 결과",
      resultColumns: ["name", "dept_id", "dept_name"],
      resultRows: [
        ["Min", 10, "DB"],
        ["Jin", 10, "DB"],
        ["Ara", 20, "NW"],
        ["Noel", 20, "NW"],
        ["Sia", 30, "SEC"],
        ["Tae", null, null],
      ],
      steps: [
        "왼쪽 STUDENT의 6행은 모두 결과 후보로 남깁니다.",
        "dept_id가 10, 20, 30인 학생은 DEPARTMENT와 매칭됩니다.",
        "Tae는 dept_id가 NULL이므로 부서명이 NULL로 표시됩니다.",
      ],
      examPoint: "LEFT JOIN은 왼쪽 테이블 행 보존 여부를 묻는 문제로 자주 나옵니다.",
      trap: "LEFT JOIN이어도 오른쪽 테이블의 모든 행이 남는 것은 아닙니다.",
    },
    {
      id: "aggregate-order",
      title: "WHERE, GROUP BY, HAVING, ORDER BY",
      category: "집계/정렬",
      goal: "합격 학생만 부서별로 묶고, 인원 조건과 정렬 조건을 적용합니다.",
      description:
        "WHERE는 그룹화 전 행 필터, HAVING은 그룹화 후 그룹 필터입니다. ORDER BY는 최종 결과를 정렬합니다.",
      sql: `SELECT d.dept_name, COUNT(*) AS pass_count, AVG(s.score) AS avg_score
FROM STUDENT s
JOIN DEPARTMENT d
  ON s.dept_id = d.dept_id
WHERE s.pass = 'Y'
GROUP BY d.dept_name
HAVING COUNT(*) >= 1
ORDER BY avg_score DESC, d.dept_name ASC;`,
      resultTitle: "집계/정렬 결과",
      resultColumns: ["dept_name", "pass_count", "avg_score"],
      resultRows: [
        ["DB", 2, 83.5],
        ["NW", 1, 81],
        ["SEC", 1, 68],
      ],
      steps: [
        "JOIN으로 학생과 부서명을 먼저 연결합니다. dept_id가 NULL인 Tae는 JOIN에서 제외됩니다.",
        "WHERE s.pass = 'Y'로 합격 학생만 남깁니다.",
        "GROUP BY d.dept_name으로 DB, NW, SEC 그룹을 만듭니다.",
        "COUNT(*)와 AVG(score)를 그룹별로 계산합니다.",
        "HAVING COUNT(*) >= 1로 합격자가 1명 이상인 그룹만 남깁니다.",
        "ORDER BY avg_score DESC로 평균 점수 높은 그룹부터 정렬합니다.",
      ],
      examPoint: "논리 처리 순서는 FROM/JOIN -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY로 추적합니다.",
      trap: "집계 조건을 WHERE에 쓰는지 HAVING에 쓰는지 구분해야 합니다.",
    },
    {
      id: "dml-tcl",
      title: "DML과 TCL 흐름",
      category: "DML/TCL",
      goal: "INSERT, UPDATE, DELETE가 데이터를 바꾸고 COMMIT/ROLLBACK/SAVEPOINT가 결과를 제어하는 흐름을 봅니다.",
      description:
        "DML은 테이블 안의 행을 조작합니다. TCL은 아직 확정하지 않은 DML 결과를 트랜잭션 단위로 확정하거나 되돌립니다.",
      sql: `INSERT INTO STUDENT (student_id, name, dept_id, score, pass)
VALUES (7, 'Yul', 30, 88, 'Y');

SAVEPOINT sp_after_insert;

UPDATE STUDENT
SET score = 95
WHERE student_id = 7;

DELETE FROM STUDENT
WHERE student_id = 4;

ROLLBACK TO sp_after_insert;
COMMIT;`,
      resultTitle: "COMMIT 후 반영 상태",
      resultColumns: ["student_id", "name", "dept_id", "score", "pass", "상태"],
      resultRows: [
        [7, "Yul", 30, 88, "Y", "INSERT 확정"],
        [4, "Noel", 20, 55, "N", "DELETE 취소로 유지"],
      ],
      steps: [
        "INSERT로 Yul 행을 추가합니다.",
        "SAVEPOINT sp_after_insert로 중간 지점을 만듭니다.",
        "UPDATE와 DELETE는 savepoint 이후 작업입니다.",
        "ROLLBACK TO sp_after_insert로 UPDATE와 DELETE만 되돌립니다.",
        "COMMIT으로 INSERT 결과를 확정합니다.",
      ],
      examPoint: "ROLLBACK TO savepoint는 지정한 지점 이후의 변경을 되돌립니다.",
      trap: "ROLLBACK TO가 트랜잭션 전체를 취소한다고 생각하면 틀립니다.",
    },
    {
      id: "ddl-flow",
      title: "DDL로 구조 만들고 바꾸기",
      category: "DDL",
      goal: "CREATE, ALTER, RENAME, TRUNCATE, DROP이 테이블 구조와 객체에 미치는 영향을 구분합니다.",
      description:
        "DDL은 테이블 같은 데이터 구조를 정의합니다. 데이터가 영향을 받더라도 분류 기준은 구조와 객체 정의입니다.",
      sql: `CREATE TABLE ENROLLMENT (
  enroll_id INT,
  student_id INT,
  course_name VARCHAR(30)
);

ALTER TABLE ENROLLMENT ADD grade CHAR(1);
RENAME TABLE ENROLLMENT TO COURSE_ENROLLMENT;
TRUNCATE TABLE COURSE_ENROLLMENT;
DROP TABLE COURSE_ENROLLMENT;`,
      resultTitle: "DDL 실행 후 객체 상태",
      resultColumns: ["명령어", "분류", "결과"],
      resultRows: [
        ["CREATE", "DDL", "ENROLLMENT 테이블 생성"],
        ["ALTER", "DDL", "grade 컬럼 추가"],
        ["RENAME", "DDL", "COURSE_ENROLLMENT로 이름 변경"],
        ["TRUNCATE", "DDL", "테이블 구조는 남기고 전체 행 삭제"],
        ["DROP", "DDL", "테이블 객체 자체 삭제"],
      ],
      steps: [
        "CREATE는 새 테이블 구조를 만듭니다.",
        "ALTER는 기존 테이블 구조를 바꿉니다.",
        "RENAME은 객체 이름을 바꿉니다.",
        "TRUNCATE는 행을 모두 비우지만 테이블 구조는 남깁니다.",
        "DROP은 테이블 객체 자체를 제거합니다.",
      ],
      examPoint: "DDL은 생성, 변경, 삭제, 이름 변경처럼 데이터 구조와 관련된 명령어입니다.",
      trap: "TRUNCATE와 DELETE는 둘 다 행이 사라질 수 있지만 TRUNCATE는 DDL, DELETE는 DML입니다.",
    },
    {
      id: "foreign-key-references",
      title: "REFERENCES로 외래키 설정하기",
      category: "DDL",
      goal: "STUDENT.dept_id가 DEPARTMENT.dept_id만 참조하도록 참조 무결성을 설정합니다.",
      description:
        "외래키는 자식 테이블의 컬럼 값이 부모 테이블의 기본키 또는 후보키에 존재해야 한다는 규칙입니다. SQL에서는 FOREIGN KEY와 REFERENCES를 함께 사용합니다.",
      sql: `CREATE TABLE DEPARTMENT (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(20) NOT NULL
);

CREATE TABLE STUDENT (
  student_id INT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  dept_id INT,
  score INT,
  CONSTRAINT fk_student_department
    FOREIGN KEY (dept_id)
    REFERENCES DEPARTMENT(dept_id)
);

-- 이미 만들어진 테이블에 나중에 외래키를 추가하는 방식
ALTER TABLE STUDENT
ADD CONSTRAINT fk_student_department
FOREIGN KEY (dept_id)
REFERENCES DEPARTMENT(dept_id);`,
      resultTitle: "참조 무결성 적용 예",
      resultColumns: ["SQL", "결과"],
      resultRows: [
        [
          "INSERT INTO STUDENT VALUES (8, 'Rio', 10, 82);",
          "DEPARTMENT.dept_id=10이 존재하므로 성공",
        ],
        [
          "INSERT INTO STUDENT VALUES (9, 'Neo', 99, 77);",
          "DEPARTMENT.dept_id=99가 없으므로 실패",
        ],
        [
          "DELETE FROM DEPARTMENT WHERE dept_id = 10;",
          "STUDENT가 dept_id=10을 참조 중이면 제한될 수 있음",
        ],
      ],
      steps: [
        "부모 테이블 DEPARTMENT의 dept_id를 PRIMARY KEY로 둡니다.",
        "자식 테이블 STUDENT의 dept_id를 외래키로 지정합니다.",
        "FOREIGN KEY (dept_id)는 자식 테이블의 참조 컬럼을 뜻합니다.",
        "REFERENCES DEPARTMENT(dept_id)는 부모 테이블과 부모 컬럼을 뜻합니다.",
        "자식 행을 INSERT할 때 dept_id 값은 부모 테이블에 존재해야 합니다.",
        "부모 행을 DELETE할 때 그 값을 참조하는 자식 행이 있으면 삭제가 제한될 수 있습니다.",
      ],
      examPoint:
        "외래키 문법은 FOREIGN KEY (자식컬럼) REFERENCES 부모테이블(부모컬럼) 순서로 외웁니다.",
      trap:
        "REFERENCES 뒤에는 참조 대상인 부모 테이블과 컬럼이 옵니다. STUDENT가 DEPARTMENT를 참조하면 부모는 DEPARTMENT입니다.",
    },
    {
      id: "dcl-flow",
      title: "DCL로 권한 주고 회수하기",
      category: "DCL",
      goal: "GRANT와 REVOKE가 테이블 데이터가 아니라 사용자 권한을 바꾸는 명령임을 확인합니다.",
      description:
        "DCL은 데이터베이스 객체 접근 권한을 제어합니다. 테이블 행이나 구조를 직접 바꾸지 않습니다.",
      sql: `GRANT SELECT, INSERT ON STUDENT TO trainee;
REVOKE INSERT ON STUDENT FROM trainee;`,
      resultTitle: "권한 상태",
      resultColumns: ["사용자", "객체", "가능한 작업"],
      resultRows: [["trainee", "STUDENT", "SELECT만 가능, INSERT는 회수됨"]],
      steps: [
        "GRANT SELECT, INSERT로 trainee에게 조회와 삽입 권한을 줍니다.",
        "REVOKE INSERT로 삽입 권한만 회수합니다.",
        "최종적으로 trainee는 STUDENT를 조회할 수 있지만 삽입할 수 없습니다.",
      ],
      examPoint: "권한 부여와 회수는 DCL입니다.",
      trap: "GRANT/REVOKE는 데이터를 조회하거나 수정하는 명령이 아니라 권한 상태를 바꿉니다.",
    },
  ],
};

export const getTotalSqlLabExamples = () => sqlLabData.examples.length;
