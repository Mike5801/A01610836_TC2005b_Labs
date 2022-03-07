const express = require('express');

const router = express.Router();

router.get('/chopinNo5Op25', (request, response, next) => {
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Música Romanticista</title><meta charset="utf-8"></meta><head><body><h1>Ruta de Chopin Etude No. 5 Op. 25</h1><main> <h2>Chopin Etude No. 5 Op. 25<h2><iframe width="560" height="315" src="https://www.youtube.com/embed/NkdgFfKIWbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></main></body>';
    response.send(respuesta);
});

router.get('/chopinNo11Op25', (request, response, next) => {
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Música Romanticista</title><meta charset="utf-8"></meta><head><body><h1>Ruta de Chopin Etude No. 11 Op. 25</h1><main><h2>Chopin Etude No. 11 Op. 25</h2><iframe width="560" height="315" src="https://www.youtube.com/embed/YJMIIxm1bGo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></main></body>';
    response.send(respuesta);
});

module.exports = router;