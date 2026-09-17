# Portafolio — Snayder Cedeño

Portafolio web personal, responsive e interactivo, desarrollado como tarea
de la materia **Desarrollo Web** (8vo semestre, Ingeniería en Software —
UNEMI). Construido con HTML5 semántico, CSS propio basado en un design
system con custom properties, y JavaScript vanilla, sin frameworks ni
pasos de build.

## Demo

Publicado con GitHub Pages: https://snayderc.github.io/Portafolio-DesarrolloWeb/

## Tecnologías

- HTML5 semántico (`header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `footer`)
- CSS3: Custom Properties, Flexbox, Grid, Media Queries, modo claro/oscuro
- JavaScript (vanilla, ES5+, sin dependencias)
- Git / GitHub / GitHub Pages

## Estructura del proyecto

```
PORTAFOLIO/
├── index.html            Inicio / Presentación
├── sobre-mi.html          Sobre mí
├── skills.html            Habilidades técnicas
├── proyectos.html         Proyectos destacados (filtro + modal)
├── design-system.html     Design System / Componentes
├── contacto.html          Contacto (formulario validado)
├── css/
│   ├── variables.css      Tokens: color, tipografía, espaciado, radios, sombras
│   ├── base.css            Reset y tipografía global
│   ├── layout.css          Header, navbar, secciones, grillas, footer
│   ├── components.css      Botones, cards, badges, formularios, modal, etc.
│   ├── utilities.css       Helpers y animaciones
│   └── responsive.css      Media queries (tablet / móvil)
├── js/
│   ├── nav.js              Menú responsive (hamburguesa)
│   ├── theme.js             Tema claro/oscuro con localStorage
│   ├── projects.js          Filtro de proyectos por tecnología + modal
│   ├── form.js               Validación del formulario de contacto
│   ├── scrolltop.js          Botón "volver al inicio"
│   └── main.js                Año del footer + animaciones al hacer scroll
├── assets/img/             Favicon, foto de perfil y capturas reales
│   └── certs/              Miniaturas de certificados
└── assets/certs/           PDFs reales de certificaciones
```

## Funcionalidades interactivas (JavaScript)

1. **Menú responsive** — se colapsa en hamburguesa en móvil/tablet.
2. **Tema claro/oscuro** — persistido en `localStorage`, respeta la
   preferencia del sistema si el usuario no eligió ninguna.
3. **Filtro de proyectos por tecnología** — en la página Proyectos.
4. **Modal de detalle de proyecto** — muestra descripción completa,
   problema resuelto, tecnologías y enlaces sin salir de la página.
5. **Validación de formulario de contacto** — en tiempo real y al enviar,
   con mensajes de error específicos por campo.
6. **Botón "volver al inicio"** con scroll suave.

## Cómo verlo localmente

No requiere instalación ni build. Basta con un servidor estático simple
(abrir `index.html` directo con doble clic también funciona, salvo que
se prefiera un servidor para evitar cualquier restricción de archivo local):

```bash
# Opción 1: Python
python3 -m http.server 8000

# Opción 2: extensión "Live Server" de VS Code
```

Luego abrir `http://localhost:8000`.

## Notas de contenido

- Los proyectos mostrados (TechCheck Pro, TechPoint POS, AI Routine
  Planner) son proyectos reales disponibles en
  [github.com/SnayderC](https://github.com/SnayderC).
- Las imágenes de los proyectos son capturas reales de cada plataforma.
- El avatar de Inicio usa la foto real (`assets/img/yo.jpeg`).
- El formulario de contacto valida en el cliente pero no envía correos
  reales (no hay backend). Para conectarlo a un envío real, integrar un
  servicio como Formspree o EmailJS en `js/form.js`.

## Checklist antes de entregar

- [x] Crear repositorio público en GitHub y subir el proyecto con varios commits.
- [x] Publicar con GitHub Pages.
- [ ] Probar en ventana de incógnito: navegación, JS, CSS, imágenes y consola sin errores.
- [ ] Probar en móvil (DevTools o dispositivo real).
