const ModelPetShopCliente = require('../models/modelCliente')
const ModelPetShopCachorro = require('../models/modelCachorro')

class RepositorioPetshop {

    async PegarUmCliente( id, transaction) {
        return ModelPetShopCliente.findOne({
            where: { id },
            transaction
        })
    }

    async PegarTodosCliente() {
        return ModelPetShopCliente.findAll()
    }

    async AddCliente(cliente, transaction) {
        const result = await ModelPetShopCliente.create(cliente, { transaction })

        return result
    }

    async UpdateCliente(id, cliente) {
        const result = await ModelPetShopCliente.update(cliente, {
            where: {
                id
            }
        })

        console.log(result)

        return result
    }

    async DeleteCliente(id) {
        return ModelPetShopCliente.destroy({
            where: { id }
        });
    }

    async PegarUmCachorro( id, transaction) {
        return ModelPetShopCachorro.findOne({
            where: { id },
            transaction
        })
    }

    async PegarTodosCachorro() {
        return ModelPetShopCachorro.findAll()
    }

    async AddCachorro(cachorro, transaction) {
        const result = await ModelPetShopCachorro.create(cachorro, { transaction })

        return result
    }

    async UpdateCachorro(id, cachorro) {
        const result = await ModelPetShopCachorro.update(cachorro, {
            where: {
                id
            }
        })

        console.log(result)

        return result
    }

    async DeleteCachorro(id) {
        return ModelPetShopCachorro.destroy({
            where: { id }
        });
    }

}
module.exports = RepositorioPetshop