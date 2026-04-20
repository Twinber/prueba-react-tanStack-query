## ADDED Requirements

### Requirement: Modal de Mapa de Estación
El sistema DEBE proporcionar un cuadro de diálogo modal que muestre un mapa interactivo de la ubicación de la estación cuando el usuario lo solicite.

#### Scenario: Abrir modal de mapa
- **WHEN** el usuario hace clic en el botón "Ver en mapa" de una estación
- **THEN** aparece un diálogo modal que cubre la vista actual con el nombre de la estación como título

### Requirement: Mapa Interactivo de OpenStreetMap
El sistema DEBE renderizar un mapa de OpenStreetMap dentro del modal, centrado en las coordenadas de la estación (latitud y longitud) con un marcador indicando su posición exacta.

#### Scenario: Mostrar estación en el mapa
- **WHEN** se abre el modal del mapa
- **THEN** se carga un mapa de OpenStreetMap centrado en la estación con un marcador en su ubicación exacta

### Requirement: Indicadores de Disponibilidad por Color
El sistema DEBE colorear el marcador de la estación en el mapa según la disponibilidad de bicicletas en tiempo real.

#### Scenario: Marcador de alta disponibilidad (Verde)
- **WHEN** la estación tiene más de 5 bicicletas disponibles
- **THEN** el marcador en el mapa se muestra de color verde

#### Scenario: Marcador de baja disponibilidad (Amarillo)
- **WHEN** la estación tiene entre 1 y 5 bicicletas disponibles
- **THEN** el marcador en el mapa se muestra de color amarillo/naranja

#### Scenario: Marcador sin disponibilidad (Rojo)
- **WHEN** la estación tiene 0 bicicletas disponibles
- **THEN** el marcador en el mapa se muestra de color rojo

### Requirement: Cierre del Modal
El sistema DEBE permitir al usuario cerrar el modal del mapa a través de una acción clara de "Cerrar" (ej. un botón "X" o un botón "Cerrar").

#### Scenario: Cerrar modal de mapa
- **WHEN** el usuario hace clic en el botón "Cerrar" o en la "X" del modal
- **THEN** el modal se cierra y el usuario vuelve a la lista de estaciones
