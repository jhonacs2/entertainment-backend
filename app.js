const express = require('express');
const morgan = require('morgan')
const app = express()
require('dotenv').config()
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next()
})

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use('/', indexRouter);
app.use('/api/v1/scrap', usersRouter)

module.exports = app;
