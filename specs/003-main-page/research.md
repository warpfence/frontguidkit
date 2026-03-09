# Research: FrontGuidKit 메인페이지

**Feature**: 003-main-page
**Date**: 2026-03-09

## R-001: next-themes와 Next.js 16 호환성

**Decision**: next-themes 최신 버전 사용

**Rationale**: next-themes는 Next.js App Router를 공식 지원하며, `ThemeProvider`를 `layout.tsx`에서 `<html>` 태그와 함께 사용하는 패턴이 확립되어 있다. `attribute="class"`를 사용하여 Tailwind CSS의 `dark:` 접두사와 자연스럽게 연동된다. `suppressHydrationWarning`으로 SSR/CSR 불일치를 방지한다.

**Alternatives considered**:
- 커스텀 Context + localStorage: 직접 구현 가능하나 시스템 테마 감지, hydration 불일치 처리 등을 자체 구현해야 하므로 비효율적
- CSS `prefers-color-scheme`만 사용: 수동 토글이 불가능

## R-002: 다크/라이트 모드 적용 방식

**Decision**: `<html>` 태그에 `class="dark"` 또는 `class="light"` 적용 + Tailwind CSS `dark:` 변형 활용

**Rationale**: 현재 프로젝트가 이미 `<html lang="ko" className="dark">`로 하드코딩되어 있으므로, 이를 next-themes의 동적 class 관리로 교체한다. Tailwind CSS v4는 `dark:` 변형을 기본 지원하며, class 기반 다크모드 전환이 가장 유연하다.

**Alternatives considered**:
- `data-theme` attribute: Tailwind의 `dark:` 변형과 직접 연동되지 않아 추가 설정 필요
- CSS variables만 사용: 기존 shadcn/ui의 CSS variable 체계가 이미 `dark` class에 맞춰져 있으므로 class 방식이 가장 자연스러움

## R-003: 카드 컴포넌트 구현 방식

**Decision**: shadcn/ui Card 컴포넌트 사용 (`npx shadcn@latest add card`)

**Rationale**: 프로젝트가 이미 shadcn/ui를 사용 중이므로 일관성을 위해 shadcn/ui의 Card 컴포넌트를 추가한다. Card, CardHeader, CardTitle, CardContent 등 서브컴포넌트로 구조적 마크업이 가능하다.

**Alternatives considered**:
- 순수 HTML/Tailwind로 직접 구현: 가능하나 shadcn/ui의 디자인 시스템과 불일치할 수 있음
- Radix UI 직접 사용: shadcn/ui가 이미 Radix 기반이므로 중복

## R-004: Sidebar Collapsible 상태 제어 방식

**Decision**: `pathname`을 기반으로 `defaultOpen` 조건부 적용. 메인페이지(`/`)에서는 `defaultOpen={false}`, 상세 페이지에서는 해당 카테고리만 `defaultOpen={true}`

**Rationale**: 현재 Sidebar는 이미 `usePathname()`을 사용하여 현재 slug를 추출하고, `isActive` 여부로 `defaultOpen`을 결정한다. 메인페이지(`/`)에서는 `currentSlug`이 빈 문자열이 되므로 어떤 카테고리도 `isActive`가 되지 않아 자동으로 모두 접힌다. 추가 로직 변경 최소화.

**Alternatives considered**:
- 별도 상태 관리 (Zustand/Context): 과도한 복잡성 추가
- URL 쿼리 파라미터 기반: 불필요한 URL 오염

## R-005: 전체 폰트 크기 20% 확대 방식

**Decision**: `globals.css`에서 `html { font-size: 19.2px; }` 적용 (기본 16px의 120%)

**Rationale**: rem 단위 기반으로 전체 사이트의 폰트 크기를 일괄 조정할 수 있다. 기존 모든 Tailwind 유틸리티 클래스(`text-sm`, `text-lg` 등)가 rem 기반이므로 root font-size만 변경하면 전체에 반영된다.

**Alternatives considered**:
- 각 컴포넌트의 font-size를 개별 수정: 수정 범위가 넓고 누락 가능성 높음
- CSS `zoom`: 레이아웃 왜곡 가능성 있음
- `transform: scale()`: 레이아웃 계산에 영향 없어 실제 크기 변경 안됨

## R-006: Footer 구조 및 배치

**Decision**: `components/layout/footer.tsx`를 생성하고 `app/layout.tsx`의 `SidebarInset` 내부 하단에 배치

**Rationale**: Footer는 모든 페이지에서 표시되어야 하므로 루트 레이아웃에 포함한다. 사이드바와 나란히 배치되는 메인 콘텐츠 영역(SidebarInset) 내에 위치하여 사이드바 너비를 제외한 영역에서 3열 구조를 형성한다.

**Alternatives considered**:
- 사이드바 바깥(전체 폭) 배치: 사이드바와 겹치는 문제 발생 가능
- 각 page.tsx에 개별 배치: 중복 코드 발생, 유지보수 어려움
