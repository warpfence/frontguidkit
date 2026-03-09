import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Bell,
  Compass,
  SquareStack,
  SlidersHorizontal,
  BarChart3,
  FileImage,
} from "lucide-react";
import { categories } from "@/data/categories";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MiniWireframe } from "@/components/home/mini-wireframe";
import type { LucideIcon } from "lucide-react";
import type { Component } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  Bell,
  Compass,
  SquareStack,
  SlidersHorizontal,
  BarChart3,
};

function CardPreview({ component }: { component: Component }) {
  if (component.image) {
    return (
      <div className="relative h-[134px] overflow-hidden rounded-md bg-muted/50">
        <Image
          src={component.image}
          alt={component.name}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  if (component.wireframe) {
    return (
      <div className="flex h-[134px] items-center justify-center rounded-md bg-muted/50 p-2">
        <MiniWireframe wireframe={component.wireframe} />
      </div>
    );
  }

  return (
    <div className="flex h-[134px] items-center justify-center rounded-md bg-muted/50">
      <FileImage className="h-8 w-8 text-muted-foreground/40" />
    </div>
  );
}

export function CategoryGrid() {
  return (
    <div className="space-y-10">
      {categories.map((category) => {
        if (category.components.length === 0) return null;

        const Icon = iconMap[category.icon] ?? LayoutDashboard;

        return (
          <section key={category.id}>
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <Icon className="h-5 w-5 text-primary" />
              {category.name}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.components.map((component) => (
                <Link
                  key={component.slug}
                  href={`/components/${component.slug}`}
                  className="group"
                >
                  <Card className="transition-shadow hover:shadow-md hover:ring-primary/30">
                    <CardContent>
                      <CardPreview component={component} />
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary">
                        {component.name}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
