const path = require('path');

exports.tituloModulo4 = (request, response, next) => {
    console.log(request.body);
    response.render('modulo4');
};

exports.lab6 = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'A01610836_Lab6_ValidarPasswords.html'));
};

exports.lab1 = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'A01610836_Lab1.html'));
};