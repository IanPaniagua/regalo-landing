import { Language } from './translations';

export const questionnaireTranslations = {
  en: {
    steps: [
      {
        id: "calendar",
        title: "Calendar",
        description: "The idea came because many of us often forget important dates, like a family member's birthday. That's why we'll have a calendar just for that in the app!",
        icon: "calendar" as const,
        questions: [
          {
            id: "forgot-gift",
            type: "single-choice" as const,
            question: "Between you and me, have you ever forgotten to buy an important gift or done it at the last minute?",
            options: [
              { value: "no-never", label: "No, never" },
              { value: "rarely", label: "Rarely" },
              { value: "once", label: "Yes, but I forgot once" },
              { value: "very-often", label: "Very often" },
            ],
          },
          {
            id: "use-calendar",
            type: "single-choice" as const,
            question: "Do you use Google Calendar or others to note important dates for giving gifts?",
            options: [
              { value: "no-never", label: "No, never" },
              { value: "rarely", label: "Rarely" },
              { value: "once", label: "Yes, but I forgot once" },
              { value: "very-often", label: "Very often" },
            ],
          },
        ],
      },
      {
        id: "use-calendar",
        title: "Do you use a calendar or reminders for important dates?",
        description: "How do you currently keep track of special occasions?",
        options: [
          { value: "always", label: "Yes, always" },
          { value: "often", label: "Often" },
          { value: "once", label: "Sometimes" },
          { value: "never", label: "Never" },
        ],
      },
      {
        id: "reminder-time",
        title: "When would you like to be reminded about an upcoming date?",
        description: "Select all that apply",
        options: [
          { value: "1-week", label: "1 week before" },
          { value: "3-days", label: "3 days before" },
          { value: "1-day", label: "1 day before" },
          { value: "same-day", label: "Same day" },
        ],
        multiple: true,
      },
      {
        id: "profile-useful",
        title: "Would a profile with gift preferences for each person be useful?",
        description: "Imagine having a place to store what each person likes",
        options: [
          { value: "yes-use", label: "Yes, I would definitely use it" },
          { value: "maybe", label: "Maybe" },
          { value: "not-sure", label: "I'm not sure" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "profile-data",
        title: "What information would you like to store in each profile?",
        description: "Select all that apply",
        options: [
          { value: "preferences", label: "Gift preferences" },
          { value: "sizes", label: "Clothing sizes" },
          { value: "interests", label: "Hobbies and interests" },
          { value: "no-gifts", label: "Things they don't like" },
          { value: "budget", label: "Budget range" },
          { value: "history", label: "Gift history" },
        ],
        multiple: true,
        textInput: {
          placeholder: "Other information you'd like to store...",
          label: "Other",
        },
      },
      {
        id: "share-with",
        title: "Who would you like to organize gifts for?",
        description: "Select all that apply",
        options: [
          { value: "family", label: "Family" },
          { value: "friends", label: "Friends" },
          { value: "partner", label: "Partner" },
          { value: "colleagues", label: "Colleagues" },
          { value: "acquaintances", label: "Acquaintances" },
        ],
        multiple: true,
      },
      {
        id: "share-with-others",
        title: "Would you share gift ideas with others?",
        description: "For example, coordinating gifts with family members",
        options: [
          { value: "yes", label: "Yes, definitely" },
          { value: "maybe", label: "Maybe" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "qr-card",
        title: "Would you use a physical card with a QR code to share your profile?",
        description: "Others could scan it to see your gift preferences",
        options: [
          { value: "yes", label: "Yes, sounds interesting" },
          { value: "maybe", label: "Maybe" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "never-share",
        title: "What would you NEVER want to receive as a gift?",
        description: "This helps others avoid unwanted gifts",
        options: [
          { value: "clothing", label: "Clothing" },
          { value: "perfume", label: "Perfume/Cologne" },
          { value: "books", label: "Books" },
          { value: "tech", label: "Technology" },
          { value: "food", label: "Food/Drinks" },
          { value: "decor", label: "Home decor" },
        ],
        multiple: true,
        textInput: {
          placeholder: "Other things you'd never want...",
          label: "Other",
        },
      },
      {
        id: "overall-opinion",
        title: "Overall, how do you feel about this app idea?",
        description: "Your honest opinion helps us improve",
        options: [
          { value: "love-it", label: "I love it! 😍" },
          { value: "need-it", label: "I need this" },
          { value: "interesting", label: "Interesting" },
          { value: "not-sure", label: "Not sure" },
          { value: "not-for-me", label: "Not for me" },
        ],
      },
      {
        id: "improvement-ideas",
        title: "Any ideas to improve Regalo?",
        description: "We'd love to hear your suggestions",
        options: [
          { value: "perfect", label: "It's perfect as is" },
          { value: "add-features", label: "Add more features" },
          { value: "simpler", label: "Make it simpler" },
          { value: "nothing", label: "No suggestions" },
        ],
        textInput: {
          placeholder: "Share your ideas here...",
          label: "Your suggestions",
          required: false,
        },
      },
    ],
  },
  es: {
    steps: [
      {
        id: "forgot-gift",
        title: "¿Alguna vez has olvidado dar un regalo en una fecha importante?",
        description: "Todos hemos pasado por eso. Veamos con qué frecuencia te pasa.",
        options: [
          { value: "yes-often", label: "Sí, me pasa a menudo" },
          { value: "sometimes", label: "A veces" },
          { value: "rarely", label: "Raramente" },
          { value: "no-never", label: "No, nunca" },
        ],
      },
      {
        id: "use-calendar",
        title: "¿Usas un calendario o recordatorios para fechas importantes?",
        description: "¿Cómo llevas actualmente el seguimiento de ocasiones especiales?",
        options: [
          { value: "always", label: "Sí, siempre" },
          { value: "often", label: "A menudo" },
          { value: "once", label: "A veces" },
          { value: "never", label: "Nunca" },
        ],
      },
      {
        id: "reminder-time",
        title: "¿Cuándo te gustaría que te recordaran una fecha próxima?",
        description: "Selecciona todas las que apliquen",
        options: [
          { value: "1-week", label: "1 semana antes" },
          { value: "3-days", label: "3 días antes" },
          { value: "1-day", label: "1 día antes" },
          { value: "same-day", label: "El mismo día" },
        ],
        multiple: true,
      },
      {
        id: "profile-useful",
        title: "¿Te sería útil un perfil con preferencias de regalos para cada persona?",
        description: "Imagina tener un lugar donde guardar lo que le gusta a cada persona",
        options: [
          { value: "yes-use", label: "Sí, definitivamente lo usaría" },
          { value: "maybe", label: "Quizás" },
          { value: "not-sure", label: "No estoy seguro" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "profile-data",
        title: "¿Qué información te gustaría guardar en cada perfil?",
        description: "Selecciona todas las que apliquen",
        options: [
          { value: "preferences", label: "Preferencias de regalos" },
          { value: "sizes", label: "Tallas de ropa" },
          { value: "interests", label: "Hobbies e intereses" },
          { value: "no-gifts", label: "Cosas que no le gustan" },
          { value: "budget", label: "Rango de presupuesto" },
          { value: "history", label: "Historial de regalos" },
        ],
        multiple: true,
        textInput: {
          placeholder: "Otra información que te gustaría guardar...",
          label: "Otro",
        },
      },
      {
        id: "share-with",
        title: "¿Para quién te gustaría organizar regalos?",
        description: "Selecciona todas las que apliquen",
        options: [
          { value: "family", label: "Familia" },
          { value: "friends", label: "Amigos" },
          { value: "partner", label: "Pareja" },
          { value: "colleagues", label: "Compañeros de trabajo" },
          { value: "acquaintances", label: "Conocidos" },
        ],
        multiple: true,
      },
      {
        id: "share-with-others",
        title: "¿Compartirías ideas de regalos con otros?",
        description: "Por ejemplo, coordinar regalos con familiares",
        options: [
          { value: "yes", label: "Sí, definitivamente" },
          { value: "maybe", label: "Quizás" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "qr-card",
        title: "¿Usarías una tarjeta física con código QR para compartir tu perfil?",
        description: "Otros podrían escanearla para ver tus preferencias de regalos",
        options: [
          { value: "yes", label: "Sí, suena interesante" },
          { value: "maybe", label: "Quizás" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "never-share",
        title: "¿Qué NUNCA querrías recibir como regalo?",
        description: "Esto ayuda a otros a evitar regalos no deseados",
        options: [
          { value: "clothing", label: "Ropa" },
          { value: "perfume", label: "Perfume/Colonia" },
          { value: "books", label: "Libros" },
          { value: "tech", label: "Tecnología" },
          { value: "food", label: "Comida/Bebidas" },
          { value: "decor", label: "Decoración del hogar" },
        ],
        multiple: true,
        textInput: {
          placeholder: "Otras cosas que nunca querrías...",
          label: "Otro",
        },
      },
      {
        id: "overall-opinion",
        title: "En general, ¿qué te parece esta idea de app?",
        description: "Tu opinión honesta nos ayuda a mejorar",
        options: [
          { value: "love-it", label: "¡Me encanta! 😍" },
          { value: "need-it", label: "Necesito esto" },
          { value: "interesting", label: "Interesante" },
          { value: "not-sure", label: "No estoy seguro" },
          { value: "not-for-me", label: "No es para mí" },
        ],
      },
      {
        id: "improvement-ideas",
        title: "¿Alguna idea para mejorar Regalo?",
        description: "Nos encantaría escuchar tus sugerencias",
        options: [
          { value: "perfect", label: "Está perfecto así" },
          { value: "add-features", label: "Añadir más funciones" },
          { value: "simpler", label: "Hacerlo más simple" },
          { value: "nothing", label: "Sin sugerencias" },
        ],
        textInput: {
          placeholder: "Comparte tus ideas aquí...",
          label: "Tus sugerencias",
          required: false,
        },
      },
    ],
  },
  de: {
    steps: [
      {
        id: "calendar",
        title: "Kalender",
        description: "Die Idee entstand, weil viele von uns oft wichtige Daten vergessen, z. B. den Geburtstag eines Familienmitglieds. Deshalb wird es in der App einen Kalender genau dafür geben!",
        icon: "calendar" as const,
        questions: [
          {
            id: "forgot-gift",
            type: "single-choice" as const,
            question: "Unter uns: Hast du schon einmal vergessen, ein wichtiges Geschenk zu besorgen – oder es in letzter Minute gekauft?",
            options: [
              { value: "no-never", label: "Nein, nie" },
              { value: "rarely", label: "Selten" },
              { value: "once", label: "Ja, ist mir einmal passiert" },
              { value: "very-often", label: "Sehr oft" },
            ],
          },
          {
            id: "use-calendar",
            type: "single-choice" as const,
            question: "Verwendest du Google Calendar oder andere, um wichtige Geschenk‑Termine zu notieren?",
            options: [
              { value: "no-never", label: "Nein, nie" },
              { value: "rarely", label: "Selten" },
              { value: "once", label: "Ja, aber ich vergesse es trotzdem" },
              { value: "very-often", label: "Sehr oft" },
            ],
          },
        ],
      },
      {
        id: "use-calendar",
        title: "Verwendest du einen Kalender oder Erinnerungen für wichtige Daten?",
        description: "Wie behältst du derzeit besondere Anlässe im Blick?",
        options: [
          { value: "always", label: "Ja, immer" },
          { value: "often", label: "Oft" },
          { value: "once", label: "Manchmal" },
          { value: "never", label: "Nie" },
        ],
      },
      {
        id: "reminder-time",
        title: "Wann möchtest du an ein bevorstehendes Datum erinnert werden?",
        description: "Wähle alle zutreffenden aus",
        options: [
          { value: "1-week", label: "1 Woche vorher" },
          { value: "3-days", label: "3 Tage vorher" },
          { value: "1-day", label: "1 Tag vorher" },
          { value: "same-day", label: "Am selben Tag" },
        ],
        multiple: true,
      },
      {
        id: "profile-useful",
        title: "Wäre ein Profil mit Geschenkvorlieben für jede Person nützlich?",
        description: "Stell dir vor, du hättest einen Ort, um zu speichern, was jede Person mag",
        options: [
          { value: "yes-use", label: "Ja, ich würde es definitiv nutzen" },
          { value: "maybe", label: "Vielleicht" },
          { value: "not-sure", label: "Ich bin mir nicht sicher" },
          { value: "no", label: "Nein" },
        ],
      },
      {
        id: "profile-data",
        title: "Welche Informationen möchtest du in jedem Profil speichern?",
        description: "Wähle alle zutreffenden aus",
        options: [
          { value: "preferences", label: "Geschenkvorlieben" },
          { value: "sizes", label: "Kleidergrößen" },
          { value: "interests", label: "Hobbys und Interessen" },
          { value: "no-gifts", label: "Dinge, die sie nicht mögen" },
          { value: "budget", label: "Budgetbereich" },
          { value: "history", label: "Geschenkverlauf" },
        ],
        multiple: true,
        textInput: {
          placeholder: "Andere Informationen, die du speichern möchtest...",
          label: "Andere",
        },
      },
      {
        id: "share-with",
        title: "Für wen möchtest du Geschenke organisieren?",
        description: "Wähle alle zutreffenden aus",
        options: [
          { value: "family", label: "Familie" },
          { value: "friends", label: "Freunde" },
          { value: "partner", label: "Partner" },
          { value: "colleagues", label: "Kollegen" },
          { value: "acquaintances", label: "Bekannte" },
        ],
        multiple: true,
      },
      {
        id: "share-with-others",
        title: "Würdest du Geschenkideen mit anderen teilen?",
        description: "Zum Beispiel, Geschenke mit Familienmitgliedern koordinieren",
        options: [
          { value: "yes", label: "Ja, definitiv" },
          { value: "maybe", label: "Vielleicht" },
          { value: "no", label: "Nein" },
        ],
      },
      {
        id: "qr-card",
        title: "Würdest du eine physische Karte mit QR-Code verwenden, um dein Profil zu teilen?",
        description: "Andere könnten ihn scannen, um deine Geschenkvorlieben zu sehen",
        options: [
          { value: "yes", label: "Ja, klingt interessant" },
          { value: "maybe", label: "Vielleicht" },
          { value: "no", label: "Nein" },
        ],
      },
      {
        id: "never-share",
        title: "Was möchtest du NIEMALS als Geschenk erhalten?",
        description: "Dies hilft anderen, unerwünschte Geschenke zu vermeiden",
        options: [
          { value: "clothing", label: "Kleidung" },
          { value: "perfume", label: "Parfüm/Eau de Cologne" },
          { value: "books", label: "Bücher" },
          { value: "tech", label: "Technologie" },
          { value: "food", label: "Essen/Getränke" },
          { value: "decor", label: "Wohndekoration" },
        ],
        multiple: true,
        textInput: {
          placeholder: "Andere Dinge, die du nie möchtest...",
          label: "Andere",
        },
      },
      {
        id: "overall-opinion",
        title: "Insgesamt, wie findest du diese App-Idee?",
        description: "Deine ehrliche Meinung hilft uns, besser zu werden",
        options: [
          { value: "love-it", label: "Ich liebe es! 😍" },
          { value: "need-it", label: "Ich brauche das" },
          { value: "interesting", label: "Interessant" },
          { value: "not-sure", label: "Nicht sicher" },
          { value: "not-for-me", label: "Nicht für mich" },
        ],
      },
      {
        id: "improvement-ideas",
        title: "Hast du Ideen, um Regalo zu verbessern?",
        description: "Wir würden gerne deine Vorschläge hören",
        options: [
          { value: "perfect", label: "Es ist perfekt so wie es ist" },
          { value: "add-features", label: "Mehr Funktionen hinzufügen" },
          { value: "simpler", label: "Einfacher machen" },
          { value: "nothing", label: "Keine Vorschläge" },
        ],
        textInput: {
          placeholder: "Teile deine Ideen hier...",
          label: "Deine Vorschläge",
          required: false,
        },
      },
    ],
  },
};

export function getQuestionnaireSteps(language: Language) {
  return questionnaireTranslations[language].steps;
}
