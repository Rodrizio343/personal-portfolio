require("dotenv").config();
const PORT = process.env.PORT || 4000;
const DB = process.env.DB;
console.log(DB)
const MONGO = require("mongoose");
const CON = MONGO.connection;
const JWT_KEY = "rodrizio@343";

module.exports = {
  CON,
  DB,
  JWT_KEY,
  MONGO,
  PORT
};