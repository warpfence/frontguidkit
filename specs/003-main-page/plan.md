# Implementation Plan: FrontGuidKit 메인페이지

**Branch**: `003-main-page` | **Date**: 2026-03-09 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/003-main-page/spec.md`

## Summary

FrontGuidKit의 메인 랜딩 페이지를 구현한다. Hero 섹션(제목/부제목/설명), 6개 카테고리별 3열 카드 그리드, Sidebar Home 아이콘, 다크/라이트 모드 전환(next-themes), 3열 Footer, 헤더/폰트 크기 20% 확대를 포함한다. 기존 정적 데이터 모델(`data/categories.ts`, `data/components.ts`)을 활용하며, 새 파일 생성과 기존 파일 수정을 병행한다.

## Technical Context

**Language/Version**: TypeScript 5 / Node.js 18+
**Primary Dependencies**: Next.js 16.1.6, React 19, Tailwind CSS v4, shadcn/ui (radix-nova), Lucide React, next-themes (신규 추가)
**Storage**: N/A (정적 TypeScript 객체)
**Testing**: `npm run build` (SSG 빌드 검증) + `npm run lint` (ESLint)
**Target Platform**: 웹 브라우저 (데스크탑, 태블릿, 모바일)
**Project Type**: web-application (정적 사이트)
**Performance Goals**: LCP 2.5초 이내, CLS 0.1 미만
**Constraints**: 기존 컴포넌트 상세 페이지 레이아웃 유지, 카드 이미지는 placeholder
**Scale/Scope**: 6개 카테고리, 33개 컴포넌트 카드

## Constitution Check

*GATE: Constitution 미설정 (템플릿 상태) — 별도 gate 없이 통과*

## Project Structure

### Documentation (this feature)

```text
specs/003-main-page/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
│   └── ui-contracts.md
└── tasks.md             # Phase 2 output (/speckit.tasks)
```

### Source Code (repository root)

```text
app/
├── layout.tsx              # 수정: ThemeProvider 추가, Footer 통합
├── page.tsx                # 수정: redirect 제거 → 메인페이지 컴포넌트
└── globals.css             # 수정: root font-size 20% 확대

components/
├── home/
│   ├── hero-section.tsx    # 신규: Hero 섹션 (제목/부제목/설명)
│   └── category-grid.tsx   # 신규: 카테고리별 3열 카드 그리드
├── layout/
│   ├── sidebar.tsx         # 수정: Home 아이콘 추가, Collapsible 조건부 상태
│   ├── top-bar.tsx         # 수정: 테마 토글 버튼, 헤더 크기 확대
│   └── footer.tsx          # 신규: 3열 Footer
├── theme-provider.tsx      # 신규: next-themes ThemeProvider 래퍼
└── ui/
    └── card.tsx            # 신규: shadcn/ui Card 컴포넌트 (미설치 시)
```

**Structure Decision**: 기존 Next.js App Router 구조를 유지. 메인페이지 전용 컴포넌트는 `components/home/`에, 테마 프로바이더는 `components/`에 배치. 레이아웃 컴포넌트(Footer)는 기존 `components/layout/`에 추가.

## Complexity Tracking

해당 없음 — Constitution gate 위반 없음.
