var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post('/admin-login', (req, res) => {
  const { adminName, adminPassword } = req.body;

  if (adminName === 'mehul' && adminPassword === 'bookachoda') {
    res.redirect('/adminpannel');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

app.post('/add-patient', async (req, res) => {
  try {
    const { patientName, address, hospitalsVisited } = req.body;

    const newPatient = new Patient({
      patientName,
      address,
      hospitalsVisited,
    });

    // Save the new patient to the database
    await newPatient.save();

    console.log('Patient added:', newPatient); // Log successful addition

    res.status(200).send('Patient added successfully');
  } catch (error) {
    console.error('Error adding patient:', error); // Log any errors
    res.status(500).send('Error adding patient');
  }
});


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
