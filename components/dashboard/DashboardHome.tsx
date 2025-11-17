import React from 'react';
import LawStatusCard from './LawStatusCard';
import RepealedLawAlert from './RepealedLawAlert';
import { Law } from '../../types';
import { allLaws } from '../../data/laws';

interface DashboardHomeProps {
  onSelectLaw: (law: Law) => void;
}

const DashboardHome: React.FC<DashboardHomeProps> = ({ onSelectLaw }) => {
  const repealedLawsCount = allLaws.filter(law => law.status === 'derogada').length;

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Semáforo Jurídico</h1>
      <p className="text-slate-600 mb-8">Estado actual de las normas más relevantes.</p>

      <RepealedLawAlert count={repealedLawsCount} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allLaws.map(law => (
          <LawStatusCard
            key={law.id}
            title={law.title}
            description={law.description}
            status={law.status}
            onViewDetails={() => onSelectLaw(law)}
          />
        ))}
      </div>
    </>
  );
};

export default DashboardHome;