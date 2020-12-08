const boiler = require('../controllers/boiler.js');
const router = require('express').Router();

router.get('/', boiler.findAll);
router.post('/', boiler.create);
router.get('/:id', boiler.findOne);
router.put('/:id', boiler.update);
router.delete('/:id', boiler.delete);

module.exports = router;
