import { NextRequest, NextResponse } from 'next/server';
import { getWelcomeEmail, Platform, EmailLanguage } from '@/lib/emailTemplates';

/**
 * API endpoint to send welcome emails to beta testers
 * Sends personalized emails based on platform (iOS/Android) and language (EN/ES/DE)
 */
export async function POST(request: NextRequest) {
  try {
    const { email, name, platform, language } = await request.json();

    // Validate required fields
    if (!email || !name || !platform || !language) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate platform
    if (platform !== 'ios' && platform !== 'android') {
      return NextResponse.json(
        { error: 'Invalid platform. Must be ios or android' },
        { status: 400 }
      );
    }

    // Validate language
    if (language !== 'en' && language !== 'es' && language !== 'de') {
      return NextResponse.json(
        { error: 'Invalid language. Must be en, es, or de' },
        { status: 400 }
      );
    }

    // Get the appropriate email template
    const emailTemplate = getWelcomeEmail(
      name,
      platform as Platform,
      language as EmailLanguage
    );

    // Send email using Resend (you'll need to set up Resend and add API key to .env)
    // For now, we'll log the email that would be sent
    console.log('📧 Welcome email prepared for:', {
      to: email,
      name,
      platform,
      language,
      subject: emailTemplate.subject,
    });

    // TODO: Uncomment when Resend is configured
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'RegaloApp <hello@regaloapp.com>',
    //   to: email,
    //   subject: emailTemplate.subject,
    //   html: emailTemplate.html,
    //   text: emailTemplate.text,
    // });

    return NextResponse.json({
      success: true,
      message: 'Welcome email sent successfully',
    });
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return NextResponse.json(
      { error: 'Failed to send welcome email' },
      { status: 500 }
    );
  }
}
