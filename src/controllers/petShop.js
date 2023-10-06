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
    async PegarTodosCliente(_, res){
        try {
            const result = await servico.PegarTodosCliente()
            res.status(200).json({ 
                Clientes: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao listar todos os nomes" })
        }
    }
    async AddCliente(req, res){
        try {
            const result = await servico.AddCliente(req.body.cliente)
            res.status(200).json({ 
                pessoa: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao adicionar" })
        }
    }
    async UpdateCliente(req, res){
        try {
            servico.UpdateCliente(req.params.id, req.body.cliente)
            res.status(200).json({ 
                pessoa: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao alterar" })
        }
    }
    async DeletarCliente(req, res){
        try {
            servico.DeletarCliente(req.params.id)
            res.status(200).json({ 
                message: "Nome deletado com sucesso",
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao deletar" })
        }
    }

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
                pessoa: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao adicionar" })
        }
    }
    async UpdateCachorro(req, res){
        try {
            servico.UpdateCachorro(req.params.id, req.body.cachorro)
            res.status(200).json({ 
                pessoa: result
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
                message: "Nome deletado com sucesso",
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao deletar" })
        }
    }
}
module.exports = ControllerPetShop