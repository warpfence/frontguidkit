import type { Term } from "@/lib/types";

interface TermCardsProps {
  terms: Term[];
}

export function TermCards({ terms }: TermCardsProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">핵심 용어</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {terms.map((term, i) => (
          <div
            key={i}
            className="rounded-lg border border-border bg-card p-4"
          >
            <p className="font-semibold text-card-foreground">{term.en}</p>
            <p className="mt-1 text-sm text-muted-foreground">{term.ko}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
