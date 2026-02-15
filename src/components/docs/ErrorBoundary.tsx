import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Playground error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div className="flex-1 flex items-center justify-center p-4 bg-red-950/30 rounded-xl border border-red-500/30">
          <div className="text-sm text-red-300 text-center max-w-md">
            <p className="font-semibold mb-1">Something went wrong</p>
            <p className="text-red-400/80 text-xs font-mono">{this.state.error.message}</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
