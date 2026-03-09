"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Code2, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const emptySubscribe = () => () => {};

export function TopBar() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  return (
    <header className="sticky top-0 z-50 flex h-[67px] shrink-0 items-center border-b border-border bg-background px-6" style={{ fontSize: "19.2px" }}>
      <Link href="/" className="flex items-center gap-2">
        <Code2 className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold tracking-tight">FrontGuidKit</span>
      </Link>
      <span className="ml-4 hidden text-base text-muted-foreground sm:inline">
        프론트엔드 개발 가이드 &amp; AI 프롬프트
      </span>
      <div className="ml-auto">
        {mounted && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            aria-label={
              resolvedTheme === "dark"
                ? "라이트 모드로 전환"
                : "다크 모드로 전환"
            }
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        )}
      </div>
    </header>
  );
}
