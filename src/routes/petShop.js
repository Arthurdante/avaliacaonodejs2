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

router.get('/api/atendimento/:id', controller.PegarUmAtendimento)
router.get('/api/atendimentos', controller.PegarTodosAtendimento)
router.post('/api/atendimento', controller.AddAtendimento)
router.put('/api/atendimento/:id', controller.UpdateAtendimento)
router.delete('/api/atendimento/:id', controller.DeletarAtendimento)
module.exports = router