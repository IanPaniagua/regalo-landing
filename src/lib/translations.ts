export type Language = 'en' | 'es';

export const translations = {
  en: {
    // Hero
    hero: {
      title: "Regalo is a mobile App to keep your gifts up to date",
      discoverMore: "Discover More",
      joinWaitlist: "Join Waitlist",
    },
    
    // Features
    features: {
      title: "Features",
      feature1: {
        title: "Never Forget",
        description: "Keep track of important dates and never miss a special occasion",
      },
      feature2: {
        title: "Know Preferences",
        description: "Store gift preferences and ideas for your loved ones",
      },
      feature3: {
        title: "Stay Organized",
        description: "Manage all your gifts in one place with reminders",
      },
    },
    
    // CTA Section
    cta: {
      intro: "To introduce you to the app, we have designed an",
      interactiveQuestionnaire: "interactive questionnaire",
      outro: "While we explain it, you can collaborate with your feedback :)",
      wantToParticipate: "Want to participate?",
      letsGo: "Yes! Let's Go 💪",
    },
    
    // Waitlist
    waitlist: {
      title: "Join the Waitlist",
      subtitle: "Be the first to experience Regalo when we launch!",
      description: "Get early access, exclusive updates, and special perks for being an early supporter.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      submit: "Join Waitlist",
      skip: "Maybe later",
      successTitle: "You're on the list!",
      successMessage: "We'll notify you as soon as Regalo is ready. Get ready for a better way to give gifts!",
      backHome: "Back to Home",
    },
    
    // Questionnaire
    questionnaire: {
      exit: "Exit",
      back: "Back",
      next: "Next",
      submit: "Submit",
      thankYou: "THANK YOU!",
      thankYouMessage: "Your feedback is invaluable to us. We've saved your responses and will use them to make Regalo even better!",
      wantEarlyAccess: "Want to be the first to know when Regalo launches?",
      joinWaitlistCta: "Join Waitlist 🎉",
      maybeLater: "Maybe later, back to home",
    },
    
    // Footer
    footer: {
      privacyPolicy: "Privacy Policy",
      copyright: "All rights reserved.",
      language: "Language",
    },
    
    // Cookie Banner
    cookies: {
      message: "We use cookies and similar technologies to analyze website traffic and improve your experience. By clicking \"Accept\", you consent to our use of cookies.",
      learnMore: "Learn more",
      accept: "Accept",
      decline: "Decline",
    },
    
    // Privacy Policy
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated:",
    },
  },
  
  es: {
    // Hero
    hero: {
      title: "Regalo es una App móvil para mantener tus regalos al día",
      discoverMore: "Descubre Más",
      joinWaitlist: "Únete a la Lista",
    },
    
    // Features
    features: {
      title: "Características",
      feature1: {
        title: "Nunca Olvides",
        description: "Mantén un registro de fechas importantes y nunca te pierdas una ocasión especial",
      },
      feature2: {
        title: "Conoce Preferencias",
        description: "Guarda preferencias e ideas de regalos para tus seres queridos",
      },
      feature3: {
        title: "Mantente Organizado",
        description: "Gestiona todos tus regalos en un solo lugar con recordatorios",
      },
    },
    
    // CTA Section
    cta: {
      intro: "Para presentarte la app, hemos diseñado un",
      interactiveQuestionnaire: "cuestionario interactivo",
      outro: "Mientras te lo explicamos, puedes colaborar con tu feedback :)",
      wantToParticipate: "¿Quieres participar?",
      letsGo: "¡Sí! Vamos 💪",
    },
    
    // Waitlist
    waitlist: {
      title: "Únete a la Lista de Espera",
      subtitle: "¡Sé el primero en experimentar Regalo cuando lancemos!",
      description: "Obtén acceso anticipado, actualizaciones exclusivas y ventajas especiales por ser uno de los primeros.",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu email",
      submit: "Unirme a la Lista",
      skip: "Quizás más tarde",
      successTitle: "¡Estás en la lista!",
      successMessage: "Te notificaremos tan pronto como Regalo esté listo. ¡Prepárate para una mejor forma de dar regalos!",
      backHome: "Volver al Inicio",
    },
    
    // Questionnaire
    questionnaire: {
      exit: "Salir",
      back: "Atrás",
      next: "Siguiente",
      submit: "Enviar",
      thankYou: "¡GRACIAS!",
      thankYouMessage: "Tu feedback es invaluable para nosotros. Hemos guardado tus respuestas y las usaremos para hacer Regalo aún mejor!",
      wantEarlyAccess: "¿Quieres ser el primero en saber cuándo Regalo lance?",
      joinWaitlistCta: "Únete a la Lista 🎉",
      maybeLater: "Quizás más tarde, volver al inicio",
    },
    
    // Footer
    footer: {
      privacyPolicy: "Política de Privacidad",
      copyright: "Todos los derechos reservados.",
      language: "Idioma",
    },
    
    // Cookie Banner
    cookies: {
      message: "Usamos cookies y tecnologías similares para analizar el tráfico del sitio web y mejorar tu experiencia. Al hacer clic en \"Aceptar\", consientes el uso de cookies.",
      learnMore: "Más información",
      accept: "Aceptar",
      decline: "Rechazar",
    },
    
    // Privacy Policy
    privacy: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización:",
    },
  },
};

export type TranslationKeys = typeof translations.en;
