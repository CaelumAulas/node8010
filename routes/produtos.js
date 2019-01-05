module.exports = function (app){
    app.get('/produtos', function(request,response){
        //response.render('produtos/lista')

        const mysql = require('mysql')

        let conexao = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadocodigo'
        })

        conexao.query('SELECT * FROM livros', function(erro, resultados, campos){
            response.send(resultados)
        })

        conexao.end();
    })
}