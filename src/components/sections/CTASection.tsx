"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
    router.push("/waitlist?type=beta");
  };

  const handleJoinWaitlist = () => {
    trackButtonClick("cta-join-waitlist", "cta-section");
    router.push("/waitlist?type=waitlist");
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

          {/* CTA Area with Image */}
          <div className="bg-primary-yellow/10 rounded-3xl p-8 sm:p-12 mb-8 flex flex-col md:flex-row items-center gap-12 border border-primary-yellow/20">
            {/* Image Column */}
            <div className="flex-1 w-full max-w-sm mx-auto md:max-w-none">
              <div className="relative aspect-square md:aspect-[4/3] w-full">
                <Image
                  src="/together.png"
                  alt="Regalos App Community"
                  fill
                  className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* CTA Buttons Column */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full">
              {/* Main CTA: Beta Testing */}
              <div className="w-full flex flex-col items-center md:items-start">
                <Button
                  variant="premium"
                  size="lg"
                  onClick={handleJoinBeta}
                  data-analytics-id="cta-join-beta"
                  className="px-10 w-full md:w-auto text-lg py-6"
                >
                  {t.cta.joinBeta}
                </Button>
                <p className="text-sm text-neutral-500 mt-4 mb-8 font-medium">
                  {t.cta.limitedSpots}
                </p>
              </div>

              {/* Divider & Alternative CTA: Waitlist */}
              <div className="w-full border-t border-primary-yellow/30 pt-8 flex flex-col items-center md:items-start">
                <p className="text-base text-neutral-600 mb-5">
                  {t.cta.waitlistAlternative.text}
                </p>
                <Button
                  variant="secondary"
                  onClick={handleJoinWaitlist}
                  data-analytics-id="cta-join-waitlist"
                  className="w-full md:w-auto bg-white hover:bg-neutral-50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 hover:text-secondary-blue"
                >
                  {t.cta.waitlistAlternative.button}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

CTASection.displayName = "CTASection";
