const ModelPetShopUsuario = require("../models/modelUsuario")
const bcrypt = require('bcrypt')

class RepositorioUsuario {
    async PegarUmPorEmail(email){
        return ModelPetShopUsuario.findOne({
            where: {
                email
            }
        })
    }

    async AdicionarUsuario(usuario){
        const hashsenha = await bcrypt.hash(usuario.senha, 10)

        return ModelPetShopUsuario.create({ ...usuario, senha: hashsenha})
    }

    async UpdateUsuario(usuario){
        const hashsenha = await bcrypt.hash(usuario.senha, 10)

        return ModelPetShopUsuario.update({ ...usuario, senha: hashsenha})

    }

    async DeletarUsuario(id){

        return ModelPetShopUsuario.destroy({
            where: {
                id
            }
        })
    }
}
module.exports = RepositorioUsuario