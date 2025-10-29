"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { analytics, firestore } from "@/lib/firebase";
import { logEvent } from "@/lib/analytics";
import { saveWaitlistSignup } from "@/lib/firestoreService";

/**
 * Test page to verify Firebase and Analytics are working
 */
export default function TestFirebasePage() {
  const [logs, setLogs] = useState<string[]>([]);
  const [analyticsReady, setAnalyticsReady] = useState(false);
  const [firestoreReady, setFirestoreReady] = useState(false);

  const addLog = (message: string) => {
    console.log(message);
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  useEffect(() => {
    addLog("🔍 Checking Firebase initialization...");
    
    // Check Analytics
    setTimeout(() => {
      if (analytics) {
        setAnalyticsReady(true);
        addLog("✅ Analytics is initialized");
      } else {
        addLog("❌ Analytics is NOT initialized");
      }
    }, 2000);

    // Check Firestore
    if (firestore) {
      setFirestoreReady(true);
      addLog("✅ Firestore is initialized");
    } else {
      addLog("❌ Firestore is NOT initialized");
    }

    // Check environment variables
    const hasApiKey = !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
    const hasProjectId = !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
    const hasMeasurementId = !!process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

    addLog(`API Key present: ${hasApiKey}`);
    addLog(`Project ID present: ${hasProjectId}`);
    addLog(`Measurement ID present: ${hasMeasurementId}`);
  }, []);

  const testAnalyticsEvent = () => {
    addLog("📊 Sending test event to Analytics...");
    logEvent("test_event", { test_param: "test_value" });
    addLog("✅ Event sent (check Firebase Console → Analytics → Events)");
  };

  const testFirestoreWrite = async () => {
    addLog("💾 Testing Firestore write...");
    try {
      const result = await saveWaitlistSignup(
        "test@example.com",
        "Test User",
        "landing"
      );
      
      if (result) {
        addLog(`✅ Firestore write successful! Doc ID: ${result}`);
        addLog("Check Firebase Console → Firestore Database → waitlist_signups");
      } else {
        addLog("❌ Firestore write failed (returned null)");
      }
    } catch (error) {
      addLog(`❌ Firestore error: ${error}`);
    }
  };

  return (
    <main className="min-h-screen bg-white py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-neutral-900 mb-8">
            🔥 Firebase Diagnostics
          </h1>

          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className={`p-6 rounded-2xl border-2 ${analyticsReady ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
              <h3 className="font-display text-xl font-semibold mb-2">
                {analyticsReady ? '✅' : '❌'} Analytics
              </h3>
              <p className="font-sans text-sm text-neutral-700">
                {analyticsReady ? 'Ready to track events' : 'Not initialized'}
              </p>
            </div>

            <div className={`p-6 rounded-2xl border-2 ${firestoreReady ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
              <h3 className="font-display text-xl font-semibold mb-2">
                {firestoreReady ? '✅' : '❌'} Firestore
              </h3>
              <p className="font-sans text-sm text-neutral-700">
                {firestoreReady ? 'Ready to save data' : 'Not initialized'}
              </p>
            </div>
          </div>

          {/* Test Buttons */}
          <div className="space-y-4 mb-8">
            <Button
              variant="primary"
              size="lg"
              onClick={testAnalyticsEvent}
              disabled={!analyticsReady}
              className="w-full"
            >
              📊 Send Test Analytics Event
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={testFirestoreWrite}
              disabled={!firestoreReady}
              className="w-full"
            >
              💾 Test Firestore Write
            </Button>
          </div>

          {/* Logs */}
          <div className="bg-neutral-900 text-green-400 p-6 rounded-2xl font-mono text-sm">
            <h3 className="text-white font-bold mb-4">Console Logs:</h3>
            <div className="space-y-1 max-h-96 overflow-y-auto">
              {logs.length === 0 ? (
                <p className="text-neutral-500">No logs yet...</p>
              ) : (
                logs.map((log, i) => (
                  <div key={i}>{log}</div>
                ))
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-500 rounded-2xl">
            <h3 className="font-display text-xl font-semibold mb-4">📋 Instructions</h3>
            <ol className="font-sans text-sm space-y-2 list-decimal list-inside">
              <li>Check if Analytics and Firestore show green ✅</li>
              <li>Click "Send Test Analytics Event"</li>
              <li>Go to Firebase Console → Analytics → Events (real-time)</li>
              <li>You should see "test_event" appear</li>
              <li>Click "Test Firestore Write"</li>
              <li>Go to Firebase Console → Firestore Database</li>
              <li>Check "waitlist_signups" collection for test entry</li>
            </ol>
          </div>

          {/* Back Button */}
          <div className="mt-8">
            <a
              href="/"
              className="text-neutral-500 hover:text-neutral-700 transition-colors font-sans text-sm"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
