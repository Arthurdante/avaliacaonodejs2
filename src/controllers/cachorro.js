const ServicoCachorro = require('../services/cachorro')
const servico = new ServicoCachorro()

class ControllerCachorro{
    async PegarUmCachorro(req, res){
        try {
            const result = await servico.PegarUmCachorro(req.params.id)
            res.status(200).json({ 
                Cachorro: result 
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao pegar um nome" })
        }
    }
    async PegarTodosCachorro(_, res){
        try {
            const result = await servico.PegarTodosCachorro()
            res.status(200).json({ 
                Cachorros: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao listar todos os nomes" })
        }
    }
    async AddCachorro(req, res){
        try {
            const result = await servico.AddCachorro(req.body.cachorro)
            res.status(200).json({ 
                Cachorros: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao adicionar" })
        }
    }
    async UpdateCachorro(req, res){
        try {
            const result = await servico.UpdateCachorro(req.params.id, req.body.cachorro)
            res.status(200).json({ 
                Cachorros: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao alterar" })
        }
    }
    async DeletarCachorro(req, res){
        try {
            servico.DeletarCachorro(req.params.id)
            res.status(200).json({ 
                message: "Cachorros deletado com sucesso",
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao deletar" })
        }
    }
}
module.exports = ControllerCachorro