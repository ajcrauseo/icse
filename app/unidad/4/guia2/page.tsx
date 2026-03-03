import Link from 'next/link';
import GuideNav from '@/app/components/GuideNav';
import KeyboardNavigation from '@/app/components/KeyboardNavigation';

export default function Unidad4Guia2() {
  return (
    <div className="unidad-container">
      <KeyboardNavigation />
      <div className="unidad-content">
        <div className="mb-6 flex justify-between items-center">
          <Link href="/unidad/4" className="text-blue-600 hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Unidad 4
          </Link>
        </div>

        <h1 className="unidad-titulo">
          Unidad 4 - Guía 2: Dependencia o Liberación (1966-1976)
        </h1>

        <section className="guia-section">
          <h2 className="guia-titulo-green">
            Guía 2: Romero Cap. VI
          </h2>
          
          <div className="conceptos-container">
            <h3 className="subseccion-titulo text-green-700">La &quot;Revolución Argentina&quot; (1966-1970)</h3>
            
            <div className="concepto-box">
              <h4 className="concepto-titulo">1. ¿Qué actitud asumieron las diferentes fuerzas políticas y sociales ante el derrocamiento de Illia?</h4>
              <p className="concepto-texto">Hubo una expectativa favorable o pasiva. Gran parte de la prensa, las corporaciones y hasta sectores sindicales (incluyendo a Vandor) saludaron el golpe esperando que el nuevo régimen trajera &quot;orden&quot; y &quot;eficiencia&quot;.</p>
            </div>

            <div className="concepto-box-green">
              <h4 className="concepto-titulo">2. ¿Cuáles fueron las principales características del régimen autoritario de Onganía?</h4>
              <p className="concepto-texto">Fue un Estado Burocrático-Autoritario que buscaba quedarse sin plazos prefijados. Medidas: clausura del Congreso, disolución de partidos políticos, intervención de universidades (&quot;Noche de los Bastones Largos&quot;) y censura.</p>
            </div>

            <div className="concepto-box-blue">
              <h4 className="concepto-titulo">3. ¿En qué consistió el plan económico de Krieger Vasena?</h4>
              <p className="concepto-texto">Consistió en la estabilización basada en la congelación de salarios, devaluación con retenciones al agro y reducción de aranceles. Benefició a las grandes empresas transnacionales; perjudicó a los trabajadores y a las pequeñas industrias locales.</p>
            </div>

            <h3 className="subseccion-titulo text-red-700">El Cordobazo y la Crisis del Régimen</h3>

            <div className="concepto-box-red">
              <h4 className="concepto-titulo">5. ¿Qué fue el “Cordobazo”? ¿En qué contexto se produce?</h4>
              <p className="concepto-texto">Fue un estallido social masivo en Córdoba en mayo de 1969. Participaron obreros industriales (SMATA, Luz y Fuerza) y estudiantes universitarios, protestando contra las políticas de ajuste y la represión de la dictadura.</p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">6. ¿Cuáles fueron las consecuencias del Cordobazo?</h4>
              <p className="concepto-texto">Hirió de muerte al gobierno de Onganía, demostrando que el orden social era precario. Abrió una etapa de movilización popular permanente y estimuló el crecimiento de las organizaciones guerrilleras.</p>
            </div>

            <div className="concepto-box-orange">
              <h4 className="concepto-titulo">10. ¿Qué rol cumplieron las movilizaciones sociales para el surgimiento de la guerrilla?</h4>
              <p className="concepto-texto">Generaron un clima de resistencia que justificó el paso a la clandestinidad ante la clausura de la democracia. Se expresaron corrientes peronistas (Montoneros) y marxistas-leninistas (ERP).</p>
            </div>

            <h3 className="subseccion-titulo text-indigo-700">La Salida Electoral y el Retorno de Perón</h3>

            <div className="concepto-box-indigo">
              <h4 className="concepto-titulo">14. ¿En qué consistió el Gran Acuerdo Nacional (GAN) de Lanusse?</h4>
              <p className="concepto-texto">Fue un plan de transición pactada entre los militares y los líderes de los partidos (Perón y Balbín) para aislar a los sectores guerrilleros y lograr una salida electoral que preservara la institución militar.</p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">16. ¿Cómo reaccionó el peronismo ante los condicionamientos de Lanusse?</h4>
              <p className="concepto-texto">Perón rechazó los condicionamientos y movilizó a las bases con la campaña &quot;Luche y Vuelve&quot;, logrando imponer la fórmula Cámpora-Solano Lima.</p>
            </div>

            <h3 className="subseccion-titulo text-blue-700">La Tercera Presidencia Peronista (1973-1976)</h3>

            <div className="concepto-box-blue">
              <h4 className="concepto-titulo">18. ¿Cuáles fueron, según Romero, los tres pilares sobre los que se asentó el proyecto de Perón en su tercera presidencia? ¿Cuáles fueron sus resultados?</h4>
              <p className="concepto-texto">Los pilares fueron: 1) Pacto Social entre empresarios y sindicatos; 2) Acuerdo político con la oposición (Balbín); 3) Disciplinamiento interno del movimiento peronista. Los resultados fueron negativos debido al quiebre económico y la violencia interna descontrolada.</p>
            </div>

            <div className="concepto-box-yellow">
              <h4 className="concepto-titulo">19. ¿Cuáles fueron las características del plan económico y social implementado por Perón en su tercer mandato? ¿Qué dificultades atravesó?</h4>
              <p className="concepto-texto">Se basó en un acuerdo de precios y salarios para frenar la inflación y fomentar el consumo. Dificultades: el aumento internacional del petróleo, el desabastecimiento (mercado negro) y la presión de los sindicatos por romper los topes salariales.</p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">20. ¿Qué característica tuvo el enfrentamiento entre la izquierda y la derecha peronista?</h4>
              <p className="concepto-texto">Fue un enfrentamiento violento e irreconciliable. Perón terminó inclinándose por la &quot;derecha&quot; sindical y política, desplazando y finalmente expulsando a la &quot;izquierda&quot; (Montoneros) del movimiento.</p>
            </div>

            <div className="concepto-box-red">
              <h4 className="concepto-titulo">22. ¿Cómo se relaciona la crisis económica con la caída de Isabel Perón?</h4>
              <p className="concepto-texto">El estallido inflacionario del &quot;Rodrigazo&quot; destruyó el Pacto Social y la autoridad del gobierno. La parálisis política, el descontrol económico y la violencia desenfrenada sirvieron de pretexto para el golpe militar de marzo de 1976.</p>
            </div>
          </div>
          
          <GuideNav
            prev={{
              title: "El empate",
              href: "/unidad/4/guia1"
            }}
            next={{
              title: "Orientaciones Teóricas",
              href: "/unidad/4/relacion-conceptos"
            }}
          />
        </section>
      </div>
    </div>
  );
}
