import express from 'express';
const app = express()



// Levantar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor andando en http://localhost:${PORT}`)
})