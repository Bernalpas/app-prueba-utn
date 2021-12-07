

//Mi configuración para conectarme a la base de datos

const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'berni',
    database: 'ecommerce'
});

connection.connect(function (err) {
    if (err){
        console.log('Error en el intento de la Conexión a la DB');
        console.log('El error está en: ' + err.stack);
        return;
    }
    console.log('La conexión fue exitosa!!');
});

//connection.end();

module.exports = connection;

