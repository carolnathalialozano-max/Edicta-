import React from 'react';
import AlertTriangleIcon from '../icons/AlertTriangleIcon';

interface RepealedLawAlertProps {
  count: number;
}

const RepealedLawAlert: React.FC<RepealedLawAlertProps> = ({ count }) => {
  if (count === 0) return null;

  const message =
    count === 1
      ? '¡Atención! Tienes 1 ley derogada en esta lista. Su contenido ya no es aplicable.'
      : `¡Atención! Tienes ${count} leyes derogadas en esta lista. Sus contenidos ya no son aplicables.`;

  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-8 flex items-center shadow-md" role="alert">
      <AlertTriangleIcon className="w-6 h-6 mr-3" />
      <div>
        <p className="font-bold">Alerta de Norma Derogada</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default RepealedLawAlert;