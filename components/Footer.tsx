import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Logo />
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Edicta. Todos los derechos reservados.
          </p>
          <div className="text-slate-500 font-semibold">
            Siempre al día, siempre legal.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;