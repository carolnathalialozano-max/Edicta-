import React from 'react';
import { LawStatus } from '../../types';

interface LawStatusCardProps {
  title: string;
  description: string;
  status: LawStatus;
  onViewDetails: () => void;
}

const statusConfig = {
  vigente: {
    label: 'Vigente',
    bgColor: 'bg-green-100',
    textColor: 'text-green-800',
    borderColor: 'border-green-500',
  },
  modificada: {
    label: 'Modificada',
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-800',
    borderColor: 'border-yellow-500',
  },
  demandada: {
    label: 'En Revisión',
    bgColor: 'bg-orange-100',
    textColor: 'text-orange-800',
    borderColor: 'border-orange-500',
  },
  derogada: {
    label: 'Derogada',
    bgColor: 'bg-red-100',
    textColor: 'text-red-800',
    borderColor: 'border-red-500',
  },
};

const LawStatusCard: React.FC<LawStatusCardProps> = ({ title, description, status, onViewDetails }) => {
  const config = statusConfig[status] || statusConfig.vigente;

  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between border-l-4 ${config.borderColor}`}>
      <div>
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-slate-800">{title}</h3>
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${config.bgColor} ${config.textColor}`}
            >
              {config.label}
            </span>
        </div>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
      <div className="mt-6">
        <button onClick={onViewDetails} className="font-semibold text-blue-600 hover:underline text-sm text-left w-full">
            Ver Detalles &rarr;
        </button>
      </div>
    </div>
  );
};

export default LawStatusCard;
