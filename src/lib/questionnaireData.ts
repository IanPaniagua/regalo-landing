/**
 * Questionnaire data structure
 * Defines all steps, questions, and options for the interactive form
 */

export interface QuestionOption {
  label: string;
  value: string;
}

export interface Question {
  id: string;
  type: "single-choice" | "multiple-choice" | "text" | "combined";
  question: string;
  options?: QuestionOption[];
  placeholder?: string;
  hasTextInput?: boolean;
}

export interface QuestionnaireStep {
  id: string;
  title: string;
  description: string;
  icon: "calendar" | "profile" | "share" | "reminders" | "access";
  questions: Question[];
}

export const questionnaireSteps: QuestionnaireStep[] = [
  {
    id: "calendar",
    title: "Calendar",
    // ES: La idea surge por que yo y muchos a menor olvidamos fechas importatnes, como el cumple de un familiar. Por eso tendremos un calendario solo para eso en la app!
    description: "The idea came because many of us often forget important dates, like a family member's birthday. That's why we'll have a calendar just for that in the app!",
    icon: "calendar",
    questions: [
      {
        id: "forgot-gift",
        type: "single-choice",
        // ES: Entre tu y yo, dime, tambien has olvidado alguna vez comprar un regalo importante? o lo has hecho a ultima hora con prisas?
        question: "Between you and me, have you ever forgotten to buy an important gift or done it at the last minute?",
        options: [
          { label: "No, never", value: "no-never" }, // ES: No, ninguna
          { label: "Rarely", value: "rarely" }, // ES: Si pero pocas veces
          { label: "Yes, but I forgot once", value: "once" }, // ES: Si pero aun asi me olvido
          { label: "Very often", value: "very-often" }, // ES: Si mucho
        ],
      },
      {
        id: "use-calendar",
        type: "single-choice",
        // ES: Utilizas google calender u otros para anotar las fechas imporantes para hacer regalos?
        question: "Do you use Google Calendar or others to note important dates for giving gifts?",
        options: [
          { label: "No, never", value: "no-never" }, // ES: No, ninguna
          { label: "Rarely", value: "rarely" }, // ES: Si pero pocas veces
          { label: "Yes, but I forgot once", value: "once" }, // ES: Si pero aun asi me olvido
          { label: "Very often", value: "very-often" }, // ES: Si mucho
        ],
      },
    ],
  },
  {
    id: "profile",
    title: "Profile",
    // ES: Tambien podras crear tu profile. La idea es utilizar solo avatars. Podras especificar que te gusta, tus tallas y los libros que ya has leido, para que no te lo regalen otra vez ;)
    // ES: Ademas tambien podras ver el profile de los demas
    description: "You can also create your profile. The idea is to use only avatars. You can specify what you like, your sizes, and books you've already read, so they don't give them to you again ;) You can also see other people's profiles.",
    icon: "profile",
    questions: [
      {
        id: "profile-useful",
        type: "single-choice",
        // ES: Te parece util?
        question: "Does this seem useful to you?",
        options: [
          { label: "I wouldn't use it", value: "no-use" }, // ES: No lo usaria
          { label: "I could try it", value: "could-try" }, // ES: Podria probarlo
          { label: "Yes, I would use it", value: "yes-use" }, // ES: Si yo lo usaria
          { label: "Awesome!", value: "awesome" }, // ES: Genial!
        ],
      },
      {
        id: "profile-data",
        type: "combined",
        // ES: Incluirias algun otro dato en el perfil?
        question: "Would you include any other data in the profile?",
        options: [
          { label: "No, that's enough", value: "no-enough" }, // ES: No, asi basta
          { label: "Section 'don't give me this...'", value: "dont-give" }, // ES: seccion "no me regales esto..."
          { label: "Hobbies", value: "hobbies" }, // ES: "Hobbies"
        ],
        hasTextInput: true,
        placeholder: "Your answer...", // ES: Text input:
      },
      {
        id: "never-share",
        type: "combined",
        // ES: Hay algo que nunca compartirias?
        question: "Is there anything you would never share?",
        options: [
          { label: "My real age", value: "age" }, // ES: Mi verdadera edad
          { label: "My favorite color", value: "color" }, // ES: Mi color favorito
          { label: "I have no secrets", value: "no-secrets" }, // ES: No tengo secretos
        ],
        hasTextInput: true,
        placeholder: "Your answer...", // ES: Text input:
      },
    ],
  },
  {
    id: "access",
    title: "Access Profile",
    // ES: Podras compartir tu perfilt facilmente con un QR o un Link. Si despues quieres borrar a alguien de la lista haylo sin problemas.
    description: "You can easily share your profile with a QR code or Link. If you later want to remove someone from the list, no problem.",
    icon: "access",
    questions: [
      {
        id: "share-with",
        type: "multiple-choice",
        // ES: Con quien te gustaria compartir tu perfil?
        question: "Who would you like to share your profile with?",
        options: [
          { label: "Work colleagues", value: "work" }, // ES: Compis de trabajo
          { label: "Family", value: "family" }, // ES: Familia
          { label: "Friends", value: "friends" }, // ES: Amigos
          { label: "Acquaintances", value: "acquaintances" }, // ES: Conocidos!
          { label: "Strangers", value: "strangers" }, // ES: Desconodidos
        ],
      },
      {
        id: "qr-card",
        type: "single-choice",
        // ES: LIncluirias el Qr de tu perfil en tu tarjeta regalo?
        question: "Would you include your profile QR on your gift card?",
        options: [
          { label: "I don't think so", value: "no" }, // ES: No creo
          { label: "Maybe", value: "maybe" }, // ES: Quizas
          { label: "Yes, for sure!", value: "yes" }, // ES: Si, seguro!
        ],
      },
    ],
  },
  {
    id: "reminders",
    title: "Reminders",
    // ES: odras ver todas las fechas importantes en el calendario. pero ademas podras elegir cuando la app te recuerda las esos eventos.
    description: "You can see all important dates in the calendar, but you can also choose when the app reminds you of these events.",
    icon: "reminders",
    questions: [
      {
        id: "reminder-time",
        type: "multiple-choice",
        // ES: Con cuanto tiempo de antelacion te gustaria tener el recordatorio? (multichoice)
        question: "How much advance notice would you like for the reminder? (select all that apply)",
        options: [
          { label: "1 month", value: "1-month" }, // ES: 1 mes
          { label: "15 days", value: "15-days" }, // ES: 15 dias
          { label: "1 week", value: "1-week" }, // ES: 1 semana
          { label: "3 days", value: "3-days" }, // ES: 3 dias
          { label: "1 day", value: "1-day" }, // ES: 1 dia
          { label: "Custom", value: "custom" }, // ES: Custom
        ],
      },
    ],
  },
  {
    id: "share",
    title: "Next Steps",
    // ES: Genial ya conoces la app mucho mejor !!! En el futuro tambien queremos que puedas crear un Gruppo para organizar regalos. Pero mas adlante. De momento puedes instribirte a nuestra warte-list.
    description: "Great! You now know the app much better! In the future we also want you to be able to create a Group to organize gifts. But more on that later. For now you can join our waiting list.",
    icon: "share",
    questions: [
      {
        id: "overall-opinion",
        type: "single-choice",
        // ES: Que te ha parecido la app Regalo en general?
        question: "What did you think of the Regalo app in general?",
        options: [
          { label: "Not very useful", value: "not-useful" }, // ES: Poco util
          { label: "It's good", value: "good" }, // ES: Esta Bien
          { label: "Very useful, I'd use it!", value: "very-useful" }, // ES: Muy util, la usaria!
          { label: "I need it", value: "need-it" }, // ES: La necesito
        ],
      },
      {
        id: "improvement-ideas",
        type: "combined",
        // ES: Alguna idea para mejorar la app?
        question: "Any ideas to improve the app?",
        options: [
          { label: "Nothing comes to mind right now", value: "nothing" }, // ES: no se me ocurre nada ahora
        ],
        hasTextInput: true,
        placeholder: "Your suggestions...", // ES: Text input:
      },
      {
        id: "share-with-others",
        type: "single-choice",
        // ES: Compartirias la app con tus seres queridos?
        question: "Would you share the app with your loved ones?",
        options: [
          { label: "I don't think so", value: "no" }, // ES: No creo
          { label: "Maybe", value: "maybe" }, // ES: Quizas
          { label: "Yes, for sure!", value: "yes" }, // ES: Si, seguro!
        ],
      },
    ],
  },
];
