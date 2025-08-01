require('dotenv').config();

const { Pool } = require('pg')


console.log('Puerto que usa para conectar:', process.env.PORT_DB);


const pool = new Pool ({
    user: process.env.USER_DB,
    host: process.env.HOST_DB,
    database: process.env.DB,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.PORT_DB)
})

module.exports = pool