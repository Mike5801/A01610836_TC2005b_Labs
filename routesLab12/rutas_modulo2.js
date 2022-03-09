const express = require('express');

const router = express.Router();


router.get('/', (request, response, next) => {
    console.log(request.body);
    response.send('<h1>Estudios de chopin Op 11</h1>');
})

router.get('/chopinNo1Op10', (request, response, next) => {
    console.log(request.body);
    response.render('chopinop10no1');
});

router.get('/chopinNo3Op10', (request, response, next) => {
    console.log(request.body);
    response.render('chopinop10no3');
});

router.get('/chopinNo4Op10', (request, response, next) => {
    console.log(request.body);
    response.render('chopinop10no4');
});

module.exports = router;