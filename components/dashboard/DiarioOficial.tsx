import React, { useState, useMemo } from 'react';
import NewspaperIcon from '../icons/NewspaperIcon';
import SearchIcon from '../icons/SearchIcon';
import DownloadIcon from '../icons/DownloadIcon';
import BellIcon from '../icons/BellIcon';

interface Publication {
  id: number;
  type: 'Ley' | 'Decreto' | 'Resolución';
  number: string;
  date: string;
  summary: string;
  content: string;
  status: 'Vigente' | 'Derogada' | 'Modificada';
  effectiveDate?: string;
}

const officialPublications: Publication[] = [
  { id: 15, type: 'Ley', number: '2488 de 2025', date: '2025-07-20', summary: 'Se regula la desconexión laboral digital para todos los trabajadores.', content: 'Artículo 1: Se garantiza el derecho a la desconexión laboral, una vez finalizada la jornada laboral, a todos los trabajadores y servidores públicos. No podrán recibir correos, mensajes o llamadas de carácter laboral. Artículo 2: Las empresas deberán implementar una política interna de desconexión.', status: 'Vigente', effectiveDate: '2025-08-01' },
  { id: 14, type: 'Decreto', number: '1080 de 2025', date: '2025-06-15', summary: 'Se reglamenta el teletrabajo para el sector público.', content: 'Artículo 1. Objeto. El presente decreto tiene por objeto establecer las condiciones y requisitos para la implementación del teletrabajo en las entidades del sector público. Artículo 2. Ámbito de aplicación. Se aplicará a todos los servidores públicos de las entidades y organismos de la Rama Ejecutiva del poder público. Se definen las responsabilidades de las ARL y la dotación de equipos.', status: 'Vigente', effectiveDate: '2025-07-01' },
  { id: 13, type: 'Ley', number: '2450 de 2024', date: '2024-12-01', summary: 'Se modifica el régimen de propiedad horizontal en Colombia.', content: 'La presente ley introduce modificaciones al régimen de propiedad horizontal, Ley 675 de 2001. Se regula la realización de asambleas virtuales, se fortalecen las funciones del administrador y se establecen nuevas sanciones para los deudores morosos de cuotas de administración.', status: 'Vigente', effectiveDate: '2025-01-01' },
  { id: 12, type: 'Decreto', number: '0150 de 2025', date: '2025-02-01', summary: 'Se establecen los lineamientos para la jornada laboral de 4 días.', content: 'Se autoriza un plan piloto para la implementación de la jornada laboral de cuatro (4) días semanales, sin disminución del salario. Las empresas interesadas deberán inscribirse y reportar métricas de productividad. La jornada diaria no podrá exceder de 10 horas.', status: 'Vigente', effectiveDate: '2025-03-01' },
  { id: 11, type: 'Ley', number: '2401 de 2024', date: '2024-03-10', summary: 'Se regula el uso de inteligencia artificial en procesos judiciales.', content: 'Se establecen principios éticos para el uso de sistemas de inteligencia artificial en la administración de justicia, garantizando la supervisión humana de las decisiones, la protección de datos personales y el debido proceso. Se prohíbe el uso de IA para dictar sentencias de forma autónoma.', status: 'Vigente', effectiveDate: '2024-09-10' },
  { id: 10, type: 'Resolución', number: '10547 de 2023', date: '2023-11-15', summary: 'Se actualiza el listado de enfermedades huérfanas-raras en el país.', content: 'Se incluyen en el listado oficial de enfermedades huérfanas-raras la Fibrosis Quística Atípica y el Síndrome de Ehlers-Danlos tipo Hiperlaxo, con el fin de garantizar la cobertura de los tratamientos por parte del sistema de salud.', status: 'Vigente', effectiveDate: '2023-11-15' },
  { id: 9, type: 'Ley', number: '2300 de 2023', date: '2023-07-10', summary: 'Se establecen medidas para proteger el derecho a la intimidad de los consumidores (Ley "Dejen de fregar").', content: 'Se prohíbe a las entidades financieras y comerciales contactar a los consumidores a través de llamadas telefónicas, mensajes de texto o correos electrónicos en horarios no hábiles. Los usuarios podrán inscribirse en un Registro de Números Excluidos.', status: 'Vigente', effectiveDate: '2023-10-10' },
  { id: 8, type: 'Decreto', number: '0890 de 2023', date: '2023-06-02', summary: 'Se reglamenta la política de Estado de gratuidad en la matrícula académica para el acceso a la educación superior.', content: 'Se establecen los requisitos para ser beneficiario de la política de gratuidad en la matrícula para programas de pregrado en instituciones de educación superior públicas. Los beneficiarios deben pertenecer a los estratos 1, 2 y 3.', status: 'Vigente', effectiveDate: '2023-06-02' },
  { id: 3, type: 'Resolución', number: '0012 de 2023', date: '2023-01-20', summary: 'Por la cual se establecen los plazos para declarar y pagar en el año 2023.', content: 'La Dirección de Impuestos y Aduanas Nacionales (DIAN) fija los plazos para la presentación de la declaración del impuesto sobre la renta y complementarios para personas naturales, así como las fechas para el pago del impuesto sobre las ventas (IVA).', status: 'Vigente', effectiveDate: '2023-01-20' },
  { id: 1, type: 'Ley', number: '2277 de 2022', date: '2022-12-13', summary: 'Adopta la Reforma Tributaria para la Igualdad y la Justicia Social.', content: 'Se crean nuevos impuestos a las bebidas azucaradas y a los alimentos ultraprocesados. Se modifica el impuesto al patrimonio y se ajustan las tarifas de retención en la fuente para ingresos altos. Se busca aumentar el recaudo para financiar programas sociales.', status: 'Modificada', effectiveDate: '2023-01-01' },
  { id: 2, type: 'Decreto', number: '2487 de 2022', date: '2022-12-16', summary: 'Establece el salario mínimo legal mensual para el año 2023.', content: 'Se fija el Salario Mínimo Legal Mensual Vigente (SMLMV) para el año 2023 en un millón ciento sesenta mil pesos ($1.160.000). El auxilio de transporte se establece en ciento cuarenta mil seiscientos seis pesos ($140.606).', status: 'Vigente', effectiveDate: '2023-01-01' },
  { id: 4, type: 'Ley', number: '2251 de 2022', date: '2022-07-14', summary: 'Se dictan normas para el diseño e implementación de la política de seguridad vial.', content: 'Se establecen límites de velocidad en zonas urbanas y rurales. Se obliga a los fabricantes a incluir sistemas de seguridad activa y pasiva en los vehículos nuevos. Se reforman los procesos de formación de conductores.', status: 'Vigente', effectiveDate: '2022-07-14' },
  { id: 6, type: 'Resolución', number: '5477 de 2022', date: '2022-07-22', summary: 'Reglamenta el trámite de visas para extranjeros en Colombia.', content: 'Se definen las categorías de visas: Visitante (Tipo V), Migrante (Tipo M) y Residente (Tipo R). Se especifican los requisitos y documentos necesarios para cada tipo de visa, incluyendo medios económicos y cartas de invitación.', status: 'Derogada', effectiveDate: '2022-07-22' },
  { id: 7, type: 'Ley', number: '2111 de 2021', date: '2021-07-29', summary: 'Sustituye el título XI "De los delitos contra los recursos naturales y el medio ambiente".', content: 'Se tipifican nuevos delitos ambientales como la deforestación, la financiación de la invasión de áreas de especial importancia ecológica y el tráfico de fauna. Se aumentan las penas para la minería ilegal.', status: 'Vigente', effectiveDate: '2021-07-29' },
  { id: 5, type: 'Decreto', number: '1076 de 2015', date: '2015-05-26', summary: 'Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible.', content: 'Este decreto compila y racionaliza las normas de carácter reglamentario que rigen en el sector de Ambiente y Desarrollo Sostenible, incluyendo licencias ambientales, gestión de residuos y protección de cuencas hidrográficas.', status: 'Derogada', effectiveDate: '2015-05-26' },
];

