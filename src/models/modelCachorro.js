const { DataTypes } = require('sequelize')
const conexao = require('../database.js')
const ModelPetShopCliente = require('../models/modelCliente')

const ModelPetShopCachorro = conexao.define('cachorros', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    raca: {
        type: DataTypes.STRING
    },
    clienteId:{
        field: 'cliente_id',
        type: DataTypes.INTEGER,
        references: {
            model: ModelPetShopCliente,
            key: 'id'
        }
    }
}, {
    createdAt: false,
    updatedAt: false
})

module.exports = ModelPetShopCachorro