const Sequelize = require("sequelize");

const db = new Sequelize("cruce022021", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
