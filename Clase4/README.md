## Tarea_1 para WWC Medellín

# README

## Primeros pasos
Se interactua con la base de datos de MongoDB, utilizando Atlas y MongoDB Compass.
Para iniciar se debe tener instalado nodejs * [Node.js](https://nodejs.org/es/docs)
Luego se crea una carpeta dónde alojaremos el proyecto y se ingresa el siguiente comando en la terminal: [npm init -y], luego [npm i], y por último se realiza la instalación del dotenv y mongoose: [npm install dotenv mongoose].

Se crea una cuenta en MongoDB Atlas, damos click en Database -> Create -> shared -> Select: Aws, N. Virginia -> Create Cluster.

Luego vamos a Connect -> Compass -> En el paso 2 nos entrega la URL y nos pide reemplazar <password> por la contraseña nuestra. Ejem: mongodb+srv://pepitoperez123:<password>@cluster0.cqvctvl.mongodb.net/test.

En nuestro codigo de VSC instalamos dotenv, mongoose y mongodb. Ya con el servidor creado con Express, pasamos a instalar compass.

Luego de instalado, abrimos Compass, y para agregar la base de datos le damos en el + de Database, nombremos la base de datos y la coleción con que trabajaremos en mi caso: MongoDB1 y productos, respectivamente. Le damos click en la colección creada y le damos click en "ADD DATA", para escribir en formato Json nuestros datos.

Ahora se agrega al código los métodos a trabajar:

1. Para seleccionar un elemento específico de la colección y mostrarlo:
2. Editar uno d elos elementos de la colección.
3. Eliminar uno de los elementos de la colección.



## Documentación
* [MongoDB:] El motor NoSQL más usado del mercado (https://www.mongodb.com/atlas/database)
* [MongoDB_Atlas:] MongoDB Atlas es una solución en la nube escalable, segura y fácil de usar para alojar y gestionar bases de datos MongoDB
* [MongoDB_Compass:] Herramienta gráfica de interfaz de usuario para MongoDB, que permite a los desarrolladores y administradores de bases de datos visualizar y manipular los datos almacenados en una base de datos MongoDB (https://www.mongodb.com/products/compass)
* [Mongoose:] Es un ODM (Object Document Maper) Mongoose permite definir objetos con esquema fuertemente tipado que se asignan documentos de MongoDB. 
* [dotenv:] Permite mantener la información sensible fuera del código fuente de la aplicación, usandolo para cargar variables de entorno desde un archivo .env.

