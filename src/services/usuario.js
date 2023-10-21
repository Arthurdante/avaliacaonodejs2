const RepositorioUsuario = require('../repositories/usuario')


const repositorio = new RepositorioUsuario

class ServicoUsuario {
    async PegarUmPorEmail(email){
        if(!email.trim()) {
          throw new Error("Preencha o email")
        }
        return repositorio.PegarUmPorEmail(email)
    }
    async AddAtendente(atendente, transaction) {
    
        return repositorio.AdicionarUsuario({...atendente, permissao: 2}, transaction);
    }

    async UpdateAtendente(id, atendente) {
        if(!id) {
            throw new Error('Não foi enviada o identificador do atendente para alterar');
        }
 
        return repositorio.UpdateUsuario(id, atendente);
    }

    async DeleteAtendente(id) {
        return repositorio.DeletarUsuario(id);

    }
}
module.exports = ServicoUsuario