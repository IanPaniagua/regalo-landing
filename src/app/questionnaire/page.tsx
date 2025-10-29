"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { QuestionCard } from "@/components/ui/QuestionCard";
import { questionnaireSteps } from "@/lib/questionnaireData";
import { Logo } from "@/components/ui/Logo";
import { saveQuestionnaireData } from "@/lib/questionnaireStorage";
import { useRouter } from "next/navigation";
import { 
  trackQuestionnaireStart, 
  trackQuestionnaireStep, 
  trackQuestionnaireComplete,
  trackQuestionnaireExit,
  trackQuestionResponse,
  trackWaitlistView,
  trackWaitlistSignup,
  trackWaitlistSkip
} from "@/lib/analytics";
import { saveQuestionnaireToFirestore, calculateFeatureScores, saveWaitlistSignup } from "@/lib/firestoreService";
import { WaitlistForm } from "@/components/ui/WaitlistForm";

interface FormData {
  [key: string]: {
    value: string | string[];
    textValue?: string;
  };
}

/**
 * Questionnaire page component
 * Full-page interactive questionnaire with animations
 */
export default function QuestionnairePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [isComplete, setIsComplete] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [startTime] = useState(Date.now());
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlistJoined, setWaitlistJoined] = useState(false);

  const step = questionnaireSteps[currentStep];
  const isLastStep = currentStep === questionnaireSteps.length - 1;

  // Track questionnaire start on mount
  useEffect(() => {
    trackQuestionnaireStart();
  }, []);

  // Track waitlist view when shown
  useEffect(() => {
    if (showWaitlist && !waitlistJoined) {
      trackWaitlistView('questionnaire');
    }
  }, [showWaitlist, waitlistJoined]);

  // Animation sequence: both sides appear smoothly from their directions
  // Reset and trigger animation on step change
  useEffect(() => {
    // Track step view
    trackQuestionnaireStep(step.id, currentStep + 1);
    
    // Reset animation state
    setShowDescription(false);

    // Trigger animation after a brief delay
    const timer = setTimeout(() => {
      setShowDescription(true);
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [currentStep, step.id]);

  const handleQuestionChange = (questionId: string, value: string | string[]) => {
    setFormData((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        value,
      },
    }));
    
    // Track question response
    const responseType = Array.isArray(value) ? 'multiple-choice' : 'single-choice';
    trackQuestionResponse(questionId, responseType);
  };

  const handleTextChange = (questionId: string, textValue: string) => {
    setFormData((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        textValue,
      },
    }));
  };

  const handleNext = async () => {
    if (isLastStep) {
      // Calculate time spent
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      
      // Track completion
      trackQuestionnaireComplete(timeSpent);
      
      // Calculate feature scores
      const scores = calculateFeatureScores(formData);
      
      // Save to Firestore
      const firestoreId = await saveQuestionnaireToFirestore(formData, {
        timeSpent,
        completedSteps: questionnaireSteps.length,
        totalSteps: questionnaireSteps.length,
      });
      
      // Save to localStorage with Firestore ID
      saveQuestionnaireData(formData, firestoreId || undefined);
      
      setIsComplete(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleGoHome = () => {
    router.push("/");
  };
  
  const handleWaitlistSubmit = async (email: string, name: string) => {
    // Save to Firestore
    await saveWaitlistSignup(email, name, 'questionnaire');
    
    // Track signup
    trackWaitlistSignup('questionnaire');
    
    // Update state
    setWaitlistJoined(true);
  };
  
  const handleWaitlistSkip = () => {
    trackWaitlistSkip('questionnaire');
    router.push("/");
  };
  
  const handleExit = () => {
    // Track exit/dropoff
    trackQuestionnaireExit(step.id, currentStep + 1);
    router.push("/");
  };

  // Thank you screen with waitlist
  if (isComplete) {
    return (
      <main
        className="min-h-screen bg-white flex items-center justify-center py-12"
        data-analytics-section="questionnaire-complete"
      >
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-8 flex justify-center">
              <Logo size="lg" />
            </div>

            {!waitlistJoined ? (
              // Show waitlist form
              !showWaitlist ? (
                // Initial thank you with CTA
                <>
                  <h1 className="font-display text-5xl sm:text-6xl font-bold text-neutral-900 mb-6">
                    THANK YOU!
                  </h1>

                  <p className="font-sans text-xl text-neutral-700 mb-8 leading-relaxed">
                    Your feedback is invaluable to us. We've saved your responses and will use them to make Regalo even better!
                  </p>

                  <p className="font-sans text-lg text-neutral-600 mb-8">
                    Want to be the first to know when Regalo launches?
                  </p>

                  <div className="space-y-4">
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => setShowWaitlist(true)}
                      data-analytics-id="show-waitlist-form"
                      className="w-full sm:w-auto"
                    >
                      Join Waitlist 🎉
                    </Button>

                    <div>
                      <button
                        onClick={handleGoHome}
                        className="text-neutral-500 hover:text-neutral-700 transition-colors font-sans text-sm"
                        data-analytics-id="skip-waitlist-home"
                      >
                        Maybe later, back to home
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                // Show waitlist form
                <>
                  <h2 className="font-display text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
                    Join the Waitlist
                  </h2>

                  <p className="font-sans text-lg text-neutral-600 mb-8">
                    Be the first to experience Regalo when we launch!
                  </p>

                  <WaitlistForm
                    onSubmit={handleWaitlistSubmit}
                    onSkip={handleWaitlistSkip}
                  />
                </>
              )
            ) : (
              // Waitlist joined confirmation
              <>
                <div className="mb-6">
                  <span className="text-6xl">🎉</span>
                </div>

                <h1 className="font-display text-5xl sm:text-6xl font-bold text-neutral-900 mb-6">
                  You're on the list!
                </h1>

                <p className="font-sans text-xl text-neutral-700 mb-8 leading-relaxed">
                  We'll notify you as soon as Regalo is ready. Get ready for a better way to give gifts!
                </p>

                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleGoHome}
                  data-analytics-id="waitlist-joined-home"
                >
                  Back to Home
                </Button>
              </>
            )}
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main
      className="h-screen bg-white flex flex-col overflow-hidden"
      data-analytics-section="questionnaire"
      data-analytics-step={step.id}
    >
      {/* Header */}
      <header className="flex-shrink-0 border-b border-neutral-200 py-3">
        <Container>
          <div className="flex justify-center items-center relative">
            <Logo size="md" />
            <button
              onClick={handleExit}
              className="absolute right-0 text-neutral-500 hover:text-neutral-900 transition-colors font-sans text-sm"
              data-analytics-id="questionnaire-exit"
            >
              Exit
            </button>
          </div>
        </Container>
      </header>

      {/* Progress bar */}
      <div className="flex-shrink-0 py-3">
        <Container>
          <div className="flex gap-2">
            {questionnaireSteps.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 lg:h-2 flex-1 rounded-full transition-all duration-500 ${
                  index <= currentStep ? "bg-secondary-gold" : "bg-neutral-200"
                }`}
              />
            ))}
          </div>
        </Container>
      </div>

      {/* Main content - flex-1 to fill available space with scroll */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <Container className="h-full py-4 lg:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start min-h-full">
            {/* Left side - Description and visual */}
            <div
              className={`flex flex-col transition-all duration-700 transform ${
                showDescription
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-4 sm:p-5 lg:p-6 shadow-sm">
                <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 mb-3 lg:mb-4">
                  {step.title}
                </h1>

                <p className="font-sans text-sm sm:text-base lg:text-lg text-neutral-700 leading-relaxed mb-4 lg:mb-6">
                  {step.description}
                </p>

                {/* Visual - show specific image for known steps, else placeholder */}
                {["calendar", "profile", "access", "reminders", "share"].includes(step.id) ? (
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
                    <Image
                      src={
                        step.id === "calendar"
                          ? "/calender.png"
                          : step.id === "profile"
                          ? "/profile.jpg"
                          : step.id === "access"
                          ? "/share.jpg"
                          : step.id === "reminders"
                          ? "/reminder.jpg"
                          : "/together.png"
                      }
                      alt={
                        step.id === "calendar"
                          ? "Calendar"
                          : step.id === "profile"
                          ? "Profile"
                          : step.id === "access"
                          ? "Access Profile"
                          : step.id === "reminders"
                          ? "Reminders"
                          : "Next Steps"
                      }
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 45vw, 100vw"
                    />
                  </div>
                ) : (
                  <div className="rounded-2xl w-full aspect-[16/9] flex items-center justify-center">
                    <span className="text-neutral-400 font-sans text-xs lg:text-sm">
                      Visual placeholder
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Right side - Questions */}
            <div
              className={`flex flex-col transition-all duration-700 transform lg:border-l lg:border-neutral-200 lg:pl-10 ${
                showDescription
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
            >
              <div className="rounded-3xl border border-neutral-200 bg-white p-4 sm:p-5 lg:p-6 shadow-sm">
                {/* Section Title */}
                <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4 lg:mb-6">
                  About {step.title}
                </h2>

                <div className="space-y-4 lg:space-y-6">
                  {step.questions.map((question, index) => (
                    <div
                      key={question.id}
                      className="transition-all duration-500"
                      style={{
                        transitionDelay: showDescription ? `${(index + 1) * 200}ms` : "0ms",
                      }}
                    >
                      <QuestionCard
                        question={question}
                        value={
                          formData[question.id]?.value ||
                          (question.type === "multiple-choice" ? [] : "")
                        }
                        onChange={(value) => handleQuestionChange(question.id, value)}
                        textValue={formData[question.id]?.textValue || ""}
                        onTextChange={
                          question.hasTextInput
                            ? (value) => handleTextChange(question.id, value)
                            : undefined
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Navigation footer */}
      <footer className="flex-shrink-0 border-t border-neutral-200 py-3">
        <Container>
          <div className="flex justify-between items-center">
            <Button
              variant="secondary"
              size="md"
              onClick={handleBack}
              disabled={currentStep === 0}
              className={currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""}
              data-analytics-id="questionnaire-back"
            >
              Back
            </Button>

            <Button
              variant="primary"
              size="md"
              onClick={handleNext}
              data-analytics-id={
                isLastStep ? "questionnaire-submit" : "questionnaire-next"
              }
            >
              {isLastStep ? "Submit" : "Next"}
            </Button>
          </div>
        </Container>
      </footer>
    </main>
  );
}
