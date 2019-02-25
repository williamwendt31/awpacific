const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'awpacific'
});

pool.query('SELECT * FROM users;', (error, results, fields) => {
    if (error) {
        throw error;
    }

    console.log('The result is: ', results);
    console.log('The fields are: ', fields);
});

module.exports = pool;