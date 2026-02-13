import Link from 'next/link';

export default function Unidad1Guia4() {
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
          
          <Link href="/unidad/1/guia3" className="text-gray-500 hover:text-blue-600 hover:underline flex items-center text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Anterior: Guía 3
          </Link>
        </div>

        <h1 className="unidad-titulo">
          Unidad 1 - Guía 4: Regímenes Políticos
        </h1>

        <section className="guia-section">
          <h2 className="guia-titulo-red">
            Guía 4: Povse
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
          
          <div className="mt-8 flex justify-end">
            <Link href="/unidad/1/guia5" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center">
              Ir a Guía 5: Batlle
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
