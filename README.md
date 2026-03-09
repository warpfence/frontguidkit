# FrontGuidKit

프론트엔드 UI 컴포넌트 가이드 키트 — 와이어프레임, 용어, AI 프롬프트를 한곳에서 제공하는 개발자 참조 도구

**Live Demo**: [frontguidkit.vercel.app](https://frontguidkit.vercel.app)

## 주요 기능

- **메인 페이지** — 히어로 섹션 + 6개 카테고리별 3열 카드 그리드
- **와이어프레임 미리보기** — 4가지 타입(page-layout, overlay, inline, standalone) 시각화 + 이미지 프리뷰
- **용어 카드** — 컴포넌트별 핵심 용어 영문/한글 대조
- **AI 프롬프트** — 구조/동작/스타일 3단 프롬프트 템플릿, 클립보드 복사 지원
- **다크/라이트 모드** — 시스템 감지 + 수동 토글 지원
- **6개 카테고리, 33개 컴포넌트** 가이드 제공

## 카테고리

| 카테고리 | 컴포넌트 수 | 예시 |
|----------|------------|------|
| 레이아웃 | 5 | Header, Hero, Navbar, Body/Content, Footer |
| 피드백/알림 | 5 | Modal, Toast, Alert, Progress/Skeleton, Badge |
| 탐색/이동 | 5 | Breadcrumb, Tabs, Pagination, Stepper, Dropdown Menu |
| 콘텐츠 표시 | 7 | Card, Accordion, Table, Carousel, Avatar, Timeline, Popover |
| 입력/인터랙션 | 7 | Form Input, Search Bar, Date Picker, File Upload, Toggle Switch, Tag/Chip, Rating |
| 데이터 시각화 | 4 | Chart, Stat Card, Heatmap, Tooltip |

## 기술 스택

- **Next.js 16** (App Router) + **React 19**
- **TypeScript 5**
- **Tailwind CSS v4** + **shadcn/ui** (radix-nova)
- **Lucide React** (아이콘)
- **next-themes** (다크/라이트 모드)

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
├── layout.tsx                 # 루트 레이아웃 (ThemeProvider, Sidebar, Footer)
├── page.tsx                   # 메인 페이지 (Hero + CategoryGrid)
└── components/[slug]/page.tsx # 컴포넌트 상세 페이지

components/
├── home/                      # 메인 페이지 (HeroSection, CategoryGrid, MiniWireframe)
├── guide/                     # 가이드 UI (와이어프레임, 용어, 프롬프트)
├── layout/                    # 레이아웃 (Sidebar, TopBar, Footer)
├── ui/                        # shadcn/ui 컴포넌트
└── theme-provider.tsx         # next-themes 래퍼

data/
├── categories.ts              # 6개 카테고리 정의
└── components.ts              # 33개 컴포넌트 데이터

lib/
├── types.ts                   # 타입 정의
├── utils.ts                   # 유틸리티
└── clipboard.ts               # 클립보드 헬퍼

public/images/components/      # 28개 컴포넌트 와이어프레임 이미지

specs/                         # 기능별 스펙 문서
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
