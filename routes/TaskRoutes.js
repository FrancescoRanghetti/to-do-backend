const express = require('express');
const router = express.Router();
const taskService = require('../Service/TaskService');

router.post('/createTask', (req, res) => {
    taskService.createTask(req.body, (error, task) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(201).json(task);
    });
});

router.post('/markTask/:idTask', (req, res) => {
    taskService.markTask(req.params.idTask, (error, result) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(result);
    });
});

router.post('/demarkTask/:idTask', (req, res) => {
    taskService.demarkTask(req.params.idTask, (error, result) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(result);
    });
});

router.get('/isCompletedTask/:idTask', (req, res) => {
    taskService.isCompletedTask(req.params.idTask, (error, isComplete) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json({ isComplete });
    });
});

router.delete('/deleteTask/:idTask', (req, res) => {
    taskService.deleteTask(req.params.idTask, (error, result) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(result);
    });
});

router.put('/updateTask/:idTask', (req, res) => {
    taskService.updateTask(req.params.idTask, req.body, (error, result) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(result);
    });
});

router.get('/getAllCompleteTask/:idUser/:idList', (req, res) => {
    taskService.getAllCompleteTask(req.params.idUser, req.params.idList, (error, tasks) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(tasks);
    });
});

router.get('/getAllNoCompleteTask/:idUser/:idList', (req, res) => {
    taskService.getAllNoCompleteTask(req.params.idUser, req.params.idList, (error, tasks) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(tasks);
    });
});

router.get('/getTaskById/:idTask', (req, res) => {
    taskService.getTaskById(req.params.idTask, (error, task) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(task);
    });
});

module.exports = router;
