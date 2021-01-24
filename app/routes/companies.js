const company = require('../controllers/companies.js');
const router = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, company.findAll);
router.post('/', authMiddleware, company.create);
router.get('/:id', authMiddleware, company.findOne);
router.put('/:id', authMiddleware, company.update);
router.delete('/:id', authMiddleware, company.delete);

module.exports = router;
