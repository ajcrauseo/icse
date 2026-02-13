import Link from 'next/link';

export default function Unidad2Guia2() {
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
          
          <Link href="/unidad/2/guia1" className="text-gray-500 hover:text-blue-600 hover:underline flex items-center text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Anterior: Guía 1
          </Link>
        </div>

        <h1 className="unidad-titulo">
          Unidad 2 - Guía 2: Los gobiernos radicales (1916-1930)
        </h1>

        <section className="guia-section">
          <h2 className="guia-titulo-purple">
            Guías de lectura: Romero, Cap. II y Roy Hora
          </h2>

          <div className="conceptos-container">
            <h3 className="subseccion-titulo">Eje 1: Política e Institucional (La llegada y el ejercicio del poder)</h3>
            
            <div className="concepto-box-blue">
              <h4 className="concepto-titulo">Análisis del Eje</h4>
              <p className="concepto-texto">
                Este eje analiza cómo la UCR pasó de ser una fuerza de oposición a gestionar un Estado con 
                instituciones aún controladas por el régimen anterior.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Pregunta 1: El Triunfo Radical</h4>
              <p className="concepto-texto">
                Roy Hora explica que la derrota del PAN y el triunfo de la UCR fue una sorpresa para la élite 
                conservadora, que esperaba que la Ley Sáenz Peña legitimara su propio poder mediante el control 
                del aparato estatal. Sin embargo, la UCR logró canalizar el descontento de las clases medias y 
                sectores populares, que veían en el radicalismo una herramienta de reparación frente a la 
                exclusión política.
              </p>
            </div>

            <div className="concepto-box-yellow">
              <h4 className="concepto-titulo">Pregunta 5: Relación con el Congreso y Provincias</h4>
              <p className="concepto-texto">
                Yrigoyen enfrentó un Congreso con mayoría opositora y gobernadores conservadores. Para superarlo, 
                utilizó de forma sistemática la Intervención Federal, reemplazando por decreto a gobernadores 
                opositores para asegurar el control territorial y electoral.
              </p>
            </div>

            <div className="concepto-box-red">
              <h4 className="concepto-titulo">Pregunta 6: División de la UCR</h4>
              <p className="concepto-texto">
                El partido se dividió entre Personalistas (fieles al liderazgo carismático de Yrigoyen) y 
                Antipersonalistas (sectores más conservadores y cercanos a la élite que criticaban el estilo 
                &quot;verticalista&quot; de Yrigoyen y preferían un funcionamiento institucional más tradicional).
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Pregunta 7: La Oposición en 1928</h4>
              <p className="concepto-texto">
                Hacia el segundo mandato, la oposición se amplió más allá de los antipersonalistas, incluyendo 
                a conservadores, socialistas independientes y militares. Lo acusaban de ser un &quot;dictador&quot; que 
                ignoraba las instituciones y de llevar al país a la ineficiencia administrativa.
              </p>
            </div>

            <h3 className="subseccion-titulo">Eje 2: Social y Conflictividad (Sindicatos y Reforma)</h3>

            <div className="concepto-box-green">
              <h4 className="concepto-titulo">Análisis del Eje</h4>
              <p className="concepto-texto">
                Aquí se observa la tensión entre el intento de integración social de Yrigoyen y la respuesta 
                represiva ante el desborde de los conflictos.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Pregunta 2: Cambios en la relación con Sindicatos</h4>
              <p className="concepto-texto">
                El gobierno varió entre la negociación y la represión. Inicialmente, Yrigoyen buscó arbitrar a 
                favor de los obreros para ganar apoyo, pero ante huelgas que amenazaban la economía (como en 1919), 
                el Estado respondió con violencia extrema.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Pregunta 3: Corrientes Obreras</h4>
              <p className="concepto-texto">
                En la primera posguerra predominaban el Sindicalismo revolucionario (centrado en mejoras económicas 
                por acción directa) y el Anarquismo. Sus métodos incluían la huelga general y el boicot, buscando 
                la emancipación obrera, aunque con niveles de violencia que alarmaban a la élite.
              </p>
            </div>

            <div className="concepto-box-indigo">
              <h4 className="concepto-titulo">Pregunta 4: Reforma Universitaria de 1918</h4>
              <p className="concepto-texto">
                Fue un movimiento estudiantil en Córdoba que exigía autonomía universitaria, cogobierno y la 
                modernización de los planes de estudio. Yrigoyen apoyó a los estudiantes, viendo en ellos a los 
                hijos de la clase media que su partido representaba.
              </p>
            </div>

            <div className="concepto-box-red">
              <h4 className="concepto-titulo">Pregunta 8: La Liga Patriótica</h4>
              <p className="concepto-texto">
                Surgió en 1919 como una organización paramilitar de derecha. Se dedicaba a perseguir a obreros, 
                inmigrantes, judíos y &quot;subversivos&quot;, actuando allí donde consideraban que el Estado era &quot;débil&quot; 
                para reprimir.
              </p>
            </div>

            <h3 className="subseccion-titulo">Eje 3: Económico (El Mundo Triangular)</h3>

            <div className="concepto-box-orange">
              <h4 className="concepto-titulo">Análisis del Eje</h4>
              <p className="concepto-texto">
                Este punto define la posición de Argentina en el tablero internacional tras la Gran Guerra.
              </p>
            </div>

            <div className="concepto-box-yellow">
              <h4 className="concepto-titulo">Pregunta 10: El Mundo Triangular</h4>
              <p className="concepto-texto">
                Romero utiliza este término para explicar que Argentina compraba manufacturas y tecnología a 
                Estados Unidos, pero estos no compraban nuestros productos agrarios. Por otro lado, Argentina 
                seguía vendiendo carne y cereales a Gran Bretaña, pero los británicos ya no tenían capital para 
                invertir. Esto generó un desequilibrio comercial difícil de sostener.
              </p>
            </div>

            <h3 className="subseccion-titulo">Eje 4: Crisis Final (El Golpe de 1930)</h3>

            <div className="concepto-box-purple">
              <h4 className="concepto-titulo">Análisis del Eje</h4>
              <p className="concepto-texto">
                El cierre de la era radical marcado por el quiebre de la democracia.
              </p>
            </div>

            <div className="concepto-box-red">
              <h4 className="concepto-titulo">Pregunta 9: El Golpe del 6 de septiembre</h4>
              <p className="concepto-texto">
                Fue provocado por una alianza entre militares (encabezados por Uriburu), la élite conservadora 
                y sectores de la prensa, aprovechando el descontento por la crisis económica de 1929. Las 
                consecuencias fueron el derrocamiento de Yrigoyen, la proscripción del radicalismo y el inicio 
                de una larga etapa de intervenciones militares en la política argentina.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
