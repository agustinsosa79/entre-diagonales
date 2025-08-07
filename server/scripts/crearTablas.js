require('dotenv').config({ path: '../.env' });
const pool = require('../db');

const crearTablas = async () => {
  try {
    // Crear Categorias
    await pool.query(`
      CREATE TABLE IF NOT EXISTS Categorias (
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

    // Insertar categorías si no existen
    const result = await pool.query('SELECT COUNT(*) FROM Categorias');
    if (parseInt(result.rows[0].count) === 0) {
      await pool.query(`
        INSERT INTO Categorias (id, nombre) VALUES
        (2, 'Museos'),
        (11, 'Cafés culturales'),
        (12, 'Plazas'),
        (13, 'Centros culturales'),
        (14, 'Gastronomía');
      `);
      console.log('Categorías insertadas automáticamente.');
    }

    console.log('Tablas creadas correctamente');
  } catch (error) {
    console.log('Error al crear tablas:', error);
  } finally {
    await pool.end();
  }
};

crearTablas();