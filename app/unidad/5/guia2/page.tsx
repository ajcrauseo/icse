import Link from 'next/link';
import GuideNav from '@/app/components/GuideNav';

export default function Unidad5Guia2() {
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
          Unidad 5 - Guía 2: El Terrorismo de Estado
        </h1>

        <section className="guia-section">
          <h2 className="guia-titulo-red">
            Guía de lectura 2: Etchevest
          </h2>
          
          <div className="conceptos-container">
            <div className="concepto-box">
              <h4 className="concepto-titulo">1. ¿A qué hace referencia el concepto de terrorismo?</h4>
              <p className="concepto-texto">
                Hace referencia al uso de la violencia o la amenaza de su uso para generar un clima de miedo extremo y alcanzar objetivos políticos.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">2. ¿Cuál es el papel de “la causa” en la acción terrorista?</h4>
              <p className="concepto-texto">
                &quot;La causa&quot; funciona como la justificación ideológica que los perpetradores utilizan para validar el uso de la crueldad y la violencia desmedida en función de un objetivo superior.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">3. ¿Qué busca el terrorismo a partir de la utilización del terror (o solo la amenaza de su uso)?</h4>
              <p className="concepto-texto">
                Busca paralizar la voluntad de las personas, coaccionar a la sociedad y eliminar cualquier forma de oposición política mediante el pánico.
              </p>
            </div>

            <div className="concepto-box-red">
              <h4 className="concepto-titulo">4. ¿A qué tipo de terrorismo se lo denomina terrorismo de Estado?</h4>
              <p className="concepto-texto">
                Es aquel donde el propio Estado, que debería garantizar las leyes, utiliza su estructura y el monopolio de la fuerza para violar los derechos humanos de manera sistemática.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">5. ¿Qué relación se establece entre el concepto de terrorismo de Estado y la idea de error casual?</h4>
              <p className="concepto-texto">
                Se establece que el terrorismo de Estado no es un &quot;error casual&quot; o un exceso aislado de un funcionario, sino una política planificada y deliberada desde el poder.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">6. ¿Qué ocurre cuando el Estado viola las leyes que debería cumplir e implementar?</h4>
              <p className="concepto-texto">
                Se pierde la legitimidad del poder político y el Estado se convierte en un agente criminal que deja a los ciudadanos en total indefensión.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">7. ¿Cómo debe ser el poder que la sociedad reconoce al Estado?</h4>
              <p className="concepto-texto">
                Debe ser un poder legítimo, basado en el respeto a las leyes y al orden constitucional que la propia sociedad reconoce.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">8. ¿Qué pasó con los terrorismos de Estado que se realizaron para defender a la sociedad de supuestos enemigos?</h4>
              <p className="concepto-texto">
                Terminaron convirtiéndose en la peor forma de violencia política, destruyendo los lazos sociales y las instituciones que decían proteger.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">9. ¿Cómo justifica el Estado terrorista el uso de la crueldad y la violencia desmedida?</h4>
              <p className="concepto-texto">
                Lo justifica mediante la construcción de un enemigo interno peligroso, argumentando que la defensa de la nación permite el uso de métodos ilegales.
              </p>
            </div>

            <div className="concepto-box-red">
              <h4 className="concepto-titulo">10. ¿Por qué el terrorismo de Estado es la peor forma de violencia política?</h4>
              <p className="concepto-texto">
                Porque es ejercida por quien tiene el deber legal de protección, utilizando los recursos de todos para atacar a la población con total impunidad.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">11. ¿Cuál era la excusa para la utilización de la violencia ilegal?</h4>
              <p className="concepto-texto">
                La excusa era la lucha contra la &quot;subversión&quot; y la necesidad de restaurar el orden y los valores occidentales y cristianos.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">12. ¿Cuándo y cómo se había instalado la violencia en Argentina?</h4>
              <p className="concepto-texto">
                La violencia se había instalado previamente a través de enfrentamientos entre grupos armados de distinto signo y la represión paraestatal.
              </p>
            </div>

            <div className="concepto-box">
              <h4 className="concepto-titulo">13. ¿Por qué el golpe de 1976 habría tenido cierta justificación pública?</h4>
              <p className="concepto-texto">
                Debido al clima de caos, la crisis económica y el miedo generado por la violencia política previa, que llevaron a sectores civiles a ver con buenos ojos una intervención militar que prometía orden.
              </p>
            </div>
          </div>
          
          <GuideNav
            prev={{
              title: "El Proceso (1976-1983)",
              href: "/unidad/5/guia1"
            }}
          />
        </section>
      </div>
    </div>
  );
}
