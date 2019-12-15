const AuthController = require('./controllers/AuthenticationController')
const AuthControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    app.post('/register', 
    AuthControllerPolicy.register,
    AuthController.register);
}