# Interactive Questionnaire Feature

## Overview

The Regalo landing page includes an interactive multi-step questionnaire that collects user feedback while explaining the app's features. This document explains how the questionnaire works and how to access the collected data.

## User Flow

1. **Trigger**: User clicks the "Yes! Let's Go :)" button in the CTA section
2. **Modal Opens**: A full-screen modal appears with the first questionnaire step
3. **Multi-Step Form**: User progresses through 5 steps:
   - **Calendar**: Questions about forgetting important dates
   - **Profile**: Questions about profile features and preferences
   - **Access Profile**: Questions about sharing profiles
   - **Reminders**: Questions about notification preferences
   - **Share**: Overall feedback and improvement suggestions
4. **Navigation**: Users can go back/forward between steps
5. **Submission**: On the last step, clicking "Submit" saves data to localStorage
6. **Thank You**: A thank you screen appears confirming submission

## Questionnaire Steps

### Step 1: Calendar
- Questions about forgetting to buy gifts
- Questions about using calendars for gift reminders

### Step 2: Profile
- Usefulness of profile feature
- Additional data to include in profile
- Privacy concerns

### Step 3: Access Profile
- Who to share profile with
- Including QR code on gift cards

### Step 4: Reminders
- Preferred reminder timing (1 month, 15 days, 1 week, etc.)

### Step 5: Share
- Overall opinion of the app
- Improvement suggestions
- Willingness to share with others

## Data Storage

### LocalStorage
All questionnaire responses are saved to the browser's localStorage:

- **Key**: `regaloQuestionnaireData`
- **Format**: JSON object with question IDs as keys
- **Timestamp**: `regaloQuestionnaireCompletedAt`

### Data Structure
```json
{
  "question-id": {
    "value": "selected-option" | ["option1", "option2"],
    "textValue": "optional text response"
  }
}
```

## Accessing Responses

### Admin Page
Visit `/admin` to view questionnaire responses:

- **View Responses**: See all answers in a formatted view
- **Export JSON**: Download responses as a JSON file
- **Clear Data**: Remove all stored responses

### Programmatic Access
```typescript
import { 
  getQuestionnaireData, 
  exportQuestionnaireData,
  clearQuestionnaireData 
} from '@/lib/questionnaireStorage';

// Get data
const submission = getQuestionnaireData();

// Export as JSON file
exportQuestionnaireData();

// Clear data
clearQuestionnaireData();
```

## Question Types

### Single Choice
User can select one option from multiple choices.

### Multiple Choice
User can select multiple options.

### Combined
User can select options AND provide text input.

### Text Only
User provides free-form text response.

## Analytics Integration

All components include `data-analytics-id` attributes for tracking:

- `questionnaire-modal`: Modal container
- `questionnaire-step-{stepId}`: Each step
- `question-{questionId}`: Each question
- `option-{optionValue}`: Each option button
- `text-input-{questionId}`: Text input fields
- `questionnaire-next`: Next button
- `questionnaire-back`: Back button
- `questionnaire-submit`: Submit button
- `questionnaire-close`: Close button

## Customization

### Adding New Questions

Edit `/src/lib/questionnaireData.ts`:

```typescript
{
  id: "new-question",
  type: "single-choice",
  question: "Your question here?",
  options: [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
  ],
}
```

### Modifying Steps

Add or remove steps in the `questionnaireSteps` array in `/src/lib/questionnaireData.ts`.

### Styling

All components use Tailwind CSS classes and can be customized in their respective files:
- `/src/components/sections/QuestionnaireModal.tsx`
- `/src/components/ui/QuestionCard.tsx`

## Future Enhancements

- [ ] Backend integration for storing responses
- [ ] Email notifications on submission
- [ ] Analytics dashboard
- [ ] A/B testing different question flows
- [ ] Multi-language support
- [ ] Progress saving (resume later)
- [ ] Conditional questions based on previous answers

## Technical Notes

- Built with React hooks (useState, useEffect)
- Client-side only (uses "use client" directive)
- Responsive design (mobile-first)
- Accessible (ARIA labels, keyboard navigation)
- Type-safe with TypeScript interfaces
