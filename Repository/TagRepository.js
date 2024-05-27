const connection = require('../database');

class TagRepository {
    createDefaultTag(idUser, callback) {
        let listDefaultTag = ["Important", "To do", "In progress"];
        const sql = 'INSERT INTO tag (name, idUser) VALUES (?, ?)';
        for (let i = 0; i < listDefaultTag.length; i++) {
            connection.query(sql, [listDefaultTag.at(i), idUser], (error, results) => {
                if (error) {
                    return callback(error);
                }
                callback(null, results[0]);
            })
        }
    }

    getAllTag(idUser, callback) {
        const sql = 'SELECT * FROM tag WHERE idUser = ?';
        connection.query(sql, [idUser], (error, results) => {
            if (error) {
                return callback(error);
            }
            if (results.length === 0) {
                return callback(null, null);
            }
            callback(null, results);
        });
    }

    addTag(username, name, callback) {
        const sqlGetIdUser = 'SELECT id FROM user WHERE username = ?';
        connection.query(sqlGetIdUser, [username], (error, results) => {
            if (error) {
                return callback(error);
            }
            if (results.length === 0) {
                return callback(new Error('User not found'));
            }
            const idUser = results[0].id;
            const sql = 'INSERT INTO tag (name, idUser) VALUES (?, ?)';
            connection.query(sql, [name, idUser], (error, results) => {
                if (error) {
                    return callback(error);
                }
                callback(null, {id: results.insertId, name: name, idUser: idUser});
            });
        });
    }

    addTagByIdUser(name, idUser, callback) {
        const sql = 'INSERT INTO tag (name, idUser) VALUES (?, ?)';
        connection.query(sql, [name, idUser], (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, {id: results.insertId, name: name, idUser: idUser});
        });
    }

    renameTag() {
        // ToDO vedere se implementare anche il rename del tag
    }

    deleteTag(idUser, name, callback) {
        const sql = 'DELETE FROM tag WHERE idUser = ? AND name = ?'
        connection.query(sql, [idUser, name], (error, result) => {
            if (error) {
                return callback(error)
            }
            callback(null, result);
        })
    }
}

module.exports = new TagRepository();