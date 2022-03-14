exports.tituloModulo1 = (request, response, next) => {
    console.log(request.body);
    response.send('<h1>Estudios de chopin Op 25</h1>');  
};

exports.op25_no5 = (request, response, next) => {
    console.log(request.body);
    response.render('chopinop25no5', {
        nombre: 'Miguel',
        usuario: request.session.usuario
    });
};

exports.op25_no11 = (request, response, next) => {
    console.log(request.body);
    response.render('chopinop25no11', {
        nombre: 'Miguel',
        usuario: request.session.usuario
    });
};
