# Research: 전체 카테고리 컴포넌트 콘텐츠 확장

**Branch**: `002-extend-all-categories` | **Date**: 2026-03-09

## R1: 와이어프레임 레이아웃 타입 설계

### Decision
WireframeData에 `wireframeType` 필드를 추가하여 4가지 와이어프레임 템플릿을 지원한다.

### Rationale
현재 wireframe-preview.tsx는 "전체 페이지 레이아웃" 구조(header/hero/navbar/body/footer)만 하드코딩되어 있다. 레이아웃 외 카테고리의 컴포넌트는 이 구조에 맞지 않으므로, 카테고리 특성에 맞는 다양한 와이어프레임 템플릿이 필요하다.

### 와이어프레임 타입 정의

| 타입 | 설명 | 적용 컴포넌트 |
|------|------|--------------|
| `page-layout` | 전체 페이지 구조 (기존) | Header, Hero, Navbar, Body, Footer |
| `overlay` | 페이지 위 오버레이 요소 | Modal/Dialog, Toast/Snackbar, Dropdown Menu, Tooltip, Popover |
| `inline` | 페이지 내 인라인 요소 | Alert/Banner, Badge, Breadcrumb, Tabs, Pagination, Stepper, Progress/Skeleton |
| `standalone` | 독립 컴포넌트 상세 구조 | Card, Carousel, Accordion, Avatar, Timeline, Form/Input, Search Bar, Toggle, Date Picker, File Upload, Tag/Chip, Rating, Table, Stat Card, Chart, Heatmap |

### Alternatives Considered
1. **카테고리별 1:1 매핑** (6가지 타입) — 불필요한 중복. 예: 탐색/이동과 피드백 모두 "페이지 내 위치" 표시가 필요.
2. **컴포넌트마다 커스텀 렌더러** — 유지보수 비용 과다. 28개 개별 렌더러는 과잉.
3. **기존 page-layout에 모두 통합** — 레이아웃 외 카테고리에서는 맥락이 부정확함.

---

## R2: 와이어프레임 템플릿별 렌더링 구조

### Decision
wireframe-preview.tsx를 리팩토링하여 wireframeType에 따라 다른 레이아웃을 렌더링한다.

### 템플릿별 구조

#### `overlay` 템플릿
```
┌──────────────────────────┐
│ ░░░░░░ Page ░░░░░░░░░░░░ │  ← 반투명 배경(Backdrop)
│ ░░┌──────────────┐░░░░░░ │
│ ░░│  [highlight]  │░░░░░░ │  ← 오버레이 요소 (innerElements 표시)
│ ░░│               │░░░░░░ │
│ ░░└──────────────┘░░░░░░ │
│ ░░░░░░░░░░░░░░░░░░░░░░░░ │
└──────────────────────────┘
```
- Modal: 중앙 오버레이
- Toast: 우하단 코너
- Tooltip/Popover: 트리거 요소 주변
- Dropdown: 버튼 하단

#### `inline` 템플릿
```
┌──────────────────────────┐
│ Header                    │
│ [highlight area]          │  ← 강조된 인라인 요소
│ ─────────────────────── │
│ Content Area              │
│                           │
│ ─────────────────────── │
│ Footer                    │
└──────────────────────────┘
```
- 페이지 맥락 내 특정 위치에 컴포넌트가 표시됨
- highlightArea로 위치(top/middle/bottom) 지정

#### `standalone` 템플릿
```
┌──────────────────────────┐
│ [Component Name]          │
│ ┌────┐ ┌────┐ ┌────┐    │  ← innerElements를 구조적으로 배치
│ │    │ │    │ │    │    │
│ └────┘ └────┘ └────┘    │
│ [Sub Elements...]         │
└──────────────────────────┘
```
- 컴포넌트 자체의 내부 구조만 상세히 표시
- innerElements로 내부 구성 요소 정의

### Rationale
3가지 추가 템플릿으로 28개 컴포넌트의 시각적 맥락을 충분히 표현 가능. 과도한 세분화 없이 카테고리별 차별화 달성.

---

## R3: WireframeData 타입 확장 방식

### Decision
기존 WireframeData 인터페이스에 `wireframeType` 필드를 optional로 추가하고, 기본값은 `page-layout`으로 처리한다.

```typescript
export interface WireframeData {
  wireframeType?: "page-layout" | "overlay" | "inline" | "standalone";
  highlightArea: string;
  innerElements: InnerElement[];
}
```

### Rationale
- 기존 레이아웃 카테고리 데이터(5개)는 변경 불필요 (wireframeType 미지정 시 page-layout)
- 하위 호환성 유지
- 새 컴포넌트 데이터에만 wireframeType 지정

### Alternatives Considered
1. **별도 타입으로 분리** (OverlayWireframe, InlineWireframe 등) — 타입이 과도하게 늘어남
2. **wireframeType 필수 필드** — 기존 5개 컴포넌트 데이터도 수정 필요

---

## R4: shadcn/ui 컴포넌트 활용 계획

### Decision
와이어프레임 렌더링 시 shadcn/ui 컴포넌트를 적극 활용하여 UI 일관성과 접근성을 확보한다.

### 활용 계획

| 와이어프레임 영역 | 활용할 shadcn/ui 컴포넌트 |
|-------------------|-------------------------|
| overlay 배경 | 기존 div + bg-opacity (별도 컴포넌트 불필요) |
| inline 영역 구분 | Separator |
| standalone 카드 형태 | 기존 border/rounded 스타일 유지 |
| 전체 와이어프레임 래퍼 | Card (선택적) |

### Rationale
와이어프레임은 실제 UI가 아닌 "구조 다이어그램"이므로, shadcn/ui의 인터랙티브 컴포넌트보다는 스타일링 일관성(border, spacing, color token)에 초점. 기존 Tailwind CSS 기반 스타일 유지.

---

## R5: 컴포넌트 데이터 작성 규모 및 구조

### Decision
28개 컴포넌트 각각에 대해 다음을 작성한다:
- wireframe: wireframeType + highlightArea + innerElements (3~5개)
- terms: 정확히 4개 (en/ko 쌍)
- prompt: 구조 + 동작 + 스타일 3섹션 형태 (기존 패턴 준수)

### 카테고리별 작업량

| 카테고리 | 컴포넌트 수 | wireframeType |
|----------|------------|---------------|
| 피드백/알림 | 5 | overlay(3) + inline(2) |
| 탐색/이동 | 5 | inline(5) |
| 콘텐츠 표시 | 7 | standalone(5) + overlay(2) |
| 입력/인터랙션 | 7 | standalone(7) |
| 데이터 시각화 | 4 | standalone(4) |

### Rationale
proposal.md의 컴포넌트 설명과 와이어프레임 정의를 기반으로, 각 컴포넌트의 시각적 출현 맥락에 따라 wireframeType을 결정함.
