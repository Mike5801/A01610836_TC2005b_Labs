module.exports = (request, response, next) => {
    if (!request.session.isLoggedIn) {
        return response.redirect('/users/login');
    } else if(request.session.rol != 'admin'){
        return response.redirect('/NoExiste');
    }
    next();
}