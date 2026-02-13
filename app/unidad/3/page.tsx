import Link from 'next/link';

export default function Unidad3Hub() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-2">
          Unidad 3
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          La restauración conservadora y el peronismo clásico
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tarjeta Parte 1 - Blue (Matches Guía 1) */}
          <Link 
            href="/unidad/3/parte1"
            className="group block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
          >
            <div className="h-3 bg-blue-600"></div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">
                  Parte 1
                </span>
                <span className="text-gray-400 group-hover:text-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                La Restauración Conservadora
              </h2>
              <p className="text-gray-600 mb-4">
                (1930-1943)
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Guía 1: Romero Cap. III
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Guía 2: Golpes de Estado (Deich)
                </div>
              </div>
            </div>
          </Link>

          {/* Tarjeta Parte 2 - Green (Matches Guía 3) */}
          <Link 
            href="/unidad/3/parte2"
            className="group block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
          >
            <div className="h-3 bg-green-600"></div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full">
                  Parte 2
                </span>
                <span className="text-gray-400 group-hover:text-green-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                El Peronismo Clásico
              </h2>
              <p className="text-gray-600 mb-4">
                (1943-1955)
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Guía 3: Romero Cap. IV
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  Guía 4: Populismo (Petrino)
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}