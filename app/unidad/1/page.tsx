import Link from 'next/link';

export default function Unidad1Hub() {
  const guias = [
    {
      id: 1,
      titulo: "La sociedad, el Estado y las instituciones",
      autor: "Yannuzzi",
      ruta: "/unidad/1/guia1",
      estilos: {
        barra: "bg-blue-600",
        badge: "bg-blue-100 text-blue-800",
        tituloHover: "group-hover:text-blue-600",
        flechaHover: "group-hover:text-blue-500"
      }
    },
    {
      id: 2,
      titulo: "Conceptualización del Estado",
      autor: "Gómez Talavera",
      ruta: "/unidad/1/guia2",
      estilos: {
        barra: "bg-purple-600",
        badge: "bg-purple-100 text-purple-800",
        tituloHover: "group-hover:text-purple-600",
        flechaHover: "group-hover:text-purple-500"
      }
    },
    {
      id: 3,
      titulo: "Tipos de Estado",
      autor: "García",
      ruta: "/unidad/1/guia3",
      estilos: {
        barra: "bg-green-600",
        badge: "bg-green-100 text-green-800",
        tituloHover: "group-hover:text-green-600",
        flechaHover: "group-hover:text-green-500"
      }
    },
    {
      id: 4,
      titulo: "Regímenes Políticos",
      autor: "Povse",
      ruta: "/unidad/1/guia4",
      estilos: {
        barra: "bg-red-600",
        badge: "bg-red-100 text-red-800",
        tituloHover: "group-hover:text-red-600",
        flechaHover: "group-hover:text-red-500"
      }
    },
    {
      id: 5,
      titulo: "La Poliarquía",
      autor: "Batlle",
      ruta: "/unidad/1/guia5",
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
          Unidad 1
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Conceptos y definiciones acerca de la relación entre la Sociedad y el Estado
        </p>

        <div className="grid grid-cols-1 gap-6">
          {guias.map((guia) => (
            <Link 
              key={guia.id}
              href={guia.ruta}
              className={`group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1`}
            >
              {/* Franja de color superior */}
              <div className={`h-3 w-full ${guia.estilos.barra}`}></div>
              
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    {/* Etiqueta de la guía */}
                    <span className={`text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide ${guia.estilos.badge}`}>
                      Guía {guia.id}
                    </span>
                    <span className="ml-3 text-gray-500 text-sm font-medium">
                      {guia.autor}
                    </span>
                  </div>
                  
                  {/* Título de la tarjeta */}
                  <h2 className={`text-xl font-bold text-gray-900 transition-colors ${guia.estilos.tituloHover}`}>
                    {guia.titulo}
                  </h2>
                </div>
                
                {/* Flecha de navegación */}
                <span className={`text-gray-300 transition-colors hidden md:block ${guia.estilos.flechaHover}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}