import React from "react";

/**
 * Button component variants
 * - primary: Gold background with dark text (main CTA)
 * - secondary: White background with gold border
 * - tertiary: Red background with white text (accent)
 * - premium: Animated background with glow for extreme attention
 */
export type ButtonVariant = "primary" | "secondary" | "tertiary" | "premium";

/**
 * Button component sizes
 */
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant of the button
   * @default "primary"
   */
  variant?: ButtonVariant;

  /**
   * Size of the button
   * @default "md"
   */
  size?: ButtonSize;

  /**
   * Button content
   */
  children: React.ReactNode;

  /**
   * Data attribute for analytics tracking
   */
  "data-analytics-id"?: string;
}

/**
 * Reusable Button component with multiple variants and sizes
 * Designed for analytics tracking with data-analytics-id attribute
 * 
 * @example
 * ```tsx
 * <Button variant="primary" data-analytics-id="hero-cta">
 *   Discover More
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className = "",
      children,
      "data-analytics-id": analyticsId,
      ...props
    },
    ref
  ) => {
    const baseStyles = "font-display font-medium transition-all duration-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantStyles = {
      primary: "bg-secondary-blue text-white hover:bg-secondary-dark focus:ring-secondary-blue shadow-lg hover:shadow-xl",
      secondary: "bg-white border-2 border-secondary-blue text-neutral-900 hover:bg-neutral-50 focus:ring-secondary-blue",
      tertiary: "bg-tertiary-red text-white hover:bg-tertiary-dark focus:ring-tertiary-red shadow-lg hover:shadow-xl",
      premium: "bg-gradient-to-r from-secondary-blue via-secondary-light to-secondary-blue bg-[length:200%_auto] animate-shimmer text-white hover:scale-105 shadow-[0_0_20px_rgba(91,159,237,0.4)] hover:shadow-[0_0_35px_rgba(91,159,237,0.8)] border border-secondary-light/50",
    };

    const sizeStyles = {
      sm: "px-6 py-2 text-sm",
      md: "px-8 py-3 text-base",
      lg: "px-10 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        data-analytics-id={analyticsId}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
