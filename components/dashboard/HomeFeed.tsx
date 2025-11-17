import React from 'react';
import { Law } from '../../types';
import RepealedLawAlert from './RepealedLawAlert';
import BellIcon from '../icons/BellIcon';
import { allLaws } from '../../data/laws';

// Sample data for alerts
const alerts = [
  { id: 1, type: 'status_change', lawTitle: 'Ley 1753 de 2015', oldStatus: 'Vigente', newStatus: 'Derogada', date: 'Hace 2 horas' },
  { id: 2, type: 'new_demand', lawTitle: 'Ley 906 de 2004', description: 'Se admite demanda de inconstitucionalidad contra el artículo 125.', date: 'Hace 1 día' },
  { id: 3, type: 'modification', lawTitle: 'Ley 80 de 1993', modifiedBy: 'Ley 1150 de 2007', date: 'Hace 3 días' },
];

const AlertCard: React.FC<{ alert: any, onSelectLaw: (law: Law) => void }> = ({ alert, onSelectLaw }) => {
    const law = allLaws.find(l => l.title === alert.lawTitle);
    
    let content;
    switch (alert.type) {
        case 'status_change':
            content = <p>La norma <span className="font-bold">{alert.lawTitle}</span> ha cambiado su estado de <span className="font-semibold">{alert.oldStatus}</span> a <span className="font-bold text-red-600">{alert.newStatus}</span>.</p>;
            break;
        case 'new_demand':
            content = <p>Se ha presentado una nueva demanda en <span className="font-bold">{alert.lawTitle}</span>: {alert.description}</p>;
            break;
        case 'modification':
            content = <p>La norma <span className="font-bold">{alert.lawTitle}</span> fue modificada por <span className="font-semibold">{alert.modifiedBy}</span>.</p>;
            break;
        default:
            content = <p>Actualización en <span className="font-bold">{alert.lawTitle}</span>.</p>;
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-start space-x-4">
            <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-2">
                <BellIcon className="w-5 h-5" />
            </div>
            <div className="flex-1">
                <div className="text-sm text-slate-700">
                    {content}
                </div>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-slate-500">{alert.date}</span>
                    {law && (
                         <button onClick={() => onSelectLaw(law)} className="text-xs font-semibold text-blue-600 hover:underline">
                            Ver Detalles
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

interface HomeFeedProps {
  onSelectLaw: (law: Law) => void;
}

const HomeFeed: React.FC<HomeFeedProps> = ({ onSelectLaw }) => {
  const repealedLawsCount = allLaws.filter(law => law.status === 'derogada').length;

  return (
    <div>
        <RepealedLawAlert count={repealedLawsCount} />
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Alertas Recientes</h2>
        <div className="space-y-4">
            {alerts.map(alert => (
                <AlertCard key={alert.id} alert={alert} onSelectLaw={onSelectLaw} />
            ))}
        </div>
    </div>
  );
};

export default HomeFeed;