
const Login= require('../controllers/Users');
const router = require('express').Router();
const express = require('express');

// Get all users
// router.get('/getAll', async (req, res) => {
//     try {
//       const users = await User.find();
//       res.json(users);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });

router.get('/getAll',Login);

module.exports = router;