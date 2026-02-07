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
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {unidades.map((numero) => (
                <Link
                  key={numero}
                  href={`/unidad/${numero}`}
                  className="px-3 py-2 rounded hover:bg-gray-700 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Unidad {numero}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}