const router = require('express').Router();
const roomService = require('../service/roomService.js');
const {isAuth, preloadRoom, isOwner} = require("../middlewares/auth.js");
const {errorMapper} = require("../util.js");

router.get('/rooms',async (req, res) => {
    const rooms = await roomService.getAllRooms();

    res.json(rooms);
});

router.get('/rooms/:id', async (req,res) =>{
    try{
        const room = await roomService.getOneRoom(req.params.id);

        res.json(room);
    }
    catch (err){
        console.log(err)

        res.json({message: 'Room not found.'});
    }
});

router.post('/rooms',isAuth, preloadRoom, isOwner, async (req, res) => {
    try{
        const room = await roomService.createRoom(req.body, req.user.id);

        res.json(room);
    }
    catch (err){
        console.log(err)
        const message = errorMapper(err);

        res.json(message);
    }
});


module.exports = router;