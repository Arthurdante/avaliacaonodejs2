const RepositorioCachorro = require('../repositories/cachorro')


const repositorio = new RepositorioCachorro

class ServicoCachorro {

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
module.exports = ServicoCachorro