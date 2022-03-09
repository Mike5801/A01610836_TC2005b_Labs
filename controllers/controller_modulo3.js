const calificacionPR = require('../models/calificacion')

exports.tituloModulo3 = (request, response, next) => {
    console.log(request.body);
    response.render('modulo3', {calificacion: calificacionPR.fetchAll()});
}

exports.pieasRomanticismo = (request, response, next) => {
    console.log(request.body);
    response.render('piezasRomanticismo')
}

exports.postCalif = (request, response, next) => {
    console.log(request.body);
    const calif = new calificacionPR(request.body.calif);
    calif.save();
    response.redirect('/modulo3/');
}

