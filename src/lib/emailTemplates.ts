/**
 * Email templates for beta tester welcome emails
 * Different templates based on platform (iOS/Android) and language (EN/ES/DE)
 */

export type Platform = 'ios' | 'android';
export type EmailLanguage = 'en' | 'es' | 'de';

interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

/**
 * Generate personalized welcome email based on platform and language
 */
export function getWelcomeEmail(
  name: string,
  platform: Platform,
  language: EmailLanguage
): EmailTemplate {
  const templates = {
    ios: {
      en: {
        subject: '🎉 Welcome to Regalos App Beta - iOS Testing!',
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #5B9FED 0%, #3D7DD1 100%); color: white; padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 12px; margin-bottom: 20px; }
    .button { display: inline-block; background: #5B9FED; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
    .footer { text-align: center; color: #666; font-size: 14px; margin-top: 30px; }
    h1 { margin: 0; font-size: 28px; }
    h2 { color: #5B9FED; font-size: 22px; margin-top: 0; }
    .emoji { font-size: 24px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎁 Welcome to Regalos App Beta!</h1>
  </div>
  
  <div class="content">
    <h2>Hi ${name}! 👋</h2>
    
    <p>Thank you for joining our <strong>iOS Beta Testing program</strong>! We're thrilled to have you as part of our founding community.</p>
    
    <p><strong>What happens next?</strong></p>
    <ul>
      <li><span class="emoji">📧</span> You'll receive an email with TestFlight instructions within 24-48 hours</li>
      <li><span class="emoji">📱</span> Download Regalos App through TestFlight on your iPhone/iPad</li>
      <li><span class="emoji">🎯</span> Start organizing birthdays and coordinating gifts!</li>
      <li><span class="emoji">💬</span> Share your feedback directly through the app or reply to our emails</li>
    </ul>
    
    <p><strong>Your feedback matters!</strong></p>
    <p>As a beta tester, you're helping shape the future of Regalos App. We want to hear about:</p>
    <ul>
      <li>Features you love ❤️</li>
      <li>Things that could be improved 🔧</li>
      <li>Bugs or issues you encounter 🐛</li>
      <li>New ideas and suggestions 💡</li>
    </ul>
    
    <p>Feel free to reply to this email anytime with your thoughts, questions, or feedback. We read every message!</p>
  </div>
  
  <div class="footer">
    <p><strong>Regalos App Team</strong></p>
    <p>Making birthdays memorable, one celebration at a time 🎂</p>
    <p style="font-size: 12px; color: #999; margin-top: 20px;">
      You're receiving this email because you signed up for Regalos App Beta Testing.
    </p>
  </div>
</body>
</html>
        `,
        text: `
Hi ${name}! 👋

Thank you for joining our iOS Beta Testing program! We're thrilled to have you as part of our founding community.

What happens next?
- You'll receive an email with TestFlight instructions within 24-48 hours
- Download Regalos App through TestFlight on your iPhone/iPad
- Start organizing birthdays and coordinating gifts!
- Share your feedback directly through the app or reply to our emails

Your feedback matters!
As a beta tester, you're helping shape the future of Regalos App. We want to hear about:
- Features you love
- Things that could be improved
- Bugs or issues you encounter
- New ideas and suggestions

Feel free to reply to this email anytime with your thoughts, questions, or feedback. We read every message!

Regalos App Team
Making birthdays memorable, one celebration at a time 🎂
        `
      },
      es: {
        subject: '🎉 Bienvenido a Regalos App Beta - ¡Pruebas en iOS!',
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #5B9FED 0%, #3D7DD1 100%); color: white; padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 12px; margin-bottom: 20px; }
    .button { display: inline-block; background: #5B9FED; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
    .footer { text-align: center; color: #666; font-size: 14px; margin-top: 30px; }
    h1 { margin: 0; font-size: 28px; }
    h2 { color: #5B9FED; font-size: 22px; margin-top: 0; }
    .emoji { font-size: 24px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎁 ¡Bienvenido a Regalos App Beta!</h1>
  </div>
  
  <div class="content">
    <h2>¡Hola ${name}! 👋</h2>
    
    <p>¡Gracias por unirte a nuestro <strong>programa de Beta Testing para iOS</strong>! Estamos encantados de tenerte como parte de nuestra comunidad fundadora.</p>
    
    <p><strong>¿Qué sigue ahora?</strong></p>
    <ul>
      <li><span class="emoji">📧</span> Recibirás un email con instrucciones de TestFlight en 24-48 horas</li>
      <li><span class="emoji">📱</span> Descarga Regalos App a través de TestFlight en tu iPhone/iPad</li>
      <li><span class="emoji">🎯</span> ¡Empieza a organizar cumpleaños y coordinar regalos!</li>
      <li><span class="emoji">💬</span> Comparte tu feedback directamente en la app o respondiendo a nuestros emails</li>
    </ul>
    
    <p><strong>¡Tu feedback es importante!</strong></p>
    <p>Como beta tester, estás ayudando a dar forma al futuro de Regalos App. Queremos saber sobre:</p>
    <ul>
      <li>Funciones que te encantan ❤️</li>
      <li>Cosas que podrían mejorarse 🔧</li>
      <li>Bugs o problemas que encuentres 🐛</li>
      <li>Nuevas ideas y sugerencias 💡</li>
    </ul>
    
    <p>Siéntete libre de responder a este email en cualquier momento con tus pensamientos, preguntas o feedback. ¡Leemos cada mensaje!</p>
  </div>
  
  <div class="footer">
    <p><strong>Equipo Regalos App</strong></p>
    <p>Haciendo los cumpleaños memorables, una celebración a la vez 🎂</p>
    <p style="font-size: 12px; color: #999; margin-top: 20px;">
      Recibes este email porque te registraste en Regalos App Beta Testing.
    </p>
  </div>
</body>
</html>
        `,
        text: `
¡Hola ${name}! 👋

¡Gracias por unirte a nuestro programa de Beta Testing para iOS! Estamos encantados de tenerte como parte de nuestra comunidad fundadora.

¿Qué sigue ahora?
- Recibirás un email con instrucciones de TestFlight en 24-48 horas
- Descarga Regalos App a través de TestFlight en tu iPhone/iPad
- ¡Empieza a organizar cumpleaños y coordinar regalos!
- Comparte tu feedback directamente en la app o respondiendo a nuestros emails

¡Tu feedback es importante!
Como beta tester, estás ayudando a dar forma al futuro de Regalos App. Queremos saber sobre:
- Funciones que te encantan
- Cosas que podrían mejorarse
- Bugs o problemas que encuentres
- Nuevas ideas y sugerencias

Siéntete libre de responder a este email en cualquier momento con tus pensamientos, preguntas o feedback. ¡Leemos cada mensaje!

Equipo Regalos App
Haciendo los cumpleaños memorables, una celebración a la vez 🎂
        `
      },
      de: {
        subject: '🎉 Willkommen bei Regalos App Beta - iOS Testing!',
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #5B9FED 0%, #3D7DD1 100%); color: white; padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 12px; margin-bottom: 20px; }
    .button { display: inline-block; background: #5B9FED; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
    .footer { text-align: center; color: #666; font-size: 14px; margin-top: 30px; }
    h1 { margin: 0; font-size: 28px; }
    h2 { color: #5B9FED; font-size: 22px; margin-top: 0; }
    .emoji { font-size: 24px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎁 Willkommen bei Regalos App Beta!</h1>
  </div>
  
  <div class="content">
    <h2>Hallo ${name}! 👋</h2>
    
    <p>Vielen Dank, dass du unserem <strong>iOS Beta-Testing-Programm</strong> beigetreten bist! Wir freuen uns sehr, dich als Teil unserer Gründer-Community zu haben.</p>
    
    <p><strong>Was passiert als Nächstes?</strong></p>
    <ul>
      <li><span class="emoji">📧</span> Du erhältst innerhalb von 24-48 Stunden eine E-Mail mit TestFlight-Anweisungen</li>
      <li><span class="emoji">📱</span> Lade Regalos App über TestFlight auf dein iPhone/iPad herunter</li>
      <li><span class="emoji">🎯</span> Beginne mit der Organisation von Geburtstagen und der Koordination von Geschenken!</li>
      <li><span class="emoji">💬</span> Teile dein Feedback direkt über die App oder antworte auf unsere E-Mails</li>
    </ul>
    
    <p><strong>Dein Feedback ist wichtig!</strong></p>
    <p>Als Beta-Tester hilfst du, die Zukunft von Regalos App zu gestalten. Wir möchten hören über:</p>
    <ul>
      <li>Funktionen, die du liebst ❤️</li>
      <li>Dinge, die verbessert werden könnten 🔧</li>
      <li>Bugs oder Probleme, die du findest 🐛</li>
      <li>Neue Ideen und Vorschläge 💡</li>
    </ul>
    
    <p>Antworte jederzeit auf diese E-Mail mit deinen Gedanken, Fragen oder Feedback. Wir lesen jede Nachricht!</p>
  </div>
  
  <div class="footer">
    <p><strong>Regalos App Team</strong></p>
    <p>Geburtstage unvergesslich machen, eine Feier nach der anderen 🎂</p>
    <p style="font-size: 12px; color: #999; margin-top: 20px;">
      Du erhältst diese E-Mail, weil du dich für Regalos App Beta Testing angemeldet hast.
    </p>
  </div>
</body>
</html>
        `,
        text: `
Hallo ${name}! 👋

Vielen Dank, dass du unserem iOS Beta-Testing-Programm beigetreten bist! Wir freuen uns sehr, dich als Teil unserer Gründer-Community zu haben.

Was passiert als Nächstes?
- Du erhältst innerhalb von 24-48 Stunden eine E-Mail mit TestFlight-Anweisungen
- Lade Regalos App über TestFlight auf dein iPhone/iPad herunter
- Beginne mit der Organisation von Geburtstagen und der Koordination von Geschenken!
- Teile dein Feedback direkt über die App oder antworte auf unsere E-Mails

Dein Feedback ist wichtig!
Als Beta-Tester hilfst du, die Zukunft von Regalos App zu gestalten. Wir möchten hören über:
- Funktionen, die du liebst
- Dinge, die verbessert werden könnten
- Bugs oder Probleme, die du findest
- Neue Ideen und Vorschläge

Antworte jederzeit auf diese E-Mail mit deinen Gedanken, Fragen oder Feedback. Wir lesen jede Nachricht!

Regalos App Team
Geburtstage unvergesslich machen, eine Feier nach der anderen 🎂
        `
      }
    },
    android: {
      en: {
        subject: '🎉 Welcome to Regalos App Beta - Android Testing!',
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #5B9FED 0%, #3D7DD1 100%); color: white; padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 12px; margin-bottom: 20px; }
    .button { display: inline-block; background: #5B9FED; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
    .footer { text-align: center; color: #666; font-size: 14px; margin-top: 30px; }
    h1 { margin: 0; font-size: 28px; }
    h2 { color: #5B9FED; font-size: 22px; margin-top: 0; }
    .emoji { font-size: 24px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎁 Welcome to Regalos App Beta!</h1>
  </div>
  
  <div class="content">
    <h2>Hi ${name}! 👋</h2>
    
    <p>Thank you for joining our <strong>Android Beta Testing program</strong>! We're thrilled to have you as part of our founding community.</p>
    
    <p><strong>What happens next?</strong></p>
    <ul>
      <li><span class="emoji">📧</span> You'll receive an email with Google Play Beta access link within 24-48 hours</li>
      <li><span class="emoji">📱</span> Join the beta program and download Regalos App from Google Play</li>
      <li><span class="emoji">🎯</span> Start organizing birthdays and coordinating gifts!</li>
      <li><span class="emoji">💬</span> Share your feedback directly through the app or reply to our emails</li>
    </ul>
    
    <p><strong>Your feedback matters!</strong></p>
    <p>As a beta tester, you're helping shape the future of Regalos App. We want to hear about:</p>
    <ul>
      <li>Features you love ❤️</li>
      <li>Things that could be improved 🔧</li>
      <li>Bugs or issues you encounter 🐛</li>
      <li>New ideas and suggestions 💡</li>
    </ul>
    
    <p>Feel free to reply to this email anytime with your thoughts, questions, or feedback. We read every message!</p>
  </div>
  
  <div class="footer">
    <p><strong>Regalos App Team</strong></p>
    <p>Making birthdays memorable, one celebration at a time 🎂</p>
    <p style="font-size: 12px; color: #999; margin-top: 20px;">
      You're receiving this email because you signed up for Regalos App Beta Testing.
    </p>
  </div>
</body>
</html>
        `,
        text: `
Hi ${name}! 👋

Thank you for joining our Android Beta Testing program! We're thrilled to have you as part of our founding community.

What happens next?
- You'll receive an email with Google Play Beta access link within 24-48 hours
- Join the beta program and download Regalos App from Google Play
- Start organizing birthdays and coordinating gifts!
- Share your feedback directly through the app or reply to our emails

Your feedback matters!
As a beta tester, you're helping shape the future of Regalos App. We want to hear about:
- Features you love
- Things that could be improved
- Bugs or issues you encounter
- New ideas and suggestions

Feel free to reply to this email anytime with your thoughts, questions, or feedback. We read every message!

Regalos App Team
Making birthdays memorable, one celebration at a time 🎂
        `
      },
      es: {
        subject: '🎉 Bienvenido a Regalos App Beta - ¡Pruebas en Android!',
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #5B9FED 0%, #3D7DD1 100%); color: white; padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 12px; margin-bottom: 20px; }
    .button { display: inline-block; background: #5B9FED; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
    .footer { text-align: center; color: #666; font-size: 14px; margin-top: 30px; }
    h1 { margin: 0; font-size: 28px; }
    h2 { color: #5B9FED; font-size: 22px; margin-top: 0; }
    .emoji { font-size: 24px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎁 ¡Bienvenido a Regalos App Beta!</h1>
  </div>
  
  <div class="content">
    <h2>¡Hola ${name}! 👋</h2>
    
    <p>¡Gracias por unirte a nuestro <strong>programa de Beta Testing para Android</strong>! Estamos encantados de tenerte como parte de nuestra comunidad fundadora.</p>
    
    <p><strong>¿Qué sigue ahora?</strong></p>
    <ul>
      <li><span class="emoji">📧</span> Recibirás un email con el enlace de acceso a Google Play Beta en 24-48 horas</li>
      <li><span class="emoji">📱</span> Únete al programa beta y descarga Regalos App desde Google Play</li>
      <li><span class="emoji">🎯</span> ¡Empieza a organizar cumpleaños y coordinar regalos!</li>
      <li><span class="emoji">💬</span> Comparte tu feedback directamente en la app o respondiendo a nuestros emails</li>
    </ul>
    
    <p><strong>¡Tu feedback es importante!</strong></p>
    <p>Como beta tester, estás ayudando a dar forma al futuro de Regalos App. Queremos saber sobre:</p>
    <ul>
      <li>Funciones que te encantan ❤️</li>
      <li>Cosas que podrían mejorarse 🔧</li>
      <li>Bugs o problemas que encuentres 🐛</li>
      <li>Nuevas ideas y sugerencias 💡</li>
    </ul>
    
    <p>Siéntete libre de responder a este email en cualquier momento con tus pensamientos, preguntas o feedback. ¡Leemos cada mensaje!</p>
  </div>
  
  <div class="footer">
    <p><strong>Equipo Regalos App</strong></p>
    <p>Haciendo los cumpleaños memorables, una celebración a la vez 🎂</p>
    <p style="font-size: 12px; color: #999; margin-top: 20px;">
      Recibes este email porque te registraste en Regalos App Beta Testing.
    </p>
  </div>
</body>
</html>
        `,
        text: `
¡Hola ${name}! 👋

¡Gracias por unirte a nuestro programa de Beta Testing para Android! Estamos encantados de tenerte como parte de nuestra comunidad fundadora.

¿Qué sigue ahora?
- Recibirás un email con el enlace de acceso a Google Play Beta en 24-48 horas
- Únete al programa beta y descarga Regalos App desde Google Play
- ¡Empieza a organizar cumpleaños y coordinar regalos!
- Comparte tu feedback directamente en la app o respondiendo a nuestros emails

¡Tu feedback es importante!
Como beta tester, estás ayudando a dar forma al futuro de Regalos App. Queremos saber sobre:
- Funciones que te encantan
- Cosas que podrían mejorarse
- Bugs o problemas que encuentres
- Nuevas ideas y sugerencias

Siéntete libre de responder a este email en cualquier momento con tus pensamientos, preguntas o feedback. ¡Leemos cada mensaje!

Equipo Regalos App
Haciendo los cumpleaños memorables, una celebración a la vez 🎂
        `
      },
      de: {
        subject: '🎉 Willkommen bei Regalos App Beta - Android Testing!',
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #5B9FED 0%, #3D7DD1 100%); color: white; padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 12px; margin-bottom: 20px; }
    .button { display: inline-block; background: #5B9FED; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
    .footer { text-align: center; color: #666; font-size: 14px; margin-top: 30px; }
    h1 { margin: 0; font-size: 28px; }
    h2 { color: #5B9FED; font-size: 22px; margin-top: 0; }
    .emoji { font-size: 24px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎁 Willkommen bei Regalos App Beta!</h1>
  </div>
  
  <div class="content">
    <h2>Hallo ${name}! 👋</h2>
    
    <p>Vielen Dank, dass du unserem <strong>Android Beta-Testing-Programm</strong> beigetreten bist! Wir freuen uns sehr, dich als Teil unserer Gründer-Community zu haben.</p>
    
    <p><strong>Was passiert als Nächstes?</strong></p>
    <ul>
      <li><span class="emoji">📧</span> Du erhältst innerhalb von 24-48 Stunden eine E-Mail mit dem Google Play Beta-Zugangslink</li>
      <li><span class="emoji">📱</span> Tritt dem Beta-Programm bei und lade Regalos App aus Google Play herunter</li>
      <li><span class="emoji">🎯</span> Beginne mit der Organisation von Geburtstagen und der Koordination von Geschenken!</li>
      <li><span class="emoji">💬</span> Teile dein Feedback direkt über die App oder antworte auf unsere E-Mails</li>
    </ul>
    
    <p><strong>Dein Feedback ist wichtig!</strong></p>
    <p>Als Beta-Tester hilfst du, die Zukunft von Regalos App zu gestalten. Wir möchten hören über:</p>
    <ul>
      <li>Funktionen, die du liebst ❤️</li>
      <li>Dinge, die verbessert werden könnten 🔧</li>
      <li>Bugs oder Probleme, die du findest 🐛</li>
      <li>Neue Ideen und Vorschläge 💡</li>
    </ul>
    
    <p>Antworte jederzeit auf diese E-Mail mit deinen Gedanken, Fragen oder Feedback. Wir lesen jede Nachricht!</p>
  </div>
  
  <div class="footer">
    <p><strong>Regalos App Team</strong></p>
    <p>Geburtstage unvergesslich machen, eine Feier nach der anderen 🎂</p>
    <p style="font-size: 12px; color: #999; margin-top: 20px;">
      Du erhältst diese E-Mail, weil du dich für Regalos App Beta Testing angemeldet hast.
    </p>
  </div>
</body>
</html>
        `,
        text: `
Hallo ${name}! 👋

Vielen Dank, dass du unserem Android Beta-Testing-Programm beigetreten bist! Wir freuen uns sehr, dich als Teil unserer Gründer-Community zu haben.

Was passiert als Nächstes?
- Du erhältst innerhalb von 24-48 Stunden eine E-Mail mit dem Google Play Beta-Zugangslink
- Tritt dem Beta-Programm bei und lade Regalos App aus Google Play herunter
- Beginne mit der Organisation von Geburtstagen und der Koordination von Geschenken!
- Teile dein Feedback direkt über die App oder antworte auf unsere E-Mails

Dein Feedback ist wichtig!
Als Beta-Tester hilfst du, die Zukunft von Regalos App zu gestalten. Wir möchten hören über:
- Funktionen, die du liebst
- Dinge, die verbessert werden könnten
- Bugs oder Probleme, die du findest
- Neue Ideen und Vorschläge

Antworte jederzeit auf diese E-Mail mit deinen Gedanken, Fragen oder Feedback. Wir lesen jede Nachricht!

Regalos App Team
Geburtstage unvergesslich machen, eine Feier nach der anderen 🎂
        `
      }
    }
  };

  return templates[platform][language];
}
