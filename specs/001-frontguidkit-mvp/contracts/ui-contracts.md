# UI Contracts: FrontGuidKit MVP

**Branch**: `001-frontguidkit-mvp` | **Date**: 2026-03-08

## Page Layout Contract

서비스의 전체 페이지 레이아웃 구조를 정의한다.

```
┌──────────────────────────────────────────────────┐
│ TopBar                                            │
│  [Logo: FrontGuidKit] [Description: 프론트엔드...] │
├───────────┬──────────────────────────────────────┤
│ Sidebar   │ Main Content                          │
│           │                                        │
│ Category1 │ ┌──────────────────────────────────┐  │
│  · item   │ │ Component Title + Description     │  │
│  · item   │ └──────────────────────────────────┘  │
│ Category2 │ ┌──────────────────────────────────┐  │
│  · item   │ │ Wireframe Preview                 │  │
│  · item   │ │ (highlight current component)     │  │
│ ...       │ └──────────────────────────────────┘  │
│           │ ┌────┐ ┌────┐ ┌────┐ ┌────┐        │
│           │ │Term│ │Term│ │Term│ │Term│        │
│           │ │ 1  │ │ 2  │ │ 3  │ │ 4  │        │
│           │ └────┘ └────┘ └────┘ └────┘        │
│           │ ┌──────────────────────────────────┐  │
│           │ │ AI Prompt Panel          [복사]   │  │
│           │ └──────────────────────────────────┘  │
└───────────┴──────────────────────────────────────┘
```

## Component Contracts

### TopBar

- 고정 높이, 페이지 최상단
- 좌측: 서비스 로고/이름 ("FrontGuidKit")
- 우측 또는 중앙: 서비스 설명 ("프론트엔드 개발 가이드 & AI 프롬프트")

### Sidebar

**Input**: 카테고리 목록 + 현재 선택된 컴포넌트 slug
**Output**: 네비게이션 UI

| Interaction | Behavior |
|-------------|----------|
| 카테고리 클릭 | 하위 목록 토글 (펼침/접힘) |
| 컴포넌트 클릭 | `/components/[slug]`로 이동, 활성 상태 표시 |
| 초기 로드 | 현재 URL에 해당하는 카테고리 자동 펼침 |

**Visual States**:
- 카테고리 접힘: 카테고리명 + 접힌 아이콘
- 카테고리 펼침: 카테고리명 + 펼친 아이콘 + 하위 목록
- 컴포넌트 비활성: 기본 텍스트
- 컴포넌트 활성: 배경색 하이라이트 + 볼드 텍스트

### WireframePreview

**Input**: `highlightArea` (string), `innerElements` (InnerElement[])
**Output**: 전체 페이지 레이아웃 다이어그램 + 하이라이트 영역

- 전체 페이지 구조(Header, Hero, Body, Footer 등)를 박스로 표현
- `highlightArea`에 해당하는 박스만 강조색으로 표시
- 강조된 영역 내부에 `innerElements`의 label을 position에 따라 배치

### TermCards

**Input**: `terms` (Term[4])
**Output**: 4개의 카드 UI

- 각 카드: 영어 명칭 (볼드) + 한국어 설명
- 가로 4열 그리드 (데스크톱 기준)
- 카드 간 동일한 크기와 여백

### PromptPanel

**Input**: `prompt` (string)
**Output**: 프롬프트 텍스트 + 복사 버튼

| State | Button Label | Duration |
|-------|-------------|----------|
| 기본 | "복사" (또는 복사 아이콘) | - |
| 복사 성공 | "복사됨" (체크 아이콘) | 2초 후 기본으로 복귀 |
| 복사 실패 | 텍스트 자동 선택 (폴백) | - |

### ContentPlaceholder

**Input**: 없음
**Output**: "콘텐츠 준비 중" 안내 UI

- `isReady=false`인 컴포넌트 페이지에 표시
- 안내 메시지 + 준비 중임을 나타내는 시각적 요소
