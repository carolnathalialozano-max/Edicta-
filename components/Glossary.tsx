import React from 'react';
import BookOpenIcon from './icons/BookOpenIcon';

const glossaryTerms = [
  {
    term: 'Derogada',
    definition: 'Cuando una ley deja de ser válida porque una nueva norma la elimina o la reemplaza por completo. En la práctica, es como si se "apagara".',
  },
  {
    term: 'Modificada',
    definition: 'Cuando una parte de la ley (un artículo, un párrafo) es cambiada por una nueva norma, pero el resto del texto original sigue vigente.',
  },
  {
    term: 'Demandada',
    definition: 'Cuando un ciudadano presenta una queja formal ante la Corte Constitucional, argumentando que la ley (o una parte de ella) va en contra de la Constitución.',
  },
  {
    term: 'Reglamentada',
    definition: 'Cuando el Gobierno expide un decreto para explicar en detalle cómo se debe aplicar la ley en la práctica, estableciendo los "pasos a seguir".',
  },
  {
    term: 'Inconstitucionalidad',
    definition: 'La característica de una ley que contradice los principios y derechos de la Constitución. Si la Corte lo confirma, la norma pierde su validez.',
  },
  {
    term: 'Sentencia',
    definition: 'Es la decisión final de un juez o una alta corte sobre un caso. Una sentencia puede declarar si una ley es válida (exequible) o no (inexequible).',
  },
  {
    term: 'Vigente',
    definition: 'Significa que la ley está activa en el presente y debe ser cumplida por todos los ciudadanos e instituciones.',
  },
  {
    term: 'Exequible',
    definition: 'Término técnico que usa la Corte Constitucional para decir que una ley SÍ está de acuerdo con la Constitución y, por lo tanto, puede seguir aplicándose.',
  },
];

const Glossary: React.FC = () => {
  return (
    <section id="glossary" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Glosario Jurídico Ciudadano</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Traducimos los términos legales más comunes a un lenguaje que todos podemos entender.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {glossaryTerms.map((item, index) => (
            <details
              key={index}
              className="group bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <summary className="flex justify-between items-center font-bold text-lg text-slate-800 cursor-pointer list-none">
                <div className="flex items-center">
                  <BookOpenIcon className="w-6 h-6 mr-3 text-blue-600" />
                  {item.term}
                </div>
                <span className="transition-transform duration-300 group-open:rotate-45">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-slate-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </span>
              </summary>
              <p className="text-slate-600 mt-4 pl-9">{item.definition}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Glossary;