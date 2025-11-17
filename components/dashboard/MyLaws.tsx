import React, { useState, useMemo } from 'react';
import LawStatusCard from './LawStatusCard';
import PlusIcon from '../icons/PlusIcon';
import TrashIcon from '../icons/TrashIcon';
import SearchIcon from '../icons/SearchIcon';
import PencilIcon from '../icons/PencilIcon';
import EditLawModal from './EditLawModal';
import { Law } from '../../types';
import { allLaws } from '../../data/laws';

// Using a subset of laws from allLaws to simulate a "my laws" list
const initialMyLaws: Law[] = allLaws.filter(law => [1, 3, 5].includes(law.id as number));

interface MyLawsProps {
    onSelectLaw: (law: Law) => void;
}

const MyLaws: React.FC<MyLawsProps> = ({ onSelectLaw }) => {
    const [myLaws, setMyLaws] = useState<Law[]>(initialMyLaws);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingLaw, setEditingLaw] = useState<Law | null>(null);

    const filteredLaws = useMemo(() => {
        return myLaws.filter(law =>
            law.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            law.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [myLaws, searchTerm]);

    const handleSaveLaw = (updatedLaw: Law) => {
        setMyLaws(prev => prev.map(l => l.id === updatedLaw.id ? updatedLaw : l));
        setEditingLaw(null);
    };

    const handleDeleteLaw = (lawId: string | number) => {
        setMyLaws(prev => prev.filter(l => l.id !== lawId));
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Mis Leyes</h1>
                    <p className="text-slate-600">Normas que estás siguiendo activamente.</p>
                </div>
                <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
                    <PlusIcon className="w-5 h-5" />
                    Agregar Norma
                </button>
            </div>

            <div className="mb-8">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <SearchIcon className="w-5 h-5 text-slate-400" />
                    </span>
                    <input
                        type="text"
                        placeholder="Buscar en mis leyes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 text-slate-700 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            {filteredLaws.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredLaws.map(law => (
                        <div key={law.id} className="relative group">
                            <LawStatusCard
                                title={law.title}
                                description={law.description}
                                status={law.status}
                                onViewDetails={() => onSelectLaw(law)}
                            />
                            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => setEditingLaw(law)} className="p-2 bg-white rounded-full shadow-md hover:bg-slate-100">
                                    <PencilIcon className="w-4 h-4 text-slate-600" />
                                </button>
                                <button onClick={() => handleDeleteLaw(law.id)} className="p-2 bg-white rounded-full shadow-md hover:bg-slate-100">
                                    <TrashIcon className="w-4 h-4 text-red-500" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-slate-700">No hay leyes para mostrar</h3>
                    <p className="text-slate-500 mt-2">
                        {searchTerm ? 'No se encontraron leyes que coincidan con tu búsqueda.' : 'Aún no has agregado ninguna ley a tu lista de seguimiento.'}
                    </p>
                </div>
            )}

            {editingLaw && (
                <EditLawModal
                    law={editingLaw}
                    onSave={handleSaveLaw}
                    onClose={() => setEditingLaw(null)}
                />
            )}
        </div>
    );
};

export default MyLaws;