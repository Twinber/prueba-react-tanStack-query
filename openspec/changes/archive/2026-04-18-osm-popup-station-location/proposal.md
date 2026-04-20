## Why

Sustituir el enlace externo a Google Maps por un popup integrado de OpenStreetMap para mejorar la experiencia del usuario, manteniéndolo dentro de la aplicación y proporcionando una referencia visual rápida de la ubicación de la estación con información de disponibilidad en tiempo real.

## What Changes

- **Componente de Botón de Mapa**: Reemplazar el actual `GmapsButton` por un nuevo componente `StationMapButton` que activa un modal en lugar de abrir una pestaña externa.
- **Modal de Mapa Integrado**: Implementar un diálogo (usando shadcn/ui Dialog) que muestre un mapa de OpenStreetMap centrado en las coordenadas de la estación.
- **Integración de Librerías de Mapas**: Añadir `leaflet` y `react-leaflet` como dependencias.
- **Indicadores de Disponibilidad Visual**: Los marcadores en el mapa cambiarán de color (verde, amarillo, rojo) según la cantidad de bicicletas disponibles en la estación.
- **Traducciones**: Actualizar los archivos de i18n para soportar los nuevos textos en español e inglés.

## Capabilities

### New Capabilities
- `station-map-popup`: Visualización interactiva de la ubicación de una estación en un mapa de OpenStreetMap dentro de un modal, con marcadores coloreados por disponibilidad.

### Modified Capabilities
Ninguna (el sistema de visualización de estaciones se mantiene, solo cambia la forma de ver el mapa).

## Impact

- `src/components/ui/GmapsButton.tsx`: Será renombrado o reemplazado por `StationMapButton.tsx`.
- `src/components/stations/StationItem.tsx`: Se actualizará para usar el nuevo botón.
- `package.json`: Nuevas dependencias (`leaflet`, `react-leaflet`).
- `public/locales/`: Nuevas claves de traducción.
- Carga dinámica de estilos CSS de Leaflet para optimizar el rendimiento.
