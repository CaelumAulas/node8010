module.exports = function (app) {
    app.get("/", function (request, response) {
        response.send(`
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="stylesheet" href="static/css/bootstrap.css">

                <title>Casa do Código</title>
            </head>
            <body>
            <div class="container">
                <div class="col-12">
                    <h1>Casa do Código</h1>
                    <a href="/produtos" class="btn btn-primary">Produtos</a>
                </div>
            </div>
            </body>
            </html>
        `)
    })
}