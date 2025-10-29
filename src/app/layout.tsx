import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/ui/CookieBanner";

/**
 * Cormorant Garamond - Luxury display font with a playful touch
 * Used for headings and prominent text
 */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

/**
 * Inter - Clean, modern sans-serif font
 * Used for body text and UI elements
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Regalo App - Never Miss a Special Date",
  description: "Keep track of important dates and give gifts on time with Regalo App. Create your profile, know your loved ones' preferences, and organize gifts easily.",
  keywords: ["gifts", "reminders", "special dates", "gift organization", "birthdays"],
  authors: [{ name: "Regalo App" }],
  openGraph: {
    title: "Regalo App - Never Miss a Special Date",
    description: "Keep track of important dates and give gifts on time with Regalo App.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
