'use strict'

var express = require('express');
var ArticleService = require('../service/articleService');
const articleService = require('../service/articleService');

var router = express.Router();

// rutas de prueba
router.get('/test-de-controlador', articleService.test);
router.post('/datos-curso', articleService.datosCurso);

// rutas utiles
router.post('/save', ArticleService.save);

module.exports = router;