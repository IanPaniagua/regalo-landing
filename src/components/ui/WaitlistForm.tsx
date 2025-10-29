"use client";

import React, { useState } from "react";
import { Button } from "./Button";

interface WaitlistFormProps {
  onSubmit: (email: string, name: string) => Promise<void>;
  onSkip?: () => void;
}

/**
 * Waitlist signup form component
 * Collects email and name for waitlist
 */
export const WaitlistForm: React.FC<WaitlistFormProps> = ({ onSubmit, onSkip }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!email || !name) {
      setError("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    setIsSubmitting(true);

    try {
      await onSubmit(email, name);
    } catch (err) {
      setError("Something went wrong. Please try again.");
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
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary-gold focus:outline-none transition-colors font-sans"
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
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary-gold focus:outline-none transition-colors font-sans"
            disabled={isSubmitting}
            data-analytics-id="waitlist-email-input"
          />
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
          {isSubmitting ? "Joining..." : "Join Waitlist 🎉"}
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
            Maybe later
          </button>
        )}
      </form>
    </div>
  );
};
