/**
 * Analytics calculations for questionnaire responses
 * Calculates percentages, counts, and statistics for each question
 */

import { questionnaireSteps } from './questionnaireData';

interface QuestionStats {
  questionId: string;
  questionLabel: string;
  totalResponses: number;
  options: {
    value: string;
    label: string;
    count: number;
    percentage: number;
  }[];
  textResponses?: string[];
}

interface ResponseData {
  responses: Record<string, { value: string | string[]; textValue?: string }>;
}

/**
 * Calculate statistics for all questions
 */
export function calculateQuestionnaireStats(
  responses: ResponseData[],
  excludeDevelopment: boolean = true
): QuestionStats[] {
  if (responses.length === 0) return [];

  // Get all unique question IDs
  const questionIds = new Set<string>();
  responses.forEach(response => {
    Object.keys(response.responses).forEach(id => questionIds.add(id));
  });

  const stats: QuestionStats[] = [];

  questionIds.forEach(questionId => {
    const questionStats = calculateQuestionStats(questionId, responses);
    if (questionStats) {
      stats.push(questionStats);
    }
  });

  return stats;
}

/**
 * Get predefined options for a question from questionnaire data
 */
function getPredefinedOptions(questionId: string): { label: string; value: string }[] {
  for (const step of questionnaireSteps) {
    const question = step.questions.find(q => q.id === questionId);
    if (question && question.options) {
      return question.options;
    }
  }
  return [];
}

/**
 * Calculate statistics for a single question
 */
function calculateQuestionStats(
  questionId: string,
  responses: ResponseData[]
): QuestionStats | null {
  // Get predefined options for this question
  const predefinedOptions = getPredefinedOptions(questionId);
  
  const valueCounts = new Map<string, number>();
  const textResponses: string[] = [];
  let totalResponses = 0;

  // Initialize all predefined options with 0 count
  predefinedOptions.forEach(option => {
    valueCounts.set(option.value, 0);
  });

  responses.forEach(response => {
    const answer = response.responses[questionId];
    if (!answer) return;

    totalResponses++;

    // Handle array values (multiple choice)
    if (Array.isArray(answer.value)) {
      answer.value.forEach(val => {
        valueCounts.set(val, (valueCounts.get(val) || 0) + 1);
      });
    } else {
      // Handle single value
      valueCounts.set(answer.value, (valueCounts.get(answer.value) || 0) + 1);
    }

    // Collect text responses
    if (answer.textValue && answer.textValue.trim()) {
      textResponses.push(answer.textValue);
    }
  });

  if (totalResponses === 0) return null;

  // Convert to options array with percentages
  const options = Array.from(valueCounts.entries()).map(([value, count]) => {
    const label = getAnswerLabel(questionId, value);
    return {
      value,
      // If label is same as value, it means no translation found - show the raw value
      label: label === value ? `[${value}]` : label,
      count,
      percentage: totalResponses > 0 ? (count / totalResponses) * 100 : 0,
    };
  });

  // Sort by count descending
  options.sort((a, b) => b.count - a.count);

  return {
    questionId,
    questionLabel: getQuestionLabel(questionId),
    totalResponses,
    options,
    textResponses: textResponses.length > 0 ? textResponses : undefined,
  };
}

/**
 * Get human-readable question label
 */
function getQuestionLabel(questionId: string): string {
  const labels: Record<string, string> = {
    'forgot-gift': 'Have you ever forgotten to buy an important gift or done it at the last minute?',
    'use-calendar': 'Do you use Google Calendar or others to note important dates for giving gifts?',
    'profile-useful': 'Does this seem useful to you?',
    'profile-data': 'Would you include any other data in the profile?',
    'never-share': 'Is there anything you would never share?',
    'share-with': 'Who would you like to share your profile with?',
    'qr-card': 'Would you include your profile QR on your gift card?',
    'reminder-time': 'How much advance notice would you like for the reminder?',
    'overall-opinion': 'What did you think of the Regalo app in general?',
    'improvement-ideas': 'Any ideas to improve the app?',
    'share-with-others': 'Would you share the app with your loved ones?',
  };
  return labels[questionId] || questionId;
}

/**
 * Get human-readable answer label
 */
function getAnswerLabel(questionId: string, value: string): string {
  const answerLabels: Record<string, Record<string, string>> = {
    'forgot-gift': {
      'no-never': 'No, never',
      'rarely': 'Rarely',
      'once': 'Yes, but only once',
      'very-often': 'Very often',
    },
    'use-calendar': {
      'no-never': 'No, never',
      'rarely': 'Rarely',
      'once': 'Yes, but I forget',
      'very-often': 'Very often',
    },
    'profile-useful': {
      'no-use': "I wouldn't use it",
      'could-try': 'I could try it',
      'yes-use': 'Yes, I would use it',
      'awesome': 'Awesome!',
    },
    'profile-data': {
      'no-enough': "No, that's enough",
      'dont-give': 'Section "don\'t give me this..."',
      'hobbies': 'Hobbies',
    },
    'never-share': {
      'age': 'My real age',
      'color': 'My favorite color',
      'no-secrets': 'I have no secrets',
    },
    'share-with': {
      'work': 'Work colleagues',
      'family': 'Family',
      'friends': 'Friends',
      'acquaintances': 'Acquaintances',
      'strangers': 'Strangers',
    },
    'qr-card': {
      'no': "I don't think so",
      'maybe': 'Maybe',
      'yes': 'Yes, for sure!',
    },
    'reminder-time': {
      '1-month': '1 month',
      '15-days': '15 days',
      '1-week': '1 week',
      '3-days': '3 days',
      '1-day': '1 day',
      'custom': 'Custom',
    },
    'improvement-ideas': {
      'nothing': 'Nothing comes to mind right now',
    },
    'share-with-others': {
      'no': "I don't think so",
      'maybe': 'Maybe',
      'yes': 'Yes, for sure!',
    },
    'overall-opinion': {
      'need-it': 'I need it',
      'very-useful': 'Very useful',
      'good': 'Good',
      'not-useful': 'Not very useful',
    },
  };

  return answerLabels[questionId]?.[value] || value;
}

/**
 * Calculate overall statistics
 */
export function calculateOverallStats(responses: ResponseData[]) {
  const total = responses.length;
  
  // Calculate average completion time if available
  // This would need metadata from responses
  
  return {
    totalResponses: total,
    // Add more overall stats as needed
  };
}
