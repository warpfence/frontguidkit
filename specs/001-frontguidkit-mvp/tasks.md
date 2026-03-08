# Tasks: FrontGuidKit MVP

**Input**: Design documents from `/specs/001-frontguidkit-mvp/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/ui-contracts.md

**Tests**: Not requested — test tasks are excluded.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: 프로젝트 디렉토리 구조 생성 및 타입 정의

- [x] T001 Create directory structure: `components/layout/`, `components/guide/`, `data/`, and verify `lib/` exists
- [x] T002 Define TypeScript types (Category, Component, Term, WireframeData, InnerElement) in `lib/types.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: 모든 User Story가 공유하는 데이터 레이어, 레이아웃 골격, 라우팅 설정

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T003 [P] Create 6 categories static data (id, name, icon, order, component slugs) in `data/categories.ts`
- [x] T004 [P] Create 33 components static data in `data/components.ts` — MVP 5개(Header, Hero, Navbar, Body, Footer)는 wireframe, terms(4개), prompt 포함, 나머지 28개는 isReady=false 스켈레톤
- [x] T005 [P] Create TopBar component with service name "FrontGuidKit" and description in `components/layout/top-bar.tsx`
- [x] T006 Update root layout with dark theme class on html, TopBar, Sidebar placeholder area, and Main content area in `app/layout.tsx`
- [x] T007 Create dynamic route page with `generateStaticParams` for all 33 slugs in `app/components/[slug]/page.tsx` — slug로 component 데이터를 조회하여 표시하는 기본 구조
- [x] T008 Update home page to redirect to `/components/header` in `app/page.tsx`

**Checkpoint**: Foundation ready — 빈 레이아웃 골격이 동작하고, `/components/header`로 리다이렉트되며, 동적 라우트가 slug별 데이터를 조회할 수 있다.

---

## Phase 3: User Story 1 — 사이드바에서 컴포넌트 탐색 (Priority: P1) 🎯 MVP

**Goal**: 사이드바에서 6개 카테고리를 펼쳐 33개 컴포넌트를 탐색하고, 클릭하면 상세 페이지로 CSR 전환

**Independent Test**: 사이드바에서 카테고리 펼침/접힘, 컴포넌트 클릭 시 URL 변경 및 메인 영역 전환, 활성 상태 표시 확인

### Implementation for User Story 1

- [x] T009 [US1] Create Sidebar component with category accordion (펼침/접힘), component links (`next/link`), active state highlighting based on current pathname in `components/layout/sidebar.tsx`
- [x] T010 [US1] Integrate Sidebar into root layout — Sidebar를 좌측에 배치하고 Main content area를 우측에 배치하는 flex 레이아웃 완성 in `app/layout.tsx`
- [x] T011 [P] [US1] Create ContentPlaceholder component showing "콘텐츠 준비 중" message for isReady=false components in `components/guide/content-placeholder.tsx`
- [x] T012 [US1] Wire up component detail page — component title + description 표시, isReady 분기 (true: 가이드 영역, false: ContentPlaceholder) in `app/components/[slug]/page.tsx`

**Checkpoint**: 사이드바에서 33개 컴포넌트를 탐색하고 클릭하면 페이지가 전환된다. MVP 5개는 제목+설명이 표시되고, 나머지는 "준비 중" 안내가 표시된다.

---

## Phase 4: User Story 2 — 와이어프레임으로 컴포넌트 위치 파악 (Priority: P1)

**Goal**: 전체 페이지 레이아웃 다이어그램에서 해당 컴포넌트의 위치를 색상 하이라이트로 표시

**Independent Test**: Header 페이지에서 와이어프레임의 상단 영역이 하이라이트되고 내부 요소(Logo, Nav, CTA)가 레이블로 표시되는지 확인

### Implementation for User Story 2

