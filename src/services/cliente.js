const RepositorioCliente = require('../repositories/cliente')


const repositorio = new RepositorioCliente

class ServicoCliente {

    async PegarUmPorEmail(email){
        if(!email.trim()) {
          throw new Error("Preencha o email")
        }
        return repositorio.PegarUmPorEmail(email)
    }
    
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

    async AddCliente(cliente, userid, transaction) {
        this.VerficarCliente(cliente)

        return repositorio.AddCliente(cliente, userid, transaction);
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

    async AdicionarUsuario(usuario){
        
        if(!usuario.email) {
            throw new Error("Favor preencher o email.")
        } else if(!usuario.senha) {
            throw new Error("Favor preencher o senha.")
        }
  
        return repositorio.AdicionarUsuario({...usuario, permissao: 1})
    }

}
module.exports = ServicoCliente