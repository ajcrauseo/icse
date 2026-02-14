'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface GuideConfig {
  [key: string]: {
    prev?: string;
    next?: string;
  };
}

// Configuración de navegación entre guías
const guideNavigation: GuideConfig = {
  '/unidad/1/guia1': { next: '/unidad/1/guia2' },
  '/unidad/1/guia2': { prev: '/unidad/1/guia1', next: '/unidad/1/guia3' },
  '/unidad/1/guia3': { prev: '/unidad/1/guia2', next: '/unidad/1/guia4' },
  '/unidad/1/guia4': { prev: '/unidad/1/guia3', next: '/unidad/1/guia5' },
  '/unidad/1/guia5': { prev: '/unidad/1/guia4' },
  '/unidad/2/guia1': { next: '/unidad/2/guia2' },
  '/unidad/2/guia2': { prev: '/unidad/2/guia1' },
  '/unidad/3/parte1': { next: '/unidad/3/parte2' },
  '/unidad/3/parte2': { prev: '/unidad/3/parte1' },
};

export default function KeyboardNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentGuide = guideNavigation[pathname];
      
      if (!currentGuide) return;

      if (e.key === 'ArrowRight' && currentGuide.next) {
        e.preventDefault();
        router.push(currentGuide.next);
      } else if (e.key === 'ArrowLeft' && currentGuide.prev) {
        e.preventDefault();
        router.push(currentGuide.prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pathname, router]);

  return null;
}