- [x] T013 [US2] Create WireframePreview component — 전체 페이지 구조(Header/Hero/Body/Footer)를 HTML/CSS 박스로 표현, `highlightArea` prop에 해당하는 영역을 강조색으로 표시, `innerElements`를 position에 따라 레이블 배치 in `components/guide/wireframe-preview.tsx`
- [x] T014 [US2] Integrate WireframePreview into component detail page — isReady=true인 컴포넌트에 wireframe 데이터를 전달하여 렌더링 in `app/components/[slug]/page.tsx`

**Checkpoint**: MVP 5개 컴포넌트 페이지에서 와이어프레임이 표시되고, 각각 다른 영역이 하이라이트된다.

---

## Phase 5: User Story 4 — AI 프롬프트 복사 (Priority: P1)

**Goal**: AI 프롬프트 템플릿을 표시하고 [복사] 버튼으로 클립보드에 복사, "복사됨" 피드백 제공

**Independent Test**: 복사 버튼 클릭 시 클립보드에 프롬프트가 복사되고, 버튼이 "복사됨"으로 변경 후 2초 뒤 원래로 복귀하는지 확인

### Implementation for User Story 4

- [x] T015 [P] [US4] Create clipboard utility with Clipboard API + `execCommand('copy')` fallback in `lib/clipboard.ts`
- [x] T016 [US4] Create PromptPanel component — 프롬프트 텍스트 표시, 복사 버튼 (Lucide Copy/Check 아이콘), useState로 복사 상태 관리, 2초 후 자동 복귀 in `components/guide/prompt-panel.tsx`
- [x] T017 [US4] Integrate PromptPanel into component detail page — isReady=true인 컴포넌트에 prompt 데이터를 전달하여 렌더링 in `app/components/[slug]/page.tsx`

**Checkpoint**: MVP 5개 컴포넌트 페이지에서 AI 프롬프트가 표시되고, 복사 버튼이 정상 동작한다.

---

## Phase 6: User Story 3 — 핵심 용어 학습 (Priority: P2)

**Goal**: 컴포넌트별 4개의 핵심 용어를 카드 형태로 표시 (영어 명칭 + 한국어 설명)

**Independent Test**: Header 페이지에서 4개의 용어 카드가 표시되고, 각 카드에 영어 명칭과 한국어 설명이 포함되는지 확인

### Implementation for User Story 3

- [x] T018 [US3] Create TermCards component — 4열 그리드 카드 레이아웃, 각 카드에 영어 명칭(볼드) + 한국어 설명 표시 in `components/guide/term-cards.tsx`
- [x] T019 [US3] Integrate TermCards into component detail page — isReady=true인 컴포넌트에 terms 데이터를 전달하여 와이어프레임과 프롬프트 사이에 배치 in `app/components/[slug]/page.tsx`

**Checkpoint**: MVP 5개 컴포넌트 페이지에서 4개 용어 카드가 정상 표시된다.

---

## Phase 7: User Story 5 — 다크 테마 UI 경험 (Priority: P2)

**Goal**: 다크 테마 기본 적용, 모든 UI 요소의 가독성 유지, WCAG 2.1 AA 명도 대비 충족

**Independent Test**: 모든 페이지에서 다크 테마가 적용되고, 텍스트/카드/와이어프레임의 가독성이 유지되는지 확인

### Implementation for User Story 5

- [x] T020 [US5] Verify and adjust dark theme styling — 모든 커스텀 컴포넌트(TopBar, Sidebar, WireframePreview, TermCards, PromptPanel, ContentPlaceholder)가 shadcn 테마 변수 기반 다크 호환 Tailwind 클래스를 사용하는지 확인 및 수정 in all `components/**/*.tsx`
- [x] T021 [US5] Ensure wireframe diagram colors have sufficient contrast in dark mode — 하이라이트 색상, 박스 테두리, 레이블 텍스트 가독성 조정 in `components/guide/wireframe-preview.tsx`

**Checkpoint**: 다크 테마에서 모든 UI 요소가 가독성을 유지하고 시각적으로 일관된다.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: 전체 품질 검증 및 마무리

