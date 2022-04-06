const User = require('../models/user');

exports.inicio = (request, response, next) => {
    console.log(request.body);
    console.log(request.session.usuario);
    console.log(request.session.username);
    console.log(request.session.privilegio);
    console.log(request.session.rol)
    response.render(request.session.privilegio, {
        nombre: 'Miguel',
        usuario: request.session.usuario,     
    });
};


