"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

interface DashboardAuthProps {
  children: React.ReactNode;
}

/**
 * Simple password protection for dashboard
 * Password is stored in environment variable
 */
export const DashboardAuth: React.FC<DashboardAuthProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if already authenticated in session
    const auth = sessionStorage.getItem("dashboard_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple password check - in production, use proper authentication
    const correctPassword = process.env.NEXT_PUBLIC_DASHBOARD_PASSWORD || "regalo2024";
    
    if (password === correctPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem("dashboard_auth", "true");
      setError("");
    } else {
      setError("Incorrect password");
      setPassword("");
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <Container>
          <div className="text-center">
            <Logo size="lg" />
          </div>
        </Container>
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <Container>
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <Logo size="lg" />
              <h1 className="font-display text-3xl font-bold text-neutral-900 mt-6 mb-2">
                Dashboard
              </h1>
              <p className="text-neutral-600">Restricted Access</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-neutral-200">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                    placeholder="Enter password"
                    autoFocus
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Access
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    );
  }

  return <>{children}</>;
};
