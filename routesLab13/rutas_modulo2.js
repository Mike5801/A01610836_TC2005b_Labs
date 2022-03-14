const express = require('express');
const isAuth = require('../controllers/is-auth.js');

const router = express.Router();

const controller_modulo2 = require('../controllers/controller_modulo2');

router.get('/', isAuth, controller_modulo2.tituloModulo2);

router.get('/chopinNo1Op10', isAuth, controller_modulo2.op10_no1);

router.get('/chopinNo3Op10', isAuth, controller_modulo2.op10_no3);

router.get('/chopinNo4Op10', isAuth, controller_modulo2.op10_no4);

module.exports = router;