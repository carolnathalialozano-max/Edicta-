import React from 'react';

interface HeroProps {
  onGetStartedClick: () => void;
  onLearnMoreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStartedClick, onLearnMoreClick }) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-24 sm:py-32 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          <span className="text-blue-600">Edicta:</span> Tu Radar de Cambios en la Ley.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-slate-600">
          Monitorea, recibe notificaciones y simplifica los cambios del ordenamiento jurídico colombiano.
          Mantente informado en tiempo real, sin complicaciones.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onGetStartedClick}
            className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-transform duration-300 hover:scale-105"
          >
            Recibir Novedades
          </button>
          <button
            onClick={onLearnMoreClick}
            className="w-full sm:w-auto bg-slate-200 text-slate-800 font-semibold px-8 py-3 rounded-lg hover:bg-slate-300 transition-colors duration-300"
          >
            Conocer Más
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;