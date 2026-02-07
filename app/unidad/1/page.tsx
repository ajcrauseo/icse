export default function Unidad1() {
  return (
    <div className="unidad-container">
      <div className="unidad-content">
        {/* Título principal */}
        <h1 className="unidad-titulo">
          Unidad 1: Conceptos y definiciones acerca de la relación entre la Sociedad y el Estado
        </h1>

        {/* Guía 1 */}
        <section className="guia-section">
          <h2 className="guia-titulo-blue">
            Guía 1: La sociedad, el Estado y las instituciones (Yannuzzi)
          </h2>
          
          <div className="guia-objetivo">
            <h3 className="guia-objetivo-titulo">Objetivo del artículo</h3>
            <p className="guia-objetivo-texto">
              Analizar la relación entre la sociedad y el Estado, centrándose en cómo las instituciones 
              (formales e informales) organizan la vida social y regulan el conflicto por el poder.
            </p>
          </div>

          <div className="conceptos-container">
            <div className="concepto-box">
              <h4 className="concepto-titulo">Durkheim (La sociedad es más que la suma de individuos)</h4>
              <p className="concepto-texto">
                Significa que la sociedad posee una realidad objetiva y propia. Los individuos nacen en un mundo ya 
                organizado con normas, leyes y costumbres que preexisten y los moldean. La sociedad ejerce una presión 
                externa sobre los sujetos.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Rol de las instituciones (O&apos;Donnell)</h4>
              <p className="concepto-texto">
                Son las &quot;reglas del juego&quot; que establecen pautas de comportamiento. Su rol es hacer que la vida social 
                sea predecible y reducir la incertidumbre, permitiendo que sepamos qué esperar de los demás.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Características de las instituciones</h4>
              <p className="concepto-texto">
                Son intersubjetivas (compartidas), persistentes en el tiempo, conocidas por los actores y conllevan 
                sanciones (formales o sociales) en caso de incumplimiento.
              </p>
            </div>

            {/* Cuadro de instituciones */}
            <div className="tabla-container">
              <h4 className="tabla-titulo">Cuadro: Instituciones formales e informales</h4>
              <table className="tabla">
                <thead className="tabla-header-blue">
                  <tr>
                    <th className="tabla-th">Tipo</th>
                    <th className="tabla-th">Definición</th>
                    <th className="tabla-th">Ejemplo</th>
                    <th className="tabla-th">Vínculo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tabla-row">
                    <td className="tabla-td-bold">Formales</td>
                    <td className="tabla-td">Se definen por normas jurídicas escritas (leyes, constitución)</td>
                    <td className="tabla-td">El derecho al voto</td>
                    <td className="tabla-td">Marco legal oficial</td>
                  </tr>
                  <tr className="tabla-row">
                    <td className="tabla-td-bold">Informales</td>
                    <td className="tabla-td">Pautas de comportamiento no escritas pero aceptadas</td>
                    <td className="tabla-td">Clientelismo o corrupción</td>
                    <td className="tabla-td">Pueden complementar, modificar o anular la efectividad de las formales</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="concepto-box-blue">
              <h4 className="concepto-titulo">Coexistencia simultánea</h4>
              <p className="concepto-texto">
                Implica que el comportamiento real de los actores está influenciado por ambos tipos de reglas a la vez. 
                No son mundos separados; lo que sucede en la práctica es un híbrido de la ley y la costumbre.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Lucha por el poder</h4>
              <p className="concepto-texto">
                Es una lucha por imponer una visión del mundo y por controlar los recursos del Estado. Se caracteriza 
                por ser constante y por ocurrir tanto dentro como fuera de los canales institucionales.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Instituciones en la relación Individuo-Estado</h4>
              <p className="concepto-texto">
                Actúan como mediadoras. Organizan cómo los ciudadanos demandan al Estado y cómo este responde o 
                controla a la sociedad.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Tocqueville y organizaciones intermedias</h4>
              <p className="concepto-texto">
                Argumentaba que la participación en clubes, asociaciones o partidos previene que el Estado se vuelva 
                despótico, ya que estos grupos protegen al individuo y fortalecen el tejido social.
              </p>
            </div>

            <div className="concepto-box-red">
              <h4 className="concepto-titulo">Peligro del repliegue a la esfera privada</h4>
              <p className="concepto-texto">
                Si el ciudadano se desentiende de lo público, deja el camino libre para que el Estado o grupos de 
                poder actúen sin control, lo que debilita la democracia.
              </p>
            </div>

            <div className="concepto-box-green">
              <h4 className="concepto-titulo">Fortalecimiento de la sociedad civil</h4>
              <p className="concepto-texto">
                Es deseable porque genera ciudadanos activos que pueden controlar al poder político y proponer 
                soluciones colectivas a los problemas.
              </p>
            </div>
          </div>
        </section>

        {/* Guía 2 */}
        <section className="guia-section">
          <h2 className="guia-titulo-purple">
            Guía 2: Conceptualización del Estado (Gómez Talavera)
          </h2>
          
          <div className="guia-objetivo">
            <h3 className="guia-objetivo-titulo">Objetivo</h3>
            <p className="guia-objetivo-texto">
              Definir el concepto de Estado, distinguir sus elementos constitutivos y diferenciarlo de gobierno y nación.
            </p>
          </div>

          <div className="conceptos-container">
            <div className="concepto-box">
              <h4 className="concepto-titulo">El Estado como actor histórico</h4>
              <p className="concepto-texto">
                Su aparición cambia todo porque centraliza el poder y la ley, permitiendo una organización social a 
                gran escala que antes era imposible.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Estado de naturaleza</h4>
              <p className="concepto-texto">
                Un estado hipotético de los seres humanos antes de la existencia de leyes o poder central, donde 
                reinaba la inseguridad y el conflicto constante (guerra de todos contra todos según Hobbes).
              </p>
            </div>

            <div className="concepto-box-purple">
              <h4 className="concepto-titulo">Razones de creación del Estado</h4>
              <p className="concepto-texto mb-2">La necesidad de seguridad, orden y protección de la vida y la propiedad.</p>
              <p className="concepto-texto font-semibold">Consecuencias:</p>
              <p className="concepto-texto">
                La entrega de parte de la libertad individual a cambio de protección y la creación de un sistema de 
                leyes común.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Hobbes (Aparición y funciones)</h4>
              <p className="concepto-texto">
                El Estado nace de un contrato social. Su función primordial es garantizar la paz social a través del 
                uso de la fuerza si es necesario.
              </p>
            </div>

            <div className="concepto-box-yellow">
              <h4 className="concepto-titulo">Definición de Max Weber</h4>
              <p className="concepto-texto">
                El Estado es una comunidad humana que reclama con éxito el <span className="font-bold">monopolio de la 
                violencia legítima</span> dentro de un territorio determinado.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Dos elementos fundamentales</h4>
              <p className="concepto-texto">
                El territorio (lugar geográfico) y la violencia legítima (la fuerza aceptada por la sociedad).
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Única fuente del derecho a la violencia</h4>
              <p className="concepto-texto">
                Significa que solo el Estado puede usar la fuerza legalmente (ej. policía, ejército). Nadie más tiene 
                permitido ejercer violencia por cuenta propia para imponer justicia.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Espacio no igualitario</h4>
              <p className="concepto-texto">
                Porque el Estado implica una relación de dominación de unos (los que mandan) sobre otros (los que obedecen).
              </p>
            </div>

            <div className="concepto-box-red">
              <h4 className="concepto-titulo">¿Neutralidad?</h4>
              <p className="concepto-texto">
                No, el Estado es una herramienta que refleja las relaciones de poder de la sociedad y los intereses 
                de quienes logran controlarlo.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Asociación estatal</h4>
              <p className="concepto-texto">
                Se caracteriza por su continuidad, su burocracia y su capacidad de imponer reglas de cumplimiento obligatorio.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Violencia insuficiente</h4>
              <p className="concepto-texto">
                La fuerza pura es costosa y difícil de mantener; el Estado necesita legitimidad para que la gente 
                obedezca voluntariamente.
              </p>
            </div>

            {/* Cuadro de legitimidades */}
            <div className="tabla-container">
              <h4 className="tabla-titulo">Cuadro: Tipos de Legitimidad (Weber)</h4>
              <table className="tabla">
                <thead className="tabla-header-purple">
                  <tr>
                    <th className="tabla-th">Tipo</th>
                    <th className="tabla-th">Base</th>
                    <th className="tabla-th">Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tabla-row">
                    <td className="tabla-td-bold">Tradicional (Eterno ayer)</td>
                    <td className="tabla-td">Basada en la costumbre</td>
                    <td className="tabla-td">Monarquías</td>
                  </tr>
                  <tr className="tabla-row">
                    <td className="tabla-td-bold">Carismática</td>
                    <td className="tabla-td">Basada en las cualidades extraordinarias del líder</td>
                    <td className="tabla-td">Caudillos</td>
                  </tr>
                  <tr className="tabla-row">
                    <td className="tabla-td-bold">Legal-Racional (Legalidad)</td>
                    <td className="tabla-td">Basada en leyes y reglas impersonales</td>
                    <td className="tabla-td">Burocracia moderna</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Otros Estados</h4>
              <p className="concepto-texto">
                Municipios, provincias o estados federales que gestionan asuntos locales o regionales.
              </p>
            </div>

            <div className="concepto-box-blue">
              <h4 className="concepto-titulo">Estado vs. Gobierno</h4>
              <p className="concepto-texto">
                El Estado es la estructura permanente; el gobierno es el grupo de personas que administra el Estado 
                temporalmente.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Gellner (Nación)</h4>
              <p className="concepto-texto">
                Se define por la voluntad de vivir juntos y compartir una cultura o sistema de ideas.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Hobsbawm (Nación)</h4>
              <p className="concepto-texto">
                Es una construcción política creada por las élites para generar identidad y lealtad hacia el Estado.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Naciones sin Estado</h4>
              <p className="concepto-texto">
                Grupos que tienen identidad nacional pero no autogobierno territorial. Ejemplos: Kurdos, palestinos, catalanes.
              </p>
            </div>
          </div>
        </section>

        {/* Guía 3 */}
        <section className="guia-section">
          <h2 className="guia-titulo-green">
            Guía 3: Tipos de Estado (García)
          </h2>
          
          <div className="guia-objetivo">
            <h3 className="guia-objetivo-titulo">Objetivo</h3>
            <p className="guia-objetivo-texto">
              Analizar las transformaciones históricas del Estado desde el liberalismo hasta el neoliberalismo.
            </p>
          </div>

          <div className="conceptos-container">
            <h3 className="subseccion-titulo">Estado Liberal</h3>
            
            <div className="concepto-box">
              <h4 className="concepto-titulo">Concepto liberal</h4>
              <p className="concepto-texto">
                Doctrina que defiende la libertad individual, la propiedad privada y la limitación del poder estatal.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Antecedentes</h4>
              <p className="concepto-texto">
                La lucha contra el absolutismo monárquico y las revoluciones burguesas.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Actor social</h4>
              <p className="concepto-texto">
                Asciende la burguesía y se desplaza a la aristocracia nobiliaria.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Secularización social</h4>
              <p className="concepto-texto">
                Proceso por el cual la religión pierde influencia en la esfera pública y el Estado se separa de la Iglesia.
              </p>
            </div>

            <div className="concepto-box-green">
              <h4 className="concepto-titulo">Derechos naturales y contrato social</h4>
              <p className="concepto-texto">
                Los derechos son inherentes al hombre (vida, libertad, propiedad). El Estado nace de un contrato para 
                proteger esos derechos. Ej: Si el Estado viola la propiedad, pierde su razón de ser.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Estado Liberal (Política/Economía)</h4>
              <p className="concepto-texto">
                En política, busca la división de poderes. En economía, el laissez faire (dejar hacer), interviniendo 
                lo mínimo posible en el mercado.
              </p>
            </div>

            <h3 className="subseccion-titulo">Fascismo</h3>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Fascismo</h4>
              <p className="concepto-texto">
                Surge en Europa (Italia y Alemania) después de la Primera Guerra Mundial.
              </p>
            </div>

            <div className="concepto-box-red">
              <h4 className="concepto-titulo">Culto al líder</h4>
              <p className="concepto-texto">
                El líder (Duce, Führer) es visto como la encarnación de la voluntad de la nación, concentrando todo 
                el poder sin límites legales.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Reacción al miedo</h4>
              <p className="concepto-texto">
                Surge por el temor de la burguesía y las clases medias al avance del comunismo y al desorden de la posguerra.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Fascismo y Nacionalismo</h4>
              <p className="concepto-texto">
                Utiliza un nacionalismo agresivo y excluyente para unir a la población contra enemigos internos y externos.
              </p>
            </div>

            <h3 className="subseccion-titulo">Estado de Bienestar</h3>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Estado de Bienestar</h4>
              <p className="concepto-texto">
                Surge después de la Segunda Guerra Mundial, principalmente en Europa occidental.
              </p>
            </div>

            <div className="concepto-box-blue">
              <h4 className="concepto-titulo">Objetivos</h4>
              <p className="concepto-texto">
                Lograr el pleno empleo, la estabilidad económica y garantizar un nivel de vida mínimo para todos los ciudadanos.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Políticas y vínculo Capital-Trabajo</h4>
              <p className="concepto-texto">
                Implementa salud pública, educación y jubilaciones. Actúa como mediador para pacificar el conflicto 
                entre obreros y empresarios a través de pactos sociales.
              </p>
            </div>

            <div className="concepto-box-green">
              <h4 className="concepto-titulo">Impacto</h4>
              <p className="concepto-texto">
                Redujo la desigualdad, aumentó el consumo masivo y generó una larga etapa de crecimiento económico.
              </p>
            </div>

            <div className="concepto-box-yellow">
              <h4 className="concepto-titulo">Crisis del petróleo y déficit</h4>
              <p className="concepto-texto">
                En los años 70, estos factores hicieron que el modelo de bienestar fuera visto como costoso e ineficiente, 
                dando paso al neoliberalismo.
              </p>
            </div>

            <h3 className="subseccion-titulo">Estado Neoliberal</h3>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Estado Neoliberal</h4>
              <p className="concepto-texto">
                Se expande a fines de los 70 y durante los 80/90 (Reagan, Thatcher).
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Caída del comunismo</h4>
              <p className="concepto-texto">
                Reforzó la idea de que el mercado era el único sistema viable y que el Estado debía retirarse de la economía.
              </p>
            </div>

            <div className="concepto-box-purple">
              <h4 className="concepto-titulo">Globalización</h4>
              <p className="concepto-texto">
                Desafía la soberanía de los Estados nacionales, ya que los flujos financieros y las empresas 
                transnacionales escapan a su control.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Vínculo con el mercado</h4>
              <p className="concepto-texto">
                El Estado debe estar al servicio del mercado, eliminando obstáculos a la inversión y la competencia.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Oposición a regulaciones</h4>
              <p className="concepto-texto">
                Argumenta que las leyes laborales o el proteccionismo frenan la eficiencia económica. 
                Ej: Reducción de impuestos a empresas para fomentar la inversión.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Privatizaciones</h4>
              <p className="concepto-texto">
                El Estado vende empresas públicas para reducir el gasto y dejar la gestión en manos privadas.
              </p>
            </div>

            <h3 className="subseccion-titulo">América Latina</h3>

            <div className="concepto-box-orange">
              <h4 className="concepto-titulo">América Latina</h4>
              <p className="concepto-texto">
                El Estado de Bienestar fue más limitado y desigual que en Europa, muy ligado a líderes populistas.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Diferencias con Europa</h4>
              <p className="concepto-texto">
                Menor alcance de los derechos, mayor dependencia económica externa y sistemas de seguridad social fragmentados.
              </p>
            </div>
          </div>
        </section>

        {/* Guía 4 */}
        <section className="guia-section">
          <h2 className="guia-titulo-red">
            Guía 4: Regímenes Políticos (Povse)
          </h2>

          <div className="conceptos-container">
            <div className="concepto-box">
              <h4 className="concepto-titulo">Polisémico</h4>
              <p className="concepto-texto">
                Porque tiene múltiples significados dependiendo de si se analiza desde lo jurídico, lo político o lo sociológico.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Poder</h4>
              <p className="concepto-texto">
                Se asocia a la capacidad de imponer la voluntad y a cómo se distribuye ese mando en una sociedad 
                (relación con la dominación de Weber).
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Categorías y tipos ideales</h4>
              <p className="concepto-texto">
                Se usan &quot;democracia&quot; y &quot;autoritarismo&quot; como modelos abstractos (tipos ideales) para comparar las 
                realidades concretas, aunque ningún país encaje perfecto en ellos.
              </p>
            </div>

            {/* Cuadro de regímenes */}
            <div className="tabla-container">
              <h4 className="tabla-titulo">Cuadro: Tipos de Regímenes</h4>
              <table className="tabla">
                <thead className="tabla-header-red">
                  <tr>
                    <th className="tabla-th">Régimen</th>
                    <th className="tabla-th">Características</th>
                    <th className="tabla-th">Ejercicio del poder</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tabla-row">
                    <td className="tabla-td-bold">Democrático</td>
                    <td className="tabla-td">Soberanía popular, pluralismo, competencia</td>
                    <td className="tabla-td">Limitado por la ley y la constitución</td>
                  </tr>
                  <tr className="tabla-row">
                    <td className="tabla-td-bold">Autoritario</td>
                    <td className="tabla-td">Concentración del poder, supresión de la oposición</td>
                    <td className="tabla-td">Sin controles legales efectivos, uso de la fuerza</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="concepto-box-yellow">
              <h4 className="concepto-titulo">Teoría vs. Práctica</h4>
              <p className="concepto-texto">
                En la práctica, muchos regímenes que se dicen democráticos tienen prácticas autoritarias 
                (ej. persecución a la prensa), lo que genera &quot;democracias delegativas&quot; o imperfectas.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Subtipos</h4>
              <p className="concepto-texto">
                Democracia liberal, democracia participativa, dictaduras militares, totalitarismos.
              </p>
            </div>

            <div className="concepto-box-purple">
              <h4 className="concepto-titulo">Tercer tipo ideal</h4>
              <p className="concepto-texto">
                Surge para explicar países que no son ni democracias plenas ni dictaduras totales.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Régimen híbrido</h4>
              <p className="concepto-texto">
                Aquel que tiene elecciones (parece democracia) pero donde no hay garantías reales de competencia o 
                libertad civil (parece autoritarismo).
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Transición</h4>
              <p className="concepto-texto">
                El periodo de cambio de un régimen a otro (ej. el paso de una dictadura a una democracia).
              </p>
            </div>

            <div className="concepto-box-blue">
              <h4 className="concepto-titulo">Fluidez</h4>
              <p className="concepto-texto">
                Los regímenes no son estáticos; están en constante tensión y pueden retroceder o avanzar. 
                Ej: Los procesos de &quot;primavera árabe&quot;.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Gobierno vs. Estado</h4>
              <p className="concepto-texto">
                (Reiteración de Gómez Talavera) El gobierno es el mando político transitorio; el Estado es la 
                organización administrativa y jurídica permanente.
              </p>
            </div>

            <div className="concepto-box-green">
              <h4 className="concepto-titulo">Significado</h4>
              <p className="concepto-texto">
                Se refiere a que el régimen político es el &quot;puente&quot; que conecta el poder del Estado con la voluntad 
                de la sociedad.
              </p>
            </div>
          </div>
        </section>

        {/* Guía 5 */}
        <section className="guia-section">
          <h2 className="guia-titulo-indigo">
            Guía 5: La Poliarquía (Batlle)
          </h2>

          <div className="conceptos-container">
            <div className="concepto-box">
              <h4 className="concepto-titulo">Frase sobre proliferación conceptual</h4>
              <p className="concepto-texto">
                Significa que no hay un único acuerdo sobre qué es la democracia; hay visiones mínimas (elecciones) 
                y visiones máximas (igualdad social), lo que genera debates constantes.
              </p>
            </div>

            <div className="concepto-box-indigo">
              <h4 className="concepto-titulo">Denominador común</h4>
              <p className="concepto-texto">
                En todas las definiciones modernas, la democracia implica que el poder reside en el pueblo y se 
                ejerce mediante representantes electos.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Robert Dahl</h4>
              <p className="concepto-texto">
                Propuso el concepto de Poliarquía para referirse a las democracias reales y distinguirlas del ideal 
                inalcanzable.
              </p>
            </div>

            <div className="concepto-box-yellow">
              <h4 className="concepto-titulo">Democracia como idea vs. realidad</h4>
              <p className="concepto-texto">
                El ideal (gobierno de todos) es imposible en sociedades grandes; la realidad es la poliarquía 
                (gobierno de muchos).
              </p>
            </div>

            <div className="concepto-box-blue">
              <h4 className="concepto-titulo">Definición de Poliarquía</h4>
              <p className="concepto-texto">
                Es un sistema político caracterizado por un alto grado de inclusión y de competencia, donde el poder 
                está distribuido entre diversos grupos.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">Seis características de la Poliarquía</h4>
              <ol className="lista-ordenada">
                <li>Funcionarios electos</li>
                <li>Elecciones libres, periódicas y limpias</li>
                <li>Sufragio universal (adultos)</li>
                <li>Derecho a ocupar cargos públicos</li>
                <li>Libertad de expresión</li>
                <li>Variedad de fuentes de información y libertad de asociación</li>
              </ol>
            </div>

            <div className="concepto-box-green">
              <h4 className="concepto-titulo">Inclusión y Contestación</h4>
              <p className="concepto-texto mb-2">
                <span className="font-semibold">Inclusión:</span> Participación (quiénes votan y participan).
              </p>
              <p className="concepto-texto">
                <span className="font-semibold">Contestación:</span> Competencia (qué tanto se permite la oposición 
                y el debate público).
              </p>
            </div>

            <div className="concepto-box-purple">
              <h4 className="concepto-titulo">Evidencia de la obra de Dahl</h4>
              <p className="concepto-texto">
                Muestra que la democracia es un proceso de aprendizaje constante y que la calidad de la poliarquía 
                depende de qué tan abiertas sean las instituciones a la participación y al control ciudadano.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}