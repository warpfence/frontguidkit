# Tasks: 전체 카테고리 컴포넌트 콘텐츠 확장

**Input**: Design documents from `/specs/002-extend-all-categories/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/ui-contracts.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1~US5)
- Include exact file paths in descriptions

## Phase 1: Setup (타입 확장)

**Purpose**: WireframeData 타입에 wireframeType 필드를 추가하여 4가지 와이어프레임 템플릿을 지원할 기반을 마련

- [x] T001 `lib/types.ts`의 WireframeData 인터페이스에 `wireframeType?: "page-layout" | "overlay" | "inline" | "standalone"` 필드 추가

---

## Phase 2: Foundational (와이어프레임 컴포넌트 리팩토링)

**Purpose**: wireframe-preview.tsx를 리팩토링하여 4가지 와이어프레임 레이아웃 템플릿을 렌더링할 수 있도록 확장. US5(와이어프레임 차별화)의 핵심 요구사항이며, 모든 카테고리 데이터 작업의 선행 조건.

**⚠️ CRITICAL**: 이 Phase 완료 전에 카테고리 데이터 작업(Phase 3~6)을 시작할 수 없음

- [x] T002 [US5] `components/guide/wireframe-preview.tsx`에서 기존 레이아웃 렌더링 로직을 `PageLayoutWireframe` 내부 컴포넌트로 추출 (기능 변경 없이 리팩토링만)
- [x] T003 [US5] `components/guide/wireframe-preview.tsx`에 `OverlayWireframe` 내부 컴포넌트 구현 — 반투명 배경 위에 highlightArea(modal: 중앙, toast: 우하단, dropdown: 상단좌측, tooltip: 상단중앙, popover: 상단우측)에 맞는 오버레이 박스 렌더링, innerElements를 내부에 표시
- [x] T004 [P] [US5] `components/guide/wireframe-preview.tsx`에 `InlineWireframe` 내부 컴포넌트 구현 — 간소화된 페이지 구조(Header bar + 콘텐츠 영역 + Footer bar)에서 highlightArea(top/middle/bottom)에 해당하는 영역을 강조하고 innerElements 표시
- [x] T005 [P] [US5] `components/guide/wireframe-preview.tsx`에 `StandaloneWireframe` 내부 컴포넌트 구현 — 단일 컴포넌트의 내부 구조만 표시, innerElements를 position 기반으로 배치 (3개 이하 단일행, 4개 이상 flex-wrap)
- [x] T006 [US5] `components/guide/wireframe-preview.tsx`의 `WireframePreview` 컴포넌트에서 `wireframe.wireframeType` 값에 따라 PageLayoutWireframe/OverlayWireframe/InlineWireframe/StandaloneWireframe 분기 렌더링 (미지정 시 PageLayoutWireframe 기본값)

**Checkpoint**: 기존 5개 레이아웃 컴포넌트(Header, Hero, Navbar, Body, Footer)의 와이어프레임이 변경 없이 동일하게 표시되는지 확인

---

## Phase 3: User Story 1 — 피드백/알림 카테고리 (Priority: P1) 🎯 MVP

**Goal**: 피드백/알림 카테고리의 5개 컴포넌트(Modal/Dialog, Toast/Snackbar, Alert/Banner, Badge, Progress Bar/Skeleton)에 와이어프레임, 용어 4개, AI 프롬프트를 추가하여 isReady=true로 전환

**Independent Test**: `/components/modal-dialog`, `/components/toast-snackbar`, `/components/alert-banner`, `/components/badge`, `/components/progress-skeleton` 각각에서 와이어프레임, 용어 카드 4개, 프롬프트 패널이 정상 표시되고 "콘텐츠 준비 중" 플레이스홀더가 나타나지 않는지 확인

### Implementation for User Story 1

- [x] T007 [P] [US1] `data/components.ts`에서 `modal-dialog` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "overlay", highlightArea: "modal", innerElements: Backdrop/Header/Body/Footer), terms 4개(Modal, Dialog, Backdrop, Z-index), prompt(구조/동작/스타일), isReady: true
- [x] T008 [P] [US1] `data/components.ts`에서 `toast-snackbar` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "overlay", highlightArea: "toast", innerElements: Icon/Message/Close Button), terms 4개(Toast, Snackbar, Auto-dismiss, Stacking), prompt(구조/동작/스타일), isReady: true
- [x] T009 [P] [US1] `data/components.ts`에서 `alert-banner` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "inline", highlightArea: "top", innerElements: Icon/Message/Action Button), terms 4개(Alert, Banner, Severity Level, Dismissible), prompt(구조/동작/스타일), isReady: true
- [x] T010 [P] [US1] `data/components.ts`에서 `badge` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "inline", highlightArea: "top", innerElements: Icon/Badge Count/Dot Badge), terms 4개(Badge, Notification Dot, Counter Badge, Status Indicator), prompt(구조/동작/스타일), isReady: true
- [x] T011 [P] [US1] `data/components.ts`에서 `progress-skeleton` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "inline", highlightArea: "middle", innerElements: Progress Track/Fill Bar/Skeleton Block), terms 4개(Progress Bar, Skeleton Screen, Shimmer Effect, Loading State), prompt(구조/동작/스타일), isReady: true

**Checkpoint**: 피드백/알림 카테고리 5개 컴포넌트 모두 가이드 페이지에서 와이어프레임+용어+프롬프트 정상 표시 확인

---

## Phase 4: User Story 2 — 탐색/이동 및 콘텐츠 표시 카테고리 (Priority: P1)

**Goal**: 탐색/이동(5개) + 콘텐츠 표시(7개) 총 12개 컴포넌트에 와이어프레임, 용어 4개, AI 프롬프트를 추가하여 isReady=true로 전환

**Independent Test**: `/components/breadcrumb`, `/components/tabs`, `/components/pagination`, `/components/stepper`, `/components/dropdown-menu`, `/components/card`, `/components/carousel-slider`, `/components/accordion`, `/components/tooltip`, `/components/popover`, `/components/avatar`, `/components/timeline` 각각에서 가이드 콘텐츠 정상 표시 확인

### 탐색/이동 데이터

- [x] T012 [P] [US2] `data/components.ts`에서 `breadcrumb` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "inline", highlightArea: "top", innerElements: Home/Category/Current Page/Separator), terms 4개(Breadcrumb, Path Hierarchy, Separator, Current Page Indicator), prompt(구조/동작/스타일), isReady: true
- [x] T013 [P] [US2] `data/components.ts`에서 `tabs` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "inline", highlightArea: "top", innerElements: Tab 1/Tab 2/Tab 3/Tab Panel), terms 4개(Tabs, Tab Panel, Active Tab, Tab Indicator), prompt(구조/동작/스타일), isReady: true
- [x] T014 [P] [US2] `data/components.ts`에서 `pagination` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "inline", highlightArea: "bottom", innerElements: Previous/Page Numbers/Next/Ellipsis), terms 4개(Pagination, Page Size, Current Page, Ellipsis Overflow), prompt(구조/동작/스타일), isReady: true
- [x] T015 [P] [US2] `data/components.ts`에서 `stepper` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "inline", highlightArea: "top", innerElements: Step 1 Done/Step 2 Active/Step 3 Pending/Connector Line), terms 4개(Stepper, Step Indicator, Connector, Progress Step), prompt(구조/동작/스타일), isReady: true
- [x] T016 [P] [US2] `data/components.ts`에서 `dropdown-menu` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "overlay", highlightArea: "dropdown", innerElements: Trigger Button/Menu Item/Divider/Icon), terms 4개(Dropdown, Trigger, Menu Item, Submenu), prompt(구조/동작/스타일), isReady: true

### 콘텐츠 표시 데이터

- [x] T017 [P] [US2] `data/components.ts`에서 `card` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "standalone", highlightArea: "main", innerElements: Image/Title/Description/Action Button), terms 4개(Card, Card Header, Card Body, Card Footer), prompt(구조/동작/스타일), isReady: true
- [x] T018 [P] [US2] `data/components.ts`에서 `carousel-slider` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "standalone", highlightArea: "main", innerElements: Slide/Previous Arrow/Next Arrow/Dot Indicator), terms 4개(Carousel, Slider, Slide Indicator, Auto-play), prompt(구조/동작/스타일), isReady: true
- [x] T019 [P] [US2] `data/components.ts`에서 `accordion` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "standalone", highlightArea: "main", innerElements: Header Open/Content Panel/Header Closed/Chevron Icon), terms 4개(Accordion, Collapse, Toggle Panel, Single Expand), prompt(구조/동작/스타일), isReady: true
- [x] T020 [P] [US2] `data/components.ts`에서 `tooltip` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "overlay", highlightArea: "tooltip", innerElements: Target Element/Tooltip Text/Arrow), terms 4개(Tooltip, Trigger Element, Placement, Arrow Pointer), prompt(구조/동작/스타일), isReady: true
- [x] T021 [P] [US2] `data/components.ts`에서 `popover` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "overlay", highlightArea: "popover", innerElements: Trigger/Title/Content/Action), terms 4개(Popover, Trigger, Floating Panel, Dismiss on Outside Click), prompt(구조/동작/스타일), isReady: true
- [x] T022 [P] [US2] `data/components.ts`에서 `avatar` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "standalone", highlightArea: "main", innerElements: Avatar Image/Fallback Initials/Status Badge/Avatar Group), terms 4개(Avatar, Fallback, Avatar Group, Online Status), prompt(구조/동작/스타일), isReady: true
- [x] T023 [P] [US2] `data/components.ts`에서 `timeline` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "standalone", highlightArea: "main", innerElements: Timeline Node/Connector Line/Event Title/Timestamp), terms 4개(Timeline, Timeline Node, Connector, Event Card), prompt(구조/동작/스타일), isReady: true

**Checkpoint**: 탐색/이동 5개 + 콘텐츠 표시 7개 = 총 12개 컴포넌트 가이드 페이지 정상 표시 확인

---

## Phase 5: User Story 3 — 입력/인터랙션 카테고리 (Priority: P2)

**Goal**: 입력/인터랙션 카테고리의 7개 컴포넌트에 와이어프레임, 용어 4개, AI 프롬프트를 추가하여 isReady=true로 전환

**Independent Test**: `/components/form-input`, `/components/search-bar`, `/components/toggle-switch`, `/components/date-picker`, `/components/file-upload`, `/components/tag-chip`, `/components/rating` 각각에서 가이드 콘텐츠 정상 표시 확인

### Implementation for User Story 3

- [x] T024 [P] [US3] `data/components.ts`에서 `form-input` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "standalone", highlightArea: "main", innerElements: Label/Text Input/Helper Text/Error Message), terms 4개(Form Field, Input Validation, Placeholder, Helper Text), prompt(구조/동작/스타일), isReady: true
- [x] T025 [P] [US3] `data/components.ts`에서 `search-bar` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "standalone", highlightArea: "main", innerElements: Search Icon/Input Field/Clear Button/Autocomplete Dropdown), terms 4개(Search Bar, Autocomplete, Debounce, Search Suggestion), prompt(구조/동작/스타일), isReady: true
- [x] T026 [P] [US3] `data/components.ts`에서 `toggle-switch` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "standalone", highlightArea: "main", innerElements: Label/Switch Track/Switch Thumb/State Text), terms 4개(Toggle, Switch, On/Off State, Thumb), prompt(구조/동작/스타일), isReady: true
- [x] T027 [P] [US3] `data/components.ts`에서 `date-picker` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "standalone", highlightArea: "main", innerElements: Input Field/Calendar Icon/Calendar Grid/Selected Date), terms 4개(Date Picker, Calendar Popup, Date Range, Locale), prompt(구조/동작/스타일), isReady: true
- [x] T028 [P] [US3] `data/components.ts`에서 `file-upload` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "standalone", highlightArea: "main", innerElements: Dropzone Area/Upload Icon/File List/Progress Bar), terms 4개(Dropzone, Drag and Drop, File Preview, Upload Progress), prompt(구조/동작/스타일), isReady: true
- [x] T029 [P] [US3] `data/components.ts`에서 `tag-chip` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "standalone", highlightArea: "main", innerElements: Tag Label/Remove Icon/Add Tag Input/Tag Group), terms 4개(Tag, Chip, Removable Tag, Tag Input), prompt(구조/동작/스타일), isReady: true
- [x] T030 [P] [US3] `data/components.ts`에서 `rating` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "standalone", highlightArea: "main", innerElements: Star Icons/Filled Stars/Empty Stars/Rating Value), terms 4개(Rating, Star Rating, Half Star, Interactive Rating), prompt(구조/동작/스타일), isReady: true

**Checkpoint**: 입력/인터랙션 7개 컴포넌트 가이드 페이지 정상 표시 확인

---

## Phase 6: User Story 4 — 데이터 시각화 카테고리 (Priority: P2)

**Goal**: 데이터 시각화 카테고리의 4개 컴포넌트에 와이어프레임, 용어 4개, AI 프롬프트를 추가하여 isReady=true로 전환

**Independent Test**: `/components/table-data-grid`, `/components/stat-card`, `/components/chart`, `/components/heatmap` 각각에서 가이드 콘텐츠 정상 표시 확인

### Implementation for User Story 4

- [x] T031 [P] [US4] `data/components.ts`에서 `table-data-grid` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "standalone", highlightArea: "main", innerElements: Toolbar/Header Row/Data Row/Pagination), terms 4개(Data Grid, Column Header, Row Selection, Sorting), prompt(구조/동작/스타일), isReady: true
- [x] T032 [P] [US4] `data/components.ts`에서 `stat-card` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "standalone", highlightArea: "main", innerElements: Metric Label/Metric Value/Trend Icon/Comparison Text), terms 4개(KPI Card, Metric, Trend Indicator, Comparison Period), prompt(구조/동작/스타일), isReady: true
- [x] T033 [P] [US4] `data/components.ts`에서 `chart` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "standalone", highlightArea: "main", innerElements: X Axis/Y Axis/Data Points/Legend), terms 4개(Chart, Axis, Legend, Data Series), prompt(구조/동작/스타일), isReady: true
- [x] T034 [P] [US4] `data/components.ts`에서 `heatmap` 컴포넌트 데이터 업데이트 — wireframe(wireframeType: "standalone", highlightArea: "main", innerElements: Grid Cell/Color Scale/Row Label/Column Label), terms 4개(Heatmap, Color Scale, Cell Value, Intensity), prompt(구조/동작/스타일), isReady: true

**Checkpoint**: 데이터 시각화 4개 컴포넌트 가이드 페이지 정상 표시 확인

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: 전체 33개 컴포넌트의 통합 검증 및 품질 확인

- [x] T035 모든 33개 컴포넌트 slug로 페이지 접속하여 "콘텐츠 준비 중" 플레이스홀더가 나타나지 않는지 확인
- [x] T036 서로 다른 wireframeType(page-layout, overlay, inline, standalone)의 와이어프레임이 각각 올바르게 렌더링되는지 시각적으로 확인
- [x] T037 28개 신규 컴포넌트의 프롬프트 복사 기능이 정상 동작하는지 확인
- [x] T038 `npm run lint` 실행하여 린트 오류 없음 확인

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: 의존성 없음 — 즉시 시작
- **Phase 2 (Foundational)**: Phase 1 완료 후 시작 — 모든 데이터 작업의 선행 조건
- **Phase 3~6 (User Stories)**: Phase 2 완료 후 **병렬 시작 가능**
  - Phase 3 (US1 피드백/알림): Phase 2 완료 후
  - Phase 4 (US2 탐색+콘텐츠): Phase 2 완료 후 (US1과 병렬 가능)
  - Phase 5 (US3 입력): Phase 2 완료 후 (US1, US2와 병렬 가능)
  - Phase 6 (US4 데이터 시각화): Phase 2 완료 후 (US1~3과 병렬 가능)
- **Phase 7 (Polish)**: Phase 3~6 모두 완료 후

### User Story Dependencies

- **US5 (와이어프레임 차별화)**: Phase 2에서 구현 — 모든 User Story의 선행 조건
- **US1 (피드백/알림)**: Phase 2 완료 후 독립 구현 가능
- **US2 (탐색+콘텐츠)**: Phase 2 완료 후 독립 구현 가능 (US1과 무관)
- **US3 (입력)**: Phase 2 완료 후 독립 구현 가능 (US1, US2와 무관)
- **US4 (데이터 시각화)**: Phase 2 완료 후 독립 구현 가능 (US1~3과 무관)

### Within Each User Story

- 모든 데이터 태스크가 `data/components.ts` 동일 파일을 수정하지만, 각 태스크는 서로 다른 컴포넌트 객체를 수정하므로 **논리적으로 병렬** 가능 (실제 실행 시 순차 권장)
- 각 태스크는 wireframe + terms + prompt + isReady를 한 번에 업데이트

### Parallel Opportunities

- Phase 2: T004와 T005는 서로 다른 내부 컴포넌트를 구현하므로 병렬 가능
- Phase 3~6: 서로 다른 User Story이므로 팀원이 있다면 완전 병렬 가능
- Phase 3~6 내부: 동일 파일(components.ts) 수정이지만 서로 다른 객체를 대상으로 하므로, 실제 병렬 시 머지 충돌 주의

---

## Parallel Example: Phase 2 (Foundational)

```bash
# T004와 T005는 동일 파일 내 다른 함수이므로 순차 진행 권장
# T004: InlineWireframe 구현 후 → T005: StandaloneWireframe 구현

