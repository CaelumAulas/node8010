function connectionFactory (){

    const mysql = require('mysql');
    
    const conexao = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'casadocodigo_8010'
    });

    return conexao
}

module.exports = () => connectionFactory;