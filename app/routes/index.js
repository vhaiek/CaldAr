const router = require('express').Router();

// Set a path to each router
router.use('/api/boilers',require('./boilers'));
router.use('/api/technicians',require('./technicians'));
//router.use('/api/buildings',require('./buildings'));

module.exports = router;