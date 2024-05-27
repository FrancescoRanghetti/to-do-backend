const express = require('express');
const router = express.Router();
const listService = require('../Service/ListService')

router.post('/createDefaultList/:idUser', (req, res) => {
    listService.createDefaultList(req.params.idUser, (error, tag) => {
        if (error) {
            return res.status(500).json({error: error.message});
        }
        res.status(201).json(tag);
    })
})

router.get('/getAllList/:idUser', (req, res) => {
    listService.getAllList(req.params.idUser, (error, tag) => {
        if (error) {
            return res.status(500).json({error: error.message});
        }
        res.status(200).json(tag);
    })
})

router.post('/addList/:username/:name', (req, res) => {
    listService.addList(req.params.username, req.params.name, (error, tag) => {
        if (error) {
            return res.status(500).json({error: error.message});
        }
        res.status(200).json(tag);
    })
})

router.delete('/deleteList/:idUser/:name', (req, res) => {
    listService.deleteList(req.params.idUser, req.params.name, (error, tag) => {
        if (error) {
            return res.status(500).json({error: error.message});
        }
        res.status(200).json(tag);
    })
})

router.get('/getIdListByName/:name/:idUser', (req, res) => {
    listService.getIdListByName(req.params.name, req.params.idUser, (error, tag) => {
        if (error) {
            return res.status(500).json({error: error.message});
        }
        res.status(200).json(tag);
    })
})

module.exports = router;
