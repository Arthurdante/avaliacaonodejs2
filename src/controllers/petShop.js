const ServicoPetShop = require('../services/petShop')

const servico = new ServicoPetShop()

class ControllerPetShop{

    async PegarUmCliente(req, res){
        try {
            const result = await servico.PegarUmCliente(req.params.id)
            res.status(200).json({ 
                Cliente: result 
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao pegar um nome" })
        }
    }
    async PegarTodosCliente(req, res){
        try {
            const result = servico.PegarTodos()
            res.status(200).json({ 
                nomes: result
            })
        } catch (error) {
            res.status(500).json({ message: "Erro ao listar todos os nomes" })
        }
    }
    async Adicionar(req, res){
        try {
            const result = servico.Adicionar(req.body.nome)
            res.status(200).json({ 
                message: "Nome adicionado com sucesso",
            })
        } catch (error) {
            res.status(500).json({ message: "Erro ao adicionar" })
        }
    }
    async Alterar(req, res){
        try {
            servico.Alterar(req.params.index, req.body.nome)
            res.status(200).json({ 
                message: "Nome alterado com sucesso",
            })
        } catch (error) {
            res.status(500).json({ message: "Erro ao alterar" })
        }
    }
    async Deletar(req, res){
        try {
            servico.Deletar(req.params.index)
            res.status(200).json({ 
                message: "Nome deletado com sucesso",
            })
        } catch (error) {
            res.status(500).json({ message: "Erro ao deletar" })
        }
    }
}
module.exports = ControllerPetShop