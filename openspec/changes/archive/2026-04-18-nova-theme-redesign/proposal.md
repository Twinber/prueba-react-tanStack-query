## Why

La interfaz actual es funcional pero carece de una identidad visual distintiva. Este cambio busca implementar una estética premium "Nova Command Center" —un diseño futurista, oscuro y de alta tecnología— que mejore la experiencia del usuario y cree una sensación de control avanzado sobre los datos del sistema.

## What Changes

- **Tema Oscuro Global**: Transición de un diseño claro/mixto a un esquema de colores "Deep Dark" con acentos Cyan/Teal neón.
- **Estética Glassmorphism**: Las tarjetas y modales tendrán fondos semitransparentes desdibujados y bordes sutiles con resplandor.
- **Tipografía Híbrida**: Uso de fuentes monoespaciadas para datos técnicos (coordenadas, IDs) y fuentes sans-serif modernas para etiquetas y lectura general.
- **Componentes UI Revitalizados**:
  - Botones con efectos de iluminación y hover cinético.
  - Tarjetas con indicadores de estado tipo "Vital Signs" (líneas de pulso, barras de progreso brillantes).
  - Modales con encabezados técnicos y decoraciones de estilo "HUD" (Heads-Up Display).

## Capabilities

### New Capabilities
- `nova-theme-core`: Sistema central de variables de color, espaciado y efectos visuales (glow, glass, border-beams).
- `technical-data-visualization`: Componentes decorativos y funcionales para mostrar métricas (barras de estado mini, líneas de tendencia sutiles).

### Modified Capabilities
- `station-map-popup`: Refactorización estética para integrar el mapa de OpenStreetMap en el nuevo ecosistema oscuro sin perder legibilidad.

## Impact

- `src/index.css`: Reescritura del sistema de tokens.
- `src/components/ui/`: Actualización masiva de botones, tarjetas y diálogos.
- `src/components/stations/`: Ajuste de la visualización de la lista y los items para usar el nuevo layout.
- `tailwind.config.ts` (si aplica): Configuración de nuevos colores y animaciones.
