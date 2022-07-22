const router = require('express').Router();
const roomService = require('../service/roomService.js');
const {isAuth, preloadRoom, isOwner} = require("../middlewares/auth.js");
const {errorMapper} = require("../util.js");

router.get('/',async (req, res) => {
    const rooms = await roomService.getAllRooms();

    res.json(rooms);
});

router.get('/:id', async (req,res) =>{
    try{
        const room = await roomService.getOneRoom(req.params.id);

        res.json(room);
    }
    catch (err){
        console.log(err)

        res.status(404).json({message: 'Room not found.'});
    }
});

router.post('/create',isAuth, async (req, res) => {
    try{
        const room = await roomService.createRoom(req.body, req.user._id);

        res.json(room);
    }
    catch (err){
        console.log(err)
        const message = errorMapper(err);

        res.status(400).json({message});
    }
});

router.put('/edit/:id', isAuth, preloadRoom, isOwner, async (req, res) => {
    try {
        const room = await roomService.editRoom(req.params.id, {...req.body, creator: req.user._id});

        console.log(room)

        res.json(room);
    } catch (err) {
        const message = errorMapper(err);
        res.status(400).json({message});
    }
});


module.exports = router;