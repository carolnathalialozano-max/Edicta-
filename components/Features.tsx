
import React from 'react';
import BellIcon from './icons/BellIcon';
import TrafficLightIcon from './icons/TrafficLightIcon';
import StarIcon from './icons/StarIcon';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-start">
    <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <BellIcon className="w-8 h-8" />,
      title: 'Alertas Automáticas',
      description: 'Recibe notificaciones al instante si una ley es derogada, modificada, demandada o reglamentada. No más sorpresas.',
    },
    {
      icon: <TrafficLightIcon className="w-8 h-8" />,
      title: 'Semáforo Jurídico',
      description: 'Visualiza el estado de cada norma con un sistema simple: verde (vigente), amarillo (en revisión) y rojo (derogada).',
    },
    {
      icon: <StarIcon className="w-8 h-8" />,
      title: 'Seguimiento Personalizado',
      description: 'Marca las leyes y temas que te interesan y recibe alertas exclusivas para lo que realmente importa en tu día a día.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Una Herramienta, Múltiples Beneficios</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Simplificamos la complejidad jurídica para que estés siempre un paso adelante.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
