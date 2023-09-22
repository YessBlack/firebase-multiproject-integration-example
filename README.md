# Integración de Múltiples Proyectos de Firebase

Este proyecto tiene como objetivo mostrar cómo se puede integrar y trabajar con múltiples proyectos de Firebase utilizando Node.js. Permite la comunicación y transferencia de datos entre diferentes proyectos de Firebase.

## Requisitos previos

- Node.js y npm instalados en su sistema.
- Acceso a las credenciales de Firebase de los proyectos que desea integrar.

## Inicialización del Proyecto

Siga estos pasos para configurar y ejecutar el proyecto.

### Paso 1: Instalación de Dependencias

Ejecute el siguiente comando para instalar las dependencias necesarias:

````
npm install firebase-admin --save

````
### Paso 2: Configuración de Proyectos de Firebase
Obtenga las credenciales de Firebase para cada proyecto que desee integrar. Puede encontrar estas credenciales en la consola de Firebase en la sección "Configuración del proyecto".

Cree archivos JSON separados para cada proyecto y coloque las credenciales en estos archivos. Por ejemplo, firebase-config-project1.json, firebase-config-project2.json, etc.

![image](https://github.com/YessBlack/firebase-multiproject-integration-example/assets/70681219/465c65b1-296d-44d7-8862-0b395a1ec730)

### Paso 3: Configuración de Variables de Entorno
Cree un archivo .env en la raíz del proyecto para definir las variables de entorno que hacen referencia a los archivos de configuración de Firebase. El archivo .env debe tener el siguiente formato:

````

FIREBASE_CONFIG_PROJECT1=./firebase-config-project1.json
FIREBASE_CONFIG_PROJECT2=./firebase-config-project2.json

````

<i>Reemplace las rutas con las ubicaciones de sus archivos de configuración de Firebase.</i>

Si desea incluir en las variables de entorno las URLs de las base de datos, puede hacerlo:

````

FIREBASE_DATABASE_URL_1="https://<project-name>-default-rtdb.firebaseio.com"
FIREBASE_DATABASE_URL_2="https://<project-name>-default-rtdb.firebaseio.com"
````

Paso 4: Ejecución del Proyecto
Ejecute el proyecto con el siguiente comando:

````
node app.js

````

<i>Asegúrese de que app.js sea el archivo principal de su aplicación.</i>

Uso
Este proyecto proporciona ejemplos de cómo se pueden utilizar múltiples proyectos de Firebase en una sola aplicación Node.js. Puede expandir y personalizar la funcionalidad según sus necesidades específicas.

