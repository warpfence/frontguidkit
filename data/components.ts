import type { Component } from "@/lib/types";

export const components: Component[] = [
  // ==================== 레이아웃 (layout) ====================
  {
    slug: "header",
    name: "Header",
    description: "페이지 최상단에 위치하는 공통 영역으로, 로고·내비게이션·CTA 버튼 등을 포함한다.",
    categoryId: "layout",
    isReady: true,
    wireframe: {
      highlightArea: "header",
      innerElements: [
        { label: "Logo", position: "left" },
        { label: "Navigation", position: "center" },
        { label: "CTA Button", position: "right" },
      ],
    },
    terms: [
      { en: "Sticky Header", ko: "스크롤 시 상단에 고정되는 헤더" },
      { en: "Hamburger Menu", ko: "모바일에서 ≡ 아이콘으로 열리는 메뉴" },
      { en: "CTA (Call To Action)", ko: "사용자 행동을 유도하는 핵심 버튼" },
      { en: "Navigation Bar", ko: "주요 페이지 링크를 나열하는 메뉴 바" },
    ],
    prompt: `다음 요구사항에 맞는 Header 컴포넌트를 구현해주세요.

## 구조
- 페이지 최상단에 고정(sticky)되는 헤더
- 좌측: 로고/서비스명
- 중앙: 내비게이션 링크 (홈, 소개, 서비스, 문의)
- 우측: CTA 버튼 ("시작하기")

## 동작
- 스크롤 시 상단에 고정 (position: sticky)
- 내비게이션 링크에 hover 효과
- CTA 버튼에 hover/active 상태 스타일

## 스타일
- 다크 배경, 흰색/밝은 텍스트
- 헤더 높이: 64px
- 좌우 패딩: 24px
- 반응형: 데스크톱 기준 (최소 1024px)`,
  },
  {
    slug: "hero",
    name: "Hero",
    description: "페이지 진입 시 가장 먼저 보이는 대형 배너 영역으로, 핵심 메시지와 CTA를 담는다.",
    categoryId: "layout",
    isReady: true,
    wireframe: {
      highlightArea: "hero",
      innerElements: [
        { label: "Headline", position: "center" },
        { label: "Subtext", position: "center" },
        { label: "CTA Button", position: "center" },
      ],
    },
    terms: [
      { en: "Hero Section", ko: "페이지 상단의 대형 배너 영역" },
      { en: "Headline", ko: "핵심 메시지를 전달하는 대형 제목 텍스트" },
      { en: "Above the Fold", ko: "스크롤 없이 바로 보이는 화면 영역" },
      { en: "Value Proposition", ko: "서비스의 핵심 가치를 전달하는 문구" },
    ],
    prompt: `다음 요구사항에 맞는 Hero 섹션을 구현해주세요.

## 구조
- Header 바로 아래에 위치하는 전체 너비 배너
- 중앙 정렬된 콘텐츠: 헤드라인, 서브텍스트, CTA 버튼
- 배경에 그라데이션 또는 패턴

## 동작
- CTA 버튼 클릭 시 특정 섹션으로 스크롤
- 부드러운 진입 애니메이션 (fade-in)

## 스타일
- 높이: 화면의 60~80vh
- 헤드라인: 48px~64px, 볼드
- 서브텍스트: 18px~24px, 연한 색상
- CTA 버튼: 강조 색상, 큰 사이즈`,
  },
  {
    slug: "navbar",
    name: "Navbar / Sidebar Nav",
    description: "사이드바 또는 상단에 위치하는 내비게이션으로, 페이지 간 이동을 담당한다.",
    categoryId: "layout",
    isReady: true,
    wireframe: {
      highlightArea: "navbar",
      innerElements: [
        { label: "Nav Links", position: "left" },
        { label: "Active Indicator", position: "left" },
        { label: "Section Divider", position: "left" },
      ],
    },
    terms: [
      { en: "Sidebar Navigation", ko: "화면 좌측에 고정되는 세로형 메뉴" },
      { en: "Active State", ko: "현재 선택된 메뉴 항목의 시각적 강조" },
      { en: "Breadcrumb", ko: "현재 페이지 위치를 경로로 보여주는 요소" },
      { en: "Collapsible Menu", ko: "펼침/접힘이 가능한 메뉴 구조" },
    ],
    prompt: `다음 요구사항에 맞는 Navbar/Sidebar Navigation을 구현해주세요.

## 구조
- 화면 좌측에 고정된 사이드바 형태
- 카테고리별 그룹핑된 링크 목록
- 각 카테고리는 펼침/접힘(accordion) 가능

## 동작
- 카테고리 클릭 시 하위 메뉴 토글
- 현재 페이지에 해당하는 링크 활성 상태 표시
- 활성 항목이 속한 카테고리는 자동으로 펼침

## 스타일
- 너비: 240~280px
- 배경: 메인 배경보다 약간 어두운 색상
- 활성 링크: 배경 하이라이트 + 좌측 인디케이터
- 호버: 배경색 변화`,
  },
  {
    slug: "body",
    name: "Body / Content",
    description: "메인 콘텐츠가 표시되는 중심 영역으로, 텍스트·이미지·카드 등 다양한 요소를 담는다.",
    categoryId: "layout",
    isReady: true,
    wireframe: {
      highlightArea: "body",
      innerElements: [
        { label: "Content Area", position: "center" },
        { label: "Section Title", position: "left" },
        { label: "Grid / Cards", position: "center" },
      ],
    },
    terms: [
      { en: "Main Content", ko: "페이지의 핵심 정보가 표시되는 중앙 영역" },
      { en: "Container", ko: "콘텐츠의 최대 너비를 제한하는 래퍼 요소" },
      { en: "Grid Layout", ko: "행과 열로 요소를 배치하는 레이아웃 방식" },
      { en: "Whitespace", ko: "요소 간 여백으로 가독성을 높이는 빈 공간" },
    ],
    prompt: `다음 요구사항에 맞는 Body/Content 영역을 구현해주세요.

## 구조
- 사이드바 오른쪽에 위치하는 메인 콘텐츠 영역
- 최대 너비가 제한된 컨테이너
- 섹션 제목 + 콘텐츠 그리드 구조

## 동작
- 스크롤 가능한 콘텐츠 영역
- 섹션 간 적절한 여백

## 스타일
- 최대 너비: 1200px (또는 가용 공간 전체)
- 좌우 패딩: 24~48px
- 섹션 간 여백: 32~48px
- 배경: 기본 배경색`,
  },
  {
    slug: "footer",
    name: "Footer",
    description: "페이지 최하단에 위치하며, 저작권·링크·연락처 등 부가 정보를 담는다.",
    categoryId: "layout",
    isReady: true,
    wireframe: {
      highlightArea: "footer",
      innerElements: [
        { label: "Links", position: "left" },
        { label: "Copyright", position: "center" },
        { label: "Social Icons", position: "right" },
      ],
    },
    terms: [
      { en: "Footer", ko: "페이지 최하단의 공통 정보 영역" },
      { en: "Sitemap Links", ko: "주요 페이지로의 링크 모음" },
      { en: "Copyright Notice", ko: "저작권 표기 문구" },
      { en: "Social Links", ko: "SNS 계정으로 연결되는 아이콘 링크" },
    ],
    prompt: `다음 요구사항에 맞는 Footer 컴포넌트를 구현해주세요.

## 구조
- 페이지 최하단에 위치
- 3열 구조: 링크 모음 | 저작권 표기 | 소셜 아이콘
- 또는 단일 행: 저작권 + 링크

## 동작
- 링크 클릭 시 해당 페이지로 이동
- 소셜 아이콘 클릭 시 새 탭에서 열기

## 스타일
- 배경: 헤더와 동일하거나 약간 어두운 색상
- 패딩: 상하 24px, 좌우 24px
- 텍스트: 작은 사이즈 (14px), 연한 색상`,
  },

  // ==================== 피드백/알림 (feedback) ====================
  {
    slug: "modal-dialog",
    name: "Modal / Dialog",
    description: "화면 위에 오버레이로 표시되는 대화 상자로, 사용자의 확인이나 입력을 요청한다.",
    categoryId: "feedback",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "toast-snackbar",
    name: "Toast / Snackbar",
    description: "짧은 알림 메시지를 일시적으로 표시하고 자동으로 사라지는 컴포넌트.",
    categoryId: "feedback",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "alert-banner",
    name: "Alert / Banner",
    description: "중요한 정보나 경고를 페이지 내에 고정 표시하는 컴포넌트.",
    categoryId: "feedback",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "badge",
    name: "Badge",
    description: "상태나 개수를 표시하는 작은 라벨로, 아이콘이나 텍스트 위에 부착된다.",
    categoryId: "feedback",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "progress-skeleton",
    name: "Progress Bar / Skeleton",
    description: "로딩 상태나 진행률을 시각적으로 표현하는 컴포넌트.",
    categoryId: "feedback",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },

  // ==================== 탐색/이동 (navigation) ====================
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    description: "현재 페이지의 위치를 경로 형태로 보여주는 내비게이션 보조 요소.",
    categoryId: "navigation",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "tabs",
    name: "Tabs",
    description: "동일 영역 내에서 여러 뷰를 탭으로 전환할 수 있게 하는 컴포넌트.",
    categoryId: "navigation",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "pagination",
    name: "Pagination",
    description: "목록을 여러 페이지로 나누어 이동할 수 있게 하는 컴포넌트.",
    categoryId: "navigation",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "stepper",
    name: "Stepper",
    description: "여러 단계의 프로세스를 순서대로 표시하고 진행 상태를 보여주는 컴포넌트.",
    categoryId: "navigation",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "dropdown-menu",
    name: "Dropdown Menu",
    description: "클릭 시 아래로 펼쳐지는 선택지 목록을 제공하는 메뉴.",
    categoryId: "navigation",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },

  // ==================== 콘텐츠 표시 (content) ====================
  {
    slug: "card",
    name: "Card",
    description: "관련 정보를 하나의 박스에 묶어 표시하는 범용 컨테이너 컴포넌트.",
    categoryId: "content",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "carousel-slider",
    name: "Carousel / Slider",
    description: "여러 콘텐츠를 좌우로 슬라이드하며 탐색할 수 있는 컴포넌트.",
    categoryId: "content",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "accordion",
    name: "Accordion",
    description: "제목을 클릭하면 본문이 펼쳐지는 접이식 콘텐츠 컴포넌트.",
    categoryId: "content",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    description: "요소에 마우스를 올리면 나타나는 짧은 설명 텍스트.",
    categoryId: "content",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "popover",
    name: "Popover",
    description: "클릭 시 요소 근처에 표시되는 작은 정보 패널.",
    categoryId: "content",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "avatar",
    name: "Avatar",
    description: "사용자 프로필 이미지를 원형 또는 사각형으로 표시하는 컴포넌트.",
    categoryId: "content",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "timeline",
    name: "Timeline",
    description: "이벤트나 단계를 시간 순서대로 시각적으로 나열하는 컴포넌트.",
    categoryId: "content",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },

  // ==================== 입력/인터랙션 (input) ====================
  {
    slug: "form-input",
    name: "Form / Input",
    description: "사용자 데이터를 입력받는 텍스트 필드, 체크박스, 라디오 등의 폼 요소.",
    categoryId: "input",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "search-bar",
    name: "Search Bar",
    description: "키워드를 입력하여 콘텐츠를 검색할 수 있는 입력 컴포넌트.",
    categoryId: "input",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "toggle-switch",
    name: "Toggle / Switch",
    description: "켜기/끄기 두 가지 상태를 전환하는 스위치 컴포넌트.",
    categoryId: "input",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "date-picker",
    name: "Date Picker",
    description: "캘린더 UI를 통해 날짜를 선택할 수 있는 입력 컴포넌트.",
    categoryId: "input",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "file-upload",
    name: "File Upload",
    description: "파일을 선택하거나 드래그 앤 드롭으로 업로드하는 컴포넌트.",
    categoryId: "input",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "tag-chip",
    name: "Tag / Chip",
    description: "키워드나 카테고리를 작은 라벨로 표시하고 제거할 수 있는 컴포넌트.",
    categoryId: "input",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "rating",
    name: "Rating",
    description: "별점 등으로 평가를 입력하거나 표시하는 컴포넌트.",
    categoryId: "input",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },

  // ==================== 데이터 시각화 (data-viz) ====================
  {
    slug: "table-data-grid",
    name: "Table / Data Grid",
    description: "행과 열로 구성된 표 형태로 데이터를 정렬·필터·표시하는 컴포넌트.",
    categoryId: "data-viz",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "stat-card",
    name: "Stat Card",
    description: "주요 지표(KPI)를 숫자와 레이블로 강조하여 보여주는 카드.",
    categoryId: "data-viz",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "chart",
    name: "Chart",
    description: "데이터를 막대·선·파이 등의 시각적 그래프로 표현하는 컴포넌트.",
    categoryId: "data-viz",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
  {
    slug: "heatmap",
    name: "Heatmap",
    description: "데이터의 밀도나 강도를 색상 농도로 시각화하는 컴포넌트.",
    categoryId: "data-viz",
    isReady: false,
    wireframe: null,
    terms: [],
    prompt: "",
  },
];

export function getComponentBySlug(slug: string): Component | undefined {
  return components.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return components.map((c) => c.slug);
}
