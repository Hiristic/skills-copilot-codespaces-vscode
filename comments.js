// create web server
const express = require('express');
const app = express();
// create a server
const server = require('http').createServer(app);
// create websocket server
const io = require('socket.io')(server);
// create a web server
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
// create a websocket server
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});
// start the server
server.listen(3000, () => {
    console.log('listening on *:3000');
}); 
