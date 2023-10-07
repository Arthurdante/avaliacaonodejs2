const { DataTypes } = require('sequelize');
const conexao = require('../database.js');
const ModelPetShopCachorro = require('./modelCachorro');

const ModelPetShopAtendimento = conexao.define('atendimentos', {
    dia: {
        type: DataTypes.DATEONLY, 
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME, 
        allowNull: false
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    cachorroId:{
        field: 'cachorro_id',
        type: DataTypes.INTEGER,
        references: {
            model: ModelPetShopCachorro,
            key: 'id'
        }
    },
    concluido: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false 
    }
},{
    createdAt: false,
    updatedAt: false
})

module.exports = ModelPetShopAtendimento