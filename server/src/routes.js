const express = require('express');
const Router = express.Router();
const User = require('./controllers/userController');

Router.get('/users/', User.showAll);
Router.post('/users/', User.create);
Router.delete('/users/:id', User.delete);
Router.put('/users/:id', User.update);

module.exports = Router;