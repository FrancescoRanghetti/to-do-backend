const connection = require('../database');
const User = require('../models/User');

class UserRepository {
    createUser(user, callback) {
        console.log(user)
        const sql = 'INSERT INTO user (name, lastName, username, password) VALUES (?, ?, ?, ?)';
        connection.query(sql, [user.name, user.lastName, user.username, user.password], (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, {id: results.insertId, ...user});
        });
    }

    getUserById(username, callback) {
        const sql = 'SELECT * FROM user WHERE username = ?';
        connection.query(sql, [username], (error, results) => {
            if (error) {
                return callback(error);
            }
            if (results.length === 0) {
                return callback(null, null);
            }
            const user = new User(results[0].id, results[0].name, results[0].lastName, results[0].username, results[0].password);
            callback(null, user);
        });
    }

    loginUser(username, password, callback) {
        const sql = 'SELECT * FROM user WHERE username = ? AND password = ?';
        connection.query(sql, [username, password], (error, results) => {
            if (error) {
                return callback(error);
            }
            if (results.length === 0) {
                return callback(null, null);
            }
            const user = new User(results[0].id, results[0].name, results[0].lastName, results[0].username, results[0].password);
            callback(null, user);
        });
    }
}

module.exports = new UserRepository();
