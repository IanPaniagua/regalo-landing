"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { trackButtonClick } from "@/lib/analytics";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Hero section component
 * Main landing section with headline and CTA
 * Features a gray background with white card overlay
 */
export const Hero: React.FC = () => {
  const router = useRouter();
  const { t } = useLanguage();
  
  const handleDownload = () => {
    trackButtonClick("hero-download", "hero");
    router.push("/waitlist");
  };

  const handleSeeHow = () => {
    trackButtonClick("hero-see-how", "hero");
    const el = document.getElementById("features");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="relative bg-gradient-to-br from-neutral-50 via-white to-secondary-light/20 min-h-screen flex items-center overflow-hidden"
      data-analytics-section="hero"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary-light/40 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center py-12">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            {/* Emoji + Mini headline */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🎁</span>
              <span className="text-secondary-blue font-semibold text-sm uppercase tracking-wider">
                Regalos App
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-[1.1]">
              {t.hero.title}
            </h1>
            
            {/* Subheadline with gradient accent */}
            <p className="text-2xl sm:text-3xl font-medium mb-6 leading-tight">
              <span className="text-neutral-700">{t.hero.subtitle.split('.')[0]}.</span>
              <br />
              <span className="bg-gradient-to-r from-secondary-blue to-secondary-dark bg-clip-text text-transparent">
                {t.hero.subtitle.split('.')[1]}.
              </span>
            </p>
            
            {/* Description */}
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed max-w-xl">
              {t.hero.description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                data-analytics-id="hero-download"
                onClick={handleDownload}
              >
                <span className="flex items-center gap-2">
                  {t.hero.downloadNow}
                  <span className="text-xl">→</span>
                </span>
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
                data-analytics-id="hero-see-how"
                onClick={handleSeeHow}
              >
                {t.hero.seeHowItWorks}
              </Button>
            </div>

            {/* Platform badges */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-neutral-500 text-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span>iOS</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-500 text-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.341c-.538-.586-.894-1.372-.894-2.341s.356-1.755.894-2.341l-1.477-1.477c-.989.989-1.6 2.356-1.6 3.818s.611 2.829 1.6 3.818l1.477-1.477zm3.6-3.6c0-2.926-1.174-5.574-3.074-7.474l-1.477 1.477c1.511 1.511 2.451 3.599 2.451 5.997s-.94 4.486-2.451 5.997l1.477 1.477c1.9-1.9 3.074-4.548 3.074-7.474zM12 2.074L5.074 9H1v6h4.074L12 21.926V2.074z"/>
                </svg>
                <span>Android</span>
              </div>
              <div className="h-4 w-px bg-neutral-300"></div>
              <div className="flex items-center gap-1 text-neutral-500 text-sm">
                <span className="font-semibold text-neutral-700">Beta Testing</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main phone mockup */}
              <div className="relative z-10 max-w-sm mx-auto transform rotate-6">
                <div className="relative aspect-[9/19.5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-neutral-900">
                  <Image
                    src="/calendar.png"
                    alt="RegaloApp Calendar"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-xl p-4 animate-float hidden lg:block">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🎉</span>
                  <div>
                    <p className="text-xs text-neutral-500">Upcoming</p>
                    <p className="font-semibold text-sm">3 birthdays</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-4 animate-float-delayed hidden lg:block">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">👥</span>
                  <div>
                    <p className="text-xs text-neutral-500">Connected</p>
                    <p className="font-semibold text-sm">12 friends</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

Hero.displayName = "Hero";
