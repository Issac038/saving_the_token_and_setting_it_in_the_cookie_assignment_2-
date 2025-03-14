const jwt = require("jsonwebtoken");

const encrypt = (payload, secret) => {
  return jwt.sign(payload, secret, { expiresIn: "1h" }); // Token expires in 1 hour
};

module.exports = encrypt;
