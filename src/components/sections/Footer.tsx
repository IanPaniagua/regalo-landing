"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Footer component
 * Simple footer with copyright, privacy policy link, and language switcher
 */
export const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  
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
              {t.footer.privacyPolicy}
            </Link>

            <span className="text-neutral-400">|</span>

            <Link 
              href="/privacy-policy-app" 
              className="hover:text-neutral-900 transition-colors"
              data-analytics-id="footer-privacy-policy-app"
            >
              {t.footer.appPrivacyPolicy}
            </Link>
            
            <span className="text-neutral-400">|</span>
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2">
              <span className="text-neutral-500">{t.footer.language}:</span>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'en'
                    ? 'bg-secondary-gold text-white font-semibold'
                    : 'hover:text-neutral-900'
                }`}
                data-analytics-id="footer-lang-en"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'es'
                    ? 'bg-secondary-gold text-white font-semibold'
                    : 'hover:text-neutral-900'
                }`}
                data-analytics-id="footer-lang-es"
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('de')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'de'
                    ? 'bg-secondary-gold text-white font-semibold'
                    : 'hover:text-neutral-900'
                }`}
                data-analytics-id="footer-lang-de"
              >
                DE
              </button>
            </div>
          </div>
          
          <p className="font-sans text-sm text-neutral-500">
            © {new Date().getFullYear()} Ian Manuel Paniagua. {t.footer.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
};

Footer.displayName = "Footer";
