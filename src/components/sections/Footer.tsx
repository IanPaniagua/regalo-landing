import React from "react";
import { Container } from "@/components/ui/Container";

/**
 * Footer component
 * Simple footer with minimal branding
 */
export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-neutral-200 py-12"
      data-analytics-section="footer"
    >
      <Container>
        <div className="text-center">
          <p className="font-display text-lg text-neutral-600">
            Footer
          </p>
        </div>
      </Container>
    </footer>
  );
};

Footer.displayName = "Footer";
