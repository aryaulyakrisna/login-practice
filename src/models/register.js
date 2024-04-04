const dbPool = require('../config/config');

const registerModel = (username, password) => {
  return dbPool.query(
    "INSERT INTO `tb_user` (`username`, `password`) VALUES (?, ?)", [username, password]
  );
}

module.exports = registerModel;

