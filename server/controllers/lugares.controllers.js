const pool = require('../db')


const obtenerLugares = async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM lugares`)
        res.json(result.rows)
    } catch (error) {
        console.log('error al obtener los datos',error)
        res.status(500).json({error: 'error interno al obtener los lugares'})
    }
}

module.exports = {obtenerLugares}