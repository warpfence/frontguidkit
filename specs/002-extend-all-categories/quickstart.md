# Quickstart: 전체 카테고리 컴포넌트 콘텐츠 확장

**Branch**: `002-extend-all-categories` | **Date**: 2026-03-09

## 빠른 시작

### 1. 브랜치 전환
```bash
git checkout 002-extend-all-categories
```

### 2. 개발 서버 실행
```bash
npm run dev
```

### 3. 변경 대상 파일

#### 타입 확장
- `lib/types.ts` — WireframeData에 wireframeType 필드 추가

#### 와이어프레임 컴포넌트 확장
- `components/guide/wireframe-preview.tsx` — 4가지 와이어프레임 템플릿 렌더링 지원

#### 데이터 파일 업데이트
- `data/components.ts` — 28개 컴포넌트의 wireframe, terms, prompt, isReady 업데이트

### 4. 작업 순서 권장

1. **타입 확장** → WireframeData에 wireframeType 추가
2. **와이어프레임 컴포넌트** → overlay, inline, standalone 템플릿 구현
3. **데이터 작성 (카테고리별)** → 피드백 → 탐색 → 콘텐츠 → 입력 → 데이터 시각화
4. **검증** → 모든 33개 컴포넌트 페이지 수동 확인

### 5. 검증 체크리스트

- [ ] `http://localhost:3000/components/modal-dialog` — 오버레이 와이어프레임 표시
- [ ] `http://localhost:3000/components/breadcrumb` — 인라인 와이어프레임 표시
- [ ] `http://localhost:3000/components/card` — 독립형 와이어프레임 표시
- [ ] 모든 33개 slug에 대해 "콘텐츠 준비 중" 플레이스홀더가 나타나지 않음
- [ ] 프롬프트 복사 기능 정상 동작 (28개 신규 컴포넌트)
