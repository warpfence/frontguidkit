# FrontGuidKit

프론트엔드 UI 컴포넌트 가이드 키트 — 와이어프레임, 용어, AI 프롬프트를 한곳에서 제공하는 개발자 참조 도구

## 주요 기능

- **와이어프레임 미리보기** — 4가지 타입(page-layout, overlay, inline, standalone) 시각화
- **용어 카드** — 컴포넌트별 핵심 용어 영문/한글 대조
- **AI 프롬프트** — 구조/동작/스타일 3단 프롬프트 템플릿, 클립보드 복사 지원
- **6개 카테고리, 33개 컴포넌트** 가이드 제공

## 카테고리

| 카테고리 | 컴포넌트 수 | 예시 |
|----------|------------|------|
| 레이아웃 | 5 | Header, Sidebar, Footer, Grid, Card Layout |
| 피드백/알림 | 5 | Modal, Toast, Alert, Tooltip, Popover |
| 탐색/이동 | 5 | Breadcrumb, Tabs, Pagination, Stepper, Dropdown Menu |
| 콘텐츠 표시 | 7 | Card, Badge, Avatar, Accordion, Table, List, Carousel |
| 입력/인터랙션 | 7 | Form, Input, Select, Checkbox, Radio, Switch, Slider |
| 데이터 시각화 | 4 | Bar Chart, Line Chart, Pie Chart, Progress |

## 기술 스택

- **Next.js 16** (App Router) + **React 19**
- **TypeScript 5**
- **Tailwind CSS v4** + **shadcn/ui** (radix-nova)
- **Lucide React** (아이콘)

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 프로젝트 구조

```
app/
├── layout.tsx                 # 루트 레이아웃
├── page.tsx                   # 홈 페이지
└── components/[slug]/page.tsx # 컴포넌트 상세 페이지

components/
├── guide/                     # 가이드 UI (와이어프레임, 용어, 프롬프트)
├── layout/                    # 사이드바, 탑바
└── ui/                        # shadcn/ui 컴포넌트

data/
├── categories.ts              # 6개 카테고리 정의
└── components.ts              # 33개 컴포넌트 데이터

lib/
├── types.ts                   # 타입 정의
├── utils.ts                   # 유틸리티
└── clipboard.ts               # 클립보드 헬퍼
```

## 명령어

```bash
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버
npm run lint     # ESLint 실행
```

## 라이선스

MIT
