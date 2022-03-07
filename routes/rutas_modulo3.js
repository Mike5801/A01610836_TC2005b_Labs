const express = require('express');

const filesystem = require('fs');

const router = express.Router();

let calificacionPiezasRomanticistas;
calificacionPiezasRomanticistas = 0;


router.get('/', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<h1>Piezas musicales en conjunto</h1>';
    respuesta +='<br>Calificación de piezas del romanticismo: '+ calificacionPiezasRomanticistas;
    response.send(respuesta);
})

router.get('/piezasRomanticismo/', (request, response, next) => {
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Música Romanticismo</title><meta charset="utf-8"></meta><head><body><h1>Ruta de piezas del romanticismo</h1><main> <h2>Estudios de Chopin<h2><main><h3>Chopin Etude Op 25 No 5</h3><iframe width="560" height="315" src="https://www.youtube.com/embed/NkdgFfKIWbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    respuesta += '<h3>Chopin Etude Op 25 No 11 </h3><iframe width="560" height="315" src="https://www.youtube.com/embed/YJMIIxm1bGo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    respuesta += '<h3>Chopin Etude Op 10 No 1 </h3><iframe width="560" height="315" src="https://www.youtube.com/embed/nMM6h9Yf348" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    respuesta += '<h3>Chopin Etude Op 10 No 3 </h3></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/JS7KfOyMEIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    respuesta += '<h3>Chopin Etude Op10 No 4</h3></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/XIKdCTmcTLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></main></body>';
    respuesta += '<form action="/modulo3/piezasRomanticismo" method="POST"><label for="calificacion"> ¿Cómo puntuarías del 1 al 10 el recital?</label><input type="number" name="calif" required min="1" max="10"><input type="submit" value="Enviar_calificacion"></form>';
    response.send(respuesta);
});


router.post('/piezasRomanticismo', (request, response, next) => {
    console.log(request.body);
    calificacionPiezasRomanticistas = request.body.calif;
    console.log(calificacionPiezasRomanticistas);
    filesystem.writeFileSync('CalificacionPiezasRomanticismo.txt',calificacionPiezasRomanticistas);
    response.status = 303;
    response.redirect('/modulo3');
});

module.exports = router;