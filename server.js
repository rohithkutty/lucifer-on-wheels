/*jshint esversion: 6 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const vehicle = require('./routes/api/vehicle');

const app = express();

// DB config
const db = require('./config/keys').mongoURI;

//Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(db)
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Sample route
app.get('/hello', (req, res) => {
  res.send('Hello');
});

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/vehicle', vehicle);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`server listening on port ${port}`));
