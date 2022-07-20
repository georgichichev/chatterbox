const roomService = require('../service/roomService.js');
const {validateToken} = require('../service/userService.js');
const {JWT_SECRET} = require("../constants.js");

exports.auth = async (req, res, next) =>{
    const token = req.headers['x-authorization'];

    if (token){
        try{
            const user = await validateToken(token, JWT_SECRET);
            req.user = user;
            req.token = token;
        }
        catch (err){
            return res.status(401).json({message: 'Invalid access token.'});
        }
    }

    next();
};

exports.isAuth = (req, res, next) =>{
    const user = req.user;

    if (!user){
        return res.status(401).json({message: 'Please provide an access token.'})
    }

    next();
};
exports.preloadRoom = async(req, res, next) =>{
    try{
        const room = await roomService.getOneRoom(req.params.id);
        req.room = room;
    }
    catch (err){
        return res.status(404).json({message: 'Room not found.'});
    }

    next();
}

exports.isOwner = (req, res, next) =>{
    if (req.user._id == req.room.creator){
        next();
    }
    else{
        res.status(403).json({message: 'You have no permission to do this.'});
    }
}