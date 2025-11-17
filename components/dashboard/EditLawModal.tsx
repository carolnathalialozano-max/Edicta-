import React, { useState } from 'react';
import { Law, LawStatus } from '../../types';
import PlusIcon from '../icons/PlusIcon';
import TrashIcon from '../icons/TrashIcon';

interface EditLawModalProps {
  law: Law;
  onSave: (updatedLaw: Law) => void;
  onClose: () => void;
}

const EditLawModal: React.FC<EditLawModalProps> = ({ law, onSave, onClose }) => {
  const [formData, setFormData] = useState<Law>(law);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleHistoryChange = (index: number, field: string, value: string) => {
    const newHistory = [...formData.history];
    newHistory[index] = { ...newHistory[index], [field]: value };
    setFormData(prev => ({ ...prev, history: newHistory }));
  };

  const addHistoryEvent = () => {
    setFormData(prev => ({
      ...prev,
      history: [...prev.history, { date: '', event: '', description: '' }],
    }));
  };

  const removeHistoryEvent = (index: number) => {
    setFormData(prev => ({
      ...prev,
      history: prev.history.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-slate-800">Editar Norma</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">&times;</button>
        </div>
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-slate-700">Título</label>
              <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} className="mt-1 w-full border border-slate-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-slate-700">Estado</label>
              <select name="status" id="status" value={formData.status} onChange={handleChange} className="mt-1 w-full border border-slate-300 rounded-md shadow-sm p-2">
                <option value="vigente">Vigente</option>
                <option value="modificada">Modificada</option>
                <option value="demandada">En Revisión</option>
                <option value="derogada">Derogada</option>
              </select>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-slate-700">Descripción Corta</label>
              <textarea name="description" id="description" value={formData.description} onChange={handleChange} rows={2} className="mt-1 w-full border border-slate-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="summary" className="block text-sm font-medium text-slate-700">Resumen Detallado</label>
              <textarea name="summary" id="summary" value={formData.summary} onChange={handleChange} rows={4} className="mt-1 w-full border border-slate-300 rounded-md shadow-sm p-2" />
            </div>
             <div>
              <label htmlFor="authority" className="block text-sm font-medium text-slate-700">Autoridad Emisora</label>
              <input type="text" name="authority" id="authority" value={formData.authority} onChange={handleChange} className="mt-1 w-full border border-slate-300 rounded-md shadow-sm p-2" />
            </div>
             <div>
              <label htmlFor="purpose" className="block text-sm font-medium text-slate-700">Propósito Principal</label>
              <textarea name="purpose" id="purpose" value={formData.purpose} onChange={handleChange} rows={3} className="mt-1 w-full border border-slate-300 rounded-md shadow-sm p-2" />
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-slate-800 border-b pb-2 mb-4">Historial de Cambios</h3>
              <div className="space-y-4">
                {formData.history.map((event, index) => (
                  <div key={index} className="p-4 border rounded-md relative bg-slate-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-600">Fecha</label>
                        <input type="date" value={event.date} onChange={(e) => handleHistoryChange(index, 'date', e.target.value)} className="mt-1 w-full text-sm border border-slate-300 rounded-md p-1" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-600">Evento</label>
                        <input type="text" value={event.event} onChange={(e) => handleHistoryChange(index, 'event', e.target.value)} className="mt-1 w-full text-sm border border-slate-300 rounded-md p-1" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-medium text-slate-600">Descripción</label>
                        <textarea value={event.description} onChange={(e) => handleHistoryChange(index, 'description', e.target.value)} rows={2} className="mt-1 w-full text-sm border border-slate-300 rounded-md p-1" />
                      </div>
                    </div>
                     <button type="button" onClick={() => removeHistoryEvent(index)} className="absolute top-2 right-2 p-1 bg-red-100 text-red-500 rounded-full hover:bg-red-200">
                       <TrashIcon className="w-4 h-4"/>
                     </button>
                  </div>
                ))}
              </div>
              <button type="button" onClick={addHistoryEvent} className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800">
                <PlusIcon className="w-4 h-4"/>
                Agregar Evento Histórico
              </button>
            </div>
          </div>
          <div className="p-6 bg-slate-50 border-t flex justify-end gap-4">
            <button type="button" onClick={onClose} className="px-4 py-2 font-semibold text-slate-700 bg-slate-200 rounded-md hover:bg-slate-300">Cancelar</button>
            <button type="submit" className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">Guardar Cambios</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditLawModal;