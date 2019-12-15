const AuthController = require('./controllers/AuthenticationController')

module.exports = (app) => {
    app.post('/register', AuthController.register);
}