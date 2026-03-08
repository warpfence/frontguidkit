import type { WireframeData } from "@/lib/types";
import { cn } from "@/lib/utils";

interface WireframePreviewProps {
  wireframe: WireframeData;
}

export function WireframePreview({ wireframe }: WireframePreviewProps) {
  const type = wireframe.wireframeType ?? "page-layout";

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">와이어프레임 미리보기</h2>
      <div className="overflow-hidden rounded-lg border border-border bg-muted/30">
        {type === "page-layout" && <PageLayoutWireframe wireframe={wireframe} />}
        {type === "overlay" && <OverlayWireframe wireframe={wireframe} />}
        {type === "inline" && <InlineWireframe wireframe={wireframe} />}
        {type === "standalone" && <StandaloneWireframe wireframe={wireframe} />}
      </div>
    </div>
  );
}

/* ── Page Layout (기존 로직 추출) ── */

function PageLayoutWireframe({ wireframe }: { wireframe: WireframeData }) {
  const { highlightArea, innerElements } = wireframe;

  return (
    <div className="flex flex-col">
      <WireframeBlock
        label="Header"
        isHighlighted={highlightArea === "header"}
        innerElements={highlightArea === "header" ? innerElements : undefined}
        className="h-10 border-b border-border"
      />
      <WireframeBlock
        label="Hero"
        isHighlighted={highlightArea === "hero"}
        innerElements={highlightArea === "hero" ? innerElements : undefined}
        className="h-24 border-b border-border"
      />
      <div className="flex min-h-[180px] border-b border-border">
        <WireframeBlock
          label="Navbar"
          isHighlighted={highlightArea === "navbar"}
          innerElements={highlightArea === "navbar" ? innerElements : undefined}
          className="w-1/4 border-r border-border"
        />
        <WireframeBlock
          label="Body / Content"
          isHighlighted={highlightArea === "body"}
          innerElements={highlightArea === "body" ? innerElements : undefined}
          className="flex-1"
        />
      </div>
      <WireframeBlock
        label="Footer"
        isHighlighted={highlightArea === "footer"}
        innerElements={highlightArea === "footer" ? innerElements : undefined}
        className="h-10"
      />
    </div>
  );
}

/* ── Overlay (Modal, Toast, Dropdown, Tooltip, Popover) ── */

const overlayPositionMap: Record<string, string> = {
  modal: "inset-0 m-auto w-3/5 h-fit max-h-[60%]",
  toast: "bottom-3 right-3 w-2/5 h-fit",
  dropdown: "top-3 left-3 w-2/5 h-fit",
  tooltip: "top-3 left-1/2 -translate-x-1/2 w-2/5 h-fit",
  popover: "top-3 right-3 w-2/5 h-fit",
};

