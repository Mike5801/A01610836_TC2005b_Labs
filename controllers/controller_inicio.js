const User = require('../models/user');

exports.inicio = (request, response, next) => {
    console.log(request.body);
    console.log(request.session.usuario);
    console.log(request.session.username);
    console.log(request.session.rol);
    console.log(request.session.privilegio);
    response.render('inicioGeneral', {
        nombre: 'Miguel',
        usuario: request.session.usuario,  
        rol: request.session.rol   
    });
};


