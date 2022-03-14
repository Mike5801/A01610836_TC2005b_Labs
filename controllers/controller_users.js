const User = require('../models/user');

exports.get_login =  (request, response, next) => {
    const usuario = request.session.usuario ? request.session.usuario : '';
    console.log(request.session.usuario);
    response.render('login', {
        usuario: usuario 
    });
};

exports.login =  (request, response, next) => {
    if (User.login(request.body.nombre, request.body.passwd)) {
        request.session.usuario = request.body.nombre;
        response.redirect('/modulo4/');
    } else {
        response.redirect('/users/login');
    }
};

exports.logout =  (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};