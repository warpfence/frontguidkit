import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="shrink-0 border-t border-border bg-muted/30 px-6 pt-3 pb-4">
      <div className="grid grid-cols-3 items-start">
        {/* 링크 */}
        <div>
          <h3 className="mb-2 text-sm font-semibold">링크</h3>
          <a
            href="https://github.com/warpfence/frontguidkit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>

        {/* 저작권 */}
        <div className="text-center">
          <h3 className="mb-2 text-sm font-semibold">&lt;/&gt; FrontGuidKit</h3>
          <p className="text-sm text-muted-foreground">
            &copy; 2026 FrontGuidKit.
          </p>
          <p className="text-sm text-muted-foreground">All rights reserved.</p>
        </div>

        {/* 공백 */}
        <div />
      </div>
    </footer>
  );
}
