import Link from 'next/link';
import GuideNav from '@/app/components/GuideNav';
import KeyboardNavigation from '@/app/components/KeyboardNavigation';

export default function Unidad4Guia1() {
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
          Unidad 4 - Guía 1: El empate (1955-1966)
        </h1>

        <section className="guia-section">
          <h2 className="guia-titulo-blue">
            Guía 1: Romero Cap. V
          </h2>
          
          <div className="conceptos-container">
            <h3 className="subseccion-titulo text-blue-700">La Revolución Libertadora (1955-1958)</h3>
            
            <div className="concepto-box">
              <h4 className="concepto-titulo">1. ¿Cuáles fueron las principales características del frente político y militar que derribó a Juan D. Perón?</h4>
              <p className="concepto-texto">Fue un frente sumamente heterogéneo unido principalmente por el antiperonismo. Incluía a sectores de las tres armas, la Iglesia católica, partidos políticos (radicales, conservadores, socialistas) y sectores de la burguesía, todos con el objetivo de &quot;desperonizar&quot; la sociedad y restaurar un orden previo.</p>
            </div>

            <div className="concepto-box-blue">
              <h4 className="concepto-titulo">2. ¿Qué medidas adoptó el régimen de la “Revolución Libertadora” ante el peronismo? ¿Qué cambios se produjeron en la relación política del país con Estados Unidos?</h4>
              <p className="concepto-texto">El régimen proscribió al peronismo, intervino la Confederación General del Trabajo (CGT), disolvió el partido peronista y prohibió sus símbolos y menciones. Respecto a EE.UU., la Revolución Libertadora profundizó el vínculo integrando al país al FMI y al Banco Mundial para obtener créditos.</p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">3. ¿Cuál fue la reacción del peronismo ante su proscripción?</h4>
              <p className="concepto-texto">Se inició la etapa de la &quot;Resistencia Peronista&quot;, caracterizada por sabotajes en fábricas, huelgas espontáneas y la organización de células clandestinas para exigir el retorno de Perón y la legalidad del movimiento.</p>
            </div>

            <div className="concepto-box-indigo">
              <h4 className="concepto-titulo">4. ¿Cuál fue el rol de los sindicatos durante este proceso?</h4>
              <p className="concepto-texto">Actuaron como el principal refugio y herramienta de lucha del movimiento proscripto. Tras una etapa inicial de intervención militar, surgieron nuevas conducciones (como las &quot;62 Organizaciones&quot;) que lideraron la resistencia y se convirtieron en el actor político central del peronismo.</p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">5. ¿En qué consistió la política económica de liberalización del mercado?</h4>
              <p className="concepto-texto">Consistió en la devaluación de la moneda, la eliminación de controles de precios, el estímulo a las exportaciones agrarias y la apertura a capitales extranjeros. Se diferenció del modelo de Perón, que era estatista y centrado en el mercado interno.</p>
            </div>

            <h3 className="subseccion-titulo text-purple-700">El Gobierno de Frondizi (1958-1962)</h3>

            <div className="concepto-box-purple">
              <h4 className="concepto-titulo">9. ¿Qué circunstancias hicieron posible el triunfo de Arturo Frondizi en 1958?</h4>
              <p className="concepto-texto">Fue posible gracias a un pacto secreto con Perón, en el cual los votos peronistas se volcaron a Frondizi a cambio del compromiso de este de legalizar los sindicatos, normalizar la CGT y levantar la proscripción.</p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">10. ¿Qué cambios acarreó la Ley de Asociaciones Profesionales sancionada por Frondizi?</h4>
              <p className="concepto-texto">Restableció el modelo de un solo sindicato por actividad y el manejo de fondos de previsión por parte de los gremios, fortaleciendo enormemente a la burocracia sindical. Esto permitió inicialmente una tregua, pero luego los sindicatos usaron ese poder para presionar al gobierno.</p>
            </div>

            <div className="concepto-box-green">
              <h4 className="concepto-titulo">11. Describa las características de las políticas económicas “desarrollistas”.</h4>
              <p className="concepto-texto">Se enfocaron en la industria pesada (siderurgia, petróleo, química, automotriz) mediante la atracción masiva de inversiones extranjeras y tecnología. El objetivo era lograr el autoabastecimiento energético y superar el déficit de divisas.</p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">13. ¿Cuál fue la posición y el rol que asumió el sindicalista Augusto Vandor?</h4>
              <p className="concepto-texto">Vandor, líder de la UOM, impulsó un &quot;peronismo sin Perón&quot;. Su objetivo era institucionalizar el movimiento peronista a través de los sindicatos, negociando con el poder político y militar de forma autónoma a Perón.</p>
            </div>

            <h3 className="subseccion-titulo text-red-700">El Gobierno de Illia (1963-1966)</h3>

            <div className="concepto-box-red">
              <h4 className="concepto-titulo">16. ¿En qué se diferenciaron las políticas económicas de Frondizi respecto de las de Illia?</h4>
              <p className="concepto-texto">Frondizi apostó al capital extranjero e industria pesada. Illia, de perfil más nacionalista, anuló los contratos petroleros por considerarlos lesivos, limitó el poder de las farmacéuticas extranjeras y priorizó el mercado interno.</p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">19. ¿Qué características tuvo el gobierno de Illia?</h4>
              <p className="concepto-texto">Fue un gobierno respetuoso de las normas democráticas y la división de poderes. Económicamente, fue moderadamente nacionalista y exitoso en términos de crecimiento, aunque políticamente se lo acusó de ser lento e ineficiente.</p>
            </div>

            <div className="concepto-box-orange">
              <h4 className="concepto-titulo">20. ¿Cómo fue visto el gobierno de Illia por los otros actores?</h4>
              <p className="concepto-texto">Fue visto con hostilidad. Las corporaciones rechazaban su intervencionismo; los sindicatos lo atacaron con planes de lucha; la prensa lo ridiculizó como &quot;lento&quot; y las FFAA lo consideraban incapaz de contener la &quot;amenaza&quot; peronista.</p>
            </div>

            <h3 className="subseccion-titulo text-gray-700">Sociedad, Cultura y el &quot;Empate&quot;</h3>

            <div className="concepto-box-yellow">
              <h4 className="concepto-titulo">18. ¿A qué se refiere el autor cuando menciona el “empate”?</h4>
              <p className="concepto-texto">Se refiere a una situación de bloqueo político y social donde ninguna de las fuerzas en pugna (ejército, sindicatos, burguesía, partidos) tiene el poder suficiente para imponer su proyecto de manera definitiva, pero sí para vetar el proyecto del otro.</p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">22. ¿Por qué se considera al período 1955-1966 como de renovación cultural?</h4>
              <p className="concepto-texto">Fue la &quot;Época de Oro&quot; de la universidad argentina. Hubo autonomía, libertad de cátedra, modernización de programas de estudio y una fuerte vinculación entre ciencia, cultura y compromiso social.</p>
            </div>

            <div className="concepto-box-indigo">
              <h4 className="concepto-titulo">23. ¿Qué papel jugó la revolución cubana en la radicalización de la izquierda?</h4>
              <p className="concepto-texto">Funcionó como un modelo exitoso de toma del poder por vías no tradicionales. Esto radicalizó a la juventud, que empezó a ver la lucha armada como la única vía eficaz para el cambio social.</p>
            </div>
          </div>
          
          <GuideNav
            next={{
              title: "Dependencia o Liberación",
              href: "/unidad/4/guia2"
            }}
          />
        </section>
      </div>
    </div>
  );
}
