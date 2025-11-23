import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import { ViewState } from './types';
import { LanguageProvider } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.LANDING);

  const handleEnterApp = () => {
    setCurrentView(ViewState.DASHBOARD);
  };

  return (
    <>
      {currentView === ViewState.LANDING ? (
        <LandingPage onEnterApp={handleEnterApp} />
      ) : (
        <Dashboard />
      )}
    </>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;