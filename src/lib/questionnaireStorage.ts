/**
 * Utility functions for managing questionnaire data in localStorage
 */

export interface QuestionnaireResponse {
  [key: string]: {
    value: string | string[];
    textValue?: string;
  };
}

export interface QuestionnaireSubmission {
  data: QuestionnaireResponse;
  completedAt: string;
}

const STORAGE_KEY = "regaloQuestionnaireData";
const TIMESTAMP_KEY = "regaloQuestionnaireCompletedAt";

/**
 * Save questionnaire data to localStorage
 */
export const saveQuestionnaireData = (data: QuestionnaireResponse): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    localStorage.setItem(TIMESTAMP_KEY, new Date().toISOString());
  } catch (error) {
    console.error("Error saving questionnaire data:", error);
  }
};

/**
 * Retrieve questionnaire data from localStorage
 */
export const getQuestionnaireData = (): QuestionnaireSubmission | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    const completedAt = localStorage.getItem(TIMESTAMP_KEY);

    if (!data || !completedAt) {
      return null;
    }

    return {
      data: JSON.parse(data),
      completedAt,
    };
  } catch (error) {
    console.error("Error retrieving questionnaire data:", error);
    return null;
  }
};

/**
 * Clear questionnaire data from localStorage
 */
export const clearQuestionnaireData = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(TIMESTAMP_KEY);
  } catch (error) {
    console.error("Error clearing questionnaire data:", error);
  }
};

/**
 * Export questionnaire data as JSON file
 */
export const exportQuestionnaireData = (): void => {
  const submission = getQuestionnaireData();
  
  if (!submission) {
    console.warn("No questionnaire data to export");
    return;
  }

  const dataStr = JSON.stringify(submission, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(dataBlob);
  
  const link = document.createElement("a");
  link.href = url;
  link.download = `regalo-questionnaire-${new Date().toISOString().split("T")[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Check if user has completed the questionnaire
 */
export const hasCompletedQuestionnaire = (): boolean => {
  return localStorage.getItem(STORAGE_KEY) !== null;
};
