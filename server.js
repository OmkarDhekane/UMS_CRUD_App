const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
// const mongoose  = require('mongoose');
const connectDB = require("./server/database/connection");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//log request
app.use(morgan("tiny"));

//mongoDB connection
connectDB();
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine   -> view engine can be html/pug
app.set("view engine", "ejs");

//parse request to body-parser
app.use("/css", express.static(path.resolve(__dirname, "assets/css"))); //to access assets files
app.use("/img", express.static(path.resolve(__dirname, "assets/img"))); //to access assets files
app.use("/js", express.static(path.resolve(__dirname, "assets/js"))); //to access assets files

//load routers
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
