const express = require('express');
const isAuth = require('../controllers/is-auth.js');

const router = express.Router();

const controllerModulo1 = require('../controllers/controller_modulo1');

router.get('/', isAuth, controllerModulo1.tituloModulo1);

router.get('/chopinNo5Op25', isAuth, controllerModulo1.op25_no5);

router.get('/chopinNo11Op25', isAuth, controllerModulo1.op25_no11);

module.exports = router;