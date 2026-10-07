---
name: nk-electronics-ecommerce-style
description: Genera páginas y componentes de tienda online (ecommerce) de tecnología y electrónica de alta gama, 100% responsive y visualmente impactantes para Nk Electronics. Incluye diseño moderno en modo oscuro con paleta en negro, rojo y morado, header con megamenú, ofertas flash, tarjetas de producto con gradientes y microinteracciones, categorías, barra de confianza y checkout optimizado. Úsala cuando se requiera construir o ampliar la tienda, catálogo, ficha de producto, carrito o checkout para Nk Electronics.
---

# Skill: Ecommerce profesional para Nk Electronics

## Objetivo
Construir interfaces de tienda online de tecnología y electrónica para **Nk Electronics**, combinando la **densidad de información comercial** (precios, ofertas, especificaciones técnicas, stock, valoraciones) con un **estilo visual impactante, oscuro y premium** (negro profundo, acentos en rojo vibrante y toques en morado tecnológico). Optimizado para móvil (mobile-first), alto rendimiento y conversión.

## Regla de oro (Identidad de Marca e IP)
Se establece la identidad de **Nk Electronics** usando tokens de diseño estandarizados:
- Paleta cromática corporativa: **Fondo Negro Tech / Dark (`#09090B`, `#121217`)**, **Rojo Primario / CTA (`#FF003C`)** y **Morado Tecnológico / Gradientes (`#7C3AED`)**.
- Los activos de imagen (productos, banners) usarán imágenes de catálogo reales o placeholders optimizados (ej. Unsplash tech / placehold.co).
- Todos los colores, fuentes, logos y estilos deben ser administrados exclusivamente mediante los **tokens CSS de `:root`**.

## Parámetros por defecto para Nk Electronics
1. **Nombre comercial**: Nk Electronics
2. **Esquema de color**: Modo Oscuro / Dark Mode (Negro, Rojo, Morado)
3. **Moneda y locale**: `USD` (`$`) o `EUR` (`€`); `es-ES` / `es-VE` / `es-MX`.
4. **Stack predeterminado**: HTML5 + CSS3 (Variables + Grid/Flexbox) + JavaScript Vanilla (ligero, modular y de carga ultrarrápida). Si se solicita React/Next.js/Vite, usar CSS Modules o Tailwind adaptado a los tokens.

---

## 1. Design tokens (copiar tal cual en `:root`)

Los tokens definen la estética futurista y limpia de **Nk Electronics**:

```css
:root {
  /* Marca Nk Electronics */
  --brand-red:         #FF003C;      /* Rojo principal: CTA, ofertas, badges principales */
  --brand-red-hover:   #D60032;      /* Rojo hover / pressed */
  --brand-red-glow:    rgba(255, 0, 60, 0.35); /* Resplandor rojo */

  --brand-purple:       #7C3AED;      /* Morado acento: etiquetas tech, gradientes, estados secundarios */
  --brand-purple-hover: #6D28D9;      /* Morado hover */
  --brand-purple-glow:  rgba(124, 58, 237, 0.35);

  --gradient-brand:     linear-gradient(135deg, #FF003C 0%, #7C3AED 100%);
  --gradient-dark:      linear-gradient(180deg, #121217 0%, #09090B 100%);

  /* Neutros & Superficies (Dark Mode Base) */
  --bg-main:    #09090B;        /* Fondo principal de página (Negro noche) */
  --surface-1:  #121217;        /* Tarjetas de producto, paneles principales */
  --surface-2:  #1A1A22;        /* Campos de búsqueda, modales, headers */
  --surface-3:  #252530;        /* Estados de hover en elementos de lista */
  
  /* Textos y Bordes */
  --text-main:  #FFFFFF;        /* Texto principal de alto contraste */
  --text-muted: #9CA3AF;        /* Texto secundario y etiquetas */
  --text-dark:  #09090B;        /* Texto sobre fondos rojos/claros */
  --line:       #272734;        /* Divisores y bordes sutiles */
  --line-focus: #7C3AED;        /* Borde en foco */

  /* Estados de Sistema */
  --success: #10B981;        /* "En Stock", "Entrega hoy" */
  --danger:  #FF003C;        /* Descuentos, "Últimas unidades" */
  --warning: #F59E0B;        /* Estrellas de valoración */
  --info:    #3B82F6;        /* Info técnica */

  /* Tipografía */
  --font-main: "Inter", "Outfit", system-ui, -apple-system, sans-serif;
  --fs-xs: 0.75rem;   /* 12px */
  --fs-sm: 0.875rem;  /* 14px */
  --fs-md: 1rem;      /* 16px */
  --fs-lg: 1.25rem;   /* 20px */
  --fs-xl: 1.5rem;    /* 24px */
  --fs-2xl: clamp(1.5rem, 1.2rem + 1.8vw, 2.5rem);

  /* Espaciado */
  --s-1: 0.25rem; --s-2: 0.5rem; --s-3: 0.75rem; --s-4: 1rem;
  --s-5: 1.5rem; --s-6: 2rem; --s-7: 3rem;

  /* Bordes y Sombras */
  --r-sm: 6px; --r-md: 10px; --r-lg: 16px; --r-pill: 999px;
  --shadow-card: 0 4px 20px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 25px rgba(255, 0, 60, 0.2);
  --shadow-purple-glow: 0 0 25px rgba(124, 58, 237, 0.25);

  /* Layout */
  --container: 1280px;
  --gutter: clamp(12px, 2vw, 24px);
  --header-h: 72px;
}
```

