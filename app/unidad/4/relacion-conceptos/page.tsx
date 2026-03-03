import Link from 'next/link';
import GuideNav from '@/app/components/GuideNav';
import KeyboardNavigation from '@/app/components/KeyboardNavigation';

export default function Unidad4RelacionConceptos() {
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
          Unidad 4 - Análisis Teórico
        </h1>

        <section className="guia-section">
          <h2 className="guia-titulo-indigo">
            Orientaciones desde los conceptos de la Unidad 1
          </h2>
          
          <div className="conceptos-container">
            <h3 className="subseccion-titulo text-indigo-700">Estado, Gobierno y Régimen</h3>
            
            <div className="concepto-box-indigo">
              <h4 className="concepto-titulo">Definición de conceptos fundamentales</h4>
              <p className="concepto-texto">En este periodo se dieron golpes de Estado, cambios de gobierno y de régimen. Según Max Povse, el <strong>Estado</strong> es la institución permanente con el monopolio de la fuerza; el <strong>Gobierno</strong> es el grupo de personas que lo administra temporalmente; y el <strong>Régimen</strong> son las reglas que determinan cómo se accede y ejerce el poder. Un Golpe de Estado es una ruptura del régimen que interrumpe el orden legal por la fuerza.</p>
            </div>

            <h3 className="subseccion-titulo text-purple-700">Legitimidad y Poder</h3>

            <div className="concepto-box-purple">
              <h4 className="concepto-titulo">Construcción de legitimidad</h4>
              <p className="concepto-texto">Frondizi e Illia buscaron legitimidad legal-racional, pero esta fue débil por la proscripción del peronismo. Onganía apeló a una legitimidad de orden y eficiencia (Estado Burocrático-Autoritario). La tercera presidencia de Perón combinó legitimidad carismática con la legal obtenida en elecciones libres.</p>
            </div>

            <h3 className="subseccion-titulo text-blue-700">Economía y Política</h3>

            <div className="concepto-box-blue">
              <h4 className="concepto-titulo">Modelos económicos en disputa</h4>
              <p className="concepto-texto">En disputa estaban el modelo liberale-desarrollista (apertura y eficiencia) y el nacional-populista (mercado interno y redistribución). Las crisis económicas minaron la legitimidad al no poder satisfacer las demandas sociales, facilitando las rupturas institucionales.</p>
            </div>

            <h3 className="subseccion-titulo text-green-700">Democracia y Poliarquía</h3>

            <div className="concepto-box-green">
              <h4 className="concepto-titulo">¿Gobiernos poliárquicos?</h4>
              <p className="concepto-texto">Los gobiernos de Illia y Frondizi difícilmente pueden considerarse poliárquicos plenos (según Margarita Batlle), ya que no cumplían con el atributo de "sufragio inclusivo" debido a la proscripción del peronismo. Los de Cámpora y Perón cumplieron más requisitos, pero la violencia política afectó las garantías de libertad.</p>
            </div>

            <h3 className="subseccion-titulo text-red-700">El Monopolio de la Fuerza</h3>

            <div className="concepto-box-red">
              <h4 className="concepto-titulo">Violencia política y el concepto de Estado</h4>
              <p className="concepto-texto">La violencia de guerrillas y grupos paramilitares (Triple A) cuestiona la definición de Estado de Patricio Gómez Talavera como poseedor del monopolio de la fuerza física legítima, evidenciando la incapacidad de las instituciones para canalizar el conflicto.</p>
            </div>
          </div>
          
          <GuideNav
            prev={{
              title: "Dependencia o Liberación",
              href: "/unidad/4/guia2"
            }}
          />
        </section>
      </div>
    </div>
  );
}
