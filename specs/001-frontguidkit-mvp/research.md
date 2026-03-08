# Research: FrontGuidKit MVP

**Branch**: `001-frontguidkit-mvp` | **Date**: 2026-03-08

## R1. 와이어프레임 렌더링 방식

**Decision**: React 컴포넌트 기반 HTML/CSS 다이어그램

**Rationale**:
- 와이어프레임은 실제 UI가 아닌 구조적 다이어그램으로, 복잡한 인터랙션이 불필요하다
- HTML div + Tailwind CSS로 박스 레이아웃을 표현하면 별도 라이브러리 없이 구현 가능하다
- 각 컴포넌트별로 하이라이트할 영역만 다르므로, 공통 레이아웃 컴포넌트에 highlight prop을 전달하는 방식이 적합하다
- SVG 대비 텍스트 레이블 배치와 반응형 대응이 용이하다

**Alternatives considered**:
- SVG 기반 다이어그램: 정밀한 도형 표현 가능하나, 텍스트 레이블과 반응형 처리가 복잡해짐
- Canvas: 오버킬이며 접근성(a11y) 지원이 어려움
- 이미지 파일: 다크 테마 대응, 하이라이트 동적 변경이 불가능

## R2. 콘텐츠 데이터 관리 방식

**Decision**: TypeScript 상수 객체 (JSON-like 구조)

**Rationale**:
- 33개 컴포넌트의 정적 데이터를 타입 안전하게 관리할 수 있다
- Next.js App Router에서 별도 fetch 없이 import하여 바로 사용 가능하다
- TypeScript 타입 체크로 데이터 누락을 빌드 타임에 감지할 수 있다
- 추후 MDX나 CMS로 전환하더라도 인터페이스만 유지하면 된다

**Alternatives considered**:
- JSON 파일: 타입 안전성이 떨어지고, 주석 작성이 불가
- MDX: 구조화된 데이터(용어, 프롬프트)보다 긴 글 콘텐츠에 적합, 현재 요구사항에는 오버킬
- Headless CMS (Contentful 등): 정적 콘텐츠에 외부 서비스 의존은 불필요한 복잡성

## R3. 라우팅 및 URL 구조

**Decision**: Next.js App Router 동적 라우트 — `/components/[slug]`

**Rationale**:
- `app/components/[slug]/page.tsx` 패턴으로 33개 컴포넌트 페이지를 하나의 동적 라우트로 처리
- slug 예시: `header`, `hero`, `navbar`, `modal-dialog`, `toast-snackbar` 등
- `generateStaticParams`로 빌드 타임에 모든 경로를 정적 생성하여 SEO와 성능 확보
- 브라우저 뒤로가기/앞으로가기, URL 직접 접근, 북마크 모두 자연스럽게 지원

**Alternatives considered**:
- 단일 페이지 + 쿼리 파라미터 (`/?component=header`): SEO 불리, URL 공유 시 직관성 떨어짐
- 카테고리 포함 URL (`/layout/header`): 카테고리 변경 시 URL 깨짐 위험, 불필요한 depth 추가

## R4. 사이드바 상태 관리

**Decision**: URL 기반 활성 상태 + 로컬 useState로 카테고리 펼침/접힘 관리

**Rationale**:
- 선택된 컴포넌트는 URL path에서 결정되므로 별도 상태 관리 불필요
- 카테고리 펼침/접힘은 UI 로컬 상태로 충분 (전역 상태 관리 도구 불필요)
- 현재 컴포넌트가 속한 카테고리를 자동으로 펼쳐서 초기 상태를 설정

**Alternatives considered**:
- Zustand/Jotai 등 상태 관리 라이브러리: 사이드바 하나를 위해 도입하기에는 과도함
- Context API: 가능하나 사이드바 단일 컴포넌트 내에서 해결 가능하므로 불필요

## R5. 클립보드 복사 구현

**Decision**: Clipboard API (`navigator.clipboard.writeText`) + 폴백

**Rationale**:
- 모던 브라우저에서 표준 지원되는 API
- HTTPS 환경(Vercel 배포)에서 안정적으로 동작
- 실패 시 `window.getSelection()` + `document.execCommand('copy')` 폴백 적용

**Alternatives considered**:
- 서드파티 라이브러리 (clipboard.js 등): 단순 텍스트 복사에 외부 의존 불필요

## R6. 다크 테마 구현

**Decision**: 기존 shadcn/Tailwind 다크 테마 설정 활용 (이미 구성됨)

**Rationale**:
- `globals.css`에 이미 `.dark` 클래스 기반 OkLCH 테마 변수가 정의되어 있음
- `<html class="dark">`를 기본 적용하면 별도 구현 없이 다크 테마 적용
- MVP에서는 테마 토글 없이 다크 테마 고정이므로 추가 로직 불필요

**Alternatives considered**:
- next-themes: 테마 전환이 필요할 때 도입 (MVP 범위 외)
