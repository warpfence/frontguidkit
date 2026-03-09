# Quick Start: FrontGuidKit 메인페이지

**Feature**: 003-main-page
**Date**: 2026-03-09

## 사전 요구사항

- Node.js 18+
- 프로젝트 의존성 설치 완료 (`npm install`)
- 현재 브랜치: `003-main-page`

## 새 의존성 설치

```bash
npm install next-themes
npx shadcn@latest add card
```

## 구현 순서

### 1. 테마 시스템

1. `components/theme-provider.tsx` 생성 — next-themes의 ThemeProvider 래퍼
2. `app/layout.tsx` 수정 — `<html>` 태그에서 `className="dark"` 제거, ThemeProvider로 children 감싸기, `suppressHydrationWarning` 추가

### 2. 헤더 개선

1. `components/layout/top-bar.tsx` 수정 — 테마 토글 버튼(Sun/Moon) 추가, 헤더 높이 `h-14` → `h-[67px]`, 폰트 크기 비례 확대

### 3. Sidebar Home 아이콘

1. `components/layout/sidebar.tsx` 수정 — 카테고리 목록 위에 Home 메뉴 추가, 메인페이지에서 active 상태 표시

### 4. 메인페이지

1. `components/home/hero-section.tsx` 생성 — 제목/부제목/설명
2. `components/home/category-grid.tsx` 생성 — 카테고리별 3열 카드 그리드
3. `app/page.tsx` 수정 — redirect 제거, Hero + CategoryGrid 렌더링

### 5. Footer

1. `components/layout/footer.tsx` 생성 — 3열 Footer
2. `app/layout.tsx` 수정 — SidebarInset 내 Footer 배치

### 6. 폰트 크기 조정

1. `app/globals.css` 수정 — `html { font-size: 19.2px; }` 추가

## 검증

```bash
npm run build   # SSG 빌드 성공 확인
npm run lint    # ESLint 통과 확인
npm run dev     # 시각적 확인
```

## 핵심 파일 목록

| 파일 | 작업 |
|------|------|
| `components/theme-provider.tsx` | 신규 |
| `components/home/hero-section.tsx` | 신규 |
| `components/home/category-grid.tsx` | 신규 |
| `components/layout/footer.tsx` | 신규 |
| `components/ui/card.tsx` | 신규 (shadcn) |
| `app/layout.tsx` | 수정 |
| `app/page.tsx` | 수정 |
| `app/globals.css` | 수정 |
| `components/layout/top-bar.tsx` | 수정 |
| `components/layout/sidebar.tsx` | 수정 |
