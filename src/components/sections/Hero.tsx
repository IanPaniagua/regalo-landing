"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { trackButtonClick } from "@/lib/analytics";

/**
 * Hero section component
 * Main landing section with headline and CTA
 * Features a gray background with white card overlay
 */
export const Hero: React.FC = () => {
  const router = useRouter();
  
  const handleDiscover = () => {
    trackButtonClick("hero-discover", "hero");
    const el = document.getElementById("cta");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleWaitlist = () => {
    trackButtonClick("hero-waitlist", "hero");
    router.push("/waitlist");
  };

  return (
    <section
      className="relative bg-[url('/4.png')] bg-[length:100%_auto] lg:bg-cover bg-no-repeat bg-top lg:bg-center min-h-screen flex items-center"
      data-analytics-section="hero"
    >
      <Container>
        <div className="max-w-md mx-auto">
          {/* White card with content */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl">
            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-neutral-900 mb-6 leading-tight">
              Regalo is a movile App to keep your gifts up to date
            </h1>
            
            <div className="space-y-3">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                data-analytics-id="hero-cta-discover"
                onClick={handleDiscover}
              >
                Discover More
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                className="w-full"
                data-analytics-id="hero-waitlist"
                onClick={handleWaitlist}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

Hero.displayName = "Hero";
