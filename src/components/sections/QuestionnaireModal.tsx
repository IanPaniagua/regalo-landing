"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { QuestionCard } from "@/components/ui/QuestionCard";
import { questionnaireSteps } from "@/lib/questionnaireData";
import { Logo } from "@/components/ui/Logo";
import { useLanguage } from "@/contexts/LanguageContext";

interface QuestionnaireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  [key: string]: {
    value: string | string[];
    textValue?: string;
  };
}

/**
 * QuestionnaireModal component
 * Multi-step interactive questionnaire that collects user feedback
 * Saves responses to localStorage
 */
export const QuestionnaireModal: React.FC<QuestionnaireModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [isComplete, setIsComplete] = useState(false);
  const { t } = useLanguage();

  const step = questionnaireSteps[currentStep];
  const isLastStep = currentStep === questionnaireSteps.length - 1;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
      // Save to localStorage using utility function
      const { saveQuestionnaireData } = require("@/lib/questionnaireStorage");
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

  const handleClose = () => {
    setCurrentStep(0);
    setIsComplete(false);
    onClose();
  };

  if (!isOpen) return null;

  // Thank you screen
  if (isComplete) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        data-analytics-section="questionnaire-complete"
      >
        <div className="bg-white rounded-3xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl">
          <div className="p-8 sm:p-12 text-center">
            <div className="mb-8 flex justify-center">
              <Logo size="lg" />
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
              {t.questionnaire.thankYou}
            </h2>
            
            <p className="font-sans text-lg text-neutral-700 mb-8">
              {t.questionnaire.thankYouMessage}
            </p>
            
            <Button
              variant="primary"
              size="lg"
              onClick={handleClose}
              data-analytics-id="questionnaire-close"
            >
              {t.questionnaire.close}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      data-analytics-section="questionnaire-modal"
      data-analytics-step={step.id}
    >
      <div className="bg-white rounded-3xl max-w-5xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-6 sm:p-10">
          {/* Header with logo and close button */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-900">
              {step.title}
            </h2>
            <div className="flex items-center gap-4">
              <Logo size="md" />
              <button
                onClick={handleClose}
                className="text-neutral-500 hover:text-neutral-900 transition-colors"
                aria-label="Close"
                data-analytics-id="questionnaire-close-button"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex gap-2">
              {questionnaireSteps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    index <= currentStep ? "bg-secondary-gold" : "bg-neutral-200"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-neutral-500 mt-2">
              {t.questionnaire.step} {currentStep + 1} {t.questionnaire.of} {questionnaireSteps.length}
            </p>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left side - Description and visual */}
            <div className="order-2 lg:order-1">
              <div className="bg-neutral-100 rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-center">
                <p className="font-sans text-base text-neutral-700 leading-relaxed mb-6">
                  {step.description}
                </p>
                
                {/* Placeholder for visual element */}
                <div className="bg-neutral-200 rounded-2xl aspect-square flex items-center justify-center">
                  <span className="text-neutral-400 font-sans text-sm">{t.questionnaire.visualPlaceholder}</span>
                </div>
              </div>
            </div>

            {/* Right side - Questions */}
            <div className="order-1 lg:order-2">
              {step.questions.map((question) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  value={formData[question.id]?.value || (question.type === "multiple-choice" ? [] : "")}
                  onChange={(value) => handleQuestionChange(question.id, value)}
                  textValue={formData[question.id]?.textValue || ""}
                  onTextChange={
                    question.hasTextInput
                      ? (value) => handleTextChange(question.id, value)
                      : undefined
                  }
                />
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-neutral-200">
            <Button
              variant="secondary"
              size="md"
              onClick={handleBack}
              disabled={currentStep === 0}
              className={currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""}
              data-analytics-id="questionnaire-back"
            >
              {t.questionnaire.back}
            </Button>

            <Button
              variant="primary"
              size="md"
              onClick={handleNext}
              data-analytics-id={isLastStep ? "questionnaire-submit" : "questionnaire-next"}
            >
              {isLastStep ? t.questionnaire.submit : t.questionnaire.next}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

QuestionnaireModal.displayName = "QuestionnaireModal";
