import React from 'react';
import NavbarComp from './components/Layout/NavbarComp';

function App() {
  return (
    <div className="App">
      <NavbarComp />
    </div>
  );
}

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect("mongodb://127.0.0.1:27017/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
  });


// Create a user schema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Invalid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 50
  }
});

// Hash the password before saving it to the database
userSchema.pre('save', async function(next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);

  user.password = hashedPassword;
  next();
});

// Create a user model
const User = mongoose.model('User', userSchema);

// Parse JSON data
app.use(bodyParser.json());


// Create a new user
app.post('/user/create', async (req, res) => {
  const { fullName, email, password } = req.body;

  // Check if email and password are valid
  if (!email || !password || password.length < 8) {
    return res.status(400).send({ message: 'Invalid email or password' });
  }

  // Check if full name is valid
  if (!fullName || fullName.length < 5 || fullName.length > 50) {
    return res.status(400).send({ message: 'Invalid full name' });
  }

  // Check if the email already exists in the database
  const userExists = await User.findOne({ email: email });

  if (userExists) {
    return res.status(400).send({ message: 'Email already exists' });
  }

  // Create a new user
  const user = new User({
    fullName: fullName,
    email: email,
    password: password
  });

  try {
    await user.save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (err) {
    res.status(400).send({ message: 'Error creating user' });
  }
});


// Update user details
app.put('/user/edit', async (req, res) => {
  const { email, fullName, password } = req.body;

  // Check if email and password are valid
  if (!email || !password || password.length < 8) {
    return res.status(400).send({ message: 'Invalid email or password' });
  }

  // Check if full name is valid
  if (!fullName || fullName.length < 5 || fullName.length > 50) {
    return res.status(400).send({ message: 'Invalid full name' });
  }

  // Check if the user exists in the database
const userExists = await User.findOne({ email: email });

if (!userExists) {
    return res.status(404).send({ message: 'User not found' });
}

// Update user details
userExists.fullName = fullName;
userExists.password = password;

try {
    await userExists.save();
    res.send({ message: 'User details updated successfully' });
} catch (err) {
    res.status(400).send({ message: 'Error updating user details' });
  }
});


// Delete user by email
app.delete('/user/delete', async (req, res) => {
    const { email } = req.body;

    // Check if email is valid
    if (!email) {
        return res.status(400).send({ message: 'Invalid email' });
    }

    // Find the user by email and delete it
    try {
        const deletedUser = await User.findOneAndDelete({ email: email });

        if (deletedUser) {
            res.send({ message: 'User deleted successfully' });
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (err) {
        res.status(400).send({ message: 'Error deleting user' });
        }
});
        
        
// Get all users
app.get('/user/getAll', async (req, res) => {
    try {
        const users = await User.find({}, 'fullName email password');
        res.send(users);

    } catch (err) {
        res.status(400).send({ message: 'Error getting users' });
    }
});
    
// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});



export default App;
