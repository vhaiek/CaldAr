const buildings = require('../controllers/building.js');
const router = require('express').Router();

// Retrieve all boilers
router.get('/',buildings.findAll);

// Create a new boiler
router.post('/',buildings.create);

// Retrieve a single boiler by Id
router.get('/:id',buildings.findOne);

// Update a boiler by Id
router.put('/:id',buildings.update);

// Delete a boiler by Id
router.delete('/:id', buildings.delete);

module.exports = router;
