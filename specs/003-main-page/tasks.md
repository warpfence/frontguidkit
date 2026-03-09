# Tasks: FrontGuidKit 메인페이지

**Input**: Design documents from `/specs/003-main-page/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/ui-contracts.md, quickstart.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup

**Purpose**: 신규 의존성 설치 및 기반 컴포넌트 준비

- [x] T001 next-themes 패키지 설치 (`npm install next-themes`)
- [x] T002 shadcn/ui Card 컴포넌트 추가 (`npx shadcn@latest add card`)
- [x] T003 메인페이지용 디렉토리 생성 (`components/home/`)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: 모든 User Story에 필요한 테마 시스템 및 전역 스타일 변경

**⚠️ CRITICAL**: User Story 작업 전 반드시 완료

- [x] T004 ThemeProvider 래퍼 컴포넌트 생성 in `components/theme-provider.tsx` — next-themes의 ThemeProvider를 감싸는 클라이언트 컴포넌트, `attribute="class"`, `defaultTheme="system"`, `enableSystem={true}` 설정
- [x] T005 `app/layout.tsx` 수정 — `<html>` 태그에서 `className="dark"` 제거, `suppressHydrationWarning` 추가, children을 ThemeProvider로 감싸기
- [x] T006 `app/globals.css` 수정 — `html { font-size: 19.2px; }` 추가 (기본 16px의 120%)

**Checkpoint**: 테마 시스템 작동, 시스템 테마 자동 감지, 전체 폰트 크기 20% 증가 확인

---

## Phase 3: User Story 1 - 메인페이지 카테고리 탐색 (Priority: P1) 🎯 MVP

**Goal**: 메인페이지에 Hero 섹션과 6개 카테고리별 3열 카드 그리드를 표시하고, 카드 클릭 시 상세 페이지로 이동

**Independent Test**: `/` 접속 → Hero 섹션 표시 확인 → 6개 카테고리 섹션 확인 → 33개 카드 표시 확인 → 카드 클릭 시 `/components/[slug]` 이동 확인

### Implementation for User Story 1

- [x] T007 [P] [US1] Hero 섹션 컴포넌트 생성 in `components/home/hero-section.tsx` — 제목(`</> FrontGuidKit`), 부제목(`프론트엔드 개발 가이드 & AI 프롬프트`), 설명 텍스트, 중앙 정렬 레이아웃
- [x] T008 [P] [US1] 카테고리 카드 그리드 컴포넌트 생성 in `components/home/category-grid.tsx` — `data/categories.ts`에서 카테고리 import, 카테고리별 섹션 타이틀(Lucide 아이콘 + 이름), 3열(데스크탑)/2열(태블릿)/1열(모바일) 반응형 카드 그리드, shadcn Card 컴포넌트 사용, 카드에 컴포넌트명 + placeholder 영역, 카드 클릭 시 `/components/[slug]` 링크, 컴포넌트 0개인 카테고리는 섹션 미표시
- [x] T009 [US1] `app/page.tsx` 수정 — `redirect("/components/header")` 제거, HeroSection + CategoryGrid 렌더링으로 교체, 스크롤 가능한 메인 콘텐츠 레이아웃

**Checkpoint**: 메인페이지에서 6개 카테고리, 33개 카드 정상 렌더링, 카드 클릭 시 상세 페이지 이동

---

## Phase 4: User Story 2 - Home 네비게이션 및 사이드바 상태 (Priority: P1)

**Goal**: 사이드바에 Home 아이콘을 추가하고, 메인페이지에서 모든 Collapsible이 접힌 상태로 표시

**Independent Test**: 상세 페이지에서 Home 아이콘 클릭 → `/` 이동 → Collapsible 모두 접힘 확인

### Implementation for User Story 2

- [x] T010 [US2] `components/layout/sidebar.tsx` 수정 — 카테고리 목록 위에 Home 메뉴 아이템 추가 (Home 아이콘 + "홈" 텍스트), `Link href="/"`, 메인페이지(`pathname === "/"`)일 때 active 상태 표시, `isActive` 조건에서 메인페이지일 때 모든 Collapsible `defaultOpen={false}` 보장 (현재 로직으로 자동 처리됨 — currentSlug이 빈 문자열이므로), Home과 카테고리 목록 사이에 구분선(Separator) 추가

**Checkpoint**: Home 아이콘 → 메인페이지 이동, Collapsible 모두 접힘

---

## Phase 5: User Story 3 - 다크/라이트 모드 전환 (Priority: P2)

**Goal**: 헤더에 테마 토글 버튼을 추가하여 다크/라이트 모드를 전환

**Independent Test**: 시스템 다크모드에서 접속 → 다크 테마 확인 → 토글 클릭 → 라이트 전환 확인 → 페이지 이동 → 테마 유지 확인

### Implementation for User Story 3

- [x] T011 [US3] `components/layout/top-bar.tsx` 수정 — "use client" 추가, next-themes의 `useTheme()` hook 사용, 헤더 우측에 테마 토글 버튼 추가 (다크모드: Sun 아이콘, 라이트모드: Moon 아이콘), `aria-label` 접근성 속성, 클릭 시 `setTheme()` 호출로 다크↔라이트 전환, hydration 불일치 방지를 위해 `mounted` 상태 체크

**Checkpoint**: 시스템 테마 자동 감지, 토글 버튼으로 즉시 전환, 페이지 이동 후 테마 유지

---

## Phase 6: User Story 5 - 디자인 개선 (Priority: P2)

**Goal**: 헤더 폭과 폰트 크기를 20% 확대

**Independent Test**: 헤더 높이 확인 (기존 56px → 약 67px), 프로젝트명/부제목 폰트 크기 확대 확인, 기존 상세 페이지 레이아웃 정상 표시 확인

### Implementation for User Story 5

- [x] T012 [US5] `components/layout/top-bar.tsx` 수정 — 헤더 높이 `h-14` → `h-[67px]` (20% 확대), 프로젝트명 `text-lg` → `text-xl`, 부제목 `text-sm` → `text-base`, 아이콘 크기 `h-5 w-5` → `h-6 w-6`

**Checkpoint**: 헤더와 폰트 크기 20% 확대, 기존 페이지 레이아웃 유지

---

## Phase 7: User Story 4 - Footer (Priority: P3)

**Goal**: 3열 구조 Footer를 모든 페이지에 표시

**Independent Test**: 메인페이지 및 상세 페이지 하단에 Footer 정상 렌더링 확인

### Implementation for User Story 4

- [x] T013 [P] [US4] Footer 컴포넌트 생성 in `components/layout/footer.tsx` — 3열 반응형 그리드 (데스크탑 3열, 모바일 1열), 1열: 링크 모음 (GitHub, 문서, 블로그 — 임시 `#` URL), 2열: 저작권 (`© 2026 FrontGuidKit. All rights reserved.`), 3열: 소셜 아이콘 (GitHub, Twitter/X — Lucide 아이콘), 다크/라이트 테마 대응 배경색
- [x] T014 [US4] `app/layout.tsx` 수정 — SidebarInset 내부에 Footer 배치, 메인 콘텐츠와 Footer가 스크롤 영역 내에 함께 위치하도록 구성

