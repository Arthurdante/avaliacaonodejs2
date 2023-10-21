const { DataTypes } = require('sequelize')
const conexao = require('../database.js')
const ModelPetShopCachorro = require('../models/modelCachorro')
const ModelPetShopUsuario = require("../models/modelUsuario")

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
    },
    usuarioId: {
        field: 'usuario_id',
        type: DataTypes.INTEGER,
        references: {
            model: ModelPetShopUsuario,
            key: 'id'
        }
    }
}, {
    createdAt: false,
    updatedAt: false,
})
ModelPetShopCachorro.belongsTo(ModelPetShopCliente, { foreignKey: 'clienteId' })
ModelPetShopCliente.hasMany(ModelPetShopCachorro, { foreignKey: 'clienteId' })



module.exports = ModelPetShopCliente