const express = require('express');
const cors = require('cors');
const Sequelize = require('sequelize');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

const connection = new Sequelize('users', 'root', 'Wpr83485', {
    host: 'localhost',
    dialect: 'mysql'
});
connection.sync();
module.exports = connection;

requireDir('./src/models');

app.use('/', require('./src/routes.js'));

app.listen(3001);