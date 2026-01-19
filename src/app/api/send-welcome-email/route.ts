import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
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

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    const adminEmail = process.env.ADMIN_EMAIL || 'ian@regaloapp.com';
    const platformEmoji = platform === 'ios' ? '📱' : '🤖';
    const languageNames = { en: 'English', es: 'Spanish', de: 'German' };

    console.log('📧 Sending welcome email to:', email);
    console.log('📧 Sending admin notification to:', adminEmail);
    console.log('🔑 Using API key:', process.env.RESEND_API_KEY ? 'Present' : 'MISSING!');

    // Send welcome email to user
    const userEmailResult = await resend.emails.send({
      from: 'RegaloApp <onboarding@resend.dev>',
      to: email,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
    });

    console.log('📧 User email result:', JSON.stringify(userEmailResult, null, 2));

    // Send notification to admin
    const adminEmailResult = await resend.emails.send({
      from: 'RegaloApp <onboarding@resend.dev>',
      to: adminEmail,
      subject: `🎯 New Beta Tester: ${name}`,
      html: `
        <h2>New Beta Tester Signup!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Platform:</strong> ${platformEmoji} ${platform.toUpperCase()}</p>
        <p><strong>Language:</strong> ${languageNames[language as EmailLanguage]}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
      text: `
New Beta Tester Signup!

Name: ${name}
Email: ${email}
Platform: ${platform.toUpperCase()}
Language: ${languageNames[language as EmailLanguage]}
Time: ${new Date().toLocaleString()}
      `,
    });

    console.log('📧 Admin email result:', JSON.stringify(adminEmailResult, null, 2));
    console.log('✅ Emails sent successfully!');

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
