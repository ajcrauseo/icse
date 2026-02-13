import Link from 'next/link';

export default function Unidad1Guia2() {
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
          
          <Link href="/unidad/1/guia1" className="text-gray-500 hover:text-blue-600 hover:underline flex items-center text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Anterior: Guía 1
          </Link>
        </div>

        <h1 className="unidad-titulo">
          Unidad 1 - Guía 2: Conceptualización del Estado
        </h1>

        <section className="guia-section">
          <h2 className="guia-titulo-purple">
            Guía 2: Gómez Talavera
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
          
          <div className="mt-8 flex justify-end">
            <Link href="/unidad/1/guia3" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center">
              Ir a Guía 3: García
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
