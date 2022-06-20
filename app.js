// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// [START gae_node_request_example]
const express = require('express');
const app = express();

// convierte el cuerpo del mensaje de la petición en JSON al objeto de Javascript req.body:
app.use(express.json());

// middleware para descodificar caracteres UTF-8 en la URL:
app.use( (req, res, next) => {
  req.url = decodeURI(req.url);
  next();
});

function invertirCadena(cad) {

  // Paso 1. Usa el método split() para devolver un arreglo
  var separarCadena = cad.split(""); // var separarCadena = "hola".split("");
  // ["h", "o", "l", "a"]

  // Paso 2. Usa el método reverse() para invertir el nuevo arreglo creado
  var invertirArreglo = separarCadena.reverse(); // var invetirArreglo = ["h", "o", "l", "a"].reverse();
  // ["a", "l", "o", "h"]

  // Paso 3. Usa el método join() para unir todos los elementos del arreglo en una cadena
  var unirArreglo = invertirArreglo.join(""); // var unirArreglo = ["a", "l", "o", "h"].join(); 
  // "aloh"

  // Paso 4. Devolver la cadena invertida
  return unirArreglo; // "aloh"

}

app.get('/invierte/:cadena', async (req, res) => {

  let cadenaInvertida = invertirCadena(req.params.cadena);
  res.status(200).send({result:cadenaInvertida, error:null});

});

const path = require('path');
const publico = path.join(__dirname, 'public');

/*app.get('/', (req, res) => {
  res.status(200).send('Ejercicio 7.2').end();
});*/

app.use('/', express.static(publico));

// Start the server
const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`Aplicación lanzada en el puerto ${PORT}`);
  console.log('Pulsa Ctrl+C para finalizar la ejecución del servidor.');
});
// [END gae_node_request_example]

module.exports = app;
