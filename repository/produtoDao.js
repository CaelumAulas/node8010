class ProdutoDao {

    constructor(_conexao){
        this.conexao = _conexao
    }

    listar(callback){
        this.conexao.query('SELECT * FROM livros', callback)
    }
}

module.exports = ProdutoDao;

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