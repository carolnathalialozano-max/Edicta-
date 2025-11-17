import React, { useState } from 'react';
import BottomNav from './dashboard/BottomNav';
import HomeFeed from './dashboard/HomeFeed';
import MyLaws from './dashboard/MyLaws';
import Constitution from './dashboard/Constitution';
import DiarioOficial from './dashboard/DiarioOficial';
import LawDetail from './dashboard/LawDetail';
import ProfileSettings from './dashboard/ProfileSettings';
import Search from './dashboard/Search';
import TopBar from './dashboard/TopBar';
import { Law } from '../types';
import { allLaws } from '../data/laws';

export type DashboardView = 'home' | 'myLaws' | 'search' | 'profile' | 'constitution' | 'diarioOficial' | 'lawDetail';

interface DashboardProps {
  onLogout: () => void;
}

const viewTitles: { [key in DashboardView]?: string } = {
    home: 'Inicio',
    myLaws: 'Mis Leyes',
    search: 'Buscar',
    profile: 'Perfil',
    constitution: 'Constitución',
    diarioOficial: 'Diario Oficial',
    lawDetail: 'Detalle de Norma'
};


const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeView, setActiveView] = useState<DashboardView>('home');
  const [selectedLaw, setSelectedLaw] = useState<Law | null>(null);
  const [previousView, setPreviousView] = useState<DashboardView>('home');

  const handleSelectLaw = (law: Law, fromView: DashboardView) => {
    setSelectedLaw(law);
    setPreviousView(fromView);
    setActiveView('lawDetail');
  };

  const handleNavigateToLaw = (title: string) => {
    const law = allLaws.find(l => l.title === title);
    if (law) {
      handleSelectLaw(law, activeView);
    } else {
      alert(`La norma "${title}" no se encuentra en la base de datos principal.`);
    }
  };

  const handleBack = () => {
    setSelectedLaw(null);
    setActiveView(previousView);
  };

  const currentTitle = viewTitles[activeView] || 'Edicta';
  
  const renderContent = () => {
    switch (activeView) {
      case 'myLaws':
        return <MyLaws onSelectLaw={(law) => handleSelectLaw(law, 'myLaws')} />;
      case 'search':
        return <Search onNavigate={setActiveView} />;
      case 'profile':
        return <ProfileSettings />;
      case 'constitution':
        return <Constitution />;
      case 'diarioOficial':
        return <DiarioOficial />;
      case 'lawDetail':
        return selectedLaw ? <LawDetail law={selectedLaw} onBack={handleBack} onNavigateToLaw={handleNavigateToLaw} /> : <HomeFeed onSelectLaw={(law) => handleSelectLaw(law, 'home')} />;
      case 'home':
      default:
        return <HomeFeed onSelectLaw={(law) => handleSelectLaw(law, 'home')} />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-100">
      <TopBar title={currentTitle} onLogout={onLogout} />
      <main className="flex-1 overflow-y-auto pb-24">
        <div className="container mx-auto p-4 sm:p-6">
            {renderContent()}
        </div>
      </main>
      <BottomNav activeView={activeView} setActiveView={setActiveView} />
    </div>
  );
};

export default Dashboard;