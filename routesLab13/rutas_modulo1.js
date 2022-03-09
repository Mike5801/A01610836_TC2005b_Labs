const express = require('express');

const router = express.Router();

const controllerModulo1 = require('../controllers/controller_modulo1');

router.get('/', controllerModulo1.tituloModulo1);

router.get('/chopinNo5Op25', controllerModulo1.op25_no5);

router.get('/chopinNo11Op25', controllerModulo1.op25_no11);

module.exports = router;