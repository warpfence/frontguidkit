import type { WireframeData } from "@/lib/types";
import { cn } from "@/lib/utils";

interface MiniWireframeProps {
  wireframe: WireframeData;
}

export function MiniWireframe({ wireframe }: MiniWireframeProps) {
  const { highlightArea } = wireframe;

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-md bg-[#2a2a2a] text-[8px]">
      <MiniBlock
        label="Header"
        isHighlighted={highlightArea === "header"}
        className="h-4 border-b border-[#444]"
      />
      <MiniBlock
        label="Hero"
        isHighlighted={highlightArea === "hero"}
        className="h-6 border-b border-[#444]"
      />
      <div className="flex flex-1 border-b border-[#444]">
        <MiniBlock
          label="Nav"
          isHighlighted={highlightArea === "navbar"}
          className="w-1/4 border-r border-[#444]"
        />
        <MiniBlock
          label="Body"
          isHighlighted={highlightArea === "body"}
          className="flex-1"
        />
      </div>
      <MiniBlock
        label="Footer"
        isHighlighted={highlightArea === "footer"}
        className="h-4"
      />
    </div>
  );
}

function MiniBlock({
  label,
  isHighlighted,
  className,
}: {
  label: string;
  isHighlighted: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        isHighlighted
          ? "bg-[#444] text-[#ccc] font-semibold"
          : "bg-[#2f2f2f] text-[#666]",
        className
      )}
    >
      {label}
    </div>
  );
}
