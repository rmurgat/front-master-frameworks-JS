'use strict'

// cargar modulos de node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');

// ejecutar express (http)
var app = express();

// cargar ficheros rutas
var article_routes = require('./controller/restcontroller')

// middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());              // convierte cualquier petición que llegue a formato JSON

// CORS

// añadir prefijos a rutas
app.use('/api', article_routes);

// ruta o metodo de prueba para el API REST
// rmt - this is an old version to test [express] without router
/* 
app.get('/test1', (req, res) => {
   console.log('hola mundo');      // show 'hola mundo' in console
});

app.get('/test2', (req, res) => {
    // show list in browser
    return res.status(200).send(`
    <ul>
      <li>NodeJS</li>
      <li>Angular</li>
      <li>React</li>
      <li>Vue</li>
    </ul>   
    `)
});

app.get('/test3', (req, res) => {
    // show json in browser
    return res.status(200).send({
        curso: 'master en framework js',
        autor: 'Ruben Murga',
        url: 'https://github.com/rmurgat'
    });
});
*/

// exportar modulo (fichero actual)
module.exports = app;