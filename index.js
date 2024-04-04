import express from 'express';
const app = express()

// Escuchar peticiones externas (routing)
app.get('/', (req, res) => {
    res.send('Respondiendo a la ruta raíz 🎉')
})

// inventar tres rutas más

// Levantar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor andando en http://localhost:${PORT}`)
})