import { Law } from '../types';

export const allLaws: Law[] = [
    { 
        id: 6,
        title: 'Ley 57 de 1887', 
        description: 'Código Civil (Versión Original).', 
        summary: 'Versión original del Código Civil colombiano, que ha sido objeto de innumerables reformas y derogaciones parciales a lo largo de más de un siglo. Muchas de sus disposiciones han sido reemplazadas por legislación más moderna.',
        authority: 'Consejo Nacional Legislativo',
        purpose: 'Unificar la legislación civil en la República de Colombia, regulando las relaciones familiares, los contratos, las propiedades y las sucesiones.',
        status: 'derogada',
        history: [
            { date: '1887-04-15', event: 'Sanción Presidencial', description: 'Se sanciona la Ley que adopta el Código Civil.', type: 'publication' },
            { date: '2022-01-01', event: 'Declarada Obsoleta/Derogada', description: 'Ejemplo de evento para indicar que la norma ha sido derogada y su contenido principal ya no es aplicable.', type: 'end_of_life' },
        ]
    },
    {
        id: 12,
        title: 'Ley 1753 de 2015',
        description: 'Plan Nacional de Desarrollo 2014-2018.',
        summary: 'Expide el Plan Nacional de Desarrollo "Todos por un nuevo país". Estas leyes tienen una vigencia temporal y, una vez cumplido su período, sus disposiciones instrumentales pierden efecto y se consideran derogadas orgánicamente.',
        authority: 'Congreso de la República',
        purpose: 'Establecer los objetivos, estrategias y metas del Gobierno Nacional para el cuatrienio 2014-2018.',
        status: 'derogada',
        history: [
            { date: '2015-06-09', event: 'Publicación', description: 'Se sanciona y publica la ley del Plan Nacional de Desarrollo.', type: 'publication' },
            { date: '2018-08-07', event: 'Pérdida de Vigencia', description: 'Finaliza el período de gobierno y la ley cumple su ciclo de vida.', type: 'end_of_life' },
        ]
    },
     { 
        id: 3,
        title: 'Ley 906 de 2004', 
        description: 'Código de Procedimiento Penal.', 
        summary: 'Establece el Sistema Penal Acusatorio en Colombia. Regula los procedimientos desde la investigación de un delito hasta el juicio oral y la sentencia, buscando garantizar los derechos de las víctimas y los acusados.',
        authority: 'Congreso de la República',
        purpose: 'Implementar el sistema penal acusatorio, orientado a la eficiencia del proceso judicial y el respeto por las garantías fundamentales.',
        status: 'demandada',
        history: [
            { date: '2004-09-01', event: 'Publicación', description: 'Entra en vigencia el nuevo sistema penal.', type: 'publication' },
            { date: '2023-02-15', event: 'Demanda de Inconstitucionalidad', description: 'Se admite demanda contra el artículo 125 sobre los derechos de las víctimas.', type: 'challenge' },
        ]
    },
    { 
        id: 5,
        title: 'Ley 80 de 1993', 
        description: 'Estatuto General de Contratación Pública.', 
        summary: 'Establece el Estatuto General de Contratación de la Administración Pública, definiendo los principios de transparencia, economía y responsabilidad. Aunque ha sido modificada sustancialmente por leyes posteriores como la Ley 1150 de 2007, que introdujo modalidades de selección y principios de planeación, sus principios generales y estructura fundamental siguen siendo un pilar en la contratación estatal colombiana.',
        authority: 'Congreso de la República',
        purpose: 'Establecer las reglas y principios que rigen los contratos de las entidades estatales para asegurar la eficiencia, transparencia y el cumplimiento de los fines del Estado en la contratación pública.',
        status: 'modificada',
        modifiedBy: 'Ley 1150 de 2007',
        history: [
            { date: '1993-10-28', event: 'Publicación', description: 'Se expide el Estatuto General de Contratación.', type: 'publication' },
            { date: '2007-07-16', event: 'Modificación Sustancial', description: 'La Ley 1150 de 2007 introduce importantes modificaciones en las modalidades de selección, como la selección abreviada y el concurso de méritos, pero no deroga completamente la Ley 80.', type: 'modification' },
        ]
    },
    { 
        id: 1,
        title: 'Ley 2195 de 2022', 
        description: 'Transparencia y Lucha contra la Corrupción.', 
        summary: 'Establece medidas para prevenir los actos de corrupción, reforzar la articulación entre entidades del Estado y recuperar los daños ocasionados por dichos actos con el fin de fortalecer la cultura de la legalidad.',
        authority: 'Congreso de la República',
        purpose: 'Fortalecer los mecanismos de prevención, investigación y sanción de actos de corrupción y mejorar la articululación de las entidades del Estado.',
        status: 'vigente',
        history: [
            { date: '2022-01-18', event: 'Publicación', description: 'Publicada en el Diario Oficial No. 51.921.', type: 'publication' },
        ]
    },
    { 
        id: 4,
        title: 'Ley 1437 de 2011', 
        description: 'Código de Procedimiento Administrativo (CPACA).', 
        status: 'vigente',
        summary: 'Regula los procedimientos que se surten ante las autoridades administrativas, así como los mecanismos de control judicial de los actos de la administración. Es fundamental para la relación entre el ciudadano y el Estado.',
        authority: 'Congreso de la República',
        purpose: 'Modernizar y unificar las reglas de los procedimientos administrativos y de lo contencioso administrativo para proteger los derechos de las personas.',
        history: [
            { date: '2011-01-18', event: 'Publicación', description: 'Sancionada y publicada en el Diario Oficial.', type: 'publication' },
            { date: '2012-07-02', event: 'Entrada en Vigencia', description: 'Comienza a regir en todo el territorio nacional.', type: 'publication' },
        ]
    },
     {
        id: 10,
        title: 'Sentencia T-025 de 2004',
        description: 'Declara el Estado de Cosas Inconstitucional por desplazamiento forzado.',
        summary: 'Sentencia hito de la Corte Constitucional que declaró el "Estado de Cosas Inconstitucional" (ECI) frente a la situación de la población desplazada por el conflicto armado. El ECI se declara cuando existe una vulneración masiva y sistemática de derechos fundamentales, causada por fallas estructurales de las entidades estatales. La Corte ordenó al Estado adoptar medidas complejas y coordinadas para garantizar los derechos a la vida, la dignidad, la salud, la alimentación y la vivienda de esta población.',
        authority: 'Corte Constitucional de Colombia',
        purpose: 'Proteger los derechos fundamentales de la población desplazada y ordenar correctivos estructurales a las políticas públicas.',
        status: 'vigente',
        history: [
            { date: '2004-01-22', event: 'Declaración del Estado de Cosas Inconstitucional', description: 'La Corte emite el fallo, reconociendo la vulneración masiva y sistemática de derechos de la población desplazada y la insuficiente respuesta estatal ante la crisis humanitaria.', type: 'landmark' },
            { date: '2004-Presente', event: 'Seguimiento Continuo', description: 'Mediante múltiples Autos de Seguimiento, la Corte ha monitoreado el cumplimiento de sus órdenes, evaluando avances y persistencias en la política pública y manteniendo la vigencia de la declaratoria.', type: 'modification' },
        ]
    },
    {
        id: 11,
        title: 'Decreto Ley 410 de 1971',
        description: 'Código de Comercio.',
        summary: 'Establece el Código de Comercio, que regula las relaciones mercantiles, los comerciantes, los actos de comercio y las sociedades comerciales en Colombia. Ha sido modificado por múltiples leyes para adaptarse a nuevas realidades económicas.',
        authority: 'Presidencia de la República (Misael Pastrana Borrero)',
        purpose: 'Unificar y modernizar la legislación comercial del país.',
        status: 'modificada',
        modifiedBy: 'Ley 222 de 1995',
        history: [
            { date: '1971-03-27', event: 'Expedición', description: 'Se expide el Código de Comercio.', type: 'publication' },
            { date: '1995-12-20', event: 'Modificación Sustancial', description: 'La Ley 222 de 1995 modifica el régimen de sociedades comerciales.', type: 'modification' },
        ]
    },
    {
        id: 13,
        title: 'Ley 1150 de 2007',
        description: 'Medidas para la eficiencia y transparencia en la Ley 80.',
        summary: 'Introduce ajustes al Estatuto General de Contratación de la Administración Pública (Ley 80 de 1993), principalmente en lo referente a las modalidades de selección de contratistas, y crea el SECOP (Sistema Electrónico para la Contratación Pública).',
        authority: 'Congreso de la República',
        purpose: 'Modernizar el régimen de contratación estatal, introduciendo mayor eficiencia y transparencia en los procesos de selección.',
        status: 'vigente',
        history: [
            { date: '2007-07-16', event: 'Sanción Presidencial', description: 'Se sanciona la Ley que reforma el estatuto de contratación.', type: 'publication' },
        ]
    },
    {
        id: 14,
        title: 'Ley 222 de 1995',
        description: 'Modificación al régimen de sociedades y Código de Comercio.',
        summary: 'Por la cual se modifica el Libro II del Código de Comercio, se expide un nuevo régimen de procesos concursales y se dictan otras disposiciones.',
        authority: 'Congreso de la República',
        purpose: 'Modernizar el régimen societario y concursal en Colombia.',
        status: 'modificada',
        history: [
            { date: '1995-12-20', event: 'Sanción Presidencial', description: 'Se sanciona la Ley de reforma al Código de Comercio.', type: 'publication' },
        ]
    },
];