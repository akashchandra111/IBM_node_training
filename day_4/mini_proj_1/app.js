const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const port = 3000;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const itemRouter  = require('./routes/items');

const app = express();

mongoose.connect('mongodb://localhost:27017/mydb01',  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { 
      console.log('local mongo connected.');
    })
    .catch(err => { 
        console.error('mongo conn. error:', err.stack);
        process.exit(1);
    });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/items', itemRouter);

console.log('\n\n------- Note: -----------------');
console.log("to add an item: http://localhost:3000/items/add");
console.log("to view all the existing items: http://localhost:3000/items");
console.log('------------------------\n\n');


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
