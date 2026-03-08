# UI Contracts: 전체 카테고리 컴포넌트 콘텐츠 확장

**Branch**: `002-extend-all-categories` | **Date**: 2026-03-09

## 1. WireframePreview 컴포넌트 계약

### 입력 (Props)
```
WireframePreviewProps {
  wireframe: WireframeData  // wireframeType 포함
}
```

### 렌더링 동작

| wireframeType | 렌더링 형태 | 구성 |
|---------------|------------|------|
| `page-layout` (기본) | 전체 페이지 스택 | Header → Hero → Navbar+Body → Footer, highlightArea 일치 영역 강조 |
| `overlay` | 페이지 배경 + 오버레이 | 반투명 배경 위에 highlightArea 위치에 맞는 오버레이 박스, innerElements 내부 표시 |
| `inline` | 간소화된 페이지 구조 | Header + 콘텐츠 + Footer 스택에서 highlightArea(top/middle/bottom)에 인라인 요소 강조 |
| `standalone` | 독립 구조 다이어그램 | 단일 컴포넌트의 내부 구조만 표시, innerElements를 구조적으로 배치 |

### 스타일 계약
- 모든 와이어프레임 타입은 동일한 외부 래퍼 사용: `rounded-lg border border-border bg-muted/30`
- 강조 영역: `bg-primary/15 ring-2 ring-inset ring-primary`
- innerElement 라벨: `rounded bg-primary/20 px-2 py-1 text-xs font-medium text-primary`
- 비강조 영역: `bg-muted/20` + `text-xs text-muted-foreground/60`

---

## 2. overlay 와이어프레임 상세 계약

### 구조
```
┌─ 외부 래퍼 (rounded-lg border) ─────────────────┐
│  ┌─ 배경 (bg-muted/10, relative) ──────────────┐ │
│  │                                               │ │
│  │  ┌─ 오버레이 박스 (absolute, 강조) ────────┐ │ │
│  │  │  innerElements 배치                      │ │ │
│  │  └────────────────────────────────────────┘ │ │
│  │                                               │ │
│  └───────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────┘
```

### highlightArea별 오버레이 위치
| highlightArea | 오버레이 위치 | 크기 |
|---------------|-------------|------|
| modal | 중앙 | 60% 너비, 자동 높이 |
| toast | 우측 하단 | 작은 크기, 고정 너비 |
| dropdown | 상단 좌측 (트리거 아래) | 중간 크기 |
| tooltip | 상단 중앙 (타겟 위) | 소형, 한 줄 |
| popover | 상단 우측 (타겟 옆) | 중형, 다중 행 |

---

## 3. inline 와이어프레임 상세 계약

### 구조
```
┌─ 외부 래퍼 ─────────────────────────────────────┐
│  Header bar (h-8, border-b)                       │
│  ─────────────────────────────────────────────── │
│  [top position: 강조 영역 or 빈 공간]            │
│  ─────────────────────────────────────────────── │
│  [middle position: 콘텐츠 영역 or 강조 영역]     │
│  ─────────────────────────────────────────────── │
│  [bottom position: 빈 공간 or 강조 영역]          │
│  ─────────────────────────────────────────────── │
│  Footer bar (h-6, border-t)                       │
└────────────────────────────────────────────────────┘
```

### highlightArea별 강조 위치
| highlightArea | 강조 위치 |
|---------------|----------|
| top | Header 바로 아래 |
| middle | 콘텐츠 중앙 |
| bottom | Footer 바로 위 |

---

## 4. standalone 와이어프레임 상세 계약

### 구조
```
┌─ 외부 래퍼 ─────────────────────────────────────┐
│  ┌─ 컴포넌트 영역 (강조, 전체 크기) ──────────┐ │
│  │  innerElements를 구조적으로 배치              │ │
│  │  position: left → 좌측 정렬                   │ │
│  │  position: center → 중앙 정렬                 │ │
│  │  position: right → 우측 정렬                  │ │
│  │  여러 행으로 자동 배치 (flex-wrap)            │ │
│  └────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────┘
```

- innerElements가 3개 이하: 단일 행 배치
- innerElements가 4개 이상: 2행 배치 (flex-wrap)

---

## 5. 기존 컴포넌트 계약 (변경 없음)

### TermCards
- 입력: `Term[]` (정확히 4개)
- 출력: 반응형 그리드 (1→2→4열), 각 카드에 en(큰 글씨) + ko(설명)

### PromptPanel
- 입력: `string` (멀티라인 프롬프트)
- 출력: 코드 블록 형태 + 복사 버튼
- 동작: 복사 시 "복사됨" 상태 2초 유지

### ContentPlaceholder
- 조건: `isReady === false`일 때만 표시
- 이 피처 완료 후에는 모든 컴포넌트가 `isReady === true`이므로 사용되지 않아야 함
