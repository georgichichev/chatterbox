const router = require('express').Router();
const userController = require('../src/controllers/userController.js');
const roomController = require('../src/controllers/roomController.js');

router.use('/users', userController);
router.use('/rooms', roomController)

module.exports = router;