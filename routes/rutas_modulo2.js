const express = require('express');

const router = express.Router();


router.get('/', (request, response, next) => {
    console.log(request.body);
    response.send('<h1>Estudios de chopin Op 11</h1>');
})

router.get('/chopinNo1Op10', (request, response, next) => {
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Música Romanticismo</title><meta charset="utf-8"></meta><head><body><h1>Ruta Chopin Etude No 1 Op 10</h1><main><h2>Chopin Etude No 1 Op 10</h2><iframe width="560" height="315" src="https://www.youtube.com/embed/nMM6h9Yf348" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></main></body>';
    response.send(respuesta);
});

router.get('/chopinNo3Op10', (request, response, next) => {
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Música Romanticismo</title><meta charset="utf-8"></meta><head><body><h1>Ruta Chopin Etude No 3 Op 10</h1><main><h2>Chopin Etude No 3 Op 10</h2><iframe width="560" height="315" src="https://www.youtube.com/embed/JS7KfOyMEIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></main></body>';
    response.send(respuesta);
});

router.get('/chopinNo4Op10', (request, response, next) => {
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Música Romanticismo</title><meta charset="utf-8"></meta><head><body><h1>Ruta Chopin Etude No 4 Op 10</h1><main><h2>Chopin Etude No 4 Op 10</h2><iframe width="560" height="315" src="https://www.youtube.com/embed/XIKdCTmcTLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></main></body>';
    response.send(respuesta);
});

module.exports = router;