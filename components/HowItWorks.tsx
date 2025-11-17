import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Monitoreo Automatizado',
      description: 'Nos conectamos a fuentes públicas oficiales como el Diario Oficial (imprenta.gov.co) y el Gestor Normativo (funcionpublica.gov.co) para detectar cambios y novedades jurídicas en tiempo real.',
    },
    {
      number: '02',
      title: 'Análisis y Simplificación',
      description: 'Traducimos la información técnica en resúmenes claros y accionables en lenguaje ciudadano.',
    },
    {
      number: '03',
      title: 'Notificación Inteligente',
      description: 'Recibes una alerta directa en tu dispositivo con el estado y resumen del cambio para que nunca te quedes atrás.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">¿Cómo funciona?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            En tres simples pasos, transformamos la información jurídica en conocimiento accesible.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step) => (
              <div key={step.number} className="relative bg-white text-center p-6">
                <div className="flex justify-center items-center mb-6">
                  <span className="text-5xl font-extrabold text-blue-200">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;