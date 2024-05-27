const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const userRoutes = require('./routes/UserRoutes');
const tagRoutes = require('./routes/TagRoutes');
const listRoutes = require('./routes/ListRoutes');
const taskRoutes = require('./routes/taskRoutes');

// Middleware per il parsing del corpo delle richieste in formato JSON
app.use(express.json());
app.use(cors({
    origin: '*', // Permette le richieste solo da questo dominio
    methods: 'GET,POST,PUT,DELETE', // Permette solo questi metodi HTTP
    credentials: true // Permette l'invio di credenziali (cookies, headers di autenticazione)
}));

// Utilizzo delle route degli utenti, dei tag e dei task
app.use('/api', userRoutes);
app.use('/api', tagRoutes);
app.use('/api', listRoutes);
app.use('/api', taskRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