function OverlayWireframe({ wireframe }: { wireframe: WireframeData }) {
  const { highlightArea, innerElements } = wireframe;
  const posClass = overlayPositionMap[highlightArea] ?? overlayPositionMap.modal;

  return (
    <div className="relative min-h-[260px]">
      {/* 반투명 배경 페이지 */}
      <div className="absolute inset-0 flex flex-col opacity-40">
        <div className="h-8 border-b border-border bg-muted/20 flex items-center px-3">
          <span className="text-[10px] text-muted-foreground/60">Header</span>
        </div>
        <div className="flex-1 bg-muted/10 flex items-center justify-center">
          <span className="text-[10px] text-muted-foreground/40">Page Content</span>
        </div>
        <div className="h-6 border-t border-border bg-muted/20 flex items-center px-3">
          <span className="text-[10px] text-muted-foreground/60">Footer</span>
        </div>
      </div>

      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/60" />

      {/* 오버레이 요소 */}
      <div
        className={cn(
          "absolute rounded-md bg-primary/15 ring-2 ring-inset ring-primary p-3",
          posClass
        )}
      >
        <div className="flex flex-wrap items-center gap-2">
          {innerElements.map((el, i) => (
            <span
              key={i}
              className={cn(
                "rounded bg-primary/20 px-2 py-1 text-xs font-medium text-primary",
                el.position === "left" && "mr-auto",
                el.position === "center" && "mx-auto",
                el.position === "right" && "ml-auto"
              )}
            >
              {el.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Inline (Alert, Badge, Breadcrumb, Tabs, Pagination, Stepper, Progress) ── */

function InlineWireframe({ wireframe }: { wireframe: WireframeData }) {
  const { highlightArea, innerElements } = wireframe;

  const renderArea = (position: "top" | "middle" | "bottom") => {
    const isHighlighted = highlightArea === position;
    if (isHighlighted) {
      return (
        <div className="bg-primary/15 ring-2 ring-inset ring-primary rounded-sm px-3 py-2">
          <div className="flex flex-wrap items-center gap-2">
            {innerElements.map((el, i) => (
              <span
                key={i}
                className={cn(
                  "rounded bg-primary/20 px-2 py-1 text-xs font-medium text-primary",
                  el.position === "left" && "mr-auto",
                  el.position === "center" && "mx-auto",
                  el.position === "right" && "ml-auto"
                )}
              >
                {el.label}
              </span>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div className="flex items-center justify-center bg-muted/10 rounded-sm h-full">
        <span className="text-[10px] text-muted-foreground/40">
          {position === "top" ? "Content" : position === "middle" ? "Main Content" : "Content"}
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-[260px]">
      {/* Header bar */}
      <div className="h-8 border-b border-border bg-muted/20 flex items-center px-3">
        <span className="text-[10px] text-muted-foreground/60">Header</span>
      </div>

      {/* Top area */}
      <div className="px-3 pt-2 min-h-[40px]">
        {renderArea("top")}
      </div>

      {/* Middle area */}
      <div className="flex-1 px-3 py-2 min-h-[100px]">
        {renderArea("middle")}
      </div>

      {/* Bottom area */}
      <div className="px-3 pb-2 min-h-[40px]">
        {renderArea("bottom")}
      </div>

      {/* Footer bar */}
      <div className="h-6 border-t border-border bg-muted/20 flex items-center px-3">
        <span className="text-[10px] text-muted-foreground/60">Footer</span>
      </div>
    </div>
  );
}

/* ── Standalone (Card, Form, Table, Chart 등 독립 구조) ── */

function StandaloneWireframe({ wireframe }: { wireframe: WireframeData }) {
  const { innerElements } = wireframe;

  return (
    <div className="min-h-[200px] p-4">
      <div className="h-full rounded-md bg-primary/15 ring-2 ring-inset ring-primary p-4">
        <div className="flex flex-wrap items-start gap-3">
          {innerElements.map((el, i) => (
            <span
              key={i}
              className={cn(
                "rounded bg-primary/20 px-3 py-2 text-xs font-medium text-primary",
                el.position === "left" && "mr-auto",
                el.position === "center" && "mx-auto",
                el.position === "right" && "ml-auto",
                innerElements.length >= 4 && "basis-[calc(50%-0.375rem)]"
              )}
            >
              {el.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── 공통 블록 (PageLayout용) ── */

function WireframeBlock({
  label,
  isHighlighted,
  innerElements,
  className,
}: {
  label: string;
  isHighlighted: boolean;
  innerElements?: WireframeData["innerElements"];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center transition-colors",
        isHighlighted
          ? "bg-primary/15 ring-2 ring-inset ring-primary"
          : "bg-muted/20",
        className
      )}
    >
      {isHighlighted && innerElements ? (
        <div className="flex w-full items-center justify-between px-4">
          {innerElements.map((el, i) => (
            <span
              key={i}
              className={cn(
                "rounded bg-primary/20 px-2 py-1 text-xs font-medium text-primary",
                el.position === "left" && "mr-auto",
                el.position === "center" && "mx-auto",
                el.position === "right" && "ml-auto"
              )}
            >
              {el.label}
            </span>
          ))}
        </div>
      ) : (
        <span className="text-xs text-muted-foreground/60">{label}</span>
      )}
    </div>
  );
}
