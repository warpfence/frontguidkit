"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/clipboard";

interface PromptPanelProps {
  prompt: string;
}

export function PromptPanel({ prompt }: PromptPanelProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(prompt);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">AI 프롬프트</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className="gap-2"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              복사됨
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              복사
            </>
          )}
        </Button>
      </div>
      <pre className="max-h-80 overflow-y-auto whitespace-pre-wrap rounded-lg border border-border bg-muted/50 p-4 text-sm leading-relaxed">
        {prompt}
      </pre>
    </div>
  );
}
