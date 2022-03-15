exports.inicio = (request, response, next) => {
    console.log(request.body);
    response.render('inicio', {
        nombre: 'Miguel',
        usuario: request.session.usuario
    });
};