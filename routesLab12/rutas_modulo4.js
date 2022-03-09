const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (request, response, next) => {
    console.log(request.body);
    response.render('modulo4');
})

router.get('/lab6', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'A01610836_Lab6_ValidarPasswords.html'));
});

router.get('/lab1', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'A01610836_Lab1.html'));
});

module.exports = router;