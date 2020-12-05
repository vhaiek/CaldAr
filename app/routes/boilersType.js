const boilerType = require('../controllers/boilerType.js');
const router = require('express').Router();

// Retrieve all boilersType
router.get('/',boilerType.findAll);

module.exports = router;