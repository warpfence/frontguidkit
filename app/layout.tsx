import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/top-bar";
import { AppSidebar } from "@/components/layout/sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FrontGuidKit — 프론트엔드 개발 가이드 & AI 프롬프트",
  description:
    "프론트엔드 UI 컴포넌트의 구조, 용어, AI 프롬프트를 한 곳에서 제공하는 웹 가이드 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TooltipProvider>
          <div className="flex h-screen flex-col">
            <TopBar />
            <SidebarProvider defaultOpen>
              <AppSidebar />
              <SidebarInset className="overflow-hidden">
                {children}
              </SidebarInset>
            </SidebarProvider>
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
