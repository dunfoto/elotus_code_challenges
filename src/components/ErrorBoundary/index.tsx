import React, { Component, ReactNode } from 'react';
import './index.scss';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, info);
  }

  handleClose = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    const { hasError, error } = this.state;

    return (
      <>
        {hasError && (
          <div className="modal-backdrop">
            <div className="modal">
              <h2>Something went wrong</h2>
              <p>{error?.message}</p>
              <button onClick={this.handleClose}>Close</button>
            </div>
          </div>
        )}
        {this.props.children}
      </>
    );
  }
}

export default ErrorBoundary;
