const express = require('express');
const router = express.Router();
const userService = require('../Service/UserService');

// Route per creare un nuovo utente
// router.post('/addUser', (req, res) => {
//   userService.createUser(req.body, (error, user) => {
//     if (error) {
//       return res.status(500).json({ error: error.message });
//     }
//     res.status(201).json(user);
//   });
// });
router.post('/addUser', (req, res) => {
  console.log('Received user data:', req.body); // Log per vedere i dati ricevuti
  userService.createUser(req.body, (error, user) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(201).json(user);
  });
});


router.get('/getUser/:username', (req, res) => {
  userService.getUserById(req.params.username, (error, user) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  });
});

router.get('/loginUser/:username/:password', (req, res) => {
  userService.loginUser(req.params.username, req.params.password, (error, user) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!user) {
      return res.status(404).json({ message: 'Credential invalid' });
    }
    res.json(user);
  });
});

// Altre route come update, delete, ecc.

module.exports = router;