- [x] T022 Validate all 5 MVP component pages (Header, Hero, Navbar, Body, Footer) render complete content — wireframe + terms(4개) + prompt + 복사 기능 모두 동작하는지 확인
- [x] T023 Verify browser navigation — 뒤로가기/앞으로가기, 직접 URL 접근, 북마크 접근이 정상 동작하는지 확인 in `app/components/[slug]/page.tsx`
- [x] T024 Run `pnpm build` to verify production build succeeds with no errors

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Phase 1 (T001, T002) — BLOCKS all user stories
- **US1 (Phase 3)**: Depends on Phase 2 — delivers navigable skeleton
- **US2 (Phase 4)**: Depends on Phase 2 + Phase 3 (T012 component detail page structure)
- **US4 (Phase 5)**: Depends on Phase 2 + Phase 3 (T012 component detail page structure)
- **US3 (Phase 6)**: Depends on Phase 2 + Phase 3 (T012 component detail page structure)
- **US5 (Phase 7)**: Depends on Phase 3~6 (all components must exist to verify dark theme)
- **Polish (Phase 8)**: Depends on all user stories being complete

### User Story Dependencies

- **US1 (P1)**: 선행 의존 없음 — Foundational 완료 후 즉시 시작
- **US2 (P1)**: US1의 T012 (component detail page 구조) 필요
- **US4 (P1)**: US1의 T012 (component detail page 구조) 필요 — US2와 병렬 가능
- **US3 (P2)**: US1의 T012 (component detail page 구조) 필요 — US2/US4와 병렬 가능
- **US5 (P2)**: 모든 UI 컴포넌트 존재 필요 — 마지막 검증 단계

### Within Each User Story

- 컴포넌트 생성 → 페이지 통합 순서
- [P] 마킹된 태스크는 동일 스토리 내 병렬 가능

### Parallel Opportunities

- T003, T004, T005: Foundational 내 서로 다른 파일로 병렬 실행 가능
- T011, T015: US1/US4 내 독립 파일로 병렬 실행 가능
- US2 (T013~T014), US4 (T015~T017), US3 (T018~T019): US1 완료 후 3개 스토리 병렬 가능

---

## Parallel Example: After US1 Complete

```bash
# US2, US4, US3을 병렬로 진행 가능 (서로 다른 파일):
Task: "Create WireframePreview in components/guide/wireframe-preview.tsx" (US2)
Task: "Create clipboard utility in lib/clipboard.ts" (US4)
Task: "Create TermCards in components/guide/term-cards.tsx" (US3)

# 단, 각 스토리의 페이지 통합 태스크(T014, T017, T019)는 동일 파일(app/components/[slug]/page.tsx)을
# 수정하므로 순차 실행 권장
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001~T002)
2. Complete Phase 2: Foundational (T003~T008)
3. Complete Phase 3: US1 — 사이드바 탐색 (T009~T012)
4. **STOP and VALIDATE**: 사이드바에서 33개 컴포넌트 탐색 가능, 5개 MVP 페이지에 제목+설명 표시
5. Deploy/demo if ready

### Incremental Delivery

1. Setup + Foundational → 레이아웃 골격 동작
2. US1 → 사이드바 탐색 가능 → Deploy (MVP Skeleton!)
3. US2 → 와이어프레임 추가 → Deploy
4. US4 → 프롬프트 복사 추가 → Deploy
5. US3 → 용어 카드 추가 → Deploy
6. US5 → 다크 테마 검증 → Deploy (Full MVP!)

### Recommended Single-Developer Flow

Phase 1 → Phase 2 → Phase 3 (US1) → Phase 4 (US2) → Phase 5 (US4) → Phase 6 (US3) → Phase 7 (US5) → Phase 8 (Polish)

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- `app/components/[slug]/page.tsx`는 여러 스토리에서 수정하므로, 통합 태스크는 순차 실행
- `data/components.ts`에 MVP 5개 컴포넌트의 모든 콘텐츠(wireframe, terms, prompt)를 한 번에 작성 (T004)
- Commit after each phase or logical group
- Stop at any checkpoint to validate story independently
