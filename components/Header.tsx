import React from 'react';
import Logo from './Logo';

interface HeaderProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onRegisterClick }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="hidden sm:flex items-center space-x-4">
             <button
              onClick={onLoginClick}
              className="text-slate-600 font-semibold hover:text-blue-600 transition-colors duration-300"
            >
              Iniciar Sesión
            </button>
            <button
              onClick={onRegisterClick}
              className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;