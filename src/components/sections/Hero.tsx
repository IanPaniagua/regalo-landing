"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/**
 * Hero section component
 * Main landing section with headline and CTA
 * Features a gray background with white card overlay
 */
export const Hero: React.FC = () => {
  const handleDiscover = () => {
    const el = document.getElementById("cta");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
              Regalo is an app to keep your gifts up to date
            </h1>
            
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              data-analytics-id="hero-cta-discover"
              onClick={handleDiscover}
            >
              Discover More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

Hero.displayName = "Hero";
