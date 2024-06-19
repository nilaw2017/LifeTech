require("dotenv").config();

const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    HOST: process.env.HOST,
    dialect: "mysql",
  }
);

db.authenticate()
  .then(() => {
    console.log("Connection established with database");
  })
  .catch((err) => {
    console.log("Error connecting to database");
    console.log(err);
  });

module.exports = db;
