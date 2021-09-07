const express = require('express');
const CandidateController = require('./controllers/CandidateController');
const routes = new express.Router();


routes.options('/register',  CandidateController.register)
routes.post('/register', cors(), function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})

module.exports = routes;


