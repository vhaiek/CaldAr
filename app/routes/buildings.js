const building = require('../controllers/building.js');

const router = require('express').Router();

router.get('/', building.findAll);

router.post('/', building.create);

router.get('/:id', building.findOne);

router.put('/:id', building.update);

router.delete('/:id', building.delete);

module.exports = router;
