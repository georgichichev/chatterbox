const express = require('express');
const {mongoose} = require('mongoose');
const {Server} = require("socket.io");
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');
const {DB_URI, CORS_OPTIONS} = require("./src/constants.js");

const startServer = () => {
    try {
        mongoose.connect(DB_URI, () => {
            console.log('Database connected.')
        })
    } catch (err) {
        console.log('Error connecting to the database.');
        return process.exit(1);
    }

    app.use(cors(CORS_OPTIONS));

    const io = new Server(server, {
        cors: {
            origin: 'http://localhost:3001',
            methods: ['GET', 'POST'],
        }
    });


    io.on('connection', (socket) => {
        socket.on('send message', message => {
            io.emit('send message', message);
        })
    })

    server.listen(3000, () => {
        console.log('Server listening on port 3000...');
    });
};

startServer();


