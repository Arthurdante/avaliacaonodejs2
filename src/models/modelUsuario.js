const { DataTypes } = require('sequelize')
const sequelize = require('../database.js');
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
    cliente_id: {
        type: DataTypes.INTEGER,
        references: {
            model: ModelPetShopCliente, 
            key: 'id',
        }
    },
    permissao: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    createdAt: false,
    updatedAt: false,
})

module.exports = ModelPetShopUsuario