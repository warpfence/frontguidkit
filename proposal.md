# FrontGuidKit — 요구사항 정의서
> 프론트엔드 개발 가이드 & AI 프롬프트 플랫폼

---

## 1. 서비스 개요

### 서비스 이름
**FrontGuidKit**

### 한 줄 소개
프론트엔드 개발 입문자와 AI 코딩 툴 사용자를 위해, 페이지 구성 요소의 와이어프레임·용어·AI 프롬프트를 한 곳에서 제공하는 웹 가이드 플랫폼

### 배경
Claude Code, Codex, GeminiCLI 같은 AI 에이전트를 활용해 UI를 만들 때, Header나 Footer 같은 기본 컴포넌트의 명칭과 구조를 모르면 원하는 결과를 얻기 어렵다. FrontGuidKit은 컴포넌트를 시각적으로 보여주고, 용어를 설명하며, 바로 복사해서 쓸 수 있는 AI 프롬프트까지 제공해 이 문제를 해결한다.

---

## 2. 사용자

| 구분 | 설명 |
|------|------|
| 프론트엔드 입문자 | 컴포넌트 명칭과 구조가 낯선 개발 초보자 |
| AI 코딩 툴 사용자 | Claude Code, Codex, GeminiCLI 등으로 UI를 빠르게 만들고 싶은 사람 |
| 비개발 직군 | 기획자·디자이너 등 개발팀과 협업 시 프론트 용어가 필요한 사람 |
| 부트캠프 수강생 | 실무 맥락의 용어와 구현 흐름을 단기에 익히려는 학습자 |

---

## 3. 핵심 기능 요구사항

### 3.1 컴포넌트 목록 (사이드바 네비게이션)
- 좌측 사이드바에 지원하는 컴포넌트 목록을 카테고리별로 그룹핑하여 표시한다
- 목록 클릭 시 해당 컴포넌트의 상세 가이드 화면으로 전환된다
- 컴포넌트는 아래 6개 카테고리로 분류한다

#### 🏗️ 레이아웃 (Layout)
페이지의 전체적인 뼈대를 구성하는 컴포넌트

| 컴포넌트 | 설명 |
|---|---|
| Header | 페이지 최상단의 로고·네비게이션·CTA를 포함하는 영역 |
| Hero | 페이지 첫 화면의 핵심 메시지와 CTA를 담은 대형 섹션 |
| Navbar / Sidebar Nav | 주요 메뉴 이동을 위한 수평 또는 수직 탐색 바 |
| Body / Content | 페이지의 실제 콘텐츠가 들어가는 메인 영역 |
| Footer | 페이지 최하단의 링크·정보·뉴스레터 영역 |

#### 🔔 피드백 / 알림 (Feedback & Notification)
사용자에게 상태나 결과를 전달하는 컴포넌트

| 컴포넌트 | 설명 |
|---|---|
| Modal / Dialog | 화면 위에 오버레이로 띄우는 집중 입력·확인용 팝업 |
| Toast / Snackbar | 화면 모서리에 잠깐 나타났다 사라지는 알림 메시지 |
| Alert / Banner | 페이지 내 경고·성공·오류 상태를 표시하는 정적 알림 |
| Badge | 숫자나 상태를 아이콘/버튼 위에 표시하는 작은 인디케이터 |
| Progress Bar / Skeleton | 로딩 상태를 시각화하는 컴포넌트 |

#### 🧭 탐색 / 이동 (Navigation & Wayfinding)
페이지 구조 파악과 세부 이동을 돕는 컴포넌트

| 컴포넌트 | 설명 |
|---|---|
| Breadcrumb | 현재 위치를 계층 구조로 보여주는 경로 표시 |
| Tabs | 같은 영역에서 콘텐츠를 탭으로 전환하는 UI |
| Pagination | 긴 목록을 페이지 단위로 나누어 탐색하는 컴포넌트 |
| Stepper / Progress Step | 다단계 폼·온보딩의 현재 단계를 시각적으로 표시 |
| Dropdown Menu | 클릭 시 열리는 독립형 옵션 목록 |

#### 🃏 콘텐츠 표시 (Content Display)
정보를 구조화해서 보여주는 컴포넌트

| 컴포넌트 | 설명 |
|---|---|
| Card | 이미지·제목·설명·버튼을 하나로 묶은 정보 블록 |
| Carousel / Slider | 이미지나 카드를 슬라이드로 순환하며 보여주는 UI |
| Accordion / Collapse | FAQ 형식으로 내용을 접었다 펼치는 UI |
| Tooltip | 마우스를 올렸을 때 짧은 설명이 뜨는 UI |
| Popover | 클릭 시 요소 주변에 떠오르는 정보 패널 |
| Avatar / Avatar Group | 사용자 프로필 이미지를 표시하는 원형 UI |
| Timeline | 이벤트나 히스토리를 시간 순서대로 보여주는 UI |

