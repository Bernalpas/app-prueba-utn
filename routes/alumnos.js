
const { Router } = require('express');
const router = Router();
const {
    bienvenida,
    nomina,
    insertar,
    borrar,
    actualizar,
} = require('../controllers/alumnos');

router.get('/bienvenida', bienvenida);
router.get('/nomina', nomina);
router.post('/insertar', insertar);
router.delete('/borrar', borrar);
router.put('/actualizar', actualizar);



module.exports = router;