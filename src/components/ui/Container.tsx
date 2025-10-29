import React from "react";

export interface ContainerProps {
  /**
   * Container content
   */
  children: React.ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * HTML element to render
   * @default "div"
   */
  as?: "div" | "section" | "article" | "main" | "header" | "footer";
}

/**
 * Reusable Container component for consistent max-width and padding
 * Provides responsive layout structure
 * 
 * @example
 * ```tsx
 * <Container as="section">
 *   <h1>Content</h1>
 * </Container>
 * ```
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  as: Component = "div",
}) => {
  return (
    <Component className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </Component>
  );
};

Container.displayName = "Container";
