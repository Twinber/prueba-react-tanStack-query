# Proyecto de prueba React con Vite y TypeScript

### Objetivo
Desarrollar una página que muestre las redes de bicicletas de España y seleccionando una de ellas
poder ver los puntos que indique el grado de disponibilidad de bicicletas (bajo, medio y alto).
Tecnología
Desarrollar una prueba en React con Vite y Typescript
Apoyarse en la librería de Tailwind (y, si se quiere, usar componentes predefinidos como shadcn). La
interfaz tienen que ser operativa, no estamos poniendo a prueba el diseño, pero la información tiene
que verse bien y poder utilizarse desde Desktop.
Utilizar la librería de TanSack Query para realizar las peticiones HTTP.
Utilizar patrones container-presenter y diferenciar bien las capas de acceso a los datos, controladores
y presentación.
Aplicar buenas prácticas de código.
### Información para la prueba técnica
Utilizar el API expuesto por
https://api.citybik.es/v2/
Y generar dos listados,
El primer listado serían los puntos “networks” de España
https://api.citybik.es/v2/networks
Donde se tendrá que mostrar el nombre, la compañía, el sistema de la reserva y la ciudad en la que
está la red de Bicicletas.
Una vez elegida la red de bicicletas mostrar el listado de puntos/estaciones disponible de esa red en
un segundo listado (p.e. https://api.citybik.es//v2/networks/albabici).
Se debe indicar el nombre del punto y la localización de este punto, junto con un enlace a google
maps.
La fecha relativa de la ultima actualización (hace 10min, hace 4 días)
Un indicador de disponibilidad de bicicletas en la estación (bajo, medio y alto)
### Extra
Preparar toda la aplicación para que sea multi-idioma gestionando las traducciones en archivos .json
con i18next
Optimizar la comunicación HTTP con el API

## Descripción de la solución

#### Arquitectura de la aplicación

Se ha organizado la aplicación con el siguiente esquema de carpetas:

```
src
├── api // Capa de acceso a los datos
├── components // Componentes de presentación
├── controllers // Controladores
├── i18n // Configuración de i18next
├── interfaces // Interfaces del dominio de la aplicación
├── lib // carpeta autogenerda por shadcn para importar componentes
├── routes // Configuración de las rutas de la aplicación

```


#### Routing

Se ha utilizado la librería [TanStack Router](https://tanstack.com/router/latest) usando de creeacion de las rotas denominada "File-Based Routing".
Usamos la carga "lazy" de las rutas, para que se cargue el código de la página bajo demanda y solo al acceder a la ruta, 
mejorando por tanto el rendimiento y velocidad de carga de la aplicación.

#### Peticiones HTTP
Usamos la liberias [TanStack Query](https://tanstack.com/query/latest), combinada con axios para realizar las peticiones HTTP a la API de CityBik.es.
Optimizaciones:
1. Se ha configurado un staleTime de 1 minuto.
2. Se ha configurado un gcTime de 5 minutos, que conserva los datos aun cuando el componente se desmonta.
3. Se ha realizado un prefetch de datos cuando el usuario hace hover sobre un enlace de Ver Red.

#### Internacionalización
Para la internacionalización de la aplicación se ha utilizado la librería [i18next](https://www.i18next.com/).
Se ha configurado junto a i18next-http-backend para que cargue las traducciones desde ficheros json, en la carpeta public/locales.

#### Estilos
Para los estilos de la aplicación se ha utilizado la librería [Tailwind CSS](https://tailwindcss.com/).
Se han usado tambien componentes prediseñados de [Shadcn](https://shadcn.com/).


## DEMO DEL APP
[DEMO](https://citybike-prueba.web.app/)