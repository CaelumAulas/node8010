const express = require('express')

module.exports = function () {
    const app = express();
    app.set('view engine', 'ejs');

    app.use('/static', 
        express.static('node_modules/bootstrap/dist/')
    );

    require('./routes/index')(app)
    require('./routes/produtos')(app);

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