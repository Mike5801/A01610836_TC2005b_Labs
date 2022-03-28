const express = require('express');
const isAuth = require('../controllers/is-auth.js');

const router = express.Router();

const controller_modulo3 = require('../controllers/controller_modulo3');

router.get('/', isAuth, controller_modulo3.tituloModulo3);

router.get('/piezasRomanticismo/', isAuth, controller_modulo3.piezasRomanticismo);

router.get('/piezasMusicales', isAuth, controller_modulo3.piezasMusicales);

router.get('/nuevaPieza', isAuth, controller_modulo3.getPiezasM);

router.post('/nuevaPieza', isAuth, controller_modulo3.postPiestasM);

router.post('/piezasRomanticismo', isAuth, controller_modulo3.postCalif);

router.get('/:pieza_id', controller_modulo3.filtrar);

module.exports = router;