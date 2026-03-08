# Data Model: FrontGuidKit MVP

**Branch**: `001-frontguidkit-mvp` | **Date**: 2026-03-08

## Entities

### Category

컴포넌트를 그룹핑하는 상위 분류 단위.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| id | string | 고유 식별자 | unique, kebab-case (예: `layout`, `feedback`) |
| name | string | 카테고리 한국어 이름 | required (예: "레이아웃") |
| icon | string | 카테고리 아이콘 식별자 | required (Lucide 아이콘명) |
| order | number | 사이드바 표시 순서 | required, 1-based |
| components | Component[] | 하위 컴포넌트 목록 | required, 1개 이상 |

**총 6개 카테고리**: 레이아웃, 피드백/알림, 탐색/이동, 콘텐츠 표시, 입력/인터랙션, 데이터 시각화

### Component

개별 UI 컴포넌트 가이드의 단위.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| slug | string | URL 경로용 식별자 | unique, kebab-case (예: `header`, `modal-dialog`) |
| name | string | 컴포넌트 영어 이름 | required (예: "Header") |
| description | string | 한 줄 한국어 설명 | required |
| categoryId | string | 소속 카테고리 ID | required, Category.id 참조 |
| wireframe | WireframeData | 와이어프레임 렌더링 데이터 | MVP 5개 컴포넌트는 required, 나머지는 null |
| terms | Term[] | 핵심 용어 4개 | MVP 5개 컴포넌트는 정확히 4개, 나머지는 빈 배열 |
| prompt | string | AI 프롬프트 템플릿 | MVP 5개 컴포넌트는 required, 나머지는 빈 문자열 |
| isReady | boolean | 콘텐츠 완성 여부 | true: 가이드 표시, false: "준비 중" 표시 |

### Term

컴포넌트 관련 프론트엔드 핵심 용어.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| en | string | 영어 명칭 | required (예: "Sticky Header") |
| ko | string | 한국어 설명 | required (예: "스크롤 시 상단에 고정되는 헤더") |

### WireframeData

와이어프레임 렌더링에 필요한 데이터.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| highlightArea | string | 하이라이트할 영역 식별자 | required (예: `header`, `hero`, `footer`) |
| innerElements | InnerElement[] | 내부 구성 요소 | required, 1개 이상 |

### InnerElement

와이어프레임 내부에 표시되는 세부 구성 요소.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| label | string | 텍스트 레이블 | required (예: "Logo", "Navigation", "CTA Button") |
| position | string | 요소 위치 힌트 | required (예: "left", "center", "right") |

## Relationships

```
Category (1) ──── (N) Component
Component (1) ──── (4) Term
Component (1) ──── (1) WireframeData
WireframeData (1) ──── (N) InnerElement
```

## Validation Rules

- 모든 Component.slug는 전체 데이터셋에서 유일해야 한다.
- isReady가 true인 Component는 wireframe, terms(4개), prompt가 모두 존재해야 한다.
- isReady가 false인 Component는 name, description, categoryId만 필수이다.
- MVP에서 isReady=true인 컴포넌트: Header, Hero, Navbar, Body, Footer (5개)
- 나머지 28개 컴포넌트는 isReady=false로 사이드바에는 표시되나 상세 콘텐츠는 "준비 중"이다.

## State Transitions

해당 없음 — 모든 데이터는 정적(읽기 전용)이며 런타임 상태 변경이 없다.
