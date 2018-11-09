const router = require('express').Router();
const contactController = require('../controllers/contact.controller');

router.get('/', contactController.readAll);

// router.get('/', (req, res) => {
//     res.send('adfdff')
// })

module.exports = router;