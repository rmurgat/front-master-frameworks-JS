'use strict'

var express = require('express');
var ArticleService = require('../service/articleService');
const articleService = require('../service/articleService');

var router = express.Router();

// test paths
router.get('/test-de-controlador', articleService.test);
router.post('/datos-curso', articleService.datosCurso);

// usefull paths
router.post('/save', ArticleService.save);
router.get('/articles/:last?', ArticleService.getArticles);
router.get('/article/:id', ArticleService.getArticle);
router.put('/article/:id', ArticleService.update);

module.exports = router;