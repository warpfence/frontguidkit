import type { WireframeData } from "@/lib/types";
import { cn } from "@/lib/utils";

interface WireframePreviewProps {
  wireframe: WireframeData;
}

const areas = [
  { id: "header", label: "Header", className: "h-10" },
  { id: "hero", label: "Hero", className: "h-24" },
  { id: "navbar", label: "Navbar", className: "h-full" },
  { id: "body", label: "Body / Content", className: "h-full" },
  { id: "footer", label: "Footer", className: "h-10" },
] as const;

export function WireframePreview({ wireframe }: WireframePreviewProps) {
  const { highlightArea, innerElements } = wireframe;

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">와이어프레임 미리보기</h2>
      <div className="overflow-hidden rounded-lg border border-border bg-muted/30">
        <div className="flex flex-col">
          {/* Header */}
          <WireframeBlock
            areaId="header"
            label="Header"
            isHighlighted={highlightArea === "header"}
            innerElements={highlightArea === "header" ? innerElements : undefined}
            className="h-10 border-b border-border"
          />

          {/* Hero */}
          <WireframeBlock
            areaId="hero"
            label="Hero"
            isHighlighted={highlightArea === "hero"}
            innerElements={highlightArea === "hero" ? innerElements : undefined}
            className="h-24 border-b border-border"
          />

          {/* Navbar + Body row */}
          <div className="flex min-h-[180px] border-b border-border">
            <WireframeBlock
              areaId="navbar"
              label="Navbar"
              isHighlighted={highlightArea === "navbar"}
              innerElements={
                highlightArea === "navbar" ? innerElements : undefined
              }
              className="w-1/4 border-r border-border"
            />
            <WireframeBlock
              areaId="body"
              label="Body / Content"
              isHighlighted={highlightArea === "body"}
              innerElements={
                highlightArea === "body" ? innerElements : undefined
              }
              className="flex-1"
            />
          </div>

          {/* Footer */}
          <WireframeBlock
            areaId="footer"
            label="Footer"
            isHighlighted={highlightArea === "footer"}
            innerElements={
              highlightArea === "footer" ? innerElements : undefined
            }
            className="h-10"
          />
        </div>
      </div>
    </div>
  );
}

function WireframeBlock({
  areaId,
  label,
  isHighlighted,
  innerElements,
  className,
}: {
  areaId: string;
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
