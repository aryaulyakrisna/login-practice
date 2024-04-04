const jwt = require("jsonwebtoken");
const registerModel = require("../models/register");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator"); 

const registerController = async (req, res) => {
  try {
    const unvalid = validationResult(req); // Check if req is valid
    if (!unvalid.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const username = req.body.username;
    const password = req.body.password;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    await registerModel(username, hash);
    res.json({
      message: "Registered successfully!",
    });
  } catch (error) {
    res.json({
      message: "Error registering",
    });
  }
};

module.exports = registerController;
