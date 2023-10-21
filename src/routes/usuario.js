const express = require("express")
const ControllerUsuario = require("../controllers/usuario.js")
const authMiddleware = require("../middleware/auth")

const controller = new ControllerUsuario()
const router = express.Router()

//router.get('/api/Atendente/:id', authMiddleware, controller.PegarUmAtendente)
//router.get('/api/Atendentes', authMiddleware, controller.PegarTodosAtendente)
router.post('/api/atendente', authMiddleware, controller.AddAtendente)
router.put('/api/atendente/:id', authMiddleware, controller.UpdateAtendente)
router.delete('/api/atendente/:id', authMiddleware, controller.DeleteAtendente)

module.exports = router