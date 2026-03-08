# Data Model: 전체 카테고리 컴포넌트 콘텐츠 확장

**Branch**: `002-extend-all-categories` | **Date**: 2026-03-09

## Entity Changes

### WireframeData (수정)

기존 필드에 `wireframeType` 추가.

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| wireframeType | `"page-layout" \| "overlay" \| "inline" \| "standalone"` | 선택 (기본: `page-layout`) | 와이어프레임 렌더링 템플릿 |
| highlightArea | `string` | 필수 | 강조할 영역 ID |
| innerElements | `InnerElement[]` | 필수 | 내부 구성 요소 목록 |

### InnerElement (변경 없음)

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| label | `string` | 필수 | 요소 라벨 |
| position | `"left" \| "center" \| "right"` | 필수 | 위치 힌트 |

### Component (변경 없음 — 데이터만 업데이트)

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| slug | `string` | 필수 | URL용 고유 ID (kebab-case) |
| name | `string` | 필수 | 영문 컴포넌트 이름 |
| description | `string` | 필수 | 한국어 한 줄 설명 |
| categoryId | `string` | 필수 | 카테고리 참조 |
| isReady | `boolean` | 필수 | 콘텐츠 완성 여부 |
| wireframe | `WireframeData \| null` | 필수 | 와이어프레임 데이터 |
| terms | `Term[]` | 필수 | 핵심 용어 (4개) |
| prompt | `string` | 필수 | AI 프롬프트 템플릿 |

### Term (변경 없음)

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| en | `string` | 필수 | 영어 명칭 |
| ko | `string` | 필수 | 한국어 설명 |

### Category (변경 없음)

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| id | `string` | 필수 | 고유 ID |
| name | `string` | 필수 | 한국어 이름 |
| icon | `string` | 필수 | Lucide 아이콘명 |
| order | `number` | 필수 | 정렬 순서 |
| components | `Component[]` | 필수 | 소속 컴포넌트들 |

## Validation Rules

### 컴포넌트 데이터 완성 조건 (isReady=true)
- wireframe MUST NOT be null
- wireframe.innerElements MUST have 2~6 items
- terms MUST have exactly 4 items
- prompt MUST be non-empty string (최소 50자)
- wireframe.wireframeType SHOULD be set (미지정 시 "page-layout")

### wireframeType별 highlightArea 매핑

| wireframeType | 허용 highlightArea 값 |
|---------------|---------------------|
| `page-layout` | header, hero, navbar, body, footer |
| `overlay` | modal, toast, dropdown, tooltip, popover |
| `inline` | top, middle, bottom |
| `standalone` | main (단일 영역) |

## 컴포넌트별 wireframeType 배정

### 피드백/알림 (feedback)
| slug | wireframeType | highlightArea |
|------|--------------|---------------|
| modal-dialog | overlay | modal |
| toast-snackbar | overlay | toast |
| alert-banner | inline | top |
| badge | inline | top |
| progress-skeleton | inline | middle |

### 탐색/이동 (navigation)
| slug | wireframeType | highlightArea |
|------|--------------|---------------|
| breadcrumb | inline | top |
| tabs | inline | top |
| pagination | inline | bottom |
| stepper | inline | top |
| dropdown-menu | overlay | dropdown |

### 콘텐츠 표시 (content)
| slug | wireframeType | highlightArea |
|------|--------------|---------------|
| card | standalone | main |
| carousel-slider | standalone | main |
| accordion | standalone | main |
| tooltip | overlay | tooltip |
| popover | overlay | popover |
| avatar | standalone | main |
| timeline | standalone | main |

### 입력/인터랙션 (input)
| slug | wireframeType | highlightArea |
|------|--------------|---------------|
| form-input | standalone | main |
| search-bar | standalone | main |
| toggle-switch | standalone | main |
| date-picker | standalone | main |
| file-upload | standalone | main |
| tag-chip | standalone | main |
| rating | standalone | main |

### 데이터 시각화 (data-viz)
| slug | wireframeType | highlightArea |
|------|--------------|---------------|
| table-data-grid | standalone | main |
| stat-card | standalone | main |
| chart | standalone | main |
| heatmap | standalone | main |
