const dbPool = require("../config/config");

const loginModel = (username) => {
  return dbPool.query(
    `SELECT *
    FROM tb_user
    WHERE username = ?`, username
  );
};

module.exports = loginModel;
