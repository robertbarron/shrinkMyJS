shrinkMyJS!
===================

**INTRODUCCIÓN**

Esta librearía la desarrolle por la necesidad de tener un compilador rápido para archivos fuera de los proyectos. Inicialmente fue desarrollada para el trabajo, pero decidí publicarla para que sea usada por quienes tenga la necesidad. Existen muchas herramientas similares esta solamente es una utileria mas.

Antes de iniciar con el proceso de compilado es necesario instalar una serie de librerías para poder generar el compilado de los archivos javascript. Para ello, es necesario la instalación de la herramienta principal, llamada NodeJS. También es requiero el archivo package.json, que contiene la información de las librerías que se requiere instalar.


**INSTALACIÓN DE NODEJS**

NodeJS es un marco de trabajo para construir aplicaciones web. Utiliza el mismo motor de Javascript que se encuentra en el navegador Chrome.
Para instalar NodeJS es necesario ingresar a la pagina de la herramienta y descargar el  instalador.  La pagina detectará el sistema operativo y mostrará el link de descarga del instalador.
La pagina de NodeJS es la siguiente: http://nodejs.org



**ADMINISTRADOR DE PAQUETES DE NODEJS (NPM)**

La instalación de NodeJS incluye por default el administrador de paquetes llamado NPM  (Node Package Manager). Este administrador es necesario para instalar liberarías compatibles con NodeJs.


**GRUNT.JS**

GruntJS es una herramienta que automatiza procesos como el copiado, concatenación y minificado de código. Esta herramienta será la responsable de procesar nuestro código y generar un compilado listo para ser usado en producción.



**ARCHIVO DE CONFIGURACIÓN**

Existe un archivo de configuración llamado Grunfile.js, que contiene todas las rutinas que se requieren para poder procesar nuestros archivos Javascript. Este archivo contiene configuraciones que son importantes señalar. 
El archivo Gruntfile.js, es un archivo de texto que contiene directivas de configuración que son necesarias para ejecutar los procesos de compilado.



**ARCHIVO DE INSTALACIÓN**

El archivo de configuración llamado package.json (Ver Imagen 3), contiene toda la información necesaria para instalar las librerías que se requieren en el proceso de compilado.


**INSTALACIÓN DE AMBIENTE**

Dentro  de nuestro proyecto, existen dos archivos, los cuales son responsables de la configuración y ejecución del proyecto.

Para poder instalar el ambiente es necesario abrir la consola como administrador y ejecutar el siguiente comando:
***sudo npm install***

El comando anterior iniciará la instalación de las herramientas necesarias para poder concatenar y minificar los archivos javascript que se encuentran dentro de la carpeta llamada ***sources***.


**CONCATENACIÓN Y MINIFICACIÓN DE ARCHIVOS**

Para poder procesar los archivos, es necesario abrir la terminal y ubicarse dentro de la carpeta del proyecto, como se muestra en la Imagen 5. Desde allí se podrán procesar los archivos que se encuentran dentro de la carpeta ***sources***.

Existe dos procesos principales que se deberán ejecutar según las necesidades del desarrollador, los cuales serán explicados en los aparados siguientes.

**Minificación de archivos sin precedencia**


Cuando se requiera procesar uno o mas archivos los cuales no tienen precedencia entre ellos, es decir, que ningún archivo dependa de algún otro, se puede ejecutar el proceso que es descrito a continuación.

>  - Incluir los archivos dentro de la carpeta sources que se encuentra en el directorio de la herramienta.
>  - Ubicarse en el directorio, como se muestra en la sección anterior.
>  - Ejecutar el siguiente comando: ***grunt unsorted***.
>  - El código procesado se encuentra dentro de la carpeta unsorted, con el nombre compiled.min.js.


**Minificación de archivos con precedencia**

Cuando se requiera procesar uno o mas archivos los cuales tengan precedencia entre ellos, se puede ejecutar el proceso que es descrito a continuación.
   

>  - Incluir los archivos dentro de la carpeta sources que se encuentra en el directorio de la herramienta.
>  - Editar el archivo Gruntfile.js, iniciando en la línea 40. Se deberá poner en orden de precedencia los archivos que se requieren compilar, como se muestra en la Imagen 7. En la ilustración se indica que el archivo *GlobalFunctions.js* se deberá incluir y procesar antes que el archivo *BanorteWebNavigationEngine.js*, y este, se deberá procesar antes que los archivos siguientes.
>  - 	Ubicarse en el directorio, como se muestra en la sección anterior.
>  - Ejecutar el siguiente comando: ***grunt sorted***
>  - El código procesado se encuentra dentro de la carpeta sorted, con el nombre **compiled.min.js**.