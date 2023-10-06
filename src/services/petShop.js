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
}
module.exports = ServicoPetShop