# Implementation Plan: 전체 카테고리 컴포넌트 콘텐츠 확장

**Branch**: `002-extend-all-categories` | **Date**: 2026-03-09 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-extend-all-categories/spec.md`

## Summary

레이아웃 카테고리(5개 완성) 외 5개 카테고리, 28개 컴포넌트의 와이어프레임·용어·AI 프롬프트 콘텐츠를 추가한다. WireframeData 타입을 확장하여 4가지 와이어프레임 레이아웃 템플릿(page-layout, overlay, inline, standalone)을 지원하고, wireframe-preview.tsx를 리팩토링하여 카테고리별 특성에 맞는 시각화를 제공한다.

## Technical Context

**Language/Version**: TypeScript 5 / Node.js 18+
**Primary Dependencies**: Next.js 16.1.6, React 19, Tailwind CSS v4, shadcn/ui (radix-nova), Lucide React
**Storage**: 정적 TypeScript 객체 (data/components.ts)
**Testing**: 수동 브라우저 테스트 + lint (npm run lint)
**Target Platform**: 웹 (데스크톱 기준, 태블릿 대응)
**Project Type**: Web application (정적 사이트)
**Performance Goals**: 페이지 전환 즉시 반응 (CSR)
**Constraints**: 33개 컴포넌트 모두 isReady=true, 다크 테마 기반
**Scale/Scope**: 6개 카테고리 × 33개 컴포넌트, 4가지 와이어프레임 타입

## Constitution Check

*Constitution이 템플릿 상태이므로 구체적 게이트 없음. 기본 원칙 준수:*

- [x] 기존 아키텍처 패턴 유지 (정적 데이터 + CSR)
- [x] 기존 타입 시스템 하위 호환성 유지
- [x] shadcn/ui 컴포넌트 스타일 일관성 유지
- [x] 한국어 기본 제공

## Project Structure

### Documentation (this feature)

```text
specs/002-extend-all-categories/
├── plan.md              # This file
├── research.md          # 와이어프레임 타입 설계 리서치
├── data-model.md        # WireframeData 타입 확장 + 컴포넌트별 배정
├── quickstart.md        # 빠른 시작 가이드
├── contracts/
│   └── ui-contracts.md  # 와이어프레임 렌더링 계약
└── tasks.md             # (Phase 2 - /speckit.tasks에서 생성)
```

### Source Code (변경 대상)

```text
lib/
└── types.ts                          # WireframeData 타입 확장

components/
└── guide/
    └── wireframe-preview.tsx          # 4가지 와이어프레임 템플릿 지원으로 리팩토링

data/
└── components.ts                     # 28개 컴포넌트 데이터 채우기
```

**Structure Decision**: 기존 프로젝트 구조를 유지하며, 타입 1개 파일 + 컴포넌트 1개 파일 + 데이터 1개 파일만 수정. 새 파일 생성 불필요.

## Design Decisions

### D1. WireframeData 타입 확장

**변경**: `wireframeType` optional 필드 추가

```typescript
export interface WireframeData {
  wireframeType?: "page-layout" | "overlay" | "inline" | "standalone";
  highlightArea: string;
  innerElements: InnerElement[];
}
```

**근거**: 기존 5개 레이아웃 컴포넌트 데이터 변경 불필요 (미지정 시 page-layout 기본값)

### D2. wireframe-preview.tsx 리팩토링

**접근**: wireframeType에 따라 다른 레이아웃 템플릿 렌더링

```
WireframePreview
├── PageLayoutWireframe (기존 로직 추출)
├── OverlayWireframe (신규)
├── InlineWireframe (신규)
└── StandaloneWireframe (신규)
```

**근거**: 단일 파일 내에서 서브 컴포넌트로 분리. 파일 1개 유지하되 가독성 확보.

### D3. 데이터 작성 패턴

각 컴포넌트 데이터는 proposal.md의 설명을 기반으로:
- **wireframe**: 카테고리 특성에 맞는 wireframeType + 3~5개 innerElements
- **terms**: proposal.md의 컴포넌트 설명에서 4개 핵심 용어 추출
- **prompt**: 기존 패턴(구조/동작/스타일 3섹션) 준수

### D4. 카테고리별 wireframeType 배정 요약

| 카테고리 | overlay | inline | standalone |
|----------|---------|--------|-----------|
| 피드백/알림 | Modal, Toast, Dropdown | Alert, Badge, Progress | - |
| 탐색/이동 | Dropdown | Breadcrumb, Tabs, Pagination, Stepper | - |
| 콘텐츠 표시 | Tooltip, Popover | - | Card, Carousel, Accordion, Avatar, Timeline |
| 입력/인터랙션 | - | - | Form, Search, Toggle, DatePicker, FileUpload, Tag, Rating |
| 데이터 시각화 | - | - | Table, StatCard, Chart, Heatmap |

## Implementation Phases

### Phase 1: 타입 확장 (lib/types.ts)
- WireframeData에 wireframeType optional 필드 추가
- 영향: 하위 호환, 기존 코드 변경 불필요

### Phase 2: 와이어프레임 컴포넌트 리팩토링 (wireframe-preview.tsx)
- 기존 페이지 레이아웃 로직을 PageLayoutWireframe으로 추출
- OverlayWireframe 구현 (배경 + 오버레이 위치별 박스)
- InlineWireframe 구현 (간소화 페이지 + 인라인 강조)
- StandaloneWireframe 구현 (독립 구조 다이어그램)
- WireframePreview에서 wireframeType 분기 처리

### Phase 3: 피드백/알림 데이터 (5개 컴포넌트)
- Modal/Dialog, Toast/Snackbar, Alert/Banner, Badge, Progress/Skeleton
- 각각 wireframe, terms(4개), prompt 작성, isReady=true

### Phase 4: 탐색/이동 데이터 (5개 컴포넌트)
- Breadcrumb, Tabs, Pagination, Stepper, Dropdown Menu
- 각각 wireframe, terms(4개), prompt 작성, isReady=true

### Phase 5: 콘텐츠 표시 데이터 (7개 컴포넌트)
- Card, Carousel/Slider, Accordion, Tooltip, Popover, Avatar, Timeline
- 각각 wireframe, terms(4개), prompt 작성, isReady=true

### Phase 6: 입력/인터랙션 데이터 (7개 컴포넌트)
- Form/Input, Search Bar, Toggle/Switch, Date Picker, File Upload, Tag/Chip, Rating
- 각각 wireframe, terms(4개), prompt 작성, isReady=true

### Phase 7: 데이터 시각화 데이터 (4개 컴포넌트)
- Table/Data Grid, Stat Card, Chart, Heatmap
- 각각 wireframe, terms(4개), prompt 작성, isReady=true

### Phase 8: 전체 검증
- 33개 컴포넌트 모두 가이드 페이지에서 정상 표시 확인
- 와이어프레임 타입별 올바른 템플릿 렌더링 확인
- 프롬프트 복사 기능 동작 확인
- lint 통과 확인
