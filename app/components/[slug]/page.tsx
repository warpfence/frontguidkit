import { notFound } from "next/navigation";
import Image from "next/image";
import { getComponentBySlug, getAllSlugs } from "@/data/components";
import { ContentPlaceholder } from "@/components/guide/content-placeholder";
import { WireframePreview } from "@/components/guide/wireframe-preview";
import { TermCards } from "@/components/guide/term-cards";
import { PromptPanel } from "@/components/guide/prompt-panel";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = getComponentBySlug(slug);

  if (!component) {
    notFound();
  }

  return (
    <main className="p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold">{component.name}</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            {component.description}
          </p>
        </div>

        {component.isReady ? (
          <div className="space-y-8">
            {component.image ? (
              <div className="space-y-3">
                <h2 className="text-lg font-semibold">와이어프레임 미리보기</h2>
                <div className="overflow-hidden rounded-lg border border-border bg-muted/30">
                  <Image
                    src={component.image}
                    alt={`${component.name} 와이어프레임`}
                    width={800}
                    height={268}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            ) : component.wireframe ? (
              <WireframePreview wireframe={component.wireframe} />
            ) : null}
            {component.terms.length > 0 && (
              <TermCards terms={component.terms} />
            )}
            {component.prompt && <PromptPanel prompt={component.prompt} />}
          </div>
        ) : (
          <ContentPlaceholder />
        )}
      </div>
    </main>
  );
}
