const ModelPetShopCachorro = require('../models/modelCachorro')

class RepositorioCachorro {
    
    async PegarUmCachorro( id, transaction) {
        try {
            const cachorro = await ModelPetShopCachorro.findOne({
                where: { id },
                transaction,
                include: [{ model: ModelPetShopAtendimento }]
            });
    
            if (!cachorro) {
                throw new Error('Cliente não encontrado')
            }
            return cachorro
        }catch (error) {
            console.log('Erro no repositorio', error)
            res.status(500).json({ message: "Erro ao listar o nome do cachorro" })
        }
    }

    async PegarTodosCachorro() {
        return ModelPetShopCachorro.findAll()
    }

    async AddCachorro(cachorro, transaction) {
        const result = await ModelPetShopCachorro.create(cachorro, { transaction })

        return result
    }

    async UpdateCachorro(id, cachorro) {
        await ModelPetShopCachorro.update(cachorro, {
            where: {
                id
            }
        })
        return ModelPetShopCachorro.findOne({
            where: { id }
        })
    }

    async DeleteCachorro(id) {
        return ModelPetShopCachorro.destroy({
            where: { id }
        });
    }
}
module.exports = RepositorioCachorro