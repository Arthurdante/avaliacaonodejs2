const express = require('express')
const app = express()
const port = 3000

const Router = require('./src/routes/petShop.js');

app.use(express.json())
app.use(Router)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})