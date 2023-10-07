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
                Cliente: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao adicionar" })
        }
    }
    async UpdateCliente(req, res){
        try {
            const result = await servico.UpdateCliente(req.params.id, req.body.cliente)
            res.status(200).json({ 
                Cliente: result
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
                message: "Cliente deletado com sucesso",
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

    async PegarUmAtendimento(req, res){
        try {
            const result = await servico.PegarUmAtendimento(req.params.id)
            res.status(200).json({ 
                Atendimento: result 
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao pegar o atendimento" })
        }
    }
    async PegarTodosAtendimento(_, res){
        try {
            const result = await servico.PegarTodosAtendimento()
            res.status(200).json({ 
                Atendimentos: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao listar todos os atendimentos" })
        }
    }
    async AddAtendimento(req, res){
        try {
            const result = await servico.AddAtendimento(req.body.atendimento)
            res.status(200).json({ 
                Atendimentos: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao adicionar" })
        }
    }
    async UpdateAtendimento(req, res){
        try {
            const result = await servico.UpdateAtendimento(req.params.id, req.body.atendimento)
            res.status(200).json({ 
                Atendimentos: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao alterar" })
        }
    }
    async DeletarAtendimento(req, res){
        try {
            servico.DeletarAtendimento(req.params.id)
            res.status(200).json({ 
                message: "Atendimento deletado com sucesso",
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao deletar" })
        }
    }
}
module.exports = ControllerPetShop