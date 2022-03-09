const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => {
    console.log(request.body);
    response.send('<h1>Estudios de chopin Op 25</h1>');
});

router.get('/chopinNo5Op25', (request, response, next) => {
    console.log(request.body);
    response.render('chopinop25no5');
});

router.get('/chopinNo11Op25', (request, response, next) => {
    console.log(request.body);
    response.render('chopinop25no11');
});

module.exports = router;