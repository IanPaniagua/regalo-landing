import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Footer component
 * Simple footer with copyright and privacy policy link
 */
export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-neutral-200 py-12"
      data-analytics-section="footer"
    >
      <Container>
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center gap-6 font-sans text-sm text-neutral-600">
            <Link 
              href="/privacy-policy" 
              className="hover:text-neutral-900 transition-colors"
              data-analytics-id="footer-privacy-policy"
            >
              Privacy Policy
            </Link>
          </div>
          
          <p className="font-sans text-sm text-neutral-500">
            © {new Date().getFullYear()} Ian Manuel Paniagua. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

Footer.displayName = "Footer";
