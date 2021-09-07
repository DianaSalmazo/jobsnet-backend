const express = require('express');
const CandidateController = require('./controllers/CandidateController');
const routes = new express.Router();


routes.options('/register')
routes.post('/register', CandidateController.register, cors(), function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})

module.exports = routes;


