const mainRoute = require('./routes/MainRoute');
const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');
const app = express();

app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
  });

// Parse JSON data
app.use(express.json());
app.use('/user', mainRoute);

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
