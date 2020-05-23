var express = require('express');
var router = express.Router();

/* GET home page. */
const controller = require('../controllers/peliculasController')

router.get('/', controller.index);

router.post("/crear", controller.crear);




module.exports = router;
