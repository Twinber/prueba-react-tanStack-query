## 1. Configuración y Fundamentos

- [x] 1.1 Definir variables CSS globales en `src/index.css` (colores deep-dark, acentos neón, efectos blur).
- [x] 1.2 Extender `tailwind.config.ts` con la nueva paleta de colores, animaciones de pulso y utilidades de resplandor.
- [x] 1.3 Importar y configurar las fuentes `Inter` y `JetBrains Mono`.

## 2. Refactorización de Componentes Base (UI)

- [x] 2.1 Actualizar `src/components/ui/card.tsx` para implementar el efecto glass-panel y bordes HUD.
- [x] 2.2 Reestilizar `src/components/ui/button.tsx` con efectos de iluminación neón y hover interactivo.
- [x] 2.3 Ajustar `src/components/ui/dialog.tsx` para heredar la estética oscura y técnica.

## 3. Rediseño de la Visualización de Estaciones

- [x] 3.1 Actualizar `src/components/stations/StationItem.tsx` para usar el nuevo layout de tarjeta técnica.
- [x] 3.2 Implementar barras de progreso brillantes para representar la disponibilidad en `StationAvailability.tsx`.
- [x] 3.3 Ajustar el layout global (`ContainerLayout`, `GridLayout`) para el nuevo esquema de colores.

## 4. Integración del Mapa Nova

- [x] 4.1 Aplicar el filtro CSS de modo oscuro al contenedor de Leaflet en `StationMapModal.tsx`.
- [x] 4.2 Actualizar los iconos de los marcadores en el mapa para usar colores neón (#4ade80, #fbbf24, #f87171).

## 5. Verificación y Pulido

- [x] 5.1 Realizar una revisión visual completa de la aplicación en dispositivos móviles y escritorio.
- [x] 5.2 Validar la construcción final con `npm run build`.

