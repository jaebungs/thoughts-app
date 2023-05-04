require('dotenv').config()

const { Pool } = require('pg')
 
const pool = new Pool({
  user: process.env.SQLUSER,
  host: process.env.SQLHOST,
  database: process.env.SQLTHOUGHTS,
  password: process.env.SQLPWD,
  port: process.env.SQLPORT || 5432
})

export default pool;