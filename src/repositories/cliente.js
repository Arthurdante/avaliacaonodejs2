const ModelPetShopCliente = require('../models/modelCliente')
const bcrypt = require('bcrypt')

class RepositorioCliente {

    async PegarUmPorEmail(email){
        if(!email.trim()) {
          throw new Error("Preencha o email")
        }
        return repositorio.PegarUmPorEmail(email)
    }
    
    async PegarUmCliente( id, transaction) {
        try {
            const cliente = await ModelPetShopCliente.findOne({
                where: { id },
                transaction,
                include: [{ model: ModelPetShopCachorro }]
            });
    
            if (!cliente) {
                throw new Error('Cliente não encontrado')
            }
            return cliente
        }catch (error) {
            console.log('Erro no repositorio', error)
            res.status(500).json({ message: "Erro ao listar o nome do cliente" })
        }
    }
    async PegarTodosCliente() {
        return ModelPetShopCliente.findAll()
    }

    async AddCliente(cliente, userid, transaction) {
        const result = await ModelPetShopCliente.create({...cliente, usuarioId: userid}, { transaction })

        return result
    }

    async UpdateCliente(id, cliente) {
        await ModelPetShopCliente.update(cliente, {
            where: {
                id
            }
        })
        return ModelPetShopCliente.findOne({
            where: { id }
        })
    }

    async DeleteCliente(id) {
        return ModelPetShopCliente.destroy({
            where: { id }
        });
    }
}
module.exports = RepositorioCliente