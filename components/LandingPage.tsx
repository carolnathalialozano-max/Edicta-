import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import TargetAudience from './TargetAudience';
import Glossary from './Glossary';

interface LandingPageProps {
  onNavigate: (view: 'login' | 'register') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const handleLearnMoreClick = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header onLoginClick={() => onNavigate('login')} onRegisterClick={() => onNavigate('register')} />
      <Hero onGetStartedClick={() => onNavigate('register')} onLearnMoreClick={handleLearnMoreClick} />
      <Features />
      <HowItWorks />
      <TargetAudience />
      <Glossary />
    </>
  );
};

export default LandingPage;