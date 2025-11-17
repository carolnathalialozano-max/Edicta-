
import React from 'react';
import AcademicCapIcon from './icons/AcademicCapIcon';
import BriefcaseIcon from './icons/BriefcaseIcon';
import UsersIcon from './icons/UsersIcon';

interface AudienceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AudienceCard: React.FC<AudienceCardProps> = ({ icon, title, description }) => (
  <div className="text-center p-6">
    <div className="flex justify-center items-center mb-4">
      <div className="bg-blue-600 text-white p-5 rounded-full">{icon}</div>
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const TargetAudience: React.FC = () => {
  const users = [
    {
      icon: <AcademicCapIcon className="w-8 h-8" />,
      title: 'Estudiantes y Docentes',
      description: 'Facilita el estudio con normas siempre actualizadas y un historial de cambios claro y accesible.',
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: 'Ciudadanía General',
      description: 'Entiende tus derechos y deberes con información jurídica simplificada y al alcance de tu mano.',
    },
    {
      icon: <BriefcaseIcon className="w-8 h-8" />,
      title: 'Profesionales y Empresas',
      description: 'Reduce riesgos y ahorra tiempo al mantenerte informado sobre el marco legal que afecta a tu sector.',
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Creado para Todos</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Desde el aula de clases hasta la sala de juntas, Edicta es para quien valora la información precisa y oportuna.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {users.map((user) => (
            <AudienceCard key={user.title} {...user} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
