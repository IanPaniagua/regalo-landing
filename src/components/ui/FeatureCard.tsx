import React from "react";

export interface FeatureCardProps {
  /**
   * Feature title
   */
  title: string;
  
  /**
   * Feature description
   */
  description: string;
  
  /**
   * Optional icon or image element
   */
  icon?: React.ReactNode;
  
  /**
   * Data attribute for analytics tracking
   */
  "data-analytics-id"?: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Reusable FeatureCard component for displaying product features
 * Designed with modern rounded borders and minimalist style
 * 
 * @example
 * ```tsx
 * <FeatureCard
 *   title="Never Forget"
 *   description="Keep track of important dates"
 *   data-analytics-id="feature-reminders"
 * />
 * ```
 */
export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  "data-analytics-id": analyticsId,
  className = "",
}) => {
  return (
    <article
      className={`bg-neutral-100 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 ${className}`}
      data-analytics-id={analyticsId}
    >
      {icon && (
        <div className="mb-6 flex justify-center" data-analytics-element="feature-icon">
          {icon}
        </div>
      )}
      
      <h3 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
        {title}
      </h3>
      
      <p className="font-sans text-neutral-600 leading-relaxed">
        {description}
      </p>
    </article>
  );
};

FeatureCard.displayName = "FeatureCard";
