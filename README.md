<div align="center">
  <img src="docs/screenshots/01_gearstore_hero.png" width="100%" alt="GearStore - E-Commerce de Periféricos" style="border-radius: 8px;" />
</div>

<h1 align="center">GearStore</h1>
<p align="center">
  Plataforma de comercio electrónico de hardware gaming y librería de componentes UI interactiva.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/React_Router-7.1-CA4245?style=flat-square&logo=reactrouter&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/CSS3-Modular-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
</p>

---

## Descripcion General

**GearStore** es una tienda web especializada en periféricos de alto rendimiento y hardware gaming construida con **React 19** y **Vite**. 

El núcleo del proyecto reside en el desarrollo de un **sistema propio de componentes UI desacoplados y reutilizables**, integrando control de estados reactivo, transiciones fluidas, modales con efecto glassmorphism y un flujo de compra completo con panel deslizable de carrito (Drawer Cart).

---

## Demostraciones del Sistema

### 1. Navegacion, Categorias y Catalogo

<div align="center">
  <img src="docs/screenshots/demo_landing.gif" width="95%" alt="Demostración de navegación y catálogo en GearStore" style="border-radius: 8px;" />
</div>

<br />

### 2. Flujo de Compra y Carrito Deslizable

<div align="center">
  <img src="docs/screenshots/demo_compra.gif" width="95%" alt="Demostración de modal de producto y carrito de compra" style="border-radius: 8px;" />
</div>

---

## Modulos y Funcionalidades

### 1. Catalogo de Periféricos y Filtros Dinamicos

El catálogo clasifica dispositivos por categorías principales (Mouses, Teclados, Audífonos, Accesorios, Controles, Laptops) con renderizado condicional inmediato.

<div align="center">
  <img src="docs/screenshots/02_catalogo_ofertas.png" width="95%" alt="Grilla de catálogo con insignias de oferta" style="border-radius: 6px;" />
</div>

* **Etiquetado de Ofertas:** Insignias de descuento y precios calculados en tiempo real.
* **Búsqueda Instantánea:** Entrada con filtrado predictivo por nombre de producto y categoría técnica.
* **Filtros Especiales:** Vista directa para productos destacados y promociones exclusivas.

<br />

### 2. Showcase Interactivo de Producto

Sección interactiva inspirada en landing pages de hardware de gama alta para destacar especificaciones acústicas y de ingeniería.

<div align="center">
  <img src="docs/screenshots/03_showcase_airpods.png" width="95%" alt="Showcase interactivo de producto" style="border-radius: 6px;" />
</div>

* **Despiece Visual (Explode View):** Demostración de componentes internos de audio computacional y cancelación activa de ruido.
* **Llamado a la Acción Directo:** Apertura directa del modal de configuración y compra.

<br />

### 3. Gestion de Carrito y Checkout

Módulo de carrito persistente en estado lateral (Drawer) que permite gestionar múltiples artículos en sesión.

<div align="center">
  <img src="docs/screenshots/04_carrito_drawer.png" width="95%" alt="Panel de carrito deslizable con resumen de compra" style="border-radius: 6px;" />
</div>

* **Controles Numéricos (Stepper):** Aumento y reducción de cantidades por ítem con validación de mínimos.
* **Cálculo Automático:** Actualización del importe total en dólares (USD) según modificaciones en tiempo real.
* **Acceso Rápido:** Indicador flotante con contador dinámico de artículos acumulados.

<br />

### 4. Galeria de Marca y Comunidad Esports

<div align="center">
  <img src="docs/screenshots/05_galeria_esports.png" width="95%" alt="Galería de comunidad y jugadores profesionales" style="border-radius: 6px;" />
</div>

* **Respaldado Pro:** Tarjetas visuales de atletas de esports y periféricos oficiales en competencia.
* **Grid Adaptativo:** Distribución fluida para monitores de alta resolución y dispositivos móviles.

---

## Librería de Componentes UI Propios

El proyecto se estructuró a partir de una suite de componentes personalizados ubicados en `src/components/`, exportados centralizadamente a través de `src/index.jsx`:

| Componente | Rol en el Sistema |
| :--- | :--- |
| **Modal / AlertModal** | Diálogos modales con backdrop blur (glassmorphism) para avisos y vista previa detallada de producto. |
| **SideBar (Drawer)** | Panel lateral deslizable para el carrito de compras con control de backdrop y cierre por teclado (`Esc`). |
| **Stepper** | Selector numérico reactivo para control de cantidades en el carrito. |
| **SwitchToggle** | Alternador de estado para filtros binarios y visualización de ofertas. |
| **Tabs** | Pestañas de conmutación rápida entre categorías de producto sin recarga de página. |
| **Carrusel** | Visor de productos y banners promocionales con navegación por flechas y gestos táctiles. |
| **ShowcaseBox** | Contenedor interactivo para exhibición de hardware con variantes de color. |
| **Toast & Tooltip** | Notificaciones flotantes y microtextos de ayuda contextual. |

---

## Estructura del Repositorio

```text
├── docs/
│   └── screenshots/         # Capturas de pantalla en alta resolución y GIFs demostrativos
├── public/                  # Recursos estáticos de la aplicación
├── src/
│   ├── assets/              # Fotografías de productos y periféricos
│   ├── components/          # Librería de componentes UI reutilizables
│   │   ├── acordeon/
│   │   ├── boton/
│   │   ├── carrusel/
│   │   ├── modal/
│   │   ├── select-dinamico/
│   │   ├── ShowcaseBox/
│   │   ├── Side-bar/
│   │   ├── stepper/
│   │   ├── switch-toggle/
│   │   ├── table/
│   │   ├── tabs/
│   │   ├── toast/
│   │   └── tooltip/
│   ├── App.jsx              # Estructura principal, estado del carrito y vistas
│   ├── index.jsx            # Punto de exportación de componentes UI
│   ├── main.jsx             # Renderizado raíz de React 19
│   └── store-theme.css      # Variables de diseño y tema oscuro
├── index.html               # Plantilla HTML base
├── package.json             # Dependencias del proyecto
└── vite.config.js           # Configuración de compilación con Vite
```

---

## Alcance del Proyecto

Este repositorio forma parte de mi **portafolio profesional de desarrollo de software**, concebido para exhibir el diseño de librerías de componentes UI en **React 19**, la gestión de estados globales y la construcción de interfaces oscuras orientadas al sector gaming.

El código y material multimedia se presentan exclusivamente como muestra técnica de competencias Frontend y Full Stack.

---

## Autor

**Eduardo José Contreras Borrero**  
Software Developer & Full Stack Junior  
* **LinkedIn:** [linkedin.com/in/eduardo-contreras-dev](https://www.linkedin.com/in/eduardo-contreras-dev/)  
* **GitHub:** [@ejcb11](https://github.com/ejcb11)  
* **Contacto:** ejcb2006@gmail.com
