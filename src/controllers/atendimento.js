const ServicoAtendimento = require('../services/atendimento')
const servico = new ServicoAtendimento()

class ControllerAtendimento{
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
module.exports = ControllerAtendimento