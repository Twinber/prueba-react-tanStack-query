## Contexto

Actualmente, la aplicación utiliza enlaces externos a Google Maps para mostrar la ubicación de las estaciones de CitiBike. Esto interrumpe el flujo del usuario al sacarlo de la aplicación. El objetivo es integrar una visualización de mapa nativa usando OpenStreetMap.

## Objetivos / No-Objetivos

**Objetivos:**
- Reemplazar el botón de Google Maps con un modal interno de OpenStreetMap.
- Utilizar `react-leaflet` para el renderizado del mapa.
- Mostrar marcadores de colores dinámicos según la disponibilidad de bicicletas.
- Cargar los estilos de Leaflet solo cuando sea necesario para optimizar el rendimiento.
- Asegurar que el modal ocupe la mayor parte de la pantalla (full-screen en móviles).

**No-Objetivos:**
- Implementar funciones de navegación (cómo llegar) complejas fuera de mostrar la ubicación.
- Reemplazar el motor de mapas global si hubiera otros usos (solo nos enfocamos en el detalle de la estación).

## Decisiones

- **Librería de Mapas**: `leaflet` y `react-leaflet`.
  - *Razón*: Estándar de la industria para mapas de código abierto en React, ligero y muy personalizable.
- **Componente de Modal**: shadcn/ui `Dialog` (Radix UI).
  - *Razón*: El proyecto ya usa shadcn/ui, lo que garantiza consistencia visual y accesibilidad (manejo de foco, cierre con Esc, etc.).
- **Gestión de Estilos**: Carga dinámica mediante un hook o efecto.
  - *Razón*: Los estilos de Leaflet (`leaflet.css`) solo se inyectarán en el DOM cuando el componente del mapa se monte, reduciendo el bundle inicial.
- **Lógica de Colores de Marcadores**:
  - Verde: `free_bikes > 5`
  - Amarillo: `free_bikes > 0 && free_bikes <= 5`
  - Rojo: `free_bikes === 0`
- **Refactorización**:
  - Renombrar `GmapsButton.tsx` a `StationMapButton.tsx`.
  - Crear un nuevo componente `StationMapModal.tsx` que encapsule la lógica de Leaflet.

## Riesgos / Trade-offs

- **[Riesgo]** Conflicto de Z-index entre el modal y los elementos de Leaflet.
  - **Mitigación**: Ajustar los niveles de z-index de los contenedores de Leaflet para que respeten el contexto del diálogo de Radix UI.
- **[Riesgo]** El mapa no se renderiza correctamente dentro de un modal oculto inicialmente.
  - **Mitigación**: Usar el componente `MapContainer` dentro del contenido del diálogo y asegurar que el modal esté montado antes de inicializar el mapa. Leaflet requiere que el contenedor tenga dimensiones físicas al cargar.

## Plan de Migración

1. Instalar `leaflet`, `react-leaflet` y `@types/leaflet`.
2. Implementar la lógica de carga dinámica de `leaflet.css`.
3. Crear el componente `StationMapModal` con los marcadores personalizados.
4. Refactorizar `GmapsButton` para que use el nuevo modal.
5. Actualizar las traducciones para reflejar el cambio de "Google Maps" a "Mapa".
