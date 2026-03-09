# Data Model: FrontGuidKit 메인페이지

**Feature**: 003-main-page
**Date**: 2026-03-09

## Entity Changes

이 기능은 기존 데이터 모델을 변경하지 않는다. 기존 정적 TypeScript 객체를 그대로 활용한다.

### 기존 엔티티 (변경 없음)

#### Category
| 속성 | 설명 | 메인페이지 활용 |
|------|------|----------------|
| id | 카테고리 식별자 | 섹션 구분 |
| name | 카테고리 한글명 | 섹션 타이틀 텍스트 |
| icon | Lucide 아이콘명 | 섹션 타이틀 아이콘 |
| order | 정렬 순서 | 섹션 표시 순서 |
| components | 소속 컴포넌트 배열 | 카드 그리드 데이터 소스 |

#### ComponentData
| 속성 | 설명 | 메인페이지 활용 |
|------|------|----------------|
| slug | URL 경로 식별자 | 카드 클릭 시 이동 경로 |
| name | 컴포넌트명 | 카드 타이틀 |
| categoryId | 소속 카테고리 ID | 카테고리별 그룹핑 |
| isReady | 가이드 준비 상태 | 카드 활성/비활성 표시 |

### 신규 엔티티

#### Theme (런타임 상태)
| 속성 | 설명 | 비고 |
|------|------|------|
| mode | `"dark"` \| `"light"` \| `"system"` | next-themes가 관리 |
| resolvedTheme | 실제 적용 테마 | 시스템 감지 결과 반영 |

- Theme은 별도 데이터 파일이 아닌 next-themes의 Context 상태로 관리됨
- localStorage에 자동 저장/복원됨

## Validation Rules

- 카테고리의 components가 빈 배열인 경우 해당 카테고리 섹션 비표시
- 테마 값은 `"dark"`, `"light"`, `"system"` 중 하나만 허용

## State Transitions

```
Theme State:
  [초기 접속] → system (OS 설정 감지) → dark 또는 light
  [토글 클릭] → dark ↔ light
  [페이지 이동] → 현재 선택 유지 (localStorage)
```
