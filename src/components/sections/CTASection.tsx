"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { trackButtonClick } from "@/lib/analytics";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Call-to-Action section component
 * Encourages user participation with interactive questionnaire
 */
export const CTASection: React.FC = () => {
  const router = useRouter();
  const { t } = useLanguage();

  const handleJoinBeta = () => {
    trackButtonClick("cta-join-beta", "cta-section");
    router.push("/waitlist");
  };

  return (
    <section
      id="cta"
      className="py-16 sm:py-24 bg-white"
      data-analytics-section="cta"
    >
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4 leading-tight">
              {t.cta.title}
            </h2>
            <p className="text-xl text-neutral-600 mb-2">
              {t.cta.subtitle}
            </p>
            <p className="text-lg text-neutral-500">
              {t.cta.description}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="font-display text-2xl font-semibold text-neutral-900 mb-6 text-center">
              {t.cta.benefits.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-secondary-blue rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">{t.cta.benefits.benefit1}</h4>
                  <p className="text-sm text-neutral-600">{t.cta.benefits.benefit1Desc}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-secondary-blue rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">{t.cta.benefits.benefit2}</h4>
                  <p className="text-sm text-neutral-600">{t.cta.benefits.benefit2Desc}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-secondary-blue rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">{t.cta.benefits.benefit3}</h4>
                  <p className="text-sm text-neutral-600">{t.cta.benefits.benefit3Desc}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-secondary-blue rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">{t.cta.benefits.benefit4}</h4>
                  <p className="text-sm text-neutral-600">{t.cta.benefits.benefit4Desc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={handleJoinBeta}
              data-analytics-id="cta-join-beta"
              className="px-12"
            >
              {t.cta.joinBeta}
            </Button>
            <p className="text-sm text-neutral-500 mt-4">
              {t.cta.limitedSpots}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

CTASection.displayName = "CTASection";
