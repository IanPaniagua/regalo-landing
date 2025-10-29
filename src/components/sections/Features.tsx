import React from "react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Container } from "@/components/ui/Container";

/**
 * Features section component
 * Displays three main product features in a grid layout
 */
export const Features: React.FC = () => {
  const features = [
    {
      id: "feature-never-forget",
      title: "Never Forget Again",
      description: "Never miss an important date again. Give and receive gifts on time with our smart reminder system.",
    },
    {
      id: "feature-profile",
      title: "Create Your Profile",
      description: "Build your profile and discover the preferences of your loved ones. Make every gift meaningful.",
    },
    {
      id: "feature-organize",
      title: "Organize Gifts Easily",
      description: "Organize gifts as a group in an easy way! Coordinate with friends and family effortlessly.",
    },
  ];

  return (
    <section
      className="py-16 sm:py-24 bg-white"
      data-analytics-section="features"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              data-analytics-id={feature.id}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

Features.displayName = "Features";
