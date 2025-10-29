import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

/**
 * Home page component
 * Main landing page for Regalo App
 * 
 * Structure:
 * - Header: Navigation with logo
 * - Hero: Main value proposition with CTA
 * - Features: Three key product features
 * - CTA Section: Interactive questionnaire invitation
 * - Footer: Site footer
 */
export default function Home() {
  return (
    <main className="min-h-screen" data-analytics-page="home">
      <Header />
      <Hero />
      <Features />
      <CTASection />
      <Footer />
    </main>
  );
}
