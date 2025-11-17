import React from 'react';
import { Law, LawStatus, LawHistoryEvent, LawHistoryEventType } from '../../types';
import ChevronLeftIcon from '../icons/ChevronLeftIcon';
import AlertTriangleIcon from '../icons/AlertTriangleIcon';
import InformationCircleIcon from '../icons/InformationCircleIcon';
import CheckCircleIcon from '../icons/CheckCircleIcon';
import PencilIcon from '../icons/PencilIcon';
import StarIcon from '../icons/StarIcon';

interface LawDetailProps {
  law: Law;
  onBack: () => void;
  onNavigateToLaw: (title: string) => void;
}

const statusConfig: { [key in LawStatus]: { label: string; bgColor: string; textColor: string; } } = {
  vigente: { label: 'Vigente', bgColor: 'bg-green-100', textColor: 'text-green-800' },
  modificada: { label: 'Modificada', bgColor: 'bg-yellow-100', textColor: 'text-yellow-800' },
  demandada: { label: 'En Revisión', bgColor: 'bg-orange-100', textColor: 'text-orange-800' },
  derogada: { label: 'Derogada', bgColor: 'bg-red-100', textColor: 'text-red-800' },
};

const getEventVisuals = (type: LawHistoryEventType | undefined) => {
    switch (type) {
        case 'publication':
            return { icon: <CheckCircleIcon className="w-4 h-4 text-white" />, bgColor: 'bg-green-500', timeColor: 'text-green-600' };
        case 'modification':
            return { icon: <PencilIcon className="w-4 h-4 text-white" />, bgColor: 'bg-blue-500', timeColor: 'text-slate-500' };
        case 'challenge':
            return { icon: <AlertTriangleIcon className="w-4 h-4 text-white" />, bgColor: 'bg-yellow-500', timeColor: 'text-yellow-600' };
        case 'end_of_life':
            return { icon: <AlertTriangleIcon className="w-4 h-4 text-white" />, bgColor: 'bg-red-500', timeColor: 'text-red-600' };
        case 'landmark':
             return { icon: <StarIcon className="w-4 h-4 text-white" />, bgColor: 'bg-purple-500', timeColor: 'text-purple-600' };
        default:
            return { icon: null, bgColor: 'bg-slate-400', timeColor: 'text-slate-500' };
    }
};

const LawDetail: React.FC<LawDetailProps> = ({ law, onBack, onNavigateToLaw }) => {
  const config = statusConfig[law.status];

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
      <div className="mb-6">
        <button onClick={onBack} className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
          <ChevronLeftIcon className="w-5 h-5 mr-1" />
          Volver
        </button>
      </div>

      {law.status === 'derogada' && (
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-6 flex items-start shadow-sm" role="alert">
          <AlertTriangleIcon className="w-6 h-6 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-bold">Esta norma ha sido derogada</h3>
            <p className="text-sm">El contenido de esta ley ya no es aplicable. Se muestra con fines históricos y de consulta.</p>
            <button className="mt-2 text-sm font-semibold text-red-700 hover:underline">Consultar legislación relacionada &rarr;</button>
          </div>
        </div>
      )}
      
      {law.status === 'modificada' && law.modifiedBy && (
         <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-lg mb-6 flex items-start shadow-sm" role="alert">
          <InformationCircleIcon className="w-6 h-6 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-bold">Esta norma ha sido modificada</h3>
            <p className="text-sm">
                Principalmente modificada por:{' '}
                <a 
                    href="#" 
                    onClick={(e) => {
                        e.preventDefault(); 
                        if(law.modifiedBy) onNavigateToLaw(law.modifiedBy);
                    }}
                    className="font-semibold text-yellow-900 hover:underline cursor-pointer"
                >
                    {law.modifiedBy}
                </a>
                . Algunos de sus apartes pueden haber cambiado.
            </p>
          </div>
        </div>
      )}


      <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6 pb-6 border-b border-slate-200">
        <h1 className="text-3xl font-extrabold text-slate-800">{law.title}</h1>
        <span className={`flex-shrink-0 mt-1 px-4 py-1.5 text-sm font-bold rounded-full ${config.bgColor} ${config.textColor}`}>
          {config.label}
        </span>
      </div>
      
      <div className="space-y-8">
         <div>
          <h2 className="text-xl font-bold text-slate-700 mb-4">Detalles de la Norma</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">Resumen</h3>
              <p className="text-slate-600 leading-relaxed mt-1">{law.summary}</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                        <dt className="text-sm font-medium text-slate-500">Autoridad Emisora</dt>
                        <dd className="mt-1 text-base text-slate-900 font-semibold">{law.authority}</dd>
                    </div>
                    <div>
                        <dt className="text-sm font-medium text-slate-500">Propósito Principal</dt>
                        <dd className="mt-1 text-base text-slate-900">{law.purpose}</dd>
                    </div>
                </dl>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-700 mb-6">Historial de Cambios</h2>
          <div className="relative border-l-2 border-slate-200 ml-4">
            {law.history.map((event, index) => {
              const { icon, bgColor, timeColor } = getEventVisuals(event.type);
              return (
              <div key={index} className="mb-8 pl-12 last:mb-0">
                <div className={`absolute -left-4 mt-1.5 w-8 h-8 ${bgColor} rounded-full border-4 border-white flex items-center justify-center`}>
                  {icon}
                </div>
                <time className={`block mb-1 text-sm font-semibold uppercase ${timeColor}`}>
                  {event.date}
                </time>
                <h3 className="text-lg font-bold text-slate-800">
                  {event.event}
                </h3>
                <p className="text-slate-600">{event.description}</p>
              </div>
            )})}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawDetail;