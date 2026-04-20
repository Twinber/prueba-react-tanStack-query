## Context

La aplicación actualmente utiliza un tema estándar basado en shadcn/ui. Para alcanzar la visión "Nova Command Center", se requiere una reestructuración profunda de los estilos globales y los componentes básicos sin romper la funcionalidad existente de TanStack Query y las rutas.

## Goals / Non-Goals

**Goals:**
- Implementar un tema visual cohesivo, futurista y oscuro.
- Mejorar la jerarquía visual mediante el uso de resplandores (glow) y tipografía diferenciada.
- Asegurar que el mapa de OpenStreetMap se integre visualmente con el tema oscuro.

**Non-Goals:**
- No se cambiará la lógica de fetching de datos ni la estructura de las rutas.
- No se añadirán funcionalidades nuevas más allá de las decoraciones visuales necesarias.

## Decisions

### 1. Sistema de Tokens CSS (Variable-first)
Se utilizarán variables CSS en el bloque `:root` y `.dark` de `src/index.css` para definir la paleta Nova. Esto facilita cambios globales y permite un control más fino sobre los colores de acento neón.
- **Rationale**: Permite una transición suave y es la forma estándar de extender shadcn/ui.

### 2. Filtros CSS para el Mapa
En lugar de buscar un proveedor de mosaicos (tiles) oscuros gratuito y estable, aplicaremos un filtro CSS `invert(100%) hue-rotate(180deg)` al contenedor del mapa de Leaflet.
- **Rationale**: Es instantáneo, no requiere APIs externas adicionales y garantiza que el mapa siempre combine con el tema oscuro de la app.

### 3. Glassmorphism y Bordes Resplandecientes
Se crearán clases de utilidad en Tailwind para `glass-panel` y `glow-border`. 
- **Rationale**: Estas clases se aplicarán a los componentes de `Card` y `Dialog` para lograr el efecto HUD (Heads-Up Display).

### 4. Actualización de Tipografía
Se integrará `JetBrains Mono` para datos técnicos.
- **Rationale**: Las fuentes monoespaciadas evocan una sensación de terminal/consola técnica alineada con el concepto de centro de mando.

## Risks / Trade-offs

- **[Risk] Rendimiento de filtros CSS** → Aplicar filtros pesados a un mapa puede causar lag en dispositivos antiguos. *Mitigación*: Usar filtros optimizados y limitarlos al contenedor principal del mapa.
- **[Risk] Legibilidad** → Un tema oscuro con acentos neón puede cansar la vista si hay demasiado contraste. *Mitigación*: Usar grises muy oscuros en lugar de negro puro y limitar los acentos de alto brillo a elementos críticos.
