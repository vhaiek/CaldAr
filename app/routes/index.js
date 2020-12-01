const router = require('express').Router();


router.use('/api/buildings',require('./buildings'));

module.exports = router;