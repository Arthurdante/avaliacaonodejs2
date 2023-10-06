const { DataTypes } = require('sequelize')
const conexao = require('../database.js')

const ModelPetShopCachorro = conexao.define('cachorros', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    raca: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
})

module.exports = ModelPetShopCachorro