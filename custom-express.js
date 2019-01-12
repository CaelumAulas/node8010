const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

module.exports = function () {
    const app = express();
    app.set('view engine', 'ejs');
    
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    app.use(expressValidator());

    app.use('/static', 
        express.static('node_modules/bootstrap/dist/')
    );

    consign()
        .include('./routes')
        .then('./config')
        .then('./repository')
        .into(app);
        
    app.use(function (request, response, next) {
        console.log(request.originalUrl);
        let error = "Página nao encontrada" + request.originalUrl;
        response.status(404).render('erro', {error})
    });

    app.use(function(error, request, response, next){
        response.status(500).render('erro',{error});
        console.error('Epa deu ruim'+error);
    });

    return app;
}