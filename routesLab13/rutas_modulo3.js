const express = require('express');

const router = express.Router();

const controller_modulo3 = require('../controllers/controller_modulo3');

router.get('/', controller_modulo3.tituloModulo3);

router.get('/piezasRomanticismo/', controller_modulo3.pieasRomanticismo);


router.post('/piezasRomanticismo', controller_modulo3.postCalif);

module.exports = router;