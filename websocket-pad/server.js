const app = require('express')();
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('tem alguem conectado aii');

    socket.on('escreveu', function(dados){

        io.emit('alguemEscreveu', dados)
        
    })
    
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
})

http.listen(3300, function () {
    console.log('listening on *:3300');
});

