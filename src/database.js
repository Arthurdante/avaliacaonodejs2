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

//     id INT AUTO_INCREMENT PRIMARY KEY,

//     nome VARCHAR(255) NOT NULL,
   
//     raca VARCHAR(255) NOT NULL,

//     cliente_id INT,
    
//     FOREIGN KEY (cliente_id) REFERENCES clientes(id)
// );
// CREATE TABLE atendimentos (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     dia DATE NOT NULL,
//     hora TIME NOT NULL,
//     valor FLOAT NOT NULL,
//     cachorro_id INT,
//     concluido BOOLEAN NOT NULL DEFAULT FALSE,
//     FOREIGN KEY (cachorro_id) REFERENCES cachorros(id)
// );
// CREATE TABLE Usuarios (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     email VARCHAR(255) NOT NULL,
//     senha VARCHAR(255) NOT NULL,
//   );