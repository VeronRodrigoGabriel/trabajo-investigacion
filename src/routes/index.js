const router = require('express').Router();
const { gallery, formimagen } = require('../controllers/renders.controllers');

//vistas
router.get('/', gallery)
router.get('/form', formimagen)

module.exports = router;