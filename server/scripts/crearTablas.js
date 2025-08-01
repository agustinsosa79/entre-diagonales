require('dotenv').config({ path: '../.env' });

const pool = require('../db');
const crearTablas = async () => {
    try {

        // Crear Categorias
        await pool.query(`
            CREATE TABLE IF NOT EXISTS Categorias(
            id SERIAL PRIMARY KEY,
            nombre VARCHAR(100) NOT NULL
            )
        `);

        // Crear Lugares
        await pool.query(`
            CREATE TABLE IF NOT EXISTS Lugares (
            id SERIAL PRIMARY KEY,
            nombre VARCHAR(200) NOT NULL,
            descripcion TEXT,
            direccion TEXT,
            categoria_id INTEGER REFERENCES Categorias(id),
            telefono VARCHAR(50),
            email VARCHAR(100),
            sitio_web VARCHAR(150),
            horario TEXT
            )
        `);

        console.log('tablas creadas correctamente');
    } catch (error) {
        console.log('error al enviar la tabla', error);
    } finally {
        await pool.end();
    }
}

crearTablas();
