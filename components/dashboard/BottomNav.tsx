import React from 'react';
import HomeIcon from '../icons/HomeIcon';
import StarIcon from '../icons/StarIcon';
import SearchIcon from '../icons/SearchIcon';
import UserIcon from '../icons/UserIcon';
import { DashboardView } from '../Dashboard';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 ${
      active ? 'text-blue-600' : 'text-slate-500 hover:text-blue-500'
    }`}
  >
    {icon}
    <span className="text-xs font-medium">{label}</span>
  </button>
);

interface BottomNavProps {
  activeView: DashboardView;
  setActiveView: (view: DashboardView) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeView, setActiveView }) => {
  const isNavView = ['home', 'myLaws', 'search', 'profile'].includes(activeView);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-t-lg z-50">
      <div className="flex justify-around items-center h-16 container mx-auto px-2">
        <NavItem
          icon={<HomeIcon className="w-6 h-6 mb-1" />}
          label="Inicio"
          active={activeView === 'home'}
          onClick={() => setActiveView('home')}
        />
        <NavItem
          icon={<StarIcon className="w-6 h-6 mb-1" />}
          label="Mis Leyes"
          active={activeView === 'myLaws'}
          onClick={() => setActiveView('myLaws')}
        />
        <NavItem
          icon={<SearchIcon className="w-6 h-6 mb-1" />}
          label="Buscar"
          active={activeView === 'search'}
          onClick={() => setActiveView('search')}
        />
        <NavItem
          icon={<UserIcon className="w-6 h-6 mb-1" />}
          label="Perfil"
          active={activeView === 'profile'}
          onClick={() => setActiveView('profile')}
        />
      </div>
    </div>
  );
};

export default BottomNav;