const express = require('express');
const app = express();
const path = require('path');
//const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');


const csrf = require('csurf');
const csrfProtection = csrf();



const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().getTime() + '-' + file.originalname);
    },
});
app.use(multer({ storage: fileStorage }).single('video'));

app.set('view engine', 'ejs');
app.set('views', 'views');

const rutasModulo1 = require('./routesLab13/rutas_modulo1');
const rutasModulo2 = require('./routesLab13/rutas_modulo2');
const rutasModulo3 = require('./routesLab13/rutas_modulo3');
const rutasModulo4 = require('./routesLab13/rutas_modulo4');
const rutaInicio = require('./routesLab13/ruta_inicio');
const rutas_usuarios = require('./routesLab13/auth.routes');
const { request } = require('http');
const { response } = require('express');

app.use(session({
    secret: 'asñldfjlñaksdjfoñksdajrioweuroiudasofhjasñofhjoeiwahfjadshfuñoewhafoñheadwfhñdsaohfoaewjhrñoaksdjfouegbñgjibnñvijnachasdñil', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(csrfProtection); 
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
}); 

app.use('/modulo1', rutasModulo1);
app.use('/modulo2', rutasModulo2);
app.use('/modulo3', rutasModulo3);
app.use('/modulo4', rutasModulo4);
app.use('/inicio', rutaInicio);
app.use('/users', rutas_usuarios);


//Middleware
app.use((request, response, next) => {
    next();
});



app.use((request, response, next) => {
    console.log('Ruta no existe');
    response.statusCode = 404;
    response.send('<h1>La ruta que buscas no existe</h1>');
});

app.listen(1500);
