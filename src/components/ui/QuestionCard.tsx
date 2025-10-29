"use client";

import React, { useState } from "react";
import type { Question } from "@/lib/questionnaireData";

interface QuestionCardProps {
  question: Question;
  value: string | string[];
  onChange: (value: string | string[]) => void;
  textValue?: string;
  onTextChange?: (value: string) => void;
}

/**
 * QuestionCard component
 * Renders different question types: single-choice, multiple-choice, text, or combined
 */
export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  value,
  onChange,
  textValue = "",
  onTextChange,
}) => {
  const handleOptionClick = (optionValue: string) => {
    if (question.type === "multiple-choice") {
      const currentValues = Array.isArray(value) ? value : [];
      if (currentValues.includes(optionValue)) {
        onChange(currentValues.filter((v) => v !== optionValue));
      } else {
        onChange([...currentValues, optionValue]);
      }
    } else {
      onChange(optionValue);
    }
  };

  const isSelected = (optionValue: string): boolean => {
    if (Array.isArray(value)) {
      return value.includes(optionValue);
    }
    return value === optionValue;
  };

  return (
    <div className="mb-4 lg:mb-6" data-analytics-id={`question-${question.id}`}>
      <h3 className="font-sans text-sm sm:text-base lg:text-lg text-neutral-800 mb-3 leading-relaxed">
        {question.question}
      </h3>

      {question.options && (
        <div className="flex flex-wrap gap-2 mb-3">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={`px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl border-2 transition-all duration-200 font-sans text-xs sm:text-sm
                ${
                  isSelected(option.value)
                    ? "border-secondary-gold bg-secondary-light text-neutral-900"
                    : "border-neutral-300 bg-white text-neutral-700 hover:border-secondary-gold"
                }`}
              data-analytics-id={`option-${option.value}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {question.hasTextInput && onTextChange && (
        <div className="mt-3">
          <textarea
            value={textValue}
            onChange={(e) => onTextChange(e.target.value)}
            placeholder={question.placeholder || "Your answer..."}
            className="w-full px-3 py-2 lg:px-4 lg:py-3 rounded-2xl border-2 border-neutral-300 focus:border-secondary-gold focus:outline-none resize-none bg-neutral-50 font-sans text-sm text-neutral-800"
            rows={2}
            data-analytics-id={`text-input-${question.id}`}
          />
        </div>
      )}
    </div>
  );
};

QuestionCard.displayName = "QuestionCard";
