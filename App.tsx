import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import InterestSelection from './components/InterestSelection';

export type View = 'landing' | 'login' | 'register' | 'interestSelection' | 'dashboard';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState<View>('landing');

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };
  
  const handleRegisterSuccess = () => {
    setCurrentView('interestSelection');
  };

  const handleInterestSelectionComplete = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('login');
  };

  const navigateTo = (view: View) => {
    setCurrentView(view);
  };

  const renderContent = () => {
    if (isAuthenticated) {
        return <Dashboard onLogout={handleLogout} />;
    }

    switch (currentView) {
      case 'login':
        return <Login onLoginSuccess={handleLoginSuccess} onNavigateToRegister={() => navigateTo('register')} />;
      case 'register':
        return <Register onRegisterSuccess={handleRegisterSuccess} onNavigateToLogin={() => navigateTo('login')} />;
      case 'interestSelection':
        return <InterestSelection onComplete={handleInterestSelectionComplete} />;
      case 'landing':
      default:
        return <LandingPage onNavigate={(view) => navigateTo(view)} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <main className="flex-grow">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;