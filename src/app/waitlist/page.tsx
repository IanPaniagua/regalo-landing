"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { saveWaitlistSignup } from "@/lib/firestoreService";
import { trackWaitlistView, trackWaitlistSignup, trackWaitlistSkip } from "@/lib/analytics";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Waitlist standalone page
 * Allows users to join waitlist directly from landing page
 */
export default function WaitlistPage() {
  const router = useRouter();
  const [isJoined, setIsJoined] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    trackWaitlistView('landing');
  }, []);

  const handleSubmit = async (email: string, name: string) => {
    await saveWaitlistSignup(email, name, 'landing');
    trackWaitlistSignup('landing');
    setIsJoined(true);
  };

  const handleSkip = () => {
    trackWaitlistSkip('landing');
    router.push('/');
  };

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-12">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8 flex justify-center">
            <Logo size="lg" />
          </div>

          {!isJoined ? (
            <>
              <h1 className="font-display text-5xl sm:text-6xl font-bold text-neutral-900 mb-6">
                {t.waitlist.title}
              </h1>

              <p className="font-sans text-xl text-neutral-700 mb-4 leading-relaxed">
                {t.waitlist.subtitle}
              </p>

              <p className="font-sans text-lg text-neutral-600 mb-12">
                {t.waitlist.description}
              </p>

              <WaitlistForm onSubmit={handleSubmit} onSkip={handleSkip} />
            </>
          ) : (
            <>
              <div className="mb-6">
                <span className="text-6xl">🎉</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl font-bold text-neutral-900 mb-6">
                {t.waitlist.successTitle}
              </h1>

              <p className="font-sans text-xl text-neutral-700 mb-8 leading-relaxed">
                {t.waitlist.successMessage}
              </p>

              <Button
                variant="primary"
                size="lg"
                onClick={handleGoHome}
                data-analytics-id="waitlist-joined-home"
              >
                {t.waitlist.backHome}
              </Button>
            </>
          )}
        </div>
      </Container>
    </main>
  );
}
