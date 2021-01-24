const building = require('../controllers/building.js');
const router = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, building.findAll);
router.post('/', authMiddleware, building.create);
router.get('/:id', authMiddleware, building.findOne);
router.put('/:id', authMiddleware, building.update);
router.delete('/:id', authMiddleware, building.delete);

module.exports = router;
