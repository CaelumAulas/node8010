const express = require('express')

module.exports = function () {
    const app = express();
    app.set('view engine', 'ejs');

    app.use('/static', 
        express.static('node_modules/bootstrap/dist/')
    );

    require('./routes/index')(app)
    /*
    const rotaProdutos = require('./routes/produtos')
    rotaProdutos(app);
    */
    require('./routes/produtos')(app);

    return app;
}