const {Room} = require('../models/Room.js');

exports.getAllRooms = () =>{
    return Room.find();
}

exports.getOneRoom = (id) =>{
    return Room.findById(id);
}

exports.createRoom = (data, creatorId) =>{
    return Room.create({...data, creator: creatorId});
}

exports.editRoom = (id,data) =>{
    return Room.findByIdAndUpdate(id, data, {new: true, overwrite: true, runValidators: true});
};
