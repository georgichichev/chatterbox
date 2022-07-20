const express = require('express');
const {mongoose} = require('mongoose');
const {Server} = require("socket.io");
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');
const {auth} =require('./src/middlewares/auth.js');
const routes = require('./src/routes.js');
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
    app.use(auth);
    app.use(express.json());
    app.use(routes)

    const io = new Server(server, {
        cors: {
            origin: 'http://localhost:3001',
            methods: ['GET', 'POST'],
        }
    });

    io.use((socket, next) => {
        socket.credential = socket.handshake.auth.credential;
        next();
    })

    io.on('connection', (socket) => {
        socket.on('disconnect', () =>{
            socket.broadcast.emit('user disconnect', socket.credential)
        });

        socket.join(socket.credential);

        const users = [];
        for (let user of io.of("/").sockets) {
            if (user[1].credential !== socket.credential){
                users.push(user[1].credential);
            }
        }
        socket.emit('users', users);

        socket.broadcast.emit("user connected", socket.credential);

        socket.on('send message', message => {
            io.emit('send message', message);
        })

        socket.on('private message', (message) =>{
            io.to(message.to).emit('private message', message.message)
        })
    })

    server.listen(3000, () => {
        console.log('Server listening on port 3000...');
    });
};

startServer();


