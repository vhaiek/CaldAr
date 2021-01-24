const boilerType = require('../controllers/boilerType.js');
const router = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, boilerType.findAll);

module.exports = router;
