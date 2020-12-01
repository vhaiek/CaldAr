const company = require('../controllers/companies.js');
const router = require('express').Router();

// Retrieve all companies
router.get('/',company.findAll);

// Create a new company
router.post('/',company.create);

// Retrieve a single company by Id
router.get('/:id',company.findOne);

// Update a company by Id
router.put('/:id',company.update);

// Delete a company by Id
router.delete('/:id', company.delete);

module.exports = router;

