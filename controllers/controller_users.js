const User = require('../models/user');

const bcrypt = require('bcryptjs');
const { redirect } = require('express/lib/response');

exports.get_login =  (request, response, next) => {
    const usuario = request.session.usuario ? request.session.usuario : '';
    console.log(request.session.usuario);
    response.render('login', {
        usuario: usuario 
    });
};

exports.login =  (request, response, next) => {
       User.findOne(request.body.nombre)
        .then(([rows, fieldData]) => {
            console.log(rows);
            if (rows.length < 1) {
                return response.redirect('/users/login');
            }
            const user = new User(rows[0].username, rows[0].password, rows[0].nombre);
            bcrypt.compare(request.body.passwd, user.password)
                .then((doMatch) => {
                    if (doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.user = user;
                        request.session.usuario = user.nombre;
                        request.session.username = user.usuario;
                        User.findRol(request.session.username)
                        .then(([filas, fieldData]) => {
                            request.session.rol = filas[0].idRol;
                            User.findPrivilege(request.session.rol)
                            .then((filas2, fieldData) => {
                                request.session.privilegio = filas2[0][0].accion;
                                response.redirect('/inicio/');
                            }).catch((error) => {
                                console.log(error);
                            });
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                        return request.session.save(err => {
                        }); 
                    }
                    response.redirect('/users/login');
                    }).catch(err => {
                    response.redirect('/users/login');
                    });
               }).catch((err) => {
                    console.log(err);
                });
};

exports.get_signup =  (request, response, next) => {
    if (request.session.rol == 1){
        response.render('signup', {
            usuario: request.session.usuario ? request.session.usuario : '',
        });
    } else {
        response.redirect('/');
    }
    
};

exports.post_signup =  (request, response, next) => {
    const nuevo_usuario = new User(request.body.username, request.body.password, request.body.nombre);
    nuevo_usuario.save()
    .then(() => {
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

/* 

*/