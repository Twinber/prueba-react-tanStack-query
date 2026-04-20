# Capability: Nova Theme Core

## Purpose
Establecer el sistema visual base para la aplicación "Nova Command Center", definiendo la paleta de colores oscura profunda, los efectos de glassmorphism y la tipografía técnica para crear una experiencia HUD futurista.

## Requirements

### Requirement: Esquema de Colores Deep Dark
El sistema DEBE implementar un esquema de colores basado en fondos oscuros profundos (#020617 o similar) con acentos en Cyan (#22d3ee) y Teal (#14b8a6) para simular una interfaz HUD futurista.

#### Scenario: Aplicación del tema oscuro
- **WHEN** la aplicación se carga
- **THEN** el fondo principal y todos los contenedores principales usan los colores oscuros definidos en la paleta Nova

### Requirement: Efectos de Glassmorphism
Los componentes de tipo tarjeta (Cards) y cuadros de diálogo (Dialogs) DEBEN usar un fondo semitransparente con efecto backdrop-blur y un borde sutil con un ligero resplandor (glow).

#### Scenario: Visualización de tarjetas con efecto cristal
- **WHEN** se renderiza una tarjeta de estación o red
- **THEN** se aplica un desenfoque de fondo (blur) y un borde refinado que destaca sobre el fondo oscuro

### Requirement: Tipografía Técnica Moderna
El sistema DEBE utilizar una combinación de fuentes Sans-Serif para texto general y fuentes Monoespaciadas para valores numéricos, IDs y etiquetas técnicas, asegurando una estética de "centro de mando".

#### Scenario: Uso de tipografía monoespaciada
- **WHEN** se muestran las coordenadas de una estación o el conteo de bicicletas
- **THEN** se utiliza una fuente monoespaciada con un color de acento brillante
