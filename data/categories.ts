import type { Category } from "@/lib/types";
import { components } from "./components";

const categoryMeta = [
  { id: "layout", name: "레이아웃", icon: "LayoutDashboard", order: 1 },
  { id: "feedback", name: "피드백/알림", icon: "Bell", order: 2 },
  { id: "navigation", name: "탐색/이동", icon: "Compass", order: 3 },
  { id: "content", name: "콘텐츠 표시", icon: "SquareStack", order: 4 },
  { id: "input", name: "입력/인터랙션", icon: "SlidersHorizontal", order: 5 },
  { id: "data-viz", name: "데이터 시각화", icon: "BarChart3", order: 6 },
] as const;

export const categories: Category[] = categoryMeta.map((meta) => ({
  ...meta,
  components: components.filter((c) => c.categoryId === meta.id),
}));

export function getCategoryByComponentSlug(slug: string): Category | undefined {
  return categories.find((cat) =>
    cat.components.some((c) => c.slug === slug)
  );
}
