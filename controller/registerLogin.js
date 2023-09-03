const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Replace with your secret key
const secretKey = 'Msvenkat455687';

const User = require('../models/User');

const registerUser =  async (req, res) => {
    const { username, password } = req.body;
    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
      // Find the user by username
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ error: 'Authentication failed' });
      }
  
      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Authentication failed' });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
  
      res.status(200).json({ token, message: 'Login Successfully' });    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  module.exports = {registerUser,loginUser}