const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router
    .post('/register', authController.register)
    .post('/login', authController.login)
    .post('/logout', authMiddleware, authController.logout);

module.exports = router;