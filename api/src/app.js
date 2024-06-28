require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const app = express(); //initialize express app

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(helmet()); // add security headers

app.use(express.json()); // body parser middleware

app.use(cookieParser()); //parse the http cookie

app.use("/api/auth", require("./routes/auth/auth.router")); // authentication routes

app.use("/api/v1", require("./routes/v1")); // API routes

module.exports = app;
