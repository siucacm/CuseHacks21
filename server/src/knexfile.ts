import * as path from 'path'
import dotenv from 'dotenv'
dotenv.config({path: path.join(__dirname, '../.env')})


export default {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.PG_HOST,
      database: "rabithole",
      user: process.env.PG_USER,
      password: process.env.PG_PASS
    },
    pool: {
      min: 2,
      max: 10
    }
  }
}