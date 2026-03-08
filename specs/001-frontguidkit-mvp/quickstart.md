# Quickstart: FrontGuidKit MVP

**Branch**: `001-frontguidkit-mvp` | **Date**: 2026-03-08

## Prerequisites

- Node.js 18+ (LTS)
- pnpm (package manager — 프로젝트 lockfile 기준)

## Setup

```bash
# 1. 브랜치 체크아웃
git checkout 001-frontguidkit-mvp

# 2. 의존성 설치
pnpm install

# 3. 개발 서버 실행
pnpm dev
```

개발 서버가 `http://localhost:3000`에서 실행됩니다.

## Key Paths

| 경로 | 설명 |
|------|------|
| `app/layout.tsx` | 루트 레이아웃 (상단바 + 사이드바 + 메인 영역) |
| `app/page.tsx` | 홈 페이지 (기본 안내 또는 첫 번째 컴포넌트로 리다이렉트) |
| `app/components/[slug]/page.tsx` | 컴포넌트 상세 가이드 페이지 (동적 라우트) |
| `components/layout/sidebar.tsx` | 사이드바 네비게이션 |
| `components/layout/top-bar.tsx` | 상단바 |
| `components/guide/wireframe-preview.tsx` | 와이어프레임 미리보기 패널 |
| `components/guide/term-cards.tsx` | 핵심 용어 카드 (4개) |
| `components/guide/prompt-panel.tsx` | AI 프롬프트 복사 패널 |
| `data/components.ts` | 33개 컴포넌트 정적 데이터 |
| `data/categories.ts` | 6개 카테고리 정적 데이터 |
| `lib/types.ts` | TypeScript 타입 정의 |

## URL Structure

| URL | 페이지 |
|-----|--------|
| `/` | 홈 (Header 가이드로 리다이렉트) |
| `/components/header` | Header 컴포넌트 가이드 |
| `/components/hero` | Hero 컴포넌트 가이드 |
| `/components/navbar` | Navbar 컴포넌트 가이드 |
| `/components/body` | Body/Content 컴포넌트 가이드 |
| `/components/footer` | Footer 컴포넌트 가이드 |
| `/components/[slug]` | 기타 컴포넌트 (콘텐츠 준비 중) |

## Build & Deploy

```bash
# 프로덕션 빌드
pnpm build

# 로컬 프로덕션 서버
pnpm start
```

Vercel에 배포 시 `main` 브랜치 push로 자동 배포됩니다.
