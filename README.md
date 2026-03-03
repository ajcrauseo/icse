# ICSE - Introducción a la Sociedad y el Estado

Sitio web educativo para la materia **Introducción a la Sociedad y el Estado (ICSE)** de **UBA XXI**, **Cátedra Denkberg**.

Este proyecto proporciona contenido organizado y accesible de las 6 unidades del programa de la materia, diseñado para facilitar el estudio de los estudiantes.

## 🎓 Sobre el Proyecto

ICSE es una aplicación web desarrollada con **Next.js 16** que presenta el contenido académico de manera estructurada, responsive y fácil de navegar. El sitio incluye material teórico organizado por unidades y guías de lectura.

## 🚀 Tecnologías

- **[Next.js 16.1.6](https://nextjs.org/)** - Framework de React para aplicaciones web
- **[React 19.2.3](https://react.dev/)** - Biblioteca para interfaces de usuario
- **[TypeScript 5](https://www.typescriptlang.org/)** - Tipado estático para JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework de CSS utility-first
- **[ESLint](https://eslint.org/)** - Linter para mantener calidad de código

## 📚 Contenido

### Unidad 1: Conceptos y definiciones acerca de la relación entre la Sociedad y el Estado
- Guía 1: La sociedad, el Estado y las instituciones (Yannuzzi)
- Guía 2: Conceptualización del Estado (Gómez Talavera)
- Guía 3: Tipos de Estado (García)
- Guía 4: Regímenes Políticos (Povse)
- Guía 5: La Poliarquía (Batlle)

### Unidad 2: El orden conservador (1880-1916)
- Guía de lectura: Romero, Cap. I
- Guías de lectura: Romero, Cap. II, Hora - Los gobiernos radicales

### Unidad 3: La restauración conservadora (1930-1943) y el peronismo clásico (1943-1955)
- Parte 1: La Restauración Conservadora (1930-1943)
  - Guía 1: Romero Cap. III
  - Guía 2: Golpes de Estado (Deich)
- Parte 2: El Peronismo Clásico (1943-1955)
  - Guía 3: Romero Cap. IV
  - Guía 4: Populismo (Petrino)

### Unidad 4: El empate (1955-1966) - Dependencia o Liberación (1966-1976)
- Guía 1: El empate (1955-1966) - Romero Cap. V
- Guía 2: Dependencia o Liberación (1966-1976) - Romero Cap. VI
- Guía 3: Orientaciones desde la Unidad 1

### Unidades 5-6
En construcción 🚧

## 🛠️ Instalación

### Prerrequisitos

- Node.js 20 o superior
- npm, yarn, pnpm o bun

### Pasos

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd icse
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

## 📦 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run start    # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

## 📂 Estructura del Proyecto

```
icse/
├── app/
│   ├── layout.tsx          # Layout principal con Navbar
│   ├── page.tsx            # Página de inicio
│   ├── globals.css         # Estilos globales
│   └── unidad/
│       ├── 1/
│       │   └── page.tsx    # Contenido Unidad 1
│       ├── 2/
│       │   └── page.tsx    # Contenido Unidad 2
│       ├── 3/
│       │   └── page.tsx    # Contenido Unidad 3 
│       ├── 4/
│       │   └── page.tsx    # Contenido Unidad 4 
│       ├── 5/
│       │   └── page.tsx    # Contenido Unidad 5 (en construcción)
│       └── 6/
│           └── page.tsx    # Contenido Unidad 6 (en construcción)
├── components/
│   └── Navbar.tsx          # Componente de navegación responsive
├── public/                 # Archivos estáticos
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Características

- ✅ **Diseño Responsive**: Optimizado para móviles, tablets y escritorio
- ✅ **Navegación Intuitiva**: Navbar con menú hamburguesa en móviles
- ✅ **Organización por Unidades**: Contenido estructurado y fácil de seguir
- ✅ **Código con Colores**: Diferentes colores para cada guía y conceptos importantes
- ✅ **Tablas Responsive**: Scroll horizontal en pantallas pequeñas
- ✅ **Tipografía Escalable**: Se adapta según el tamaño de pantalla
- ✅ **Modo Oscuro**: (Próximamente)

## 🌐 Navegación

El sitio cuenta con las siguientes rutas:

- `/` - Página de inicio con resumen de la materia
- `/unidad/1` - Unidad 1 (disponible)
- `/unidad/2` - Unidad 2 (disponible)
- `/unidad/3` - Unidad 3 (disponible)
- `/unidad/4` - Unidad 4 (disponible)
- `/unidad/5` - Unidad 5 (en construcción)
- `/unidad/6` - Unidad 6 (en construcción)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📝 Roadmap

- [x] Página de inicio
- [x] Navbar responsive
- [x] Unidad 1 completa
- [x] Unidad 2 completa
- [x] Unidad 3 completa
- [x] Unidad 4 completa
- [ ] Unidades 5-6
- [ ] Modo oscuro
- [ ] Búsqueda de contenido
- [ ] Exportar a PDF
- [ ] Versión imprimible

## ⚠️ Disclaimer

Este es un proyecto educativo no oficial creado como material de apoyo para estudiantes de ICSE - UBA XXI. 

**No reemplaza la bibliografía oficial ni las clases de la cátedra.** Se recomienda complementar este material con:
- La bibliografía oficial de la materia
- Las clases virtuales de la Cátedra Denkberg
- Los materiales disponibles en el campus de UBA XXI

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

Proyecto desarrollado por *[Antony Cabeza](https://instagram.com/ajcrauseo)* para facilitar el estudio de ICSE en UBA XXI.

---

**⭐ Si este proyecto te resulta útil, considera darle una estrella en GitHub!**