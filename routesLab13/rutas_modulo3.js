const express = require('express');
const isAuth = require('../controllers/is-auth.js');

const router = express.Router();

const controller_modulo3 = require('../controllers/controller_modulo3');

router.get('/', isAuth, controller_modulo3.tituloModulo3);

router.post('/guardarComentario', isAuth, controller_modulo3.saveComentario);

router.get('/mostrarComentario', isAuth, controller_modulo3.mostrarComentario);

router.get('/ocultarComentarios', isAuth, controller_modulo3.ocultarComentarios);

router.get('/busqueda/:criterio', isAuth, controller_modulo3.buscarComentarios);

router.get('/piezasRomanticismo/', isAuth, controller_modulo3.piezasRomanticismo);

router.get('/piezasMusicales', isAuth, controller_modulo3.piezasMusicales);

router.get('/nuevaPieza', isAuth, controller_modulo3.getPiezasM);

router.post('/nuevaPieza', isAuth, controller_modulo3.postPiestasM);

router.get('/busqueda/:criterio', isAuth, controller_modulo3.getBusqueda);

router.get('/comentario', isAuth, controller_modulo3.getComentario);

router.get('/ingresarPR', isAuth, controller_modulo3.registrarPRGET);

router.post('/ingresarPR', isAuth, controller_modulo3.registrarPRPOST)

router.get('/:pieza_id', controller_modulo3.filtrar);

router.post('/piezasRomanticismo', isAuth, controller_modulo3.postCalif);

router.post('/comentarioPM', isAuth, controller_modulo3.comentarioPM);
;

module.exports = router;