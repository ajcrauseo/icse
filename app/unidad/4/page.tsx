import Link from 'next/link';

export default function Unidad4Hub() {
  const guias = [
    {
      id: 1,
      titulo: "El empate (1955-1966)",
      autor: "Romero Cap. V",
      ruta: "/unidad/4/guia1",
      estilos: {
        barra: "bg-blue-600",
        badge: "bg-blue-100 text-blue-800",
        tituloHover: "group-hover:text-blue-600",
        flechaHover: "group-hover:text-blue-500"
      }
    },
    {
      id: 2,
      titulo: "Dependencia o Liberación (1966-1976)",
      autor: "Romero Cap. VI",
      ruta: "/unidad/4/guia2",
      estilos: {
        barra: "bg-green-600",
        badge: "bg-green-100 text-green-800",
        tituloHover: "group-hover:text-green-600",
        flechaHover: "group-hover:text-green-500"
      }
    },
    {
      id: 3,
      titulo: "Orientaciones Teóricas",
      autor: "Relación con conceptos de Unidad 1",
      ruta: "/unidad/4/relacion-conceptos",
      estilos: {
        barra: "bg-indigo-600",
        badge: "bg-indigo-100 text-indigo-800",
        tituloHover: "group-hover:text-indigo-600",
        flechaHover: "group-hover:text-indigo-500"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-2">
          Unidad 4
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          El empate (1955-1966) - Dependencia o Liberación (1966-1976)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guias.map((guia) => (
            <Link 
              key={guia.id}
              href={guia.ruta}
              className={`group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1`}
            >
              <div className={`h-3 w-full ${guia.estilos.barra}`}></div>
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide ${guia.estilos.badge}`}>
                    {guia.id === 3 ? "Análisis" : `Guía ${guia.id}`}
                  </span>
                </div>
                
                <h2 className={`text-xl font-bold text-gray-900 mb-2 transition-colors ${guia.estilos.tituloHover}`}>
                  {guia.titulo}
                </h2>
                
                <p className="text-gray-500 text-sm mb-6 grow">
                  {guia.autor}
                </p>

                <div className={`transition-transform self-end ${guia.estilos.flechaHover}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
