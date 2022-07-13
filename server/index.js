const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS', 'HEAD'],
    allowedHeaders: ['Content-Type', 'X-Authorization']
}

const { Server } = require("socket.io");
const io = new Server(server,{
    cors:{
        origin: 'http://localhost:3001',
        methods: ['GET', 'POST'],
    }
});

app.use(cors(corsOptions));

io.on('connection', (socket) =>{
    socket.on('send message', message =>{
        io.emit('send message', message);
    })
})

server.listen(3000, () => {
    console.log('Server listening on port 3000...');
});