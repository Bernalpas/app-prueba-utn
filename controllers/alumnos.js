const {connection} = require('../db/config');

const bienvenida = ((req, res) =>{
    //console.log(req);
    res.send('Bienvenido a nuestra Aplicación')
});

const nomina = ((req, res) =>{
    //res.send('<h1>La Nómina de todos los alumnos.</h1>');
    res.status(200).json({
        status: 'La nómina de todos los alumnos.',
        body
    });
});

const insertar = ((req, res) =>{
    //console.log(req);
    const body = req.body;
    res.status(200).json({
        status: 'Alumno insertado',
        body
    });

});

const borrar = ((req, res) =>{
    const body = req.body;
    res.status(200).json({
        status: 'Alumno eliminado',
        body
    });
});

const actualizar = ((req, res) =>{
    const body = req.body;
    res.status(200).json({
        status: 'Alumno actualizado',
        body
    });
});

module.exports = {
    bienvenida,
    nomina,
    insertar,
    borrar,
    actualizar
}


