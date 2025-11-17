import React from 'react';
import Logo from './Logo';

interface RegisterProps {
  onRegisterSuccess: () => void;
  onNavigateToLogin: () => void;
}

const Register: React.FC<RegisterProps> = ({ onRegisterSuccess, onNavigateToLogin }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful registration
    onRegisterSuccess();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-xl">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h2 className="text-2xl font-bold text-center text-slate-800">Crea tu cuenta en Edicta</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="text-sm font-medium text-slate-700">
              Nombre completo
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-3 py-2 mt-1 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tu Nombre"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 mt-1 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-slate-700">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="w-full px-3 py-2 mt-1 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Crea una contraseña segura"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Crear Cuenta
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-slate-600">
          ¿Ya tienes una cuenta?{' '}
          <button onClick={onNavigateToLogin} className="font-medium text-blue-600 hover:underline">
            Inicia sesión
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
