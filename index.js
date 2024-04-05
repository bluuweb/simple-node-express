import express from 'express';
import { authMiddleware } from './middlewares/auth.middleware.js'

const products = [
    { id: 1, name: "product1", price: 100 },
    { id: 2, name: "product2", price: 200 },
    { id: 3, name: "product3", price: 300 },
]

const __dirname = import.meta.dirname;

const app = express()

// app.use(authMiddleware)
app.use(express.static(__dirname + '/public'));

// middleware
app.get('/api/v1/user/profile', authMiddleware, (req, res) => {
    return res.status(200).send("tu contraseña es: 123123")
})

app.get('/api/v1/products', (req, res) => {

    // return res.json(products)

    return res.json({
        ok: true,
        products
    })
})

// Levantar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor andando en http://localhost:${PORT}`)
})