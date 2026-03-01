export type Language = 'en' | 'es' | 'de';

export const translations = {
  en: {
    // Hero
    hero: {
      title: "Never Forget Another Birthday",
      subtitle: "All your friends' birthdays in one place. Smart reminders so you're always prepared.",
      description: "Stop relying on scattered notes and social media notifications. Regalos App centralizes all birthdays, sends you timely reminders, and helps you coordinate perfect gifts with friends.",
      downloadNow: "Download Now",
      seeHowItWorks: "See How It Works",
      availableOn: "Available on iOS & Android",
    },

    // Features
    features: {
      sectionTitle: "Everything You Need to Celebrate",
      sectionSubtitle: "Regalos App combines smart organization, social connections, and group coordination in one beautiful app.",
      calendar: {
        tag: "Calendar",
        title: "Smart Birthday Calendar",
        subtitle: "See All Birthdays in One Place",
        description: "Keep all birthdays organized in a visual and easy-to-use calendar.",
        bullet1: "Monthly view with all birthdays",
        bullet2: "Add birthdays manually or sync automatically",
        bullet3: "Personalized emoji icons for each contact",
        bullet4: "Easy navigation between months",
      },
      connect: {
        tag: "Connections",
        title: "Social Connections",
        subtitle: "Build Your Celebration Network",
        description: "Connect with friends and discover their preferences to give perfect gifts.",
        bullet1: "Connect using @username or invitation links",
        bullet2: "View complete profiles with hobbies and preferences",
        bullet3: "Manage connection requests easily",
        bullet4: "Automatic birthday synchronization",
      },
      profile: {
        tag: "Profiles",
        title: "Detailed Profiles",
        subtitle: "Know Your Friends' Preferences",
        description: "Rich profiles with information that really helps you choose the perfect gift.",
        bullet1: "Personalized hobbies and interests",
        bullet2: "Specific gift preferences",
        bullet3: "Date of birth and age",
        bullet4: "Unique emoji avatars",
      },
      groupGifts: {
        tag: "Group Gifts",
        title: "Coordinated Group Gifts",
        subtitle: "Organize the Perfect Gift Together",
        description: "Coordinate group gifts effortlessly. No spreadsheets, no confusion.",
        bullet1: "Easy group creation for any occasion",
        bullet2: "Automatic cost splitting among participants",
        bullet3: "Payment tracking - see who paid and who's pending",
        bullet4: "Real-time group chat to coordinate ideas",
      },
      moreFeatures: "Plus Many More Features",
    },

    // CTA Section
    cta: {
      title: "Help Us Perfect Regalos App",
      subtitle: "We're looking for beta testers to help shape the future of birthday celebrations",
      description: "Get early access to all features, influence development, and be part of our founding community.",
      benefits: {
        title: "Beta Tester Benefits:",
        benefit1: "Early access to all features",
        benefit1Desc: "Be among the first to use all Regalos App features",
        benefit2: "Direct line to the development team",
        benefit2Desc: "Your feedback shapes the app's future",
        benefit3: "Influence future features",
        benefit3Desc: "Help us build what you really need",
        benefit4: "Exclusive founding member perks",
        benefit4Desc: "Special recognition and rewards",
      },
      limitedSpots: "Limited spots available • Join now to secure your place",
      joinBeta: "Join Beta Testing",
      joinWaitlist: "Join the Waitlist",
      waitlistAlternative: {
        text: "Or if you prefer, you can wait for the app to be ready. We'll notify you by email.",
        button: "Join the Waitlist"
      }
    },

    // Waitlist
    waitlist: {
      title: "Join the Waitlist",
      subtitle: "Regalos App is coming soon and we're looking for early adopters!",
      description: "Get notified as soon as the app officially launches and be among the first to experience Regalo.",
      nameLabel: "Your Name",
      namePlaceholder: "Your name",
      emailLabel: "Email Address",
      emailPlaceholder: "Your email",
      emailHelp: "Use your main email address",
      platformLabel: "Your Platform",
      platformIOS: "iOS (iPhone/iPad)",
      platformAndroid: "Android",
      submit: "Join Waitlist",
      skip: "Maybe later",
      errorAllFields: "Please fill in all fields",
      errorSelectPlatform: "Please select your platform",
      errorInvalidEmail: "Please enter a valid email",
      errorGeneric: "Something went wrong. Please try again.",
      successTitle: "You're on the list!",
      successMessage: "We've added you to the waitlist. We'll send you an email as soon as Regalos App is ready for you.",
      backHome: "Back to Home",
    },

    // Beta
    beta: {
      title: "Join the Beta Testing Program",
      subtitle: "Regalos App is live and we're looking for founding members!",
      description: "Get immediate access to the app, help shape its future, and become part of our exclusive founding community. Limited spots available.",
      nameLabel: "Your Name",
      namePlaceholder: "Your name",
      emailLabel: "Email Address",
      emailPlaceholder: "Your email",
      emailHelp: "Use your Apple ID email (iOS) or Google Play email (Android) for beta access",
      platformLabel: "Your Platform",
      platformIOS: "iOS (iPhone/iPad)",
      platformAndroid: "Android",
      submit: "Join Beta",
      skip: "Maybe later",
      errorAllFields: "Please fill in all fields",
      errorSelectPlatform: "Please select your platform",
      errorInvalidEmail: "Please enter a valid email",
      errorGeneric: "Something went wrong. Please try again.",
      successTitle: "Welcome to Regalos App Beta!",
      successMessage: "Check your email for download instructions and beta access details. You're now part of our founding community!",
      backHome: "Back to Home",
    },

    // Questionnaire
    questionnaire: {
      exit: "Exit",
      back: "Back",
      next: "Next",
      submit: "Submit",
      close: "Close",
      step: "Step",
      of: "of",
      about: "About",
      visualPlaceholder: "Visual placeholder",
      thankYou: "THANK YOU!",
      thankYouMessage: "Your feedback is invaluable to us. We've saved your responses and will use them to make Regalo even better!",
      wantEarlyAccess: "Want to be the first to know when Regalo launches?",
      joinWaitlistCta: "Join Waitlist 🎉",
      maybeLater: "Maybe later, back to home",
    },

    // Footer
    footer: {
      privacyPolicy: "Privacy Policy",
      appPrivacyPolicy: "App Privacy Policy",
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
      title: "Nunca Olvides Otro Cumpleaños",
      subtitle: "Todos los cumpleaños de tus amigos en un solo lugar. Recordatorios inteligentes para estar siempre preparado.",
      description: "Deja de depender de notas dispersas y notificaciones de redes sociales. Regalos App centraliza todos los cumpleaños, te envía recordatorios oportunos y te ayuda a coordinar regalos perfectos con amigos.",
      downloadNow: "Descargar Ahora",
      seeHowItWorks: "Ver Cómo Funciona",
      availableOn: "Disponible en iOS y Android",
    },

    // Features
    features: {
      sectionTitle: "Todo lo que Necesitas para Celebrar",
      sectionSubtitle: "Regalos App combina organización inteligente, conexiones sociales y coordinación de regalos en una app hermosa.",
      calendar: {
        tag: "Calendario",
        title: "Calendario Inteligente de Cumpleaños",
        subtitle: "Visualiza Todos los Cumpleaños en un Solo Lugar",
        description: "Mantén todos los cumpleaños organizados en un calendario visual y fácil de usar.",
        bullet1: "Vista mensual con todos los cumpleaños",
        bullet2: "Añade cumpleaños manualmente o sincroniza automáticamente",
        bullet3: "Iconos emoji personalizados para cada contacto",
        bullet4: "Navegación fácil entre meses",
      },
      connect: {
        tag: "Conexiones",
        title: "Conexiones Sociales",
        subtitle: "Construye Tu Red de Celebraciones",
        description: "Conecta con amigos y descubre sus preferencias para dar regalos perfectos.",
        bullet1: "Conecta usando @username o enlaces de invitación",
        bullet2: "Ve perfiles completos con hobbies y preferencias",
        bullet3: "Gestiona solicitudes de conexión fácilmente",
        bullet4: "Sincronización automática de cumpleaños",
      },
      profile: {
        tag: "Perfiles",
        title: "Perfiles Detallados",
        subtitle: "Conoce las Preferencias de Tus Amigos",
        description: "Perfiles ricos con información que realmente ayuda a elegir el regalo perfecto.",
        bullet1: "Hobbies e intereses personalizados",
        bullet2: "Preferencias de regalos específicas",
        bullet3: "Fecha de nacimiento y edad",
        bullet4: "Avatares emoji únicos",
      },
      groupGifts: {
        tag: "Regalos Grupales",
        title: "Regalos Grupales Coordinados",
        subtitle: "Organiza el Regalo Perfecto en Grupo",
        description: "Coordina regalos grupales sin esfuerzo. Sin hojas de cálculo, sin confusión.",
        bullet1: "Creación fácil de grupos para cualquier ocasión",
        bullet2: "División automática del costo entre participantes",
        bullet3: "Seguimiento de pagos - ve quién pagó y quién está pendiente",
        bullet4: "Chat grupal en tiempo real para coordinar ideas",
      },
      moreFeatures: "Y Muchas Más Funciones",
    },

    // CTA Section
    cta: {
      title: "Ayúdanos a Perfeccionar Regalos App",
      subtitle: "Buscamos beta testers para ayudar a dar forma al futuro de las celebraciones de cumpleaños",
      description: "Obtén acceso anticipado a todas las funciones, influye en el desarrollo y sé parte de nuestra comunidad fundadora.",
      benefits: {
        title: "Beneficios del Beta Tester:",
        benefit1: "Acceso anticipado a todas las funciones",
        benefit1Desc: "Sé de los primeros en usar todas las funciones de Regalos App",
        benefit2: "Línea directa con el equipo de desarrollo",
        benefit2Desc: "Tu feedback da forma al futuro de la app",
        benefit3: "Influye en futuras funciones",
        benefit3Desc: "Ayúdanos a construir lo que realmente necesitas",
        benefit4: "Ventajas exclusivas de miembro fundador",
        benefit4Desc: "Reconocimiento especial y recompensas",
      },
      limitedSpots: "Plazas limitadas • Únete ahora para asegurar tu lugar",
      joinBeta: "Únete al Beta Testing",
      joinWaitlist: "Únete a la Lista de Espera",
      waitlistAlternative: {
        text: "O si lo prefieres, puedes esperar a que la app esté lista. Te avisaremos por email.",
        button: "Únete a la Lista de Espera"
      }
    },

    // Waitlist
    waitlist: {
      title: "Únete a la Lista de Espera",
      subtitle: "¡Regalos App estará disponible pronto y buscamos a nuestros primeros usuarios!",
      description: "Recibe una notificación en cuanto la app se lance oficialmente y sé uno de los primeros en experimentar Regalo.",
      nameLabel: "Tu Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo Electrónico",
      emailPlaceholder: "Tu correo electrónico",
      emailHelp: "Usa tu correo principal",
      platformLabel: "Tu Plataforma",
      platformIOS: "iOS (iPhone/iPad)",
      platformAndroid: "Android",
      submit: "Unirse a la Lista de Espera",
      skip: "Quizás más tarde",
      errorAllFields: "Por favor completa todos los campos",
      errorSelectPlatform: "Por favor selecciona tu plataforma",
      errorInvalidEmail: "Por favor introduce un correo válido",
      errorGeneric: "Algo salió mal. Por favor intenta de nuevo.",
      successTitle: "¡Estás en la lista!",
      successMessage: "Te hemos añadido a la lista de espera. Te enviaremos un correo en cuanto Regalos App esté lista para ti.",
      backHome: "Volver al Inicio",
    },

    // Beta
    beta: {
      title: "Únete al Programa Beta",
      subtitle: "¡Regalos App está en vivo y buscamos miembros fundadores!",
      description: "Obtén acceso inmediato a la app, ayuda a dar forma a su futuro y únete a nuestra exclusiva comunidad fundadora. Plazas limitadas.",
      nameLabel: "Tu Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo Electrónico",
      emailPlaceholder: "Tu correo",
      emailHelp: "Usa tu correo de Apple ID (iOS) o Google Play (Android) para acceso beta",
      platformLabel: "Tu Plataforma",
      platformIOS: "iOS (iPhone/iPad)",
      platformAndroid: "Android",
      submit: "Unirse a la Beta",
      skip: "Quizás más tarde",
      errorAllFields: "Por favor completa todos los campos",
      errorSelectPlatform: "Por favor selecciona tu plataforma",
      errorInvalidEmail: "Por favor introduce un correo válido",
      errorGeneric: "Algo salió mal. Por favor intenta de nuevo.",
      successTitle: "¡Bienvenido a la Beta de Regalos App!",
      successMessage: "Revisa tu correo para las instrucciones de descarga y detalles de acceso a la beta. ¡Ahora eres parte de nuestra comunidad fundadora!",
      backHome: "Volver al Inicio",
    },

    // Questionnaire
    questionnaire: {
      exit: "Salir",
      back: "Atrás",
      next: "Siguiente",
      submit: "Enviar",
      close: "Cerrar",
      step: "Paso",
      of: "de",
      about: "Acerca de",
      visualPlaceholder: "Marcador visual",
      thankYou: "¡GRACIAS!",
      thankYouMessage: "Tu feedback es invaluable para nosotros. Hemos guardado tus respuestas y las usaremos para hacer Regalo aún mejor!",
      wantEarlyAccess: "¿Quieres ser el primero en saber cuándo Regalo lance?",
      joinWaitlistCta: "Únete a la Lista 🎉",
      maybeLater: "Quizás más tarde, volver al inicio",
    },

    // Footer
    footer: {
      privacyPolicy: "Política de Privacidad",
      appPrivacyPolicy: "Política de Privacidad App",
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

  de: {
    // Hero
    hero: {
      title: "Vergiss Nie Wieder Einen Geburtstag",
      subtitle: "Alle Geburtstage deiner Freunde an einem Ort. Intelligente Erinnerungen, damit du immer vorbereitet bist.",
      description: "Schluss mit verstreuten Notizen und Social-Media-Benachrichtigungen. Regalos App zentralisiert alle Geburtstage, sendet dir rechtzeitige Erinnerungen und hilft dir, perfekte Geschenke mit Freunden zu koordinieren.",
      downloadNow: "Jetzt Herunterladen",
      seeHowItWorks: "So Funktioniert's",
      availableOn: "Verfügbar für iOS & Android",
    },

    // Features
    features: {
      sectionTitle: "Alles, Was Du Zum Feiern Brauchst",
      sectionSubtitle: "Regalos App kombiniert intelligente Organisation, soziale Verbindungen und Geschenkkoordination in einer schönen App.",
      calendar: {
        tag: "Kalender",
        title: "Intelligenter Geburtstags-Kalender",
        subtitle: "Alle Geburtstage An Einem Ort",
        description: "Halte alle Geburtstage in einem visuellen und benutzerfreundlichen Kalender organisiert.",
        bullet1: "Monatsansicht mit allen Geburtstagen",
        bullet2: "Geburtstage manuell hinzufügen oder automatisch synchronisieren",
        bullet3: "Personalisierte Emoji-Symbole für jeden Kontakt",
        bullet4: "Einfache Navigation zwischen Monaten",
      },
      connect: {
        tag: "Verbindungen",
        title: "Soziale Verbindungen",
        subtitle: "Baue Dein Feier-Netzwerk Auf",
        description: "Verbinde dich mit Freunden und entdecke ihre Vorlieben für perfekte Geschenke.",
        bullet1: "Verbinde dich mit @username oder Einladungslinks",
        bullet2: "Vollständige Profile mit Hobbys und Vorlieben ansehen",
        bullet3: "Verbindungsanfragen einfach verwalten",
        bullet4: "Automatische Geburtstags-Synchronisation",
      },
      profile: {
        tag: "Profile",
        title: "Detaillierte Profile",
        subtitle: "Kenne Die Vorlieben Deiner Freunde",
        description: "Umfangreiche Profile mit Informationen, die dir wirklich helfen, das perfekte Geschenk auszuwählen.",
        bullet1: "Personalisierte Hobbys und Interessen",
        bullet2: "Spezifische Geschenkvorlieben",
        bullet3: "Geburtsdatum und Alter",
        bullet4: "Einzigartige Emoji-Avatare",
      },
      groupGifts: {
        tag: "Gruppengeschenke",
        title: "Koordinierte Gruppengeschenke",
        subtitle: "Organisiere Das Perfekte Geschenk Gemeinsam",
        description: "Koordiniere Gruppengeschenke mühelos. Keine Tabellen, keine Verwirrung.",
        bullet1: "Einfache Gruppenerstellung für jeden Anlass",
        bullet2: "Automatische Kostenaufteilung unter Teilnehmern",
        bullet3: "Zahlungsverfolgung - sieh, wer bezahlt hat und wer aussteht",
        bullet4: "Echtzeit-Gruppenchat zur Ideenkoordination",
      },
      moreFeatures: "Und Viele Weitere Funktionen",
    },

    // CTA Section
    cta: {
      title: "Hilf Uns, Regalos App Zu Perfektionieren",
      subtitle: "Wir suchen Beta-Tester, die die Zukunft von Geburtstagsfeiern mitgestalten",
      description: "Erhalte frühen Zugang zu allen Funktionen, beeinflusse die Entwicklung und werde Teil unserer Gründer-Community.",
      benefits: {
        title: "Beta-Tester Vorteile:",
        benefit1: "Früher Zugang zu allen Funktionen",
        benefit1Desc: "Gehöre zu den Ersten, die alle Regalos App-Funktionen nutzen",
        benefit2: "Direkter Draht zum Entwicklungsteam",
        benefit2Desc: "Dein Feedback gestaltet die Zukunft der App",
        benefit3: "Einfluss auf zukünftige Funktionen",
        benefit3Desc: "Hilf uns, das zu bauen, was du wirklich brauchst",
        benefit4: "Exklusive Gründungsmitglieder-Vorteile",
        benefit4Desc: "Besondere Anerkennung und Belohnungen",
      },
      limitedSpots: "Begrenzte Plätze verfügbar • Jetzt beitreten, um deinen Platz zu sichern",
      joinBeta: "Beta Testing Beitreten",
      joinWaitlist: "Warteliste Beitreten",
      waitlistAlternative: {
        text: "Oder wenn Sie es vorziehen, können Sie warten, bis die App fertig ist. Wir benachrichtigen Sie per E-Mail.",
        button: "Warteliste Beitreten"
      }
    },

    // Waitlist
    waitlist: {
      title: "Der Warteliste Beitreten",
      subtitle: "Regalos App kommt bald und wir suchen Early Adopters!",
      description: "Werden Sie benachrichtigt, sobald die App offiziell startet und gehören Sie zu den Ersten, die Regalo erleben.",
      nameLabel: "Ihr Name",
      namePlaceholder: "Ihr Name",
      emailLabel: "E-Mail-Adresse",
      emailPlaceholder: "Ihre E-Mail",
      emailHelp: "Verwenden Sie Ihre Haupt-E-Mail-Adresse",
      platformLabel: "Ihre Plattform",
      platformIOS: "iOS (iPhone/iPad)",
      platformAndroid: "Android",
      submit: "Warteliste Beitreten",
      skip: "Vielleicht später",
      errorAllFields: "Bitte füllen Sie alle Felder aus",
      errorSelectPlatform: "Bitte wählen Sie Ihre Plattform",
      errorInvalidEmail: "Bitte geben Sie eine gültige E-Mail ein",
      errorGeneric: "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.",
      successTitle: "Sie stehen auf der Liste!",
      successMessage: "Wir haben Sie auf die Warteliste gesetzt. Wir senden Ihnen eine E-Mail, sobald Regalos App für Sie bereit ist.",
      backHome: "Zurück zur Startseite",
    },

    // Beta
    beta: {
      title: "Dem Beta-Programm Beitreten",
      subtitle: "Regalos App ist live und wir suchen Gründungsmitglieder!",
      description: "Erhalten Sie sofortigen Zugang zur App, helfen Sie, ihre Zukunft zu gestalten, und werden Sie Teil unserer exklusiven Entwickler-Community. Begrenzte Plätze.",
      nameLabel: "Ihr Name",
      namePlaceholder: "Ihr Name",
      emailLabel: "E-Mail-Adresse",
      emailPlaceholder: "Ihre E-Mail",
      emailHelp: "Verwenden Sie Ihre Apple-ID- (iOS) oder Google-Play-E-Mail (Android) für den Beta-Zugang",
      platformLabel: "Ihre Plattform",
      platformIOS: "iOS (iPhone/iPad)",
      platformAndroid: "Android",
      submit: "Beta Beitreten",
      skip: "Vielleicht später",
      errorAllFields: "Bitte füllen Sie alle Felder aus",
      errorSelectPlatform: "Bitte wählen Sie Ihre Plattform",
      errorInvalidEmail: "Bitte geben Sie eine gültige E-Mail ein",
      errorGeneric: "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.",
      successTitle: "Willkommen in der Regalos App Beta!",
      successMessage: "Überprüfen Sie Ihre E-Mails auf Download-Anweisungen und Details zum Beta-Zugang. Sie sind jetzt Teil unserer Community!",
      backHome: "Zurück zur Startseite",
    },

    // Questionnaire
    questionnaire: {
      exit: "Beenden",
      back: "Zurück",
      next: "Weiter",
      submit: "Senden",
      close: "Schließen",
      step: "Schritt",
      of: "von",
      about: "Über",
      visualPlaceholder: "Platzhalter für Visual",
      thankYou: "DANKE!",
      thankYouMessage: "Dein Feedback ist für uns enorm wertvoll. Wir haben deine Antworten gespeichert und nutzen sie, um Regalo noch besser zu machen!",
      wantEarlyAccess: "Möchtest du als Erste:r erfahren, wenn Regalo startet?",
      joinWaitlistCta: "Warteliste beitreten 🎉",
      maybeLater: "Vielleicht später, zurück zur Startseite",
    },

    // Footer
    footer: {
      privacyPolicy: "Datenschutzerklärung",
      appPrivacyPolicy: "App-Datenschutzerklärung",
      copyright: "Alle Rechte vorbehalten.",
      language: "Sprache",
    },

    // Cookie Banner
    cookies: {
      message: "Wir verwenden Cookies und ähnliche Technologien, um den Website‑Verkehr zu analysieren und deine Erfahrung zu verbessern. Mit Klick auf \"Akzeptieren\" stimmst du der Nutzung zu.",
      learnMore: "Mehr erfahren",
      accept: "Akzeptieren",
      decline: "Ablehnen",
    },

    // Privacy Policy
    privacy: {
      title: "Datenschutzerklärung",
      lastUpdated: "Zuletzt aktualisiert:",
    },
  },
};

export type TranslationKeys = typeof translations.en;
