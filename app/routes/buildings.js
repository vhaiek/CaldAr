const building = require('../controllers/building.js');

const router = require('express').Router();

// Retrieve all boilers
router.get('/',building.findAll);

// Create a new building
router.post('/',building.create);

// Retrieve a single building by Id
router.get('/:id',building.findOne);

// Update a building by Id
router.put('/:id',building.update);

// Delete a building by Id
router.delete('/:id', building.delete);

module.exports = router;
