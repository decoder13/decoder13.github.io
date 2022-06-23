const express = require('express');
const { Controller } = require('../../controller/controller');
const usersRoute = express.Router();

usersRoute.get('/', Controller.loginPage)
usersRoute.post('/register', Controller.register)
usersRoute.post('/login', Controller.login)
usersRoute.get('/dashboard', Controller.dashboard)

module.exports = usersRoute;