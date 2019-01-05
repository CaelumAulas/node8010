const app = require('./custom-express')()

app.listen(3000, function () {
    console.log('Servidor escutando a porta 3000');
})