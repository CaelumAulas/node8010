module.exports = function (app){
    app.get('/produtos', function(request,response, next){

        const conexao = app.config.connectionFactory();
        const produtoDao = new app.repository.produtoDao(conexao);
        
        produtoDao.listar(function(erro, resultados){
            
            if(erro) return next(erro);
            //response.render('produtos', { listaLivros: resultados })
            response.format({
                html: function(){
                    response.render('produtos', {listaLivros: resultados})
                }
                ,
                json: function(){
                    response.json(resultados)
                }
            })
        })

        conexao.end();
    });

    app.post('/produtos',function (request,response,next) {

        request.assert('titulo','Titulo é obrigatório').notEmpty();
        request.assert('preco', 'O preço deve ser um número!').isFloat();

        const errors = request.validationErrors();

        if(errors){
            response.format({
                html: () => response.status(400).render('cadastro',{errors, livro: request.body})
                ,json: () => response.status(400).json({errors})
            })
            
            return
        }

        const conexao = app.config.connectionFactory();
        const produtoDao = new app.repository.produtoDao(conexao);
        produtoDao
            .cadastrar(request.body)
            .then( () => {
                response.format({
                    html: () => response.status(302).redirect('/produtos')
                    ,json: () => response.json({contente: request.body})
                })
            })
            .catch( error => next(error));
    });

    app.get(`/produtos/cadastro`,function(request,response,next){
        const livro = {
            titulo: '',
            preco: '',
            descricao: ''
        }
        response.render('cadastro',{livro})
    });


}
