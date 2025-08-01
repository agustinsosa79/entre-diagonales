require('dotenv').config({ path: '../.env' });
const pool = require('../db');

const insertarLugares = async () => {
    try {
        
        await pool.query(`
    INSERT INTO Lugares (nombre, descripcion, direccion, categoria_id, telefono, email, sitio_web, horario) VALUES
    ('Museo Almafuerte', 'Casa-museo donde vivió el poeta Almafuerte. Muestra objetos personales y exposiciones temporales.', 'Calle 66 Nº 530, La Plata', 2, '', '', '', ''),
    ('Museo Dardo Rocha', 'Ubicado en la casa del fundador de la ciudad. Muestra mobiliario, documentos históricos y arte.', 'Calle 50 entre 13 y 14, La Plata', 2, '', '', '', ''),
    ('Café de las Artes', 'Cafetería y espacio cultural con exposiciones, presentaciones y ambiente artístico.', 'Calle 7 Nº 1076, La Plata', 11, '', '', '', ''),
    ('Centro Cultural Islas Malvinas', 'Espacio cultural con exposiciones, talleres, ferias, patio gastronómico y actividades para todas las edades.', 'Av. 19 y 51, La Plata', 13, '', '', '', ''),
    ('Biblioteca López Merino', 'Biblioteca pública con colección histórica y actividades culturales, ubicada en una casona de principios del siglo XX.', 'Calle 49 Nº 835, La Plata', 13, '', '', '', ''),
    ('Mercado 55', 'Espacio gastronómico con puestos de cocina internacional, bar y shows en vivo.', 'Calle 55 Nº 643, La Plata', 14, '', '', '', ''),
    ('La Grieta', 'Centro cultural autogestivo con talleres, cine, teatro independiente y actividades sociales.', 'Calle 18 y 71, La Plata', 13, '', '', '', ''),
    ('Plaza San Martín', 'Plaza histórica frente a Casa de Gobierno. Monumento al Libertador y espacio de manifestaciones y ferias.', 'Calle 7 y 50, La Plata', 12, '', '', '', '');
`);

        console.log('Lugares y categorías insertados correctamente.');
    } catch (error) {
        console.error('Error al insertar datos:', error);
    } finally {
        await pool.end();
    }
};

insertarLugares();
