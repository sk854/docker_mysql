const express = require('express');
const { sequelize } = require('./models');
const app = express();

sequelize.sync();

app.get('/', function (req, res) {
  res.end('MySQL Docker')
}).listen(3306);