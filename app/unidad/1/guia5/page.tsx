import Link from 'next/link';

export default function Unidad1Guia5() {
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
          
          <Link href="/unidad/1/guia4" className="text-gray-500 hover:text-blue-600 hover:underline flex items-center text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Anterior: Guía 4
          </Link>
        </div>

        <h1 className="unidad-titulo">
          Unidad 1 - Guía 5: Los sistemas políticos contemporáneos
        </h1>

        <section className="guia-section">
          <h2 className="guia-titulo-indigo">
            Guía 5: Batlle
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
