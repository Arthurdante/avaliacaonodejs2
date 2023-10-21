const ModelPetShopAtendimento = require('../models/modelAtendimento')

class RepositorioAtendimento {

    async PegarUmAtendimento( id, transaction) {
        
        return await ModelPetShopAtendimento.findOne({
            where: { id },
            transaction,
        });
    
    }

    async PegarTodosAtendimento() {
        return ModelPetShopAtendimento.findAll()
    }

    async AddAtendimento(atendimento, transaction) {
        const result = await ModelPetShopAtendimento.create(atendimento, { transaction })

        return result
    }

    async UpdateAtendimento(id, atendimento) {
        await ModelPetShopAtendimento.update(atendimento, {
            where: {
                id
            }
        })
        return ModelPetShopAtendimento.findOne({
            where: { id }
        })
    }

    async DeleteAtendimento(id) {
        return ModelPetShopAtendimento.destroy({
            where: { id }
        });
    }
}
module.exports = RepositorioAtendimento