import { Code2 } from "lucide-react";
import Link from "next/link";

export function TopBar() {
  return (
    <header className="flex h-14 items-center border-b border-border bg-background px-6">
      <Link href="/" className="flex items-center gap-2">
        <Code2 className="h-5 w-5 text-primary" />
        <span className="text-lg font-bold tracking-tight">FrontGuidKit</span>
      </Link>
      <span className="ml-4 hidden text-sm text-muted-foreground sm:inline">
        프론트엔드 개발 가이드 &amp; AI 프롬프트
      </span>
    </header>
  );
}
