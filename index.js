require('dotenv').config();
const express = require('express');

const app = express();

app.listen(3000, (req, res, next) => {
  console.log('Escuchando en el puerto http://localhost:3000');
});