const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    React.useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};


const DiarioOficial: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedType, setSelectedType] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [expandedRowId, setExpandedRowId] = useState<number | null>(null);

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const filteredPublications = useMemo(() => {
        const searchWords = debouncedSearchTerm.trim().toLowerCase().split(/\s+/).filter(Boolean);

        return officialPublications.filter(pub => {
            const matchesType = selectedType === 'all' || pub.type === selectedType;
            const matchesStatus = selectedStatus === 'all' || pub.status === selectedStatus;
            const matchesDate = (!startDate || pub.date >= startDate) && (!endDate || pub.date <= endDate);

            const searchableText = [
                pub.type,
                pub.number,
                pub.summary,
                pub.content
            ].join(' ').toLowerCase();

            const matchesSearchTerm = searchWords.length === 0 || searchWords.every(word => searchableText.includes(word));
            
            return matchesSearchTerm && matchesType && matchesDate && matchesStatus;
        }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }, [debouncedSearchTerm, selectedType, startDate, endDate, selectedStatus]);

    const handleClearFilters = () => {
        setSearchTerm('');
        setStartDate('');
        setEndDate('');
        setSelectedType('all');
        setSelectedStatus('all');
    };

    const handleRowClick = (publicationId: number) => {
        setExpandedRowId(currentId => (currentId === publicationId ? null : publicationId));
    };

    const handleDownloadCSV = () => {
        const headers = ['Tipo', 'Número', 'Fecha de Publicación', 'Fecha de Entrada en Vigencia', 'Resumen', 'Estado'];
        const csvRows = filteredPublications.map(pub => {
            const escapedSummary = `"${pub.summary.replace(/"/g, '""')}"`;
            return [pub.type, pub.number, pub.date, pub.effectiveDate || 'N/A', escapedSummary, pub.status].join(',');
        });

        const csvString = [headers.join(','), ...csvRows].join('\n');
        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'publicaciones-diario-oficial.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const typeConfig = {
        Ley: 'bg-blue-100 text-blue-800',
        Decreto: 'bg-indigo-100 text-indigo-800',
        Resolución: 'bg-purple-100 text-purple-800',
    };

    const statusConfig = {
        Vigente: {
            label: 'Vigente',
            classes: 'bg-green-100 text-green-800',
            tooltip: 'La norma está activa y debe ser cumplida.',
        },
        Derogada: {
            label: 'Derogada',
            classes: 'bg-red-100 text-red-800',
            tooltip: 'La norma ha perdido su validez y ya no es aplicable.',
        },
        Modificada: {
            label: 'Modificada',
            classes: 'bg-yellow-100 text-yellow-800',
            tooltip: 'La norma ha sido alterada por una legislación posterior.',
        },
    };

    const FilterTooltip: React.FC<{ text: string; children: React.ReactNode }> = ({ text, children }) => (
        <div className="relative group">
            {children}
            <div className="absolute bottom-full mb-2 w-max max-w-xs p-2 text-xs text-white bg-slate-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-10">
                {text}
            </div>
        </div>
    );

    return (
        <div>
            <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                    <NewspaperIcon className="w-8 h-8"/>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
                        <span>Diario Oficial</span>
                        <BellIcon className="w-7 h-7 text-blue-500" />
                    </h1>
                    <p className="text-slate-600">Consulta las últimas publicaciones y normativas expedidas.</p>
                </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
                    <div className="lg:col-span-2">
                        <FilterTooltip text="Busca por palabras clave en el contenido de la norma.">
                            <label htmlFor="search" className="block text-sm font-medium text-slate-700">Buscar</label>
                        </FilterTooltip>
                        <div className="relative mt-1">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <SearchIcon className="w-5 h-5 text-slate-400" />
                            </span>
                            <input
                                type="text"
                                id="search"
                                placeholder="Escribe para buscar..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 text-slate-700 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    
                    <div>
                        <FilterTooltip text="Filtra por el tipo de publicación.">
                            <label htmlFor="type" className="block text-sm font-medium text-slate-700">Tipo</label>
                        </FilterTooltip>
                        <select id="type" value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="mt-1 w-full pl-3 pr-10 py-2 text-base border border-slate-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white">
                            <option value="all">Todos</option>
                            <option value="Ley">Ley</option>
                            <option value="Decreto">Decreto</option>
                            <option value="Resolución">Resolución</option>
                        </select>
                    </div>

                    <div>
                        <FilterTooltip text="Filtra por el estado de la norma.">
                            <label htmlFor="status" className="block text-sm font-medium text-slate-700">Estado</label>
                        </FilterTooltip>
                        <select id="status" value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)} className="mt-1 w-full pl-3 pr-10 py-2 text-base border border-slate-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white">
                            <option value="all">Todos</option>
                            <option value="Vigente">Vigente</option>
                            <option value="Modificada">Modificada</option>
                            <option value="Derogada">Derogada</option>
                        </select>
                    </div>

                    <div>
                        <FilterTooltip text="Define la fecha de inicio del rango de búsqueda.">
                             <label htmlFor="startDate" className="block text-sm font-medium text-slate-700">Desde</label>
                        </FilterTooltip>
                        <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="mt-1 w-full pl-3 pr-2 py-2 text-base border border-slate-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white" />
                    </div>

                    <div>
                        <FilterTooltip text="Define la fecha de fin del rango de búsqueda.">
                            <label htmlFor="endDate" className="block text-sm font-medium text-slate-700">Hasta</label>
                        </FilterTooltip>
                        <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="mt-1 w-full pl-3 pr-2 py-2 text-base border border-slate-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white" />
                    </div>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row justify-end items-center gap-4">
                    <button onClick={handleClearFilters} className="text-sm font-semibold text-blue-600 hover:underline">Limpiar filtros</button>
                    <button 
                        onClick={handleDownloadCSV}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors text-sm"
                        disabled={filteredPublications.length === 0}
                        aria-label="Descargar resultados en formato CSV"
                    >
                        <DownloadIcon className="w-4 h-4" />
                        Descargar CSV
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200">
                        <thead className="bg-slate-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Estado</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tipo</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Número</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Fecha de Publicación</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Resumen</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200">
                            {filteredPublications.length > 0 ? (
                                filteredPublications.flatMap((pub) => (
                                    <React.Fragment key={pub.id}>
                                        <tr onClick={() => handleRowClick(pub.id)} className="hover:bg-slate-50 cursor-pointer">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="relative group flex items-center">
                                                    <span className={`px-2.5 py-0.5 text-sm font-semibold rounded-full ${statusConfig[pub.status].classes}`}>
                                                        {statusConfig[pub.status].label}
                                                    </span>
                                                    <div className="absolute left-0 bottom-full mb-2 w-max max-w-xs p-2 text-xs text-white bg-slate-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-10">
                                                        {statusConfig[pub.status].tooltip}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2.5 py-0.5 text-sm font-semibold rounded-full ${typeConfig[pub.type]}`}>
                                                    {pub.type}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{pub.number}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{pub.date}</td>
                                            <td className="px-6 py-4 text-sm text-slate-600 max-w-md truncate">{pub.summary}</td>
                                        </tr>
                                        {expandedRowId === pub.id && (
                                            <tr className="bg-slate-50">
                                                <td colSpan={5} className="p-0">
                                                    <div className="p-6 row-expand-content">
                                                        <h3 className="text-lg font-bold text-slate-800 mb-4">{pub.type} {pub.number}</h3>
                                                        <dl className="space-y-6">
                                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                                <div>
                                                                    <dt className="text-sm font-semibold text-slate-500">Estado</dt>
                                                                    <dd className="mt-1">
                                                                        <div className="relative group inline-block">
                                                                            <span className={`px-3 py-1 text-sm font-bold rounded-full ${statusConfig[pub.status].classes}`}>
                                                                                {statusConfig[pub.status].label}
                                                                            </span>
                                                                            <div className="absolute left-0 bottom-full mb-2 w-max max-w-xs p-2 text-xs text-white bg-slate-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-10">
                                                                                {statusConfig[pub.status].tooltip}
                                                                            </div>
                                                                        </div>
                                                                    </dd>
                                                                </div>
                                                                <div>
                                                                    <dt className="text-sm font-semibold text-slate-500">Fecha de Publicación</dt>
                                                                    <dd className="mt-1 text-base text-slate-900">{pub.date}</dd>
                                                                </div>
                                                                <div>
                                                                    <dt className="text-sm font-semibold text-slate-500">Fecha de Entrada en Vigencia</dt>
                                                                    <dd className="mt-1 text-base text-slate-900">{pub.effectiveDate || 'N/A'}</dd>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <dt className="text-sm font-semibold text-slate-500">Resumen</dt>
                                                                <dd className="mt-1 text-base text-slate-700 leading-relaxed">{pub.summary}</dd>
                                                            </div>
                                                            <div>
                                                                <dt className="text-sm font-semibold text-slate-500">Contenido Completo</dt>
                                                                <dd className="mt-1 text-base text-slate-700 leading-relaxed whitespace-pre-wrap bg-white p-4 rounded-md border">{pub.content}</dd>
                                                            </div>
                                                        </dl>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="text-center py-12 text-slate-500">
                                        No se encontraron publicaciones que coincidan con tu búsqueda.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DiarioOficial;