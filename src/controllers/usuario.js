const ServicoUsuario = require('../services/usuario')
const servico = new ServicoUsuario()


class ControllerUsuario{
    async AddAtendente(req, res){
        try {
            if(req.session.permissao != 0){
                throw new Error("Permissão negada")
            }
            const result = await servico.AddAtendente(req.body.atendente)
            res.status(200).json({
                Usuarios: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao adicionar" })
        }
    }
    async UpdateAtendente(req, res){
        try {
            const result = await servico.UpdateAtendente(req.params.id, req.body.atendente)
            res.status(200).json({
                Usuarios: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao alterar" })
        }
    }
    async DeleteAtendente(req, res){
        try {
            servico.DeleteAtendente(req.params.id)
            res.status(200).json({
                message: "Usuário deletado com sucesso",
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao deletar" })
        }
    }
}
module.exports = ControllerUsuario