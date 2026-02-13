import Link from 'next/link';

export default function Unidad2Guia1() {
  return (
    <div className="unidad-container">
      <div className="unidad-content">
        <div className="mb-6 flex justify-between items-center">
          <Link href="/unidad/2" className="text-blue-600 hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Unidad 2
          </Link>
          
          <Link href="/unidad/2/guia2" className="text-gray-500 hover:text-blue-600 hover:underline flex items-center text-sm">
            Siguiente: Guía 2
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <h1 className="unidad-titulo">
          Unidad 2 - Guía 1: El orden conservador (1880-1916)
        </h1>

        <section className='guia-section'>
          <h2 className='guia-titulo-blue'>Guía de lectura: Romero, Cap. I</h2>

          <div className='conceptos-container'>
            <div className='concepto-box'>
              <h4 className='concepto-titulo'>
                1. Autoridad del Estado y sujetos subordinados
              </h4>
              <p className='concepto-texto'>
                Hacia 1880, el Estado nacional consolidó su autoridad mediante
                el control del ejército (monopolio de la fuerza), la
                federalización de Buenos Aires y la derrota de las resistencias
                provinciales. Los principales subordinados fueron los caudillos
                y gobiernos provinciales, así como las sociedades indígenas
                sometidas durante la expansión territorial.
              </p>
            </div>

            <div className='concepto-box-blue'>
              <h4 className='concepto-titulo'>2. Economía Agroexportadora</h4>
              <p className='concepto-texto'>
                Se caracterizó por la exportación de productos agropecuarios y
                la importación de bienes industriales. Argentina funcionaba como
                una periferia del mercado mundial, altamente vulnerable a las
                crisis externas y dependiente de la demanda de los centros
                industriales.
              </p>
            </div>

            <div className='concepto-box'>
              <h4 className='concepto-titulo'>3. Inversiones Británicas</h4>
              <p className='concepto-texto'>
                Fueron fundamentales para infraestructura: ferrocarriles (para
                transportar la producción al puerto), frigoríficos, puertos y
                préstamos al Estado.
              </p>
            </div>

            <h3 className='subseccion-titulo'>Inmigración y Tierra</h3>

            <div className='concepto-box-green'>
              <h4 className='concepto-titulo'>4. Rol de la Inmigración</h4>
              <p className='concepto-texto'>
                Para la Generación del 80, la inmigración era la solución a la
                &quot;escasez de mano de obra&quot; y una herramienta de
                civilización.
              </p>
            </div>

            <div className='concepto-box'>
              <h4 className='concepto-titulo'>5. Origen y Destino</h4>
              <p className='concepto-texto'>
                Llegaron mayormente de Italia y España por la crisis en Europa y
                la promesa de ascenso social en Argentina. Trabajaron en el
                campo (arrendatarios) y en la ciudad (puertos, construcción,
                servicios).
              </p>
            </div>

            <div className='concepto-box-yellow'>
              <h4 className='concepto-titulo'>6. Propiedad de la Tierra</h4>
              <p className='concepto-texto'>
                La gran propiedad terrateniente perduró porque las tierras ya
                estaban concentradas en pocas manos antes de la gran ola
                inmigratoria, lo que obligó a los extranjeros a ser
                arrendatarios o colonos en lugar de dueños.
              </p>
            </div>

            <div className='concepto-box'>
              <h4 className='concepto-titulo'>7. Lugar de la Industria</h4>
              <p className='concepto-texto'>
                Ocupó un lugar subordinado, limitada al procesamiento de carnes
                (frigoríficos), harinas y algunos bienes de consumo inmediato
                que no competían con las importaciones británicas.
              </p>
            </div>

            <h3 className='subseccion-titulo'>
              Régimen Político y Prácticas Electorales
            </h3>

            <div className='concepto-box-purple'>
              <h4 className='concepto-titulo'>8. Poder Presidencial</h4>
              <p className='concepto-texto'>
                Basado en una fuerte autoridad que controlaba la sucesión y los
                recursos estatales.
              </p>
            </div>

            <div className='concepto-box-red'>
              <h4 className='concepto-titulo'>9. Prácticas Electorales</h4>
              <p className='concepto-texto'>
                Se aplicaba el voto cantado, el fraude y la manipulación de
                padrones. Se recurría al control del partido oficialista (PAN)
                para monopolizar el aparato estatal.
              </p>
            </div>

            <div className='concepto-box'>
              <h4 className='concepto-titulo'>10. Participación Política</h4>
              <p className='concepto-texto'>
                El régimen era &quot;oligárquico&quot;: participaba una élite
                reducida mientras la mayoría de la población estaba marginada de
                las decisiones.
              </p>
            </div>

            <h3 className='subseccion-titulo'>Leyes Laicas y Educación</h3>

            <div className='concepto-box-indigo'>
              <h4 className='concepto-titulo'>
                11. Propósito de las Leyes Laicas
              </h4>
              <p className='concepto-texto'>
                El Estado buscaba imponer su autoridad sobre la Iglesia y
                unificar a una población heterogénea de inmigrantes.
              </p>
            </div>

            <div className='concepto-box-green'>
              <h4 className='concepto-titulo'>12. Ley 1420 - Educación</h4>
              <p className='concepto-texto'>
                La Ley 1420 (educación común, laica y gratuita) fue la principal
                herramienta de nacionalización, inculcando un sentimiento
                patriótico y desplazando la influencia religiosa de la
                educación.
              </p>
            </div>

            <h3 className='subseccion-titulo'>Conflictos y el Centenario</h3>

            <div className='concepto-box-orange'>
              <h4 className='concepto-titulo'>
                13. Preocupación por la &quot;Cuestión Social&quot;
              </h4>
              <p className='concepto-texto'>
                Hacia 1910, había una gran preocupación por la &quot;cuestión
                social&quot; (huelgas, anarquismo) y la pérdida de valores
                tradicionales.
              </p>
            </div>

            <div className='concepto-box-red'>
              <h4 className='concepto-titulo'>14. Resolución del Conflicto</h4>
              <p className='concepto-texto'>
                Se resolvió con una mezcla de represión (Estado de Sitio) y
                reforma (tibias leyes laborales).
              </p>
            </div>

            <h3 className='subseccion-titulo'>
              Surgimiento de la UCR y Reforma Electoral
            </h3>

            <div className='concepto-box'>
              <h4 className='concepto-titulo'>15. Nuevos Partidos Políticos</h4>
              <p className='concepto-texto'>
                Surgieron el Partido Socialista (vía parlamentaria) y el
                Anarquismo (acción directa/huelgas).
              </p>
            </div>

            <div className='concepto-box-blue'>
              <h4 className='concepto-titulo'>16. Surgimiento de la UCR</h4>
              <p className='concepto-texto'>
                Surgió como una fuerza de &quot;impugnación&quot; que exigía
                pureza electoral y utilizaba la abstención para deslegitimar al
                régimen conservador.
              </p>
            </div>

            <div className='concepto-box-yellow'>
              <h4 className='concepto-titulo'>
                17. Contexto de la Ley Electoral
              </h4>
              <p className='concepto-texto'>
                Se sanciona en un clima de alta conflictividad social y ante la
                necesidad de la élite de ganar legitimidad antes de que el
                sistema colapsara.
              </p>
            </div>

            <div className='concepto-box-green'>
              <h4 className='concepto-titulo'>18. Ley Sáenz Peña y 1916</h4>
              <p className='concepto-texto mb-2'>
                Estableció el voto universal, secreto y obligatorio. Su
                propósito era modernizar el régimen y que los opositores (UCR)
                aceptaran las reglas del sistema.
              </p>
              <p className='concepto-texto font-semibold'>
                Resultado: En 1916, su aplicación resultó en el triunfo de
                Hipólito Yrigoyen y el fin del predominio del PAN.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Link href="/unidad/2/guia2" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center">
              Ir a Guía 2: Gobiernos Radicales
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
