const express = require('express');
const { Controller } = require('../../controller/controller');
const dashboardRoute = express.Router()

dashboardRoute.get('/about', Controller.about)
dashboardRoute.get('/courses', Controller.courses)
dashboardRoute.get('/teachers', Controller.teachers)


module.exports = dashboardRoute