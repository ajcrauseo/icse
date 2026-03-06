import Link from 'next/link';

export default function Unidad5Hub() {
  const guias = [
    {
      id: 1,
      titulo: "El Proceso (1976-1983)",
      autor: "Romero Cap. VII",
      ruta: "/unidad/5/guia1",
      estilos: {
        barra: "bg-blue-600",
        badge: "bg-blue-100 text-blue-800",
        tituloHover: "group-hover:text-blue-600",
        flechaHover: "group-hover:text-blue-500"
      }
    },
    {
      id: 2,
      titulo: "El Terrorismo de Estado",
      autor: "Etchevest",
      ruta: "/unidad/5/guia2",
      estilos: {
        barra: "bg-red-600",
        badge: "bg-red-100 text-red-800",
        tituloHover: "group-hover:text-red-600",
        flechaHover: "group-hover:text-red-500"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-2">
          Unidad 5
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          De la violencia política al terrorismo de Estado (1976-1983)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guias.map((guia) => (
            <Link 
              key={guia.id}
              href={guia.ruta}
              className={`group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1`}
            >
              {/* Franja de color superior */}
              <div className={`h-3 w-full ${guia.estilos.barra}`}></div>
              
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide ${guia.estilos.badge}`}>
                      Guía {guia.id}
                    </span>
                  </div>
                  <h2 className={`text-2xl font-bold text-gray-900 transition-colors ${guia.estilos.tituloHover}`}>
                    {guia.titulo}
                  </h2>
                  <p className="mt-2 text-gray-500 text-sm font-medium italic">
                    {guia.autor}
                  </p>
                </div>
                
                <div className="mt-auto flex items-center text-gray-400 group-hover:text-gray-600 transition-colors">
                  <span className="text-sm font-semibold mr-2 transition-colors group-hover:text-blue-600">
                    Comenzar lectura
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 ${guia.estilos.flechaHover}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-600 hover:underline font-medium">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
