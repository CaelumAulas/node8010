module.exports = (app) => {
    app.get('/estoque', (request, response) => {
        response.render('estoque')
    })
}