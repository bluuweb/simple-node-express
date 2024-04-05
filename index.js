import express from 'express';
import { authMiddleware } from './middlewares/auth.middleware.js'

const users = [
    { id: 1, name: "user1", price: 100 },
    { id: 2, name: "user2", price: 200 },
    { id: 3, name: "user3", price: 300 },
]

const __dirname = import.meta.dirname;

const app = express()

// app.use(authMiddleware)
app.use(express.static(__dirname + '/public'));

// middleware
app.get('/api/v1/user/profile', authMiddleware, (req, res) => {
    // quiero devolver el primer usuario
    const user = users[0]
    return res.status(200).json(user)
})

app.get('/api/v1/users', (req, res) => {
    // return res.json(products)
    return res.json({
        ok: true,
        users
    })
})

// Levantar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor andando en http://localhost:${PORT}`)
})