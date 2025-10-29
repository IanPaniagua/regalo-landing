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

  const handleStartQuestionnaire = () => {
    trackButtonClick("cta-participate", "cta-section");
    router.push("/questionnaire");
  };

  return (
    <section
      id="cta"
      className="py-16 sm:py-24 bg-white"
      data-analytics-section="cta"
    >
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-neutral-900 mb-8 leading-tight">
            {t.cta.intro}{' '}
            <span className="relative inline-block">
              <span className="relative z-10">{t.cta.interactiveQuestionnaire}</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary-gold"></span>
            </span>
            .{' '}
            {t.cta.outro}
          </h2>
          
          <div className="mb-12">
            <p className="font-display text-2xl sm:text-3xl font-semibold text-neutral-900 mb-6">
              {t.cta.wantToParticipate}
            </p>
            
            <Button
              variant="primary"
              size="lg"
              onClick={handleStartQuestionnaire}
              data-analytics-id="cta-participate"
            >
              {t.cta.letsGo}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

CTASection.displayName = "CTASection";