Reglas cromáticas:
- El **Negro Noche (`--bg-main`)** y **Gris Oscuro Tech (`--surface-1`)** sirven de base continua para resaltar los componentes.
- El **Rojo (`--brand-red`)** es el color de acción inmediata: botón "Comprar", contador de ofertas flash, badges de descuento.
- El **Morado (`--brand-purple`)** se usa para elementos secundarios, categorías destacadas, bordes activos y acentos de innovación.
- Texto siempre con alto contraste (blanco sobre fondos oscuros, negro o blanco sobre botones según corresponda).

---

## 2. Breakpoints y Rejilla Responsive

| Breakpoint | Ancho | Columnas de Productos | Comportamiento UI |
|---|---|---|---|
| **xs** | < 480px | 2 (tarjeta compacta) | Header en 2 filas, buscador flotante o en 2ª fila |
| **sm** | ≥ 480px | 2 | Tarjetas con detalles intermedios |
| **md** | ≥ 768px | 3 | Filtros en panel deslizable (drawer) |
| **lg** | ≥ 1024px | 4 | Filtros laterales fijos, megamenú desplegable completo |
| **xl** | ≥ 1280px | 4 o 5 | Ancho máximo de contenedor `var(--container)` |

- Rejilla adaptativa con CSS Grid: `grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));`
- Imágenes de producto con relación de aspecto fija (`aspect-ratio: 1 / 1`), fondo neutro oscuro o transparente, y `object-fit: contain`.

---

## 3. Estructura de la Página Principal (Home de Nk Electronics)

1. **Top Bar Promocional**: Mensaje corto ("Envío exprés en 24h · Garantía oficial Nk Electronics · Financiamiento 0%").
2. **Header Sticky con Branding Nk**: Logo de **Nk Electronics** (con acento rojo/morado) + Botón "Categorías" + Buscador Inteligente con autocompletado + Mi Cuenta + Carrito inteligente.
3. **Barra de Navegación Rápida / Trending**: Acceso directo a *Componentes PC*, *Laptops Gaming*, *Smartphones*, *Audio & Sound*, *Ofertas Flash*.
4. **Hero Banner de Nk Electronics**: Banner principal interactivo de lanzamientos (ej. "Nuevas Laptops Gaming RTX Serie 40") con botón CTA rojo y gradiente morado + bloque lateral de **Ofertas Flash con cuenta regresiva**.
5. **Categorías Destacadas (Chips Tech)**: Tarjetas circulares/redondeadas con iconos iluminados en neón para cada familia de productos.
6. **Escaparate de Productos Destacados**: Grilla con pestañas (*Más Vendidos*, *Novedades Tech*, *Ensambles Especiales*).
7. **Banners Editoriales Duales**: 2 bloques en grid (ej. "Crea tu Setup Gaming" y "Zona Apple & Pro Workstations").
8. **Sección de Confianza y Servicios Nk**:
   - Garantía de 3 años Nk Electronics.
   - Envíos ultrarrápidos y seguros.
   - Servicio técnico y soporte especializado.
   - Devolución garantizada en 30 días.
9. **Footer Completo**: Enlaces de soporte, categorías de componentes, boletín con descuento, métodos de pago y copyright de **Nk Electronics**.

---

## 4. Especificación de Componentes Clave

### 4.1 Header y Navegación
- **Branding**: Marca "Nk Electronics" con tipografía bold/futurista, acento rojo en "Nk" e icono de chip o rayo en morado.
- **Buscador de Tecnología**: Input oscuro (`--surface-2`), borde `--line`, al escribir despliega overlay nocturno con productos sugeridos, precio y disponibilidad inmediata.
- **Megamenú**: En pantallas desktop, dropdown animado con categorías (Procesadores, Tarjetas Gráficas, Laptops, Periféricos, Monitores) y producto destacado en la derecha con borde resplandeciente morado.

