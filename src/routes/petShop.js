const express = require("express")
const ControllerPetShop = require("../controllers/petShop.js")
const authMiddleware = require("../middleware/auth")

const controller = new ControllerPetShop()
const router = express.Router()

router.post("/api/login", controller.Login);
router.post("/api/signin", controller.AdicionarUsuario);
router.post('/api/adm', authMiddleware, controller.AdicionarAdm);

router.get('/api/cliente/:id', authMiddleware, controller.PegarUmCliente)
router.get('/api/clientes', authMiddleware, controller.PegarTodosCliente)
router.post('/api/cliente', authMiddleware, controller.AddCliente)
router.put('/api/cliente/:id', authMiddleware, controller.UpdateCliente)
router.delete('/api/cliente/:id', authMiddleware, controller.DeletarCliente)

router.get('/api/cachorro/:id', authMiddleware, controller.PegarUmCachorro)
router.get('/api/cachorros', authMiddleware, controller.PegarTodosCachorro)
router.post('/api/cachorro', authMiddleware, controller.AddCachorro)
router.put('/api/cachorro/:id', authMiddleware, controller.UpdateCachorro)
router.delete('/api/cachorro/:id', authMiddleware, controller.DeletarCachorro)

router.get('/api/atendimento/:id', authMiddleware, controller.PegarUmAtendimento)
router.get('/api/atendimentos', authMiddleware, controller.PegarTodosAtendimento)
router.post('/api/atendimento', authMiddleware, controller.AddAtendimento)
router.put('/api/atendimento/:id', authMiddleware, controller.UpdateAtendimento)
router.delete('/api/atendimento/:id', authMiddleware, controller.DeletarAtendimento)
module.exports = router