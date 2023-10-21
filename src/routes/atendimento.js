const express = require("express")
const ControllerAtendimento = require("../controllers/atendimento.js")
const authMiddleware = require("../middleware/auth")

const controller = new ControllerAtendimento()
const router = express.Router()

router.get('/api/atendimento/:id', authMiddleware, controller.PegarUmAtendimento)
router.get('/api/atendimentos', authMiddleware, controller.PegarTodosAtendimento)
router.post('/api/atendimento', authMiddleware, controller.AddAtendimento)
router.put('/api/atendimento/:id', authMiddleware, controller.UpdateAtendimento)
router.delete('/api/atendimento/:id', authMiddleware, controller.DeletarAtendimento)
module.exports = router