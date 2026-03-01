"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { saveBetaTester, saveWaitlistSignup } from "@/lib/firestoreService";
import {
  trackWaitlistView,
  trackWaitlistSignup,
  trackWaitlistSkip,
  trackBetaView,
  trackBetaSignup,
  trackBetaSkip
} from "@/lib/analytics";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackMetaLead } from "@/lib/metaPixel";

/**
 * Waitlist standalone page content
 */
function WaitlistContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isJoined, setIsJoined] = useState(false);
  const { t } = useLanguage();

  // Determine if this is a beta signup or a waitlist signup
  // Default to beta if not specified for backwards compatibility
  const typeParam = searchParams.get('type');
  const isWaitlist = typeParam === 'waitlist';
  const type = isWaitlist ? 'waitlist' : 'beta';

  useEffect(() => {
    if (isWaitlist) {
      trackWaitlistView('landing');
    } else {
      trackBetaView('landing');
    }
  }, [isWaitlist]);

  const handleSubmit = async (email: string, name: string, platform: string, language: string) => {
    console.log(`🚀 handleSubmit called for ${type} with:`, { email, name, platform, language });

    if (isWaitlist) {
      const signupId = await saveWaitlistSignup(email, name, platform, language, 'landing');
      console.log('💾 saveWaitlistSignup returned ID:', signupId);
      trackWaitlistSignup('landing', platform);
    } else {
      const testerId = await saveBetaTester(email, name, platform, language, 'landing');
      console.log('💾 saveBetaTester returned ID:', testerId);
      trackBetaSignup('landing', platform);
    }

    // Track Meta Pixel Lead event
    trackMetaLead('landing');

    // Send welcome email (works for both, we might want to split templates later)
    try {
      console.log('📧 Calling email API...');
      const response = await fetch('/api/send-welcome-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, platform, language }),
      });
      console.log('📧 Email API response:', response.status);
    } catch (error) {
      console.error('Error sending welcome email:', error);
      // Don't block the user flow if email fails
    }

    console.log('✅ Setting isJoined to true');
    setIsJoined(true);
  };

  const handleSkip = () => {
    if (isWaitlist) {
      trackWaitlistSkip('landing');
    } else {
      trackBetaSkip('landing');
    }
    router.push('/');
  };

  const handleGoHome = () => {
    router.push('/');
  };

  // Select the appropriate translation dictionary
  const tContent = isWaitlist ? t.waitlist : t.beta;

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
                {tContent.title}
              </h1>

              <p className="font-sans text-xl text-neutral-700 mb-4 leading-relaxed">
                {tContent.subtitle}
              </p>

              <p className="font-sans text-lg text-neutral-600 mb-12">
                {tContent.description}
              </p>

              <WaitlistForm onSubmit={handleSubmit} onSkip={handleSkip} isWaitlist={isWaitlist} />
            </>
          ) : (
            <>
              <div className="mb-6">
                <span className="text-6xl">🎉</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl font-bold text-neutral-900 mb-6">
                {tContent.successTitle}
              </h1>

              <p className="font-sans text-xl text-neutral-700 mb-8 leading-relaxed">
                {tContent.successMessage}
              </p>

              <Button
                variant="primary"
                size="lg"
                onClick={handleGoHome}
                data-analytics-id={isWaitlist ? "waitlist-joined-home" : "beta-joined-home"}
              >
                {tContent.backHome}
              </Button>
            </>
          )}
        </div>
      </Container>
    </main>
  );
}

/**
 * Waitlist standalone page wrapper
 * Allows users to join waitlist/beta directly from landing page
 */
export default function WaitlistPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <WaitlistContent />
    </Suspense>
  );
}