### 4.2 Tarjeta de Producto (Product Card Nk)
Anatomía visual:
1. **Badges**: Tag `-25%` en rojo brillante (`--brand-red`) arriba a la izquierda. Tag "TOP VENTAS" o "NUEVO" en morado arriba a la derecha.
2. **Imagen**: Foto centrada sobre fondo oscuro con ligero halo morado/rojo al hacer `:hover`.
3. **Categoría y Marca**: Texto pequeño muted (ej. "ASUS · Laptops Gaming").
4. **Título**: 2 líneas máximo, texto blanco, peso 600.
5. **Precios**:
   - Precio actual en grande (Rojo `--brand-red`, peso 700, ej. `$1,299.00`).
   - Precio anterior tachado en gris (`$1,699.00`).
6. **Valoración**: 5 estrellas amarillas + nota `(4.9)` + conteo de opiniones.
7. **Badge de Envío**: "Envío gratis 24h" con icono de camión en verde `--success`.
8. **Botón de Acción**: Botón "Añadir al carrito" en Rojo `--brand-red` con hover resplandeciente, o gradiente rojo-morado.

### 4.3 Ofertas Flash (Countdown Module)
- Reloj digital en tiempo real con fondo negro y dígitos iluminados en rojo: `HH : MM : SS`.
- Barra de progreso de stock disponible (ej. *"85% vendido"* en gradiente rojo-morado).

### 4.4 Listado y Filtros (Página de Catálogo)
- Filtros laterales oscuros: Filtro por rango de precio (Slider), Marca, Almacenamiento, RAM, Gráfica, En stock.
- En dispositivos móviles: Botón flotante "Filtrar resultados" que despliega un panel lateral desde el fondo (Drawer).

### 4.5 Ficha de Producto (PDP)
- Galería interactiva con miniaturas verticales a la izquierda e imagen principal con zoom.
- Columna central con specs técnicas resumidas (procesador, memoria, pantalla).
- Caja de compra sticky a la derecha: Botón principal "Comprar Ahora" (Rojo) y "Añadir a la cesta" (Morado o contorno).
- Pestaña de especificaciones técnicas organizadas en tabla de alto contraste.

### 4.6 Carrito y Checkout
- Carrito con indicador visual de progreso hacia "Envío Gratis".
- Resumen de pedido claro con desglose de impuestos, envío y total acumulado.
- Checkout seguro en 3 pasos con diseño limpio, libre de distracciones.

---

## 5. Microinteracciones y Estética Visual

- **Efectos Neón y Glow**: Los elementos seleccionados o activos (chips, tarjetas en hover, botones CTA) deben incluir sombras de resplandor suave (`box-shadow: 0 0 15px var(--brand-red-glow)`).
- **Transiciones fluidas**: `transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);` para botones y tarjetas.
- **Feedback instantáneo**: Al añadir un producto al carrito, lanzar una notificación Toast en la esquina superior derecha con borde morado y botón de ir al checkout.

---

## 6. Estructura Recomendada de Archivos

```
/
├─ index.html              # Home Nk Electronics
├─ productos.html          # Catálogo y Filtros
├─ producto.html           # Ficha de producto
├─ carrito.html            # Carrito de compras
├─ checkout.html           # Proceso de pago
├─ assets/
│  ├─ css/
│  │  ├─ tokens.css        # Variables de diseño (Negro, Rojo, Morado)
│  │  ├─ base.css          # Reset, tipografía, utilidades dark
│  │  ├─ layout.css        # Grids, header, footer, contenedores
│  │  └─ components.css    # Cards, botones, badges, modales, countdown
│  ├─ js/
│  │  ├─ app.js            # Lógica del header, megamenú, countdown
│  │  ├─ cart.js           # Gestión del carrito en localStorage
│  │  └─ data.js           # Catálogo JSON de productos Nk Electronics
│  └─ img/                 # Logos e imágenes de producto
```

---

## 7. Checklist de Calidad para Nk Electronics

- [ ] Paleta de color estrictamente aplicada (Fondo oscuro/negro, Acentos en rojo `#FF003C` y morado `#7C3AED`).
- [ ] Nombre de la empresa configurado consistentemente como **Nk Electronics**.
- [ ] Header sticky con buscador funcional y acceso directo al carrito.
- [ ] Tarjetas de producto alineadas, con precios de alto contraste, badges de descuento y botón de compra.
- [ ] 100% Responsive sin scroll horizontal no deseado en ningún tamaño de pantalla (320px - 1920px).
- [ ] Microinteracciones de hover y foco con resplandor neón sutil.
- [ ] Carrito persistente mediante `localStorage`.
