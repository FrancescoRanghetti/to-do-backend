const connection = require('../database');

class TaskRepository {
    createTask(task, callback) {
        const sql = 'INSERT INTO task (name, description, complete, idUser, idTag, idList) VALUES (?, ?, ?, ?, ?, ?)';
        connection.query(sql, [task.name, task.description, task.complete, task.idUser, task.idTag, task.idList], (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, {id: results.insertId, ...task});
        });
    }

    markTask(idTask, callback) {
        const sql = 'UPDATE task SET complete = true WHERE id = ?';
        connection.query(sql, [idTask], (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, results);
        });
    }

    demarkTask(idTask, callback) {
        const sql = 'UPDATE task SET complete = false WHERE id = ?';
        connection.query(sql, [idTask], (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, results);
        });
    }

    isCompletedTask(idTask, callback) {
        const sql = 'SELECT complete FROM task WHERE id = ?';
        connection.query(sql, [idTask], (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, results[0].complete);
        });
    }

    deleteTask(idTask, callback) {
        const sql = 'DELETE FROM task WHERE id = ?';
        connection.query(sql, [idTask], (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, results);
        });
    }

    updateTask(idTask, task, callback) {
        const sql = 'UPDATE task SET name = ?, description = ?, complete = ?, idTag = ?, idList = ? WHERE id = ?';
        connection.query(sql, [task.name, task.description, task.complete, task.idTag, task.idList, idTask], (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, results);
        });
    }

    getAllCompleteTask(idUser, idList, callback) {
        const sql = 'SELECT * FROM task WHERE idUser = ? AND idList = ? AND complete = true';
        connection.query(sql, [idUser, idList], (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, results);
        });
    }

    getAllNoCompleteTask(idUser, idList, callback) {
        const sql = 'SELECT * FROM task WHERE idUser = ? AND idList = ? AND complete = false';
        connection.query(sql, [idUser, idList], (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, results);
        });
    }

    getTaskById(idTask, callback) {
        const sql = 'SELECT * FROM task WHERE id = ?';
        connection.query(sql, [idTask], (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, results[0]);
        });
    }
}

module.exports = new TaskRepository();
