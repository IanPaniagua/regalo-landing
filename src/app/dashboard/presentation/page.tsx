"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { DashboardAuth } from "@/components/DashboardAuth";

/**
 * Presentation Builder - Create pitch deck slides for Regalo project
 * Format: 16:9 slides with export to PDF/images
 */
export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      component: <Slide1 />,
    },
    {
      id: 2,
      component: <Slide2 />,
    },
    {
      id: 3,
      component: <Slide3 />,
    },
    // More slides will be added as you provide content
  ];

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  return (
    <DashboardAuth>
      <main className="min-h-screen bg-neutral-50 py-8">
        <Container>
          {/* Header */}
          <div className="mb-8 flex justify-between items-center">
            <div>
              <Logo size="md" />
              <h1 className="font-display text-3xl font-bold text-neutral-900 mt-4">
                Presentation Builder
              </h1>
              <p className="text-neutral-600 text-sm">
                Create and export your pitch deck
              </p>
            </div>
            
            {/* Export buttons */}
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors text-sm font-medium">
                Export All to PDF
              </button>
              <button className="px-4 py-2 border border-neutral-300 text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors text-sm font-medium">
                Export Slide as Image
              </button>
            </div>
          </div>

          {/* Slide container - 16:9 aspect ratio */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <div className="absolute inset-0">
                {slides[currentSlide].component}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => goToSlide(currentSlide - 1)}
              disabled={currentSlide === 0}
              className="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>
            
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide
                      ? 'bg-secondary-gold'
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => goToSlide(currentSlide + 1)}
              disabled={currentSlide === slides.length - 1}
              className="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>

          {/* Slide counter */}
          <p className="text-center text-neutral-500 text-sm mt-4">
            Slide {currentSlide + 1} of {slides.length}
          </p>
        </Container>
      </main>
    </DashboardAuth>
  );
}

/**
 * Slide 1: Introduction
 */
function Slide1() {
  return (
    <div className="w-full h-full bg-neutral-50 p-16 flex flex-col justify-between">
      {/* Title */}
      <div>
        <h1 className="font-display text-6xl font-bold text-neutral-900 mb-4">
          We want to validate the
        </h1>
        <h1 className="font-display text-6xl font-bold text-neutral-900 flex items-center gap-4">
          Regalo App project
          <span className="text-7xl">🎁</span>
        </h1>
      </div>

      {/* Two columns */}
      <div className="grid grid-cols-2 gap-16 mt-auto">
        {/* Left column */}
        <div>
          <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4 relative inline-block">
            What is Regalo App?
            <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary-gold"></span>
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed">
            Regalos is a mobile app designed to help users remember and celebrate important dates like birthdays or anniversaries.
          </p>
        </div>

        {/* Right column */}
        <div>
          <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4 relative inline-block">
            What problem wants to solve?
            <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary-gold"></span>
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed">
            Many people forget birthdays or special occasions, and organizing gifts is often complicated and stressful.
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Slide 2: Solution Proposal
 */
function Slide2() {
  const solutions = [
    {
      feature: "Personalized user profiles",
      description: "Users can add preferences: clothing sizes, hobbies, \"don't give me this\" info, etc.",
    },
    {
      feature: "Birthday & special date calendar",
      description: "Users can store birthdays and important dates for friends/family.",
    },
    {
      feature: "Reminder system",
      description: "Notifications sent in advance (1 week, 3 days, or custom).",
    },
    {
      feature: "Collaborative gifting",
      description: "Users can organize gifts together in groups.",
    },
    {
      feature: "QR on gift cards",
      description: "Users can share profile information via QR code.",
    },
    {
      feature: "Social sharing",
      description: "Users can invite friends or share the app with loved ones.",
    },
  ];

  return (
    <div className="w-full h-full bg-neutral-50 p-16 flex flex-col">
      {/* Title */}
      <h1 className="font-display text-5xl font-bold text-neutral-900 mb-12 relative inline-block">
        Solution Proposal
        <span className="absolute bottom-0 left-0 w-full h-1.5 bg-secondary-gold"></span>
      </h1>

      {/* Table */}
      <div className="flex-1 overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-neutral-900">
              <th className="text-left pb-4 font-display text-xl font-semibold text-neutral-900 w-2/5">
                Feature / Solution
              </th>
              <th className="text-left pb-4 font-display text-xl font-semibold text-neutral-900 w-3/5">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {solutions.map((solution, index) => (
              <tr
                key={index}
                className="border-b border-neutral-200 hover:bg-neutral-100 transition-colors"
              >
                <td className="py-4 pr-8 font-medium text-neutral-900 text-base align-top">
                  {solution.feature}
                </td>
                <td className="py-4 text-neutral-700 text-base leading-relaxed align-top">
                  {solution.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/**
 * Slide 3: Landing Page
 */
function Slide3() {
  return (
    <div className="w-full h-full bg-neutral-50 p-16 flex flex-col">
      {/* Title */}
      <h1 className="font-display text-5xl font-bold text-neutral-900 mb-10">
        Landing Page
      </h1>

      {/* Two columns */}
      <div className="grid grid-cols-2 gap-12 flex-1">
        {/* Left column */}
        <div className="flex flex-col">
          {/* Image */}
          <div className="mb-6 rounded-lg overflow-hidden shadow-md bg-neutral-100 aspect-video">
            <img 
              src="/cuestionary.png" 
              alt="Questionnaire" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-3 relative inline-block">
            Presentation + Cuestionary
            <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary-gold"></span>
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed">
            The user can discover the sections of the app while they can response our cuestionary
          </p>
        </div>

        {/* Right column */}
        <div className="flex flex-col">
          {/* Image */}
          <div className="mb-6 rounded-lg overflow-hidden shadow-md bg-neutral-100 aspect-video">
            <img 
              src="/waitlist-form.png" 
              alt="Waitlist Form" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-3 relative inline-block">
            Waitlist offer
            <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary-gold"></span>
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed">
            They can join to the waitlist, there ar a cta in the hero and after complete the cuestionary
          </p>
        </div>
      </div>
    </div>
  );
}
