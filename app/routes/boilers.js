const boiler = require('../controllers/boiler.js');
const router = require('express').Router();

// Retrieve all boilers
router.get('/all', boiler.findAll);

// Create a new boiler
router.post('/', boiler.create);

// Retrieve a single boiler by Id
router.get('/:id', boiler.findOne);

// Update a boiler by Id
router.put('/:id', boiler.update);

// Delete a boiler by Id
router.delete('/:id', boiler.delete);

module.exports = router;
