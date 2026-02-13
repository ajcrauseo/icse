import Link from 'next/link';

export default function Unidad3Parte2() {
  return (
    <div className="unidad-container">
      <div className="unidad-content">
        {/* Navegación Breadcrumb */}
        <div className="mb-6 flex justify-between items-center">
          <Link href="/unidad/3" className="text-blue-600 hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Unidad 3
          </Link>
          
          <Link href="/unidad/3/parte1" className="text-gray-500 hover:text-blue-600 hover:underline flex items-center text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Ir a Parte 1
          </Link>
        </div>

        <h1 className="unidad-titulo">
          Unidad 3 - Parte 2: El Peronismo Clásico
        </h1>

        {/* Guía 3 */}
        <section className="guia-section">
          <h2 className="guia-titulo-green">
            Guía de lectura 3: Romero Cap. IV y Belini & Korol
          </h2>

          <div className="conceptos-container">
            <div className="concepto-box">
              <h4 className="concepto-titulo">1. Rol de Perón en los gobiernos de Ramírez y Farrell (1943-1945)</h4>
              <p className="concepto-texto mb-2">
                Tras el golpe de junio de 1943, Perón ocupó cargos inicialmente secundarios que luego transformó en su base de poder:
              </p>
              <ul className="lista-desordenada">
                <li>Comenzó en el Departamento Nacional del Trabajo, un organismo con escasa relevancia que él mismo pidió jerarquizar.</li>
                <li>Fue designado Secretario de Trabajo y Previsión, desde donde vinculó al Estado con el movimiento obrero.</li>
                <li>Hacia 1944, acumuló un poder sin precedentes al desempeñarse simultáneamente como Ministro de Guerra y Vicepresidente del general Farrell.</li>
              </ul>
            </div>

            <div className="concepto-box-green">
              <h4 className="concepto-titulo">2. Características del trabajo en la Dirección/Secretaría de Trabajo</h4>
              <p className="concepto-texto mb-2">
                El trabajo de Perón en esta área marcó un quiebre en la relación Estado-Sociedad:
              </p>
              <ul className="lista-desordenada">
                <li>El Estado abandonó su rol represivo o de prescindencia para convertirse en árbitro y mediador de los conflictos laborales.</li>
                <li>Se impulsó una vasta legislación social que incluía jubilaciones, vacaciones pagas, estatutos profesionales (como el del Peón de Campo) y tribunales de trabajo.</li>
                <li>Fomentó la organización sindical desde el Estado, favoreciendo a los gremios que aceptaban la negociación oficial y desplazando a las dirigencias de izquierda.</li>
              </ul>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">3. Segunda Guerra Mundial y relación con Estados Unidos</h4>
              <p className="concepto-texto mb-2">Argentina mantuvo una posición de neutralidad durante casi todo el conflicto, lo que generó tensiones externas:</p>
              <ul className="lista-desordenada">
                <li>Estados Unidos interpretó la neutralidad argentina como una complicidad encubierta con el Eje (Nazismo/Fascismo).</li>
                <li><span className="font-semibold">Consecuencias:</span> EE. UU. ejerció una fuerte presión diplomática, impuso bloqueos económicos y excluyó a la Argentina del programa de asistencia militar y económica que sí otorgó a otros países de la región.</li>
                <li>La relación llegó a un punto crítico con la publicación del &quot;Libro Azul&quot;, donde EE. UU. acusaba directamente a Perón de nazi-fascista para influir en las elecciones de 1946.</li>
              </ul>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">4. Relación con Estados Unidos durante la presidencia de Perón</h4>
              <p className="concepto-texto mb-2">Al asumir Perón, se intentó una normalización pragmática de la relación política:</p>
              <ul className="lista-desordenada">
                <li>Argentina ratificó el Acta de Chapultepec y se incorporó a la OEA, alineándose formalmente en el bloque occidental frente a la Guerra Fría.</li>
                <li>Sin embargo, se mantuvo la retórica de la &quot;Tercera Posición&quot; (ni yanquis ni marxistas), lo que generaba desconfianza en Washington.</li>
                <li>En lo económico, la relación fue difícil debido a que EE. UU. prohibió que los dólares del Plan Marshall se usaran para comprar granos argentinos, afectando las exportaciones nacionales.</li>
              </ul>
            </div>

            <div className="concepto-box-green">
              <h4 className="concepto-titulo">5. Trabajadores, Sindicatos y el rol de Eva Perón</h4>
              <p className="concepto-texto mb-2">La relación entre el gobierno y los sindicatos fue el pilar del régimen:</p>
              <ul className="lista-desordenada">
                <li><span className="font-semibold">Sindicatos:</span> Se convirtieron en la &quot;columna vertebral&quot; del movimiento, logrando un acceso directo a la toma de decisiones estatales y mejoras salariales constantes.</li>
                <li><span className="font-semibold">Estructura:</span> El gobierno promovió la sindicalización masiva pero bajo un control vertical a través de la CGT, interviniendo a los gremios que mostraban disidencia.</li>
                <li><span className="font-semibold">Eva Perón:</span> Actuó como el vínculo místico y político entre Perón y los trabajadores. Desde su Fundación y la Secretaría de Trabajo, mediaba en los conflictos laborales y canalizaba demandas sociales, otorgando un componente emocional y de lealtad absoluta al liderazgo.</li>
              </ul>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">6. Características del Partido Peronista</h4>
              <p className="concepto-texto mb-2">El partido se organizó bajo una lógica de subordinación al líder y eficiencia electoral:</p>
              <ul className="lista-desordenada">
                <li>Fue concebido como una herramienta electoral más que como un espacio de debate democrático interno.</li>
                <li>Se estructuró en tres ramas: la rama política, la rama sindical y, posteriormente, la rama femenina.</li>
                <li>Su principal característica fue el verticalismo: las decisiones emanaban de Perón y la disciplina partidaria era rígida para evitar faccionalismos.</li>
              </ul>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">7. El concepto de &quot;masas&quot; según Romero</h4>
              <p className="concepto-texto mb-2">Para Romero, las &quot;masas&quot; en el peronismo no son solo un grupo de personas, sino un fenómeno social y político:</p>
              <ul className="lista-desordenada">
                <li>Se refiere a los sectores trabajadores y migrantes internos que habían quedado al margen de la participación política durante la década de 1930.</li>
                <li>Estas masas se integran a la vida pública no a través de partidos tradicionales, sino mediante una relación directa con el líder.</li>
                <li>Romero las describe como un actor que adquiere conciencia de sus derechos sociales a través del consumo y la presencia en el espacio público (la plaza de mayo).</li>
              </ul>
            </div>

            <div className="concepto-box-green">
              <h4 className="concepto-titulo">8. Contexto social y papel de los sectores populares</h4>
              <p className="concepto-texto mb-2">El peronismo generó una transformación profunda en la vida cotidiana:</p>
              <ul className="lista-desordenada">
                <li><span className="font-semibold">Contexto:</span> Se vivió un clima de justicia social y redistribución de la riqueza, donde el salario real creció notablemente y se alcanzó el pleno empleo.</li>
                <li><span className="font-semibold">Sectores populares:</span> Pasaron de la marginación a ser protagonistas. Esto se manifestó en el acceso al consumo de masas, el turismo social y la dignificación del trabajo manual.</li>
                <li>El régimen fomentó una identidad cultural popular que desafiaba las jerarquías tradicionales de la élite argentina.</li>
              </ul>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">9. Conflicto con la Iglesia Católica</h4>
              <p className="concepto-texto mb-2">La relación pasó de la cooperación inicial (1946) a una confrontación total (1954-1955):</p>
              <ul className="lista-desordenada">
                <li><span className="font-semibold">Motivos:</span> La Iglesia recelaba del culto a la personalidad de Perón y Evita, y de la intromisión del Estado en la beneficencia y la educación.</li>
                <li><span className="font-semibold">Medidas:</span> El gobierno legalizó el divorcio, suprimió la enseñanza religiosa en las escuelas y autorizó los prostíbulos.</li>
                <li><span className="font-semibold">Papel en la caída:</span> La Iglesia se convirtió en el aglutinador de toda la oposición (civiles y militares). La procesión de Corpus Christi y el bombardeo a Plaza de Mayo fueron puntos de quiebre que legitimaron el golpe de la &quot;Revolución Libertadora&quot;.</li>
              </ul>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">10. Relación entre el gobierno y la oposición política</h4>
              <p className="concepto-texto mb-2">La convivencia política fue de alta polarización y hostilidad:</p>
              <ul className="lista-desordenada">
                <li>El gobierno utilizó mecanismos para limitar a la oposición: control de los medios de comunicación, exilio de dirigentes y la exigencia de afiliación partidaria para empleados públicos.</li>
                <li>La oposición (Radicales, Socialistas, Conservadores) denunciaba al gobierno como una dictadura totalitaria y se negaba a reconocer las conquistas sociales por considerarlas demagogia.</li>
                <li>El Congreso funcionó, pero la mayoría peronista limitaba severamente el debate, llegando a la expulsión de diputados opositores.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Guía 4 */}
        <section className="guia-section">
          <h2 className="guia-titulo-orange">
            Guía de lectura 4: Petrino: Consideraciones del Populismo
          </h2>

          <div className="guia-objetivo">
            <h3 className="guia-objetivo-titulo">Introducción</h3>
            <p className="guia-objetivo-texto"><span className="font-semibold">1. ¿Qué problema trae aparejado la adjetivación del concepto populismo?</span> Su uso como etiqueta peyorativa o descalificadora para estigmatizar adversarios políticos dificulta una definición académica precisa y neutral.</p>
          </div>

          <div className="conceptos-container">
            {/* Cuadro Posturas */}
            <div className="tabla-container">
              <h4 className="tabla-titulo">2. Cuadro: Posturas sobre el populismo</h4>
              <table className="tabla">
                <thead className="tabla-header-purple">
                  <tr>
                    <th className="tabla-th">Postura</th>
                    <th className="tabla-th">Definición</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tabla-row">
                    <td className="tabla-td-bold">Negativas</td>
                    <td className="tabla-td">Lo definen como una amenaza a la democracia liberal, asociada a la demagogia, la manipulación de masas y el descuido de las instituciones.</td>
                  </tr>
                  <tr className="tabla-row">
                    <td className="tabla-td-bold">Positivas</td>
                    <td className="tabla-td">Lo ven como una herramienta de democratización que permite la incorporación de sectores sociales previamente excluidos de la vida política.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">3. Proliferación de fenómenos populistas</h4>
              <p className="concepto-texto">
                Llevó a que el concepto se aplique a una diversidad tan amplia de procesos que terminó perdiendo rigor científico y capacidad para distinguir fenómenos diferentes entre sí.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">4. Multiplicidad de enfoques</h4>
              <p className="concepto-texto">
                Produce una falta de consenso teórico, convirtiendo al populismo en un concepto &quot;estirable&quot; que se adapta a las preferencias ideológicas de cada investigador.
              </p>
            </div>

            <h3 className="subseccion-titulo">Tres enfoques sobre el populismo</h3>

            <div className="tabla-container">
              <h4 className="tabla-titulo">5. Cuadro: Enfoques teóricos</h4>
              <table className="tabla">
                <thead className="tabla-header-purple">
                  <tr>
                    <th className="tabla-th">Enfoque</th>
                    <th className="tabla-th">Definición</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tabla-row">
                    <td className="tabla-td-bold">Económico (Dornbusch y Edwards)</td>
                    <td className="tabla-td">Se define como el uso de políticas fiscales y monetarias expansivas para redistribuir el ingreso, que suelen derivar en inflación y crisis.</td>
                  </tr>
                  <tr className="tabla-row">
                    <td className="tabla-td-bold">Político/Institucional (Weyland)</td>
                    <td className="tabla-td">Se entiende como un modo de ejercer el poder donde un líder carismático se apoya en una masa de seguidores no organizada de forma institucional.</td>
                  </tr>
                  <tr className="tabla-row">
                    <td className="tabla-td-bold">Discursivo (Laclau)</td>
                    <td className="tabla-td">Es una estrategia que construye la identidad del &quot;pueblo&quot; mediante la oposición antagónica contra un enemigo o &quot;élite&quot;.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="subseccion-titulo">Cinco elementos para definir el liderazgo populista</h3>

            <div className="concepto-box-orange">
              <h4 className="concepto-titulo">6. Rasgos centrales de los liderazgos populistas</h4>
              <p className="concepto-texto">
                Incluyen: el fuerte vínculo carismático, la retórica de &quot;pueblo vs. élite&quot;, la desconfianza hacia las instituciones intermedias y la concentración del poder en la figura del líder.
              </p>
            </div>

            <h3 className="subseccion-titulo">Populismo global</h3>

            <div className="concepto-box">
              <h4 className="concepto-titulo">7. Fragmentación de la sociedad</h4>
              <p className="concepto-texto">
                Divide a la sociedad en dos campos antagónicos: por un lado, el &quot;pueblo auténtico&quot; y, por el otro, los enemigos de la nación o élites corruptas.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">8. Efectos de la radicalización del discurso</h4>
              <p className="concepto-texto">
                Genera una polarización extrema que erosiona el pluralismo democrático, dificultando el diálogo y los acuerdos entre diferentes sectores políticos.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">9. Ejemplos mundiales</h4>
              <p className="concepto-texto">
                Se mencionan casos como Donald Trump o líderes en Europa; comparten el uso de redes sociales para comunicación directa, nacionalismo económico y el rechazo a la globalización.
              </p>
            </div>

            <h3 className="subseccion-titulo">Dos casos paradigmáticos del populismo en Argentina: Yrigoyen y Perón</h3>

            <div className="concepto-box-orange">
              <h4 className="concepto-titulo">10. Características comunes</h4>
              <p className="concepto-texto">
                Ambos se presentaron como la encarnación única de la voluntad nacional y establecieron una conexión directa y emocional con las mayorías populares.
              </p>
            </div>

            <div className="concepto-box-orange">
              <h4 className="concepto-titulo">11. Características diferentes</h4>
              <p className="concepto-texto">
                Difieren en su base social (Yrigoyen se apoyó más en sectores medios; Perón en la clase obrera) y en el nivel de intervención estatal, que fue central y masivo con el peronismo.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">12. Papel de los partidos</h4>
              <p className="concepto-texto">
                Los partidos suelen quedar relegados a ser meros instrumentos electorales, perdiendo su autonomía y su rol de debate interno frente a la autoridad del líder.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
