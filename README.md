# 정보처리기사 실기 대비 앱

정보처리기사 실기 시험을 어디서든 반복 학습하기 위한 웹 앱입니다.

기출 복원 문제 풀이뿐 아니라, 전략 문서 기반의 개념 카드 학습을 함께 제공해 짧은 시간에도 코딩 문제와 이론 단답을 번갈아 복습할 수 있게 합니다.

## 주요 기능

- 2020~2025년 정보처리기사 실기 기출 복원 문제 풀이
- 2026년 정보처리기사 실기 예상 모의고사 3회분
- C / Java / Python / SQL / 이론 카테고리 필터
- 정답 입력, 해설 확인, JavaScript 비교 예시
- 문제별 난이도, 핵심 개념, 자주 틀리는 포인트 표시
- 기출과 연결된 유사 실전 문제 확인
- 회차별 진행률과 정답률 저장
- 전략 문서 기반 개념 카드 학습
- 개념 카드별 `알고 있음`, `헷갈림`, `모름` 상태 저장
- 섹션별 진행률 확인

## 개념 카드 섹션

- Python 함정
- C 함정
- Java 함정
- SQL/DB
- 네트워크/보안
- 소프트웨어 공학

## 기준 문서

- `information_processing_engineer_practical_exam_strategy.md`
- `exam/2026_second_exam_prediction_and_question_generation_guide.md`
- `exam/2026_information_processing_engineer_mock_exam_3sets.md`

이 문서는 최근 복원 문제 흐름, 언어별 대표 함정, 예상문제 생성 비율, 해설 작성 형식, 오답노트 작성 기준을 정리합니다.

## 개발 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

## 검증

```bash
npm run test
npm run lint
npm run build
npm audit
```

## 배포

Vercel 프로젝트 `test`에 배포됩니다.

Production URL:

- https://testforgenie.vercel.app
