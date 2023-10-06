const express = require("express")
const ControllerPetShop = require("../controllers/petShop.js")

const controller = new ControllerPetShop()
const router = express.Router()

router.get('/api/cliente/:id', controller.PegarUmCliente)
router.get('/api/clientes', controller.PegarTodosCliente)
router.post('/api/cliente', controller.AddCliente)
router.put('/api/cliente/:id', controller.UpdateCliente)
router.delete('/api/cliente/:id', controller.DeletarCliente)

router.get('/api/cachorro/:id', controller.PegarUmCachorro)
router.get('/api/cachorros', controller.PegarTodosCachorro)
router.post('/api/cachorro', controller.AddCachorro)
router.put('/api/cachorro/:id', controller.UpdateCachorro)
router.delete('/api/cachorro/:id', controller.DeletarCachorro)
module.exports = router