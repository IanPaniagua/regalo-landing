"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import {
  getQuestionnaireData,
  clearQuestionnaireData,
  exportQuestionnaireData,
  type QuestionnaireSubmission,
} from "@/lib/questionnaireStorage";

/**
 * Admin page to view questionnaire responses
 * Accessible at /admin
 */
export default function AdminPage() {
  const [submission, setSubmission] = useState<QuestionnaireSubmission | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setIsLoading(true);
    const data = getQuestionnaireData();
    setSubmission(data);
    setIsLoading(false);
  };

  const handleClear = () => {
    if (confirm("Are you sure you want to clear all questionnaire data?")) {
      clearQuestionnaireData();
      loadData();
    }
  };

  const handleExport = () => {
    exportQuestionnaireData();
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-neutral-50 py-12">
        <Container>
          <div className="text-center">
            <p className="font-sans text-neutral-600">Loading...</p>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-50 py-12" data-analytics-page="admin">
      <Container>
        <div className="mb-8">
          <Logo size="lg" />
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-display text-3xl font-bold text-neutral-900">
              Questionnaire Responses
            </h1>
            
            {submission && (
              <div className="flex gap-3">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleExport}
                  data-analytics-id="export-data"
                >
                  Export JSON
                </Button>
                <Button
                  variant="tertiary"
                  size="sm"
                  onClick={handleClear}
                  data-analytics-id="clear-data"
                >
                  Clear Data
                </Button>
              </div>
            )}
          </div>

          {!submission ? (
            <div className="text-center py-12">
              <p className="font-sans text-lg text-neutral-600 mb-4">
                No questionnaire responses yet.
              </p>
              <p className="font-sans text-sm text-neutral-500">
                Responses will appear here once users complete the questionnaire.
              </p>
            </div>
          ) : (
            <div>
              <div className="mb-6 pb-6 border-b border-neutral-200">
                <p className="font-sans text-sm text-neutral-600">
                  <span className="font-semibold">Completed at:</span>{" "}
                  {new Date(submission.completedAt).toLocaleString()}
                </p>
              </div>

              <div className="space-y-6">
                {Object.entries(submission.data).map(([questionId, answer]) => (
                  <div
                    key={questionId}
                    className="bg-neutral-50 rounded-2xl p-6"
                  >
                    <h3 className="font-display text-lg font-semibold text-neutral-900 mb-3">
                      {questionId}
                    </h3>
                    
                    <div className="space-y-2">
                      <div>
                        <span className="font-sans text-sm font-medium text-neutral-700">
                          Selected:
                        </span>
                        <p className="font-sans text-neutral-800 mt-1">
                          {Array.isArray(answer.value)
                            ? answer.value.join(", ") || "None"
                            : answer.value || "None"}
                        </p>
                      </div>
                      
                      {answer.textValue && (
                        <div>
                          <span className="font-sans text-sm font-medium text-neutral-700">
                            Text response:
                          </span>
                          <p className="font-sans text-neutral-800 mt-1 italic">
                            "{answer.textValue}"
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="font-sans text-secondary-blue hover:text-secondary-dark transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </Container>
    </main>
  );
}
