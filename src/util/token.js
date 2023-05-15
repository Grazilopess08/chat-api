const jwt = require('jsonwebtoken');

const checktoken = async (token, id, key) => jwt.verify(token, key, (err, decoded) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, key, (err, decoded) => {
          if (err) {
            reject(err);
          } else {
            resolve(decoded);
          }
        });
      });
});

const setToken = async (id, key) => {
    console.log(id);
    if (id) {
        return jwt.sign({id }, key, {expiresIn: 28800});
    }
    return false;
};

module.exports = {
    checktoken,
    setToken
};