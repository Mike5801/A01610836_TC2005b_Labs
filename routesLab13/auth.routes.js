const express = require('express');
const router = express.Router();
const usersController = require('../controllers/controller_users');
const isAuth = require('../controllers/is-auth.js');
const isAdmin = require('../controllers/is-authAdmin');

router.get('/login', usersController.get_login);

router.post('/login', usersController.login);

router.get('/logout', usersController.logout);

router.get('/signup', isAdmin, usersController.get_signup);

router.post('/signup', isAdmin, usersController.post_signup);

module.exports = router;