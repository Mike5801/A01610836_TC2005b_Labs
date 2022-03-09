const express = require('express');

const router = express.Router();

const controller_modulo4 = require('../controllers/controller_modulo4');

router.get('/', controller_modulo4.tituloModulo4);

router.get('/lab6', controller_modulo4.lab6);

router.get('/lab1', controller_modulo4.lab1);

module.exports = router;