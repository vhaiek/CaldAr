const boiler = require('../controllers/boiler.js');
const router = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, boiler.findAll);
router.post('/', authMiddleware, boiler.create);
router.get('/:id', authMiddleware, boiler.findOne);
router.put('/:id', authMiddleware, boiler.update);
router.delete('/:id', authMiddleware, boiler.delete);

module.exports = router;
