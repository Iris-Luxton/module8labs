const {db} = require("../dB/db");

var getUserbyNamePwdAsync = function (name, password) {
    return new Promise(function (resolve, reject) {
      let sql = `SELECT * FROM users where username = ? and password = ?`;
      db.query(sql, [name, password], (err, result) => {
        if (err) {
          console.log(err.message);
          reject(err);
          return;
        }         
        resolve(result);
      });
    });
  };

  module.exports = {
    getUserbyNamePwdAsync
  };