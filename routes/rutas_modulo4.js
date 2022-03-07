const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<h1>Pregunta del laboratorio</h1>';
    respuesta +='<br><strong>Describe el archivo package.json</strong><br>';
    respuesta += 'El package.json permite ver los paquetes instalados que tenemos en node por el Node Package Manager incluyendo sus versiones. También se puede observar el nombre del repositorio  al que está ligado y el link, y del mismo modo se pueden observar los scripts que pueden ser ejecutados y su funcionalidad.';
    response.send(respuesta);
})

module.exports = router;