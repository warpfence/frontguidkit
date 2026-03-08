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
    isReady: true,
    wireframe: {
      wireframeType: "overlay",
      highlightArea: "modal",
      innerElements: [
        { label: "Header (Title + Close)", position: "left" },
        { label: "Body (Content)", position: "center" },
        { label: "Footer (Cancel + Confirm)", position: "right" },
      ],
    },
    terms: [
      { en: "Modal", ko: "배경을 비활성화하고 포커스를 독점하는 팝업 창" },
      { en: "Dialog", ko: "사용자에게 확인·입력을 요청하는 대화 상자" },
      { en: "Backdrop / Overlay", ko: "모달 뒤에 깔리는 반투명 배경 레이어" },
      { en: "Z-index", ko: "요소의 쌓임 순서를 결정하는 CSS 속성" },
    ],
    prompt: `다음 요구사항에 맞는 Modal/Dialog 컴포넌트를 구현해주세요.

## 구조
- 화면 중앙에 표시되는 오버레이 팝업
- 반투명 배경(Backdrop) 위에 모달 박스
- 모달 내부: Header(제목 + 닫기 버튼), Body(콘텐츠), Footer(취소/확인 버튼)

## 동작
- 열기/닫기 상태 관리
- Backdrop 클릭 시 모달 닫힘
- ESC 키로 모달 닫기
- 모달 열릴 때 배경 스크롤 잠금
- 포커스 트래핑 (모달 내부에서만 탭 이동)

## 스타일
- 모달 최대 너비: 500px
- 둥근 모서리: 8~12px
- 그림자: 깊은 box-shadow
- 진입/퇴장 애니메이션 (fade + scale)`,
  },
  {
    slug: "toast-snackbar",
    name: "Toast / Snackbar",
    description: "짧은 알림 메시지를 일시적으로 표시하고 자동으로 사라지는 컴포넌트.",
    categoryId: "feedback",
    isReady: true,
    wireframe: {
      wireframeType: "overlay",
      highlightArea: "toast",
      innerElements: [
        { label: "Icon", position: "left" },
        { label: "Message", position: "center" },
        { label: "Close Button", position: "right" },
      ],
    },
    terms: [
      { en: "Toast", ko: "화면 모서리에 일시적으로 나타나는 알림 메시지" },
      { en: "Snackbar", ko: "하단에 나타나는 간략한 피드백 메시지 바" },
      { en: "Auto-dismiss", ko: "일정 시간 후 자동으로 사라지는 동작" },
      { en: "Stacking", ko: "여러 토스트가 쌓여서 표시되는 방식" },
    ],
    prompt: `다음 요구사항에 맞는 Toast/Snackbar 컴포넌트를 구현해주세요.

## 구조
- 화면 우측 하단(또는 상단)에 표시되는 알림 바
- 아이콘 + 메시지 텍스트 + 닫기 버튼
- 여러 토스트가 동시에 쌓일 수 있는 구조

## 동작
- 3~5초 후 자동 사라짐 (auto-dismiss)
- 닫기 버튼으로 즉시 제거
- 마우스 호버 시 타이머 일시 정지
- 새 토스트는 기존 토스트 위/아래에 쌓임
- 타입별 구분: success, error, warning, info

## 스타일
- 고정 너비: 320~400px
- 둥근 모서리: 8px
- 타입별 색상: 성공(초록), 오류(빨강), 경고(노랑), 정보(파랑)
- 진입/퇴장 애니메이션 (slide-in/fade-out)`,
  },
  {
    slug: "alert-banner",
    name: "Alert / Banner",
    description: "중요한 정보나 경고를 페이지 내에 고정 표시하는 컴포넌트.",
    categoryId: "feedback",
    isReady: true,
    wireframe: {
      wireframeType: "inline",
      highlightArea: "top",
      innerElements: [
        { label: "Icon", position: "left" },
        { label: "Message", position: "center" },
        { label: "Action / Close", position: "right" },
      ],
    },
    terms: [
      { en: "Alert", ko: "상태 정보를 컬러와 아이콘으로 전달하는 인라인 알림" },
      { en: "Banner", ko: "페이지 상단에 걸쳐 표시되는 전체 너비 알림" },
      { en: "Severity Level", ko: "info, success, warning, error 등 알림 심각도 구분" },
      { en: "Dismissible", ko: "사용자가 닫기 버튼으로 제거할 수 있는 상태" },
    ],
    prompt: `다음 요구사항에 맞는 Alert/Banner 컴포넌트를 구현해주세요.

## 구조
- 페이지 콘텐츠 내에 인라인으로 표시되는 알림 박스
- 아이콘 + 제목(선택) + 메시지 + 액션 버튼/닫기 버튼
- 전체 너비 배너 형태도 지원

## 동작
- 닫기 버튼 클릭 시 알림 제거 (dismissible)
- 타입별 상태 구분: info, success, warning, error
- 액션 버튼 클릭 시 콜백 실행

## 스타일
- 전체 너비, 패딩: 12~16px
- 둥근 모서리: 6~8px
- 타입별 배경색/테두리색/아이콘 색 구분
- 아이콘: 타입에 맞는 Lucide 아이콘`,
  },
  {
    slug: "badge",
    name: "Badge",
    description: "상태나 개수를 표시하는 작은 라벨로, 아이콘이나 텍스트 위에 부착된다.",
    categoryId: "feedback",
    isReady: true,
    wireframe: {
      wireframeType: "inline",
      highlightArea: "top",
      innerElements: [
        { label: "Icon + Badge Count", position: "left" },
        { label: "Text + Dot Badge", position: "center" },
        { label: "Status Badge", position: "right" },
      ],
    },
    terms: [
      { en: "Badge", ko: "요소 위에 작은 라벨로 상태나 숫자를 표시하는 UI" },
      { en: "Notification Dot", ko: "알림 존재를 알리는 작은 점 형태의 표시" },
      { en: "Counter Badge", ko: "읽지 않은 항목 수를 숫자로 보여주는 뱃지" },
      { en: "Status Indicator", ko: "온라인/오프라인 등 상태를 컬러로 표시하는 요소" },
    ],
    prompt: `다음 요구사항에 맞는 Badge 컴포넌트를 구현해주세요.

## 구조
- 아이콘, 버튼, 텍스트 요소 위에 부착되는 작은 라벨
- 숫자 뱃지: 개수를 표시 (99+ 처리)
- 점 뱃지: 알림 존재만 표시하는 작은 원
- 상태 뱃지: 텍스트 라벨이 포함된 컬러 뱃지

## 동작
- 숫자가 0일 때 뱃지 숨김
- 최대 숫자 초과 시 "99+" 표시
- 부모 요소의 우측 상단에 위치

## 스타일
- 크기: 16~24px (숫자), 8~12px (점)
- 둥근 모서리: 원형 (border-radius: 50%)
- 색상: 빨강(알림), 초록(성공), 파랑(정보), 회색(기본)
- 텍스트: 10~12px, 볼드, 흰색`,
  },
  {
    slug: "progress-skeleton",
    name: "Progress Bar / Skeleton",
    description: "로딩 상태나 진행률을 시각적으로 표현하는 컴포넌트.",
    categoryId: "feedback",
    isReady: true,
    wireframe: {
      wireframeType: "inline",
      highlightArea: "middle",
      innerElements: [
        { label: "Progress Track", position: "left" },
        { label: "Fill Bar", position: "center" },
        { label: "Skeleton Block", position: "right" },
      ],
    },
    terms: [
      { en: "Progress Bar", ko: "작업 진행률을 막대 형태로 시각화하는 컴포넌트" },
      { en: "Skeleton Screen", ko: "콘텐츠 로딩 중 레이아웃 윤곽을 미리 보여주는 UI" },
      { en: "Shimmer Effect", ko: "스켈레톤 위에 반짝이는 애니메이션 효과" },
      { en: "Loading State", ko: "데이터를 불러오는 중임을 나타내는 상태" },
    ],
    prompt: `다음 요구사항에 맞는 Progress Bar/Skeleton 컴포넌트를 구현해주세요.

## 구조
- Progress Bar: 트랙(배경) + 채움 바(진행률 표시)
- Skeleton: 콘텐츠 자리를 차지하는 회색 블록 (텍스트, 이미지, 카드 형태)
- 퍼센트 라벨 표시 (선택)

## 동작
- Progress Bar: 0~100% 값에 따라 채움 바 너비 변화
- Skeleton: shimmer 애니메이션으로 로딩 상태 표현
- 완료 시 실제 콘텐츠로 대체

## 스타일
- Progress Bar 높이: 4~8px, 둥근 모서리
- 트랙 색상: 연한 회색, 채움 색상: 강조 색상
- Skeleton: 연한 회색 배경 + 좌→우 shimmer 그라데이션 애니메이션
- 둥근 모서리: 4~8px`,
  },

  // ==================== 탐색/이동 (navigation) ====================
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    description: "현재 페이지의 위치를 경로 형태로 보여주는 내비게이션 보조 요소.",
    categoryId: "navigation",
    isReady: true,
    wireframe: {
      wireframeType: "inline",
      highlightArea: "top",
      innerElements: [
        { label: "Home", position: "left" },
        { label: "/ Category", position: "center" },
        { label: "/ Current Page", position: "center" },
      ],
    },
    terms: [
      { en: "Breadcrumb", ko: "현재 위치를 상위 경로부터 순서대로 보여주는 내비게이션" },
      { en: "Path Hierarchy", ko: "페이지 간 계층 구조를 나타내는 경로 표현" },
      { en: "Separator", ko: "경로 항목 사이를 구분하는 기호 (/, >, →)" },
      { en: "Current Page Indicator", ko: "현재 위치한 페이지를 강조하는 마지막 항목" },
    ],
    prompt: `다음 요구사항에 맞는 Breadcrumb 컴포넌트를 구현해주세요.

## 구조
- 페이지 상단, Header 아래에 위치하는 경로 표시
- Home > Category > Subcategory > Current Page 형태
- 각 항목은 해당 페이지로 이동하는 링크
- 마지막 항목(현재 페이지)은 링크 없이 텍스트만 표시

## 동작
- 각 경로 항목 클릭 시 해당 페이지로 이동
- 현재 페이지는 클릭 불가 (비활성)
- 경로가 길 때 중간 항목을 "..." 으로 축약

## 스타일
- 텍스트 크기: 14px
- 구분자: "/" 또는 ">" 아이콘
- 링크 색상: muted, 호버 시 primary
- 현재 페이지: 볼드, foreground 색상`,
  },
  {
    slug: "tabs",
    name: "Tabs",
    description: "동일 영역 내에서 여러 뷰를 탭으로 전환할 수 있게 하는 컴포넌트.",
    categoryId: "navigation",
    isReady: true,
    wireframe: {
      wireframeType: "inline",
      highlightArea: "top",
      innerElements: [
        { label: "Tab 1 (Active)", position: "left" },
        { label: "Tab 2", position: "center" },
        { label: "Tab 3", position: "center" },
      ],
    },
    terms: [
      { en: "Tabs", ko: "같은 공간에서 콘텐츠를 전환하는 탭 UI" },
      { en: "Tab Panel", ko: "선택된 탭에 연결된 콘텐츠 영역" },
      { en: "Active Tab", ko: "현재 선택되어 강조된 탭 항목" },
      { en: "Tab Indicator", ko: "활성 탭 아래에 표시되는 하이라이트 바" },
    ],
    prompt: `다음 요구사항에 맞는 Tabs 컴포넌트를 구현해주세요.

## 구조
- 콘텐츠 영역 상단에 가로로 나열되는 탭 목록
- 각 탭은 고유한 라벨과 연결된 패널을 가짐
- 탭 목록 아래에 선택된 탭의 콘텐츠 패널 표시

## 동작
- 탭 클릭 시 해당 패널로 즉시 전환
- 활성 탭에 인디케이터(하단 바) 표시
- 키보드: 좌우 화살표로 탭 이동, Enter로 선택
- 비활성 패널은 숨김 처리

## 스타일
- 탭 높이: 40~48px
- 활성 탭: 볼드 텍스트 + 하단 2px 인디케이터 (primary 색상)
- 비활성 탭: muted 텍스트, 호버 시 배경색 변화
- 탭 간 구분선: 하단 1px border`,
  },
  {
    slug: "pagination",
    name: "Pagination",
    description: "목록을 여러 페이지로 나누어 이동할 수 있게 하는 컴포넌트.",
    categoryId: "navigation",
    isReady: true,
    wireframe: {
      wireframeType: "inline",
      highlightArea: "bottom",
      innerElements: [
        { label: "← Previous", position: "left" },
        { label: "1 2 3 ... 10", position: "center" },
        { label: "Next →", position: "right" },
      ],
    },
    terms: [
      { en: "Pagination", ko: "긴 목록을 페이지 단위로 나누어 탐색하는 UI" },
      { en: "Page Size", ko: "한 페이지에 표시되는 항목 수" },
      { en: "Current Page", ko: "현재 보고 있는 페이지 번호" },
      { en: "Ellipsis Overflow", ko: "중간 페이지를 '...'으로 축약하는 표시 방식" },
    ],
    prompt: `다음 요구사항에 맞는 Pagination 컴포넌트를 구현해주세요.

## 구조
- 목록 하단에 위치하는 페이지 네비게이션
- 이전/다음 버튼 + 페이지 번호 목록
- 페이지 수가 많을 때 중간을 "..." 으로 축약

## 동작
- 페이지 번호 클릭 시 해당 페이지로 이동
- 이전/다음 버튼으로 1페이지씩 이동
- 첫 페이지에서 이전 버튼 비활성화
- 마지막 페이지에서 다음 버튼 비활성화
- 현재 페이지 강조 표시

## 스타일
- 버튼 크기: 32~40px 정사각형
- 현재 페이지: primary 배경 + 흰색 텍스트
- 호버: 연한 배경색
- 비활성: opacity 50%, cursor not-allowed`,
  },
  {
    slug: "stepper",
    name: "Stepper",
    description: "여러 단계의 프로세스를 순서대로 표시하고 진행 상태를 보여주는 컴포넌트.",
    categoryId: "navigation",
    isReady: true,
    wireframe: {
      wireframeType: "inline",
      highlightArea: "top",
      innerElements: [
        { label: "Step 1 ✓", position: "left" },
        { label: "— Step 2 (Active) —", position: "center" },
        { label: "Step 3 ○", position: "right" },
      ],
    },
    terms: [
      { en: "Stepper", ko: "다단계 프로세스의 진행 상황을 단계별로 보여주는 UI" },
      { en: "Step Indicator", ko: "각 단계의 완료/현재/미완료 상태를 표시하는 아이콘" },
      { en: "Connector", ko: "단계 사이를 연결하는 선" },
      { en: "Progress Step", ko: "전체 흐름에서 현재 위치를 나타내는 단계 항목" },
    ],
    prompt: `다음 요구사항에 맞는 Stepper 컴포넌트를 구현해주세요.

## 구조
- 폼 또는 온보딩 상단에 위치하는 단계 표시기
- 각 단계: 번호/아이콘 + 라벨 + 연결선(Connector)
- 단계 상태: 완료(체크), 현재(강조), 미완료(비활성)

## 동작
- 현재 단계 강조 표시
- 완료된 단계에 체크 아이콘 표시
- 완료된 단계 클릭 시 해당 단계로 돌아가기 (선택)
- 미완료 단계는 클릭 불가

## 스타일
- 수평 배치, 단계 간 연결선
- 완료: 체크 아이콘, primary 색상
- 현재: 숫자 표시, primary 배경, 볼드
- 미완료: 숫자 표시, muted 색상
- 연결선: 완료 구간은 primary, 미완료 구간은 muted`,
  },
  {
    slug: "dropdown-menu",
    name: "Dropdown Menu",
    description: "클릭 시 아래로 펼쳐지는 선택지 목록을 제공하는 메뉴.",
    categoryId: "navigation",
    isReady: true,
    wireframe: {
      wireframeType: "overlay",
      highlightArea: "dropdown",
      innerElements: [
        { label: "Menu Item 1", position: "left" },
        { label: "Divider", position: "center" },
        { label: "Menu Item 2 + Icon", position: "left" },
      ],
    },
    terms: [
      { en: "Dropdown", ko: "클릭 시 아래로 펼쳐지는 옵션 목록" },
      { en: "Trigger", ko: "드롭다운을 여는 버튼이나 링크 요소" },
      { en: "Menu Item", ko: "드롭다운 내 선택 가능한 개별 항목" },
      { en: "Submenu", ko: "메뉴 항목에서 추가로 펼쳐지는 하위 메뉴" },
    ],
    prompt: `다음 요구사항에 맞는 Dropdown Menu 컴포넌트를 구현해주세요.

## 구조
- 트리거 버튼 클릭 시 아래에 펼쳐지는 메뉴 목록
- 메뉴 항목: 아이콘(선택) + 텍스트 + 단축키(선택)
- 구분선(Divider)으로 항목 그룹 구분
- 서브메뉴 지원 (오른쪽 화살표로 표시)

## 동작
- 트리거 클릭으로 열기/닫기 토글
- 메뉴 외부 클릭 시 자동 닫힘
- 키보드: 위/아래 화살표로 항목 탐색, Enter로 선택, ESC로 닫기
- 호버 시 항목 하이라이트

## 스타일
- 메뉴 최소 너비: 180px
- 항목 높이: 32~40px
- 둥근 모서리: 6~8px
- 그림자: 중간 깊이 box-shadow
- 호버: 연한 배경색`,
  },

  // ==================== 콘텐츠 표시 (content) ====================
  {
    slug: "card",
    name: "Card",
    description: "관련 정보를 하나의 박스에 묶어 표시하는 범용 컨테이너 컴포넌트.",
    categoryId: "content",
    isReady: true,
    wireframe: {
      wireframeType: "standalone",
      highlightArea: "main",
      innerElements: [
        { label: "Image", position: "center" },
        { label: "Title", position: "left" },
        { label: "Description", position: "left" },
        { label: "Action Button", position: "right" },
      ],
    },
    terms: [
      { en: "Card", ko: "관련 정보를 하나의 박스로 묶은 컨테이너 UI" },
      { en: "Card Header", ko: "카드 상단에 이미지나 제목이 들어가는 영역" },
      { en: "Card Body", ko: "카드 본문 텍스트나 콘텐츠가 표시되는 영역" },
      { en: "Card Footer", ko: "카드 하단의 버튼이나 링크가 위치하는 영역" },
    ],
    prompt: `다음 요구사항에 맞는 Card 컴포넌트를 구현해주세요.

## 구조
- 이미지(상단) + 제목 + 설명 텍스트 + 액션 버튼(하단)
- 그리드 레이아웃에서 반복 사용 가능한 구조
- 선택적 요소: 뱃지, 태그, 메타 정보

## 동작
- 카드 전체 클릭 시 상세 페이지 이동 (선택)
- 호버 시 그림자/이동 효과
- 액션 버튼 클릭 시 개별 동작

## 스타일
- 너비: 가변 (그리드 셀 크기에 맞춤)
- 둥근 모서리: 8~12px
- 그림자: 가벼운 box-shadow
- 이미지: aspect-ratio 16:9 또는 4:3
- 패딩: 16~20px`,
  },
  {
    slug: "carousel-slider",
    name: "Carousel / Slider",
    description: "여러 콘텐츠를 좌우로 슬라이드하며 탐색할 수 있는 컴포넌트.",
    categoryId: "content",
    isReady: true,
    wireframe: {
      wireframeType: "standalone",
      highlightArea: "main",
      innerElements: [
        { label: "← Prev", position: "left" },
        { label: "Slide Content", position: "center" },
        { label: "Next →", position: "right" },
        { label: "● ○ ○ Indicators", position: "center" },
      ],
    },
    terms: [
      { en: "Carousel", ko: "콘텐츠를 순환하며 보여주는 슬라이드 UI" },
      { en: "Slider", ko: "좌우 스와이프로 콘텐츠를 탐색하는 UI" },
      { en: "Slide Indicator", ko: "현재 슬라이드 위치를 점으로 표시하는 요소" },
      { en: "Auto-play", ko: "일정 시간 간격으로 자동 슬라이드 전환" },
    ],
    prompt: `다음 요구사항에 맞는 Carousel/Slider 컴포넌트를 구현해주세요.

## 구조
- 한 번에 1개(또는 다수) 슬라이드가 보이는 영역
- 좌우 화살표 버튼 (이전/다음)
- 하단 인디케이터 (현재 위치 표시)
- 슬라이드: 이미지, 카드, 또는 자유 콘텐츠

## 동작
- 화살표 클릭으로 이전/다음 슬라이드 이동
- 인디케이터 클릭으로 특정 슬라이드 이동
- 자동 재생(auto-play) 지원 (3~5초 간격)
- 마우스 호버 시 자동 재생 일시 정지
- 무한 루프(마지막→처음) 지원

## 스타일
- 슬라이드 전환: 좌우 슬라이드 애니메이션
- 화살표: 반투명 원형 버튼, 호버 시 불투명
- 인디케이터: 작은 원, 활성 시 primary 색상
- 반응형: 모바일에서 스와이프 제스처 지원`,
  },
  {
    slug: "accordion",
    name: "Accordion",
    description: "제목을 클릭하면 본문이 펼쳐지는 접이식 콘텐츠 컴포넌트.",
    categoryId: "content",
    isReady: true,
    wireframe: {
      wireframeType: "standalone",
      highlightArea: "main",
      innerElements: [
        { label: "▼ Header (Open)", position: "left" },
        { label: "Content Panel", position: "center" },
        { label: "▶ Header (Closed)", position: "left" },
      ],
    },
    terms: [
      { en: "Accordion", ko: "제목을 클릭하면 본문이 펼쳐지는 접이식 UI" },
      { en: "Collapse", ko: "콘텐츠를 접었다 펼치는 토글 동작" },
      { en: "Toggle Panel", ko: "열림/닫힘 상태가 전환되는 콘텐츠 패널" },
      { en: "Single Expand", ko: "한 번에 하나의 항목만 펼치는 모드" },
    ],
    prompt: `다음 요구사항에 맞는 Accordion 컴포넌트를 구현해주세요.

## 구조
- 세로로 나열된 항목 목록
- 각 항목: 헤더(제목 + 화살표 아이콘) + 콘텐츠 패널
- 헤더 클릭 시 콘텐츠 패널 열림/닫힘

## 동작
- 헤더 클릭 시 해당 패널 토글 (열림 ↔ 닫힘)
- Single Expand 모드: 하나 열면 나머지 자동 닫힘 (선택)
- Multiple Expand 모드: 여러 항목 동시 열기 가능 (선택)
- 열림/닫힘 시 부드러운 높이 애니메이션

## 스타일
- 항목 간 구분: 1px border-bottom
- 헤더 높이: 48~56px
- 화살표 아이콘: 열림 시 아래 방향, 닫힘 시 오른쪽 방향 (회전 애니메이션)
- 콘텐츠: 패딩 16~20px`,
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    description: "요소에 마우스를 올리면 나타나는 짧은 설명 텍스트.",
    categoryId: "content",
    isReady: true,
    wireframe: {
      wireframeType: "overlay",
      highlightArea: "tooltip",
      innerElements: [
        { label: "Tooltip Text", position: "center" },
        { label: "▼ Arrow", position: "center" },
      ],
    },
    terms: [
      { en: "Tooltip", ko: "마우스를 올리면 나타나는 짧은 설명 말풍선" },
      { en: "Trigger Element", ko: "툴팁이 연결된 대상 요소 (버튼, 아이콘 등)" },
      { en: "Placement", ko: "툴팁의 표시 위치 (top, bottom, left, right)" },
      { en: "Arrow Pointer", ko: "툴팁과 대상 요소를 연결하는 화살표" },
    ],
    prompt: `다음 요구사항에 맞는 Tooltip 컴포넌트를 구현해주세요.

## 구조
- 대상 요소(아이콘, 버튼, 텍스트) 주변에 나타나는 말풍선
- 짧은 텍스트 한 줄 (최대 2줄)
- 대상 요소를 가리키는 화살표(Arrow)

## 동작
- 마우스 호버 시 나타남, 벗어나면 사라짐
- 표시 지연: 300~500ms (즉시 표시 방지)
- 위치 자동 조정: 화면 밖으로 나가지 않도록
- 포커스 시에도 표시 (접근성)

## 스타일
- 배경: 어두운 색 (dark), 밝은 텍스트
- 둥근 모서리: 4~6px
- 패딩: 6px 12px
- 폰트: 12~14px
- 화살표: 6px 삼각형
- 진입 애니메이션: fade-in (150ms)`,
  },
  {
    slug: "popover",
    name: "Popover",
    description: "클릭 시 요소 근처에 표시되는 작은 정보 패널.",
    categoryId: "content",
    isReady: true,
    wireframe: {
      wireframeType: "overlay",
      highlightArea: "popover",
      innerElements: [
        { label: "Title", position: "left" },
        { label: "Content", position: "center" },
        { label: "Action Button", position: "right" },
      ],
    },
    terms: [
      { en: "Popover", ko: "클릭 시 요소 주변에 떠오르는 작은 패널" },
      { en: "Trigger", ko: "팝오버를 여는 클릭 대상 요소" },
      { en: "Floating Panel", ko: "대상 요소 근처에 떠 있는 콘텐츠 영역" },
      { en: "Dismiss on Outside Click", ko: "팝오버 바깥 클릭 시 자동으로 닫히는 동작" },
    ],
    prompt: `다음 요구사항에 맞는 Popover 컴포넌트를 구현해주세요.

## 구조
- 트리거 요소 클릭 시 근처에 나타나는 정보 패널
- 제목 + 본문 텍스트 + 액션 버튼(선택)
- 대상 요소를 가리키는 화살표

## 동작
- 트리거 클릭으로 열기/닫기 토글
- 외부 클릭 시 자동 닫힘
- ESC 키로 닫기
- 위치 자동 조정 (화면 경계 감지)

## 스타일
- 배경: card 배경색
- 너비: 200~320px
- 둥근 모서리: 8px
- 그림자: 중간 box-shadow
- 테두리: 1px border
- 패딩: 12~16px`,
  },
  {
    slug: "avatar",
    name: "Avatar",
    description: "사용자 프로필 이미지를 원형 또는 사각형으로 표시하는 컴포넌트.",
    categoryId: "content",
    isReady: true,
    wireframe: {
      wireframeType: "standalone",
      highlightArea: "main",
      innerElements: [
        { label: "Avatar Image", position: "left" },
        { label: "Fallback Initials", position: "center" },
        { label: "Avatar Group (overlapping)", position: "right" },
      ],
    },
    terms: [
      { en: "Avatar", ko: "사용자 프로필을 원형 이미지로 표시하는 UI" },
      { en: "Fallback", ko: "이미지 로드 실패 시 대체로 보여주는 이니셜/아이콘" },
      { en: "Avatar Group", ko: "여러 아바타를 겹쳐서 나열하는 그룹 표시" },
      { en: "Online Status", ko: "아바타에 부착되어 접속 상태를 보여주는 점" },
    ],
    prompt: `다음 요구사항에 맞는 Avatar 컴포넌트를 구현해주세요.

## 구조
- 원형 프로필 이미지 표시
- Fallback: 이미지 없을 때 이니셜 또는 기본 아이콘 표시
- Avatar Group: 여러 아바타를 겹쳐서 나열 (+N 표시)
- 상태 표시: 온라인(초록), 오프라인(회색) 점

## 동작
- 이미지 로드 실패 시 자동 폴백 전환
- 그룹에서 최대 표시 수 초과 시 "+3" 등 카운터 표시
- 호버 시 사용자 이름 툴팁 (선택)

## 스타일
- 크기: xs(24px), sm(32px), md(40px), lg(48px), xl(64px)
- 둥근 모서리: 원형 (rounded-full)
- 테두리: 2px 흰색 (그룹 겹침 시 구분용)
- 폴백 배경: muted 색상, 텍스트 중앙 정렬`,
  },
  {
    slug: "timeline",
    name: "Timeline",
    description: "이벤트나 단계를 시간 순서대로 시각적으로 나열하는 컴포넌트.",
    categoryId: "content",
    isReady: true,
    wireframe: {
      wireframeType: "standalone",
      highlightArea: "main",
      innerElements: [
        { label: "● Node + Event 1", position: "left" },
        { label: "│ Connector", position: "left" },
        { label: "● Node + Event 2", position: "left" },
        { label: "│ Connector", position: "left" },
      ],
    },
    terms: [
      { en: "Timeline", ko: "이벤트를 시간 순서대로 나열하는 UI" },
      { en: "Timeline Node", ko: "각 이벤트를 나타내는 점/아이콘" },
      { en: "Connector", ko: "노드 사이를 연결하는 수직/수평 선" },
      { en: "Event Card", ko: "이벤트 제목·설명·날짜를 담은 정보 블록" },
    ],
    prompt: `다음 요구사항에 맞는 Timeline 컴포넌트를 구현해주세요.

## 구조
- 세로로 나열된 이벤트 목록
- 각 이벤트: 노드(점/아이콘) + 연결선(Connector) + 이벤트 카드(제목, 설명, 날짜)
- 좌측 노드 + 우측 카드 형태 (또는 좌우 교대)

## 동작
- 정적 표시 (기본)
- 스크롤 시 순차적 등장 애니메이션 (선택)
- 최신 이벤트에 강조 표시 (선택)

## 스타일
- 노드: 12~16px 원형, primary 색상 (완료), muted (미래)
- 연결선: 2px 세로 선, 노드 중앙 정렬
- 이벤트 카드: 좌측 마진, 패딩 12~16px
- 날짜 텍스트: 12px, muted 색상`,
  },

  // ==================== 입력/인터랙션 (input) ====================
  {
    slug: "form-input",
    name: "Form / Input",
    description: "사용자 데이터를 입력받는 텍스트 필드, 체크박스, 라디오 등의 폼 요소.",
    categoryId: "input",
    isReady: true,
    wireframe: {
      wireframeType: "standalone",
      highlightArea: "main",
      innerElements: [
        { label: "Label", position: "left" },
        { label: "Text Input", position: "center" },
        { label: "Helper Text", position: "left" },
        { label: "Error Message", position: "left" },
      ],
    },
    terms: [
      { en: "Form Field", ko: "라벨, 입력창, 도움말로 구성된 입력 단위" },
      { en: "Input Validation", ko: "입력값의 형식과 조건을 검사하는 로직" },
      { en: "Placeholder", ko: "입력 전 안내 텍스트로 보이는 힌트" },
      { en: "Helper Text", ko: "입력 필드 아래에 표시되는 보조 설명 문구" },
    ],
    prompt: `다음 요구사항에 맞는 Form/Input 컴포넌트를 구현해주세요.

## 구조
- Label + Input Field + Helper Text/Error Message
- 입력 유형: Text, Email, Password, Textarea, Select, Checkbox, Radio
- 필수 필드 표시 (*)

## 동작
- 포커스 시 테두리 색상 변경
- 실시간 유효성 검사 (이메일 형식, 최소 길이 등)
- 에러 상태: 빨간 테두리 + 에러 메시지 표시
- 비활성 상태: 회색 배경, 입력 불가

## 스타일
- 입력 필드 높이: 40~44px
- 둥근 모서리: 6~8px
- 라벨: 14px, 볼드
- 기본 테두리: 1px muted, 포커스: primary
- 에러: 빨간 테두리 + 빨간 텍스트
- 도움말: 12px, muted 색상`,
  },
  {
    slug: "search-bar",
    name: "Search Bar",
    description: "키워드를 입력하여 콘텐츠를 검색할 수 있는 입력 컴포넌트.",
    categoryId: "input",
    isReady: true,
    wireframe: {
      wireframeType: "standalone",
      highlightArea: "main",
      innerElements: [
        { label: "🔍 Search Icon", position: "left" },
        { label: "Input Field", position: "center" },
        { label: "✕ Clear", position: "right" },
      ],
    },
    terms: [
      { en: "Search Bar", ko: "키워드를 입력하여 콘텐츠를 찾는 검색 UI" },
      { en: "Autocomplete", ko: "입력 중 관련 검색어를 자동으로 제안하는 기능" },
      { en: "Debounce", ko: "입력 완료 후 일정 시간 대기 후 검색을 실행하는 기법" },
      { en: "Search Suggestion", ko: "검색어 입력 시 아래에 나타나는 추천 목록" },
    ],
    prompt: `다음 요구사항에 맞는 Search Bar 컴포넌트를 구현해주세요.

## 구조
- 검색 아이콘 + 입력 필드 + 지우기 버튼
- 입력 시 아래에 자동완성 드롭다운 표시
- 드롭다운: 최근 검색어 + 추천 검색어

## 동작
- 입력 시 300ms debounce 후 자동완성 표시
- 지우기 버튼 클릭 시 입력값 초기화
- Enter 키로 검색 실행
- 화살표 키로 자동완성 항목 탐색
- 자동완성 항목 클릭/Enter로 선택

## 스타일
- 입력 필드 높이: 40~48px
- 둥근 모서리: 8~24px (pill 형태 선택)
- 검색 아이콘: 좌측 내부 배치
- 드롭다운: 입력 필드와 동일 너비, 그림자`,
  },
  {
    slug: "toggle-switch",
    name: "Toggle / Switch",
    description: "켜기/끄기 두 가지 상태를 전환하는 스위치 컴포넌트.",
    categoryId: "input",
    isReady: true,
    wireframe: {
      wireframeType: "standalone",
      highlightArea: "main",
      innerElements: [
        { label: "Label", position: "left" },
        { label: "Switch Track", position: "center" },
        { label: "Switch Thumb ●", position: "center" },
      ],
    },
    terms: [
      { en: "Toggle", ko: "두 가지 상태를 전환하는 스위치 버튼" },
      { en: "Switch", ko: "밀어서 On/Off를 전환하는 슬라이드 컨트롤" },
      { en: "On/Off State", ko: "활성(On)과 비활성(Off)의 두 가지 상태" },
      { en: "Thumb", ko: "스위치 위에서 좌우로 움직이는 동그란 핸들" },
    ],
    prompt: `다음 요구사항에 맞는 Toggle/Switch 컴포넌트를 구현해주세요.

## 구조
- 라벨 텍스트 + 스위치 (Track + Thumb)
- Track: 배경 트랙 (타원형)
- Thumb: 트랙 위의 원형 핸들

## 동작
- 클릭/탭으로 On ↔ Off 전환
- Thumb이 좌(Off) ↔ 우(On) 으로 슬라이드
- 키보드: Space/Enter로 토글
- 비활성 상태 지원

## 스타일
- Track 크기: 44×24px
- Thumb 크기: 20px 원형
- On 상태: primary 배경, Thumb 우측
- Off 상태: muted 배경, Thumb 좌측
- 전환 애니메이션: 150ms ease`,
  },
  {
    slug: "date-picker",
    name: "Date Picker",
    description: "캘린더 UI를 통해 날짜를 선택할 수 있는 입력 컴포넌트.",
    categoryId: "input",
    isReady: true,
    wireframe: {
      wireframeType: "standalone",
      highlightArea: "main",
      innerElements: [
        { label: "Input + 📅 Icon", position: "left" },
        { label: "Month / Year Nav", position: "center" },
        { label: "Calendar Grid", position: "center" },
        { label: "Selected Date", position: "right" },
      ],
    },
    terms: [
      { en: "Date Picker", ko: "캘린더에서 날짜를 선택하는 입력 UI" },
      { en: "Calendar Popup", ko: "클릭 시 열리는 달력 형태의 팝업" },
      { en: "Date Range", ko: "시작일~종료일 범위를 선택하는 모드" },
      { en: "Locale", ko: "날짜 형식과 요일 표시를 결정하는 지역 설정" },
    ],
    prompt: `다음 요구사항에 맞는 Date Picker 컴포넌트를 구현해주세요.

## 구조
- 입력 필드 + 달력 아이콘
- 클릭 시 달력 팝업 표시
- 달력: 월/연도 네비게이션 + 7열 날짜 그리드
- 범위 선택 모드 (시작일~종료일) 지원

## 동작
- 입력 필드 또는 아이콘 클릭 시 달력 팝업 열기
- 날짜 클릭 시 선택, 입력 필드에 반영
- 이전/다음 월 네비게이션
- 오늘 날짜 강조 표시
- 비활성 날짜(과거, 범위 초과) 클릭 불가

## 스타일
- 달력 셀: 32~40px 정사각형
- 선택된 날짜: primary 배경 + 흰색 텍스트
- 오늘: 테두리 표시
- 범위 선택: 시작~끝 사이 배경 하이라이트`,
  },
  {
    slug: "file-upload",
    name: "File Upload",
    description: "파일을 선택하거나 드래그 앤 드롭으로 업로드하는 컴포넌트.",
    categoryId: "input",
    isReady: true,
    wireframe: {
      wireframeType: "standalone",
      highlightArea: "main",
      innerElements: [
        { label: "📁 Upload Icon", position: "center" },
        { label: "Drag & Drop Zone", position: "center" },
        { label: "File List", position: "left" },
        { label: "Progress Bar", position: "center" },
      ],
    },
    terms: [
      { en: "Dropzone", ko: "파일을 드래그하여 놓을 수 있는 영역" },
      { en: "Drag and Drop", ko: "파일을 마우스로 끌어 영역에 놓는 동작" },
      { en: "File Preview", ko: "업로드된 파일의 미리보기 (이미지 썸네일 등)" },
      { en: "Upload Progress", ko: "파일 전송 진행률을 보여주는 표시" },
    ],
    prompt: `다음 요구사항에 맞는 File Upload/Dropzone 컴포넌트를 구현해주세요.

## 구조
- 드래그 앤 드롭 영역 (점선 테두리)
- 영역 내: 업로드 아이콘 + "파일을 여기에 놓으세요" 텍스트 + 찾아보기 버튼
- 업로드된 파일 목록: 파일명 + 크기 + 삭제 버튼
- 업로드 중 파일: 진행률 바 표시

## 동작
- 파일 드래그 시 영역 하이라이트
- 파일 드롭 또는 버튼 클릭으로 파일 선택
- 파일 유형/크기 검증 (허용된 확장자, 최대 크기)
- 파일 삭제 버튼으로 목록에서 제거
- 다중 파일 업로드 지원

## 스타일
- 영역: 점선 2px 테두리, 둥근 모서리 8px
- 드래그 중: primary 테두리 + 연한 배경
- 파일 목록: 각 항목 간 구분선
- 진행률 바: 얇은 primary 색상`,
  },
  {
    slug: "tag-chip",
    name: "Tag / Chip",
    description: "키워드나 카테고리를 작은 라벨로 표시하고 제거할 수 있는 컴포넌트.",
    categoryId: "input",
    isReady: true,
    wireframe: {
      wireframeType: "standalone",
      highlightArea: "main",
      innerElements: [
        { label: "Tag A ✕", position: "left" },
        { label: "Tag B ✕", position: "center" },
        { label: "+ Add Tag Input", position: "right" },
      ],
    },
    terms: [
      { en: "Tag", ko: "키워드나 속성을 라벨로 표시하는 작은 UI 요소" },
      { en: "Chip", ko: "선택된 항목을 작은 캡슐 형태로 보여주는 UI" },
      { en: "Removable Tag", ko: "✕ 버튼으로 제거 가능한 태그" },
      { en: "Tag Input", ko: "새로운 태그를 직접 입력할 수 있는 필드" },
    ],
    prompt: `다음 요구사항에 맞는 Tag/Chip 컴포넌트를 구현해주세요.

## 구조
- 작은 캡슐(pill) 형태의 라벨 목록
- 각 태그: 텍스트 + 삭제 버튼(✕)
- 태그 입력 필드: 새 태그 추가 가능
- 태그 그룹: flex-wrap으로 자동 줄바꿈

## 동작
- 입력 필드에서 Enter 또는 쉼표로 태그 추가
- ✕ 버튼 클릭으로 태그 삭제
- Backspace로 마지막 태그 삭제
- 중복 태그 방지
- 최대 태그 수 제한 (선택)

## 스타일
- 태그 높이: 24~32px
- 둥근 모서리: pill (border-radius: 999px)
- 배경: muted 또는 primary/10
- 텍스트: 12~14px
- 삭제 버튼: 작은 ✕ 아이콘, 호버 시 강조`,
  },
  {
    slug: "rating",
    name: "Rating",
    description: "별점 등으로 평가를 입력하거나 표시하는 컴포넌트.",
    categoryId: "input",
    isReady: true,
    wireframe: {
      wireframeType: "standalone",
      highlightArea: "main",
      innerElements: [
        { label: "★ ★ ★", position: "left" },
        { label: "☆ ☆", position: "center" },
        { label: "3.0 / 5.0", position: "right" },
      ],
    },
    terms: [
      { en: "Rating", ko: "별점 등 시각적 기호로 평가를 표시하는 UI" },
      { en: "Star Rating", ko: "별 아이콘의 채움 정도로 점수를 나타내는 방식" },
      { en: "Half Star", ko: "0.5점 단위로 세밀하게 평가할 수 있는 모드" },
      { en: "Interactive Rating", ko: "사용자가 클릭/호버로 평가를 입력하는 모드" },
    ],
    prompt: `다음 요구사항에 맞는 Rating 컴포넌트를 구현해주세요.

## 구조
- 별 아이콘 5개 나열 (또는 설정 가능)
- 채워진 별(선택됨) + 빈 별(미선택)
- 숫자 표시: "3.5 / 5.0" (선택)
- 읽기 전용 / 입력 모드 구분

## 동작
- 입력 모드: 별 클릭으로 점수 설정
- 호버 시 별이 임시로 채워짐 (미리보기)
- 반별(Half Star) 지원 (마우스 위치 기반)
- 읽기 전용 모드: 호버/클릭 비활성

## 스타일
- 별 크기: 20~32px
- 채워진 별: 노란색(amber/yellow)
- 빈 별: muted 색상
- 호버: 살짝 확대 효과
- 간격: 별 사이 2~4px`,
  },

  // ==================== 데이터 시각화 (data-viz) ====================
  {
    slug: "table-data-grid",
    name: "Table / Data Grid",
    description: "행과 열로 구성된 표 형태로 데이터를 정렬·필터·표시하는 컴포넌트.",
    categoryId: "data-viz",
    isReady: true,
    wireframe: {
      wireframeType: "standalone",
      highlightArea: "main",
      innerElements: [
        { label: "Toolbar (Filter + Search)", position: "left" },
        { label: "Header Row", position: "center" },
        { label: "Data Rows", position: "center" },
        { label: "Pagination", position: "right" },
      ],
    },
    terms: [
      { en: "Data Grid", ko: "정렬·필터·페이징 기능이 포함된 고급 테이블" },
      { en: "Column Header", ko: "각 열의 제목과 정렬 기능을 담은 헤더 셀" },
      { en: "Row Selection", ko: "체크박스로 행을 선택하는 기능" },
      { en: "Sorting", ko: "열 헤더 클릭으로 오름차순/내림차순 정렬" },
    ],
    prompt: `다음 요구사항에 맞는 Table/Data Grid 컴포넌트를 구현해주세요.

## 구조
- Toolbar: 검색 필드 + 필터 버튼 + 액션 버튼
- Header Row: 열 제목 + 정렬 화살표 + 전체 선택 체크박스
- Data Rows: 셀 데이터 + 행 선택 체크박스
- Footer: Pagination + 페이지 크기 선택

## 동작
- 열 헤더 클릭으로 정렬 (오름차순 ↔ 내림차순)
- 체크박스로 개별/전체 행 선택
- 검색 필드에서 실시간 필터링
- 페이지네이션으로 대량 데이터 탐색
- 열 너비 조절 (선택)

## 스타일
- 헤더: 볼드, 배경 살짝 어둡게
- 행: 짝수/홀수 줄무늬(선택), 호버 시 배경 변화
- 테두리: 1px 구분선
- 선택된 행: primary/10 배경
- 반응형: 수평 스크롤 지원`,
  },
  {
    slug: "stat-card",
    name: "Stat Card",
    description: "주요 지표(KPI)를 숫자와 레이블로 강조하여 보여주는 카드.",
    categoryId: "data-viz",
    isReady: true,
    wireframe: {
      wireframeType: "standalone",
      highlightArea: "main",
      innerElements: [
        { label: "Metric Label", position: "left" },
        { label: "Value (1,234)", position: "center" },
        { label: "↑ 12% Trend", position: "right" },
      ],
    },
    terms: [
      { en: "KPI Card", ko: "핵심 성과 지표를 숫자로 강조하는 카드 UI" },
      { en: "Metric", ko: "측정 가능한 수치 데이터 (매출, 사용자 수 등)" },
      { en: "Trend Indicator", ko: "이전 기간 대비 증감을 화살표로 표시하는 요소" },
      { en: "Comparison Period", ko: "현재 수치와 비교하는 기준 기간" },
    ],
    prompt: `다음 요구사항에 맞는 Stat Card/KPI Card 컴포넌트를 구현해주세요.

## 구조
- 라벨(지표명) + 주요 수치(크게) + 증감률 + 비교 기간
- 아이콘 (선택): 지표를 상징하는 아이콘
- 미니 차트/스파크라인 (선택)

## 동작
- 정적 표시 (기본)
- 수치에 카운트업 애니메이션 (선택)
- 증감률에 따라 색상 변화 (상승: 초록, 하락: 빨강)

## 스타일
- 카드: 고정 너비 또는 그리드 셀 맞춤
- 주요 수치: 28~36px, 볼드
- 라벨: 14px, muted 색상
- 증감률: 12~14px, 초록(상승)/빨강(하락) + 화살표
- 패딩: 16~24px`,
  },
  {
    slug: "chart",
    name: "Chart",
    description: "데이터를 막대·선·파이 등의 시각적 그래프로 표현하는 컴포넌트.",
    categoryId: "data-viz",
    isReady: true,
    wireframe: {
      wireframeType: "standalone",
      highlightArea: "main",
      innerElements: [
        { label: "Y Axis", position: "left" },
        { label: "Data Area (Lines/Bars)", position: "center" },
        { label: "X Axis", position: "center" },
        { label: "Legend", position: "right" },
      ],
    },
    terms: [
      { en: "Chart", ko: "데이터를 시각적 그래프로 표현하는 UI" },
      { en: "Axis", ko: "데이터의 기준이 되는 가로(X)·세로(Y) 축" },
      { en: "Legend", ko: "데이터 시리즈의 색상과 이름을 설명하는 범례" },
      { en: "Data Series", ko: "하나의 데이터 묶음을 나타내는 선/막대/파이 조각" },
    ],
    prompt: `다음 요구사항에 맞는 Chart 컴포넌트를 구현해주세요.

## 구조
- 차트 영역: X축 + Y축 + 데이터 시각화 (Line/Bar/Pie)
- 범례(Legend): 데이터 시리즈 색상과 이름
- 제목 + 부제목 (선택)
- 툴팁: 데이터 포인트 호버 시 상세 값 표시

## 동작
- 데이터 포인트 호버 시 툴팁 표시
- 범례 항목 클릭으로 시리즈 표시/숨김 토글
- 차트 진입 시 그리기 애니메이션 (선택)
- 반응형 리사이즈

## 스타일
- 차트 높이: 300~400px
- 축 라벨: 12px, muted 색상
- 격자선: 연한 점선
- 데이터 색상: 미리 정의된 팔레트
- 툴팁: 카드 스타일, 그림자`,
  },
  {
    slug: "heatmap",
    name: "Heatmap",
    description: "데이터의 밀도나 강도를 색상 농도로 시각화하는 컴포넌트.",
    categoryId: "data-viz",
    isReady: true,
    wireframe: {
      wireframeType: "standalone",
      highlightArea: "main",
      innerElements: [
        { label: "Row Labels", position: "left" },
        { label: "Grid Cells (color intensity)", position: "center" },
        { label: "Column Labels", position: "center" },
        { label: "Color Scale", position: "right" },
      ],
    },
    terms: [
      { en: "Heatmap", ko: "데이터 값을 색상 농도로 시각화하는 격자형 UI" },
      { en: "Color Scale", ko: "값의 크기에 따라 변하는 색상 범위" },
      { en: "Cell Value", ko: "격자의 각 셀이 나타내는 데이터 수치" },
      { en: "Intensity", ko: "색상의 진하기로 데이터 크기를 표현하는 정도" },
    ],
    prompt: `다음 요구사항에 맞는 Heatmap 컴포넌트를 구현해주세요.

## 구조
- 행 라벨 (좌측) + 열 라벨 (상단) + 셀 격자
- 각 셀: 값에 따라 다른 색상 농도
- Color Scale(범례): 최솟값~최댓값 색상 범위
- 셀 호버 시 정확한 수치 툴팁

## 동작
- 셀 호버 시 해당 행/열 하이라이트 + 값 툴팁
- 색상 농도로 값의 크기를 직관적으로 파악
- 행/열 정렬 변경 (선택)

## 스타일
- 셀 크기: 정사각형 (24~40px)
- 색상 범위: 연한→진한 (예: 흰색→초록, 또는 파랑→빨강)
- 셀 간 간격: 1~2px
- 라벨: 12px, 세로 텍스트 (열 라벨)
- 툴팁: 작은 카드, 값 + 행/열 정보`,
  },
];

export function getComponentBySlug(slug: string): Component | undefined {
  return components.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return components.map((c) => c.slug);
}
