const Sequelize = require('sequelize');
const sequelize = require('../../server');

const Model = Sequelize.Model;

class User extends Model { };
User.init({
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    underName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Users'
});

module.exports = User;