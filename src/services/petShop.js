const RepositorioPetshop = require('../repositories/petShop')


const repositorio = new RepositorioPetshop

class ServicoPetShop {

    VerficarCliente(cliente) {
        if(!cliente){
            throw new Error('Não foi enviada o cliente para adicionar');
        } else if(!cliente.nome){
            throw new Error('Não foi enviado o nome do cliente');
        } else if(!cliente.telefone){
            throw new Error('Não foi enviado o telefone do cliente');
        }
    }

    async PegarUmCliente( id, transaction ) {
        return repositorio.PegarUmCliente( id, transaction )
    }

    async PegarTodosCliente() {
        return repositorio.PegarTodosCliente()
    }

    async AddCliente(cliente, transaction) {
        this.VerficarCliente(cliente)

        return repositorio.AddCliente(cliente, transaction);
    }

    async UpdateCliente(id, cliente) {
        if(!id) {
            throw new Error('Não foi enviada o identificador do cliente para alterar');
        } 
        this.VerficarCliente(cliente)

        return repositorio.UpdateCliente(id, cliente);
    }

    async DeletarCliente(id) {
        return repositorio.DeleteCliente(id);
    }

    VerficarCachorro(cachorro) {
        if(!cachorro){
            throw new Error('Não foi enviada o cachorro para adicionar');
        } else if(!cachorro.nome){
            throw new Error('Não foi enviado o nome do cachorro');
        } else if(!cachorro.clienteId){
            throw new Error('Não foi enviado o clienteId do Cachorro');
        }
    }

    async PegarUmCachorro( id, transaction ) {
        return repositorio.PegarUmCachorro( id, transaction )
    }

    async PegarTodosCachorro() {
        return repositorio.PegarTodosCachorro()
    }

    async AddCachorro(cachorro, transaction) {
        this.VerficarCachorro(cachorro)

        return repositorio.AddCachorro(cachorro, transaction);
    }

    async UpdateCachorro(id, cachorro) {
        if(!id) {
            throw new Error('Não foi enviada o identificador do cachorro para alterar');
        } 
        this.VerficarCachorro(cachorro)

        return repositorio.UpdateCachorro(id, cachorro);
    }

    async DeletarCachorro(id) {
        return repositorio.DeleteCachorro(id);
    }

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
module.exports = ServicoPetShop