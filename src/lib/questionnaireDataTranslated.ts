import { Language } from './translations';
import { QuestionnaireStep } from './questionnaireData';

export function getTranslatedQuestionnaireSteps(language: Language): QuestionnaireStep[] {
  if (language === 'de') {
    return [
      {
        id: "calendar",
        title: "Kalender",
        description: "Die Idee entstand, weil viele von uns oft wichtige Daten vergessen, z. B. den Geburtstag eines Familienmitglieds. Deshalb wird es in der App einen Kalender genau dafür geben!",
        icon: "calendar",
        questions: [
          {
            id: "forgot-gift",
            type: "single-choice",
            question: "Unter uns: Hast du schon einmal vergessen, ein wichtiges Geschenk zu besorgen – oder es in letzter Minute gekauft?",
            options: [
              { label: "Nein, nie", value: "no-never" },
              { label: "Selten", value: "rarely" },
              { label: "Ja, ist mir einmal passiert", value: "once" },
              { label: "Sehr oft", value: "very-often" },
            ],
          },
          {
            id: "use-calendar",
            type: "single-choice",
            question: "Verwendest du Google Calendar oder andere, um wichtige Geschenk‑Termine zu notieren?",
            options: [
              { label: "Nein, nie", value: "no-never" },
              { label: "Selten", value: "rarely" },
              { label: "Ja, aber ich vergesse es trotzdem", value: "once" },
              { label: "Sehr oft", value: "very-often" },
            ],
          },
        ],
      },
      {
        id: "profile",
        title: "Profil",
        description: "Du kannst auch dein Profil erstellen. Die Idee ist, nur Avatare zu verwenden. Du kannst angeben, was du magst, deine Größen und welche Bücher du bereits gelesen hast, damit man sie dir nicht noch einmal schenkt ;) Außerdem kannst du die Profile anderer sehen.",
        icon: "profile",
        questions: [
          {
            id: "profile-useful",
            type: "single-choice",
            question: "Findest du das nützlich?",
            options: [
              { label: "Ich würde es nicht nutzen", value: "no-use" },
              { label: "Könnte ich ausprobieren", value: "could-try" },
              { label: "Ja, ich würde es nutzen", value: "yes-use" },
              { label: "Super!", value: "awesome" },
            ],
          },
          {
            id: "profile-data",
            type: "combined",
            question: "Würdest du noch weitere Angaben im Profil aufnehmen?",
            options: [
              { label: "Nein, das reicht", value: "no-enough" },
              { label: "Bereich ‚Schenke mir bitte nicht…‘", value: "dont-give" },
              { label: "Hobbys", value: "hobbies" },
            ],
            hasTextInput: true,
            placeholder: "Deine Antwort…",
          },
          {
            id: "never-share",
            type: "combined",
            question: "Gibt es etwas, das du niemals teilen würdest?",
            options: [
              { label: "Mein echtes Alter", value: "age" },
              { label: "Meine Lieblingsfarbe", value: "color" },
              { label: "Ich habe keine Geheimnisse", value: "no-secrets" },
            ],
            hasTextInput: true,
            placeholder: "Deine Antwort…",
          },
        ],
      },
      {
        id: "access",
        title: "Profilzugriff",
        description: "Du kannst dein Profil ganz einfach per QR‑Code oder Link teilen. Wenn du später jemanden aus der Liste entfernen möchtest, ist das kein Problem.",
        icon: "access",
        questions: [
          {
            id: "share-with",
            type: "multiple-choice",
            question: "Mit wem würdest du dein Profil teilen wollen?",
            options: [
              { label: "Arbeitskolleg:innen", value: "work" },
              { label: "Familie", value: "family" },
              { label: "Freund:innen", value: "friends" },
              { label: "Bekannte", value: "acquaintances" },
              { label: "Fremde", value: "strangers" },
            ],
          },
          {
            id: "qr-card",
            type: "single-choice",
            question: "Würdest du den QR‑Code deines Profils auf eine Geschenkkarte drucken?",
            options: [
              { label: "Ich glaube nicht", value: "no" },
              { label: "Vielleicht", value: "maybe" },
              { label: "Ja, auf jeden Fall!", value: "yes" },
            ],
          },
        ],
      },
      {
        id: "reminders",
        title: "Erinnerungen",
        description: "Du siehst alle wichtigen Daten im Kalender und kannst außerdem wählen, wann die App dich an diese Ereignisse erinnert.",
        icon: "reminders",
        questions: [
          {
            id: "reminder-time",
            type: "multiple-choice",
            question: "Wie viel Vorlaufzeit hättest du gern für Erinnerungen? (alle zutreffenden auswählen)",
            options: [
              { label: "1 Monat", value: "1-month" },
              { label: "15 Tage", value: "15-days" },
              { label: "1 Woche", value: "1-week" },
              { label: "3 Tage", value: "3-days" },
              { label: "1 Tag", value: "1-day" },
              { label: "Benutzerdefiniert", value: "custom" },
            ],
          },
        ],
      },
      {
        id: "share",
        title: "Nächste Schritte",
        description: "Super! Jetzt kennst du die App viel besser! In Zukunft möchten wir außerdem Gruppen zum Organisieren von Geschenken ermöglichen. Aber später mehr dazu. Fürs Erste kannst du dich in unsere Warteliste eintragen.",
        icon: "share",
        questions: [
          {
            id: "overall-opinion",
            type: "single-choice",
            question: "Wie findest du die Regalo‑App insgesamt?",
            options: [
              { label: "Nicht sehr hilfreich", value: "not-useful" },
              { label: "Ganz gut", value: "good" },
              { label: "Sehr nützlich, ich würde sie nutzen!", value: "very-useful" },
              { label: "Ich brauche sie", value: "need-it" },
            ],
          },
          {
            id: "improvement-ideas",
            type: "combined",
            question: "Hast du Ideen, wie wir die App verbessern können?",
            options: [
              { label: "Mir fällt gerade nichts ein", value: "nothing" },
            ],
            hasTextInput: true,
            placeholder: "Deine Vorschläge…",
          },
          {
            id: "share-with-others",
            type: "single-choice",
            question: "Würdest du die App mit deinen Liebsten teilen?",
            options: [
              { label: "Ich glaube nicht", value: "no" },
              { label: "Vielleicht", value: "maybe" },
              { label: "Ja, auf jeden Fall!", value: "yes" },
            ],
          },
        ],
      },
    ];
  }
  if (language === 'es') {
    return [
      {
        id: "calendar",
        title: "Calendario",
        description: "La idea surge porque yo y muchos a menudo olvidamos fechas importantes, como el cumple de un familiar. ¡Por eso tendremos un calendario solo para eso en la app!",
        icon: "calendar",
        questions: [
          {
            id: "forgot-gift",
            type: "single-choice",
            question: "Entre tú y yo, dime, ¿también has olvidado alguna vez comprar un regalo importante? ¿o lo has hecho a última hora con prisas?",
            options: [
              { label: "No, ninguna", value: "no-never" },
              { label: "Sí pero pocas veces", value: "rarely" },
              { label: "Sí pero aún así me olvido", value: "once" },
              { label: "Sí mucho", value: "very-often" },
            ],
          },
          {
            id: "use-calendar",
            type: "single-choice",
            question: "¿Utilizas Google Calendar u otros para anotar las fechas importantes para hacer regalos?",
            options: [
              { label: "No, ninguna", value: "no-never" },
              { label: "Sí pero pocas veces", value: "rarely" },
              { label: "Sí pero aún así me olvido", value: "once" },
              { label: "Sí mucho", value: "very-often" },
            ],
          },
        ],
      },
      {
        id: "profile",
        title: "Perfil",
        description: "También podrás crear tu perfil. La idea es utilizar solo avatares. Podrás especificar qué te gusta, tus tallas y los libros que ya has leído, para que no te los regalen otra vez ;) Además también podrás ver el perfil de los demás.",
        icon: "profile",
        questions: [
          {
            id: "profile-useful",
            type: "single-choice",
            question: "¿Te parece útil?",
            options: [
              { label: "No lo usaría", value: "no-use" },
              { label: "Podría probarlo", value: "could-try" },
              { label: "Sí yo lo usaría", value: "yes-use" },
              { label: "¡Genial!", value: "awesome" },
            ],
          },
          {
            id: "profile-data",
            type: "combined",
            question: "¿Incluirías algún otro dato en el perfil?",
            options: [
              { label: "No, así basta", value: "no-enough" },
              { label: "Sección 'no me regales esto...'", value: "dont-give" },
              { label: "Hobbies", value: "hobbies" },
            ],
            hasTextInput: true,
            placeholder: "Tu respuesta...",
          },
          {
            id: "never-share",
            type: "combined",
            question: "¿Hay algo que nunca compartirías?",
            options: [
              { label: "Mi verdadera edad", value: "age" },
              { label: "Mi color favorito", value: "color" },
              { label: "No tengo secretos", value: "no-secrets" },
            ],
            hasTextInput: true,
            placeholder: "Tu respuesta...",
          },
        ],
      },
      {
        id: "access",
        title: "Acceso al Perfil",
        description: "Podrás compartir tu perfil fácilmente con un QR o un Link. Si después quieres borrar a alguien de la lista, hazlo sin problemas.",
        icon: "access",
        questions: [
          {
            id: "share-with",
            type: "multiple-choice",
            question: "¿Con quién te gustaría compartir tu perfil?",
            options: [
              { label: "Compis de trabajo", value: "work" },
              { label: "Familia", value: "family" },
              { label: "Amigos", value: "friends" },
              { label: "Conocidos", value: "acquaintances" },
              { label: "Desconocidos", value: "strangers" },
            ],
          },
          {
            id: "qr-card",
            type: "single-choice",
            question: "¿Incluirías el QR de tu perfil en tu tarjeta regalo?",
            options: [
              { label: "No creo", value: "no" },
              { label: "Quizás", value: "maybe" },
              { label: "¡Sí, seguro!", value: "yes" },
            ],
          },
        ],
      },
      {
        id: "reminders",
        title: "Recordatorios",
        description: "Podrás ver todas las fechas importantes en el calendario, pero además podrás elegir cuándo la app te recuerda esos eventos.",
        icon: "reminders",
        questions: [
          {
            id: "reminder-time",
            type: "multiple-choice",
            question: "¿Con cuánto tiempo de antelación te gustaría tener el recordatorio? (selecciona todas las que apliquen)",
            options: [
              { label: "1 mes", value: "1-month" },
              { label: "15 días", value: "15-days" },
              { label: "1 semana", value: "1-week" },
              { label: "3 días", value: "3-days" },
              { label: "1 día", value: "1-day" },
              { label: "Personalizado", value: "custom" },
            ],
          },
        ],
      },
      {
        id: "share",
        title: "Próximos Pasos",
        description: "¡Genial! ¡Ya conoces la app mucho mejor! En el futuro también queremos que puedas crear un Grupo para organizar regalos. Pero más adelante. De momento puedes inscribirte a nuestra lista de espera.",
        icon: "share",
        questions: [
          {
            id: "overall-opinion",
            type: "single-choice",
            question: "¿Qué te ha parecido la app Regalo en general?",
            options: [
              { label: "Poco útil", value: "not-useful" },
              { label: "Está bien", value: "good" },
              { label: "¡Muy útil, la usaría!", value: "very-useful" },
              { label: "La necesito", value: "need-it" },
            ],
          },
          {
            id: "improvement-ideas",
            type: "combined",
            question: "¿Alguna idea para mejorar la app?",
            options: [
              { label: "No se me ocurre nada ahora", value: "nothing" },
            ],
            hasTextInput: true,
            placeholder: "Tus sugerencias...",
          },
          {
            id: "share-with-others",
            type: "single-choice",
            question: "¿Compartirías la app con tus seres queridos?",
            options: [
              { label: "No creo", value: "no" },
              { label: "Quizás", value: "maybe" },
              { label: "¡Sí, seguro!", value: "yes" },
            ],
          },
        ],
      },
    ];
  }

  // English version
  return [
    {
      id: "calendar",
      title: "Calendar",
      description: "The idea came because many of us often forget important dates, like a family member's birthday. That's why we'll have a calendar just for that in the app!",
      icon: "calendar",
      questions: [
        {
          id: "forgot-gift",
          type: "single-choice",
          question: "Between you and me, have you ever forgotten to buy an important gift or done it at the last minute?",
          options: [
            { label: "No, never", value: "no-never" },
            { label: "Rarely", value: "rarely" },
            { label: "Yes, but I forgot once", value: "once" },
            { label: "Very often", value: "very-often" },
          ],
        },
        {
          id: "use-calendar",
          type: "single-choice",
          question: "Do you use Google Calendar or others to note important dates for giving gifts?",
          options: [
            { label: "No, never", value: "no-never" },
            { label: "Rarely", value: "rarely" },
            { label: "Yes, but I forgot once", value: "once" },
            { label: "Very often", value: "very-often" },
          ],
        },
      ],
    },
    {
      id: "profile",
      title: "Profile",
      description: "You can also create your profile. The idea is to use only avatars. You can specify what you like, your sizes, and books you've already read, so they don't give them to you again ;) You can also see other people's profiles.",
      icon: "profile",
      questions: [
        {
          id: "profile-useful",
          type: "single-choice",
          question: "Does this seem useful to you?",
          options: [
            { label: "I wouldn't use it", value: "no-use" },
            { label: "I could try it", value: "could-try" },
            { label: "Yes, I would use it", value: "yes-use" },
            { label: "Awesome!", value: "awesome" },
          ],
        },
        {
          id: "profile-data",
          type: "combined",
          question: "Would you include any other data in the profile?",
          options: [
            { label: "No, that's enough", value: "no-enough" },
            { label: "Section 'don't give me this...'", value: "dont-give" },
            { label: "Hobbies", value: "hobbies" },
          ],
          hasTextInput: true,
          placeholder: "Your answer...",
        },
        {
          id: "never-share",
          type: "combined",
          question: "Is there anything you would never share?",
          options: [
            { label: "My real age", value: "age" },
            { label: "My favorite color", value: "color" },
            { label: "I have no secrets", value: "no-secrets" },
          ],
          hasTextInput: true,
          placeholder: "Your answer...",
        },
      ],
    },
    {
      id: "access",
      title: "Access Profile",
      description: "You can easily share your profile with a QR code or Link. If you later want to remove someone from the list, no problem.",
      icon: "access",
      questions: [
        {
          id: "share-with",
          type: "multiple-choice",
          question: "Who would you like to share your profile with?",
          options: [
            { label: "Work colleagues", value: "work" },
            { label: "Family", value: "family" },
            { label: "Friends", value: "friends" },
            { label: "Acquaintances", value: "acquaintances" },
            { label: "Strangers", value: "strangers" },
          ],
        },
        {
          id: "qr-card",
          type: "single-choice",
          question: "Would you include your profile QR on your gift card?",
          options: [
            { label: "I don't think so", value: "no" },
            { label: "Maybe", value: "maybe" },
            { label: "Yes, for sure!", value: "yes" },
          ],
        },
      ],
    },
    {
      id: "reminders",
      title: "Reminders",
      description: "You can see all important dates in the calendar, but you can also choose when the app reminds you of these events.",
      icon: "reminders",
      questions: [
        {
          id: "reminder-time",
          type: "multiple-choice",
          question: "How much advance notice would you like for the reminder? (select all that apply)",
          options: [
            { label: "1 month", value: "1-month" },
            { label: "15 days", value: "15-days" },
            { label: "1 week", value: "1-week" },
            { label: "3 days", value: "3-days" },
            { label: "1 day", value: "1-day" },
            { label: "Custom", value: "custom" },
          ],
        },
      ],
    },
    {
      id: "share",
      title: "Next Steps",
      description: "Great! You now know the app much better! In the future we also want you to be able to create a Group to organize gifts. But more on that later. For now you can join our waiting list.",
      icon: "share",
      questions: [
        {
          id: "overall-opinion",
          type: "single-choice",
          question: "What did you think of the Regalo app in general?",
          options: [
            { label: "Not very useful", value: "not-useful" },
            { label: "It's good", value: "good" },
            { label: "Very useful, I'd use it!", value: "very-useful" },
            { label: "I need it", value: "need-it" },
          ],
        },
        {
          id: "improvement-ideas",
          type: "combined",
          question: "Any ideas to improve the app?",
          options: [
            { label: "Nothing comes to mind right now", value: "nothing" },
          ],
          hasTextInput: true,
          placeholder: "Your suggestions...",
        },
        {
          id: "share-with-others",
          type: "single-choice",
          question: "Would you share the app with your loved ones?",
          options: [
            { label: "I don't think so", value: "no" },
            { label: "Maybe", value: "maybe" },
            { label: "Yes, for sure!", value: "yes" },
          ],
        },
      ],
    },
  ];
}
