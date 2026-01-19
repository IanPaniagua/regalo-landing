"use client";

import React, { useState, useEffect, useMemo } from "react";
import { fetchQuestionnaireResponses, fetchWaitlistSignups, fetchBetaTesters, updateBetaTesterDownloadStatus } from "@/lib/firestoreService";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { DashboardAuth } from "@/components/DashboardAuth";
import { calculateQuestionnaireStats } from "@/lib/analyticsCalculations";
import { exportAnalyticsToPDF } from "@/lib/exportToPDF";

interface QuestionnaireResponseData {
  id: string;
  responses: Record<string, { value: string | string[]; textValue?: string }>;
  metadata: {
    timeSpent: number;
    completedSteps: number;
    totalSteps: number;
    userAgent?: string;
    language?: string;
    screenResolution?: string;
    referrer?: string;
    environment?: 'development' | 'production';
    hostname?: string;
  };
  createdAt: string;
}

interface WaitlistSignup {
  id: string;
  email: string;
  name: string;
  source: string;
  platform?: string;
  language?: string;
  createdAt: string;
  metadata?: {
    userAgent?: string;
    language?: string;
    referrer?: string;
  };
}

interface BetaTester {
  id: string;
  email: string;
  name: string;
  platform: string;
  language: string;
  source: string;
  downloadedApp: boolean;
  createdAt: string;
  metadata?: {
    userAgent?: string;
    language?: string;
    referrer?: string;
  };
}

/**
 * Dashboard page - hidden route for viewing questionnaire responses
 * Access at: /dashboard
 */
