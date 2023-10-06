const ModelPetShopCliente = require('../models/modelCliente')

class RepositorioPetshop {

    async PegarUmCliente( id ) {
        return ModelPetShopCliente.findOne({
            where: { id }
        })
    }

    async PegarTodosCliente() {
        return ModelPetShopCliente.findAll()
    }

    async Adicionar(nome) {
        return nomes.push(nome)
    } 

    async Alterar(index, nome) {
        return nomes[index] = nome
    }

    async Deletar(index) {
        return nomes.splice(index, 1)
    }

}
module.exports = RepositorioPetshop