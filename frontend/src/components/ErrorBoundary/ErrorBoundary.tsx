'use client'

import React from "react";
import ErrorBoundaryLayout from "./ErrorBoundaryLayout";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<
  React.PropsWithChildren,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryLayout>
          <h2>Something went wrong.</h2>
          <p className="mt-2">{this.state.error?.message}</p>
          <pre className="mt-2 text-xs text-zinc-600">
            {this.state.error?.stack}
          </pre>
        </ErrorBoundaryLayout>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
