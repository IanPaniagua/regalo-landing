import React from "react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

/**
 * Header component with logo
 * Sticky navigation bar with minimal design
 */
export const Header: React.FC = () => {
  return (
    <header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200"
      data-analytics-section="header"
    >
      <Container as="div" className="py-4">
        <nav className="flex items-center justify-between">
          <Logo size="md" />
        </nav>
      </Container>
    </header>
  );
};

Header.displayName = "Header";
