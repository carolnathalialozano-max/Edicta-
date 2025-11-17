import React, { useState, useRef, ChangeEvent } from 'react';
import UserIcon from '../icons/UserIcon';
import MailIcon from '../icons/MailIcon';
import LockClosedIcon from '../icons/LockClosedIcon';
import CameraIcon from '../icons/CameraIcon';
import BriefcaseIcon from '../icons/BriefcaseIcon';

const legalInterests = [
    'Derecho Penal', 'Derecho Laboral', 'Derecho Civil', 'Derecho Comercial',
    'Derecho Administrativo', 'Derecho Tributario', 'Derecho Constitucional', 'Derecho de Familia'
];

const InterestTag: React.FC<{ label: string; isSelected: boolean; onToggle: () => void; }> = ({ label, isSelected, onToggle }) => (
    <button
        type="button"
        onClick={onToggle}
        className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-200 ${
            isSelected
                ? 'bg-blue-600 text-white'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
        }`}
    >
        {label}
    </button>
);

const FormField: React.FC<{
  label: string;
  id: string;
  name: string;
  type: string;
  icon: React.ReactNode;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  autoComplete?: string;
}> = ({ label, id, name, type, icon, value, onChange, placeholder, autoComplete }) => (
    <div>
        <label htmlFor={id} className="flex items-center text-sm font-medium text-slate-700 mb-1">
            {icon}
            <span className="ml-2">{label}</span>
        </label>
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete={autoComplete}
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
    </div>
);


const ProfileSettings: React.FC = () => {
  const [avatar, setAvatar] = useState('https://i.pravatar.cc/128');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Derecho Penal', 'Derecho Laboral']);

  const [userInfo, setUserInfo] = useState({
    fullName: 'Nombre de Usuario',
    email: 'usuario@email.com',
    role: 'Estudiante',
  });
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const handleInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswords(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleToggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest) 
        : [...prev, interest]
    );
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="relative w-24 h-24">
                    <img src={avatar} alt="User avatar" className="w-full h-full rounded-full object-cover"/>
                    <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" accept="image/*"/>
                    <button 
                        onClick={handleCameraClick} 
                        className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 flex items-center justify-center rounded-full transition-all duration-300 group" 
                        aria-label="Cambiar foto de perfil"
                    >
                        <CameraIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 text-center sm:text-left">{userInfo.fullName}</h2>
                    <p className="text-slate-500 text-center sm:text-left">{userInfo.email}</p>
                </div>
            </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-8">
                <div>
                    <h3 className="text-lg font-bold text-slate-800 border-b pb-3 mb-4">Información Personal</h3>
                    <div className="space-y-4">
                        <FormField
                            id="fullName"
                            name="fullName"
                            label="Nombre Completo"
                            type="text"
                            icon={<UserIcon className="w-5 h-5 text-slate-400" />}
                            value={userInfo.fullName}
                            onChange={handleInfoChange}
                        />
                        <FormField
                            id="email"
                            name="email"
                            label="Correo Electrónico"
                            type="email"
                            icon={<MailIcon className="w-5 h-5 text-slate-400" />}
                            value={userInfo.email}
                            onChange={handleInfoChange}
                        />
                        <FormField
                            id="role"
                            name="role"
                            label="Rol/Ocupación"
                            type="text"
                            icon={<BriefcaseIcon className="w-5 h-5 text-slate-400" />}
                            value={userInfo.role}
                            onChange={handleInfoChange}
                        />
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-slate-800 border-b pb-3 mb-6">Selección de Intereses Jurídicos</h3>
                    <p className="text-slate-600 mb-4 text-sm">Selecciona las áreas del derecho de las que deseas recibir notificaciones prioritarias.</p>
                    <div className="flex flex-wrap gap-3">
                        {legalInterests.map(interest => (
                            <InterestTag
                                key={interest}
                                label={interest}
                                isSelected={selectedInterests.includes(interest)}
                                onToggle={() => handleToggleInterest(interest)}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-slate-800 border-b pb-3 mb-4">Cambiar Contraseña</h3>
                    <div className="space-y-4">
                         <FormField
                            id="currentPassword"
                            name="current"
                            label="Contraseña Actual"
                            type="password"
                            icon={<LockClosedIcon className="w-5 h-5 text-slate-400" />}
                            value={passwords.current}
                            onChange={handlePasswordChange}
                            placeholder="********"
                            autoComplete="current-password"
                        />
                        <FormField
                            id="newPassword"
                            name="new"
                            label="Nueva Contraseña"
                            type="password"
                            icon={<LockClosedIcon className="w-5 h-5 text-slate-400" />}
                            value={passwords.new}
                            onChange={handlePasswordChange}
                            placeholder="Nueva contraseña segura"
                            autoComplete="new-password"
                        />
                        <FormField
                            id="confirmPassword"
                            name="confirm"
                            label="Confirmar Nueva Contraseña"
                            type="password"
                            icon={<LockClosedIcon className="w-5 h-5 text-slate-400" />}
                            value={passwords.confirm}
                            onChange={handlePasswordChange}
                            placeholder="Confirmar nueva contraseña"
                            autoComplete="new-password"
                        />
                    </div>
                </div>
                <div className="text-right">
                    <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                        Guardar Cambios
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default ProfileSettings;