import { HeroSection } from "@/components/home/hero-section";
import { CategoryGrid } from "@/components/home/category-grid";

export default function Home() {
  return (
    <main className="px-20 py-6">
      <HeroSection />
      <CategoryGrid />
    </main>
  );
}
