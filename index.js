
const express = require('express');
const {connection} = require('./db/config');
const app = express();
const Port = 3000;
//const { connection } = require('./db/config');

//Middleware
app.use(express.json());
app.use(express.static('public'));
app.use('/api/alumnos', require('./routes/alumnos'));
/* app.use('/api/docentes', require('./routes/docentes'));
app.use('/api/coutas', require('./routes/coustas'));
app.use('/api/calificaciones', require('./routes/calificaciones'));
app.use('/api/directivos', require('./routes/directivos'));
app.use('/api/padres', require('./routes/padres')); */

//Configuración del Puerto
app.listen(Port, () =>{
    console.log(`Servidor corriendo en el puerto ${Port}`);
});

app.on('error', (err) => {
    console.log(`Error en la ejecución del Servidor: ${error}`);
});









