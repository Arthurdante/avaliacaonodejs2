const express = require('express')
const app = express()
const port = 3000

const RouterCliente = require('./src/routes/cliente.js');
const RouterAtendimento = require('./src/routes/atendimento.js');
const RouterUsuario = require('./src/routes/usuario.js');
const RouterCachorro = require('./src/routes/cachorro.js');

app.use(express.json())
app.use(RouterCliente)
app.use(RouterAtendimento)
app.use(RouterUsuario)
app.use(RouterCachorro)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})