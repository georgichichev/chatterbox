const {mongoose} = require('mongoose');

const roomSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    capacity:{
        type: Number,
        required: true
    },
    users:[
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ]
});

const Room = mongoose.model('Room', roomSchema);

exports.Room = Room;