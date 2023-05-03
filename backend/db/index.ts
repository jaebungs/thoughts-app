require('dotenv').config()

const { Pool, Client } = require('pg')
 
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'thoughts',
  password: process.env.SQLPWD,
  port: 5432
})

// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'thoughts',
//   password: process.env.SQLPWD,
//   port: 5432
// })

// client.connect()


// module.exports = {
//   query: (text, params) => pool.query(text, params),
// }

// const getAllThoughts = client.query('select * from thoughts', (err, res) => {
//   if(err) return err
//   console.log(res.rows)
//   client.end()
// })
// export { getAllThoughts }
export default pool;