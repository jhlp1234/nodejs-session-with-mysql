const mysql = require("mysql");
const options = require("./options.json");
const connection = mysql.createConnection({
    host: options.host,
    user: options.user,
    password: options.password,
    database: options.database
})

connection.connect();

module.exports = connection;