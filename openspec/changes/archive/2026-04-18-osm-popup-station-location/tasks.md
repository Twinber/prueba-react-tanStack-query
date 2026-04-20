## 1. Configuración y Dependencias

- [x] 1.1 Instalar dependencias: `npm install leaflet react-leaflet` y `npm install -D @types/leaflet`.
- [x] 1.2 Verificar que el proyecto puede importar estilos CSS (configuración de Vite).

## 2. Infraestructura del Mapa y Modal

- [x] 2.1 Añadir el componente `Dialog` de shadcn/ui (si no existe) o verificar su disponibilidad.
- [x] 2.2 Crear el componente `StationMapModal.tsx` que integre `MapContainer`, `TileLayer` y `Marker`.
- [x] 2.3 Implementar el hook/lógica para cargar dinámicamente `leaflet.css` al montar el mapa.
- [x] 2.4 Crear iconos personalizados para Leaflet (verde, amarillo, rojo) basados en la disponibilidad.

## 3. Refactorización de Componentes UI

- [x] 3.1 Renombrar `src/components/ui/GmapsButton.tsx` a `src/components/ui/StationMapButton.tsx`.
- [x] 3.2 Actualizar `StationMapButton` para manejar el estado del modal y pasar las coordenadas.
- [x] 3.3 Actualizar `src/components/stations/StationItem.tsx` para usar `StationMapButton` en lugar del antiguo botón.

## 4. Traducciones y Pulido

- [x] 4.1 Actualizar `public/locales/es/translation.json` con las nuevas claves (`view_on_map`, `bikes_available`, `close`).
- [x] 4.2 Actualizar `public/locales/en/translation.json` con las traducciones equivalentes.
- [x] 4.3 Verificar el comportamiento responsivo del modal (especialmente en móviles).
- [x] 4.4 Asegurar que el marcador esté correctamente centrado al abrir el mapa.
