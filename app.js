const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get("/", function(request, response){
    response.send('<h1>Bem vindo a Casa do Código</h1>')
})

app.get("/produtos", function (request, response) {
    response.render('produtos/lista')
})

app.listen(3000, function(){
    console.log('Servidor escutando a porta 3000');
})