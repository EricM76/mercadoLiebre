var express = require('express');
var router = express.Router();

const controller = require('../controllers/mainController'); //requiero el controlador para que se haga cargo de la lógica

/* GET home page. */
router.get('/', controller.index);

router.get('/search', controller.search); //añado una nueva ruta que se ocupe de la busqueda de productos


module.exports = router;