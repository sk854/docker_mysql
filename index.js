const express = require('express')
const app = express();
const mysql = require('mysql');
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});

app.get('/', function (req, res) {
  res.end('MySQL Docker')
}).listen(3306);