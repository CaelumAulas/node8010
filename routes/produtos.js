module.exports = function (app){
    app.get('/produtos', function(request,response){
        response.render('produtos/lista')
    })
}