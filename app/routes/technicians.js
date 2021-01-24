const technician = require('../controllers/technician.js');
const router = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, technician.findAll);
router.get('/name/:name', authMiddleware, technician.findByName);
router.post('/', authMiddleware, technician.create);
router.get('/:id', authMiddleware, technician.findOne);
router.put('/:id', authMiddleware, technician.update);
router.delete('/:id', authMiddleware, technician.delete);

module.exports = router;
