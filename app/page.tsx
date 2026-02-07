import Link from 'next/link';

export default function Home() {
  const unidades = [
    {
      numero: 1,
      titulo: "Conceptos y definiciones acerca de la relación entre la Sociedad y el Estado",
      descripcion: "Análisis de las instituciones, el Estado y su relación con la sociedad.",
      guias: ["Yannuzzi", "Gómez Talavera", "García", "Povse", "Batlle"],
      disponible: true
    },
    {
      numero: 2,
      titulo: "Unidad 2",
      descripcion: "Contenido en construcción",
      guias: [],
      disponible: false
    },
    {
      numero: 3,
      titulo: "Unidad 3",
      descripcion: "Contenido en construcción",
      guias: [],
      disponible: false
    },
    {
      numero: 4,
      titulo: "Unidad 4",
      descripcion: "Contenido en construcción",
      guias: [],
      disponible: false
    },
    {
      numero: 5,
      titulo: "Unidad 5",
      descripcion: "Contenido en construcción",
      guias: [],
      disponible: false
    },
    {
      numero: 6,
      titulo: "Unidad 6",
      descripcion: "Contenido en construcción",
      guias: [],
      disponible: false
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-blue-900 to-purple-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            ICSE
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-2">
            Introducción a la Sociedad y el Estado
          </h2>
          <p className="text-lg md:text-xl text-blue-200">
            UBA XXI - Cátedra Denkberg
          </p>
        </div>
      </div>

      {/* Descripción */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Sobre la materia
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Introducción a la Sociedad y el Estado (ICSE) es una materia fundamental del CBC que 
            analiza las relaciones entre la sociedad, el Estado y las instituciones políticas.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A través de sus 6 unidades, exploramos conceptos clave como la conformación del Estado 
            moderno, los diferentes tipos de regímenes políticos, la democracia y sus transformaciones 
            históricas.
          </p>
        </div>

        {/* Unidades Grid */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Unidades del Programa
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {unidades.map((unidad) => (
              <Link
                key={unidad.numero}
                href={`/unidad/${unidad.numero}`}
                className={`block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 ${
                  unidad.disponible 
                    ? 'hover:scale-105 cursor-pointer' 
                    : 'opacity-75 cursor-not-allowed'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <span className={`text-3xl font-bold ${
                      unidad.disponible ? 'text-blue-600' : 'text-gray-400'
                    }`}>
                      {unidad.numero}
                    </span>
                    <div className="ml-4">
                      {unidad.disponible ? (
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">
                          Disponible
                        </span>
                      ) : (
                        <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">
                          En construcción
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {unidad.titulo}
                </h4>
                
                <p className="text-gray-600 text-sm mb-3">
                  {unidad.descripcion}
                </p>

                {unidad.guias.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-2 font-semibold">Guías incluidas:</p>
                    <div className="flex flex-wrap gap-2">
                      {unidad.guias.map((guia, index) => (
                        <span 
                          key={index}
                          className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
                        >
                          {guia}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {!unidad.disponible && (
                  <div className="mt-4 flex items-center text-gray-400 text-sm">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Próximamente
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Información adicional */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">📚</div>
            <h4 className="font-bold text-gray-900 mb-2">6 Unidades</h4>
            <p className="text-gray-600 text-sm">
              Contenido completo del programa
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">🎓</div>
            <h4 className="font-bold text-gray-900 mb-2">UBA XXI</h4>
            <p className="text-gray-600 text-sm">
              Cátedra Denkberg
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">✅</div>
            <h4 className="font-bold text-gray-900 mb-2">Actualizado</h4>
            <p className="text-gray-600 text-sm">
              Contenido actualizado 2025
            </p>
          </div>
        </div>

        {/* Nota al pie */}
        <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <p className="text-gray-700 text-sm">
            <span className="font-semibold">Nota:</span> Este material es de apoyo para el estudio. 
            Se recomienda complementar con la bibliografía oficial de la cátedra y las clases virtuales.
          </p>
        </div>
      </div>
    </div>
  );
}