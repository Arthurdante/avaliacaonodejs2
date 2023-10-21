const ModelPetShopCliente = require('../models/modelCliente')
const ModelPetShopCachorro = require('../models/modelCachorro')
const ModelPetShopAtendimento = require('../models/modelAtendimento')
const ModelPetShopUsuario = require("../models/modelUsuario")
const bcrypt = require('bcrypt')

class RepositorioPetshop {

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

    async clienteIdJaUsado(clienteId) {
        try {
            const usuario = await ModelPetShopUsuario.findOne({
                where: { cliente_id: clienteId }
            });
    
            return usuario !== null;
        } catch (error) {
            console.error('Erro ao verificar se o cliente_id já está sendo usado:', error);
            return false;
        }
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

module.exports = RepositorioPetshop