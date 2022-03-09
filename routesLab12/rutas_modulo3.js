const express = require('express');

const filesystem = require('fs');

const router = express.Router();

var calificacionPiezasRomanticistas;
calificacionPiezasRomanticistas = 0;


router.get('/', (request, response, next) => {
    console.log(request.body);
    response.render('modulo3', {calificacion: calificacionPiezasRomanticistas});
})

router.get('/piezasRomanticismo/', (request, response, next) => {
    console.log(request.body);
    response.render('piezasRomanticismo')
});


router.post('/piezasRomanticismo', (request, response, next) => {
    console.log(request.body);
    calificacionPiezasRomanticistas = request.body.calif;
    console.log(calificacionPiezasRomanticistas);
    filesystem.writeFileSync('CalificacionPiezasRomanticismo.txt', calificacionPiezasRomanticistas);
    response.redirect('/modulo3');
});

module.exports = router;