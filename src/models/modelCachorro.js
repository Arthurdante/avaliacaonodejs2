const { DataTypes } = require('sequelize')
const conexao = require('../database.js')
const ModelPetShopCliente = require('../models/modelCliente')
const ModelPetShopAtendimento = require('../models/modelAtendimento')

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
ModelPetShopAtendimento.belongsTo(ModelPetShopCachorro, { foreignKey: 'cachorroId' })
ModelPetShopCachorro.hasMany(ModelPetShopAtendimento, { foreignKey: 'cachorroId' })

module.exports = ModelPetShopCachorro