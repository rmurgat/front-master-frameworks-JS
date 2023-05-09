'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleModel = Schema({
    title: String,
    content: String,
    date: { type:Date, default: Date.now },
    image: String
});

module.exports = mongoose.model('Article', ArticleModel);
// creara una coleccion en plural [articles] que contendra los documentos [article]