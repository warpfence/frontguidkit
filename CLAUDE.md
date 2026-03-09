# FrontGuidKit Development Guidelines

## 기술 스택
- TypeScript 5 / Node.js 18+
- Next.js 16.1.6 (App Router) + React 19
- Tailwind CSS v4 + shadcn/ui (radix-nova) + Lucide React
- next-themes (다크/라이트 모드)
- 정적 TypeScript 객체 기반 데이터 (DB 없음)

## 프로젝트 구조

```text
app/                          # Next.js App Router 페이지
  layout.tsx                  # 루트 레이아웃 (ThemeProvider, Sidebar, Footer)
  page.tsx                    # 메인 페이지 (Hero + CategoryGrid)
  components/[slug]/page.tsx  # 컴포넌트 상세 동적 라우트
components/
  home/                       # 메인 페이지 컴포넌트 (HeroSection, CategoryGrid, MiniWireframe)
  guide/                      # 가이드 UI 컴포넌트 (wireframe, terms, prompt)
  layout/                     # 레이아웃 컴포넌트 (sidebar, top-bar, footer)
  ui/                         # shadcn/ui 기본 컴포넌트
  theme-provider.tsx          # next-themes ThemeProvider 래퍼
data/
  categories.ts               # 6개 카테고리 정의
  components.ts               # 33개 컴포넌트 데이터
lib/
  types.ts                    # WireframeData, Component, Category 등 타입 정의
  utils.ts                    # cn() 유틸리티
  clipboard.ts                # 클립보드 헬퍼
public/images/components/     # 28개 컴포넌트 와이어프레임 이미지
specs/                        # 기능별 스펙 문서
```

## 명령어

```bash
npm run dev       # 개발 서버
npm run build     # 프로덕션 빌드
npm run lint      # ESLint
```

## 코드 컨벤션
- TypeScript strict 모드 준수
- shadcn/ui 컴포넌트 적극 활용 (직접 구현 최소화)
- 컴포넌트 데이터는 `data/components.ts`에 정적 객체로 관리
- 와이어프레임 타입: `page-layout`, `overlay`, `inline`, `standalone`
- `isReady=true` 조건: wireframe(non-null), terms(4개), prompt(non-empty)
- 컴포넌트 이미지: `public/images/components/{slug}.png` 경로, `component.image` 필드로 매핑

## 레이아웃 구조
- TopBar: sticky 고정, 테마 토글 (Sun/Moon), 폰트 크기 19.2px 유지
- Sidebar: 홈 아이콘 + 카테고리별 collapsible 메뉴
- 콘텐츠: SidebarInset 내부 overflow-y-auto 영역에서만 스크롤
- Footer: 3열 구조 (링크, 저작권, 공백)
- 글로벌 폰트: 17.28px (헤더 제외)

## 배포
- Vercel (https://frontguidkit.vercel.app)
- main 브랜치 push 시 자동 배포

## 브랜치 히스토리
- `001-frontguidkit-mvp`: MVP — 레이아웃 카테고리 5개 컴포넌트
- `002-extend-all-categories`: 전체 6개 카테고리, 33개 컴포넌트 확장
- `003-main-page`: 메인페이지, 다크모드, 이미지, 푸터, 디자인 개선

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->
