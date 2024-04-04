const express = require('express');
const loginController = require('../controllers/login');
const router = express.Router();
const { body } = require("express-validator"); // Middleware

router.post("/", [
  body('username').trim().notEmpty().withMessage('Username can not be empty!'), // Check if username exists
  body('password').trim().notEmpty().withMessage('Password can not be empty!'), // Check if password exists
], loginController);

module.exports = router;
