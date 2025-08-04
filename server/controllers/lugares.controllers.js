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

const lugarPorId = async (req, res) => {
    const id = parseInt(req.params.id)

     if (isNaN(id)) {
    return res.status(400).json({ mensaje: 'ID inválido' })
  }
  
    try {
        const result = await pool.query('SELECT * FROM Lugares WHERE id = $1', [id])

        if (result.rows.length === 0) {
            return res.status(404).json({ mensaje: 'Lugar no encontrado' })
        }

        res.json(result.rows[0])
    } catch (error) {
        console.error('Error al obtener el lugar:', error)
        res.status(500).json({ mensaje: 'Error del servidor' })
    }
}


const crearLugar = async (req, res) => {
    const {
        nombre,
        descripcion,
        direccion,
        categoria_id,
        telefono, 
        email,
        sitio_web, 
        horario
    } = req.body

    if(!nombre || !direccion || !categoria_id ) {
         return res.status(404).json({message: 'Faltan datos obligatorios'})
    }

    try {
        const result = await pool.query(
            `INSERT INTO Lugares 
        (nombre, descripcion, direccion, categoria_id, telefono, email, sitio_web, horario)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [nombre, descripcion, direccion, categoria_id, telefono, email, sitio_web, horario]
        )

        res.status(200).json(result.rows[0])
    } catch (error) {
        console.error('Error al crear lugar:', error)
        res.status(500).json({ error: 'Error interno al crear el lugar' })
    }
}


const actualizarLugar = async (req, res) => {
  const { id } = req.params
  const {
    nombre,
    descripcion,
    direccion,
    categoria_id,
    telefono,
    email,
    sitio_web,
    horario
  } = req.body

  try {
    const result = await pool.query(
      `UPDATE Lugares SET
        nombre = $1,
        descripcion = $2,
        direccion = $3,
        categoria_id = $4,
        telefono = $5,
        email = $6,
        sitio_web = $7,
        horario = $8
      WHERE id = $9
      RETURNING *`,
      [nombre, descripcion, direccion, categoria_id, telefono, email, sitio_web, horario, id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Lugar no encontrado' })
    }

    res.json(result.rows[0])
  } catch (error) {
    console.error('Error al actualizar lugar:', error)
    res.status(500).json({ error: 'Error interno al actualizar el lugar' })
  }
}



const eliminarLugar = async (req, res) => {
  const { id } = req.params

  try {
    const result = await pool.query('DELETE FROM Lugares WHERE id = $1 RETURNING *', [id])

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Lugar no encontrado' })
    }

    res.json({ message: 'Lugar eliminado correctamente' })
  } catch (error) {
    console.error('Error al eliminar lugar:', error)
    res.status(500).json({ error: 'Error interno al eliminar el lugar' })
  }
}


const obtenerCategorias = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Categorias')
    res.json(result.rows)
  } catch (error) {
    console.error('Error al obtener categorías', error)
    res.status(500).json({ error: 'Error interno al obtener categorías' })
  }
}

module.exports = {obtenerLugares, crearLugar, actualizarLugar, eliminarLugar, lugarPorId, obtenerCategorias}