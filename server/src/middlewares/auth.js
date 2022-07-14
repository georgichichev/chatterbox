const playerService = require('../services/playerService.js');
const {validateToken} = require('../services/userService.js');
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