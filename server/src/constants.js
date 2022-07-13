exports.PORT = 3000;

exports.JWT_SECRET = 'hd1kg2k 1g23ghjabn1£"!"d';

exports.DB_URI = 'mongodb://localhost:27017/chatterbox';

exports.CORS_OPTIONS = {
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS', 'HEAD'],
    allowedHeaders: ['Content-Type', 'X-Authorization']
};