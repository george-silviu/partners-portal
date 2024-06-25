const { pool } = require("../services/postgres");

async function selectUsers() {
  try {
    const data = await pool.query(`SELECT * FROM users;`, []);
  } catch (error) {}
}
