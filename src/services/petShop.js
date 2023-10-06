const RepositorioPetshop = require('../repositories/petShop')


const repositorio = new RepositorioPetshop

class ServicoPetShop {
    PegarUm( id ) {
        return repositorio.PegarUm( id )
    }

    PegarTodos() {
        return repositorio.PegarTodos()
    }

    Adicionar(nome) {
        if(!nome){
            throw new Error("Favor peencher o nome")
        }
        return repositorio.Adicionar(nome)
    }
    Alterar(index, nome) {
        if(!nome){
            throw new Error("Favor peencher o nome")
        }else if(!index || isNaN(index)){
            throw new Error("Favor informar um index válido")
        }
        return repositorio.Alterar(index, nome)
    }
    Deletar(index) {
        return repositorio.Deletar(index)
    }
}
module.exports = ServicoPetShop