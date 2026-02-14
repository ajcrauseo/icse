import Link from 'next/link';
import GuideNav from '@/app/components/GuideNav';

export default function Unidad1Guia1() {
  return (
    <div className="unidad-container">
      <div className="unidad-content">
        <div className="mb-6">
          <Link href="/unidad/1" className="text-blue-600 hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Unidad 1
          </Link>
        </div>

        <h1 className="unidad-titulo">
          Unidad 1 - Guía 1: La sociedad, el Estado y las instituciones
        </h1>

        <section className="guia-section">
          <h2 className="guia-titulo-blue">
            Guía 1: Yannuzzi
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
          
          <GuideNav
            next={{
              title: "Conceptualización del Estado",
              href: "/unidad/1/guia2"
            }}
          />
        </section>
      </div>
    </div>
  );
}