#### 🎛️ 입력 / 인터랙션 (Input & Interaction)
사용자로부터 데이터를 입력받는 컴포넌트

| 컴포넌트 | 설명 |
|---|---|
| Form / Input | 텍스트·선택·오류 상태 등 기본 입력 필드 유형 전반 |
| Search Bar | 자동완성 포함 검색 입력 UI |
| Toggle / Switch | On/Off 두 가지 상태를 전환하는 버튼 |
| Date Picker / Calendar | 날짜 또는 기간 선택을 위한 달력 팝업 UI |
| File Upload / Dropzone | 파일을 드래그앤드롭 또는 클릭으로 업로드하는 UI |
| Tag / Chip | 선택된 항목이나 필터 조건을 태그 형태로 표시 |
| Rating / Star | 별점 선택 인터랙션 UI |

#### 📊 데이터 시각화 (Data Visualization)
수치와 데이터를 시각적으로 표현하는 컴포넌트

| 컴포넌트 | 설명 |
|---|---|
| Table / Data Grid | Toolbar, Header, Row, Pagination을 갖춘 데이터 테이블 |
| Stat Card / KPI Card | 핵심 수치 1개를 강조해서 보여주는 카드 |
| Chart (Line / Bar / Pie) | 데이터를 그래프로 시각화하는 UI |
| Heatmap | 활동 빈도를 색상 농도로 표현하는 UI |

---

### 3.2 와이어프레임 미리보기
- 선택한 컴포넌트가 실제 페이지에서 어느 위치에 해당하는지 전체 레이아웃 안에서 시각적으로 표시한다
- 해당 컴포넌트 영역은 색상 강조(하이라이트)로 구분한다
- 컴포넌트 내부의 세부 구성 요소(로고, 네비게이션, CTA 버튼 등)를 텍스트 레이블로 표시한다
- 와이어프레임은 실제 코드 없이 시각적 구조만 전달하는 목적으로 사용한다

### 3.3 핵심 용어 설명
- 각 컴포넌트와 관련된 주요 용어 4개를 카드 형태로 표시한다
- 용어는 영어 명칭과 한국어 설명을 함께 제공한다
- 예시: Sticky Header — 스크롤 시 상단에 고정되는 헤더

### 3.4 AI 프롬프트 제공 및 복사
- 각 컴포넌트를 AI 에이전트(Claude Code, Codex, GeminiCLI 등)에게 구현 요청할 수 있는 프롬프트 템플릿을 제공한다
- 프롬프트에는 구조, 동작 등 일반적인 항목이 포함된다
- 버튼 클릭 한 번으로 프롬프트 전체를 클립보드에 복사할 수 있다
- 복사 완료 시 버튼 상태가 시각적으로 변경된다(복사됨 표시)

---

## 4. 비기능 요구사항

| 항목 | 내용 |
|------|------|
| 접근성 | 로그인 없이 누구나 즉시 사용 가능 |
| 반응형 | 데스크톱 기준 최적화, 태블릿 대응 |
| 성능 | 페이지 전환 시 즉각 반응 (클라이언트 사이드 렌더링) |
| 언어 | 한국어 기본 제공 |
| 디자인 | 다크 테마 기반의 개발자 친화적 UI |

---

## 5. 페이지 구조

```
FrontGuidKit
├── 공통 상단바 (서비스명 + 설명)
├── 좌측 사이드바
│   ├── 🏗️ 레이아웃
│   │   └── Header / Hero / Navbar·Sidebar Nav / Body·Content / Footer
│   ├── 🔔 피드백 / 알림
│   │   └── Modal·Dialog / Toast·Snackbar / Alert·Banner / Badge / Progress Bar·Skeleton
│   ├── 🧭 탐색 / 이동
│   │   └── Breadcrumb / Tabs / Pagination / Stepper / Dropdown Menu
│   ├── 🃏 콘텐츠 표시
│   │   └── Card / Carousel·Slider / Accordion / Tooltip / Popover / Avatar / Timeline
│   ├── 🎛️ 입력 / 인터랙션
│   │   └── Form·Input / Search Bar / Toggle·Switch / Date Picker / File Upload / Tag·Chip / Rating
│   └── 📊 데이터 시각화
│       └── Table·Data Grid / Stat Card / Chart / Heatmap
└── 메인 콘텐츠 영역
    ├── 컴포넌트 제목 + 설명
    ├── 와이어프레임 미리보기 패널
    ├── 핵심 용어 패널 (4개 카드)
    └── AI 프롬프트 패널 (복사 버튼 포함)
```

---

## 6. 컴포넌트별 제공 내용 요약

### 🏗️ 레이아웃 (Layout)

| 컴포넌트 | 와이어프레임 | 용어 수 | 프롬프트 |
|---|---|---|---|
| Header | 전체 페이지 내 위치 + 내부 구조 (로고, 네비, CTA) | 4 | 포함 |
| Hero | 전체 페이지 내 위치 + 내부 구조 (헤드라인, CTA, Social Proof) | 4 | 포함 |
| Navbar / Sidebar Nav | 대시보드 레이아웃 내 위치 + 메뉴 구조 | 4 | 포함 |
| Body / Content | 전체 페이지 내 위치 + 카드 그리드 구조 | 4 | 포함 |
| Footer | 전체 페이지 내 위치 + 링크·뉴스레터 구조 | 4 | 포함 |

