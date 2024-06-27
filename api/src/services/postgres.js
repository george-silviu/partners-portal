const { Pool } = require("pg");

const DATABASE = process.env.DATABASE;
const DATABASE_URL = process.env.DATABASE_URL;

const dbConfig = {
  connectionString: DATABASE_URL,
  //   ssl: {
  //     //use this only in production when serving over https
  //     rejectUnauthorized: false,
  //   },
  max: 20, // Maximum number of connections in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
};

const pool = new Pool(dbConfig);

const connectToDatabase = () => {
  return new Promise((resolve, reject) => {
    pool.connect((err, client, done) => {
      if (err) {
        reject(err); // Failed to connect to the database
      } else {
        done(); // Release the client back to the pool
        resolve(); // Database connection established successfully
        console.log(
          `\x1b[33m Message: PostgreSQL database ${DATABASE} connection established successfully! \x1b[0m`
        );
      }
    });
  });
};

module.exports = { pool, connectToDatabase };
