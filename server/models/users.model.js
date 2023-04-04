const mongoose= require('mongoose');

// Create a user schema
const User = new mongoose.Schema({
    name: {
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
  },
  {collection:'users'});
  
  
  const model = mongoose.model('users',User);

  module.exports = model;
  