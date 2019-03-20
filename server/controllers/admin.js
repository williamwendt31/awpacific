const pool = require('../config/mysql-connection');

module.exports = {
    home: (req, res) => {
        pool.query('SELECT * FROM users;', (err, results) => {
            if (err) {
                res.json({ 'error': err });
            } else {
                res.json({ 'success': results });
            }
        });
    }
}