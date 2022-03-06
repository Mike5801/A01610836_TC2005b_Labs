const filesystem = require('fs');

const http = require('http');

let calificacionRecital;
calificacionRecital = 0;

const server = http.createServer( (request, response) => {
    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Aplicacion Laboratorios</title><meta charset="utf-8"></meta><head>');
        response.write('<body>');
        response.write('<h1> Acceso a laboratorios </h1>');
        response.write('<main>');
        response.write('<h2> Links a los laboratorios: </h2>');
        response.write('<a href="lab3">Laboratorio3</a><br>');
        response.write('<a href="lab5">Laboratorio5</a><br>');
        response.write('<a href="lab6">Laboratorio6</a><br>');
        response.write('<p>Link a video de recital de Laboratorio 1: </p>');
        response.write('<a href="recital">Pieza de Recital</a><br>');
        response.write('<p>Calificación de recital: </p>' + calificacionRecital);
        response.write('</main>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/lab3' && request.method === 'GET' ) {
        response.setHeader('Content-Type', 'text/html');
        response.write(filesystem.readFileSync('A01610836_Lab3Preguntas.html'));
        response.write('<br>');
        response.write('<h2><a href="/">Regresar a Aplicación Laboratorios</a></h2>');
        response.end();
    } else if (request.url === '/lab5' && request.method === 'GET' ) {
        response.setHeader('Content-Type', 'text/html');
        response.write(filesystem.readFileSync('A01610836_Lab5.html'));
        response.write('<br>');
        response.write('<h2 class="title is-3"><a href="/">Regresar a Aplicación Laboratorios</a></h2>');
        response.end();
    } else if (request.url === '/lab6' && request.method === 'GET' ) {
        response.setHeader('Content-Type', 'text/html');
        response.write(filesystem.readFileSync('A01610836_Lab6_PaginaVenderProductos.html'));
        response.write('<br>');
        response.write('<h2 class="title is-3"><a href="/">Regresar a Aplicación Laboratorios</a></h2>');
        response.end();
    } else if (request.url === '/recital' && request.method === 'GET' ) {
        response.setHeader('Content-Type', 'text/html');
        //response.write(filesystem.readFileSync('A01610836_Lab10Aux.html'));
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Recital</title><meta charset="utf-8"></meta><head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></head>');
        response.write('<body>');
        response.write('<section><article><header><h1 class="title">Chopin Etude Op. 25 No.25 recital</h1></header><br><iframe width="560" height="315" src="https://www.youtube.com/embed/lo04Skq7C4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></article></section>')
        response.write('<br>');
        response.write('<form action="/recital" method="POST">');
        response.write('<label for="calificacion"> ¿Cómo puntuarías del 1 al 10 el recital?</label>');
        response.write('<input type="number" name="calif" required min="1" max="10">');
        response.write('<input type="submit" value="Enviar_calificacion">');
        response.write('</form>');
        response.write('<br>');
        response.write('<h2 class="title is-3"><a href="/">Regresar a Aplicación Laboratorios</a></h2>');
        response.write('</main>');
        response.write('</body>');
    } else if (request.url === '/recital' && request.method === 'POST') {
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            console.log(datos);
            const datos_completos = Buffer.concat(datos).toString();
            const nuevo_dato = datos_completos.split('=')[1];
            console.log(datos_completos);
            console.log(nuevo_dato);
            calificacionRecital = nuevo_dato;
            console.log(calificacionRecital);
            response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Aplicacion Laboratorios</title><meta charset="utf-8"></meta><head>');
            response.write('<body>');
            response.write('<h1> Acceso a laboratorios </h1>');
            response.write('<main>');
            response.write('<h2> Links a los laboratorios: </h2>');
            response.write('<a href="lab3">Laboratorio3</a><br>');
            response.write('<a href="lab5">Laboratorio5</a><br>');
            response.write('<a href="lab6">Laboratorio6</a><br>');
            response.write('<p>Link a video de recital de Laboratorio 1: </p>');
            response.write('<a href="recital">Pieza de Recital</a><br>');
            response.write('<p>Calificación de recital: </p>' + calificacionRecital);
            response.write('</main>');
            response.write('</body>');
            return response.end();
        })

    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Aplicacion Laboratorios</title><meta charset="utf-8"></meta><head>');
        response.write('<body>');
        response.write('<h1>HTTP ERROR 404</h1>');
        response.write('<main>');
        response.write('<p>La página ' + request.url + ' no se encontró</p>');
        response.write('</main>');
        response.write('</body>');
        response.end();
    }

});

server.listen(1000);