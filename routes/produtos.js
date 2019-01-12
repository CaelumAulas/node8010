module.exports = function (app){
    app.get('/produtos', function(request,response, next){

        const conexao = require('../config/connectionFactory')()
        const ProdutoDao = require('../repository/produtoDao');
        const produtoDao = new ProdutoDao(conexao)

        produtoDao.listar(function(erro, resultados){
            
            if(erro) return next(erro);
                
            response.render('produtos', {listaLivros: resultados})
            
        })

        conexao.end();
    })
}
