const express = require('express');
const CandidateController = require('./controllers/CandidateController');
const Candidate = require('./models/Candidate');
const routes = new express.Router();

var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": true,
    "optionsSuccessStatus": 204
}

routes.get('/find', cors(corsOptions), async (req, res, next) => {
    console.log("Entrei");
    
    try {
        console.log("try");
        console.log(req.query);

        const test = await Candidate.find(req.query);

        console.log(teste);
    

    if ('_id' in teste || teste.hasOwnProperty('_id')) {
       return res.status(200);
    }else{
        return res.status(500);
    }

} catch (err) {
    return res.status(500).send("Erro na busca");
}
});


routes.post('/register', CandidateController.register);



//routes.get('/'), cors(corsOptions), (req, resp, next => { 
    //resp.send('Servidor online - Diana Salmazo')
//});



module.exports = routes; 