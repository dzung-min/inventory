require("dotenv").config()
const path = require("path")

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: DB_HOST,
      port: DB_PORT,
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD,
    },
    migrations: {
      directory: path.join(__dirname, "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "db", "seeds"),
    },
  },
}
