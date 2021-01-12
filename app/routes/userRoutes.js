const express = require('express');
const usersController = require ('../controllers/usersControlller');
const authMiddleware = require ('../middlewares/authMiddleware');

const router = express.Router();

router
.get('/',authMiddleware,usersController.getAllUsers)
.post('/',authMiddleware,usersController.createUsers)
.delete('/:id',authMiddleware, usersController.deleteUsers);

module.exports = router;