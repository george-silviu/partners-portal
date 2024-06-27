require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const { pool } = require("./services/postgres");

const app = express(); //Create Express app

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(helmet()); // Security Headers with Helmet

app.use(express.json()); // Body Parser Middleware

app.use(cookieParser()); //

app.use("/api/auth", require("./routes/auth/auth.router")); // Authentication Routes

app.use("/api/v1", require("./routes/v1")); // API Routes

module.exports = app;
