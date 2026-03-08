export interface InnerElement {
  label: string;
  position: "left" | "center" | "right";
}

export interface WireframeData {
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
