"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Bell,
  Compass,
  SquareStack,
  SlidersHorizontal,
  BarChart3,
  ChevronRight,
  Home,
} from "lucide-react";
import { categories } from "@/data/categories";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  Bell,
  Compass,
  SquareStack,
  SlidersHorizontal,
  BarChart3,
};

export function AppSidebar() {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop() ?? "";
  const isHome = pathname === "/";

  return (
    <Sidebar collapsible="none" className="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isHome} tooltip="홈">
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    <span>홈</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator />
        <SidebarGroup>
          <SidebarGroupLabel>컴포넌트</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category) => {
                const Icon = iconMap[category.icon] ?? LayoutDashboard;
                const isActive = category.components.some(
                  (c) => c.slug === currentSlug
                );

                return (
                  <Collapsible
                    key={category.id}
                    defaultOpen={isActive}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={category.name}>
                          <Icon className="h-4 w-4" />
                          <span>{category.name}</span>
                          <ChevronRight className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {category.components.map((component) => (
                            <SidebarMenuSubItem key={component.slug}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={component.slug === currentSlug}
                              >
                                <Link href={`/components/${component.slug}`}>
                                  <span>{component.name}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
