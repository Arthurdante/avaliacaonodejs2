const express = require("express")
const ControllerPetShop = require("../controllers/petShop.js")

const controller = new ControllerPetShop()
const router = express.Router()

router.get('/api/cliente/:id', controller.PegarUmCliente)
router.get('/api/nome', controller.PegarTodos)
router.post('/api/nome', controller.Adicionar)
router.put('/api/nome/:index', controller.Alterar)
router.delete('/api/nome/:index', controller.Deletar)
module.exports = router