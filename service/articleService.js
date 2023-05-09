'use strict'

var Validator = require('validator');
var Article = require('../models/articleModel');

var articleService = {

    datosCurso: (req, res) => {
        var hola = req.body.hola;
        return res.status(200).send({
            curso: 'Master en Frameworks js',
            autor: 'Ruben Murga',
            url: 'https://github.com/rmurgat',
            hola
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la accion test de mi servicio de articulos'
        })
    },

    save: (req, res) => {
        // recoger parametros por post
        var params = req.body;

        // validar datos (validator dependency)
        try {
            var validate_title = !Validator.isEmpty(params.title);
            var validate_content = !Validator.isEmpty(params.content);
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'faltan datos por enviar!'
            });
        }
        if (validate_title && validate_content) {
            // crear el objeto
            var article = new Article();

            // asignar valores
            article.title = params.title;
            article.content = params.content;

            // guardar el articulo
            article.save().then((articleStored)=>{
                // devolver una respuesta
                return res.status(200).send({
                    status: 'sucess',
                    message: 'El articulo se ha guardado!',
                    articleStored
                });

            }).catch((err)=>{
                return res.send(404).send({
                    status: 'error',
                    message: 'El articulo no se ha guardado!'
                });
            });


        } else {
            return res.status(200).send({
                status: 'error',
                message: 'los datos no son validos!'
            });
        }


    }

};  // fin de [controller]

module.exports = articleService;