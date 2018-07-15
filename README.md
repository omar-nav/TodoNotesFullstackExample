# Todo Notes with Node, Express, Mongo and JQuery

Aplicación Web que te permite crear, obtener y borrar notas. Es un ejemplo de demostración de conexión básica entre un frontend sencillo y un backend heco con node y express, que a su vez se concetan a Mongo Atlas.

## Getting Started

Para ejecutar el proyecto adecuadamente, sólo necesitas extraer tu string de conexión a tu base de datos desde [Mongo Atlas](https://cloud.mongodb.com/user#/atlas/login) y pegarlo en la segunda línea de código del archivo ```models.js``` que está en la carpeta de ```backend```.

### Ejecutar el proyecto

Para ejecutar el proyecto, debes de acceder a la carpeta raíz del proyecto, y ejecutar el siguiente comando para levantar el servidor (Recuerda que debes de escribir el string de conexión antes de levantarlo)

```
node ./backend/index.js
```

Después podrás visualizar el frontend abriendo el archivo ```index.html``` de la carpeta de ```frontend``` en tu explorador favorito.

### Observaciones
* No es nada recomendable que en un repositorio haya dos proyectos diferentes, lo hice para que tengan acceso al ejemplo completo en un sólo punto.
* Es mala práctica subir la carpeta de ```node_modules```, pero lo hice para que no tuvieron que hacer ningún paso más.
* Gracias a Nakagawa y a Ian que de no haber insistido, este repo no existiría.
* Hecho con :heart: para el Batch 21 de Dev.F