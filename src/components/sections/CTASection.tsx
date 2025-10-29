import React from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/**
 * Call-to-Action section component
 * Encourages user participation with interactive questionnaire
 */
export const CTASection: React.FC = () => {
  return (
    <section
      className="py-16 sm:py-24 bg-white"
      data-analytics-section="cta"
    >
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-sans text-lg sm:text-xl text-neutral-700 mb-8 leading-relaxed">
            To introduce you to the app, we have designed an interactive questionnaire. 
            While we explain it, you can collaborate with your feedback :)
          </p>
          
          <div className="mb-12">
            <p className="font-display text-2xl sm:text-3xl font-semibold text-neutral-900 mb-6">
              Want to participate?
            </p>
            
            <Button
              variant="primary"
              size="lg"
              data-analytics-id="cta-participate"
            >
              Yes! Let&apos;s Go :)
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

CTASection.displayName = "CTASection";
