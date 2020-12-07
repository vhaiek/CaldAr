const technician = require('../controllers/technician.js');
const router = require('express').Router();

// Retrieve all technician
router.get('/', technician.findAll);

// Retrieve technician by name
router.get('/name/:name', technician.findByName);

// Create a new technician
router.post('/', technician.create);

// Retrieve a single technician by Id
router.get('/:id', technician.findOne);

// Update a technician by Id
router.put('/:id', technician.update);

// Delete a technician by Id
router.delete('/:id', technician.delete);

module.exports = router;
