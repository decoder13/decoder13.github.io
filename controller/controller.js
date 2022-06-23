const express = require('express');
const { Users } = require('../src/models/users');

module.exports.Controller = {
    loginPage: async(req, res) => {
        res.render('register')
    },
    register: async(req, res) => {
        let user = await Users.findOne({ phone: req.body.phone })
        if (user) {
            res.send("Bu raqam avval ro`yhatdan o`tgan")
        }
        console.log(req.body);
        user = await new Users({
            name: req.body.name,
            gender: req.body.gender,
            password: req.body.password,
            phone: req.body.phone
        })
        await user.save()
        res.redirect('/dashboard')
    },
    login: async(req, res) => {
        let user = await Users.findOne({ phone: req.body.phone })
        if (!user) {
            return res.redirect('/')
        }
        let pass = await Users.findOne({ password: req.body.password })
        if (!pass) {
            return res.redirect("/")
        }
        res.redirect('/dashboard')
    },
    dashboard: async(req, res) => {
        res.render('dashboard')
    },

    about: async(req, res) => {
        res.render('about')
    },

    courses: async(req, res) => {
        res.render('courses')
    },

    teachers: async(req, res) => {
        res.render('teachers')
    }
}