**Checkpoint**: 모든 페이지에서 Footer 3열 구조 정상 표시

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: 빌드 검증 및 최종 정리

- [x] T015 `npm run lint` 실행 — ESLint 에러 수정
- [x] T016 `npm run build` 실행 — SSG 빌드 성공 확인, 정적 페이지 생성 확인
- [x] T017 반응형 레이아웃 점검 — 모바일/태블릿/데스크탑 카드 그리드 1열/2열/3열 확인

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — 즉시 시작
- **Foundational (Phase 2)**: Setup 완료 후 시작 — 모든 User Story 차단
- **US1 (Phase 3)**: Foundational 완료 후 시작
- **US2 (Phase 4)**: Foundational 완료 후 시작 — US1과 병렬 가능
- **US3 (Phase 5)**: Foundational 완료 후 시작 — US1/US2와 병렬 가능
- **US5 (Phase 6)**: US3와 동일 파일(top-bar.tsx) 수정 — US3 이후 순차 실행
- **US4 (Phase 7)**: Foundational 완료 후 시작 — 다른 Story와 병렬 가능
- **Polish (Phase 8)**: 모든 User Story 완료 후

### User Story Dependencies

- **US1 (P1)**: 독립 — Foundational 후 바로 시작
- **US2 (P1)**: 독립 — US1과 병렬 가능 (다른 파일)
- **US3 (P2)**: 독립 — `top-bar.tsx` 수정
- **US5 (P2)**: US3 이후 — 동일 파일(`top-bar.tsx`) 순차 수정
- **US4 (P3)**: 독립 — 다른 Story와 병렬 가능

### Parallel Opportunities

- T007 + T008: Hero 섹션과 카드 그리드 (다른 파일)
- T010 + T013: Sidebar Home과 Footer (다른 파일)
- US1 + US2 + US4: 모두 다른 파일을 수정하므로 병렬 가능

---

## Parallel Example: User Story 1

```bash
# T007과 T008을 병렬로 실행 (다른 파일):
Task: "Hero 섹션 컴포넌트 생성 in components/home/hero-section.tsx"
Task: "카테고리 카드 그리드 컴포넌트 생성 in components/home/category-grid.tsx"

# 이후 T009 순차 실행 (T007, T008에 의존):
Task: "app/page.tsx 수정 — HeroSection + CategoryGrid 렌더링"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Phase 1: Setup (T001~T003)
2. Phase 2: Foundational (T004~T006)
3. Phase 3: User Story 1 (T007~T009)
4. **STOP and VALIDATE**: 메인페이지에서 6개 카테고리, 33개 카드 정상 표시 확인
5. 배포/데모 가능

### Incremental Delivery

1. Setup + Foundational → 테마 시스템 + 폰트 크기 적용
2. US1 → 메인페이지 카드 탐색 (MVP!)
3. US2 → Home 네비게이션 추가
4. US3 + US5 → 테마 토글 + 헤더 디자인 개선
5. US4 → Footer 추가
6. Polish → 빌드 검증

---

## Notes

- [P] tasks = 다른 파일, 의존성 없음
- [Story] label = 해당 User Story 추적용
- US3과 US5는 동일 파일(`top-bar.tsx`) 수정이므로 순차 실행 필수
- 각 Checkpoint에서 독립적으로 검증 가능
- 커밋은 각 Phase 완료 시 또는 논리적 그룹 단위
