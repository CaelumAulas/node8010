module.exports = function (app) {
    app.get("/", function (request, response) {
        response.send('<h1>Bem vindo a Casa do Código</h1>')
    })
}