const company = require('../controllers/companies.js');
const router = require('express').Router();

router.get('/', company.findAll);
router.post('/', company.create);
router.get('/:id', company.findOne);
router.put('/:id', company.update);
router.delete('/:id', company.delete);

module.exports = router;
