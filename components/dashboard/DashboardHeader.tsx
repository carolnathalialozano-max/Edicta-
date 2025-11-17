import React from 'react';
import SearchIcon from '../icons/SearchIcon';
import BellIcon from '../icons/BellIcon';

const DashboardHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between h-20 px-8 bg-white border-b">
      <div className="relative w-full max-w-lg">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon className="w-5 h-5 text-slate-400" />
        </span>
        <input
          type="text"
          placeholder="Buscar normas, decretos, leyes..."
          className="w-full pl-10 pr-4 py-2 text-slate-700 bg-slate-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
        />
      </div>
      <div className="flex items-center space-x-6">
        <button className="relative text-slate-500 hover:text-slate-700">
            <BellIcon className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-3">
            <img 
                src="https://i.pravatar.cc/40" 
                alt="User avatar" 
                className="w-10 h-10 rounded-full"
            />
            <div>
                <div className="font-semibold text-slate-800">Usuario</div>
                <div className="text-sm text-slate-500">Estudiante</div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
