const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'base_datos_laboratorios',
    password: ''
});

module.exports = pool.promise();