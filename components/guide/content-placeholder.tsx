import { Construction } from "lucide-react";

export function ContentPlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-24 text-center">
      <Construction className="mb-4 h-12 w-12 text-muted-foreground" />
      <h2 className="text-xl font-semibold">콘텐츠 준비 중</h2>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        이 컴포넌트의 가이드는 현재 준비 중입니다. 곧 와이어프레임, 핵심 용어,
        AI 프롬프트가 추가될 예정입니다.
      </p>
    </div>
  );
}
