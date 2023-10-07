const { DataTypes } = require('sequelize')
const conexao = require('../database.js')
const ModelPetShopCachorro = require('../models/modelCachorro')

const ModelPetShopCliente = conexao.define('clientes', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    createdAt: false,
    updatedAt: false,
})
ModelPetShopCachorro.belongsTo(ModelPetShopCliente, { foreignKey: 'clienteId' })
ModelPetShopCliente.hasMany(ModelPetShopCachorro, { foreignKey: 'clienteId' })

module.exports = ModelPetShopCliente