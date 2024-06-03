const connection = require("../database");

class ListRepository {
    createDefaultList(idUser, callback) {
        let listDefaultList = ["Work", "School", "Home"];
        const sql = 'INSERT INTO list (name, idUser) VALUES (?, ?)';
        for (let i = 0; i < listDefaultList.length; i++) {
            connection.query(sql, [listDefaultList.at(i), idUser], (error, results) => {
                if (error) {
                    return callback(error);
                }
                callback(null, results[0]);
            })
        }
    }

    getAllList(idUser, callback) {
        const sql = 'SELECT * FROM list WHERE idUser = ?';
        connection.query(sql, [idUser], (error, results) => {
            if (error) {
                return callback(error)
            }
            if (results.length === 0) {
                return callback(null, null);
            }
            callback(null, results);
        });
    }

    addList(name, idUser, callback) {
        const sql = 'INSERT INTO list (name, idUser) VALUES (?, ?)';
        connection.query(sql, [name, idUser], (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, {id: results.insertId, name: name, idUser: idUser});
        });
    }

    getIdListByName(name, idUser, callback) {
        const sql = 'SELECT * FROM list WHERE name = ? AND idUser = ?';
        connection.query(sql, [name, idUser], (error, results) => {
            if (error) {
                console.log("Error: " + error)
                return callback(error);
            }
            if (results.length === 0) {
                return callback(null, null);
            }
            callback(null, results);
        });
    }

    deleteList(name, idUser, callback) {
        const sql = 'DELETE FROM list WHERE idUser = ? AND name = ?';
        connection.query(sql, [idUser, name], (error, result) => {
            if (error) {
                return callback(error)
            }
            callback(null, result);
        })
    }
}

module.exports = new ListRepository();
