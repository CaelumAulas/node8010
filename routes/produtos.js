module.exports = function (app){
    app.get('/produtos', function(request,response){

        const conexao = require('../config/connectionFactory')()
        
        conexao.query('SELECT * FROM livros', function(erro, resultados){
            //console.log(resultados);
            //response.send(resultados)

            if(erro){
                response.render('erro', {erro})
            } else {
                response.render('produtos', {listaLivros: resultados})
            }
        })

        conexao.end();
    })
}
