const { DataTypes } = require('sequelize')
const sequelize = require('../database.js')
const ModelPetShopCliente = require('../models/modelCliente')


const ModelPetShopUsuario = sequelize.define('Usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    permissao: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    createdAt: false,
    updatedAt: false,
})





module.exports = ModelPetShopUsuario