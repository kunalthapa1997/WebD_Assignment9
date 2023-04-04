
// const express= require('express');
// const app = express();

// const cors= require('cors');
// const mongoose = require('mongoose')

const mainRoute = require('./routes/MainRoute');

// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017');


// app.listen(8000, ()=>{
//     console.log("Server started at port 8000");
// })

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors= require('cors');

const app = express();
app.use(cors());


// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect("mongodb://127.0.0.1:27017/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
  });


// Parse JSON data
app.use(express.json());
app.use(mainRoute);


// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
