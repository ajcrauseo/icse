import Link from 'next/link';

export default function Unidad3Parte1() {
  return (
    <div className="unidad-container">
      <div className="unidad-content">
        {/* Navegación Breadcrumb */}
        <div className="mb-6">
          <Link href="/unidad/3" className="text-blue-600 hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Unidad 3
          </Link>
        </div>

        <h1 className="unidad-titulo">
          Unidad 3 - Parte 1: La Restauración Conservadora
        </h1>

        {/* Guía 1 */}
        <section className="guia-section">
          <h2 className="guia-titulo-blue">
            Guía de lectura 1: Romero Cap. III: La Restauración Conservadora
          </h2>
          
          <div className="conceptos-container">
            <div className="concepto-box">
              <h4 className="concepto-titulo">1. Consecuencias institucionales de la caída de Yrigoyen</h4>
              <p className="concepto-texto">
                El golpe de 1930 marcó el fin de la &quot;normalidad constitucional&quot; y el inicio de una etapa donde el Ejército se convirtió en un actor político central, asumiendo una función de tutela sobre las instituciones democráticas.
              </p>
            </div>

            <div className="concepto-box-blue">
              <h4 className="concepto-titulo">2. Propuestas de sectores nacionalistas</h4>
              <p className="concepto-texto">
                Se dividían en dos: los <span className="font-semibold">nacionalistas autoritarios (Uriburu)</span>, que buscaban una reforma integral corporativista inspirada en el fascismo para eliminar el sistema de partidos; y los <span className="font-semibold">liberal-conservadores (Justo)</span>, que pretendían retornar a una normalidad institucional limitada pero controlada, evitando el &quot;desborde&quot; de las masas.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">3. Situación política mundial</h4>
              <p className="concepto-texto">
                El periodo estuvo caracterizado por el ascenso de los totalitarismos (fascismo y nazismo), la crisis de las democracias liberales y el impacto de la Gran Depresión que fomentó el nacionalismo económico.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">4. Políticas de Gran Bretaña e impacto</h4>
              <p className="concepto-texto">
                Gran Bretaña adoptó el proteccionismo en la Conferencia de Ottawa (1932), priorizando las importaciones de sus dominios (Canadá, Australia). Esto amenazó las exportaciones cárnicas argentinas, obligando al país a negociar condiciones desventajosas.
              </p>
            </div>

            <div className="concepto-box-blue">
              <h4 className="concepto-titulo">5. Tratado Roca-Runciman</h4>
              <p className="concepto-texto">
                Acuerdo firmado en 1933 donde Gran Bretaña aseguraba una cuota de importación de carne argentina a cambio de que Argentina redujera aranceles a productos británicos, asegurara el pago de deuda y diera un trato preferencial a las empresas de transporte británicas.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">6. Cambios en actividad sindical (post-1935)</h4>
              <p className="concepto-texto">
                Con la reactivación económica y el crecimiento industrial, los sindicatos (especialmente los de la CGT) comenzaron a ganar fuerza, organizándose por rama de industria y adoptando una actitud más negociadora con el Estado.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">7. Política de Pinedo y Estado keynesiano</h4>
              <p className="concepto-texto">
                Pinedo impulsó una mayor intervención estatal en la economía para regular el mercado y fomentar la industria local. El Estado keynesiano se refiere a aquel que interviene para sostener la demanda agregada y el pleno empleo.
              </p>
            </div>

            <div className="concepto-box-blue">
              <h4 className="concepto-titulo">8. ¿Argentina fue un Estado keynesiano en los 30?</h4>
              <p className="concepto-texto">
                Romero sostiene que hubo una intervención pragmática por necesidad de la crisis (creación del Banco Central, Juntas Reguladoras), pero no un modelo keynesiano pleno orientado a la justicia social o el bienestar masivo.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">9. Políticas de Ortiz y sindicatos</h4>
              <p className="concepto-texto">
                Ortiz intentó una apertura hacia los sindicatos para ganar legitimidad política frente a los sectores más duros del conservadurismo, fomentando mecanismos de mediación estatal en conflictos laborales.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">10. Contexto económico bajo Ortiz</h4>
              <p className="concepto-texto">
                Se caracterizó por una leve recuperación tras la crisis del 30, aunque limitada por la inestabilidad de los precios internacionales y el inicio de las tensiones bélicas en Europa.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">11. Impacto de la Segunda Guerra Mundial</h4>
              <p className="concepto-texto">
                Económicamente, cerró mercados europeos pero impulsó la Industria por Sustitución de Importaciones (ISI). Políticamente, profundizó la división entre &quot;aliadófilos&quot; y &quot;neutralistas&quot; dentro del Ejército y la élite.
              </p>
            </div>

            <div className="concepto-box-blue">
              <h4 className="concepto-titulo">12. Características del GOU</h4>
              <p className="concepto-texto">
                El Grupo de Oficiales Unidos era una logia militar nacionalista, anticomunista y defensora de la soberanía nacional que veía con desconfianza la política tradicional y abogaba por el orden y la industrialización militar.
              </p>
            </div>
          </div>
        </section>

        {/* Guía 2 */}
        <section className="guia-section">
          <h2 className="guia-titulo-purple">
            Guía de Lectura 2: Deich: &quot;Golpes de Estado y otras formas de interrupción institucional&quot;
          </h2>
          
          <div className="guia-objetivo">
            <h3 className="guia-objetivo-titulo">Introducción</h3>
            <p className="guia-objetivo-texto">
              <span className="font-semibold">1. Coyunturas donde se producen los golpes de Estado:</span> Momentos de crisis política profunda, donde el consenso entre los actores sobre las reglas del juego democrático se ha roto, o cuando sectores con poder consideran que sus intereses están amenazados por el gobierno de turno.
            </p>
          </div>

          <div className="conceptos-container">
            <h3 className="subseccion-titulo">En la búsqueda de un concepto. Elementos comunes</h3>
            
            <div className="concepto-box">
              <h4 className="concepto-titulo">2. Relación con el régimen político</h4>
              <p className="concepto-texto">
                El golpe de Estado es una acción que busca cambiar el régimen político vigente. Generalmente, el objetivo es destruir un régimen democrático para instaurar uno no democrático (dictadura).
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">3. Forma habitual del cambio</h4>
              <p className="concepto-texto">
                La forma más común es el paso de un régimen democrático a uno de tipo dictatorial, liderado habitualmente por las Fuerzas Armadas.
              </p>
            </div>

            <div className="concepto-box-purple">
              <h4 className="concepto-titulo">4. Por qué siempre produce un cambio de régimen</h4>
              <p className="concepto-texto">
                Porque el golpe altera de manera violenta e ilegal el acceso al poder, eliminando la soberanía popular y las instituciones del régimen anterior para imponer nuevas reglas y autoridades sin consulta ciudadana.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">5. Por qué no está previsto por la ley</h4>
              <p className="concepto-texto">
                Porque es una acción &quot;de hecho&quot; que rompe el orden constitucional. Ninguna Constitución democrática puede prever legalmente su propia destrucción por la fuerza.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">6. Relación con la violencia</h4>
              <p className="concepto-texto">
                El golpe está intrínsecamente ligado a la violencia. Puede ser una violencia física directa (uso de armas) o una violencia simbólica basada en la amenaza del uso de la fuerza para lograr la rendición del gobierno legal.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">7. Participantes vs. Dirigentes</h4>
              <p className="concepto-texto">
                Los <span className="font-semibold">dirigentes</span> son quienes planifican y lideran la toma del poder (ej. altos mandos militares o líderes políticos de la oposición); los <span className="font-semibold">participantes</span> son los sectores que apoyan, financian o legitiman el golpe (sectores de la iglesia, grupos económicos o sectores civiles) sin necesariamente ejecutar las órdenes.
              </p>
            </div>

            <h3 className="subseccion-titulo">Los golpes de Estado pueden clasificarse</h3>

            <div className="concepto-box">
              <h4 className="concepto-titulo">8. Golpes de Estado militares</h4>
              <p className="concepto-texto">
                Son aquellos donde las Fuerzas Armadas actúan como institución para tomar el control del Estado, asumiendo las funciones de gobierno y suspendiendo las garantías constitucionales.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">9. Otros tipos de golpes (no militares)</h4>
              <p className="concepto-texto">
                Existen golpes civiles o institucionales. Un ejemplo es cuando sectores del parlamento o la justicia deponen a un presidente bajo pretextos legales pero forzando la voluntad popular.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">10. Autogolpe de Estado</h4>
              <p className="concepto-texto">
                Es cuando el propio presidente, que llegó al poder por vías legales, decide cerrar el Congreso, intervenir la justicia y concentrar todo el poder en sus manos para gobernar sin límites.
              </p>
            </div>

            <div className="concepto-box-purple">
              <h4 className="concepto-titulo">11. Importancia de causas, liderazgo y actores</h4>
              <p className="concepto-texto">
                Estos elementos permiten diferenciar un golpe de otro. Las causas explican el motivo (económico, ideológico), el liderazgo define quién tiene el mando real, y los actores determinan qué sectores de la sociedad están detrás del cambio de régimen.
              </p>
            </div>

            <h3 className="subseccion-titulo">Interrupciones institucionales sin cambio de régimen político</h3>

            <div className="concepto-box">
              <h4 className="concepto-titulo">12. Interrupción institucional</h4>
              <p className="concepto-texto">
                Ocurre cuando un presidente no termina su mandato legal, pero su salida no implica la destrucción del régimen democrático. El poder se traspasa siguiendo los mecanismos de sucesión previstos por la ley.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">13. Post-1990 en Latinoamérica</h4>
              <p className="concepto-texto">
                Los golpes militares clásicos perdieron apoyo internacional y legitimidad. Los efectos sobre las democracias han sido inestabilidades que, aunque no eliminan el régimen, debilitan la figura presidencial y la confianza en las instituciones.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">14. Relación con cambios de régimen</h4>
              <p className="concepto-texto">
                A diferencia de los golpes, las interrupciones no cambian el régimen. Ejemplo: Las renuncias presidenciales en Argentina en 2001 fueron interrupciones, pero el régimen siguió siendo democrático.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">15. Inestabilidades por grupos económicos</h4>
              <p className="concepto-texto">
                Se producen mediante presiones financieras (corridas bancarias, hiperinflación). Generan un clima de caos social que obliga al gobierno a renunciar o ceder ante sus demandas, sin necesidad de usar armas.
              </p>
            </div>

            <h3 className="subseccion-titulo">Golpes de Estado en Argentina</h3>

            <div className="concepto-box">
              <h4 className="concepto-titulo">16. Cantidad y fechas</h4>
              <p className="concepto-texto">
                Argentina tuvo 6 golpes de Estado exitosos: <span className="font-bold">1930, 1943, 1955, 1962, 1966 y 1976</span>.
              </p>
            </div>

            <div className="concepto-box-purple">
              <h4 className="concepto-titulo">17. El primer golpe (1930)</h4>
              <p className="concepto-texto">
                Ocurrió el 6 de septiembre de 1930. Fue liderado por José F. Uriburu contra Hipólito Yrigoyen. Roy Hora señala que fue el fin del orden liberal y el inicio de la intervención militar constante.
              </p>
            </div>

            {/* Cuadro Golpe 1930 vs 1943 */}
            <div className="tabla-container">
              <h4 className="tabla-titulo">18. Cuadro: Golpe de Estado de 1930 vs. 1943</h4>
              <table className="tabla">
                <thead className="tabla-header-purple">
                  <tr>
                    <th className="tabla-th">Aspecto</th>
                    <th className="tabla-th">Similitudes/Diferencias</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tabla-row">
                    <td className="tabla-td-bold">Similitudes</td>
                    <td className="tabla-td">Ambos fueron liderados por militares y derrocaron gobiernos constitucionales en contextos de crisis.</td>
                  </tr>
                  <tr className="tabla-row">
                    <td className="tabla-td-bold">Diferencias</td>
                    <td className="tabla-td">El de 1930 tuvo un sector que quería el retorno al pasado conservador, mientras que el de 1943 tuvo un fuerte carácter nacionalista, industrialista y buscaba evitar la entrada a la Segunda Guerra Mundial.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">19. Particularidades de los restantes</h4>
              <p className="concepto-texto">
                Cada golpe tuvo objetivos distintos: el del <span className="font-semibold">1955</span> buscaba la &quot;proscripción&quot; del peronismo; el del <span className="font-semibold">1966</span> pretendía una dictadura de largo plazo; y el del <span className="font-semibold">1976</span> fue el más sangriento, con un plan sistemático de terrorismo de Estado.
              </p>
            </div>

            <h3 className="subseccion-titulo">Las interrupciones institucionales en Argentina</h3>

            <div className="concepto-box">
              <h4 className="concepto-titulo">20. Características</h4>
              <p className="concepto-texto">
                Casos como el de Alfonsín (1989) y De la Rúa (2001). Se caracterizaron por crisis socioeconómicas agudas y presión de las calles que llevaron a la renuncia, pero el Congreso nombró sucesores legales bajo la Ley de Acefalía.
              </p>
            </div>

            <h3 className="subseccion-titulo">El golpe contra Frondizi: un caso particular</h3>

            <div className="concepto-box">
              <h4 className="concepto-titulo">21. Relación Frondizi-Militares</h4>
              <p className="concepto-texto">
                Fue una relación de constante tensión. Los militares le hicieron decenas de &quot;planteos&quot; para limitar sus políticas y evitar cualquier acercamiento al peronismo.
              </p>
            </div>

            <div className="concepto-box-purple">
              <h4 className="concepto-titulo">22. Caso José María Guido</h4>
              <p className="concepto-texto">
                Es difícil de clasificar porque Guido (presidente del Senado) asumió ante la Corte Suprema mientras los militares ya habían derrocado a Frondizi, creando un &quot;híbrido&quot; entre legalidad y golpe.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">23. Por qué no hubo cambio de régimen</h4>
              <p className="concepto-texto">
                Porque se mantuvo la estructura del Congreso (aunque intervenido) y se utilizó una fachada de sucesión legal para que el país no pareciera una dictadura militar ante la comunidad internacional.
              </p>
            </div>
          </div>

          {/* Navegación Siguiente */}
          <div className="mt-8 flex justify-end">
            <Link href="/unidad/3/parte2" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center">
              Ir a Parte 2: Peronismo Clásico
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
