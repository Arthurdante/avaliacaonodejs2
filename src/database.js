const { Sequelize } = require('sequelize')
const { development } = require('./config')

const conexao = new Sequelize(development)
conexao.sync()
    .then(() => {
        console.log('Conectado ao banco com sucesso!')
    })
    .catch((error) => {
        console.log('Não conectou ao banco de dados', error)
    })


module.exports = conexao

// CREATE DATABASE PetShop;

// CREATE TABLE clientes (

//     id INT AUTO_INCREMENT PRIMARY KEY,
   
//     nome VARCHAR(255) NOT NULL,
   
//     telefone VARCHAR(9) NOT NULL UNIQUE
   
// );

// CREATE TABLE cachorros (

//     nome VARCHAR(255) NOT NULL,
   
//     raca VARCHAR(255) NOT NULL,

//     cliente_id INT,
    
//     FOREIGN KEY (cliente_id) REFERENCES clientes(id);
// );