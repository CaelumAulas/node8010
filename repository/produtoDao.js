class ProdutoDao {

    constructor(_conexao){
        this.conexao = _conexao
    }

    listar(callback){
        this.conexao.query('SELECT * FROM livros', callback)
    }

    // cadastrar(livro, callback){
    //     this.conexao.query('INSERT INTO livros SET ?', livro, callback)
    // }

    cadastrar(livro){
        return new Promise( (resolve, reject) => {
            this.conexao
                .query('INSERT INTO livros SET ?'
                    ,livro
                    ,(erro, resultados, fields) => {
                        if (erro) return reject(erro);
                        resolve(fields);
                    })
        })
    }
}

module.exports = () => ProdutoDao;

/*
function Produto (titulo, preco, descricao){
    this._titulo = titulo;
    this._preco = preco;
    this._descricao = descricao;
}

Produto.prototype.listar = function(){
    return {
        titulo: this._titulo,
        preco: this._preco,
        descricao: this._descricao
    }
}

*/