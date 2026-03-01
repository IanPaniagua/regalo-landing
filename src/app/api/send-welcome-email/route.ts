import { NextRequest, NextResponse } from 'next/server';

/**
 * API endpoint that forwards beta tester signup data to n8n webhook.
 * n8n handles: Google Sheets logging, Email 1 (thank you), and admin notification.
 * Email 2 (download instructions) is triggered separately from n8n when
 * the admin manually marks the user as "✅ Añadido" in Google Sheets.
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

    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL_BETA_SIGNUP;

    if (!n8nWebhookUrl) {
      console.error('❌ N8N_WEBHOOK_URL environment variable is not set');
      return NextResponse.json(
        { error: 'Webhook URL not configured' },
        { status: 500 }
      );
    }

    // Forward the signup data to n8n
    console.log('🔁 Forwarding beta signup to n8n webhook:', { email, name, platform, language });

    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        name,
        platform,
        language,
        source: 'landing',
        registeredAt: new Date().toISOString(),
      }),
    });

    if (!n8nResponse.ok) {
      const errorText = await n8nResponse.text();
      console.error('❌ n8n webhook error:', n8nResponse.status, errorText);
      return NextResponse.json(
        { error: 'Failed to trigger automation workflow' },
        { status: 502 }
      );
    }

    console.log('✅ Beta signup forwarded to n8n successfully');

    return NextResponse.json({
      success: true,
      message: 'Beta signup processed successfully',
    });
  } catch (error) {
    console.error('❌ Error forwarding beta signup to n8n:', error);
    return NextResponse.json(
      { error: 'Failed to process beta signup' },
      { status: 500 }
    );
  }
}