### 🔔 피드백 / 알림 (Feedback & Notification)

| 컴포넌트 | 와이어프레임 | 용어 수 | 프롬프트 |
|---|---|---|---|
| Modal / Dialog | 오버레이 구조 (Backdrop, Header, Body, Footer) | 4 | 포함 |
| Toast / Snackbar | 화면 모서리 위치 + 자동 사라짐 동작 구조 | 4 | 포함 |
| Alert / Banner | 인라인 위치 + 타입별 상태 (info, success, warning, error) | 4 | 포함 |
| Badge | 아이콘·버튼 위 위치 + 숫자·점 형태 구조 | 4 | 포함 |
| Progress Bar / Skeleton | 진행률 바 + 콘텐츠 자리 점유 구조 | 4 | 포함 |

### 🧭 탐색 / 이동 (Navigation & Wayfinding)

| 컴포넌트 | 와이어프레임 | 용어 수 | 프롬프트 |
|---|---|---|---|
| Breadcrumb | 페이지 상단 내 위치 + 경로 계층 구조 | 4 | 포함 |
| Tabs | 콘텐츠 영역 상단 위치 + 탭 패널 전환 구조 | 4 | 포함 |
| Pagination | 목록 하단 위치 + 이전·다음·페이지 번호 구조 | 4 | 포함 |
| Stepper / Progress Step | 폼 상단 위치 + 단계 상태 (완료, 현재, 미완료) 구조 | 4 | 포함 |
| Dropdown Menu | 트리거 버튼 기준 위치 + 옵션 목록 구조 | 4 | 포함 |

### 🃏 콘텐츠 표시 (Content Display)

| 컴포넌트 | 와이어프레임 | 용어 수 | 프롬프트 |
|---|---|---|---|
| Card | 그리드 내 위치 + 이미지·제목·설명·버튼 구조 | 4 | 포함 |
| Carousel / Slider | 섹션 내 위치 + 슬라이드 이동 및 인디케이터 구조 | 4 | 포함 |
| Accordion / Collapse | 목록 형태 위치 + 헤더·콘텐츠 열림·닫힘 구조 | 4 | 포함 |
| Tooltip | 타겟 요소 주변 위치 + 방향별 말풍선 구조 | 4 | 포함 |
| Popover | 트리거 요소 기준 위치 + 제목·내용·액션 구조 | 4 | 포함 |
| Avatar / Avatar Group | 인라인 위치 + 단일·그룹 겹침 구조 | 4 | 포함 |
| Timeline | 수직 나열 구조 + 날짜·이벤트·아이콘 구성 | 4 | 포함 |

### 🎛️ 입력 / 인터랙션 (Input & Interaction)

| 컴포넌트 | 와이어프레임 | 용어 수 | 프롬프트 |
|---|---|---|---|
| Form / Input | 필드 유형별 구조 (Text, Select, Textarea, Error 상태) | 4 | 포함 |
| Search Bar | 입력창 + 자동완성 드롭다운 구조 | 4 | 포함 |
| Toggle / Switch | On/Off 상태 전환 + 라벨 구조 | 4 | 포함 |
| Date Picker / Calendar | 입력창 + 달력 팝업 + 날짜 범위 선택 구조 | 4 | 포함 |
| File Upload / Dropzone | 드래그앤드롭 영역 + 파일 목록 구조 | 4 | 포함 |
| Tag / Chip | 입력창 + 태그 생성·삭제 구조 | 4 | 포함 |
| Rating / Star | 별점 선택 인터랙션 + 반응 상태 구조 | 4 | 포함 |

### 📊 데이터 시각화 (Data Visualization)

| 컴포넌트 | 와이어프레임 | 용어 수 | 프롬프트 |
|---|---|---|---|
| Table / Data Grid | Toolbar, Header, Row, Pagination 구조 | 4 | 포함 |
| Stat Card / KPI Card | 수치·증감률·아이콘으로 구성된 단일 카드 구조 | 4 | 포함 |
| Chart (Line / Bar / Pie) | 축·범례·데이터 포인트 포함 그래프 구조 | 4 | 포함 |
| Heatmap | 격자 셀 + 색상 농도 스케일 구조 | 4 | 포함 |

---

## 7. 향후 확장 고려사항

- 신규 컴포넌트 추가 시 기존 6개 카테고리 안에 편입하여 사이드바 구조를 유지한다
- 카테고리 내 컴포넌트가 5개를 초과할 경우 하위 그룹 분리를 검토한다
- 추가 검토 대상 컴포넌트: Pricing Table, Testimonial, Feature Section, CTA Section, Cookie Banner
