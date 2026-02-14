import Link from 'next/link';
import GuideNav from '@/app/components/GuideNav';

export default function Unidad1Guia3() {
  return (
    <div className="unidad-container">
      <div className="unidad-content">
        <div className="mb-6 flex justify-between items-center">
          <Link href="/unidad/1" className="text-blue-600 hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Unidad 1
          </Link>
          
          <Link href="/unidad/1/guia2" className="text-gray-500 hover:text-blue-600 hover:underline flex items-center text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Anterior: Guía 2
          </Link>
        </div>

        <h1 className="unidad-titulo">
          Unidad 1 - Guía 3: Tipos de Estado
        </h1>

        <section className="guia-section">
          <h2 className="guia-titulo-green">
            Guía 3: García
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
          
          <GuideNav
            prev={{
              title: "Conceptualización del Estado",
              href: "/unidad/1/guia2"
            }}
            next={{
              title: "Regímenes Políticos",
              href: "/unidad/1/guia4"
            }}
          />
        </section>
      </div>
    </div>
  );
}
