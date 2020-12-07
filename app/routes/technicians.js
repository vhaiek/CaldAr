const technician = require('../controllers/technician.js');
const router = require('express').Router();

router.get('/', technician.findAll);
router.get('/name/:name', technician.findByName);
router.post('/', technician.create);
router.get('/:id', technician.findOne);
router.put('/:id', technician.update);
router.delete('/:id', technician.delete);

module.exports = router;
