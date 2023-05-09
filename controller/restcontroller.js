'use strict'

var express = require('express');
var articleService = require('../service/articleService');
var multipart =  require('connect-multiparty');               // to upload files
var md_upload = multipart({uploadDir:'./upload/articles'});    // setting directory name to [multipart] file repository 
var router = express.Router();

// test paths
router.get('/test-de-controlador', articleService.test);
router.post('/datos-curso', articleService.datosCurso);

// usefull paths
router.post('/save', articleService.save);
router.get('/articles/:last?', articleService.getArticles);
router.get('/article/:id', articleService.getArticle);
router.put('/article/:id', articleService.update);
router.delete('/article/:id', articleService.delete);
router.post('/upload-image/:id', md_upload, articleService.upload);
router.get('/get-image/:image', articleService.getImage);
router.get('/search/:search', articleService.search);

module.exports = router;