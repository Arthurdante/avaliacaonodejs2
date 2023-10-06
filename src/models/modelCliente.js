const { DataTypes } = require('sequelize')
const conexao = require('../database.js')

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
    telerfone: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
})

module.exports = ModelPetShopCliente