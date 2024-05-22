const express = require('express');
const router = express.Router();
const tagService = require('../Service/TagService')

router.post('/createDefaultTag/:idUser', (req, res) => {
    tagService.createDefaultTag(req.params.idUser, (error, tag) => {
        if (error) {
            return res.status(500).json({error: error.message});
        }
        res.status(201).json(tag)
    })
})

router.get('/getAllTag/:idUser', (req, res) => {
    tagService.getAllTag(req.params.idUser, (error, tag) => {
        if (error) {
            return res.status(500).json({error: error.message});
        }
        res.status(200).json(tag)
    })
})

router.post('/addTag/:username/:name', (req, res) => {
    tagService.addTag(req.params.username, req.params.name, (error, tag) => {
        if (error) {
            return res.status(500).json({error: error.message});
        }
        res.status(200).json(tag)
    })
})

router.delete('/deleteTag/:idUser/:name', (req, res) => {
    tagService.deleteTag(req.params.idUser, req.params.name, (error, tag) => {
        if (error) {
            return res.status(500).json({error: error.message});
        }
        res.status(200).json(tag)
    })
})

module.exports = router;