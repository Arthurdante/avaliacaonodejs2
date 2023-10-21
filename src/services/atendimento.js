const RepositorioAtendimento = require('../repositories/atendimento')


const repositorio = new RepositorioAtendimento

class ServicoAtendimento {

    VerficarAtendimento(atendimento) {
        if(!atendimento){
            throw new Error('Não foi enviada o atendimento para adicionar');
        } else if(!atendimento.cachorroId){
            throw new Error('Não foi enviado o cachorroId do atendimento');
        }
    }

    async PegarUmAtendimento( id, transaction ) {
        return repositorio.PegarUmAtendimento( id, transaction )
    }

    async PegarTodosAtendimento() {
        return repositorio.PegarTodosAtendimento()
    }

    async AddAtendimento(atendimento, transaction) {
        this.VerficarAtendimento(atendimento)

        return repositorio.AddAtendimento(atendimento, transaction);
    }

    async UpdateAtendimento(id, atendimento) {
        if(!id) {
            throw new Error('Não foi enviada o identificador do Atendimento para alterar');
        } 
        this.VerficarAtendimento(atendimento)

        return repositorio.UpdateAtendimento(id, atendimento);
    }

    async DeletarAtendimento(id) {
        return repositorio.DeleteAtendimento(id);
    }
    
}
module.exports = ServicoAtendimento