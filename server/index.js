const express = require('express')
const cors = require('cors')
const app = express()
const lugaresRoutes = require('./routes/lugares.route')
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use('/api/lugares', lugaresRoutes)


app.listen(PORT, () => {
    console.log(`estas escuchando en el puerto http://localhost:${PORT}`);
    
})

console.log(`Servidor corriendo en http://localhost:${PORT}`)