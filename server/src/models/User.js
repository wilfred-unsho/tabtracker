const Sequelize = require('sequelize')

module.exports = (sequelize, dataTypes) =>
    sequelize.define('User', {
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        password: Sequelize.STRING
})