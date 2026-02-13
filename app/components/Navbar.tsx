'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const unidades = [1, 2, 3, 4, 5, 6];

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home */}
          <Link 
            href="/" 
            className="text-xl font-bold hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            ICSE
          </Link>

          {/* Botón hamburguesa (solo móvil) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded hover:bg-gray-700 transition"
            aria-label="Menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Links desktop (ocultos en móvil) */}
          <div className="hidden md:flex space-x-4">
            {unidades.map((numero) => (
              <Link
                key={numero}
                href={`/unidad/${numero}`}
                className="px-3 py-2 rounded hover:bg-gray-700 transition"
              >
                Unidad {numero}
              </Link>
            ))}
          </div>
        </div>

        {/* Menú móvil (se despliega hacia abajo) */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {unidades.map((numero) => (
                <Link
                  key={numero}
                  href={`/unidad/${numero}`}
                  className="group flex items-center justify-between w-full bg-gray-700 hover:bg-blue-600 text-white font-medium py-4 px-5 rounded-xl transition-all duration-200 active:scale-95 shadow-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-lg">Unidad {numero}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}