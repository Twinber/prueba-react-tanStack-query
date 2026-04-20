## MODIFIED Requirements

### Requirement: Modal de Mapa de Estación
El sistema DEBE proporcionar un cuadro de diálogo modal que muestre un mapa interactivo de la ubicación de la estación cuando el usuario lo solicite. El diseño DEBE seguir la estética Nova, con un fondo oscuro profundo y bordes con resplandor.

#### Scenario: Abrir modal de mapa
- **WHEN** el usuario hace clic en el botón "Ver en mapa" de una estación
- **THEN** aparece un diálogo modal oscuro con efecto cristal (glassmorphism) que cubre la vista actual con el nombre de la estación como título con tipografía técnica

### Requirement: Mapa Interactivo de OpenStreetMap
El sistema DEBE renderizar un mapa de OpenStreetMap dentro del modal, centrado en las coordenadas de la estación (latitud y longitud) con un marcador indicando su posición exacta. El mapa DEBE usar un filtro visual oscuro (vía CSS) o una capa de azulejos (tiles) oscura para armonizar con el tema general.

#### Scenario: Mostrar estación en el mapa
- **WHEN** se abre el modal del mapa
- **THEN** se carga un mapa de OpenStreetMap con tonalidades oscuras centrado en la estación con un marcador en su ubicación exacta

### Requirement: Indicadores de Disponibilidad por Color
El sistema DEBE colorear el marcador de la estación en el mapa según la disponibilidad de bicicletas en tiempo real, utilizando colores neón intensos para asegurar la visibilidad sobre el fondo oscuro.

#### Scenario: Marcador de alta disponibilidad (Verde Neón)
- **WHEN** la estación tiene más de 5 bicicletas disponibles
- **THEN** el marcador en el mapa se muestra de color verde neón brillante (#4ade80) con un efecto de pulso sutil

#### Scenario: Marcador de baja disponibilidad (Amarillo Neón)
- **WHEN** la estación tiene entre 1 y 5 bicicletas disponibles
- **THEN** el marcador en el mapa se muestra de color amarillo/naranja neón (#fbbf24)

#### Scenario: Marcador sin disponibilidad (Rojo Neón)
- **WHEN** la estación tiene 0 bicicletas disponibles
- **THEN** el marcador en el mapa se muestra de color rojo neón brillante (#f87171)