# 하지만 설계는 병렬로 가능:
Task: "InlineWireframe 컴포넌트 설계 + 구현 in wireframe-preview.tsx"
Task: "StandaloneWireframe 컴포넌트 설계 + 구현 in wireframe-preview.tsx"
```

## Parallel Example: Phase 3~6 (User Stories)

```bash
# 4개 User Story를 병렬로 진행할 경우:
Developer A: Phase 3 (US1 - 피드백/알림 5개)
Developer B: Phase 4 (US2 - 탐색+콘텐츠 12개)
Developer C: Phase 5 (US3 - 입력 7개)
Developer D: Phase 6 (US4 - 데이터 시각화 4개)
# 각각 독립적으로 data/components.ts의 다른 컴포넌트 객체 수정
```

---

## Implementation Strategy

### MVP First (US1 + US5 Only)

1. Phase 1: 타입 확장 (T001)
2. Phase 2: 와이어프레임 리팩토링 (T002~T006)
3. Phase 3: 피드백/알림 데이터 (T007~T011)
4. **STOP and VALIDATE**: 피드백/알림 카테고리 5개 독립 테스트
5. 여기까지 완료 시 10개/33개 컴포넌트 사용 가능

### Incremental Delivery

1. Setup + Foundational → 와이어프레임 4가지 타입 준비 완료
2. + US1 (피드백/알림) → 10개 컴포넌트 (MVP!)
3. + US2 (탐색+콘텐츠) → 22개 컴포넌트
4. + US3 (입력) → 29개 컴포넌트
5. + US4 (데이터 시각화) → 33개 컴포넌트 (완성!)
6. Polish → 전체 검증

---

## Notes

- 모든 데이터 태스크는 `data/components.ts` 단일 파일을 수정함
- 각 컴포넌트의 terms는 반드시 4개, prompt는 구조/동작/스타일 3섹션 형태
- wireframeType 미지정 시 기존 page-layout 동작 유지 (하위 호환)
- 기존 5개 레이아웃 컴포넌트 데이터는 변경하지 않음
