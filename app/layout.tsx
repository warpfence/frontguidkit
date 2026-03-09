import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/top-bar";
import { AppSidebar } from "@/components/layout/sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/layout/footer";

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
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <TooltipProvider>
            <div className="flex h-screen flex-col overflow-hidden">
              <TopBar />
              <SidebarProvider defaultOpen className="flex-1 overflow-hidden">
                <AppSidebar />
                <SidebarInset className="flex min-h-0 flex-1 flex-col">
                  <div className="flex-1 overflow-y-auto">
                    {children}
                    <Footer />
                  </div>
                </SidebarInset>
              </SidebarProvider>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
