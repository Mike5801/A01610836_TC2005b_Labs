const express = require('express');
const isAuth = require('../controllers/is-auth.js');

const router = express.Router();

const controller_modulo3 = require('../controllers/controller_modulo3');

router.get('/', isAuth, controller_modulo3.tituloModulo3);

router.get('/piezasRomanticismo/', isAuth, controller_modulo3.piezasRomanticismo);


router.post('/piezasRomanticismo', isAuth, controller_modulo3.postCalif);

module.exports = router;