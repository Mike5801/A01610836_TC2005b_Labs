const express = require('express');
const isAuth = require('../controllers/is-auth.js');

const router = express.Router();

const controller_modulo4 = require('../controllers/controller_modulo4');

router.get('/', isAuth, controller_modulo4.tituloModulo4);

router.get('/lab6', isAuth, controller_modulo4.lab6);

router.get('/lab1', isAuth, controller_modulo4.lab1);

module.exports = router;