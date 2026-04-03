# 🛒 Carrito de Compras — Taller 2 React

Aplicación web desarrollada con **React + Vite** como parte del Taller 2 del programa de formación en desarrollo frontend. El proyecto explora conceptos fundamentales de React como componentes, props, hooks y navegación entre páginas.

---

## 📋 Descripción

**Carrito de Compras** es una Single Page Application (SPA) que simula un catálogo de productos gamer con funcionalidades de gestión de inventario. El usuario puede visualizar productos, agregar nuevos artículos al catálogo, editarlos, eliminarlos y explorar conceptos clave de React a través de una sección educativa sobre Props.

---

## ✨ Características Principales

- 📦 **Catálogo de productos** con imagen, nombre, categoría, precio y estado de stock
- ➕ **Agregar productos** al catálogo mediante un formulario lateral
- ✏️ **Editar y eliminar** productos existentes
- 🔍 **Barra de búsqueda** en el header para filtrar contenido
- 📄 **Sección Props React** con explicación interactiva del concepto y ejemplos visuales con personajes reales
- 🧭 **Navegación entre páginas**: Inicio, Articles y Props
- 📱 Layout responsivo con Bootstrap

---

## 🖼️ Interfaz Gráfica

La aplicación cuenta con tres vistas principales:

| Vista | Descripción |
|-------|-------------|
| **Inicio** | Página principal de bienvenida |
| **Articles** | Catálogo de productos gamer con formulario de gestión |
| **Props** | Página educativa sobre Props en React con tarjetas de personajes |

### Vista Articles
Muestra 6 productos gamer (Mouse, Teclado, Pantalla, Mouse Pad, Silla y Audiculares) organizados en una grilla de tarjetas. Cada tarjeta muestra imagen, nombre, categoría, precio en COP y badge de disponibilidad (In stock / Pocas unidades / Sin stock). A la derecha se encuentra el formulario para agregar nuevos productos.

### Vista Props
Sección educativa que renderiza dinámicamente tarjetas de científicas destacadas (Katsuko Saruhashi, Aklilu Lemma y Lin Lanying) usando el componente `Persons` y el concepto de Props de React.

---

## 🗂️ Arquitectura del Proyecto

```
MyFirstApp/
|
├── public/
│   └── images/              # Imágenes estáticas de productos y personajes
│       ├── Katsuko.png
│       ├── Aklilu.png
│       ├── Lin.png
│       ├── AudicularesGamer.png
│       ├── MouseGamer.png
│       ├── TecladoGamer.png
│       ├── Logo.png
│       ├── MousePadGamer.png
│       ├── PantallaGamer.png
│       └── SillaGamer.png
|
├── src/
│   ├── articles/
│   │   ├── components/
│   │   │   └── Articles.jsx      # Componente principal del catálogo
│   │   ├── hooks/                # Custom hooks del módulo articles
│   │   └── pages/
|   |
│   ├── layout/
│   │   ├── components/
│   │   │   ├── Header.jsx        # Navbar con búsqueda y navegación
│   │   │   ├── Footer.jsx        # Pie de página con copyright
│   │   │   └── Content.jsx       # Contenedor principal de contenido
│   │   ├── pages/
│   │   └── hooks/
|   |
│   ├── props/
│   │   ├── components/
│   │   │   └── Persons.jsx       # Componente reutilizable de tarjeta de persona
│   │   ├── hooks/
│   │   └── pages/
│   │       └── Props.jsx         # Página educativa de Props
|   |
│   ├── App.jsx                   # Componente raíz y configuración de rutas
│   └── main.jsx                  # Punto de entrada de la aplicación
|
├── index.html
├── vite.config.js
├── package-lock.json
├── package.json
├── eslint.config.js
├── README.md
└── .gitignore
```

### Tecnologías utilizadas

- **React 18** — Biblioteca principal de UI
- **Vite** — Bundler y servidor de desarrollo
- **React Router DOM** — Navegación entre páginas
- **Bootstrap** — Estilos y componentes visuales

---

## 👨‍💻 Datos del Autor

| | |
|---|---|
| **Nombre** | Juan José Giraldo |
| **GitHub** | [@juangiraaaldo](https://github.com/juangiraaaldo) |
| **Programa** | Desarrollo Frontend — SENA 2026 |
| **Repositorio** | [Taller2-React](https://github.com/juangiraaaldo/Taller2-React) |

---

© 2026 Juan José Giraldo — All Rights Reserved