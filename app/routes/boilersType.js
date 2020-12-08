const boilerType = require('../controllers/boilerType.js');
const router = require('express').Router();

router.get('/', boilerType.findAll);

module.exports = router;
