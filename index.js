import express from 'express';
const app = express()

// Escuchar peticiones externas (routing)
app.get('/', (req, res) => {
    res.send('Respondiendo a la ruta raíz 🎉')
})

app.get('/hello', (req, res) => {
    res.send('Hola mundo con express 🥳')
})

// Tarea: Juego adivinar: enviar parámetro y comparar con número aleatorio entre 1 y 3:
app.get('/game/:number', (req, res) => {

    const numberParams = req.params.number

    res.send(`El número es: ${numberParams}`)
})

// objeto response
app.get('/pc', (req, res) => {
    res.redirect('https://www.pcfactory.cl/producto/50859-samsung-smartphone-galaxy-s23-fe-128gb-8gb-graphite-liberado')
})

// 404
app.get('/*', (req, res) => {
    res.send('404 😣')
})

// Levantar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor andando en http://localhost:${PORT}`)
})