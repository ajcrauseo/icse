'use client';

import Link from 'next/link';

interface GuideNavProps {
  prev?: {
    title: string;
    href: string;
  };
  next?: {
    title: string;
    href: string;
  };
}

export default function GuideNav({ prev, next }: GuideNavProps) {
  return (
    <div className="mt-12 mb-8 flex justify-between items-center gap-4">
      {/* Botón anterior */}
      {prev ? (
        <Link
          href={prev.href}
          className="group flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-100 hover:bg-blue-100 transition-colors max-w-xs"
          title="Requerimientos: Presiona ← o click"
        >
          <svg
            className="w-6 h-6 text-blue-600 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <div className="text-sm">
            <p className="text-gray-500 text-xs">Anterior</p>
            <p className="text-gray-900 font-semibold line-clamp-1">{prev.title}</p>
          </div>
        </Link>
      ) : (
        <div className="w-xs" />
      )}

      {/* Indicador de teclado */}
      <div className="text-center text-xs text-gray-400">
        <p>Navega con:</p>
        <p className="font-mono font-semibold text-gray-600">← | →</p>
      </div>

      {/* Botón siguiente */}
      {next ? (
        <Link
          href={next.href}
          className="group flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-100 hover:bg-blue-100 transition-colors max-w-xs ml-auto"
          title="Requerimientos: Presiona → o click"
        >
          <div className="text-right text-sm">
            <p className="text-gray-500 text-xs">Siguiente</p>
            <p className="text-gray-900 font-semibold line-clamp-1">{next.title}</p>
          </div>
          <svg
            className="w-6 h-6 text-blue-600 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ) : (
        <div className="w-xs" />
      )}
    </div>
  );
}
