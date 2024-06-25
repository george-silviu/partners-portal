require("dotenv").config();

const express = require("express");
const helmet = require("helmet");

const { pool } = require("./services/postgres");

//Create Express app
const app = express();

// Security Headers with Helmet
app.use(helmet());

// Body Parser Middleware
// app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    console.log("I am here!!!");
    const result = await pool.query(`SELECT * FROM users;`);

    console.log(result.rows);

    return res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
