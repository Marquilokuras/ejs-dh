const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');

router.get('/', mainController.renderHome);
/* router.get('/about', mainController.renderAbout); */
router.get('/:id', mainController.renderDetalleMenu);

module.exports = router;