export default function DashboardPage() {
  const [responses, setResponses] = useState<QuestionnaireResponseData[]>([]);
  const [waitlist, setWaitlist] = useState<WaitlistSignup[]>([]);
  const [betaTesters, setBetaTesters] = useState<BetaTester[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"analytics" | "questionnaires" | "waitlist" | "beta">("beta");
  const [selectedResponse, setSelectedResponse] = useState<QuestionnaireResponseData | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const [responsesData, waitlistData, betaTestersData] = await Promise.all([
      fetchQuestionnaireResponses(200),
      fetchWaitlistSignups(200),
      fetchBetaTesters(200),
    ]);
    setResponses(responsesData as QuestionnaireResponseData[]);
    setWaitlist(waitlistData as WaitlistSignup[]);
    setBetaTesters(betaTestersData as BetaTester[]);
    setLoading(false);
  };

  // Filter out development responses (since you deleted them manually)
  const filteredResponses = responses.filter(r => r.metadata?.environment !== 'development');

  // Calculate analytics stats
  const analyticsStats = useMemo(() => {
    return calculateQuestionnaireStats(filteredResponses);
  }, [filteredResponses]);

  // Old waitlist is now just the waitlist_signups collection
  const oldWaitlist = waitlist;

  // Calculate beta tester stats
  const betaStats = useMemo(() => {
    const platformCounts = betaTesters.reduce((acc, tester) => {
      const platform = tester.platform;
      acc[platform] = (acc[platform] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const languageCounts = betaTesters.reduce((acc, tester) => {
      const lang = tester.language;
      acc[lang] = (acc[lang] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const downloadedCount = betaTesters.filter(t => t.downloadedApp).length;

    return {
      total: betaTesters.length,
      platforms: platformCounts,
      languages: languageCounts,
      ios: platformCounts['ios'] || 0,
      android: platformCounts['android'] || 0,
      downloaded: downloadedCount,
    };
  }, [betaTesters]);

  const handleToggleDownload = async (testerId: string, currentStatus: boolean) => {
    const success = await updateBetaTesterDownloadStatus(testerId, !currentStatus);
    if (success) {
      // Reload data to reflect changes
      loadData();
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const getQuestionLabel = (questionId: string): string => {
    const labels: Record<string, string> = {
      'forgot-gift': 'Have you forgotten to buy an important gift?',
      'use-calendar': 'Do you use Google Calendar for important dates?',
      'profile-useful': 'Does the profile seem useful to you?',
      'profile-data': 'Would you include other data in the profile?',
      'never-share': 'Is there anything you would never share?',
      'share-with': 'Who would you share your profile with?',
      'access-profile': 'Who should access your profile?',
      'reminder-time': 'When do you want reminders?',
      'reminder-method': 'How do you prefer reminders?',
      'overall-opinion': 'Overall opinion of the app',
      'other-features': 'Other features you would like to see',
    };
    return labels[questionId] || questionId;
  };

  const getAnswerLabel = (questionId: string, value: string | string[]): string => {
    if (Array.isArray(value)) {
      return value.map(v => getAnswerLabel(questionId, v)).join(', ');
    }

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
        'no-use': 'I wouldn\'t use it',
        'could-try': 'I could try it',
        'yes-use': 'Yes, I would use it',
        'awesome': 'Awesome!',
      },
      'profile-data': {
        'no-enough': 'No, that\'s enough',
        'dont-give': 'Section "don\'t give me this..."',
        'hobbies': 'Hobbies',
      },
      'never-share': {
        'no': 'No',
        'yes': 'Yes',
        'sizes': 'Sizes',
        'wishlist': 'Wishlist',
      },
      'share-with': {
        'family': 'Family',
        'friends': 'Friends',
        'partner': 'Partner',
        'coworkers': 'Coworkers',
        'no-one': 'No one',
      },
      'access-profile': {
        'only-me': 'Only me',
        'selected': 'Selected people',
        'everyone': 'Everyone',
      },
      'reminder-time': {
        'week-before': '1 week before',
        'two-weeks': '2 weeks before',
        'month': '1 month before',
        'day-of': 'Same day',
      },
      'reminder-method': {
        'push': 'Push notification',
        'email': 'Email',
        'both': 'Both',
        'none': 'None',
      },
      'overall-opinion': {
        'need-it': 'I need it',
        'very-useful': 'Very useful',
        'good': 'Good',
        'not-useful': 'Not very useful',
      },
    };

    return answerLabels[questionId]?.[value] || value;
  };

  const handleExportPDF = () => {
    exportAnalyticsToPDF(analyticsStats, filteredResponses.length);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-neutral-50 py-12">
        <Container>
          <div className="text-center">
            <Logo size="lg" />
            <p className="mt-8 text-neutral-600">Loading data...</p>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <DashboardAuth>
      <style jsx global>{`
        /* Custom scrollbar for dashboard */
        .dashboard-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .dashboard-scroll::-webkit-scrollbar-track {
          background: #f5f5f5;
          border-radius: 4px;
        }
        .dashboard-scroll::-webkit-scrollbar-thumb {
          background: #d4d4d4;
          border-radius: 4px;
        }
        .dashboard-scroll::-webkit-scrollbar-thumb:hover {
          background: #a3a3a3;
        }
      `}</style>
      <main className="min-h-screen bg-neutral-50 py-8">
        <Container>
          <div className="mb-8">
            <Logo size="lg" />
            <h1 className="font-display text-4xl font-bold text-neutral-900 mt-6 mb-2">
              Dashboard
            </h1>
            <p className="text-neutral-600">
              Beta tester analytics and waitlist overview
            </p>
            
            {/* Beta Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-neutral-200">
                <p className="text-sm text-neutral-600 mb-1">Total Beta Testers</p>
                <p className="text-3xl font-bold text-neutral-900">{betaStats.total}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-neutral-200">
                <p className="text-sm text-neutral-600 mb-1">iOS Testers</p>
                <p className="text-3xl font-bold text-secondary-blue">{betaStats.ios}</p>
                <p className="text-xs text-neutral-500 mt-1">
                  {betaStats.total > 0 ? ((betaStats.ios / betaStats.total) * 100).toFixed(1) : 0}%
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-neutral-200">
                <p className="text-sm text-neutral-600 mb-1">Android Testers</p>
                <p className="text-3xl font-bold text-secondary-blue">{betaStats.android}</p>
                <p className="text-xs text-neutral-500 mt-1">
                  {betaStats.total > 0 ? ((betaStats.android / betaStats.total) * 100).toFixed(1) : 0}%
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-neutral-200">
                <p className="text-sm text-neutral-600 mb-1">Languages</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-sm font-medium">EN: {betaStats.languages['en'] || 0}</span>
                  <span className="text-sm font-medium">ES: {betaStats.languages['es'] || 0}</span>
                  <span className="text-sm font-medium">DE: {betaStats.languages['de'] || 0}</span>
                </div>
              </div>
            </div>
          </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-neutral-200">
          <button
            onClick={() => setActiveTab("beta")}
            className={`pb-3 px-4 font-medium transition-colors ${
              activeTab === "beta"
                ? "text-secondary-blue border-b-2 border-secondary-blue"
                : "text-neutral-500 hover:text-neutral-700"
            }`}
          >
            🎯 Beta Testers ({betaTesters.length})
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className={`pb-3 px-4 font-medium transition-colors ${
              activeTab === "analytics"
                ? "text-neutral-900 border-b-2 border-neutral-900"
                : "text-neutral-500 hover:text-neutral-700"
            }`}
          >
            📊 Analytics
          </button>
          <button
            onClick={() => setActiveTab("questionnaires")}
            className={`pb-3 px-4 font-medium transition-colors ${
              activeTab === "questionnaires"
                ? "text-neutral-900 border-b-2 border-neutral-900"
                : "text-neutral-500 hover:text-neutral-700"
            }`}
          >
            📝 Responses ({filteredResponses.length})
          </button>
          <button
            onClick={() => setActiveTab("waitlist")}
            className={`pb-3 px-4 font-medium transition-colors ${
              activeTab === "waitlist"
                ? "text-neutral-900 border-b-2 border-neutral-900"
                : "text-neutral-500 hover:text-neutral-700"
            }`}
          >
            📋 Old Waitlist ({oldWaitlist.length})
          </button>
        </div>

        {/* Beta Testers Tab */}
        {activeTab === "beta" && (
          <div>
            <div className="mb-6">
              <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-2">
                Beta Testers
              </h2>
              <p className="text-neutral-600 text-sm">
                Users who signed up for beta testing with platform and language selection
              </p>
            </div>
            
            {betaTesters.length === 0 ? (
              <div className="bg-white rounded-lg p-12 shadow-sm border border-neutral-200 text-center">
                <p className="text-neutral-500 text-lg mb-2">No beta testers yet</p>
                <p className="text-neutral-400 text-sm">New signups with platform selection will appear here</p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-neutral-50 border-b border-neutral-200">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-neutral-700 text-sm">
                        Name
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-neutral-700 text-sm">
                        Email
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-neutral-700 text-sm">
                        Platform
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-neutral-700 text-sm">
                        Language
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-neutral-700 text-sm">
                        Downloaded App
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-neutral-700 text-sm">
                        Source
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-neutral-700 text-sm">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {betaTesters.map((tester) => (
                      <tr key={tester.id} className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50 transition-colors">
                        <td className="py-3 px-4 text-sm text-neutral-900 font-medium">{tester.name}</td>
                        <td className="py-3 px-4 text-sm text-neutral-700 font-mono">
                          {tester.email}
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                              tester.platform === "ios"
                                ? "bg-blue-100 text-blue-700"
                                : tester.platform === "android"
                                ? "bg-green-100 text-green-700"
                                : "bg-neutral-100 text-neutral-600"
                            }`}
                          >
                            {tester.platform === "ios" && "📱"}
                            {tester.platform === "android" && "🤖"}
                            {tester.platform.toUpperCase()}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-secondary-light text-secondary-dark">
                            {tester.language.toUpperCase()}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={tester.downloadedApp}
                              onChange={() => handleToggleDownload(tester.id, tester.downloadedApp)}
                              className="w-4 h-4 rounded border-neutral-300 text-secondary-blue focus:ring-secondary-blue cursor-pointer"
                            />
                            <span className={`text-xs font-medium ${tester.downloadedApp ? 'text-green-600' : 'text-neutral-400'}`}>
                              {tester.downloadedApp ? '✓ Downloaded' : 'Not yet'}
                            </span>
                          </label>
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-orange-100 text-orange-700">
                            {tester.source}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-neutral-600">
                          {formatDate(tester.createdAt)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-2">
                    Question Analytics
                  </h2>
                  <p className="text-neutral-600 text-sm">
                    Showing statistics for {filteredResponses.length} responses
                  </p>
                </div>
                <button
                  onClick={handleExportPDF}
                  className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Export PDF
                </button>
              </div>

              {analyticsStats.length === 0 ? (
                <p className="text-neutral-500 text-center py-8">No data available yet</p>
              ) : (
                <div className="space-y-8">
                  {analyticsStats.map((stat, statIdx) => (
                    <div key={`${stat.questionId}-${statIdx}`} className="pb-8 border-b border-neutral-100 last:border-0">
                      {/* Question with golden underline */}
                      <h3 className="font-medium text-neutral-900 mb-4">
                        <span className="relative inline-block">
                          {stat.questionLabel}
                          <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary-blue"></span>
                        </span>
                      </h3>
                      <p className="text-xs text-neutral-500 mb-4">
                        {stat.totalResponses} {stat.totalResponses === 1 ? 'response' : 'responses'}
                      </p>

                      {/* Options with bars */}
                      <div className="space-y-3">
                        {stat.options.map((option, optIdx) => (
                          <div key={`${stat.questionId}-${option.value}-${optIdx}`} className="space-y-1">
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-neutral-700">{option.label}</span>
                              <div className="flex items-center gap-3">
                                <span className="text-neutral-500">{option.count}</span>
                                <span className="font-medium text-neutral-900 min-w-[3rem] text-right">
                                  {option.percentage.toFixed(1)}%
                                </span>
                              </div>
                            </div>
                            {/* Progress bar */}
                            <div className="w-full bg-neutral-100 rounded-full h-2 overflow-hidden">
                              <div
                                className="bg-neutral-900 h-full rounded-full transition-all duration-500"
                                style={{ width: `${option.percentage}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Text responses if any */}
                      {stat.textResponses && stat.textResponses.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-neutral-100">
                          <p className="text-xs font-medium text-neutral-700 mb-2">
                            Text responses ({stat.textResponses.length}):
                          </p>
                          <div className="space-y-2 max-h-40 overflow-y-auto dashboard-scroll">
                            {stat.textResponses.map((text, idx) => (
                              <p key={idx} className="text-sm text-neutral-600 bg-neutral-50 p-2 rounded italic">
                                "{text}"
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Responses Tab */}
        {activeTab === "questionnaires" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:items-start">
            {/* List - Scrollable */}
            <div className="space-y-4 lg:max-h-[calc(100vh-16rem)] lg:overflow-y-auto lg:pr-4 dashboard-scroll">
              <h2 className="font-display text-2xl font-semibold text-neutral-900 lg:sticky lg:top-0 lg:bg-neutral-50 lg:py-2 lg:z-10">
                Responses
              </h2>
              {filteredResponses.length === 0 ? (
                <p className="text-neutral-500">No responses yet</p>
              ) : (
                filteredResponses.map((response) => (
                  <div
                    key={response.id}
                    onClick={() => setSelectedResponse(response)}
                    className={`bg-white rounded-lg p-4 shadow-sm border cursor-pointer transition-all ${
                      selectedResponse?.id === response.id
                        ? "border-neutral-900 shadow-md"
                        : "border-neutral-200 hover:border-neutral-400"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-neutral-400">
                        {response.id.slice(0, 8)}...
                      </span>
                      <span className="text-xs text-neutral-500">
                        {formatDate(response.createdAt)}
                      </span>
                    </div>
                    <div className="flex gap-4 text-sm text-neutral-600">
                      <span>⏱️ {formatTime(response.metadata.timeSpent)}</span>
                      <span>
                        📊 {response.metadata.completedSteps}/{response.metadata.totalSteps} steps
                      </span>
                    </div>
                    <div className="mt-2 flex gap-3 text-xs text-neutral-500">
                      {response.metadata.language && (
                        <span>🌐 {response.metadata.language}</span>
                      )}
                      {response.metadata.environment === 'development' && (
                        <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded font-medium">
                          DEV
                        </span>
                      )}
                      {response.metadata.hostname && (
                        <span>🖥️ {response.metadata.hostname}</span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Detail - Sticky */}
            <div className="lg:sticky lg:top-8 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto dashboard-scroll">
              {selectedResponse ? (
                <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
                  <h3 className="font-display text-xl font-semibold text-neutral-900 mb-4">
                    Response Details
                  </h3>
                  
                  <div className="mb-6 pb-4 border-b border-neutral-200">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-neutral-500">ID:</span>
                        <p className="font-mono text-xs">{selectedResponse.id}</p>
                      </div>
                      <div>
                        <span className="text-neutral-500">Date:</span>
                        <p className="text-xs">{formatDate(selectedResponse.createdAt)}</p>
                      </div>
                      <div>
                        <span className="text-neutral-500">Time:</span>
                        <p>{formatTime(selectedResponse.metadata.timeSpent)}</p>
                      </div>
                      <div>
                        <span className="text-neutral-500">Progress:</span>
                        <p>
                          {selectedResponse.metadata.completedSteps}/
                          {selectedResponse.metadata.totalSteps}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {Object.entries(selectedResponse.responses).map(([questionId, answer]) => (
                      <div key={questionId} className="pb-4 border-b border-neutral-100 last:border-0">
                        <p className="font-medium text-neutral-900 mb-2 text-sm">
                          {getQuestionLabel(questionId)}
                        </p>
                        <p className="text-neutral-700 text-sm">
                          {getAnswerLabel(questionId, answer.value)}
                        </p>
                        {answer.textValue && (
                          <p className="mt-2 text-neutral-600 text-sm italic bg-neutral-50 p-2 rounded">
                            "{answer.textValue}"
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200 text-center text-neutral-500">
                  Select a response to view details
                </div>
              )}
            </div>
          </div>
        )}

        {/* Old Waitlist Tab */}
        {activeTab === "waitlist" && (
          <div>
            <div className="mb-6">
              <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-2">
                Old Waitlist
              </h2>
              <p className="text-neutral-600 text-sm">
                Legacy waitlist signups from before the beta testing program (no platform/language data)
              </p>
            </div>
            {oldWaitlist.length === 0 ? (
              <p className="text-neutral-500">No old waitlist signups</p>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-neutral-50 border-b border-neutral-200">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-neutral-700 text-sm">
                        Name
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-neutral-700 text-sm">
                        Email
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-neutral-700 text-sm">
                        Source
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-neutral-700 text-sm">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {oldWaitlist.map((signup) => (
                      <tr key={signup.id} className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50 transition-colors">
                        <td className="py-3 px-4 text-sm text-neutral-900 font-medium">{signup.name}</td>
                        <td className="py-3 px-4 text-sm text-neutral-700 font-mono">
                          {signup.email}
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <span
                            className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                              signup.source === "questionnaire"
                                ? "bg-purple-100 text-purple-700"
                                : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {signup.source}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-neutral-600">
                          {formatDate(signup.createdAt)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </Container>
    </main>
    </DashboardAuth>
  );
}
