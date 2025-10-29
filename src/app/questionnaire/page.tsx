"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { QuestionCard } from "@/components/ui/QuestionCard";
import { questionnaireSteps } from "@/lib/questionnaireData";
import { Logo } from "@/components/ui/Logo";
import { saveQuestionnaireData } from "@/lib/questionnaireStorage";
import { useRouter } from "next/navigation";

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

  const step = questionnaireSteps[currentStep];
  const isLastStep = currentStep === questionnaireSteps.length - 1;

  // Animation sequence: both sides appear smoothly from their directions
  // Reset and trigger animation on step change
  useEffect(() => {
    // Reset animation state
    setShowDescription(false);

    // Trigger animation after a brief delay
    const timer = setTimeout(() => {
      setShowDescription(true);
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [currentStep]);

  const handleQuestionChange = (questionId: string, value: string | string[]) => {
    setFormData((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        value,
      },
    }));
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

  const handleNext = () => {
    if (isLastStep) {
      saveQuestionnaireData(formData);
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

  // Thank you screen
  if (isComplete) {
    return (
      <main
        className="min-h-screen bg-white flex items-center justify-center"
        data-analytics-section="questionnaire-complete"
      >
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-8 flex justify-center">
              <Logo size="lg" />
            </div>

            <h1 className="font-display text-5xl sm:text-6xl font-bold text-neutral-900 mb-6">
              THANK YOU!
            </h1>

            <p className="font-sans text-xl text-neutral-700 mb-12 leading-relaxed">
              Your feedback is invaluable to us. We've saved your responses and will use them to make Regalo even better!
            </p>

            <Button
              variant="primary"
              size="lg"
              onClick={handleGoHome}
              data-analytics-id="questionnaire-home"
            >
              Back to Home
            </Button>
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
              onClick={handleGoHome}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start min-h-full">
            {/* Left side - Description and visual */}
            <div
              className={`flex flex-col transition-all duration-700 transform ${
                showDescription
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 mb-3 lg:mb-4">
                {step.title}
              </h1>

              <p className="font-sans text-sm sm:text-base lg:text-lg text-neutral-700 leading-relaxed mb-4 lg:mb-6">
                {step.description}
              </p>

              {/* Visual placeholder - wide rectangular format */}
              <div className="bg-neutral-100 rounded-3xl w-full aspect-[16/9] flex items-center justify-center">
                <span className="text-neutral-400 font-sans text-xs lg:text-sm">
                  Visual placeholder
                </span>
              </div>
            </div>

            {/* Right side - Questions */}
            <div
              className={`flex flex-col transition-all duration-700 transform ${
                showDescription
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
            >
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
