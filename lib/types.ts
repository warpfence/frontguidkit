export interface InnerElement {
  label: string;
  position: "left" | "center" | "right";
}

export interface WireframeData {
  wireframeType?: "page-layout" | "overlay" | "inline" | "standalone";
  highlightArea: string;
  innerElements: InnerElement[];
}

export interface Term {
  en: string;
  ko: string;
}

export interface Component {
  slug: string;
  name: string;
  description: string;
  categoryId: string;
  image?: string;
  wireframe: WireframeData | null;
  terms: Term[];
  prompt: string;
  isReady: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  order: number;
  components: Component[];
}
