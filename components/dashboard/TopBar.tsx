import React, { useState } from 'react';
import LogoutIcon from '../icons/LogoutIcon';

interface TopBarProps {
  title: string;
  onLogout: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ title, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex-shrink-0 flex items-center justify-between h-16 px-4 sm:px-6 bg-white border-b border-slate-200 z-40 sticky top-0">
      <h1 className="text-xl font-bold text-slate-800">{title}</h1>
      <div className="relative">
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center space-x-2">
            <img 
                src="https://i.pravatar.cc/32" 
                alt="User avatar" 
                className="w-8 h-8 rounded-full"
            />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
            <button
              onClick={() => {
                onLogout();
                setDropdownOpen(false);
              }}
              className="w-full text-left flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
            >
              <LogoutIcon className="w-5 h-5 mr-2" />
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default TopBar;
