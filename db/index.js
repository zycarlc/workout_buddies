const { Pool } = require("pg")
require("dotenv").config()

const signerOptions = {
    region: "ap-southeast-2a",
    hostname: process.env.RDS_ENDPOINT,
    port: 5432,
    username: "postgres",
}

module.exports = new Pool({
    host: signerOptions.hostname,
    port: signerOptions.port,
    user: signerOptions.username,
    database: "workoutbuddies",
    password: process.env.RDS_PASSWORD,
})
