import React from "react";

export interface LogoProps {
  /**
   * Size of the logo
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Regalo App Logo component
 * Simple gift box icon with brand name
 * 
 * @example
 * ```tsx
 * <Logo size="lg" />
 * ```
 */
export const Logo: React.FC<LogoProps> = ({ size = "md", className = "" }) => {
  const sizeStyles = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  };
  
  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };
  
  return (
    <div className={`flex items-center gap-2 ${className}`} data-analytics-id="logo">
      {/* Gift box icon */}
      <svg
        className={sizeStyles[size]}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Regalo App Logo"
      >
        <rect x="3" y="10" width="18" height="11" rx="1" stroke="currentColor" strokeWidth="2" />
        <path d="M3 10h18V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2Z" stroke="currentColor" strokeWidth="2" />
        <path d="M12 7V21" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 7s-1.5-3-3-3c-1 0-1.5.5-1.5 1.5S8.5 7 10 7h2Zm0 0s1.5-3 3-3c1 0 1.5.5 1.5 1.5S15.5 7 14 7h-2Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      
      <span className={`font-display font-semibold tracking-wide ${textSizes[size]}`}>
        REGALO
      </span>
    </div>
  );
};

Logo.displayName = "Logo";
