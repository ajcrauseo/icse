import Link from 'next/link';
import GuideNav from '@/app/components/GuideNav';

export default function Unidad5Guia1() {
  return (
    <div className="unidad-container">
      <div className="unidad-content">
        <div className="mb-6">
          <Link href="/unidad/5" className="text-blue-600 hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Unidad 5
          </Link>
        </div>

        <h1 className="unidad-titulo">
          Unidad 5 - Guía 1: El Proceso (1976-1983)
        </h1>

        <section className="guia-section">
          <h2 className="guia-titulo-blue">
            Guía de lectura 1: Romero Cap. VII
          </h2>
          
          <div className="conceptos-container">
            <div className="concepto-box">
              <h4 className="concepto-titulo">1. ¿Cuáles fueron las principales características del clima político que ofició de “antesala” al golpe militar de 1976?</h4>
              <p className="concepto-texto">
                El clima previo se caracterizó por una sensación de desgobierno, vacío de poder y una crisis económica descontrolada que generaba una violencia política cotidiana. La sociedad, agobiada por la inseguridad y la muerte, comenzó a aceptar la idea de un golpe que impusiera orden.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">2. ¿Cómo se propuso la Junta Militar “solucionar” el alto grado de conflictividad imperante en ese momento?</h4>
              <p className="concepto-texto">
                La Junta se propuso una reestructuración profunda para cambiar &quot;la raíz de la sociedad&quot;, eliminando las causas del conflicto de forma definitiva mediante un plan político y económico basado en el autoritarismo.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">3. ¿Cuál era el espíritu de ese proyecto? ¿Cuáles fueron los cuatro momentos principales de la acción terrorista clandestina llevada a cabo por las fuerzas represivas del Estado?</h4>
              <p className="concepto-texto">
                El espíritu era un plan de &quot;reorganización nacional&quot; sustentado en la anulación de la vida democrática y la violación del orden constitucional. Los cuatro momentos de la acción represiva fueron: el secuestro, la tortura en centros clandestinos, la decisión sobre el destino de la víctima y la ejecución/desaparición.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">4. ¿Por qué Romero dice que, si bien las víctimas fueron muchas, el verdadero objetivo eran los vivos?</h4>
              <p className="concepto-texto">
                Porque el objetivo del terrorismo de Estado era generar un miedo paralizante que disciplinara a la sociedad y eliminara cualquier forma de resistencia o participación política activa.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">5. ¿Cuál fue la actitud de los diversos sectores de la sociedad ante el golpe de estado, la dictadura militar y las violaciones de los derechos humanos?</h4>
              <p className="concepto-texto">
                Hubo una mezcla de aceptación inicial, silencio por miedo y, en algunos casos, complicidad civil. Sin embargo, surgieron resistencias desde organismos de Derechos Humanos que denunciaron las violaciones sistemáticas.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">6. ¿De qué otros elementos, además de las desapariciones, tortura, secuestro de niños y asesinatos se nutrió el terrorismo de Estado para lograr su cometido?</h4>
              <p className="concepto-texto">
                Se nutrió de la censura, la intervención de instituciones, la propaganda oficial y la creación de un aparato represivo clandestino e ilegal que operaba fuera de toda norma.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">7. ¿Cuáles eran los principales objetivos y características del plan económico de Martínez de Hoz?</h4>
              <p className="concepto-texto">
                El objetivo era desmantelar el modelo de industrialización por sustitución de importaciones y el Estado de Bienestar, reemplazándolo por un modelo neoliberal basado en la apertura de mercados.
              </p>
            </div>

            <div className="concepto-box-blue">
              <h4 className="concepto-titulo">8. Según el texto de Romero, expliquen el significado de la tablita, la plata dulce, la bicicleta, y los importados coreanos.</h4>
              <p className="concepto-texto">
                La &quot;tablita&quot; era un cronograma de devaluaciones; la &quot;plata dulce&quot; y la &quot;bicicleta&quot; refieren a la especulación financiera con capitales externos y tasas de interés altas; y los &quot;importados coreanos&quot; representan la destrucción de la industria local por la apertura comercial.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">9. Caractericen las consecuencias del plan económico llevado a la práctica entre 1976 y 1981, haciendo foco en lo ocurrido con la deuda externa, la fiebre especulativa, las tasas de interés, el quiebre de empresas, la concentración económica, la ocupación y los salarios reales.</h4>
              <p className="concepto-texto">
                El plan provocó un incremento brutal de la deuda externa, una fiebre especulativa destructiva, altas tasas de interés que causaron el quiebre de empresas, mayor concentración económica y una caída drástica del salario real y la estabilidad laboral.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">10. ¿Qué fundamentos utilizó Martínez de Hoz para justificar el desmantelamiento del Estado? ¿Cómo se vinculaba el discurso antisubversivo con el discurso antiestatal?</h4>
              <p className="concepto-texto">
                Argumentaba que el Estado interventor era la fuente de la ineficiencia económica. Vinculaba ambos discursos afirmando que el control estatal sobre la economía favorecía el avance de la &quot;subversión&quot;.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">11. Expliquen por qué Romero sostiene que “la libertad de mercado se construía por la fuerza”.</h4>
              <p className="concepto-texto">
                Porque la eliminación de protecciones industriales y derechos laborales solo pudo imponerse mediante la represión violenta de los trabajadores y sindicatos.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">12. ¿Cuáles fueron las causas de las divisiones y conflictos dentro de las Fuerzas Armadas?</h4>
              <p className="concepto-texto">
                Las causas fueron las disputas por el control del poder político entre las distintas armas (Ejército, Marina, Aviación) y diferencias sobre el rumbo de la salida electoral.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">13. ¿Cuál fue la actitud de la Iglesia católica ante el gobierno militar? Describan los incipientes reclamos sociales que comenzaron a tomar forma en el marco del Campeonato Mundial del Fútbol de 1978 y del conflicto con Chile.</h4>
              <p className="concepto-texto">
                La jerarquía eclesiástica tuvo una actitud mayormente cercana al gobierno. No obstante, durante el Mundial de 1978 y el conflicto con Chile, empezaron a surgir reclamos sociales por la situación económica y las denuncias de violaciones a los derechos humanos.
              </p>
            </div>
          </div>
          
          <GuideNav
            next={{
              title: "El Terrorismo de Estado",
              href: "/unidad/5/guia2"
            }}
          />
        </section>
      </div>
    </div>
  );
}
