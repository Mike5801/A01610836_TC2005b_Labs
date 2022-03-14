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
        response.redirect('/modulo3/');
    } else {
        response.redirect('/users/login');
    }
};

exports.get_signup =  (request, response, next) => {
    response.render('signup', {
        usuario: request.session.usuario ? request.session.usuario : '',
    });
};

exports.post_signup =  (request, response, next) => {
    const nuevo_usuario = new User(request.body.username, request.body.password, request.body.nombre);
    nuevo_usuario.save().then(() => {
        response.redirect('/users/login');
    }).catch((err) => {
        console.log(err);
    });
};

exports.logout =  (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};