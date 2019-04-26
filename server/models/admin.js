const pool = require('../config/mysql-connection');
const bcrypt = require('bcryptjs');

module.exports = {
    checkLogin: (userInput, callback) => {
        pool.query(`SELECT * FROM users WHERE email='${userInput.email}' AND role=${userInput.type}`, (err, results) => {
            if (err) {
                return callback({ 'error': err }, null);
            } else {
                if (results.length) {
                    bcrypt.compare(userInput.password, results[0].password)
                    .then((result) => {
                        if (result) {
                            return callback(null, results[0]);
                        } else {
                            return callback({ 'error': 'Invalid Credentials' }, null);
                        }
                    })
                    .catch((err) => {
                        return callback({ 'error': err }, null);
                    });
                } else {
                    return callback({ 'error': 'Invalid Credentials' }, null);
                }
            }
        });
    },
    createUser: (userInput, callback) => {
        
    }
}