import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFFFFF",
          white: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#5B9FED",
          blue: "#5B9FED",
          light: "#A3C9F5",
          dark: "#3D7DD1",
        },
        tertiary: {
          DEFAULT: "#DC143C",
          red: "#DC143C",
          light: "#FF6B88",
          dark: "#B01030",
        },
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(91,159,237,0.4)', transform: 'scale(1)' },
          '50%': { opacity: '0.9', boxShadow: '0 0 30px rgba(91,159,237,0.7)', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
