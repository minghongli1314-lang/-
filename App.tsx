
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import IndustriesPage from './components/IndustriesPage';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.LANDING);

  const navigate = (view: ViewState) => {
    setCurrentView(view);
    // Scroll to top when changing views
    window.scrollTo(0, 0);
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        {currentView === ViewState.LANDING && <LandingPage onNavigate={navigate} />}
        {currentView === ViewState.INDUSTRIES && <IndustriesPage onNavigate={navigate} />}
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
