// Database configuration

const { Sequelize } = require('squellize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/database.sqlite'
});

module.exports = sequelize;