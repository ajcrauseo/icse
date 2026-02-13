import Link from 'next/link';

interface President {
  numero: number;
  nombre: string;
  periodo: string;
  partido: string;
  esGolpe?: boolean;
}

interface Section {
  titulo: string;
  estiloTitulo: string;
  items: President[];
}

export default function CronologiaPage() {
  const secciones: Section[] = [
    {
      titulo: "LA REPÚBLICA CONSERVADORA (GENERACIÓN DEL 80)",
      estiloTitulo: "guia-titulo-blue",
      items: [
        { numero: 1, nombre: "Julio Argentino Roca", periodo: "1880–1886", partido: "Partido Autonomista Nacional (PAN)" },
        { numero: 2, nombre: "Miguel Juárez Celman", periodo: "1886–1890", partido: "Partido Autonomista Nacional (PAN)" },
        { numero: 3, nombre: "Carlos Pellegrini", periodo: "1890–1892", partido: "Partido Autonomista Nacional (PAN)" },
        { numero: 4, nombre: "Luis Sáenz Peña", periodo: "1892–1895", partido: "Partido Autonomista Nacional (PAN)" },
        { numero: 5, nombre: "José Evaristo Uriburu", periodo: "1895–1898", partido: "Partido Autonomista Nacional (PAN)" },
        { numero: 6, nombre: "Julio Argentino Roca", periodo: "1898–1904", partido: "Partido Autonomista Nacional (PAN)" },
        { numero: 7, nombre: "Manuel Quintana", periodo: "1904–1906", partido: "Partido Autonomista Nacional (PAN)" },
        { numero: 8, nombre: "José Figueroa Alcorta", periodo: "1906–1910", partido: "Partido Autonomista Nacional (PAN)" },
        { numero: 9, nombre: "Roque Sáenz Peña", periodo: "1910–1914", partido: "Partido Autonomista Nacional (PAN)" },
        { numero: 10, nombre: "Victorino de la Plaza", periodo: "1914–1916", partido: "Partido Autonomista Nacional (PAN)" }
      ]
    },
    {
      titulo: "PRESIDENCIAS RADICALES (LEY SÁENZ PEÑA)",
      estiloTitulo: "guia-titulo-red",
      items: [
        { numero: 11, nombre: "Hipólito Yrigoyen", periodo: "1916–1922", partido: "Unión Cívica Radical (UCR)" },
        { numero: 12, nombre: "Marcelo T. de Alvear", periodo: "1922–1928", partido: "Unión Cívica Radical (UCR)" },
        { numero: 13, nombre: "Hipólito Yrigoyen", periodo: "1928–1930", partido: "Unión Cívica Radical (UCR)" }
      ]
    },
    {
      titulo: "LA DÉCADA INFAME (GOLPES Y FRAUDE)",
      estiloTitulo: "guia-titulo-purple",
      items: [
        { numero: 14, nombre: "José Félix Uriburu", periodo: "1930–1932", partido: "De facto (Militar)", esGolpe: true },
        { numero: 15, nombre: "Agustín P. Justo", periodo: "1932–1938", partido: "Concordancia (Alianza PDN, UCR-A y PSI)" },
        { numero: 16, nombre: "Roberto M. Ortiz", periodo: "1938–1942", partido: "Concordancia (UCRA)" },
        { numero: 17, nombre: "Ramón S. Castillo", periodo: "1942–1943", partido: "Concordancia (PDN)" }
      ]
    },
    {
      titulo: "REVOLUCIÓN DEL 43 (DICTADURA)",
      estiloTitulo: "guia-titulo-indigo",
      items: [
        { numero: 18, nombre: "Arturo Rawson", periodo: "1943", partido: "De facto (Militar - GOU)", esGolpe: true },
        { numero: 19, nombre: "Pedro Pablo Ramírez", periodo: "1943–1944", partido: "De facto (Militar - GOU)", esGolpe: true },
        { numero: 20, nombre: "Edelmiro Farrell", periodo: "1944–1946", partido: "De facto (Militar)", esGolpe: true }
      ]
    },
    {
      titulo: "EL PERONISMO",
      estiloTitulo: "guia-titulo-orange",
      items: [
        { numero: 21, nombre: "Juan Domingo Perón", periodo: "1946–1952", partido: "Partido Laborista / PP" },
        { numero: 22, nombre: "Juan Domingo Perón", periodo: "1952–1955", partido: "Partido Peronista (PP)" }
      ]
    },
    {
      titulo: "PROSCRIPCIÓN Y DEMOCRACIAS RESTRINGIDAS",
      estiloTitulo: "guia-titulo-green",
      items: [
        { numero: 23, nombre: "Eduardo Lonardi", periodo: "1955", partido: "De facto (Fuerzas Armadas)", esGolpe: true },
        { numero: 24, nombre: "Pedro Eugenio Aramburu", periodo: "1955–1958", partido: "De facto (Fuerzas Armadas)", esGolpe: true },
        { numero: 25, nombre: "Arturo Frondizi", periodo: "1958–1962", partido: "Unión Cívica Radical Intransigente (UCRI)" },
        { numero: 26, nombre: "José María Guido", periodo: "1962–1963", partido: "Unión Cívica Radical Intransigente (UCRI)" },
        { numero: 27, nombre: "Arturo Illia", periodo: "1963–1966", partido: "Unión Cívica Radical del Pueblo (UCRP)" }
      ]
    },
    {
      titulo: "DICTADURA \"REVOLUCIÓN ARGENTINA\"",
      estiloTitulo: "guia-titulo-indigo",
      items: [
        { numero: 28, nombre: "Juan Carlos Onganía", periodo: "1966–1970", partido: "De facto (Junta Militar)", esGolpe: true },
        { numero: 29, nombre: "Roberto M. Levingston", periodo: "1970–1971", partido: "De facto (Junta Militar)", esGolpe: true },
        { numero: 30, nombre: "Alejandro Agustín Lanusse", periodo: "1971–1973", partido: "De facto (Junta Militar)", esGolpe: true }
      ]
    },
    {
      titulo: "REGRESO DEL PERONISMO",
      estiloTitulo: "guia-titulo-orange",
      items: [
        { numero: 31, nombre: "Héctor J. Cámpora", periodo: "1973", partido: "FREJULI - PJ" },
        { numero: 32, nombre: "Raúl Lastiri", periodo: "1973", partido: "FREJULI - PJ" },
        { numero: 33, nombre: "Juan Domingo Perón", periodo: "1973–1974", partido: "FREJULI - PJ" },
        { numero: 34, nombre: "Isabel Martínez de Perón", periodo: "1974–1976", partido: "FREJULI - PJ" }
      ]
    },
    {
      titulo: "PROCESO DE REORGANIZACIÓN NACIONAL (DICTADURA)",
      estiloTitulo: "guia-titulo-indigo",
      items: [
        { numero: 35, nombre: "Jorge Rafael Videla", periodo: "1976–1981", partido: "De facto (Junta Militar)", esGolpe: true },
        { numero: 36, nombre: "Roberto Eduardo Viola", periodo: "1981", partido: "De facto (Junta Militar)", esGolpe: true },
        { numero: 37, nombre: "Leopoldo Fortunato Galtieri", periodo: "1981–1982", partido: "De facto (Junta Militar)", esGolpe: true },
        { numero: 38, nombre: "Reynaldo Bignone", periodo: "1982–1983", partido: "De facto (Militar)", esGolpe: true }
      ]
    },
    {
      titulo: "RETORNO A LA DEMOCRACIA",
      estiloTitulo: "guia-titulo-blue",
      items: [
        { numero: 39, nombre: "Raúl Alfonsín", periodo: "1983–1989", partido: "Unión Cívica Radical (UCR)" },
        { numero: 40, nombre: "Carlos Menem", periodo: "1989–1995", partido: "FREJUPO - PJ" },
        { numero: 41, nombre: "Carlos Menem", periodo: "1995–1999", partido: "Partido Justicialista (PJ)" },
        { numero: 42, nombre: "Fernando de la Rúa", periodo: "1999–2001", partido: "Alianza (UCR / FrePaSo)" },
        { numero: 43, nombre: "Adolfo Rodríguez Saá", periodo: "2001", partido: "Partido Justicialista (PJ)" },
        { numero: 44, nombre: "Eduardo Duhalde", periodo: "2002–2003", partido: "Partido Justicialista (PJ)" },
        { numero: 45, nombre: "Néstor Kirchner", periodo: "2003–2007", partido: "Frente para la Victoria (FPV - PJ)" },
        { numero: 46, nombre: "Cristina Fernández de Kirchner", periodo: "2007–2011", partido: "Frente para la Victoria (FPV - PJ)" },
        { numero: 47, nombre: "Cristina Fernández de Kirchner", periodo: "2011–2015", partido: "Frente para la Victoria (FPV - PJ)" },
        { numero: 48, nombre: "Mauricio Macri", periodo: "2015–2019", partido: "Cambiemos (PRO)" },
        { numero: 49, nombre: "Alberto Fernández", periodo: "2019–2023", partido: "Frente de Todos (FDT - PJ)" },
        { numero: 50, nombre: "Javier Milei", periodo: "2023–Actualidad", partido: "La Libertad Avanza (LLA)" }
      ]
    }
  ];

  return (
    <div className="unidad-container">
      <div className="unidad-content">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al Inicio
          </Link>
        </div>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            CRONOLOGÍA PRESIDENCIAL
          </h1>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">
            Argentina (1880 - Actualidad)
          </p>
        </header>

        <div className="space-y-16">
          {secciones.map((seccion, index) => (
            <section key={index} className="relative">
              <div className="mb-8 sticky top-4 z-10">
                <h2 className={`${seccion.estiloTitulo} bg-white/80 backdrop-blur-sm py-2 pl-4 inline-block pr-4 rounded-r-lg shadow-sm border-l-4 border-current`}>
                  {seccion.titulo}
                </h2>
              </div>

              <div className="relative border-l-2 border-gray-200 ml-4 md:ml-6 space-y-10 pb-4">
                {seccion.items.map((president, i) => (
                  <div key={i} className="relative pl-8 group">
                    {/* Timeline Dot */}
                    <div className={`absolute w-4 h-4 bg-white border-2 rounded-full -left-[9px] top-1.5 group-hover:bg-blue-50 transition-all duration-300 shadow-sm ${
                      president.esGolpe 
                        ? 'border-red-500 bg-red-50 group-hover:border-red-600' 
                        : 'border-gray-300 group-hover:border-blue-500'
                    }`}></div>
                    
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                      {/* Periodo */}
                      <span className={`text-sm font-bold px-2 py-0.5 rounded-md self-start whitespace-nowrap ${
                        president.esGolpe 
                          ? 'text-red-600 bg-red-50' 
                          : 'text-blue-600 bg-blue-50'
                      }`}>
                        {president.periodo}
                      </span>
                      
                      {/* Contenido */}
                      <div className="flex-1">
                        <h3 className={`text-lg md:text-xl font-black transition-colors leading-tight ${
                          president.esGolpe 
                            ? 'text-red-700 group-hover:text-red-800' 
                            : 'text-gray-900 group-hover:text-blue-700'
                        }`}>
                          <span className={`${president.esGolpe ? 'text-red-400' : 'text-gray-400'} font-bold mr-2 text-base`}>
                            {president.numero}.
                          </span>
                          {president.nombre}
                          {president.esGolpe && (
                            <span className="ml-2 text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full uppercase tracking-tighter align-middle">
                              De facto
                            </span>
                          )}
                        </h3>
                        <p className={`text-sm mt-1 font-medium italic ${
                          president.esGolpe ? 'text-red-500/80' : 'text-gray-600'
                        }`}>
                          {president.partido}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t border-gray-200 text-center text-gray-400 text-sm italic">
          Fuentes consultadas: Bibliografía oficial ICSE - Cátedra Denkberg
        </footer>
      </div>
    </div>
  );
}
