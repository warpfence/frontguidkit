# Implementation Plan: FrontGuidKit MVP

**Branch**: `001-frontguidkit-mvp` | **Date**: 2026-03-08 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-frontguidkit-mvp/spec.md`

## Summary

프론트엔드 UI 컴포넌트의 구조, 용어, AI 프롬프트를 한 곳에서 제공하는 웹 가이드 플랫폼의 MVP를 구현한다. 사이드바 네비게이션으로 6개 카테고리 / 33개 컴포넌트를 탐색하고, 컴포넌트 상세 페이지에서 와이어프레임 미리보기, 핵심 용어 4개, AI 프롬프트 복사 기능을 제공한다. Next.js App Router + Tailwind CSS + shadcn/ui 기반으로 구현하며, 정적 데이터를 TypeScript 상수로 관리한다.

## Technical Context

**Language/Version**: TypeScript 5 / Node.js 18+
**Primary Dependencies**: Next.js 16.1.6, React 19, Tailwind CSS v4, shadcn/ui (radix-nova), Lucide React
**Storage**: 정적 TypeScript 상수 객체 (DB 불필요)
**Testing**: Next.js 내장 테스트 또는 Vitest (필요 시)
**Target Platform**: 데스크톱 웹 브라우저 (Chrome, Firefox, Safari, Edge 최신)
**Project Type**: Web application (정적 사이트)
**Performance Goals**: 카테고리 펼침/접힘 및 페이지 전환 1초 이내
**Constraints**: 다크 테마 전용, 로그인 없음, 한국어 전용
**Scale/Scope**: 33개 컴포넌트 (MVP: 5개 상세 콘텐츠 완성)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Constitution이 아직 설정되지 않은 상태(템플릿)이므로 별도 게이트 검증 대상이 없다. 프로젝트 기본 원칙(간결성, YAGNI)을 준수하여 진행한다.

**Post-Phase 1 재검증**: 통과 — 외부 의존성 추가 없이 기존 스택만으로 구현 가능하다.

## Project Structure

### Documentation (this feature)

```text
specs/001-frontguidkit-mvp/
├── spec.md              # Feature specification
├── plan.md              # This file
├── research.md          # Phase 0: 기술 결정 및 근거
├── data-model.md        # Phase 1: 엔티티 정의
├── quickstart.md        # Phase 1: 개발 가이드
├── contracts/
│   └── ui-contracts.md  # Phase 1: UI 컴포넌트 계약
└── tasks.md             # Phase 2: /speckit.tasks로 생성
```

### Source Code (repository root)

```text
app/
├── layout.tsx                    # 루트 레이아웃 (TopBar + Sidebar + Main)
├── page.tsx                      # 홈 → /components/header로 리다이렉트
├── globals.css                   # Tailwind + shadcn 테마 (기존)
└── components/
    └── [slug]/
        └── page.tsx              # 컴포넌트 상세 가이드 (동적 라우트)

components/
├── ui/                           # shadcn UI 컴포넌트 (기존)
│   └── button.tsx
├── layout/
│   ├── top-bar.tsx               # 상단바
│   └── sidebar.tsx               # 사이드바 네비게이션
└── guide/
    ├── wireframe-preview.tsx     # 와이어프레임 미리보기
    ├── term-cards.tsx            # 핵심 용어 카드 (4개)
    ├── prompt-panel.tsx          # AI 프롬프트 + 복사 버튼
    └── content-placeholder.tsx   # "콘텐츠 준비 중" 안내

data/
├── categories.ts                 # 6개 카테고리 정의
└── components.ts                 # 33개 컴포넌트 데이터

lib/
├── types.ts                      # Category, Component, Term 등 타입 정의
├── utils.ts                      # cn() 유틸리티 (기존)
└── clipboard.ts                  # 클립보드 복사 유틸리티
```

**Structure Decision**: Next.js App Router의 기존 구조를 유지하면서, `components/layout/`(공통 레이아웃), `components/guide/`(가이드 페이지 전용), `data/`(정적 데이터)를 추가한다. `src/` 디렉토리 없이 루트 기반 구조를 유지한다 (기존 프로젝트 설정 그대로).

## Complexity Tracking

해당 없음 — Constitution 위반 사항 없음.
