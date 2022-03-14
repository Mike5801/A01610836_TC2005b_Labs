exports.tituloModulo2 = (request, response, next) => {
    console.log(request.body);
    response.send('<h1>Estudios de chopin Op 11</h1>');
};

exports.op10_no1 = (request, response, next) => {
    console.log(request.body);
    response.render('chopinop10no1',{
        nombre: 'Miguel',
        usuario: request.session.usuario
    });
};

exports.op10_no3 = (request, response, next) => {
    console.log(request.body);
    response.render('chopinop10no3',{
        nombre: 'Miguel',
        usuario: request.session.usuario
    });
};

exports.op10_no4 = (request, response, next) => {
    console.log(request.body);
    response.render('chopinop10no4',{
        nombre: 'Miguel',
        usuario: request.session.usuario
    });
};