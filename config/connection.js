require('dotenv').config();
const Sequelize = require('sequelize');

const match = process.env.JAWSDB_URL.match(/mysql:\/\/(.*):(.*)@(.*):3306\/(.*)/);

const sequelize = new Sequelize(match[4], match[1], match[2], {
  host: match[3],
  dialect: 'mysql',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});
module.exports = sequelize;
