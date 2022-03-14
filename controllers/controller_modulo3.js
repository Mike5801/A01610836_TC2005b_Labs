const calificacionPR = require('../models/calificacion')

exports.tituloModulo3 = (request, response, next) => {
    console.log(request.get('Cookie').split('=')[1]);
     //console.log(request.cookies);
    response.render('modulo3', {
        calificacion: calificacionPR.fetchAll(),
        ultima_calificacion: request.get('Cookie').split('=')[1],
        usuario: request.session.usuario
    });
}

exports.piezasRomanticismo = (request, response, next) => {
    console.log(request.body);
    response.render('piezasRomanticismo', {
        nombre: 'Miguel',
        usuario: request.session.usuario
    });
}

exports.postCalif = (request, response, next) => {
    console.log(request.body);
    const calif = new calificacionPR(request.body.calif);
    calif.save();
    response.setHeader('Set-Cookie', 'ultima_calificacion='+calif.calificacion);
    response.redirect('/modulo3/');
}

