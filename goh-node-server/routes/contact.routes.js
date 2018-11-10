const router = require('express').Router();
const contactController = require('../controllers/contact.controller');

router.get('/', contactController.readAll);
router.get('/:id', contactController.readById);
router.post('/', contactController.create);
router.put('/:id', contactController.update);
router.delete('/:id', contactController.del);

module.exports = router;