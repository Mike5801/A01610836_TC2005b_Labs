const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const rutasModulo1 = require('./routesLab13/rutas_modulo1');
const rutasModulo2 = require('./routesLab13/rutas_modulo2');
const rutasModulo3 = require('./routesLab13/rutas_modulo3');
const rutasModulo4 = require('./routesLab13/rutas_modulo4');
const { request } = require('http');
const { response } = require('express');

app.use('/modulo1', rutasModulo1);
app.use('/modulo2', rutasModulo2);
app.use('/modulo3', rutasModulo3);
app.use('/modulo4', rutasModulo4);

//Middleware
app.use((request, response, next) => {
    next();
});

app.use('/inicio', (request, response, next) => {
    let respuesta = '<h1>Rutas Posibles</h1> <br> Modulo 1: <br>';
    respuesta += '<ul><li>modulo1/chopinNo5Op25</li><li>modulo1/chopinNo11Op25</li></ul>';
    respuesta += '<br> Modulo 2: <br>';
    respuesta += '<ul><li>modulo2/chopinNo1Op10</li><li>modulo2/chopinNo3Op10</li><li>modulo2/chopinNo4Op10</li></ul>';
    respuesta += '<br> Modulo 3: <br>';
    respuesta += '<ul><li>modulo3/piezasRomanticismo</li></ul>';
    respuesta += '<br> Modulo 4: <br>';
    respuesta += '<ul><li>modulo4</li><li>modulo4/lab1</li><li>modulo4/lab6</li></ul>';
    response.send(respuesta);
});


app.use((request, response, next) => {
    console.log('Ruta no existe');
    response.statusCode = 404;
    response.send('<h1>La ruta que buscas no existe</h1>');
});

app.listen(1500);
