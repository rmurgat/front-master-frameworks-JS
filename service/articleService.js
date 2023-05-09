'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');
var Article = require('../models/articleModel');


var articleService = {

    datosCurso: (req, res) => {
        var hola = req.body.hola;
        return res.status(200).send({
            curso: 'Frameworks Master js',
            autor: 'Ruben Murga',
            url: 'https://github.com/rmurgat',
            hola
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'i am test action from article service'
        })
    },

    save: (req, res) => {
        // recoger parametros por post
        var params = req.body;

        // validar datos (validator dependency)
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'data required!'
            });
        }
        if (validate_title && validate_content) {
            // crear el objeto
            var article = new Article();

            // asignar valores
            article.title = params.title;
            article.content = params.content;

            // guardar el articulo
            article.save().then((articleStored) => {
                // devolver una respuesta
                return res.status(200).send({
                    status: 'success',
                    message: 'article saved!',
                    articleStored
                });

            }).catch((err) => {
                return res.send(404).send({
                    status: 'error',
                    message: 'article NOT saved!'
                });
            });
        } else {
            return res.status(200).send({
                status: 'error',
                message: 'data not valid!'
            });
        }
    },

    getArticles: (req, res) => {

        var query = Article.find({});

        var last = req.params.last;
        if (last || last != undefined) {
            query.limit(3);
        }

        // find and return all rows sorting by id (desc)
        query.sort('-_id').then((articles) => {
            if (!articles) {
                return res.status(404).send({
                    status: 'error',
                    message: 'There are not articles to return!'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });

        }).catch((err) => {
            return res.status(500).send({
                status: 'error',
                message: 'Error returning articles!'
            })
        });
    },

    getArticle: (req, res) => {

        // get id from url
        var articleId = req.params.id;

        // validate the existence 
        if (!articleId || articleId == null) {
            return res.status(404).send({
                status: 'error',
                message: 'the article param is required!'
            });
        }

        // find article
        Article.findById(articleId).then((article) => {
            return res.status(200).send({
                status: 'success',
                message: 'the article-id exist and returning!',
                article
            })
        }).catch((err) => {
            return res.status(500).send({
                status: 'error',
                message: 'article-id do not exist!'
            })
        });
    },

    update: (req, res) => {
        // get article-id comming from url
        var articleid = req.params.id;

        // get full data from body
        var params = req.body;

        // validate data 
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        } catch (err) {
            return res.status(404).send({
                status: 'error',
                message: 'data not completed!',
                params
            })
        }

        if (validate_title && validate_content) {
            // find and update
            Article.findOneAndUpdate({ _id: articleid }, params, { new: true }).then((article) => {
                return res.status(200).send({
                    status: 'success',
                    message: 'the article is updated!',
                    article
                })

            }).catch((err) => {
                return res.status(500).send({
                    status: 'error',
                    message: 'article-id do not exist!'
                })
            })
        }
    },

    delete: (req, res) => {
        // get article-id from url
        var articleId = req.params.id;

        // find and delete
        Article.findByIdAndDelete({ _id: articleId }).then((article) => {
            if (article == null) {
                return res.status(200).send({
                    status: 'error',
                    message: 'the article-id do not exist!',
                    article
                })
            }
            return res.status(200).send({
                status: 'success',
                message: 'the article was deleted!',
                article
            })
        }).catch((err) => {
            return res.status(500).send({
                status: 'error',
                message: 'error deleting article!'
            })
        })
    },

    upload: (req, res) => {

        // config [multipart] module at [controller/restcontroller.js]

        // get the file from [body-request]
        var file_name = 'Imagen no subida...';
        console.log(req.files);
        if (!req.files) {
            return res.status(404).send({
                status: 'error',
                message: file_name,
            });
        }

        // get file name and extension
        var file_path = req.files.file0.path;
        var file_split = file_path.split('/');     // warning! to Windows use file_path.split( \\ )
        var file_name = file_split[2];
        var extesion_split = file_name.split('.');
        var extension = extesion_split[1];

        // validate extension, images limited, if is valid extension, delete file
        if(extension != 'png' && extension != 'jpg' && extension != 'jpeg' && extension != 'gif') {
            // delete file uploaded
            fs.unlink(file_path, (err) => {
                return res.status(200).send({
                    status: 'error',
                    message: 'file extension NOT valid!',
                })
            });
        } else {
            // find out article and set image name and update
            var articleId = req.params.id;
            Article.findByIdAndUpdate({_id:articleId}, {image:file_name}, {new:true}).then((article) => {
                return res.status(200).send({
                    status: 'success',
                    message: 'imagen file was added to Article!',
                    article
                });
    
            }).catch((err) => {
                return res.status(200).send({
                    status: 'error',
                    message: 'error updating Article imagen!!'
                });
            });
        }
    },  // ending [upload]

    getImage: (req, res) => {
        var file = req.params.image;
        var path_file = './upload/articles/'+file;

        fs.exists(path_file, (exist) => {
            if(exist) {
                return res.sendFile(path.resolve(path_file));
            } else {
                return res.status(404).send({
                    status: 'error',
                    message: 'file name do not exist!',
                })
            }
        });
    }, // ending [getImage]

    search: (req, res) => {
        // get string to search
        var searchString = req.params.search;

        Article.find({ "$or": [
            { "title": {"$regex": searchString, "$options": "i"} },
            { "content": {"$regex": searchString, "$options": "i"} }
        ]})
        .sort([['date','descending']])
        .exec().then((articles)=>{
            return res.status(200).send({
                status: 'sucess',
                message: 'sharing [' + articles.length + '] result to search',
                articles
            });
        }).catch((err)=>{
            return res.status(500).send({
                status: 'error',
                message: 'error searching Articles'
            });
        })
    } //ending [search]


};  // ending [articleService]

module.exports = articleService;