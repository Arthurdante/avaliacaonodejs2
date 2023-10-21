const express = require("express")
const ControllerCachorro = require("../controllers/cachorro.js")
const authMiddleware = require("../middleware/auth")

const controller = new ControllerCachorro()
const router = express.Router()

router.get('/api/cachorro/:id', authMiddleware, controller.PegarUmCachorro)
router.get('/api/cachorros', authMiddleware, controller.PegarTodosCachorro)
router.post('/api/cachorro', authMiddleware, controller.AddCachorro)
router.put('/api/cachorro/:id', authMiddleware, controller.UpdateCachorro)
router.delete('/api/cachorro/:id', authMiddleware, controller.DeletarCachorro)

module.exports = router