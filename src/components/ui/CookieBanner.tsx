"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Cookie consent banner
 * Shows on first visit and allows users to accept/decline analytics cookies
 */
export const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('regalo_cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('regalo_cookie_consent', 'accepted');
    setShowBanner(false);
    // Analytics will initialize automatically on next page load
    window.location.reload();
  };

  const handleDecline = () => {
    localStorage.setItem('regalo_cookie_consent', 'declined');
    setShowBanner(false);
    // User declined, analytics won't initialize
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-neutral-900 text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="font-sans text-sm sm:text-base leading-relaxed">
              {t.cookies.message}{' '}
              <Link 
                href="/privacy-policy" 
                className="text-secondary-gold hover:underline"
              >
                {t.cookies.learnMore}
              </Link>
            </p>
          </div>
          
          <div className="flex gap-3 w-full sm:w-auto">
            <Button
              variant="secondary"
              size="md"
              onClick={handleDecline}
              className="flex-1 sm:flex-none"
              data-analytics-id="cookie-decline"
            >
              {t.cookies.decline}
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={handleAccept}
              className="flex-1 sm:flex-none"
              data-analytics-id="cookie-accept"
            >
              {t.cookies.accept}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
