# 경력기술서 (Resume)

최준혁 백엔드 개발자의 1-페이지 경력기술서 웹사이트입니다. 모든 이력 내용은
`app/data/resume.ts` 한 곳에서 관리하며, 섹션 네비게이션과 인쇄(PDF 저장) 기능을 제공합니다.

## 기술 스택

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4**
- **lucide-react** (아이콘)

## 빠른 시작

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 으로 접속해 확인합니다.

## 스크립트

| 명령 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint` | ESLint 검사 |

## 내용 수정

이력 데이터는 전부 [`app/data/resume.ts`](app/data/resume.ts) 에 모여 있습니다.
프로필 · 소개 · 경력 · 프로젝트 · 스킬 · 학력 · 교육 항목을 이 파일에서 고치면 화면에 바로
반영됩니다. 각 export에는 타입(`Profile`, `Experience`, `Project` 등)이 지정돼 있어
필드를 잘못 입력하면 컴파일 단계에서 잡힙니다. 프로필 사진은 `public/profile.jpg` 를
교체하면 됩니다.

## 프로젝트 구조

```
app/
├── data/resume.ts        # 모든 이력 데이터 (단일 소스)
├── components/           # 섹션 컴포넌트 (Profile, Experience, Project, Skill, ...)
├── Navigation/           # 우측/모바일 섹션 네비게이션
├── common/Footer.tsx     # 푸터
├── globals.css           # 전역 스타일 · 인쇄 스타일
├── layout.tsx            # 루트 레이아웃 · 메타데이터
└── page.tsx              # 페이지 조립
```

## 인쇄 / PDF

우측 하단 프린터 버튼 또는 브라우저 인쇄(Ctrl/Cmd + P)로 PDF 저장이 가능합니다.
인쇄 시 네비게이션 · 버튼 · 푸터는 자동으로 숨겨집니다 (`app/globals.css` 의 `@media print`).
