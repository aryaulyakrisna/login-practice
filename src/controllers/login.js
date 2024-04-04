const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginModel = require("../models/login");
const { validationResult } = require("express-validator");

const loginController = async (req, res) => {
  try {
    const user = await loginModel(req.body.username);
    const invalid = validationResult(req); // Check if req is invalid

    if (!invalid.isEmpty()) {
      return res.status(400).json({ errors: invalid.array() });
    }

    if (!user[0].length) {
      return res.json({
        error: "User do not exist!",
      });
    }
    const password = req.body.password;

    bcrypt.compare(password, user[0][0].password, function (err, result) {
      if (err || !result) {
        return res.json({
          message: "Wrong password/username!",
        });
      } else if (result) {
        const token = jwt.sign(
          {
            id: user[0][0].id,
            username: user[0][0].username,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );

        return res.status(200).json({
          username: user[0][0].username,
          token,
        });
      }
    });
  } catch (error) {
    res.json({
      message: "Failed login attempt",
    });
  }
};

module.exports = loginController;
