const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const vehicle = require('./routes/api/vehicle');

const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.log(err));

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
