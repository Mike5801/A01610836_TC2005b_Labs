const calificacionPR = require('../models/calificacion');
const piezasM = require('../models/piezasMusicales');

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
    let flag = false;
    if (request.session.privilegio.includes('calificarPieza')){
        flag = true;
    }
    response.render('piezasRomanticismo', {
        nombre: 'Miguel',
        usuario: request.session.usuario,
        flag: flag
    });
}

exports.postCalif = (request, response, next) => {
    console.log(request.body);
    const calif = new calificacionPR(request.body.calif);
    calif.save();
    response.setHeader('Set-Cookie', 'ultima_calificacion='+calif.calificacion);
    response.redirect('/modulo3/');
}

exports.piezasMusicales = (request, response, next) => {
    console.log(request.body);
    piezasM.fetchAll().then(([piezasmusicales, fieldData]) => {
        response.render('piezasMusicales', {
            piezas: piezasmusicales,
            usuario: request.session.usuario
        });
    }).catch((error) => {
        console.log(error);
    });
}

exports.getPiezasM = (request, response, next) => {
    let flag = false;
    if (request.session.privilegio.includes('registrarPieza')){
        response.render('ingresarPiezas', {
            usuario: request.session.usuario,
        });
    } else {
        response.redirect('/NoExiste');
    }
    //console.log('GET /modulo3/ingresarPiezas');
    
}

exports.postPiestasM = (request, response, next) => {
    //console.log('POST /modulo3/ingresarPiezas');
    console.log(request.body)
    const pieza = new piezasM(request.body.nombre, request.body.descripcion, request.body.video);
    pieza.save()
    .then(() => {
        request.session.info = pieza.nombre + ' fue registrado con éxito';
        response.redirect('/modulo3/piezasMusicales/');
    })
    .catch((error) => {
        console.log(error);
    });
}

exports.filtrar = (request, response, next) => {
    console.log(request.params.pieza_id);
    //console.log(request.get('Cookie').split('=')[1]);
    piezasM.fetchOne(request.params.pieza_id)
        .then(([piezasmusicales, fieldData]) => {
            console.log(piezasmusicales);
            response.render('piezasMusicales', {
                piezas: piezasmusicales,
                usuario: request.session.usuario
            }); 
        })
        .catch(err => {
            console.log(err);
        }); 
}
