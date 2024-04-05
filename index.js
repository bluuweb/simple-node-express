import express from 'express';
import { authMiddleware } from './middlewares/auth.middleware.js'

const app = express()

// app.use(authMiddleware)
app.use(express.static('public'));

// middleware
app.get('/api/v1/user/profile', authMiddleware, (req, res) => {
    res.status(200).send("tu contraseña es: 123123")
})

// Levantar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor andando en http://localhost:${PORT}`)
})