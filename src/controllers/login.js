const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const loginModel = require('../models/login');

const loginController = async (req, res) => {
  try {
    const user = await loginModel(req.body.username);

    if (!user[0].length) {
      res.json({
        error: "User do not exist!",
      });
      return null;
    }
      const password = req.body.password;

      bcrypt.compare(password, user[0][0].password, function (err, result) {
        
        if(err || !result) {
          res.json({
            message: "Wrong password/username!"
          });
          return null;
        }
        
        else if (result) {
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
      
          res.status(200).json({
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
