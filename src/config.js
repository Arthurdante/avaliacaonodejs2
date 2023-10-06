require('dotenv').config()

module.exports = {
    development: {
        username: 'root',
        password:  '',
        database: process.env.DATABASE_URL,
        host: 'localhost',
        dialect: 'mysql2'
    }
}
// require('dotenv').config()

// module.exports = {
//     development: {
//         username: process.env.USER,
//         password:  process.env.PASSWORD,
//         database: process.env.DATABASE_URL,
//         host: process.env.HOST,
//         dialect: process.env.DIALECT
//     }
// }