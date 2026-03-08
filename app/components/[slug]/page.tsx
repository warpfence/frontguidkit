import { notFound } from "next/navigation";
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
    <main className="flex-1 overflow-y-auto p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold">{component.name}</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            {component.description}
          </p>
        </div>

        {component.isReady ? (
          <div className="space-y-8">
            {component.wireframe && (
              <WireframePreview wireframe={component.wireframe} />
            )}
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
