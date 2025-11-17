import React from 'react';
import BookOpenIcon from '../icons/BookOpenIcon';

const Constitution: React.FC = () => {
    const renderArticle = (num: number | string, content: React.ReactNode) => (
        <article className="py-3">
            <h4 className="font-bold text-slate-700">Artículo {num}.</h4>
            <div className="mt-1 text-slate-600">{content}</div>
        </article>
    );

    const sections = [
        { id: 'preambulo', title: 'Preámbulo' },
        { id: 'titulo-1', title: 'Título I: Principios Fundamentales' },
        { id: 'titulo-2', title: 'Título II: Derechos, Garantías y Deberes' },
        { id: 'titulo-3', title: 'Título III: Habitantes y Territorio' },
        { id: 'titulo-4', title: 'Título IV: Participación y Partidos' },
        { id: 'titulo-5', title: 'Título V: Organización del Estado' },
        { id: 'titulo-6', title: 'Título VI: Rama Legislativa' },
        { id: 'titulo-7', title: 'Título VII: Rama Ejecutiva' },
        { id: 'titulo-8', title: 'Título VIII: Rama Judicial' },
        { id: 'titulo-9', title: 'Título IX: Elecciones y Org. Electoral' },
        { id: 'titulo-10', title: 'Título X: Organismos de Control' },
        { id: 'titulo-11', title: 'Título XI: Organización Territorial' },
    ];

    return (
        <div className="flex">
            <aside className="hidden lg:block w-64 flex-shrink-0 pr-8">
                <div className="sticky top-24">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Índice de la Constitución</h3>
                    <nav>
                        <ul className="space-y-2">
                            {sections.map(section => (
                                <li key={section.id}>
                                    <a href={`#${section.id}`} className="text-sm text-slate-600 hover:text-blue-600 hover:font-semibold transition-colors duration-200">
                                        {section.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>
            
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                        <BookOpenIcon className="w-8 h-8"/>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-slate-800">Constitución Política de Colombia</h1>
                        <p className="text-slate-600">Consulta los principios y derechos fundamentales de la Carta Magna de 1991.</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 prose max-w-none prose-slate prose-h2:text-2xl prose-h2:font-bold prose-h2:text-slate-800 prose-h2:border-b prose-h2:pb-2 prose-h2:mb-4 prose-h3:font-bold prose-h3:text-xl prose-h3:text-slate-700 prose-h3:mt-6 prose-h3:mb-4 prose-h4:font-bold prose-h4:text-slate-700">
                    <section id="preambulo">
                        <h2>Preámbulo</h2>
                        <p className="italic text-slate-700">
                            EL PUEBLO DE COLOMBIA, en ejercicio de su poder soberano, representado por sus delegatarios a la Asamblea Nacional Constituyente, invocando la protección de Dios, y con el fin de fortalecer la unidad de la Nación y asegurar a sus integrantes la vida, la convivencia, el trabajo, la justicia, la igualdad, el conocimiento, la libertad y la paz, dentro de un marco jurídico, democrático y participativo que garantice un orden político, económico y social justo, y comprometido a impulsar la integración de la comunidad latinoamericana, decreta, sanciona y promulga la siguiente: CONSTITUCIÓN POLITICA DE COLOMBIA.
                        </p>
                    </section>

                    <hr className="my-10" />

                    <section id="titulo-1">
                        <h2>TÍTULO I: DE LOS PRINCIPIOS FUNDAMENTALES</h2>
                        {renderArticle(1, <p>Colombia es un Estado social de derecho, organizado en forma de República unitaria, descentralizada, con autonomía de sus entidades territoriales, democrática, participativa y pluralista, fundada en el respeto de la dignidad humana, en el trabajo y la solidaridad de las personas que la integran y en la prevalencia del interés general.</p>)}
                        {renderArticle(2, <p>Son fines esenciales del Estado: servir a la comunidad, promover la prosperidad general y garantizar la efectividad de los principios, derechos y deberes consagrados en la Constitución; facilitar la participación de todos en las decisiones que los afectan y en la vida económica, política, administrativa y cultural de la Nación; defender la independencia nacional, mantener la integridad territorial y asegurar la convivencia pacífica y la vigencia de un orden justo. Las autoridades de la República están instituidas para proteger a todas las personas residentes en Colombia, en su vida, honra, bienes, creencias, y demás derechos y libertades, y para asegurar el cumplimiento de los deberes sociales del Estado y de los particulares.</p>)}
                        {renderArticle(3, <p>La soberanía reside exclusivamente en el pueblo, del cual emana el poder público. El pueblo la ejerce en forma directa o por medio de sus representantes, en los términos que la Constitución establece.</p>)}
                        {renderArticle(4, <p>La Constitución es norma de normas. En todo caso de incompatibilidad entre la Constitución y la ley u otra norma jurídica, se aplicarán las disposiciones constitucionales. Es deber de los nacionales y de los extranjeros en Colombia acatar la Constitución y las leyes, y respetar y obedecer a las autoridades.</p>)}
                        {renderArticle(5, <p>El Estado reconoce, sin discriminación alguna, la primacía de los derechos inalienables de la persona y ampara a la familia como institución básica de la sociedad.</p>)}
                        {renderArticle(6, <p>Los particulares solo son responsables ante las autoridades por infringir la Constitución y las leyes. Los servidores públicos lo son por la misma causa y por omisión o extralimitación en el ejercicio de sus funciones.</p>)}
                        {renderArticle(7, <p>El Estado reconoce y protege la diversidad étnica y cultural de la Nación colombiana.</p>)}
                        {renderArticle(8, <p>Es obligación del Estado y de las personas proteger las riquezas culturales y naturales de la Nación.</p>)}
                        {renderArticle(9, <p>Las relaciones exteriores del Estado se fundamentan en la soberanía nacional, en el respeto a la autodeterminación de los pueblos y en el reconocimiento de los principios del derecho internacional aceptados por Colombia.</p>)}
                        {renderArticle(10, <p>El castellano es el idioma oficial de Colombia. Las lenguas y dialectos de los grupos etnicos son también oficiales en sus territorios. La enseñanza que se imparta en las comunidades con tradiciones lingüisticas propias será bilingüe.</p>)}
                    </section>
                    
                    <hr className="my-10" />
                    
                    <section id="titulo-2">
                         <h2>TÍTULO II: DE LOS DERECHOS, LAS GARANTIAS Y LOS DEBERES</h2>
                         <h3>CAPITULO 1: DE LOS DERECHOS FUNDAMENTALES</h3>
                         {renderArticle(11, <p>El derecho a la vida es inviolable. No habrá pena de muerte.</p>)}
                         {renderArticle(12, <p>Nadie será sometido a desaparición forzada, a torturas ni a tratos o penas crueles, inhumanos o degradantes.</p>)}
                         {renderArticle(13, <p>Todas las personas nacen libres e iguales ante la ley, recibirán la misma protección y trato de las autoridades y gozarán de los mismos derechos, libertades y oportunidades sin ninguna discriminación por razones de sexo, raza, origen nacional o familiar, lengua, religión, opinión política o filosófica.</p>)}
                         {renderArticle(14, <p>Toda persona tiene derecho al reconocimiento de su personalidad jurídica.</p>)}
                         {renderArticle(15, <p>Todas las personas tienen derecho a su intimidad personal y familiar y a su buen nombre, y el Estado debe respetarlos y hacerlos respetar. De igual modo, tienen derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en los bancos de datos y en archivos de entidades públicas y privadas.</p>)}
                         {renderArticle(16, <p>Todas las personas tienen derecho al libre desarrollo de su personalidad sin mas limitaciones que las que imponen los derechos de los demás y el orden jurídico.</p>)}
                         {renderArticle(17, <p>Se prohíben la esclavitud, la servidumbre y la trata de seres humanos en todas sus formas.</p>)}
                         {renderArticle(18, <p>Se garantiza la libertad de conciencia. Nadie será molestado por razon de sus convicciones o creencias ni compelido a revelarlas ni obligado a actuar contra su conciencia.</p>)}
                         {renderArticle(19, <p>Se garantiza la libertad de cultos. Toda persona tiene derecho a profesar libremente su religión y a difundirla en forma individual o colectiva.</p>)}
                         {renderArticle(20, <p>Se garantiza a toda persona la libertad de expresar y difundir su pensamiento y opiniones, la de informar y recibir información veraz e imparcial, y la de fundar medios masivos de comunicación.</p>)}
                         {renderArticle(21, <p>Se garantiza el derecho a la honra. La ley señalará la forma de su protección.</p>)}
                         {renderArticle(22, <p>La paz es un derecho y un deber de obligatorio cumplimiento.</p>)}
                         {renderArticle(23, <p>Toda persona tiene derecho a presentar peticiones respetuosas a las autoridades por motivos de interés general o particular y a obtener pronta resolución.</p>)}
                         {renderArticle(24, <p>Todo colombiano, con las limitaciones que establezca la ley, tiene derecho a circular libremente por el territorio nacional, a entrar y salir de el, y a permanecer y residenciarse en Colombia.</p>)}
                         {renderArticle(25, <p>El trabajo es un derecho y una obligación social y goza, en todas sus modalidades, de la especial protección del Estado. Toda persona tiene derecho a un trabajo en condiciones dignas y justas.</p>)}
                         {renderArticle(26, <p>Toda persona es libre de escoger profesión u oficio. La ley podrá exigir títulos de idoneidad. Las autoridades competentes inspeccionarám y vigilarán el ejercicio de las profesiones.</p>)}
                         {renderArticle(27, <p>El Estado garantiza las libertades de enseñanza, aprendizaje, investigación y catedra.</p>)}
                         {renderArticle(28, <p>Toda persona es libre. Nadie puede ser molestado en su persona o familia, ni reducido a prisión o arresto, ni detenido, ni su domicilio registrado, sino en virtud de mandamiento escrito de autoridad judicial competente.</p>)}
                         {renderArticle(29, <p>El debido proceso se aplicará a toda clase de actuaciones judiciales y administrativas.</p>)}
                         {renderArticle(30, <p>Quien estuviere privado de su libertad, y creyere estarlo ilegalmente, tiene derecho a invocar ante cualquier autoridad judicial, en todo tiempo, por si o por interposta persona, el Habeas Corpus, el cual debe resolverse en el término de treinta y seis horas.</p>)}
                         {renderArticle(31, <p>Toda sentencia judicial podrá ser apelada o consultada, salvo las excepciones que consagre la ley.</p>)}
                         {renderArticle(32, <p>El delincuente sorprendido en flagrancia podrá ser aprehendido y llevado ante el juez por cualquier persona.</p>)}
                         {renderArticle(33, <p>Nadie podrá ser obligado a declarar contra si mismo o contra su cónyuge, compañero permanente o parientes dentro del cuarto grado de consanguinidad, segundo de afinidad o primero civil.</p>)}
                         {renderArticle(34, <p>Se prohíben penas de destierro, prisión perpetua y confiscación.</p>)}
                         {renderArticle(35, <p>La extradición se podrá solicitar, conceder u ofrecer de acuerdo con los tratados públicos y, en su defecto, con la ley.</p>)}
                         {renderArticle(36, <p>Se reconoce el derecho de asilo en los términos previstos en la ley.</p>)}
                         {renderArticle(37, <p>Toda parte del pueblo puede reunirse y manifestarse pública y pacíficamente. Solo la ley podrá establecer de manera expressa los casos en los cuales se podrá limitar el ejercicio de este derecho.</p>)}
                         {renderArticle(38, <p>Se garantiza el derecho de libre asociación para el desarrollo de las distintas actividades que las personas realizan en sociedad.</p>)}
                         {renderArticle(39, <p>Los trabajadores y empleadores tienen derecho a constituir sindicatos o asociaciones, sin intervención del Estado.</p>)}
                         {renderArticle(40, <p className="whitespace-pre-wrap">{`Todo ciudadano tiene derecho a participar en la conformación, ejercicio y control del poder político. Para hacer efectivo este derecho puede:\n1. Elegir y ser elegido.\n2. Tomar parte en elecciones, plebiscitos, referendos, consultas populares y otras formas de participación democrática.\n3. Constituir partidos, movimientos y agrupaciones políticas sin limitación alguna; formar parte de ellos libremente y difundir sus ideas y programas.\n4. Revocar el mandato de los elegidos en los casos y en la forma que establecen la Constitución y la ley.\n5. Tener iniciativa en las corporaciones públicas.\n6. Interponer acciones públicas en defensa de la Constitución y de la ley.\n7. Acceder al desempeño de funciones y cargos públicos, salvo los colombianos, por nacimiento o por adopción, que tengan doble nacionalidad. La ley reglamentará esta excepción y determinará los casos a los cuales ha de aplicarse.`}</p>)}
                         {renderArticle(41, <p>En todas las instituciones de educación, oficiales o privadas, serán obligatorios el estudio de la Constitución y la Instrucción Cívica. Así mismo se fomentarán prácticas democráticas para el aprendizaje de los principios y valores de la participación ciudadana.</p>)}
                         
                         <h3>CAPITULO 2: DE LOS DERECHOS SOCIALES, ECONOMICOS Y CULTURALES</h3>
                         {renderArticle(42, <p>La familia es el nucleo fundamental de la sociedad. Se constitue por vinculos naturales o jurídicos, por la decisión libre de un hombre y una mujer de contraer matrimonio o por la voluntad responsable de conformarla.</p>)}
                         {renderArticle(43, <p>La mujer y el hombre tienen iguales derechos y oportunidades. La mujer no podrá ser sometida a ninguna clase de discriminación.</p>)}
                         {renderArticle(44, <p>Son derechos fundamentales de los niños: la vida, la integridad física, la salud y la seguridad social, la alimentación equilibrada, su nombre y nacionalidad, tener una familia y no ser separados de ella, el cuidado y amor, la educación y la cultura, la recreación y la libre expresión de su opinión.</p>)}
                         {renderArticle(45, <p>El adolescente tiene derecho a la protección y a la formación integral.</p>)}
                         {renderArticle(46, <p>El Estado, la sociedad y la familia concurrirán para la protección y la asistencia de las personas de la tercerá edad y promoverán su integración a la vida activa y comunitaria.</p>)}
                         {renderArticle(47, <p>El Estado adelantará una política de previsión, rehabilitación e integración social para los disminuidos fisicos, sensoriales y psiquicos, a quienes se prestará la atención especializada que requieran.</p>)}
                         {renderArticle(48, <p>La Seguridad Social es un servicio público de carácter obligatorio que se prestará bajo la dirección, coordinación y control del Estado, en sujeción a los principios de eficiencia, universalidad y solidaridad, en los términos que establezca la Ley.</p>)}
                         {renderArticle(49, <p>La atención de la salud y el saneamiento ambiental son servicios públicos a cargo del Estado. Se garantiza a todas las personas el acceso a los servicios de promoción, protección y recuperación de la salud.</p>)}
                         {renderArticle(50, <p>Todo niño menor de un año que no este cubierto por algu tipo de protección o de seguridad social, tendra derecho a recibir atención gratuita en todas las instituciones de salud que reciban aportes del Estado. La ley reglamentará la materia.</p>)}
                         {renderArticle(51, <p>Todos los colombianos tienen derecho a vivienda digna. El Estado fijará las condiciones necesarias para hacer efectivo este derecho y promoverá planes de vivienda de interés social, sistemas adecuados de financiación a largo plazo y formas asociativas de ejecución de estos programas de vivienda.</p>)}
                         {renderArticle(52, <p>Se reconoce el derecho de todas las personas a la recreación, a la práctica del deporte y al aprovechamiento del tiempo libre.</p>)}
                         {renderArticle(53, <p>El Congreso expedira el estatuto del trabajo. La ley correspondiente tendra en cuenta por lo menos los siguientes principios minimos fundamentales: Igualdad de oportunidades para los trabajadores; remuneración minima vital y movil, proporcional a la cantidad y calidad de trabajo; estabilidad en el empleo; irrenunciabilidad a los beneficios minimos establecidos en normas laborales...</p>)}
                         {renderArticle(54, <p>Es obligación del Estado y de los empleadores ofrecer formación y habilitación profesional y técnica a quienes lo requieran.</p>)}
                         {renderArticle(55, <p>Se garantiza el derecho de negociación colectiva para regular las relaciones laborales, con las excepciones que señale la ley.</p>)}
                         {renderArticle(56, <p>Se garantiza el derecho de huelga, salvo en los servicios públicos esenciales definidos por el legislador.</p>)}
                         {renderArticle(57, <p>La ley podrá establecer los estimulos y los medios para que los trabajadores participen en la gestión de las empresas.</p>)}
                         {renderArticle(58, <p>Se garantizan la propiedad privada y los demás derechos adquiridos con arreglo a las leyes civiles, los cuales no pueden ser desconocidos ni vulnerados por leyes posteriores.</p>)}
                         {renderArticle(59, <p>En caso de guerra y solo para atender a sus requerimientos, la necesidad de una expropiación podrá ser decretada por el Gobierno Nacional sin previa indemnización.</p>)}
                         {renderArticle(60, <p>El Estado promoverá, de acuerdo con la ley, el acceso a la propiedad.</p>)}
                         {renderArticle(61, <p>El Estado protegerá la propiedad intelectual por el tiempo y mediante las formalidades que establezca la ley.</p>)}
                         {renderArticle(62, <p>El destino de las donaciones intervivos o testamentarias, hechas conforme a la ley para fines de interés social, no podrá ser variado ni modificado por el legislador, a menos que el objeto de la donación desaparezca.</p>)}
                         {renderArticle(63, <p>Los bienes de uso público, los parques naturales, las tierras comunales de grupos etnicos, las tierras de resguardo, el patrimonio arqueologico de la Nación y los demás bienes que determine la ley, son inalienables, imprescriptibles e inembargables.</p>)}
                         {renderArticle(64, <p>Es deber del Estado promover el acceso progresivo a la propiedad de la tierra del campesinado y de los trabajadores agrarios, en forma individual o asociativa.</p>)}
                         {renderArticle(65, <p>La producción de alimentos gozará de la especial protección del Estado.</p>)}
                         {renderArticle(66, <p>Las disposiciones que se dicten en materia crediticia podrán reglamentar las condiciones especiales del credito agropecuario, teniendo en cuenta los ciclos de las cosechas y de los precios, como también los riesgos inherentes a la actividad y las calamidades ambientales.</p>)}
                         {renderArticle(67, <p>La educación es un derecho de la persona y un servicio público que tiene una función social; con ella se busca el acceso al conocimiento, a la ciencia, a la técnica, y a los demás bienes y valores de la cultura.</p>)}
                         {renderArticle(68, <p>Los particulares podrán fundar establecimientos educativos. La ley establecerá las condiciones para su creación y gestión.</p>)}
                         {renderArticle(69, <p>Se garantiza la autonomía universitaria. Las universidades podrán darse sus directivas y regirse por sus propios estatutos, de acuerdo con la ley.</p>)}
                         {renderArticle(70, <p>El Estado tiene el deber de promover y fomentar el acceso a la cultura de todos los colombianos en igualdad de oportunidades, por medio de la educación permanente y la enseñanza cientifica, técnica, artistica y profesional en todas las etapas del proceso de creación de la identidad nacional.</p>)}
                         {renderArticle(71, <p>La busqueda del conocimiento y la expresión artistica son libres. Los planes de desarrollo económico y social incluirán el fomento a las ciencias y, en general, a la cultura.</p>)}
                         {renderArticle(72, <p>El patrimonio cultural de la Nación esta bajo la protección del Estado. El patrimonio arqueologico y otros bienes culturales que conforman la identidad nacional, pertenecen a la Nación y son inalienables, inembargables e imprescriptibles.</p>)}
                         {renderArticle(73, <p>La actividad periodistica gozará de protección para garantizar su libertad e independencia profesional.</p>)}
                         {renderArticle(74, <p>Todas las personas tienen derecho a acceder a los documentos públicos salvo los casos que establezca la ley. El secreto profesional es inviolable.</p>)}
                         {renderArticle(75, <p>El espectro electromagnetico es un bien público inenajenable e imprescriptible sujeto a la gestión y control del Estado.</p>)}
                         {renderArticle(76, <p>(Derogado)</p>)}
                         {renderArticle(77, <p>El Congreso de la República expedira la ley que fijará la política en materia de television.</p>)}
                         
                         <h3>CAPITULO 3: DE LOS DERECHOS COLECTIVOS Y DEL AMBIENTE</h3>
                         {renderArticle(78, <p>La ley regulará el control de calidad de bienes y servicios ofrecidos y prestados a la comunidad, así como la información que debe suministrarse al público en su comercialización.</p>)}
                         {renderArticle(79, <p>Todas las personas tienen derecho a gozar de un ambiente sano. La Ley garantizará la participación de la comunidad en las decisiones que puedan afectarlo.</p>)}
                         {renderArticle(80, <p>El Estado planificará el manejo y aprovechamiento de los recursos naturales, para garantizar su desarrollo sostenible, su conservación, restauración o sustitución.</p>)}
                         {renderArticle(81, <p>Queda prohibida la fabricación, importación, posesión y uso de armas quimicas, biologicas y nucleares, así como la introducción al territorio nacional de residuos nucleares y desechos toxicos.</p>)}
                         {renderArticle(82, <p>Es deber del Estado velar por la protección de la integridad del espacio público y por su destinación al uso comu, el cual prevalece sobre el interés particular.</p>)}
                         
                         <h3>CAPITULO 4: DE LA PROTECCION Y APLICACION DE LOS DERECHOS</h3>
                         {renderArticle(83, <p>Las actuaciones de los particulares y de las autoridades públicas deberán ceñirse a los postulados de la buena fe, la cual se presumira en todas las gestiones que aquellos adelanten ante estas.</p>)}
                         {renderArticle(84, <p>Cuando un derecho o una actividad hayan sido reglamentados de manera general, las autoridades públicas no podrán establecer ni exigir permisos, licencias o requisitos adicionales para su ejercicio.</p>)}
                         {renderArticle(85, <p>Son de aplicación inmediata los derechos consagrados en los artículos 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 26, 27, 28, 29, 30, 31, 33, 34, 37 y 40.</p>)}
                         {renderArticle(86, <p>Toda persona tendra acción de tutela para reclamar ante los jueces, en todo momento y lugar, mediante un procedimiento preferente y sumario, por si misma o por quien actue a su nombre, la protección inmediata de sus derechos constitucionales fundamentales...</p>)}
                         {renderArticle(87, <p>Toda persona podrá acudir ante la autoridad judicial para hacer efectivo el cumplimiento de una ley o un acto administrativo.</p>)}
                         {renderArticle(88, <p>La ley regulará las acciones populares para la protección de los derechos e intereses colectivos, relacionados con el patrimonio, el espacio, la seguridad y la salubridad públicos, la moral administrativa, el ambiente, la libre competencia económica y otros de similar naturaleza que se definen en ella.</p>)}
                         {renderArticle(89, <p>Además de los consagrados en los artículos anteriores, la ley establecerá los demás recursos, las acciones, y los procedimientos necesarios para que puedan propugnar por la integridad del orden jurídico, y por la protección de sus derechos individuales, de grupo o colectivos...</p>)}
                         {renderArticle(90, <p>El Estado responderá patrimonialmente por los daños antijurídicos que le sean imputables, causados por la acción o la omisión de las autoridades públicas.</p>)}
                         {renderArticle(91, <p>En caso de infracción manifiesta de un precepto constitucional en detrimento de alguna persona, el mandato superior no exime de responsabilidad al agente que lo ejecuta.</p>)}
                         {renderArticle(92, <p>Cualquier persona natural o jurídica podrá solicitar de la autoridad competente la aplicación de las sanciones penales o disciplinarias derivadas de la conducta de las autoridades públicas.</p>)}
                         {renderArticle(93, <p>Los tratados y convenios internacionales ratificados por el Congreso, que reconocen los derechos humanos y que prohíben su limitación en los estados de excepción, prevalecen en el orden interno.</p>)}
                         {renderArticle(94, <p>La enunciación de los derechos y garantías contenidos en la Constitución y en los convenios internacionales vigentes, no debe entenderse como negación de otros que, siendo inherentes a la persona humana, no figuren expresamente en ellos.</p>)}

                         <h3>CAPITULO 5: DE LOS DEBERES Y OBLIGACIONES</h3>
                         {renderArticle(95, <p>La calidad de colombiano enaltece a todos los miembros de la comunidad nacional. Todos están en el deber de engrandecerla y dignificarla. El ejercicio de los derechos y libertades reconocidos en esta Constitución implica responsabilidades...</p>)}
                    </section>

                    <hr className="my-10" />

                    <section id="titulo-3">
                        <h2>TÍTULO III: DE LOS HABITANTES Y DEL TERRITORIO</h2>
                         <h3>CAPITULO 1: DE LA NACIONALIDAD</h3>
                         {renderArticle(96, <>
                            <p>Son nacionales colombianos:</p>
                            <h5 className="font-semibold text-slate-700 pt-2 pb-1">1. Por nacimiento:</h5>
                            <ul className="list-[lower-alpha] list-outside pl-8 space-y-1">
                                <li>Los naturales de Colombia, que con una de dos condiciones: que el padre o la madre hayan sido naturales o nacionales colombianos o que, siendo hijos de extranjeros, alguno de sus padres estuviere domiciliado en la República en el momento del nacimiento.</li>
                                <li>Los hijos de padre o madre colombianos que hubieren nacido en tierra extranjera y luego se domiciliaren en territorio colombiano o registraren en una oficina consular de la República.</li>
                            </ul>
                            <h5 className="font-semibold text-slate-700 pt-2 pb-1">2. Por adopción:</h5>
                            <ul className="list-[lower-alpha] list-outside pl-8 space-y-1">
                                <li>Los extranjeros que soliciten y obtengan carta de naturalización, de acuerdo con la ley, la cual establecerá los casos en los cuales se pierde la nacionalidad colombiana por adopción.</li>
                                <li>Los Latinoamericanos y del Caribe por nacimiento domiciliados en Colombia, que con autorización del Gobierno y de acuerdo con la ley y el principio de reciprocidad, pidan ser inscritos como colombianos ante la municipalidad donde se establecieren.</li>
                                <li>Los miembros de los pueblos indígenas que comparten territorios fronterizos, con aplicación del principio de reciprocidad según tratados públicos.</li>
                            </ul>
                        </>)}
                         {renderArticle(97, <p>El colombiano, aunque haya renunciado a la calidad de nacional, que actue contra los intereses del pais en guerra exterior contra Colombia, será juzgado y penado como traidor.</p>)}
                        <h3>CAPITULO 2: DE LA CIUDADANIA</h3>
                         {renderArticle(98, <p>La ciudadania se pierde de hecho cuando se ha renunciado a la nacionalidad, y su ejercicio se puede suspender en virtud de decisión judicial en los casos que determine la ley.</p>)}
                         {renderArticle(99, <p>La calidad de ciudadano en ejercicio es condición previa e indispensable para ejercer el derecho de sufragio, para ser elegido y para desempeñar cargos públicos que lleven anexa autoridad o jurisdicción.</p>)}
                        <h3>CAPITULO 3: DE LOS EXTRANJEROS</h3>
                         {renderArticle(100, <p>Los extranjeros disfrutarán en Colombia de los mismos derechos civiles que se conceden a los colombianos. No obstante, la ley podrá, por razones de orden público, subordinar a condiciones especiales o negar el ejercicio de determinados derechos civiles a los extranjeros.</p>)}
                        <h3>CAPITULO 4: DEL TERRITORIO</h3>
                         {renderArticle(101, <p>Los limites de Colombia son los establecidos en los tratados internacionales aprobados por el Congreso, debidamente ratificados por el Presidente de la República, y los definidos por los laudos arbitrales en que sea parte la Nación.</p>)}
                         {renderArticle(102, <p>El territorio, con los bienes públicos que de el forman parte, pertenecen a la Nación.</p>)}
                    </section>

                    <hr className="my-10" />

                    <section id="titulo-4">
                        <h2>TÍTULO IV: DE LA PARTICIPACION DEMOCRATICA Y DE LOS PARTIDOS POLITICOS</h2>
                        <h3>CAPITULO 1: DE LAS FORMAS DE PARTICIPACION DEMOCRATICA</h3>
                         {renderArticle(103, <p>Son mecanismos de participación del pueblo en ejercicio de su soberanía: el voto, el plebiscito, el referendo, la consulta popular, el cabildo abierto, la iniciativa legislativa y la revocatoria del mandato.</p>)}
                         {renderArticle(104, <p>El Presidente de la República, con la firma de todos los ministros y previo concepto favorable del Senado de la República, podrá consultar al pueblo decisiones de trascendencia nacional.</p>)}
                         {renderArticle(105, <p>Previo cumplimiento de los requisitos y formalidades que señale el estatuto general de la organización territorial y en los casos que este determine, los Gobernadores y Alcaldes según el caso, podrán realizar consultas populares para decidir sobre asuntos de competencia del respectivo departamento o municipio.</p>)}
                         {renderArticle(106, <p>Previo el cumplimiento de los requisitos que la ley señale y en los casos que esta determine, los habitantes de las entidades territoriales podrán presentar proyectos sobre asuntos que son de competencia de la respectiva corporación pública...</p>)}
                        <h3>CAPITULO 2: DE LOS PARTIDOS Y DE LOS MOVIMIENTOS POLITICOS</h3>
                         {renderArticle(107, <p>Se garantiza a todos los ciudadanos el derecho a fundar, organizar y desarrollar partidos y movimientos políticos, y la libertad de afiliarse a ellos o de retirarse.</p>)}
                         {renderArticle(108, <p>El Consejo Nacional Electoral reconocerá Personeria Juridica a los partidos, movimientos políticos y grupos significativos de ciudadanos.</p>)}
                         {renderArticle(109, <p>El Estado concurrirá a la financiación del funcionamiento de los partidos y movimientos políticos con personería jurídica.</p>)}
                         {renderArticle(110, <p>Se prohíbe a quienes desempeñan funciones públicas hacer contribución alguna a los partidos, movimientos o candidatos, o inducir a otros a que lo hagan, salvo las excepciones que establezca la ley.</p>)}
                         {renderArticle(111, <p>Los partidos y movimientos políticos con personeria jurídica tienen derecho a utilizar los medios de comunicación que hagan uso del espectro electromagnetico, en todo tiempo, conforme a la ley.</p>)}
                         {renderArticle(112, <p>Los partidos y movimientos políticos con personeria jurídica que se declaren en oposición al Gobierno, podrán ejercer libremente la función critica frente a este, y plantear y desarrollar alternativas políticas.</p>)}
                    </section>

                    <hr className="my-10" />

                    <section id="titulo-5">
                        <h2>TÍTULO V: DE LA ORGANIZACION DEL ESTADO</h2>
                        <h3>CAPITULO 1: DE LA ESTRUCTURA DEL ESTADO</h3>
                        {renderArticle(113, <p>Son Ramas del Poder Público, la legislativa, la ejecutiva, y la judicial. Además de los órganos que las integran existen otros, autonomos e independientes, para el cumplimiento de las demás funciones del Estado.</p>)}
                        {renderArticle(114, <p>Corresponde al Congreso de la República reformar la Constitución, hacer las leyes y ejercer control político sobre el gobierno y la administración.</p>)}
                        {renderArticle(115, <p>El Presidente de la República es Jefe del Estado, Jefe del Gobierno y suprema autoridad administrativa.</p>)}
                        {renderArticle(116, <p>La Corte Constitucional, la Corte Suprema de Justicia, el Consejo de Estado, la Comisión Nacional de Disciplina Judicial, la Fiscalía General de la Nación, los Tribunales y los Jueces, administran Justicia.</p>)}
                        {renderArticle(117, <p>El Ministerio Público y la Contraloría General de la República son órganos de control.</p>)}
                        {renderArticle(118, <p>El Ministerio Público será ejercido por el Procurador General de la Nación, por el Defensor del Pueblo, por los procuradores delegados y los agentes del ministerio público, ante las autoridades jurisdiccionales...</p>)}
                        {renderArticle(119, <p>La Contraloría General de la República tiene a su cargo la vigilancia de la gestión fiscal y el control de resultado de la administración.</p>)}
                        {renderArticle(120, <p>La organización electoral esta conformada por el Consejo Nacional Electoral, por la Registraduria Nacional del Estado Civil y por los demás organismos que establezca la ley.</p>)}
                        {renderArticle(121, <p>Ninguna autoridad del Estado podrá ejercer funciones distintas de las que le atribuyen la Constitución y la ley.</p>)}
                        <h3>CAPITULO 2: DE LA FUNCION PUBLICA</h3>
                        {renderArticle(122, <p>No habrá empleo público que no tenga funciones detalladas en ley o reglamento y para proveer los de carácter remunerado se requiere que esten contemplados en la respectiva planta...</p>)}
                        {renderArticle(123, <p>Son servidores públicos los miembros de las corporaciones públicas, los empleados y trabajadores del Estado y de sus entidades descentralizadas territorialmente y por servicios.</p>)}
                        {renderArticle(124, <p>La ley determinará la responsabilidad de los servidores públicos y la manera de hacerla efectiva.</p>)}
                        {renderArticle(125, <p>Los empleos en los órganos y entidades del Estado son de carrera. Se exceptúan los de elección popular, los de libre nombramiento y remoción, los de trabajadores oficiales y los demás que determine la ley.</p>)}
                        {renderArticle(126, <p>Los servidores públicos no podrán en ejercicio de sus funciones, nombrar, postular, ni contratar con personas con las cuales tengan parentesco...</p>)}
                        {renderArticle(127, <p>Los servidores públicos no podrán celebrar, por si o por interpuesta persona, o en representación de otro, contrato alguno con entidades públicas o con personas privadas que manejen o administren recursos públicos, salvo las excepciones legales.</p>)}
                        {renderArticle(128, <p>Nadie podrá desempeñar simultáneamente mas de un empleo público ni recibir mas de una asignación que provenga del tesoro público...</p>)}
                        {renderArticle(129, <p>Los servidores públicos no podrán aceptar cargos, honores o recompensas de gobiernos extranjeros u organismos internacionales, ni celebrar contratos con ellos, sin previa autorización del Gobierno.</p>)}
                        {renderArticle(130, <p>Habra una Comisión Nacional del Servicio Civil responsable de la administración y vigilancia de las carreras de los servidores públicos, excepción hecha de las que tengan carácter especial.</p>)}
                        {renderArticle(131, <p>Compete a la ley la reglamentación del servicio público que prestan los notarios y registradores, la definición del régimen laboral para sus empleados y lo relativo a los aportes como tributación especial de las notarias...</p>)}
                    </section>

                    <hr className="my-10" />

                    <section id="titulo-6">
                        <h2>TÍTULO VI: DE LA RAMA LEGISLATIVA</h2>
                        <h3>CAPITULO 1: DE LA COMPOSICION Y LAS FUNCIONES</h3>
                        {renderArticle(132, <p>Los senadores y los representantes serán elegidos para un periodo de cuatro años, que se inicia el 20 de julio siguiente a la elección.</p>)}
                        {renderArticle(133, <p>Los miembros de cuerpos colegiados de elección directa representan al pueblo, y deberán actuar consultando la justicia y el bien común...</p>)}
                        {renderArticle(134, <p>Los miembros de las Corporaciones Públicas de elección popular no tendrán suplentes...</p>)}
                        {renderArticle(135, <p>Son facultades de cada Cámara...</p>)}
                        {renderArticle(136, <p>Se prohíbe al Congreso y a cada una de sus Cámaras: 1. Inmiscuirse, por medio de resoluciones o de leyes, en asuntos de competencia privativa de otras autoridades...</p>)}
                        {renderArticle(137, <p>Cualquier comisión permanente podrá emplazar a toda persona natural o jurídica, para que en sesión especial rinda declaraciones orales o escritas...</p>)}
                        <h3>CAPITULO 2: DE LA REUNION Y EL FUNCIONAMIENTO</h3>
                        {renderArticle(138, <p>El Congreso, por derecho propio se reunirá en sesiones ordinarias, durante dos periodos por año, que constituirán una sola legislatura...</p>)}
                        {renderArticle(139, <p>Las sesiones del Congreso serán instaladas y clausuradas conjunta y públicamente por el Presidente de la República...</p>)}
                        {renderArticle(140, <p>El Congreso tiene su sede en la capital de la República.</p>)}
                        {renderArticle(141, <p>El Congreso se reunira en un solo cuerpo uicamente para la instalación y clausura de sus sesiones, para dar posesión al Presidente de la República...</p>)}
                        {renderArticle(142, <p>Cada Cámara elegira, para el respectivo periodo constitucional, comisiones permanentes que tramitarán en primer debate los proyectos de acto legislativo o de ley.</p>)}
                        {renderArticle(143, <p>El Senado de la República y la Cámara de Representantes podrán disponer que cualquierá de las comisiones permanentes sesione durante el receso...</p>)}
                        {renderArticle(144, <p>Las sesiones de las Cámaras y de sus Comisiones Permanentes serán públicas, con las limitaciones a que haya lugar conforme a su reglamento.</p>)}
                        {renderArticle(145, <p>El Congreso pleno, las Cámaras y sus comisiones no podrán abrir sesiones ni deliberar con menos de una cuarta parte de sus miembros...</p>)}
                        {renderArticle(146, <p>En el Congreso pleno, en las Cámaras y en sus comisiones permanentes, las decisiones se tomarán por la mayoría de los votos de los asistentes...</p>)}
                        {renderArticle(147, <p>Las mesas directivas de las cámaras y de sus comisiones permanentes serán renovadas cada año, para la legislatura que se inicia el 20 de julio...</p>)}
                        {renderArticle(148, <p>Las normas sobre quorum y mayorías decisorias regirán también para las demás corporaciones públicas de elección popular.</p>)}
                        {renderArticle(149, <p>Toda reunion de miembros del Congreso que, con el proposito de ejercer funciones propias de la rama legislativa del poder público, se efectue fuerá de las condiciones constitucionales, carecerá de validez...</p>)}
                        <h3>CAPITULO 3: DE LAS LEYES</h3>
                        {renderArticle(150, <p>Corresponde al Congreso hacer las leyes. Por medio de ellas ejerce las siguientes funciones...</p>)}
                        {renderArticle(151, <p>El Congreso expedira leyes organicas a las cuales estará sujeto el ejercicio de la actividad legislativa.</p>)}
                        {renderArticle(152, <p>Mediante las leyes estatutarias, el Congreso de la República regulará las siguientes materias...</p>)}
                        {renderArticle(153, <p>La aprobación, modificación o derogación de las leyes estatutarias exigira la mayoría absoluta de los miembros del Congreso y deberá efectuarse dentro de una sola legislatura.</p>)}
                        {renderArticle(154, <p>Las leyes pueden tener origen en cualquierá de las Cámaras a propuesta de sus respectivos miembros, del Gobierno Nacional, de las entidades señaladas en el artículo 156, o por iniciativa popular...</p>)}
                        {renderArticle(155, <p>Podran presentar proyectos de ley o de reforma constitucional, un número de ciudadanos igual o superior al cinco por ciento del censo electoral existente...</p>)}
                        {renderArticle(156, <p>La Corte Constitucional, el Consejo Superior de la Judicatura, la Corte Suprema de Justicia, el Consejo de Estado, el Consejo Nacional Electoral, el Procurador General de la Nación, el Contralor General de la República, tienen la facultad de presentar proyectos de ley en materias relacionadas con sus funciones.</p>)}
                        {renderArticle(157, <p>Ningún proyecto será ley sin los requisitos siguientes...</p>)}
                        {renderArticle(158, <p>Todo proyecto de ley debe referirse a una misma materia y serán inadmisibles las disposiciones o modificaciones que no se relacionen con ella.</p>)}
                        {renderArticle(159, <p>El proyecto de ley que hubiere sido negado en primer debate podrá ser considerado por la respectiva camará a solicitud de su autor...</p>)}
                        {renderArticle(160, <p>Entre el primero y el segundo debate deberá mediar un lapso no inferior a ocho dias, y entre la aprobación del proyecto en una de las cámaras y la iniciación del debate en la otra, deberán transcurrir por lo menos quince dias.</p>)}
                        {renderArticle(161, <p>Cuando surgieren discrepancias en las Cámaras respecto de un proyecto, ambas integrarán comisiones de conciliadores...</p>)}
                        {renderArticle(162, <p>Los proyectos de ley que no hubieren completado su trámite en una legislatura y que hubieren recibido primer debate en alguna de las cámaras, continuarán su curso en la siguiente...</p>)}
                        {renderArticle(163, <p>El Presidente de la República podrá solicitar trámite de urgencia para cualquier proyecto de ley.</p>)}
                        {renderArticle(164, <p>El Congreso dará prioridad al trámite de los proyectos de ley aprobatorios de los tratados sobre derechos humanos que sean sometidos a su consideración por el Gobierno.</p>)}
                        {renderArticle(165, <p>Aprobado un proyecto de ley por ambas cámaras, pasará al Gobierno para su sanción...</p>)}
                        {renderArticle(166, <p>El Gobierno dispone del término de seis dias para devolver con objeciones cualquier proyecto cuando no conste de mas de veinte artículos...</p>)}
                        {renderArticle(167, <p>El proyecto de ley objetado total o parcialmente por el Gobierno volverá a las Cámaras a segundo debate.</p>)}
                        {renderArticle(168, <p>Si el Presidente no cumpliere el deber de sancionar las leyes en los términos y según las condiciones que la Constitución establece, las sancionará y promulgará el Presidente del Congreso.</p>)}
                        {renderArticle(169, <p>El título de las leyes deberá corresponder precisamente a su contenido, y a su texto precederá esta formula: 'El Congreso de Colombia, DECRETA'.</p>)}
                        {renderArticle(170, <p>Un número de ciudadanos equivalente a la decima parte del censo electoral, podrá solicitar ante la organización electoral la convocación de un referendo para la derogatoria de una ley.</p>)}
                        <h3>CAPITULO 4: DEL SENADO</h3>
                        {renderArticle(171, <p>El Senado de la República estará integrado por cien miembros elegidos en circunscripción nacional.</p>)}
                        {renderArticle(172, <p>Para ser elegido senador se requiere ser colombiano de nacimiento, ciudadano en ejercicio y tener mas de treinta años de edad en la fecha de la elección.</p>)}
                        {renderArticle(173, <p>Son atribuciones del Senado...</p>)}
                        {renderArticle(174, <p>Corresponde al Senado conocer de las acusaciones que formule la Cámara de Representantes contra el Presidente de la República o quien haga sus veces...</p>)}
                        {renderArticle(175, <p>En los juicios que se sigan ante el Senado, se observarán estas reglas...</p>)}
                        <h3>CAPITULO 5: DE LA CAMARA DE REPRESENTANTES</h3>
                        {renderArticle(176, <p>La Cámara de Representantes se elegira en circunscripciones territoriales y circunscripciones especiales.</p>)}
                        {renderArticle(177, <p>Para ser elegido representante se requiere ser ciudadano en ejercicio y tener mas de veinticinco años de edad en la fecha de la elección.</p>)}
                        {renderArticle(178, <p>La Cámara de Representantes tendra las siguientes atribuciones especiales...</p>)}
                        <h3>CAPITULO 6: DE LOS CONGRESISTAS</h3>
                        {renderArticle(179, <p>No podrán ser congresistas...</p>)}
                        {renderArticle(180, <p>Los congresistas no podrán...</p>)}
                        {renderArticle(181, <p>Las incompatibilidades de los congresistas tendrán vigencia durante el período constitucional respectivo.</p>)}
                        {renderArticle(182, <p>Los congresistas deberán poner en conocimiento de la respectiva Cámara las situaciones de carácter moral o económico que los inhiban para participar en el trámite de los asuntos sometidos a su consideración.</p>)}
                        {renderArticle(183, <p>Los congresistas perderan su investidura...</p>)}
                        {renderArticle(184, <p>La perdida de la investidura será decretada por el Consejo de Estado de acuerdo con la ley...</p>)}
                        {renderArticle(185, <p>Los congresistas serán inviolables por las opiniones y los votos que emitan en el ejercicio del cargo...</p>)}
                        {renderArticle(186, <p>De los delitos que cometan los Congresistas, conocerá en forma privativa la Corte Suprema de Justicia...</p>)}
                        {renderArticle(187, <p>La asignación de los miembros del Congreso se reajustará cada año en proporción igual al promedio ponderado de los cambios ocurridos en la remuneración de los servidores de la administración central...</p>)}
                    </section>
                    
                    <hr className="my-10" />

                    <section id="titulo-7">
                        <h2>TÍTULO VII: DE LA RAMA EJECUTIVA</h2>
                        {renderArticle(188, <p>El Presidente de la República simboliza la unidad nacional y al jurar el cumplimiento de la Constitución y de las leyes, se obliga a garantizar los derechos y libertades de todos los colombianos.</p>)}
                        {renderArticle(189, <p>Corresponde al Presidente de la República como Jefe de Estado, Jefe del Gobierno y Suprema Autoridad Administrativa...</p>)}
                        {renderArticle(190, <p>El Presidente de la República será elegido para un periodo de cuatro años, por la mitad mas uno de los votos que, de manera secreta y directa, depositen los ciudadanos...</p>)}
                        {renderArticle(191, <p>Para ser Presidente de la República se requiere ser colombiano por nacimiento, ciudadano en ejercicio y mayor de treinta años.</p>)}
                        {renderArticle(192, <p>El Presidente de la República tomará posesión de su destino ante el Congreso, y prestará juramento en estos términos: 'Juro a Dios y prometo al pueblo cumplir fielmente la Constitución y las leyes de Colombia'.</p>)}
                        {renderArticle(193, <p>Corresponde al Senado conceder licencia al Presidente de la República para separarse temporalmente del cargo.</p>)}
                        {renderArticle(194, <p>Son faltas absolutas del Presidente de la República su muerte, su renuncia aceptada, la destitución decretada por sentencia, la incapacidad física permanente y el abandono del cargo...</p>)}
                        {renderArticle(195, <p>El encargado del Ejecutivo tendra la misma preeminencia y las mismas atribuciones que el Presidente, cuyas veces hace.</p>)}
                        {renderArticle(196, <p>El Presidente de la República, o quien haga sus veces, no podrá trasladarse a territorio extranjero durante el ejercicio de su cargo, sin previo aviso al Senado...</p>)}
                        {renderArticle(197, <p>No podrá ser elegido Presidente de la República el ciudadano que a cualquier título hubiere ejercido la Presidencia...</p>)}
                        {renderArticle(198, <p>El Presidente de la República, o quien haga sus veces, será responsable de sus actos u omisiones que violen la Constitución o las leyes.</p>)}
                        {renderArticle(199, <p>El Presidente de la República, durante el periodo para el que sea elegido, o quien se halle encargado de la Presidencia, no podrá ser perseguido ni juzgado por delitos, sino en virtud de acusación de la Cámara de Representantes...</p>)}
                        {renderArticle(200, <p>Corresponde al Gobierno, en relación con el Congreso...</p>)}
                        {renderArticle(201, <p>Corresponde al Gobierno, en relación con la Rama Judicial...</p>)}
                        {renderArticle(202, <p>El Vicepresidente de la República será elegido por votación popular el mismo dia y en la misma formula con el Presidente de la República.</p>)}
                        {renderArticle(203, <p>A falta del Vicepresidente cuando estuvierá ejerciendo la Presidencia, esta será asumida por un Ministro en el orden que establezca la ley.</p>)}
                        {renderArticle(204, <p>Para ser elegido Vicepresidente se requieren las mismas calidades que para ser Presidente de la República.</p>)}
                        {renderArticle(205, <p>En caso de falta absoluta del Vicepresidente, el Congreso se reunira por derecho propio, o por convocatoria del Presidente de la República, a fin de elegir a quien haya de remplazarlo para el resto del periodo.</p>)}
                        {renderArticle(206, <p>El número, denominación y orden de precedencia de los ministerios y departamentos administrativos serán determinados por la ley.</p>)}
                        {renderArticle(207, <p>Para ser ministro o director de departamento administrativo se requieren las mismas calidades que para ser representante a la Cámara.</p>)}
                        {renderArticle(208, <p>Los ministros y los directores de departamentos administrativos son los jefes de la administración en su respectiva dependencia...</p>)}
                        {renderArticle(209, <p>La función administrativa esta al servicio de los intereses generales y se desarrolla con fundamento en los principios de igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad...</p>)}
                        {renderArticle(210, <p>Las entidades del orden nacional descentralizadas por servicios solo pueden ser creadas por ley o por autorización de esta, con fundamento en los principios que orientan la actividad administrativa.</p>)}
                        {renderArticle(211, <p>La ley señalará las funciones que el Presidente de la República podrá delegar en los ministros, directores de departamentos administrativos, representantes legales de entidades descentralizadas...</p>)}
                        {renderArticle(212, <p>El Presidente de la República, con la firma de todos los ministros, podrá declarar el Estado de Guerra Exterior.</p>)}
                        {renderArticle(213, <p>En caso de grave perturbación del orden público que atente de manera inminente contra la estabilidad institucional, la seguridad del Estado, o la convivencia ciudadana...</p>)}
                        {renderArticle(214, <p>Los Estados de Excepción a que se refieren los artículos anteriores se someteran a las siguientes disposiciones...</p>)}
                        {renderArticle(215, <p>Cuando sobrevengan hechos distintos de los previstos en los artículos 212 y 213 que perturben o amenacen perturbar en forma grave e inminente el orden económico, social y ecológico del pais...</p>)}
                        {renderArticle(216, <p>La fuerza pública estará integrada en forma exclusiva por las Fuerzas Militares y la Policia Nacional.</p>)}
                        {renderArticle(217, <p>La Nación tendra para su defensa unas Fuerzas Militares permanentes constituidas por el Ejercito, la Armada y la Fuerza Aerea.</p>)}
                        {renderArticle(218, <p>La ley organizará el cuerpo de Policia.</p>)}
                        {renderArticle(219, <p>La Fuerza Pública no es deliberante; no podrá reunirse sino por orden de autoridad legitima, ni dirigir peticiones, excepto sobre asuntos que se relacionen con el servicio y la moralidad del respectivo cuerpo...</p>)}
                        {renderArticle(220, <p>Los miembros de la Fuerza Pública no pueden ser privados de sus grados, honores y pensiones, sino en los casos y del modo que determine la Ley.</p>)}
                        {renderArticle(221, <p>De las conductas punibles cometidas por los miembros de la Fuerza Pública en servicio activo, y en relación con el mismo servicio, conocerán las cortes marciales o tribunales militares...</p>)}
                        {renderArticle(222, <p>La ley determinará los sistemas de promoción profesional, cultural y social de los miembros de la Fuerza Pública.</p>)}
                        {renderArticle(223, <p>Solo el Gobierno puede introducir y fabricar armas, municiones de guerra y explosivos.</p>)}
                        {renderArticle(224, <p>Los tratados, para su validez, deberán ser aprobados por el Congreso.</p>)}
                        {renderArticle(225, <p>La Comisión Asesora de Relaciones Exteriores, cuya composición será determinada por la ley, es cuerpo consultivo del Presidente de la República.</p>)}
                        {renderArticle(226, <p>El Estado promoverá la internacionalización de las relaciones políticas, económicas, sociales y ecológicas sobre bases de equidad, reciprocidad y conveniencia nacional.</p>)}
                        {renderArticle(227, <p>El Estado promoverá la integración económica, social y política con las demás naciones y especialmente, con los países de America Latina y del Caribe...</p>)}
                    </section>
                    
                    <hr className="my-10" />
                    
                    <section id="titulo-8">
                         <h2>TÍTULO VIII: DE LA RAMA JUDICIAL</h2>
                         {renderArticle(228, <p>La Administración de Justicia es función pública. Sus decisiones son independientes. Las actuaciones serán públicas y permanentes con las excepciones que establezca la ley y en ellas prevalecerá el derecho sustancial.</p>)}
                         {renderArticle(229, <p>Se garantiza el derecho de toda persona para acceder a la administración de justicia. La ley indicará en que casos podrá hacerlo sin la representación de abogado.</p>)}
                         {renderArticle(230, <p>Los jueces, en sus providencias, solo están sometidos al imperio de la ley. La equidad, la jurisprudencia, los principios generales del derecho y la doctrina son criterios auxiliares de la actividad judicial.</p>)}
                         {renderArticle(231, <p>Los Magistrados de la Corte Suprema de Justicia y del Consejo de Estado serán elegidos por la respectiva Corporación, previa audiencia pública, de lista de diez elegibles enviada por el Consejo de Gobierno Judicial...</p>)}
                         {renderArticle(232, <p>Para ser Magistrado de la Corte Constitucional, de la Corte Suprema de Justicia y del Consejo de Estado se requiere...</p>)}
                         {renderArticle(233, <p>Los Magistrados de la Corte Constitucional, de la Corte Suprema de Justicia, y del Consejo de Estado serán elegidos para periodos individuales de ocho años, no podrán ser reelegidos...</p>)}
                         {renderArticle(234, <p>La Corte Suprema de Justicia es el maximo Tribunal de la Jurisdicción Ordinaria y se compondrá del número impar de Magistrados que determine la ley.</p>)}
                         {renderArticle(235, <p>Son atribuciones de la Corte Suprema de Justicia...</p>)}
                         {renderArticle(236, <p>El Consejo de Estado tendra el número impar de Magistrados que determine la ley.</p>)}
                         {renderArticle(237, <p>Son atribuciones del Consejo de Estado...</p>)}
                         {renderArticle(238, <p>La jurisdicción de lo contencioso administrativo podrá suspender provisionalmente, por los motivos y con los requisitos que establezca la ley, los efectos de los actos administrativos que sean susceptibles de impugnación por via judicial.</p>)}
                         {renderArticle(239, <p>La Corte Constitucional tendra el número impar de miembros que determine la ley.</p>)}
                         {renderArticle(240, <p>No podrán ser elegidos Magistrados de la Corte Constitucional quienes durante el año anterior a la elección se hayan desempeñado como Ministros del Despacho o Magistrados de la Corte Suprema de Justicia o del Consejo de Estado.</p>)}
                         {renderArticle(241, <p>A la Corte Constitucional se le confia la guarda de la integridad y supremacia de la Constitución, en los estrictos y precisos términos de este artículo.</p>)}
                         {renderArticle(242, <p>Los procesos que se adelanten ante la Corte Constitucional en las materias a que se refiere este título, serán regulados por la ley...</p>)}
                         {renderArticle(243, <p>Los fallos que la Corte dicte en ejercicio del control jurisdiccional hacen transito a cosa juzgada constitucional.</p>)}
                         {renderArticle(244, <p>La Corte Constitucional comunicará al Presidente de la República o al Presidente del Congreso, según el caso, la iniciación de cualquier proceso que tenga por objeto el examen de constitucionalidad de normas dictadas por ellos.</p>)}
                         {renderArticle(245, <p>El Gobierno no podrá conferir empleo a los Magistrados de la Corte Constitucional durante el periodo de ejercicio de sus funciones ni dentro del año siguiente a su retiro.</p>)}
                         {renderArticle(246, <p>Las autoridades de los pueblos indigenas podrán ejercer funciones jurisdiccionales dentro de su ámbito territorial, de conformidad con sus propias normas y procedimientos...</p>)}
                         {renderArticle(247, <p>La ley podrá crear jueces de paz encargados de resolver en equidad conflictos individuales y comunitarios.</p>)}
                         {renderArticle(248, <p>Unicamente las condenas proferidas en Sentencias judiciales en forma definitiva tienen la calidad de antecedentes penales y contravencionales en todos los ordenes legales.</p>)}
                         {renderArticle(249, <p>La Fiscalia General de la Nación estará integrada por el Fiscal General, los fiscales delegados y los demás funcionarios que determine la ley.</p>)}
                         {renderArticle(250, <p>La Fiscalia General de la Nación esta obligada a adelantar el ejercicio de la acción penal y realizar la investigación de los hechos que revistan las carácteristicas de un delito...</p>)}
                         {renderArticle(251, <p>Son funciones especiales del Fiscal General de la Nación...</p>)}
                         {renderArticle(252, <p>Aun durante los Estados de Excepción de que trata la Constitución en sus artículos 212 y 213, el Gobierno no podrá suprimir, ni modificar los organismos ni las funciones básicas de acusación y juzgamiento.</p>)}
                         {renderArticle(253, <p>La ley determinará lo relativo a la estructura y funcionamiento de la Fiscalia General de la Nación, al ingreso por carrerá y al retiro del servicio...</p>)}
                         {renderArticle(254, <p>El Consejo Superior de la Judicatura se dividirá en dos salas...</p>)}
                         {renderArticle(255, <p>Para ser miembro del Consejo Superior de la Judicatura se requiere ser colombiano por nacimiento, ciudadano en ejercicio, y mayor de treinta y cinco años...</p>)}
                         {renderArticle(256, <p>Corresponden al Consejo Superior de la Judicatura o a los Consejos Seccionales, según el caso y de acuerdo a la ley, las siguientes atribuciones...</p>)}
                         {renderArticle(257, <p>Con sujeción a la ley, el Consejo Superior de la Judicatura cumplira las siguientes funciones...</p>)}
                    </section>

                    <hr className="my-10" />

                    <section id="titulo-9">
                        <h2>TÍTULO IX: DE LAS ELECCIONES Y DE LA ORGANIZACION ELECTORAL</h2>
                        {renderArticle(258, <p>El voto es un derecho y un deber ciudadano. El Estado velará porque se ejerza sin ningún tipo de coacción y en forma secreta por los ciudadanos...</p>)}
                        {renderArticle(259, <p>Quienes elijan gobernadores y alcaldes, imponen por mandato al elegido el programa que presento al inscribirse como candidato.</p>)}
                        {renderArticle(260, <p>Los ciudadanos eligen en forma directa Presidente y Vicepresidente de la República, Senadores, Representantes, Gobernadores, Diputados, Alcaldes, Concejales municipales y distritales...</p>)}
                        {renderArticle(261, <p>La elección del Presidente y Vicepresidente no podrá coincidir con otra elección. La de Congreso se hará en fecha separada de la elección de autoridades departamentales y municipales.</p>)}
                        {renderArticle(262, <p>Los partidos, movimientos políticos y grupos significativos de ciudadanos que decidan participar en procesos de elección popular, inscribirán candidatos propios o en coalición a cargos uninominales y listas únicas a Cuerpos Colegiados...</p>)}
                        {renderArticle(263, <p>Para garantizar la equitativa representación de los Partidos y Movimientos Politicos y grupos significativos de ciudadanos, las curules de las Corporaciones Públicas se distribuirán mediante el sistema de cifra repartidora...</p>)}
                        {renderArticle(264, <p>El Consejo Nacional Electoral se compondrá de nueve (9) miembros elegidos por el Congreso de la República en pleno, para un periodo institucional de cuatro (4) años...</p>)}
                        {renderArticle(265, <p>El Consejo Nacional Electoral regulara, inspeccionara, vigilará y controlará toda la actividad electoral de los partidos y movimientos políticos...</p>)}
                        {renderArticle(266, <p>El Registrador Nacional del Estado Civil será escogido por los Presidentes de la Corte Constitucional, la Corte Suprema de Justicia y el Consejo de Estado, mediante concurso de meritos organizado según la ley.</p>)}
                    </section>

                    <hr className="my-10" />

                    <section id="titulo-10">
                        <h2>TÍTULO X: DE LOS ORGANISMOS DE CONTROL</h2>
                        {renderArticle(267, <p>La vigilancia y el control fiscal son una función pública que ejercerá la Contraloría General de la República, la cual vigila la gestión fiscal de la administración y de los particulares o entidades que manejen fondos o bienes públicos...</p>)}
                        {renderArticle(268, <p>El Contralor General de la República tendra las siguientes atribuciones...</p>)}
                        {renderArticle(269, <p>En las entidades públicas, las autoridades correspondientes están obligadas a diseñar y aplicar, según la naturaleza de sus funciones, métodos y procedimientos de control interno...</p>)}
                        {renderArticle(270, <p>La ley organizará las formas y los sistemas de participación ciudadana que permitan vigilar la gestión pública que se cumpla en los diversos niveles administrativos y sus resultados.</p>)}
                        {renderArticle(271, <p>Los resultados de los ejercicios de vigilancia y control fiscal, así como de las indagaciones preliminares o los procesos de responsabilidad fiscal, adelantados por las Contralorías tendrán valor probatorio ante la Fiscalia General de la Nación y el juez competente.</p>)}
                        {renderArticle(272, <p>La vigilancia de la gestión fiscal de los departamentos, distritos y municipios donde haya contralorias, corresponde a estas en forma concurrente con la Contraloría General de la República.</p>)}
                        {renderArticle(273, <p>A solicitud de cualquierá de los proponentes, el Contralor General de la República y demás autoridades de control fiscal competentes, ordenarán que el acto de adjudicación de una licitación tenga lugar en audiencia pública.</p>)}
                        {renderArticle(274, <p>La vigilancia de la gestión fiscal de la Contraloría General de la República se ejercerá por un auditor elegido para periodos de dos años por el Consejo de Estado...</p>)}
                        {renderArticle(275, <p>El Procurador General de la Nación es el supremo director del Ministerio Público.</p>)}
                        {renderArticle(276, <p>El Procurador General de la Nación será elegido por el Senado, para un periodo de cuatro años, de terna integrada por candidatos del Presidente de la República, la Corte Suprema de Justicia y el Consejo de Estado.</p>)}
                        {renderArticle(277, <p>El Procurador General de la Nación, por si o por medio de sus delegados y agentes, tendra las siguientes funciones...</p>)}
                        {renderArticle(278, <p>El Procurador General de la Nación ejercerá directamente las siguientes funciones...</p>)}
                        {renderArticle(279, <p>La ley determinará lo relativo a la estructura y al funcionamiento de la Procuraduría General de la Nación...</p>)}
                        {renderArticle(280, <p>Los agentes del Ministerio Público tendrán las mismas calidades, categoria, remuneración, derechos y prestaciones de los magistrados y jueces de mayor jerarquia ante quienes ejerzan el cargo.</p>)}
                        {/* Fix: Corrected typo 'renderA' to a valid 'renderArticle' call. */}
                        {renderArticle(281, <p>El Defensor del Pueblo ejercerá sus funciones de manera autónoma. Será elegido por la Cámara de Representantes para un período institucional de cuatro años de terna elaborada por el Presidente de la República.</p>)}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Constitution;