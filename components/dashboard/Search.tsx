import React from 'react';
import SearchIcon from '../icons/SearchIcon';
import NewspaperIcon from '../icons/NewspaperIcon';
import BookOpenIcon from '../icons/BookOpenIcon';
import { DashboardView } from '../Dashboard';

interface SearchProps {
  onNavigate: (view: DashboardView) => void;
}

const Search: React.FC<SearchProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative mb-8">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
          <SearchIcon className="w-6 h-6 text-slate-400" />
        </span>
        <input
          type="text"
          placeholder="Buscar normas, decretos, sentencias..."
          className="w-full pl-14 pr-4 py-4 text-lg text-slate-800 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button 
          onClick={() => onNavigate('diarioOficial')}
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-left flex items-center space-x-4"
        >
          <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
            <NewspaperIcon className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800">Diario Oficial</h3>
            <p className="text-slate-500 text-sm">Consultar publicaciones</p>
          </div>
        </button>
        <button 
          onClick={() => onNavigate('constitution')}
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-left flex items-center space-x-4"
        >
          <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg">
            <BookOpenIcon className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800">Constitución</h3>
            <p className="text-slate-500 text-sm">Explorar artículos</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Search;
