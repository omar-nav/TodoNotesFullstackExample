# Todo Notes with Node, Express, Mongo and JQuery

Aplicación Web que te permite crear, obtener y borrar notas. Es un ejemplo de demostración de conexión básica entre un frontend sencillo y un backend hecho con node y express, que a su vez se conectan a Mongo Atlas.

## Getting Started

Para ejecutar el proyecto adecuadamente, sólo necesitas extraer tu string de conexión para aplicaciones a tu base de datos desde [Mongo Atlas](https://cloud.mongodb.com/user#/atlas/login) y pegarlo en la segunda línea de código del archivo ```models.js``` que está en la carpeta de ```backend```.

### Ejecutar el proyecto

Para ejecutar el proyecto, debes de acceder a la carpeta raíz del proyecto, y ejecutar el siguiente comando para levantar el servidor (Recuerda que debes de escribir el string de conexión antes de levantarlo)

```
node ./backend/index.js
```

Después podrás visualizar el frontend abriendo el archivo ```index.html``` de la carpeta de ```frontend``` en tu explorador favorito.

### Observaciones
* No es nada recomendable que en un repositorio haya dos proyectos diferentes, lo hice para que tengan acceso al ejemplo completo en un sólo punto.
* Es mala práctica subir la carpeta de ```node_modules```, pero lo hice para que no tuvieran que hacer ningún paso más.
* Gracias a Nakagawa y a Ian que de no haber insistido, este repo no existiría.
* Hecho con :heart: para el Batch 21 de Dev.F
