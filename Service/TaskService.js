const taskRepository = require('../Repository/TaskRepository');

class TaskService {
    createTask(taskData, callback) {
        taskRepository.createTask(taskData, callback);
    }

    markTask(idTask, callback) {
        taskRepository.markTask(idTask, callback);
    }

    demarkTask(idTask, callback) {
        taskRepository.demarkTask(idTask, callback);
    }

    isCompletedTask(idTask, callback) {
        taskRepository.isCompletedTask(idTask, callback);
    }

    deleteTask(idTask, callback) {
        taskRepository.deleteTask(idTask, callback);
    }

    updateTask(idTask, taskData, callback) {
        taskRepository.updateTask(idTask, taskData, callback);
    }

    getAllCompleteTask(idUser, idList, callback) {
        taskRepository.getAllCompleteTask(idUser, idList, callback);
    }

    getAllNoCompleteTask(idUser, idList, callback) {
        taskRepository.getAllNoCompleteTask(idUser, idList, callback);
    }

    getTaskById(idTask, callback) {
        taskRepository.getTaskById(idTask, callback);
    }
}

module.exports = new TaskService();
