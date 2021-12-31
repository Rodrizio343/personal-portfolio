const express = require('express');
const bodyParser = require('body-parser')
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const { PORT } = require("./config/config");
console.log(PORT)

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(morgan("dev"));
app.use(cors());
app.use(express.static(__dirname + "/uploads"));

app.listen(PORT, () => {
  console.log(`The server started on PORT: ${PORT}`);
});