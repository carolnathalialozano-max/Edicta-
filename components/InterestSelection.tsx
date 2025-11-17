import React, { useState } from 'react';
import Logo from './Logo';

interface InterestSelectionProps {
  onComplete: () => void;
}

const legalInterests = [
    'Derecho Penal', 'Derecho Laboral', 'Derecho Civil', 'Derecho Comercial',
    'Derecho Administrativo', 'Derecho Tributario', 'Derecho Constitucional', 'Derecho de Familia',
    'Derecho Ambiental', 'Propiedad Intelectual', 'Derecho Minero', 'Contratación Estatal'
];

const InterestTag: React.FC<{ label: string; isSelected: boolean; onToggle: () => void; }> = ({ label, isSelected, onToggle }) => (
    <button
        type="button"
        onClick={onToggle}
        className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 border-2 ${
            isSelected
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-400'
        }`}
    >
        {label}
    </button>
);

const InterestSelection: React.FC<InterestSelectionProps> = ({ onComplete }) => {
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    const handleToggleInterest = (interest: string) => {
        setSelectedInterests(prev => 
            prev.includes(interest) 
                ? prev.filter(i => i !== interest) 
                : [...prev, interest]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here we would normally save the user's interests.
        // For this simulation, we'll just log them.
        console.log('Selected interests:', selectedInterests);
        onComplete();
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-100">
            <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-2xl shadow-xl">
                <div className="flex justify-center">
                    <Logo />
                </div>
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-800">¡Un último paso!</h2>
                    <p className="mt-2 text-slate-600">
                        Selecciona tus áreas de interés para personalizar tus notificaciones.
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap justify-center gap-3 py-4">
                        {legalInterests.map(interest => (
                            <InterestTag
                                key={interest}
                                label={interest}
                                isSelected={selectedInterests.includes(interest)}
                                onToggle={() => handleToggleInterest(interest)}
                            />
                        ))}
                    </div>
                    <div className="pt-6">
                        <button
                            type="submit"
                            disabled={selectedInterests.length === 0}
                            className="w-full px-4 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
                        >
                            Finalizar y entrar al Dashboard
                        </button>
                    </div>
                </form>
                 <p className="text-sm text-center text-slate-500">
                    Podrás cambiar esto más tarde en tu perfil.
                </p>
            </div>
        </div>
    );
};

export default InterestSelection;
