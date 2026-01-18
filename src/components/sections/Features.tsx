"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Features section component
 * Displays three main product features with real app screenshots
 */
export const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      id: "feature-calendar",
      tag: t.features.calendar.tag,
      title: t.features.calendar.title,
      subtitle: t.features.calendar.subtitle,
      description: t.features.calendar.description,
      bulletPoints: [
        t.features.calendar.bullet1,
        t.features.calendar.bullet2,
        t.features.calendar.bullet3,
        t.features.calendar.bullet4,
      ],
      image: "/calendar.png",
      imageAlt: "Calendar view showing birthdays",
    },
    {
      id: "feature-connect",
      tag: t.features.connect.tag,
      title: t.features.connect.title,
      subtitle: t.features.connect.subtitle,
      description: t.features.connect.description,
      bulletPoints: [
        t.features.connect.bullet1,
        t.features.connect.bullet2,
        t.features.connect.bullet3,
        t.features.connect.bullet4,
      ],
      image: "/connect.png",
      imageAlt: "Connect screen with friends list",
    },
    {
      id: "feature-profile",
      tag: t.features.profile.tag,
      title: t.features.profile.title,
      subtitle: t.features.profile.subtitle,
      description: t.features.profile.description,
      bulletPoints: [
        t.features.profile.bullet1,
        t.features.profile.bullet2,
        t.features.profile.bullet3,
        t.features.profile.bullet4,
      ],
      image: "/profile.png",
      imageAlt: "Profile screen with hobbies and preferences",
    },
    {
      id: "feature-group-gifts",
      tag: t.features.groupGifts.tag,
      title: t.features.groupGifts.title,
      subtitle: t.features.groupGifts.subtitle,
      description: t.features.groupGifts.description,
      bulletPoints: [
        t.features.groupGifts.bullet1,
        t.features.groupGifts.bullet2,
        t.features.groupGifts.bullet3,
        t.features.groupGifts.bullet4,
      ],
      image: "/group-giffting.png",
      imageAlt: "Group gifts screen with active groups",
    },
  ];

  return (
    <section
      id="features"
      className="py-16 sm:py-24 bg-white"
      data-analytics-section="features"
    >
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
            {t.features.sectionTitle}
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            {t.features.sectionSubtitle}
          </p>
        </div>

        {/* Alternating Feature Sections */}
        <div className="space-y-24">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={feature.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
                data-analytics-id={feature.id}
              >
                {/* Screenshot */}
                <div className="w-full lg:w-5/12 flex-shrink-0">
                  <div className="relative aspect-[9/19.5] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="w-full lg:w-7/12">
                  <div className="inline-block bg-secondary-light text-secondary-dark px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {feature.tag}
                  </div>
                  
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-xl text-secondary-blue font-semibold mb-4">
                    {feature.subtitle}
                  </p>
                  
                  <p className="text-lg text-neutral-600 mb-6">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {feature.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-secondary-blue text-xl flex-shrink-0 mt-0.5">✓</span>
                        <span className="text-neutral-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional features list */}
        <div className="mt-24">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-900 mb-12 text-center">
            {t.features.moreFeatures}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Smart Notifications */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-secondary-blue">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🔔</span>
                </div>
                <h4 className="font-display text-lg font-semibold text-neutral-900">Smart Notifications</h4>
              </div>
              <p className="text-neutral-600 leading-relaxed">Timely reminders in your language</p>
            </div>

            {/* Multilingual */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-secondary-blue">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🌍</span>
                </div>
                <h4 className="font-display text-lg font-semibold text-neutral-900">Multilingual</h4>
              </div>
              <p className="text-neutral-600 leading-relaxed">English, Spanish, and German</p>
            </div>

            {/* Dark & Light Themes */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-secondary-blue">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="font-display text-lg font-semibold text-neutral-900">Dark & Light Themes</h4>
              </div>
              <p className="text-neutral-600 leading-relaxed">Choose your preferred style</p>
            </div>

            {/* Smart Auto-Linking */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-secondary-blue">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🔗</span>
                </div>
                <h4 className="font-display text-lg font-semibold text-neutral-900">Smart Auto-Linking</h4>
              </div>
              <p className="text-neutral-600 leading-relaxed">No duplicate entries, ever</p>
            </div>

            {/* Real-time Chat */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-secondary-blue">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💬</span>
                </div>
                <h4 className="font-display text-lg font-semibold text-neutral-900">Real-time Chat</h4>
              </div>
              <p className="text-neutral-600 leading-relaxed">Coordinate group gifts easily</p>
            </div>

            {/* Cross-platform */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-secondary-blue">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">📱</span>
                </div>
                <h4 className="font-display text-lg font-semibold text-neutral-900">Cross-platform</h4>
              </div>
              <p className="text-neutral-600 leading-relaxed">iOS and Android, perfectly synced</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

Features.displayName = "Features";
