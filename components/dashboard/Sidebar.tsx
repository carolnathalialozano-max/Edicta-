import React from 'react';
import Logo from '../Logo';
import DashboardIcon from '../icons/DashboardIcon';
import SettingsIcon from '../icons/SettingsIcon';
import StarIcon from '../icons/StarIcon';
import LogoutIcon from '../icons/LogoutIcon';
import BookOpenIcon from '../icons/BookOpenIcon';
import NewspaperIcon from '../icons/NewspaperIcon';
import { DashboardView } from '../Dashboard';

const NavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean, onClick: () => void }> = ({ icon, label, active, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center w-full px-4 py-3 text-lg font-medium rounded-lg transition-colors duration-200 text-left ${
        active
          ? 'bg-blue-600 text-white'
          : 'text-slate-600 hover:bg-slate-200'
      }`}
    >
      {icon}
      <span className="ml-4">{label}</span>
    </button>
  );


interface SidebarProps {
    onLogout: () => void;
    activeView: DashboardView;
    setActiveView: (view: DashboardView) => void;
}
  
const Sidebar: React.FC<SidebarProps> = ({ onLogout, activeView, setActiveView }) => {
  return (
    <div className="flex flex-col w-64 bg-white shadow-lg">
      <div className="flex items-center justify-center h-20 border-b">
        <Logo className="h-12 w-auto" />
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {/* Fix: Changed 'dashboard' to 'home' to match the DashboardView type. */}
        <NavItem icon={<DashboardIcon className="w-6 h-6" />} label="Dashboard" active={activeView === 'home'} onClick={() => setActiveView('home')} />
        <NavItem icon={<StarIcon className="w-6 h-6" />} label="Mis Leyes" active={activeView === 'myLaws'} onClick={() => setActiveView('myLaws')} />
        <NavItem icon={<BookOpenIcon className="w-6 h-6" />} label="Constitución" active={activeView === 'constitution'} onClick={() => setActiveView('constitution')} />
        <NavItem icon={<NewspaperIcon className="w-6 h-6" />} label="Diario Oficial" active={activeView === 'diarioOficial'} onClick={() => setActiveView('diarioOficial')} />
        {/* Fix: Changed 'settings' to 'profile' to match the DashboardView type. */}
        <NavItem icon={<SettingsIcon className="w-6 h-6" />} label="Configuración" active={activeView === 'profile'} onClick={() => setActiveView('profile')} />
      </nav>
      <div className="px-4 py-6 border-t">
        <button
          onClick={onLogout}
          className="flex items-center w-full px-4 py-3 text-lg font-medium text-slate-600 rounded-lg hover:bg-slate-200 transition-colors duration-200"
        >
          <LogoutIcon className="w-6 h-6" />
          <span className="ml-4">Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;