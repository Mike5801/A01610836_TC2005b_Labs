const express = require('express');
const isAuth = require('../controllers/is-auth.js');

const router = express.Router();
const controllerInicio = require('../controllers/controller_inicio');

router.get('/', isAuth, controllerInicio.inicio);

module.exports = router;