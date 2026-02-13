import Link from 'next/link';

export default function Unidad2Hub() {
  const guias = [
    {
      id: 1,
      titulo: "El orden conservador (1880-1916)",
      autor: "Romero Cap. I",
      ruta: "/unidad/2/guia1",
      estilos: {
        barra: "bg-blue-600",
        badge: "bg-blue-100 text-blue-800",
        tituloHover: "group-hover:text-blue-600",
        flechaHover: "group-hover:text-blue-500"
      }
    },
    {
      id: 2,
      titulo: "Los gobiernos radicales (1916-1930)",
      autor: "Romero Cap. II y Roy Hora",
      ruta: "/unidad/2/guia2",
      estilos: {
        barra: "bg-purple-600",
        badge: "bg-purple-100 text-purple-800",
        tituloHover: "group-hover:text-purple-600",
        flechaHover: "group-hover:text-purple-500"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-2">
          Unidad 2
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          El orden conservador (1880-1916) - Los gobiernos radicales (1916-1930)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guias.map((guia) => (
            <Link 
              key={guia.id}
              href={guia.ruta}
              className={`group block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1`}
            >
              <div className={`h-3 w-full ${guia.estilos.barra}`}></div>
              <div className="p-8 flex flex-col items-center text-center">
                <span className={`text-sm font-bold px-3 py-1 rounded-full mb-4 ${guia.estilos.badge}`}>
                  Guía {guia.id}
                </span>
                
                <h2 className={`text-2xl font-bold text-gray-900 mb-2 transition-colors ${guia.estilos.tituloHover}`}>
                  {guia.titulo}
                </h2>
                
                <p className="text-gray-500 mb-6 font-medium">
                  {guia.autor}
                </p>

                <div className={`transition-transform ${guia.estilos.flechaHover}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
