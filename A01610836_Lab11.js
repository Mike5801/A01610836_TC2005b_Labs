const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutasModulo1 = require('./routes/rutas_modulo1');
const rutasModulo2 = require('./routes/rutas_modulo2');
const { request } = require('http');
const { response } = require('express');

app.use('/modulo1', rutasModulo1);
//app.use('/modulo2', rutasModulo2);

//Middleware
app.use((request, response, next) => {
    console.log('middleware');
    next();
});

app.use('/modulo1', (request, response, next) => {
    console.log(request.body);
    response.send('<h1>Estudios de chopin Op 25:</h1>');
});
/*
app.use('/modulo2', (request, response, next) => {
    console.log(request.body);
    response.send('hola');
})*/

app.use('/inicio', (request, response, next) => {
    let respuesta = '<h1>Rutas Posibles</h1> <br> Modulo 1: <br>';
    respuesta += '<ul><li>modulo1/chopinNo5Op25</li><li>modulo1/chopinNo11Op25</li></ul>';
    respuesta += '<br> Modulo 2: <br>';
    respuesta += ' <ul><li>modulo2/</li></ul>';
    response.send(respuesta);
});


app.use((request, response, next) => {
    console.log('Ruta no existe');
    response.statusCode = 404;
    response.send('<h1>La ruta que buscas no existe</h1>');
});

app.listen(1500);