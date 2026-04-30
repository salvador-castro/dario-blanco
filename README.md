# Salon & Boutique Darío Blanco — Sitio Web

Sitio institucional para **Salon & Boutique Darío Blanco**, peluquería premium ubicada en Villa Urquiza, CABA. Diseño oscuro y elegante con acento dorado, hero en video y catálogo de servicios con reserva directa por WhatsApp. Construido con React + Vite + Tailwind CSS v4.

---

## Vista previa

| Hero | Servicios |
|------|-----------|
| Hero fullscreen con video de fondo + tipografía dorada | Grid de 8 servicios con cards premium y reserva por WhatsApp |

---

## Información del negocio

| | |
|---|---|
| **Nombre** | Salon & Boutique Darío Blanco |
| **Rubro** | Peluquería y Estética Premium |
| **Dirección** | Av. Congreso 5336, Villa Urquiza, CABA |
| **WhatsApp** | [1139259413](https://wa.me/5491139259413) |
| **Web** | [salonboutiquedarioblanco.com.ar](https://www.salonboutiquedarioblanco.com.ar/) |

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev/) | 19.x | UI y componentes |
| [Vite](https://vitejs.dev/) | 8.x | Bundler y dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Estilos y sistema de diseño |
| [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite) | 4.x | Plugin de integración con Vite |
| [Google Fonts](https://fonts.google.com/) | — | Playfair Display + Inter |

Sitio 100% estático, sin backend ni base de datos.

---

## Características

- **Hero fullscreen** con video de fondo en loop (`/hero-dario-blanco.mp4`) y overlay oscuro
- **Navbar fijo** con glassmorphism (backdrop-filter blur) y acento dorado
- **Catálogo de servicios** con 8 tratamientos y experiencias con precios y reserva
- **Ritual Capilar Boutique** como servicio estrella (card destacada con badge "Más popular")
- **Sección "Nosotros"** con imagen, texto y grilla de 4 diferenciadores
- **Feed de Instagram** con integración visual
- **Formulario de contacto** para consultas y reservas
- **Botón flotante de WhatsApp** fijo en pantalla
- **Smooth scroll** nativo entre secciones
- **Diseño responsive** (mobile-first)
- **Microanimaciones** de elevación en service cards al hover

---

## Servicios

| Servicio | Tag | Precio |
|---|---|---|
| ✨ Ritual Capilar Boutique | Experiencia estrella | $85.000 |
| ✂️ Corte Signature | Personalizado (Visagismo) | $35.000 |
| ✂️ Corte + Modelado Boutique | Incluye lavado | $47.000 |
| 💨 Secado / Modelado Boutique | Modelado & Styling | $12.000 |
| 💎 Kérastase Force Architecte | Servicio Premium | $59.000 |
| 🌿 Kérastase Nutritive Masquintense | Servicio Premium | $59.000 |
| 💫 Brushing | Según largo | Desde $22.000 |
| 🎨 Retoque de Raíz Majirel L'Oréal | Hasta 2 cm | $65.000 |

---

## Diseño

| Variable | Valor |
|---|---|
| Fondo principal | `#0a0a0a` |
| Cards | `#111111` |
| Borde cards | `#1e1e1e` |
| Texto | `#f0f0f0` |
| Acento dorado | `#C9A84C` → `#E8C97A` |
| Tipografía display | Playfair Display (400, 600, 700, italic) |
| Tipografía body | Inter (300, 400, 500, 600) |

---

## Estructura del proyecto

```
dario-blanco/
├── public/
│   ├── hero-dario-blanco.mp4  # Video principal del hero
│   ├── hero.mp4               # Video alternativo
│   ├── logo.jpg               # Logo del salon
│   ├── icons.svg              # Iconografía del sitio
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── hero.png           # Imagen de respaldo
│   ├── components/
│   │   ├── Navbar.jsx         # Navbar fijo con glassmorphism
│   │   ├── Hero.jsx           # Hero fullscreen con video
│   │   ├── Services.jsx       # Grid de servicios + ServiceCard
│   │   ├── About.jsx          # Sección nosotros + features
│   │   ├── Instagram.jsx      # Feed de Instagram
│   │   ├── Contact.jsx        # Formulario de contacto
│   │   ├── Footer.jsx         # Pie de página
│   │   └── WhatsAppFloat.jsx  # Botón flotante WhatsApp
│   ├── App.jsx                # Componente raíz
│   ├── App.css                # Estilos globales adicionales
│   ├── index.css              # Tokens de diseño + @import Tailwind
│   └── main.jsx               # Entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## Instalación y desarrollo

### Requisitos

- Node.js >= 18

### Pasos

```bash
# 1. Clonar el repositorio
git clone <repo-url>
cd dario-blanco

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Comandos disponibles

```bash
npm run dev      # Servidor de desarrollo con HMR
npm run build    # Build de producción → /dist
npm run preview  # Preview del build de producción
npm run lint     # Linting con ESLint
```

---

## Deploy

El build genera archivos estáticos en `/dist`. Compatible con cualquier hosting estático:

- **Netlify** — arrastrar la carpeta `/dist` o conectar el repo
- **Vercel** — detecta Vite automáticamente
- **GitHub Pages** — ajustando `base` en `vite.config.js`

```bash
npm run build   # Genera /dist listo para subir
```

---

## Licencia

© 2026 Salon & Boutique Darío Blanco · Todos los derechos reservados.
