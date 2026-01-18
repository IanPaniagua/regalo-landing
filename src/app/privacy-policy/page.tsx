import React from "react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Regalo",
  description: "Learn how Regalo collects, uses, and protects your personal data.",
};

/**
 * Privacy Policy page
 */
export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-6 flex justify-center">
              <Logo size="lg" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
              Privacy Policy
            </h1>
            <p className="font-sans text-neutral-600">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-neutral max-w-none">
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                1. Introduction
              </h2>
              <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                Welcome to Regalo. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit 
                our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                2. Data We Collect
              </h2>
              <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                We may collect, use, store and transfer different kinds of personal data about you:
              </p>
              <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li><strong>Identity Data:</strong> Name</li>
                <li><strong>Contact Data:</strong> Email address</li>
                <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, 
                browser plug-in types and versions, operating system and platform, and other technology on 
                the devices you use to access this website</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, products and services</li>
                <li><strong>Questionnaire Data:</strong> Responses you provide in our product questionnaire</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                3. How We Use Your Data
              </h2>
              <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use 
                your personal data in the following circumstances:
              </p>
              <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>To register you for our waitlist and notify you when Regalo launches</li>
                <li>To understand user needs and improve our product</li>
                <li>To analyze questionnaire responses to develop features that matter to you</li>
                <li>To send you updates about Regalo (only if you've joined the waitlist)</li>
                <li>To improve our website and user experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                4. Cookies and Similar Technologies
              </h2>
              <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. 
                Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3 mt-6">
                Types of Cookies We Use
              </h3>
              
              <div className="mb-4">
                <p className="font-sans text-neutral-700 font-semibold mb-2">
                  Essential Cookies (Always Active)
                </p>
                <p className="font-sans text-neutral-700 leading-relaxed mb-2">
                  These cookies are necessary for the website to function and cannot be switched off. They include:
                </p>
                <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4 ml-4">
                  <li>Cookie consent preferences</li>
                  <li>Session management</li>
                  <li>Security and authentication</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="font-sans text-neutral-700 font-semibold mb-2">
                  Analytics Cookies (Optional - Requires Consent)
                </p>
                <p className="font-sans text-neutral-700 leading-relaxed mb-2">
                  These cookies help us understand how visitors interact with our website. We use:
                </p>
                <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4 ml-4">
                  <li><strong>Google Analytics:</strong> Tracks page views, user behavior, and traffic sources</li>
                  <li><strong>Firebase Analytics:</strong> Tracks events, conversions, and user engagement</li>
                </ul>
                <p className="font-sans text-neutral-700 leading-relaxed mb-2">
                  Information collected includes:
                </p>
                <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-1 mb-4 ml-4">
                  <li>Pages visited and time spent on each page</li>
                  <li>Buttons clicked and forms completed</li>
                  <li>Device type, browser, and screen resolution</li>
                  <li>Geographic location (country/city level)</li>
                  <li>Referral source (how you found our website)</li>
                </ul>
              </div>

              <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3 mt-6">
                Managing Your Cookie Preferences
              </h3>
              <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li><strong>Cookie Banner:</strong> Accept or decline analytics cookies when you first visit our website</li>
                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through their settings</li>
                <li><strong>Google Analytics Opt-out:</strong> Install the{' '}
                  <a 
                    href="https://tools.google.com/dlpage/gaoptout" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-secondary-blue hover:underline"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>
                </li>
              </ul>
              <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                Note: Blocking or deleting cookies may impact your experience on our website. Essential cookies 
                cannot be disabled as they are necessary for the website to function properly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                5. Data Storage and Security
              </h2>
              <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                We store your data securely using Firebase (Google Cloud Platform), which implements 
                industry-standard security measures including:
              </p>
              <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>Encryption in transit and at rest</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Compliance with GDPR and other data protection regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                6. Data Retention
              </h2>
              <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                We will only retain your personal data for as long as reasonably necessary to fulfill the 
                purposes we collected it for, including for the purposes of satisfying any legal, regulatory, 
                tax, accounting or reporting requirements.
              </p>
              <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                Waitlist data and questionnaire responses will be retained until Regalo launches and for a 
                reasonable period thereafter, unless you request deletion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                7. Your Rights
              </h2>
              <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                Under data protection laws, you have rights including:
              </p>
              <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li><strong>Right to access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to rectification:</strong> Correct any inaccurate personal data</li>
                <li><strong>Right to erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Right to restrict processing:</strong> Request that we suspend processing of your data</li>
                <li><strong>Right to data portability:</strong> Receive your data in a structured, commonly used format</li>
                <li><strong>Right to object:</strong> Object to processing of your personal data</li>
              </ul>
              <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                To exercise any of these rights, please contact us at:{' '}
                <a 
                  href="mailto:paniagua.ian.de@gmail.com" 
                  className="text-secondary-blue hover:underline"
                >
                  paniagua.ian.de@gmail.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                8. Third-Party Services
              </h2>
              <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                We use the following third-party services that may collect and process your data:
              </p>
              <ul className="font-sans text-neutral-700 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li><strong>Firebase/Google Cloud Platform:</strong> Data storage and analytics</li>
                <li><strong>Google Analytics:</strong> Website analytics and user behavior tracking</li>
                <li><strong>Vercel:</strong> Website hosting and deployment</li>
              </ul>
              <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                These services have their own privacy policies and we encourage you to review them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                9. International Transfers
              </h2>
              <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                Your data may be transferred to and stored in countries outside your country of residence, 
                including the United States, where our service providers (Google/Firebase) operate data centers. 
                We ensure that appropriate safeguards are in place to protect your data in accordance with 
                applicable data protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                10. Children's Privacy
              </h2>
              <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                Our website is not intended for children under 16 years of age. We do not knowingly collect 
                personal data from children under 16. If you are a parent or guardian and believe your child 
                has provided us with personal data, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by 
                posting the new privacy policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                12. Contact Us
              </h2>
              <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p className="font-sans text-neutral-700 leading-relaxed mb-4">
                Email:{' '}
                <a 
                  href="mailto:privacy@regalo.app" 
                  className="text-secondary-blue hover:underline"
                >
                  privacy@regalo.app
                </a>
              </p>
            </section>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="text-neutral-500 hover:text-neutral-700 transition-colors font-sans text-sm"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
