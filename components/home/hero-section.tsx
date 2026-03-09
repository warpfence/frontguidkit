import { Code2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-3 py-12 text-center">
      <h1 className="flex items-center gap-2 text-4xl font-bold tracking-tight">
        <Code2 className="h-9 w-9 text-primary" />
        <span>&lt;/&gt; FrontGuidKit</span>
      </h1>
      <p className="text-xl text-muted-foreground">
        프론트엔드 개발 가이드 &amp; AI 프롬프트
      </p>
      <p className="max-w-2xl text-base text-muted-foreground/80">
        UI 컴포넌트의 구조를 와이어프레임으로 시각화하고, 핵심 용어를 정리하며,
        AI 프롬프트 템플릿을 제공하는 프론트엔드 개발자 참조 도구입니다.
      </p>
    </section>
  );
}
