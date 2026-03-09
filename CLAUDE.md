# FrontGuidKit Development Guidelines

## 기술 스택
- TypeScript 5 / Node.js 18+
- Next.js 16.1.6 (App Router) + React 19
- Tailwind CSS v4 + shadcn/ui (radix-nova) + Lucide React
- 정적 TypeScript 객체 기반 데이터 (DB 없음)

## 프로젝트 구조

```text
app/                          # Next.js App Router 페이지
  components/[slug]/page.tsx  # 컴포넌트 상세 동적 라우트
components/
  guide/                      # 가이드 UI 컴포넌트 (wireframe, terms, prompt)
  layout/                     # 레이아웃 컴포넌트 (sidebar, top-bar)
  ui/                         # shadcn/ui 기본 컴포넌트
data/
  categories.ts               # 6개 카테고리 정의
  components.ts               # 33개 컴포넌트 데이터
lib/
  types.ts                    # WireframeData, ComponentData 등 타입 정의
  utils.ts                    # cn() 유틸리티
  clipboard.ts                # 클립보드 헬퍼
specs/                        # 기능별 스펙 문서
```

## 명령어

```bash
npm run dev       # 개발 서버
npm run build     # 프로덕션 빌드
npm run lint      # ESLint
```

## 코드 컨벤션
- TypeScript strict 모드 준수
- shadcn/ui 컴포넌트 적극 활용 (직접 구현 최소화)
- 컴포넌트 데이터는 `data/components.ts`에 정적 객체로 관리
- 와이어프레임 타입: `page-layout`, `overlay`, `inline`, `standalone`
- `isReady=true` 조건: wireframe(non-null), terms(4개), prompt(non-empty)

## 브랜치 히스토리
- `001-frontguidkit-mvp`: MVP — 레이아웃 카테고리 5개 컴포넌트
- `002-extend-all-categories`: 전체 6개 카테고리, 33개 컴포넌트 확장

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->

## Active Technologies
- TypeScript 5 / Node.js 18+ + Next.js 16.1.6, React 19, Tailwind CSS v4, shadcn/ui (radix-nova), Lucide React, next-themes (신규 추가) (003-main-page)
- N/A (정적 TypeScript 객체) (003-main-page)

## Recent Changes
- 003-main-page: Added TypeScript 5 / Node.js 18+ + Next.js 16.1.6, React 19, Tailwind CSS v4, shadcn/ui (radix-nova), Lucide React, next-themes (신규 추가)
