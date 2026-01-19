"use client";

import React, { useState } from "react";
import { Button } from "./Button";
import { useLanguage } from "@/contexts/LanguageContext";

interface WaitlistFormProps {
  onSubmit: (email: string, name: string, platform: string, language: string) => Promise<void>;
  onSkip?: () => void;
}

/**
 * Waitlist signup form component
 * Collects email and name for waitlist
 */
export const WaitlistForm: React.FC<WaitlistFormProps> = ({ onSubmit, onSkip }) => {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!email || !name || !platform) {
      if (!platform) {
        setError(t.waitlist.errorSelectPlatform);
      } else {
        setError(t.waitlist.errorAllFields);
      }
      return;
    }

    if (!email.includes("@")) {
      setError(t.waitlist.errorInvalidEmail);
      return;
    }

    setIsSubmitting(true);

    try {
      await onSubmit(email, name, platform, language);
    } catch (err) {
      setError(t.waitlist.errorGeneric);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block font-sans text-sm font-medium text-neutral-700 mb-2"
          >
            {t.waitlist.nameLabel}
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.waitlist.namePlaceholder}
            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary-blue focus:outline-none transition-colors font-sans"
            disabled={isSubmitting}
            data-analytics-id="waitlist-name-input"
          />
        </div>

        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block font-sans text-sm font-medium text-neutral-700 mb-2"
          >
            {t.waitlist.emailLabel}
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.waitlist.emailPlaceholder}
            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary-blue focus:outline-none transition-colors font-sans"
            disabled={isSubmitting}
            data-analytics-id="waitlist-email-input"
          />
          <p className="mt-2 text-xs text-neutral-600 flex items-start gap-1">
            <span className="text-secondary-blue mt-0.5">ℹ️</span>
            <span>{t.waitlist.emailHelp}</span>
          </p>
        </div>

        {/* Platform Selection */}
        <div>
          <label className="block font-sans text-sm font-medium text-neutral-700 mb-3">
            {t.waitlist.platformLabel}
          </label>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-4 rounded-xl border-2 border-neutral-200 hover:border-secondary-blue cursor-pointer transition-colors">
              <input
                type="radio"
                name="platform"
                value="ios"
                checked={platform === "ios"}
                onChange={(e) => setPlatform(e.target.value)}
                disabled={isSubmitting}
                className="w-5 h-5 text-secondary-blue focus:ring-secondary-blue"
                data-analytics-id="waitlist-platform-ios"
              />
              <div className="flex items-center gap-3 flex-1">
                <svg className="w-6 h-6 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="font-sans text-neutral-900">{t.waitlist.platformIOS}</span>
              </div>
            </label>
            <label className="flex items-center gap-3 p-4 rounded-xl border-2 border-neutral-200 hover:border-secondary-blue cursor-pointer transition-colors">
              <input
                type="radio"
                name="platform"
                value="android"
                checked={platform === "android"}
                onChange={(e) => setPlatform(e.target.value)}
                disabled={isSubmitting}
                className="w-5 h-5 text-secondary-blue focus:ring-secondary-blue"
                data-analytics-id="waitlist-platform-android"
              />
              <div className="flex items-center gap-3 flex-1">
                <svg className="w-6 h-6 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.341c-.538-.586-.894-1.372-.894-2.341s.356-1.755.894-2.341l-1.477-1.477c-.989.989-1.6 2.356-1.6 3.818s.611 2.829 1.6 3.818l1.477-1.477zm3.6-3.6c0-2.926-1.174-5.574-3.074-7.474l-1.477 1.477c1.511 1.511 2.451 3.599 2.451 5.997s-.94 4.486-2.451 5.997l1.477 1.477c1.9-1.9 3.074-4.548 3.074-7.474zM12 2.074L5.074 9H1v6h4.074L12 21.926V2.074z"/>
                </svg>
                <span className="font-sans text-neutral-900">{t.waitlist.platformAndroid}</span>
              </div>
            </label>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-tertiary-red text-sm font-sans">{error}</p>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
          data-analytics-id="waitlist-submit"
        >
          {isSubmitting ? "..." : t.waitlist.submit}
        </Button>

        {/* Skip Button */}
        {onSkip && (
          <button
            type="button"
            onClick={onSkip}
            className="w-full text-center text-neutral-500 hover:text-neutral-700 transition-colors font-sans text-sm py-2"
            disabled={isSubmitting}
            data-analytics-id="waitlist-skip"
          >
            {t.waitlist.skip}
          </button>
        )}
      </form>
    </div>
  );
};
