// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
//
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/usersRoutes');
//
// var app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// module.exports = app;
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const userRoutes = require('./routes/UserRoutes');
const tagRoutes = require('./routes/TagRoutes');
// const taskRoutes = require('./routes/taskRoutes');

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
// app.use('/api', taskRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
